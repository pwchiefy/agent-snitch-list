#!/usr/bin/env npx tsx
/**
 * generate-readme.ts
 *
 * Reads data/tools.json, generates the summary table and stats for the README,
 * and writes the result to stdout (or to a file via --write flag).
 *
 * Usage:
 *   npx tsx scripts/generate-readme.ts            # print to stdout
 *   npx tsx scripts/generate-readme.ts --write     # write to README.md
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type DefaultState = "on" | "off" | "opt-in" | "conditional" | "saas" | "unknown";

type Category =
  | "coding-agent"
  | "ide-extension"
  | "code-review"
  | "code-generation"
  | "security-scanning"
  | "agent-framework"
  | "terminal-ai";

interface Tool {
  slug: string;
  name: string;
  category: Category;
  openSource: boolean;
  defaultState: DefaultState;
  analyticsProviders: string[];
  disableMethod: string;
  collectsCode: boolean;
  website: string;
  repository?: string;
  lastVerified: string;
  /** Optional short note displayed in the Details column */
  details?: string;
}

// ---------------------------------------------------------------------------
// Emoji mappings
// ---------------------------------------------------------------------------

const CATEGORY_EMOJI: Record<Category, string> = {
  "coding-agent": "\u{1F916}",       // 🤖
  "ide-extension": "\u{1F50C}",      // 🔌
  "code-review": "\u{1F50D}",        // 🔍
  "code-generation": "\u{1F3D7}\uFE0F", // 🏗️
  "security-scanning": "\u{1F6E1}\uFE0F", // 🛡️
  "agent-framework": "\u{1F9E9}",    // 🧩
  "terminal-ai": "\u{1F4BB}",        // 💻
};

const STATE_EMOJI: Record<DefaultState, string> = {
  on: "\u{1F534}",          // 🔴
  off: "\u{1F7E2}",         // 🟢
  "opt-in": "\u{1F7E1}",    // 🟡
  conditional: "\u{1F535}",  // 🔵
  saas: "\u2601\uFE0F",     // ☁️
  unknown: "\u26AB",         // ⚫
};

const STATE_LABELS: Record<DefaultState, string> = {
  on: "ON by default",
  off: "OFF / None",
  "opt-in": "Opt-in",
  conditional: "Conditional",
  saas: "SaaS only",
  unknown: "Unknown",
};

const STATE_SORT_ORDER: DefaultState[] = [
  "on",
  "conditional",
  "saas",
  "opt-in",
  "off",
  "unknown",
];

const CATEGORY_LABELS: Record<Category, string> = {
  "coding-agent": "Coding Agent",
  "ide-extension": "IDE Extension",
  "code-review": "Code Review",
  "code-generation": "Code Generation",
  "security-scanning": "Security Scanning",
  "agent-framework": "Agent Framework",
  "terminal-ai": "Terminal AI",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadTools(): Tool[] {
  if (!existsSync(TOOLS_JSON_PATH)) {
    console.error(`Error: ${TOOLS_JSON_PATH} not found.`);
    process.exit(1);
  }
  const raw = readFileSync(TOOLS_JSON_PATH, "utf-8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) {
    console.error("Error: tools.json must be a JSON array.");
    process.exit(1);
  }
  return data as Tool[];
}

function sortTools(tools: Tool[]): Tool[] {
  return [...tools].sort((a, b) => {
    const aStateIdx = STATE_SORT_ORDER.indexOf(a.defaultState);
    const bStateIdx = STATE_SORT_ORDER.indexOf(b.defaultState);
    const aIdx = aStateIdx === -1 ? STATE_SORT_ORDER.length : aStateIdx;
    const bIdx = bStateIdx === -1 ? STATE_SORT_ORDER.length : bStateIdx;
    if (aIdx !== bIdx) return aIdx - bIdx;
    return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
  });
}

function escapeMarkdown(s: string): string {
  return s.replace(/\|/g, "\\|");
}

// ---------------------------------------------------------------------------
// Table generation
// ---------------------------------------------------------------------------

function generateTable(tools: Tool[]): string {
  const header = [
    "| Tool | Category | Open Source | Default State | Analytics Provider | Disable Method | Collects Code | Details |",
    "|------|----------|------------|---------------|-------------------|----------------|---------------|---------|",
  ];

  const rows = tools.map((t) => {
    const toolLink = `[${escapeMarkdown(t.name)}](tools/${t.slug}.md)`;
    const catEmoji = CATEGORY_EMOJI[t.category] ?? "";
    const catLabel = CATEGORY_LABELS[t.category] ?? t.category;
    const category = `${catEmoji} ${catLabel}`;
    const openSource = t.openSource ? "Yes" : "No";
    const stateEmoji = STATE_EMOJI[t.defaultState] ?? STATE_EMOJI.unknown;
    const stateLabel = STATE_LABELS[t.defaultState] ?? t.defaultState;
    const state = `${stateEmoji} ${stateLabel}`;
    const providers =
      t.analyticsProviders.length > 0
        ? escapeMarkdown(t.analyticsProviders.join(", "))
        : "None";
    const disable = escapeMarkdown(t.disableMethod || "N/A");
    const collectsCode = t.collectsCode ? "Yes" : "No";
    const details = t.details ? escapeMarkdown(t.details) : "";

    return `| ${toolLink} | ${category} | ${openSource} | ${state} | ${providers} | ${disable} | ${collectsCode} | ${details} |`;
  });

  return [...header, ...rows].join("\n");
}

// ---------------------------------------------------------------------------
// Stats generation
// ---------------------------------------------------------------------------

function generateStats(tools: Tool[]): string {
  const total = tools.length;
  const byState: Partial<Record<DefaultState, number>> = {};
  for (const t of tools) {
    byState[t.defaultState] = (byState[t.defaultState] ?? 0) + 1;
  }

  const byCategory: Partial<Record<Category, number>> = {};
  for (const t of tools) {
    byCategory[t.category] = (byCategory[t.category] ?? 0) + 1;
  }

  const collectsCodeCount = tools.filter((t) => t.collectsCode).length;
  const openSourceCount = tools.filter((t) => t.openSource).length;

  const lines: string[] = [
    `### Stats`,
    ``,
    `| Metric | Count |`,
    `|--------|-------|`,
    `| Total tools tracked | ${total} |`,
    `| Open source | ${openSourceCount} |`,
    `| Collects code | ${collectsCodeCount} |`,
    ``,
    `**By default state:**`,
    ``,
  ];

  for (const state of STATE_SORT_ORDER) {
    const count = byState[state];
    if (count != null && count > 0) {
      const emoji = STATE_EMOJI[state];
      const label = STATE_LABELS[state];
      lines.push(`- ${emoji} ${label}: ${count}`);
    }
  }

  lines.push(``);
  lines.push(`**By category:**`);
  lines.push(``);

  // Sort categories by count descending
  const sortedCats = (Object.entries(byCategory) as [Category, number][]).sort(
    (a, b) => b[1] - a[1]
  );
  for (const [cat, count] of sortedCats) {
    const emoji = CATEGORY_EMOJI[cat] ?? "";
    const label = CATEGORY_LABELS[cat] ?? cat;
    lines.push(`- ${emoji} ${label}: ${count}`);
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Legend
// ---------------------------------------------------------------------------

function generateLegend(): string {
  const lines: string[] = [
    `### Legend`,
    ``,
    `**Default State indicators:**`,
    ``,
  ];

  for (const state of STATE_SORT_ORDER) {
    lines.push(`- ${STATE_EMOJI[state]} **${STATE_LABELS[state]}** -- ${stateDescription(state)}`);
  }

  lines.push(``);
  lines.push(`**Category indicators:**`);
  lines.push(``);

  for (const [cat, emoji] of Object.entries(CATEGORY_EMOJI) as [Category, string][]) {
    lines.push(`- ${emoji} ${CATEGORY_LABELS[cat]}`);
  }

  return lines.join("\n");
}

function stateDescription(state: DefaultState): string {
  switch (state) {
    case "on":
      return "Telemetry is enabled by default; user must actively opt out";
    case "off":
      return "No telemetry / analytics, or telemetry is absent entirely";
    case "opt-in":
      return "Telemetry exists but is disabled by default; user must opt in";
    case "conditional":
      return "Telemetry behavior depends on configuration or deployment context";
    case "saas":
      return "SaaS product; analytics are inherent to the hosted service";
    case "unknown":
      return "Telemetry status has not been verified";
  }
}

// ---------------------------------------------------------------------------
// Full README assembly
// ---------------------------------------------------------------------------

function generateReadme(tools: Tool[]): string {
  const sorted = sortTools(tools);
  const now = new Date().toISOString().replace("T", " ").replace(/\.\d+Z$/, " UTC");

  const sections: string[] = [
    `# Agent Snitch List`,
    ``,
    `> A community-maintained catalog of telemetry and data collection practices in AI coding tools.`,
    ``,
    `**Know what your tools are sending home.**`,
    ``,
    `_Last generated: ${now}_`,
    ``,
    `---`,
    ``,
    generateStats(sorted),
    ``,
    `---`,
    ``,
    generateLegend(),
    ``,
    `---`,
    ``,
    `## Tools`,
    ``,
    generateTable(sorted),
    ``,
    `---`,
    ``,
    `## Contributing`,
    ``,
    `See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add or update a tool entry.`,
    ``,
    `Each tool has a detailed page in the \`tools/\` directory with:`,
    `- What data is collected`,
    `- What is NOT collected`,
    `- Step-by-step opt-out instructions`,
    `- Red flags and evidence links`,
    ``,
    `## License`,
    ``,
    `This project is open source. See [LICENSE](LICENSE) for details.`,
    ``,
  ];

  return sections.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const tools = loadTools();
  const readme = generateReadme(tools);

  const writeFlag = process.argv.includes("--write");

  if (writeFlag) {
    writeFileSync(README_PATH, readme, "utf-8");
    console.log(`README.md written to ${README_PATH}`);
  } else {
    process.stdout.write(readme);
  }
}

main();
