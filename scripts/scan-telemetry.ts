#!/usr/bin/env npx tsx
/**
 * agent-snitch-list — Weekly Telemetry Scanner
 *
 * Scans tracked tools for telemetry-related changes:
 *   Phase 1: GitHub commit messages mentioning telemetry keywords
 *   Phase 2: Privacy/telemetry policy page content hashing (Playwright)
 *   Phase 3: New releases / tags on tracked repos
 *
 * Usage:
 *   npx tsx scripts/scan-telemetry.ts
 *   npx tsx scripts/scan-telemetry.ts --dry-run          # Seed baseline, no change alerts
 *   npx tsx scripts/scan-telemetry.ts --create-issues    # Auto-create GitHub issues
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import os from 'node:os';
import { execFile, type ExecFileException } from 'node:child_process';
import { promisify } from 'node:util';
import { chromium } from 'playwright';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const TOOLS_JSON = path.join(ROOT, 'data/tools.json');
const PAGE_HASHES = path.join(ROOT, 'data/page-hashes.json');
const SCAN_STATE = path.join(ROOT, 'data/scan-state.json');
const REPORTS_DIR = path.join(ROOT, 'reports');
const PID_FILE = path.join(os.homedir(), '.agent-snitch-scanner.pid');

const TELEMETRY_KEYWORDS = [
  'posthog', 'segment', 'amplitude', 'mixpanel', 'rudderstack',
  'google-analytics', 'sentry', 'bugsnag', 'crashlytics', 'rollbar',
  'datadog', 'telemetry', 'analytics', 'tracking', 'phone-home',
  'phone_home', 'metrics', 'usage-data', 'usage_data', 'diagnostics',
  'opentelemetry', 'otlp', 'opt-out', 'opt_out', 'opt-in', 'opt_in',
  'disable-telemetry', 'disable_telemetry', 'consent', 'statsig',
  'launchdarkly', 'heap', 'fullstory', 'hotjar',
];

const GITHUB_CONCURRENCY = 5;
const GITHUB_DELAY_MS = 100;
const PAGE_TIMEOUT_MS = 30_000;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ToolEntry {
  name: string;
  slug: string;
  repo: string | null;
  repoUrl: string | null;
  repoStatus: string;
  category: string;
  telemetry: boolean | null;
  defaultState: string;
  analyticsProviders: string[];
  disableMethod: string | null;
  collectsCode: boolean | null;
  collectsPrompts: boolean | null;
  dataCollected: string | null;
  privacyUrl: string | null;
  sourceEvidence: string | null;
  lastVerified: string;
  redFlags: string[];
  notes: string | null;
}

interface PageHash {
  url: string;
  sha256: string;
  textSnippet: string;
  lastChecked: string;
  lastChanged: string;
}

interface ScanState {
  lastScanDate: string | null;
  lastKnownTags: Record<string, string>;
  lastKnownCommitShas: Record<string, string>;
}

interface CommitMatch {
  repo: string;
  toolName: string;
  sha: string;
  message: string;
  date: string;
  matchedFiles: string[];
  matchedKeywords: string[];
}

interface PageChange {
  tool: string;
  slug: string;
  url: string;
  oldHash?: string;
  newHash?: string;
  lastChanged?: string;
  error?: string;
}

interface ReleaseChange {
  repo: string;
  toolName: string;
  previousTag: string;
  newTag: string;
  publishedAt: string;
  url: string;
}

interface ScanReport {
  date: string;
  toolsScanned: number;
  reposChecked: number;
  privacyPagesChecked: number;
  commitMatches: CommitMatch[];
  pageChanges: PageChange[];
  releaseChanges: ReleaseChange[];
  errors: string[];
  isDryRun: boolean;
}

// ---------------------------------------------------------------------------
// PID Guard
// ---------------------------------------------------------------------------

function acquirePidLock(): boolean {
  if (fs.existsSync(PID_FILE)) {
    const existingPid = parseInt(fs.readFileSync(PID_FILE, 'utf-8').trim(), 10);
    try {
      process.kill(existingPid, 0);
      console.error(`Scanner already running (PID ${existingPid}). Exiting.`);
      return false;
    } catch {
      // Stale PID file — previous process is gone
      console.log(`Removing stale PID file (PID ${existingPid}).`);
    }
  }
  fs.writeFileSync(PID_FILE, String(process.pid));
  return true;
}

function setupSignalHandlers(): void {
  const cleanup = () => {
    try { fs.unlinkSync(PID_FILE); } catch { /* ignore */ }
    process.exit(0);
  };
  process.on('SIGTERM', cleanup);
  process.on('SIGINT', cleanup);
  process.on('exit', () => {
    try { fs.unlinkSync(PID_FILE); } catch { /* ignore */ }
  });
}

// ---------------------------------------------------------------------------
// GitHub API Helper (delegates to `gh` CLI for auth)
// ---------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

async function ghApi(
  endpoint: string,
  queryParams: Record<string, string | number> = {},
): Promise<any> {
  const qs = Object.entries(queryParams)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  const fullEndpoint = qs ? `${endpoint}?${qs}` : endpoint;
  const args = ['api', fullEndpoint];

  try {
    const { stdout } = await execFileAsync('gh', args, {
      maxBuffer: 10 * 1024 * 1024,
    });
    return JSON.parse(stdout);
  } catch (err: unknown) {
    const execErr = err as ExecFileException & { stderr?: string };
    if (execErr.stderr?.includes('404') || execErr.stderr?.includes('Not Found')) {
      return null;
    }
    if (execErr.stderr?.includes('rate limit') || execErr.stderr?.includes('403')) {
      throw new Error(`GitHub API rate limit: ${execErr.stderr}`);
    }
    throw err;
  }
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

const sleep = (ms: number): Promise<void> => new Promise(r => setTimeout(r, ms));

async function processBatches<T, R>(
  items: T[],
  batchSize: number,
  delayMs: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
    if (i + batchSize < items.length) await sleep(delayMs);
  }
  return results;
}

// ---------------------------------------------------------------------------
// Phase 1: GitHub Commit Scanning
// ---------------------------------------------------------------------------

async function scanRepoCommits(
  tools: ToolEntry[],
  scanState: ScanState,
  errors: string[],
): Promise<CommitMatch[]> {
  const repoTools = tools.filter(
    t => t.repo && (t.repoStatus === 'open-source' || t.repoStatus === 'partial'),
  );
  console.log(`Phase 1: Scanning ${repoTools.length} repos for telemetry commits...`);

  const since =
    scanState.lastScanDate ||
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const allMatches: CommitMatch[] = [];

  const results = await processBatches(
    repoTools,
    GITHUB_CONCURRENCY,
    GITHUB_DELAY_MS,
    async (tool): Promise<CommitMatch[]> => {
      const matches: CommitMatch[] = [];
      try {
        const commits = await ghApi(`repos/${tool.repo}/commits`, {
          since,
          per_page: 50,
        });
        if (!commits || !Array.isArray(commits)) return matches;

        for (const commit of commits.slice(0, 20)) {
          const msg = (commit.commit?.message || '').toLowerCase();
          const msgMatches = TELEMETRY_KEYWORDS.filter(kw => msg.includes(kw));

          if (msgMatches.length > 0) {
            let matchedFiles: string[] = [];
            try {
              const detail = await ghApi(
                `repos/${tool.repo}/commits/${commit.sha}`,
              );
              if (detail?.files) {
                matchedFiles = detail.files
                  .filter((f: any) =>
                    TELEMETRY_KEYWORDS.some(kw =>
                      f.filename.toLowerCase().includes(kw),
                    ),
                  )
                  .map((f: any) => f.filename);
              }
            } catch {
              /* skip detail-fetch failures */
            }

            matches.push({
              repo: tool.repo!,
              toolName: tool.name,
              sha: commit.sha.substring(0, 12),
              message: commit.commit.message.split('\n')[0].substring(0, 120),
              date: commit.commit.author?.date || '',
              matchedFiles,
              matchedKeywords: msgMatches,
            });
          }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(`GitHub scan failed for ${tool.repo}: ${msg}`);
      }
      return matches;
    },
  );

  for (const batch of results) {
    if (Array.isArray(batch)) allMatches.push(...batch);
  }

  console.log(`  Found ${allMatches.length} telemetry-related commits.`);
  return allMatches;
}

// ---------------------------------------------------------------------------
// Phase 2: Privacy Page Hashing (Playwright)
// ---------------------------------------------------------------------------

async function scanPrivacyPages(
  tools: ToolEntry[],
  isDryRun: boolean,
  errors: string[],
): Promise<PageChange[]> {
  const pageTools = tools.filter(t => t.privacyUrl);
  console.log(`Phase 2: Checking ${pageTools.length} privacy pages...`);

  let pageHashes: Record<string, PageHash> = {};
  try {
    if (fs.existsSync(PAGE_HASHES)) {
      pageHashes = JSON.parse(fs.readFileSync(PAGE_HASHES, 'utf-8'));
    }
  } catch {
    /* start fresh */
  }

  const changes: PageChange[] = [];
  let browser;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent:
        'AgentSnitchList-Scanner/1.0 (+https://github.com/pwchiefy/agent-snitch-list)',
    });

    for (const tool of pageTools) {
      try {
        const page = await context.newPage();
        await page.goto(tool.privacyUrl!, {
          waitUntil: 'domcontentloaded',
          timeout: PAGE_TIMEOUT_MS,
        });

        // Allow JS-rendered SPAs time to settle after DOM load
        await page.waitForTimeout(5000);

        const textContent = await page.evaluate(() => document.body.innerText);
        const hash = crypto
          .createHash('sha256')
          .update(textContent)
          .digest('hex');

        const existing = pageHashes[tool.slug];
        if (existing && existing.sha256 !== hash && !isDryRun) {
          changes.push({
            tool: tool.name,
            slug: tool.slug,
            url: tool.privacyUrl!,
            oldHash: existing.sha256,
            newHash: hash,
            lastChanged: existing.lastChanged,
          });
        }

        pageHashes[tool.slug] = {
          url: tool.privacyUrl!,
          sha256: hash,
          textSnippet: textContent.substring(0, 200).replace(/\n/g, ' '),
          lastChecked: new Date().toISOString(),
          lastChanged:
            existing && existing.sha256 !== hash
              ? new Date().toISOString()
              : existing?.lastChanged || new Date().toISOString(),
        };

        await page.close();
        console.log(`  [ok] ${tool.name}`);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(
          `Privacy page failed for ${tool.name} (${tool.privacyUrl}): ${msg}`,
        );
        changes.push({
          tool: tool.name,
          slug: tool.slug,
          url: tool.privacyUrl!,
          error: msg,
        });
        console.log(`  [fail] ${tool.name}: ${msg}`);
      }
    }

    await browser.close();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    errors.push(`Playwright browser launch failed: ${msg}`);
    console.error(`  Browser launch failed: ${msg}`);
  }

  // Persist updated hashes
  fs.writeFileSync(PAGE_HASHES, JSON.stringify(pageHashes, null, 2));

  console.log(
    `  ${changes.filter(c => !c.error).length} pages changed, ${changes.filter(c => c.error).length} errors.`,
  );
  return changes;
}

// ---------------------------------------------------------------------------
// Phase 3: New Releases / Tags
// ---------------------------------------------------------------------------

async function scanNewReleases(
  tools: ToolEntry[],
  scanState: ScanState,
  errors: string[],
): Promise<ReleaseChange[]> {
  const repoTools = tools.filter(
    t => t.repo && (t.repoStatus === 'open-source' || t.repoStatus === 'partial'),
  );
  console.log(`Phase 3: Checking ${repoTools.length} repos for new releases...`);

  const changes: ReleaseChange[] = [];

  await processBatches(
    repoTools,
    GITHUB_CONCURRENCY,
    GITHUB_DELAY_MS,
    async (tool): Promise<void> => {
      try {
        const releases = await ghApi(`repos/${tool.repo}/releases`, {
          per_page: 1,
        });

        if (!releases || !Array.isArray(releases) || releases.length === 0) {
          // Fall back to tags
          const tags = await ghApi(`repos/${tool.repo}/tags`, { per_page: 1 });
          if (tags && Array.isArray(tags) && tags.length > 0) {
            const latestTag = tags[0].name;
            if (scanState.lastKnownTags[tool.repo!] !== latestTag) {
              changes.push({
                repo: tool.repo!,
                toolName: tool.name,
                previousTag:
                  scanState.lastKnownTags[tool.repo!] || '(first scan)',
                newTag: latestTag,
                publishedAt: '',
                url: `https://github.com/${tool.repo}/releases/tag/${latestTag}`,
              });
              scanState.lastKnownTags[tool.repo!] = latestTag;
            }
          }
          return;
        }

        const latest = releases[0];
        const latestTag: string = latest.tag_name;
        if (scanState.lastKnownTags[tool.repo!] !== latestTag) {
          changes.push({
            repo: tool.repo!,
            toolName: tool.name,
            previousTag:
              scanState.lastKnownTags[tool.repo!] || '(first scan)',
            newTag: latestTag,
            publishedAt: latest.published_at || '',
            url:
              latest.html_url ||
              `https://github.com/${tool.repo}/releases/tag/${latestTag}`,
          });
          scanState.lastKnownTags[tool.repo!] = latestTag;
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(`Release check failed for ${tool.repo}: ${msg}`);
      }
    },
  );

  console.log(`  ${changes.length} new releases detected.`);
  return changes;
}

// ---------------------------------------------------------------------------
// Report Generation (Markdown)
// ---------------------------------------------------------------------------

function generateReport(report: ScanReport): string {
  const lines: string[] = [];
  const label = report.isDryRun
    ? 'Initial Baseline Scan'
    : 'Telemetry Scan Report';

  lines.push(`# ${label} — ${report.date}`);
  lines.push('');
  lines.push(`Scan completed: ${new Date().toISOString()}`);
  lines.push(
    `Tools scanned: ${report.toolsScanned} | Repos checked: ${report.reposChecked} | Privacy pages checked: ${report.privacyPagesChecked}`,
  );
  lines.push('');

  // Phase 1 ------------------------------------------------------------------
  lines.push('---');
  lines.push('');
  lines.push('## Telemetry Code Changes (GitHub)');
  lines.push('');

  if (report.commitMatches.length === 0) {
    lines.push('No telemetry-related commits detected since last scan.');
  } else {
    const byRepo: Record<string, CommitMatch[]> = {};
    for (const m of report.commitMatches) {
      (byRepo[m.repo] ??= []).push(m);
    }
    for (const [repo, matches] of Object.entries(byRepo)) {
      lines.push(`### ${matches[0].toolName} (\`${repo}\`)`);
      for (const m of matches) {
        lines.push(
          `- **\`${m.sha}\`** (${m.date.substring(0, 10)}): ${m.message}`,
        );
        if (m.matchedKeywords.length > 0) {
          lines.push(`  - Keywords: ${m.matchedKeywords.join(', ')}`);
        }
        if (m.matchedFiles.length > 0) {
          lines.push(`  - Files: ${m.matchedFiles.join(', ')}`);
        }
      }
      lines.push('');
    }
  }

  // Phase 2 ------------------------------------------------------------------
  lines.push('---');
  lines.push('');
  lines.push('## Privacy Policy Changes');
  lines.push('');

  const realChanges = report.pageChanges.filter(c => !c.error && c.oldHash);
  const pageErrors = report.pageChanges.filter(c => c.error);

  if (realChanges.length === 0 && pageErrors.length === 0) {
    lines.push('No privacy policy changes detected.');
  } else {
    if (realChanges.length > 0) {
      lines.push('| Tool | URL | Status |');
      lines.push('|------|-----|--------|');
      for (const c of realChanges) {
        lines.push(
          `| **${c.tool}** | [${c.url}](${c.url}) | **CHANGED** (last changed: ${c.lastChanged || 'unknown'}) |`,
        );
      }
      lines.push('');
    }
    if (pageErrors.length > 0) {
      lines.push('### Unreachable Pages');
      lines.push('');
      for (const e of pageErrors) {
        lines.push(`- **${e.tool}** (${e.url}): ${e.error}`);
      }
      lines.push('');
    }
  }

  // Phase 3 ------------------------------------------------------------------
  lines.push('---');
  lines.push('');
  lines.push('## New Releases');
  lines.push('');

  if (report.releaseChanges.length === 0) {
    lines.push('No new releases detected.');
  } else {
    lines.push('| Tool | Repo | Previous | New | Published |');
    lines.push('|------|------|----------|-----|-----------|');
    for (const r of report.releaseChanges) {
      const pub = r.publishedAt ? r.publishedAt.substring(0, 10) : '---';
      lines.push(
        `| ${r.toolName} | \`${r.repo}\` | ${r.previousTag} | [${r.newTag}](${r.url}) | ${pub} |`,
      );
    }
  }

  // Errors -------------------------------------------------------------------
  if (report.errors.length > 0) {
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push('## Errors & Warnings');
    lines.push('');
    for (const e of report.errors) {
      lines.push(`- ${e}`);
    }
  }

  // Summary ------------------------------------------------------------------
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(
    `- **${report.commitMatches.length}** telemetry-related commits found`,
  );
  lines.push(`- **${realChanges.length}** privacy policy pages changed`);
  lines.push(
    `- **${report.releaseChanges.filter(r => r.previousTag !== '(first scan)').length}** new releases (${report.releaseChanges.filter(r => r.previousTag === '(first scan)').length} first-time baselines)`,
  );
  lines.push(`- **${pageErrors.length}** pages unreachable`);
  lines.push(`- **${report.errors.length}** errors encountered`);

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Optional: Auto-create GitHub Issues for Significant Changes
// ---------------------------------------------------------------------------

async function createIssuesForChanges(report: ScanReport): Promise<void> {
  const significantCommits = report.commitMatches;
  const significantPageChanges = report.pageChanges.filter(
    c => !c.error && c.oldHash,
  );

  if (significantCommits.length === 0 && significantPageChanges.length === 0) {
    return;
  }

  // Group changes by tool name
  const toolChanges = new Map<
    string,
    { commits: CommitMatch[]; pageChange?: PageChange }
  >();

  for (const c of significantCommits) {
    const existing = toolChanges.get(c.toolName) || { commits: [] };
    existing.commits.push(c);
    toolChanges.set(c.toolName, existing);
  }
  for (const p of significantPageChanges) {
    const existing = toolChanges.get(p.tool) || { commits: [] };
    existing.pageChange = p;
    toolChanges.set(p.tool, existing);
  }

  for (const [toolName, changes] of toolChanges) {
    const bodyLines = [
      `## Automated Scanner Report — ${report.date}`,
      '',
    ];

    if (changes.commits.length > 0) {
      bodyLines.push('### Telemetry Code Changes');
      for (const c of changes.commits) {
        bodyLines.push(`- \`${c.sha}\`: ${c.message}`);
        bodyLines.push(`  Keywords: ${c.matchedKeywords.join(', ')}`);
      }
      bodyLines.push('');
    }

    if (changes.pageChange) {
      bodyLines.push('### Privacy Policy Changed');
      bodyLines.push(`URL: ${changes.pageChange.url}`);
      bodyLines.push('');
    }

    bodyLines.push('---');
    bodyLines.push(
      '*This issue was automatically created by the agent-snitch-list scanner. Please verify and update the tool entry accordingly.*',
    );

    try {
      await execFileAsync('gh', [
        'issue',
        'create',
        '--repo',
        'pwchiefy/agent-snitch-list',
        '--title',
        `[Scanner] Changes detected: ${toolName}`,
        '--body',
        bodyLines.join('\n'),
        '--label',
        'scanner,needs-review',
      ]);
      console.log(`  Created issue for ${toolName}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`  Failed to create issue for ${toolName}: ${msg}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  const shouldCreateIssues = args.includes('--create-issues');

  console.log('\n  Agent Snitch List — Telemetry Scanner');
  console.log(`   ${new Date().toISOString()}`);
  console.log(
    `   Mode: ${isDryRun ? 'DRY RUN (seeding baseline)' : 'LIVE'}`,
  );
  console.log('');

  // PID guard
  if (!acquirePidLock()) {
    process.exit(1);
  }
  setupSignalHandlers();

  try {
    // Load tools
    const tools: ToolEntry[] = JSON.parse(
      fs.readFileSync(TOOLS_JSON, 'utf-8'),
    );
    console.log(`Loaded ${tools.length} tools from tools.json`);

    // Load scan state
    let scanState: ScanState = {
      lastScanDate: null,
      lastKnownTags: {},
      lastKnownCommitShas: {},
    };
    try {
      if (fs.existsSync(SCAN_STATE)) {
        scanState = JSON.parse(fs.readFileSync(SCAN_STATE, 'utf-8'));
      }
    } catch {
      /* start fresh */
    }

    // Ensure reports dir exists
    if (!fs.existsSync(REPORTS_DIR)) {
      fs.mkdirSync(REPORTS_DIR, { recursive: true });
    }

    const errors: string[] = [];
    const today = new Date().toISOString().substring(0, 10);

    // Phase 1: GitHub commits
    const commitMatches = await scanRepoCommits(tools, scanState, errors);

    // Phase 2: Privacy pages
    const pageChanges = await scanPrivacyPages(tools, isDryRun, errors);

    // Phase 3: New releases
    const releaseChanges = await scanNewReleases(tools, scanState, errors);

    // Build report
    const repoTools = tools.filter(
      t =>
        t.repo &&
        (t.repoStatus === 'open-source' || t.repoStatus === 'partial'),
    );
    const pageTools = tools.filter(t => t.privacyUrl);

    const report: ScanReport = {
      date: today,
      toolsScanned: tools.length,
      reposChecked: repoTools.length,
      privacyPagesChecked: pageTools.length,
      commitMatches,
      pageChanges,
      releaseChanges,
      errors,
      isDryRun,
    };

    // Generate and save Markdown report
    const reportMd = generateReport(report);
    const reportPath = path.join(REPORTS_DIR, `${today}-scan.md`);
    fs.writeFileSync(reportPath, reportMd);
    console.log(`\nReport saved to: ${reportPath}`);

    // Persist scan state
    scanState.lastScanDate = new Date().toISOString();
    fs.writeFileSync(SCAN_STATE, JSON.stringify(scanState, null, 2));

    // Optional: create GitHub issues
    if (shouldCreateIssues && !isDryRun) {
      await createIssuesForChanges(report);
    }

    // Print summary
    console.log('\n=== SCAN COMPLETE ===');
    console.log(
      `  Commits with telemetry keywords: ${commitMatches.length}`,
    );
    console.log(
      `  Privacy pages changed: ${pageChanges.filter(c => !c.error && c.oldHash).length}`,
    );
    console.log(`  New releases: ${releaseChanges.length}`);
    console.log(`  Errors: ${errors.length}`);
  } finally {
    // PID cleanup happens via signal handler / exit hook
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  try {
    fs.unlinkSync(PID_FILE);
  } catch {
    /* ignore */
  }
  process.exit(1);
});
