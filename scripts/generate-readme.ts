#!/usr/bin/env npx tsx
/**
 * generate-readme.ts
 *
 * Reads data/tools.json and regenerates the data-driven parts of README.md:
 * the tool count in the intro, the badges, the "At a Glance" counts, the
 * legend and the full tool table. Everything outside the
 * `<!-- BEGIN GENERATED:<name> -->` / `<!-- END GENERATED:<name> -->`
 * markers (Why This Exists, Red Flags, Privacy Champions, ...) is hand-written
 * and left untouched.
 *
 * Usage:
 *   npx tsx scripts/generate-readme.ts            # print the updated README to stdout
 *   npx tsx scripts/generate-readme.ts --write    # write it back to README.md
 *
 * Output is deterministic (no wall-clock timestamps): the "last updated"
 * badge uses the most recent `lastVerified` date in tools.json, so CI can
 * diff the committed README against a fresh run.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(SCRIPT_DIR, "..");
const TOOLS_JSON_PATH = resolve(ROOT_DIR, "data", "tools.json");
const README_PATH = resolve(ROOT_DIR, "README.md");
const REPO_URL = "https://github.com/pwchiefy/agent-snitch-list";

// ---------------------------------------------------------------------------
// Types (mirror data/tools.json)
// ---------------------------------------------------------------------------

type DefaultState = "on" | "off" | "opt-in" | "conditional" | "saas" | "unknown";

type Category =
  | "coding-agent"
  | "ide-extension"
  | "code-review"
  | "code-generation"
  | "security-scanning"
  | "agent-framework"
  | "terminal-ai"
  | "mcp-server";

type RepoStatus = "open-source" | "closed-source" | "partial" | "archived";

interface Tool {
  name: string;
  slug: string;
  repo: string | null;
  repoUrl: string | null;
  repoStatus: RepoStatus;
  category: Category;
  telemetry: boolean | null;
  defaultState: DefaultState;
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

// ---------------------------------------------------------------------------
// Labels
// ---------------------------------------------------------------------------

const CATEGORY_EMOJI: Record<Category, string> = {
  "coding-agent": "\u{1F916}", // 🤖
  "ide-extension": "\u{1F50C}", // 🔌
  "code-review": "\u{1F50D}", // 🔍
  "code-generation": "\u{1F3D7}️", // 🏗️
  "security-scanning": "\u{1F6E1}️", // 🛡️
  "agent-framework": "\u{1F9E9}", // 🧩
  "terminal-ai": "\u{1F4BB}", // 💻
  "mcp-server": "\u{1F517}", // 🔗
};

const CATEGORY_LABELS: Record<Category, string> = {
  "coding-agent": "Coding Agent",
  "ide-extension": "IDE Extension",
  "code-review": "Code Review",
  "code-generation": "Code Generation",
  "security-scanning": "Security Scanning",
  "agent-framework": "Agent Framework",
  "terminal-ai": "Terminal AI",
  "mcp-server": "MCP Server",
};

const STATE_EMOJI: Record<DefaultState, string> = {
  on: "\u{1F534}", // 🔴
  off: "\u{1F7E2}", // 🟢
  "opt-in": "\u{1F7E1}", // 🟡
  conditional: "\u{1F535}", // 🔵
  saas: "☁️", // ☁️
  unknown: "⚫", // ⚫
};

/** Short label used in the table's Default State column. */
const STATE_SHORT: Record<DefaultState, string> = {
  on: "ON",
  off: "None",
  "opt-in": "Opt-in",
  conditional: "Conditional",
  saas: "SaaS",
  unknown: "Unknown",
};

/** Label used in the legend. */
const STATE_LEGEND: Record<DefaultState, string> = {
  on: "ON by default",
  off: "None",
  "opt-in": "Opt-in",
  conditional: "Conditional",
  saas: "SaaS-inherent",
  unknown: "Unknown",
};

/** Rows of the "At a Glance" table, in display order. */
const GLANCE_ROWS: { state: DefaultState; label: string; meaning: string }[] = [
  { state: "on", label: "Telemetry ON by default", meaning: "Phones home the moment you install it" },
  { state: "opt-in", label: "Opt-in / asks first", meaning: "Telemetry exists but requires your consent" },
  { state: "off", label: "No telemetry", meaning: "Zero phone-home behavior detected" },
  { state: "unknown", label: "Unknown", meaning: "Closed-source or undocumented, couldn't verify" },
  { state: "conditional", label: "Conditional", meaning: "Depends on build, deployment mode or configuration" },
  { state: "saas", label: "SaaS-inherent", meaning: "Cloud-only; telemetry is the product" },
];

/** Table sort order: worst first, then alphabetical within each group. */
const STATE_SORT_ORDER: DefaultState[] = ["on", "conditional", "saas", "opt-in", "off", "unknown"];

const REPO_STATUS_LABEL: Record<RepoStatus, string> = {
  "open-source": "Yes",
  "closed-source": "No",
  partial: "Partial",
  archived: "Archived",
};

const DISABLE_MAX = 90;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadTools(): Tool[] {
  if (!existsSync(TOOLS_JSON_PATH)) {
    console.error(`Error: ${TOOLS_JSON_PATH} not found.`);
    process.exit(1);
  }
  const data = JSON.parse(readFileSync(TOOLS_JSON_PATH, "utf-8"));
  if (!Array.isArray(data)) {
    console.error("Error: tools.json must be a JSON array.");
    process.exit(1);
  }
  return data as Tool[];
}

function sortTools(tools: Tool[]): Tool[] {
  const idx = (s: DefaultState) => {
    const i = STATE_SORT_ORDER.indexOf(s);
    return i === -1 ? STATE_SORT_ORDER.length : i;
  };
  return [...tools].sort((a, b) => {
    const d = idx(a.defaultState) - idx(b.defaultState);
    if (d !== 0) return d;
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });
}

function cell(s: string): string {
  return s.replace(/\r?\n/g, " ").replace(/\|/g, "\\|").trim();
}

function yesNo(v: boolean | null): string {
  if (v === true) return "Yes";
  if (v === false) return "No";
  return "Unknown";
}

/**
 * Shorten a disable method to its first clause for the summary table.
 * The full text is always on the tool page linked from the Details column.
 */
function shortDisable(t: Tool): string {
  const raw = (t.disableMethod ?? "").replace(/\s+/g, " ").trim();
  if (!raw) return "—";
  let s = raw;
  const clauseEnd = s.search(/;\s|\.\s/);
  if (clauseEnd > 0) s = s.slice(0, clauseEnd);
  let truncated = s.length < raw.replace(/[.;]$/, "").length;
  if (s.length > DISABLE_MAX) {
    const cut = s.lastIndexOf(" ", DISABLE_MAX);
    s = s.slice(0, cut > 40 ? cut : DISABLE_MAX).replace(/[,(:\s]+$/, "");
    truncated = true;
  }
  // Never leave an unbalanced inline-code span.
  if ((s.match(/`/g) ?? []).length % 2 === 1) {
    s = s.slice(0, s.lastIndexOf("`")).replace(/[,(:\s]+$/, "");
    truncated = true;
  }
  s = s.replace(/[.;]$/, "");
  return truncated ? `${s} …` : s;
}

function countBy<K extends string>(tools: Tool[], key: (t: Tool) => K): Map<K, number> {
  const m = new Map<K, number>();
  for (const t of tools) m.set(key(t), (m.get(key(t)) ?? 0) + 1);
  return m;
}

function latestVerified(tools: Tool[]): string {
  return tools.map((t) => t.lastVerified).sort().at(-1) ?? "";
}

// ---------------------------------------------------------------------------
// Generated blocks
// ---------------------------------------------------------------------------

function genIntro(tools: Tool[]): string {
  const mcp = tools.filter((t) => t.category === "mcp-server").length;
  return (
    `A community-maintained audit of telemetry, analytics, and data collection in ` +
    `${tools.length} AI coding tools, agent frameworks and MCP servers (${mcp} of them MCP servers).`
  );
}

function genBadges(tools: Tool[]): string {
  const last = latestVerified(tools).replace(/-/g, "--");
  return [
    `[![Tools Tracked](https://img.shields.io/badge/tools_tracked-${tools.length}-blueviolet?style=for-the-badge)](${REPO_URL})`,
    `[![Last Updated](https://img.shields.io/badge/last_updated-${last}-informational?style=for-the-badge)](${REPO_URL}/commits/main)`,
    `[![License: CC BY-SA 4.0](https://img.shields.io/badge/license-CC_BY--SA_4.0-lightgrey?style=for-the-badge)](LICENSE)`,
    `[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)`,
  ].join("\n");
}

function genGlance(tools: Tool[]): string {
  const byState = countBy(tools, (t) => t.defaultState);
  const lines = [`| Status | Count | Meaning |`, `|--------|-------|---------|`];
  for (const r of GLANCE_ROWS) {
    lines.push(`| ${STATE_EMOJI[r.state]} ${r.label} | **${byState.get(r.state) ?? 0}** | ${r.meaning} |`);
  }
  lines.push(`| | **${tools.length}** | |`);

  const byCat = [...countBy(tools, (t) => t.category).entries()].sort(
    (a, b) => b[1] - a[1] || CATEGORY_LABELS[a[0]].localeCompare(CATEGORY_LABELS[b[0]])
  );
  const verifiedLatest = latestVerified(tools);
  const fresh = tools.filter((t) => t.lastVerified === verifiedLatest).length;
  const stale = tools
    .filter((t) => t.lastVerified !== verifiedLatest)
    .map((t) => `[${t.name}](tools/${t.slug}.md)`)
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));

  lines.push(``);
  lines.push(
    `**By category:** ` +
      byCat.map(([c, n]) => `${CATEGORY_EMOJI[c] ?? ""} ${CATEGORY_LABELS[c] ?? c} ${n}`).join(" &nbsp;|&nbsp; ")
  );
  lines.push(``);
  lines.push(
    `**Collects code:** ${tools.filter((t) => t.collectsCode === true).length} &nbsp;|&nbsp; ` +
      `**Collects prompts:** ${tools.filter((t) => t.collectsPrompts === true).length} &nbsp;|&nbsp; ` +
      `**Open source (incl. partial/archived):** ${tools.filter((t) => t.repoStatus !== "closed-source").length}`
  );
  lines.push(``);
  lines.push(
    `**Verified ${verifiedLatest}:** ${fresh} of ${tools.length}` +
      (stale.length ? `. Not re-verifiable this round (earlier date kept): ${stale.join(", ")}.` : `.`)
  );
  return lines.join("\n");
}

function genLegend(): string {
  const states = (["on", "opt-in", "off", "unknown", "conditional", "saas"] as DefaultState[])
    .map((s) => `${STATE_EMOJI[s]} ${STATE_LEGEND[s]}`)
    .join(" &nbsp;|&nbsp; ");
  const cats = (Object.keys(CATEGORY_LABELS) as Category[])
    .map((c) => `${CATEGORY_EMOJI[c]} ${CATEGORY_LABELS[c]}`)
    .join(" &nbsp;|&nbsp; ");
  return [
    `> **Legend:**`,
    `> ${states}`,
    `>`,
    `> **Categories:**`,
    `> ${cats}`,
    `>`,
    `> The Disable Method column shows the first option only (… marks a shortened entry); each tool page has the full opt-out steps, evidence links and changelog.`,
  ].join("\n");
}

function genTable(tools: Tool[]): string {
  const header = [
    `| Tool | Category | Open Source? | Default State | Analytics Provider | Disable Method | Collects Code? | Collects Prompts? | Last Verified | Details |`,
    `|------|----------|-------------|---------------|-------------------|----------------|---------------|------------------|---------------|---------|`,
  ];
  const rows = sortTools(tools).map((t) => {
    const cat = `${CATEGORY_EMOJI[t.category] ?? ""} ${CATEGORY_LABELS[t.category] ?? t.category}`;
    const state = `${STATE_EMOJI[t.defaultState] ?? STATE_EMOJI.unknown} ${STATE_SHORT[t.defaultState] ?? t.defaultState}`;
    const providers = t.analyticsProviders.length ? t.analyticsProviders.join(", ") : "—";
    return (
      `| ${cell(t.name)} | ${cat} | ${REPO_STATUS_LABEL[t.repoStatus] ?? t.repoStatus} | ${state} | ` +
      `${cell(providers)} | ${cell(shortDisable(t))} | ${yesNo(t.collectsCode)} | ${yesNo(t.collectsPrompts)} | ` +
      `${t.lastVerified} | [→](tools/${t.slug}.md) |`
    );
  });
  return [...header, ...rows].join("\n");
}

// ---------------------------------------------------------------------------
// README splicing
// ---------------------------------------------------------------------------

function splice(readme: string, name: string, body: string): string {
  const begin = `<!-- BEGIN GENERATED:${name} -->`;
  const end = `<!-- END GENERATED:${name} -->`;
  const i = readme.indexOf(begin);
  const j = readme.indexOf(end);
  if (i === -1 || j === -1 || j < i) {
    console.error(`Error: README.md is missing the ${begin} ... ${end} markers.`);
    process.exit(1);
  }
  return readme.slice(0, i + begin.length) + "\n" + body + "\n" + readme.slice(j);
}

function main() {
  const tools = loadTools();
  if (!existsSync(README_PATH)) {
    console.error(`Error: ${README_PATH} not found.`);
    process.exit(1);
  }
  let readme = readFileSync(README_PATH, "utf-8");
  readme = splice(readme, "intro", genIntro(tools));
  readme = splice(readme, "badges", genBadges(tools));
  readme = splice(readme, "at-a-glance", genGlance(tools));
  readme = splice(readme, "legend", genLegend());
  readme = splice(readme, "table", genTable(tools));

  if (process.argv.includes("--write")) {
    writeFileSync(README_PATH, readme, "utf-8");
    console.log(`README.md written to ${README_PATH}`);
  } else {
    process.stdout.write(readme);
  }
}

main();
