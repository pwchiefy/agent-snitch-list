# Agent Snitch List 🕵️

**is your clanker a snitch?**

<!-- BEGIN GENERATED:intro -->
A community-maintained audit of telemetry, analytics, and data collection in 138 AI coding tools, agent frameworks and MCP servers (22 of them MCP servers).
<!-- END GENERATED:intro -->

<!-- BEGIN GENERATED:badges -->
[![Tools Tracked](https://img.shields.io/badge/tools_tracked-138-blueviolet?style=for-the-badge)](https://github.com/pwchiefy/agent-snitch-list)
[![Last Updated](https://img.shields.io/badge/last_updated-2026--10--20-informational?style=for-the-badge)](https://github.com/pwchiefy/agent-snitch-list/commits/main)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/license-CC_BY--SA_4.0-lightgrey?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)
<!-- END GENERATED:badges -->

---

## At a Glance

<!-- BEGIN GENERATED:at-a-glance -->
| Status | Count | Meaning |
|--------|-------|---------|
| 🔴 Telemetry ON by default | **66** | Phones home the moment you install it |
| 🟡 Opt-in / asks first | **4** | Telemetry exists but requires your consent |
| 🟢 No telemetry | **48** | Zero phone-home behavior detected |
| ⚫ Unknown | **6** | Closed-source or undocumented, couldn't verify |
| 🔵 Conditional | **6** | Depends on build, deployment mode or configuration |
| ☁️ SaaS-inherent | **8** | Cloud-only; telemetry is the product |
| | **138** | |

**By category:** 🏗️ Code Generation 37 &nbsp;|&nbsp; 🤖 Coding Agent 27 &nbsp;|&nbsp; 🔌 IDE Extension 22 &nbsp;|&nbsp; 🔗 MCP Server 22 &nbsp;|&nbsp; 🧩 Agent Framework 16 &nbsp;|&nbsp; 🔍 Code Review 7 &nbsp;|&nbsp; 💻 Terminal AI 5 &nbsp;|&nbsp; 🛡️ Security Scanning 2

**Collects code:** 45 &nbsp;|&nbsp; **Collects prompts:** 45 &nbsp;|&nbsp; **Open source (incl. partial/archived):** 104

**Verified 2026-10-20:** 134 of 138. Not re-verifiable this round (earlier date kept): [Codejet](tools/codejet.md), [Mutable AI](tools/mutable-ai.md), [Phind](tools/phind.md), [Safurai](tools/safurai.md).
<!-- END GENERATED:at-a-glance -->

---

## What Changed (2026-10-20 refresh)

Every entry was re-checked against primary sources (source code at a pinned commit, official privacy/telemetry docs, release notes). 134 of 138 entries were re-verified on 2026-10-20; 4 (Codejet, Mutable AI, Phind, Safurai) could not be re-checked because the product or its pages are unreachable, so they keep their 2026-03-23 date. Per-tool details are in each page's Changelog section; the full log is in [CHANGELOG.md](CHANGELOG.md).

- **20 new entries:** Gemini CLI, Qwen Code, Crush, Kilo Code, Pi, Letta Code, Kimi Code, GitHub Copilot CLI, Kiro, Antigravity, Amp, Factory Droid, Jules, OpenAI Agents SDK, Google ADK, Mastra, smolagents, Pydantic AI, Chrome DevTools MCP, Context7 MCP.
- **Corrections (we previously said no telemetry):** Cline, Void and Melty ship PostHog telemetry that is on by default; the self-hosted Sweep server sends issue titles and repo names to Sweep's PostHog.
- **Telemetry removed or projects wound down:** Continue (final 2.0/2.1 releases) and Roo Code (final v3.54.0) removed telemetry before going unmaintained; the current code of Refact.ai, Bloop and Plandex (OSS) has no remote telemetry.
- **Newly added telemetry in MCP servers:** Figma Context MCP (PostHog, v0.10.0) and Serena (usage ping) are now ON by default; AWS API MCP adds client info to AWS User-Agents by default; Magic MCP is now a proxy to a hosted service.
- **Reclassified:** OpenHands opt-in → ON (an install event is sent before consent); Open Interpreter, OpenCode (desktop/web builds ship Sentry), OpenUI and JetBrains AI → Conditional; Devin and Marblism → SaaS; Magic AI → Unknown (privacy page gone).
- **Training-by-default changes:** GitHub Copilot Free/Pro/Pro+ (from 2026-04-24), v0 Hobby/Free, Lovable Free/Pro (from 2026-09-09), Perplexity consumer plans, and JetBrains AI non-commercial licenses now use interaction data for training or detailed collection unless you opt out.
- **Security incident:** GPT Pilot's `core/telemetry/` hid a credential-stealing loader from 2025-08-24 until 2026-06-11 (see [GPT Pilot](tools/gpt-pilot.md)).
- **Tooling:** `scripts/generate-readme.ts` now reads the real `data/tools.json` schema and only regenerates the marked README sections; the CI validator was updated to the same schema.

---

## Table of Contents

- [What Changed (2026-10-20 refresh)](#what-changed-2026-10-20-refresh)
- [Why This Exists](#why-this-exists)
- [The Full List](#the-full-list)
- [Red Flags — Hall of Shame](#red-flags--hall-of-shame)
- [Privacy Champions](#privacy-champions)
- [How to Contribute](#how-to-contribute)
- [Methodology](#methodology)
- [License](#license)

---

## Why This Exists

Every time you type a line of code in an AI-powered editor, something might be listening. Crash reporters, usage analytics, PostHog events, Sentry breadcrumbs, custom telemetry endpoints — the modern AI coding stack is riddled with data collection. 

**This project exists because:**

1. **Small Enterprise procurement teams** need a single reference to evaluate tools before rolling them out to hundreds of engineers.
2. **Security-conscious non-technical agentic developers** deserve to know exactly what leaves their machine — especially when working on proprietary code.
3. **Tool vendors** should compete on privacy. Transparency creates a race to the top.

We are not anti-telemetry. We are anti-surprise. If a tool collects data, that's fine — as long as it's documented, disclosed, and easy to disable.

---

## The Full List

<!-- BEGIN GENERATED:legend -->
> **Legend:**
> 🔴 ON by default &nbsp;|&nbsp; 🟡 Opt-in &nbsp;|&nbsp; 🟢 None &nbsp;|&nbsp; ⚫ Unknown &nbsp;|&nbsp; 🔵 Conditional &nbsp;|&nbsp; ☁️ SaaS-inherent
>
> **Categories:**
> 🤖 Coding Agent &nbsp;|&nbsp; 🔌 IDE Extension &nbsp;|&nbsp; 🔍 Code Review &nbsp;|&nbsp; 🏗️ Code Generation &nbsp;|&nbsp; 🛡️ Security Scanning &nbsp;|&nbsp; 🧩 Agent Framework &nbsp;|&nbsp; 💻 Terminal AI &nbsp;|&nbsp; 🔗 MCP Server
>
> The Disable Method column shows the first option only (… marks a shortened entry); each tool page has the full opt-out steps, evidence links and changelog.
<!-- END GENERATED:legend -->

<!-- BEGIN GENERATED:table -->
| Tool | Category | Open Source? | Default State | Analytics Provider | Disable Method | Collects Code? | Collects Prompts? | Last Verified | Details |
|------|----------|-------------|---------------|-------------------|----------------|---------------|------------------|---------------|---------|
| Aide | 🔌 IDE Extension | Yes | 🔴 ON | PostHog, Parea | Extension setting `codestory.disableTelemetry: true` (disables the extension's PostHog … | Yes | Yes | 2026-10-20 | [→](tools/aide.md) |
| Amazon Q Developer | 🏗️ Code Generation | Partial | 🔴 ON | AWS client-side telemetry | Telemetry: VS Code setting `Amazon Q: Telemetry` … | Yes | Yes | 2026-10-20 | [→](tools/amazon-q-developer.md) |
| AskCodi | 🔌 IDE Extension | No | 🔴 ON | PostHog (opt-in statistics cookies on web), Google Analytics (with consent), Google AdSense (free-plan pages, opt-in marketing cookies), Sentry (desktop crash reporting) | Cookie banner categories (Statistics/Marketing) … | Yes | Yes | 2026-10-20 | [→](tools/askcodi.md) |
| Augment Code | 🔌 IDE Extension | No | 🔴 ON | Custom (Augment servers), Google Analytics | No documented opt-out for product usage data … | Yes | Yes | 2026-10-20 | [→](tools/augment-code.md) |
| Bito AI | 🔌 IDE Extension | Partial | 🔴 ON | Google Analytics, Mixpanel (2026-03 finding; not named in current privacy policy) | No documented telemetry opt-out (cookie/ad-industry opt-outs only) | Yes | Yes | 2026-10-20 | [→](tools/bito-ai.md) |
| Blackbox AI | 🏗️ Code Generation | No | 🔴 ON | Custom (Blackbox cloud), Cookies | No documented telemetry opt-out … | Yes | Yes | 2026-10-20 | [→](tools/blackbox-ai.md) |
| Builder.io Visual Copilot | 🏗️ Code Generation | Partial | 🔴 ON | Custom (Builder.io platform), Unnamed advertising/analytics partners (privacy policy) | No user-level telemetry opt-out documented … | Yes | Yes | 2026-10-20 | [→](tools/builder-io.md) |
| Claude Code | 🤖 Coding Agent | No | 🔴 ON | Anthropic + third-party metrics logging (previously documented as Statsig), Third-party error tracking (previously documented as Sentry) | `DISABLE_TELEMETRY=1` (metrics + feature flags), `DISABLE_ERROR_REPORTING=1` … | No | No | 2026-10-20 | [→](tools/claude-code.md) |
| Cline | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | VS Code/JetBrains: Settings > General > clear 'Allow error and usage reporting' (VS Code's … | No | No | 2026-10-20 | [→](tools/cline.md) |
| Codacy | 🔍 Code Review | Partial | 🔴 ON | Web cookies, Unnamed analytics and advertising providers (per privacy policy) | Cookie consent / cookie settings … | Yes | Unknown | 2026-10-20 | [→](tools/codacy.md) |
| CodeGeeX | 🏗️ Code Generation | Partial | 🔴 ON | Custom endpoint (Zhipu AI / THUDM infrastructure) | Privacy Mode setting in extension | Yes | Yes | 2026-10-20 | [→](tools/codegeex.md) |
| Codejet | 🏗️ Code Generation | No | 🔴 ON | Cookies (web platform) | Cookie consent settings | Yes | Yes | 2026-03-23 | [→](tools/codejet.md) |
| CodeRabbit | 🔍 Code Review | No | 🔴 ON | Custom (CodeRabbit cloud), Unnamed analytics/cookie providers (per privacy policy) | Opt out of review-data storage (learnings/embeddings) in settings … | Yes | Yes | 2026-10-20 | [→](tools/coderabbit.md) |
| Codex CLI | 🤖 Coding Agent | Yes | 🔴 ON | Statsig (OTLP metrics), OpenAI first-party analytics events, Sentry (user-submitted feedback only) | In `~/.codex/config.toml`: `[analytics]` `enabled = false` (disables OpenAI analytics … | No | No | 2026-10-20 | [→](tools/codex-cli.md) |
| Composio | 🧩 Agent Framework | Yes | 🔴 ON | Custom (telemetry.composio.dev), PostHog (CLI) | SDK: `Composio(allow_tracking=False)` (Python) or `allowTracking: false` (TypeScript) … | No | No | 2026-10-20 | [→](tools/composio.md) |
| CrewAI | 🧩 Agent Framework | Yes | 🔴 ON | OpenTelemetry (CrewAI backend: telemetry.crewai.com) | `CREWAI_DISABLE_TELEMETRY=true` (also `1`/`yes`/`on`), `CREWAI_DISABLE_TRACKING`, or … | No | No | 2026-10-20 | [→](tools/crewai.md) |
| Crush (Charm) | 🤖 Coding Agent | Yes | 🔴 ON | PostHog (proxied via data.charm.land) | `CRUSH_DISABLE_METRICS=1`, `DO_NOT_TRACK=1`, or `"disable_metrics": true` in config | No | No | 2026-10-20 | [→](tools/crush.md) |
| Cursor | 🔌 IDE Extension | No | 🔴 ON | PostHog (reported; not confirmed in official docs) | Enable Privacy Mode (Cursor Settings > General > Privacy Mode, or enforced by a … | Yes | Yes | 2026-10-20 | [→](tools/cursor.md) |
| Devon | 🤖 Coding Agent | Yes | 🔴 ON | PostHog | `DEVON_TELEMETRY_DISABLED=true` environment variable (exact lowercase value `true` … | No | No | 2026-10-20 | [→](tools/devon.md) |
| Factory Droid | 🤖 Coding Agent | No | 🔴 ON | Factory first-party OpenTelemetry collector | No documented per-user opt-out … | No | No | 2026-10-20 | [→](tools/factory-droid.md) |
| Gemini CLI | 🤖 Coding Agent | Yes | 🔴 ON | Google Clearcut (play.googleapis.com/log) | Set `privacy.usageStatisticsEnabled: false` in `~/.gemini/settings.json` | No | No | 2026-10-20 | [→](tools/gemini-cli.md) |
| GitHub Copilot | 🏗️ Code Generation | Partial | 🔴 ON | GitHub / Microsoft internal telemetry infrastructure | github.com/settings/copilot > Privacy (training and product-improvement data) + editor … | Yes | Yes | 2026-10-20 | [→](tools/github-copilot.md) |
| GitHub Copilot CLI | 🤖 Coding Agent | No | 🔴 ON | GitHub first-party telemetry (endpoint not verified) | `--disable-client-telemetry` flag (added v1.0.100, 2026-10-19) … | Yes | Yes | 2026-10-20 | [→](tools/github-copilot-cli.md) |
| GitWit | 🏗️ Code Generation | Yes | 🔴 ON | Vercel Analytics | Self-host and remove the `<Analytics />` component … | Yes | Yes | 2026-10-20 | [→](tools/gitwit.md) |
| GPT Pilot | 🏗️ Code Generation | Yes | 🔴 ON | Custom (api.pythagora.io/telemetry) | Set `telemetry.enabled: false` in the GPT Pilot config file, or set the … | No | Yes | 2026-10-20 | [→](tools/gpt-pilot.md) |
| Kilo Code | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | VS Code: global `telemetry.telemetryLevel: off` … | No | No | 2026-10-20 | [→](tools/kilo-code.md) |
| Kimi Code CLI | 🤖 Coding Agent | Yes | 🔴 ON | Custom (telemetry-logs.kimi.com) | `KIMI_DISABLE_TELEMETRY=1` or `telemetry = false` in `config.toml` | No | No | 2026-10-20 | [→](tools/kimi-code.md) |
| Kiro (AWS) | 🔌 IDE Extension | No | 🔴 ON | AWS first-party telemetry | Settings > User > Application > Telemetry and Content: uncheck "Usage Analytics And … | Yes | Yes | 2026-10-20 | [→](tools/kiro.md) |
| Kodu AI | 🔌 IDE Extension | Yes | 🔴 ON | Amplitude, ipinfo.io (public IP lookup) | No documented opt-out | No | No | 2026-10-20 | [→](tools/kodu-ai.md) |
| Kombai | 🏗️ Code Generation | No | 🔴 ON | PostHog (Trust Center subprocessor), Sentry (Trust Center subprocessor), Google Analytics (privacy policy) | No documented telemetry opt-out (Google Analytics browser opt-out and cookie controls … | Yes | Yes | 2026-10-20 | [→](tools/kombai.md) |
| Letta Code | 🤖 Coding Agent | Yes | 🔴 ON | Custom (Letta server `/v1/metadata/telemetry`) | `LETTA_CODE_TELEM=0` or `DO_NOT_TRACK=1` | No | No | 2026-10-20 | [→](tools/letta-code.md) |
| Lovable | 🏗️ Code Generation | No | 🔴 ON | Multiple (standard SaaS analytics stack) | AI training (Free/Pro): Account settings > Preferences > AI model training > turn off 'Use … | Yes | Yes | 2026-10-20 | [→](tools/lovable.md) |
| Mastra (and Mastra Code) | 🧩 Agent Framework | Yes | 🔴 ON | PostHog | `MASTRA_TELEMETRY_DISABLED=1` | No | No | 2026-10-20 | [→](tools/mastra.md) |
| MCP: Chrome DevTools | 🔗 MCP Server | Yes | 🔴 ON | Google Clearcut (play.googleapis.com/log) | `--no-usage-statistics` flag, or `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` / `CI` env var … | No | No | 2026-10-20 | [→](tools/mcp-chrome-devtools.md) |
| MCP: DesktopCommanderMCP | 🔗 MCP Server | Yes | 🔴 ON | Custom telemetry proxy (telemetry.desktopcommander.app), Google Cloud Run / BigQuery (fallback endpoint) | Set `telemetryEnabled: false` in `~/.claude-server-commander/config.json` (or ask the … | No | No | 2026-10-20 | [→](tools/mcp-desktop-commander.md) |
| MCP: Figma-Context-MCP | 🔗 MCP Server | Yes | 🔴 ON | PostHog | Run with `--no-telemetry`, or set env `FRAMELINK_TELEMETRY=off` or `DO_NOT_TRACK=1` | No | No | 2026-10-20 | [→](tools/mcp-figma.md) |
| MCP: MobileBuildMCP (formerly XcodeBuildMCP, Sentry) | 🔗 MCP Server | Yes | 🔴 ON | Sentry | Set env `MOBILEBUILDMCP_SENTRY_DISABLED=true` or `SENTRY_DISABLED=true`, or … | No | No | 2026-10-20 | [→](tools/mcp-xcodebuild.md) |
| MCP: Serena | 🔗 MCP Server | Yes | 🔴 ON | Custom endpoint (oraios-software.de) | Set env `SERENA_USAGE_REPORTING=false` (also skipped when CI=true or GITHUB_ACTIONS=true) | No | No | 2026-10-20 | [→](tools/mcp-serena.md) |
| MCP: Windows-MCP (CursorTouch) | 🔗 MCP Server | Yes | 🔴 ON | PostHog | Set env `ANONYMIZED_TELEMETRY=false` in the MCP client config (or set `POSTHOG_API_KEY` to … | No | No | 2026-10-20 | [→](tools/mcp-windows.md) |
| Melty | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | No setting found … | Yes | Yes | 2026-10-20 | [→](tools/melty.md) |
| Mentat | 🤖 Coding Agent | Archived | 🔴 ON | Sentry | No documented opt-out | No | No | 2026-10-20 | [→](tools/mentat.md) |
| Mintlify | 🏗️ Code Generation | Partial | 🔴 ON | PostHog | CLI: `mint --telemetry false`, or set `MINTLIFY_TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1` … | No | Yes | 2026-10-20 | [→](tools/mintlify.md) |
| Mistral Vibe / Codestral | 🤖 Coding Agent | Yes | 🔴 ON | Mistral datalake events endpoint (api.mistral.ai), GrowthBook (experiments), Sentry (release builds) | Set `enable_telemetry = false` in Vibe's `config.toml` (also disables experiments and … | Yes | Yes | 2026-10-20 | [→](tools/mistral-vibe.md) |
| Mutable AI | 🏗️ Code Generation | No | 🔴 ON | Custom (Mutable AI cloud) | No documented opt-out | Yes | Yes | 2026-03-23 | [→](tools/mutable-ai.md) |
| OpenAI Agents SDK | 🧩 Agent Framework | Yes | 🔴 ON | OpenAI Traces (api.openai.com/v1/traces/ingest) | `OPENAI_AGENTS_DISABLE_TRACING=1`, `set_tracing_disabled(True)`, or … | Yes | Yes | 2026-10-20 | [→](tools/openai-agents-sdk.md) |
| OpenHands | 🤖 Coding Agent | Yes | 🔴 ON | PostHog | Decline the consent dialog (blocks session events) … | No | No | 2026-10-20 | [→](tools/openhands.md) |
| PearAI | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | Set `"allowAnonymousTelemetry": false` in config.json and disable IDE telemetry (both must … | Unknown | Yes | 2026-10-20 | [→](tools/pearai.md) |
| Perplexity | 🏗️ Code Generation | No | 🔴 ON | Google Analytics, Custom | Account settings > Preferences > 'AI Data Retention' toggle (training opt-out … | Yes | Yes | 2026-10-20 | [→](tools/perplexity.md) |
| Pi (coding agent) | 🤖 Coding Agent | Yes | 🔴 ON | Custom (pi.dev install ping) | `PI_TELEMETRY=0`, `PI_OFFLINE=1`, or `enableInstallTelemetry: false` in settings | No | No | 2026-10-20 | [→](tools/pi-coding-agent.md) |
| Pieces | 🔌 IDE Extension | No | 🔴 ON | Segment, Sentry, Satismeter (optional surveys) | Disable usage analytics and diagnostics in the app's privacy settings | Yes | Yes | 2026-10-20 | [→](tools/pieces.md) |
| Qwen Code | 🤖 Coding Agent | Yes | 🔴 ON | Alibaba Cloud RUM (rum.aliyuncs.com) | Set `privacy.usageStatisticsEnabled: false` in settings or … | No | No | 2026-10-20 | [→](tools/qwen-code.md) |
| Replit (Agent + Ghostwriter) | 🤖 Coding Agent | No | 🔴 ON | Replit internal infrastructure, Google Analytics, Third-party analytics | No documented opt-out for core telemetry | Yes | Yes | 2026-10-20 | [→](tools/replit-agent.md) |
| Snyk Code AI | 🛡️ Security Scanning | Partial | 🔴 ON | Custom API (Snyk servers), Sentry (npm wrapper install/runtime errors), Datadog and Snowflake (processors for essential operational analytics, per docs) | `SNYK_DISABLE_ANALYTICS=1` or `snyk config set disable-analytics=1` (optional usage … | Yes | Unknown | 2026-10-20 | [→](tools/snyk.md) |
| Sourcegraph Cody | 🔌 IDE Extension | Partial | 🔴 ON | GraphQL telemetry endpoint, OpenTelemetry (OTLP), Sentry | VS Code settings: `"cody.telemetry.level": "off"` … | Yes | Yes | 2026-10-20 | [→](tools/sourcegraph-cody.md) |
| Supermaven | 🏗️ Code Generation | Partial | 🔴 ON | Custom (Supermaven cloud) | No documented opt-out for telemetry | Yes | Yes | 2026-10-20 | [→](tools/supermaven.md) |
| Sweep (OSS) | 🔍 Code Review | Yes | 🔴 ON | PostHog, Sentry (only if SENTRY_URL set) | Self-hosted server: override `POSTHOG_API_KEY` (no documented off switch) … | No | No | 2026-10-20 | [→](tools/sweep.md) |
| Sweep AI (Hosted) | 🏗️ Code Generation | Archived | 🔴 ON | PostHog | No documented opt-out (service archived) | Yes | Yes | 2026-10-20 | [→](tools/sweep-hosted.md) |
| Tabby | 🏗️ Code Generation | Yes | 🔴 ON | Custom telemetry endpoint (app.tabbyml.com/api/usage) | Server: `TABBY_DISABLE_USAGE_COLLECTION=1` … | No | No | 2026-10-20 | [→](tools/tabby.md) |
| Tabnine | 🏗️ Code Generation | Partial | 🔴 ON | Application Insights (Microsoft Azure) | VS Code extension reporter follows VS Code `telemetry.telemetryLevel` (uses … | No | No | 2026-10-20 | [→](tools/tabnine.md) |
| Trae (ByteDance) | 🔌 IDE Extension | No | 🔴 ON | ByteDance internal infrastructure (custom endpoints) | Enable Privacy Mode (stops chat data use for analytics/training … | Yes | Yes | 2026-10-20 | [→](tools/trae.md) |
| v0 by Vercel | 🏗️ Code Generation | No | 🔴 ON | Vercel Analytics, Vercel internal infrastructure | AI training: Vercel Team Settings > Data Preferences (and per-project in Project Settings) … | Yes | Yes | 2026-10-20 | [→](tools/v0.md) |
| Void | 🔌 IDE Extension | Archived | 🔴 ON | PostHog | Void Settings > Metrics > 'Opt-out (requires restart)' | No | No | 2026-10-20 | [→](tools/void.md) |
| VS IntelliCode | 🏗️ Code Generation | No | 🔴 ON | Microsoft telemetry infrastructure | VS Code: `"telemetry.telemetryLevel": "off"` / Visual Studio: Help > Privacy Settings | No | No | 2026-10-20 | [→](tools/vs-intellicode.md) |
| Warp AI | 💻 Terminal AI | Partial | 🔴 ON | RudderStack, Sentry | Settings > Privacy > turn off 'Help improve Warp' and 'Send crash reports' (free plan: AI … | Unknown | Yes | 2026-10-20 | [→](tools/warp-ai.md) |
| Windsurf (Cognition) | 🔌 IDE Extension | No | 🔴 ON | Cognition/Windsurf internal telemetry infrastructure | Enterprise tier: admin controls … | Yes | Yes | 2026-10-20 | [→](tools/windsurf.md) |
| Zed AI | 🔌 IDE Extension | Yes | 🔴 ON | Sentry, Snowflake, Amplitude, Hex | Settings JSON: `"telemetry": { "diagnostics": false, "metrics": false }` (or search … | No | No | 2026-10-20 | [→](tools/zed-ai.md) |
| JetBrains AI | 🔌 IDE Extension | No | 🔵 Conditional | JetBrains analytics infrastructure | IDE Settings > Data Sharing (anonymous usage statistics and detailed code-related data) … | Yes | Yes | 2026-10-20 | [→](tools/jetbrains-ai.md) |
| MCP: AWS MCP Servers | 🔗 MCP Server | Yes | 🔵 Conditional | AWS service User-Agent metadata (no separate endpoint) | aws-api-mcp-server: set env `AWS_API_MCP_TELEMETRY=false` … | No | No | 2026-10-20 | [→](tools/mcp-aws.md) |
| Open Interpreter | 💻 Terminal AI | Yes | 🔵 Conditional | Custom (Open Interpreter endpoint oi-new-api.fly.dev), Sentry (user-initiated /feedback uploads) | `[analytics] enabled = false` in config.toml | No | No | 2026-10-20 | [→](tools/open-interpreter.md) |
| OpenCode | 🤖 Coding Agent | Yes | 🔵 Conditional | Sentry (desktop app and hosted web app builds only) | CLI/TUI: nothing to disable … | No | No | 2026-10-20 | [→](tools/opencode.md) |
| OpenUI | 🏗️ Code Generation | Yes | 🔵 Conditional | Google Analytics (hosted build only), Sentry via W&B Weave SDK (only when a WANDB_API_KEY is present) | Default self-hosted run sends nothing … | No | No | 2026-10-20 | [→](tools/openui.md) |
| Semgrep | 🛡️ Security Scanning | Yes | 🔵 Conditional | Custom (metrics.semgrep.dev), OpenTelemetry (telemetry.semgrep.dev, for `semgrep mcp` and `--trace`) | `--metrics=off` or `SEMGREP_SEND_METRICS=off` … | No | Unknown | 2026-10-20 | [→](tools/semgrep.md) |
| Amp (Sourcegraph) | 🤖 Coding Agent | No | ☁️ SaaS | Amp Server (Google Cloud Platform) | No telemetry opt-out documented … | Yes | Yes | 2026-10-20 | [→](tools/amp.md) |
| Devin | 🤖 Coding Agent | No | ☁️ SaaS | Cognition AI internal infrastructure | Paid plans: opt out of model training on the Data Controls settings page (admin only on … | Yes | Yes | 2026-10-20 | [→](tools/devin.md) |
| Ellipsis | 🔍 Code Review | No | ☁️ SaaS | Custom (Ellipsis cloud, AWS VPC) | No documented opt-out | Yes | Yes | 2026-10-20 | [→](tools/ellipsis.md) |
| Jules (Google) | 🤖 Coding Agent | No | ☁️ SaaS | Google first-party | N/A (cloud service) | Yes | Yes | 2026-10-20 | [→](tools/jules.md) |
| Marblism | 🏗️ Code Generation | No | ☁️ SaaS | Unnamed analytics and advertising partners (privacy policy), Google Tag Manager (website) | No product telemetry opt-out … | Yes | Yes | 2026-10-20 | [→](tools/marblism.md) |
| MCP: Magic MCP / 21st MCP (21st.dev) | 🔗 MCP Server | Yes | ☁️ SaaS | 21st.dev hosted MCP endpoint (server-side) | None while using it … | Yes | Yes | 2026-10-20 | [→](tools/mcp-magic.md) |
| Phind | 🏗️ Code Generation | No | ☁️ SaaS | Custom (Phind servers) | Paid plans offer data opt-out options | Yes | Yes | 2026-03-23 | [→](tools/phind.md) |
| What The Diff | 🔍 Code Review | No | ☁️ SaaS | Custom (What The Diff servers), Fathom Analytics (website) | No documented opt-out while using the service | Yes | Unknown | 2026-10-20 | [→](tools/what-the-diff.md) |
| Aider | 🤖 Coding Agent | Yes | 🟡 Opt-in | PostHog | `--analytics-disable` (permanent), `--no-analytics` (session), or … | No | No | 2026-10-20 | [→](tools/aider.md) |
| Codegen | 🏗️ Code Generation | Archived | 🟡 Opt-in | OTLP logs to Codegen-operated collector (Modal) | Off unless accepted at the first-run prompt (default answer: No) … | No | No | 2026-10-20 | [→](tools/codegen.md) |
| Goose | 🤖 Coding Agent | Yes | 🟡 Opt-in | PostHog | Decline at first-run prompt … | No | No | 2026-10-20 | [→](tools/goose.md) |
| GPT-Engineer | 🏗️ Code Generation | Archived | 🟡 Opt-in | RudderStack | Answer 'n' to the 'store your prompts' question … | Yes | Yes | 2026-10-20 | [→](tools/gpt-engineer.md) |
| AgentCoder | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/agentcoder.md) |
| AI Shell | 💻 Terminal AI | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/ai-shell.md) |
| AutoCodeRover | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/autocoderover.md) |
| AutoGen | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/autogen.md) |
| bolt.new | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/bolt-new.md) |
| ChatDev | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/chatdev.md) |
| CodeReview AI | 🔍 Code Review | Partial | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/codereview-ai.md) |
| Continue | 🔌 IDE Extension | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/continue.md) |
| Devika | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/devika.md) |
| Double (Bloop) | 🏗️ Code Generation | Archived | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/double-bloop.md) |
| Draw-a-UI | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/draw-a-ui.md) |
| E2B | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/e2b.md) |
| Fixie / AI.JSX | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/fixie-ai-jsx.md) |
| Google Agent Development Kit (ADK) | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/google-adk.md) |
| LangChain | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/langchain.md) |
| LlamaIndex | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/llamaindex.md) |
| MCP: Atlassian (Confluence/Jira) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-atlassian.md) |
| MCP: BrowserMCP | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-browser.md) |
| MCP: Chrome (mcp-chrome) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-chrome.md) |
| MCP: Context7 | 🔗 MCP Server | Yes | 🟢 None | — | — | No | Yes | 2026-10-20 | [→](tools/mcp-context7.md) |
| MCP: FastMCP (Prefect) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-fastmcp.md) |
| MCP: Firecrawl | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-firecrawl.md) |
| MCP: GhidraMCP | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-ghidra.md) |
| MCP: GitHub Server | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-github.md) |
| MCP: GitMCP | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-gitmcp.md) |
| MCP: MCP Toolbox for Databases (Google) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-genai-toolbox.md) |
| MCP: Official Servers (filesystem, git, fetch, memory, time) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-official-servers.md) |
| MCP: PAL Server | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-pal.md) |
| MCP: Playwright (Microsoft) | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-playwright.md) |
| MCP: WhatsApp | 🔗 MCP Server | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/mcp-whatsapp.md) |
| MetaGPT | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/metagpt.md) |
| Micro Agent | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/micro-agent.md) |
| Morph | 🏗️ Code Generation | Partial | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/morph.md) |
| Plandex | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/plandex.md) |
| PR-Agent (formerly Qodo PR-Agent) | 🔍 Code Review | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/qodo-pr-agent.md) |
| Privy | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/privy.md) |
| Pydantic AI | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/pydantic-ai.md) |
| Rawdog | 💻 Terminal AI | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/rawdog.md) |
| Refact.ai | 🏗️ Code Generation | Archived | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/refact-ai.md) |
| Roo Code | 🔌 IDE Extension | Archived | 🟢 None | — | N/A in the final release (v3.54.0) … | No | No | 2026-10-20 | [→](tools/roo-code.md) |
| Screenshot to Code | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/screenshot-to-code.md) |
| ShellGPT | 💻 Terminal AI | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/shellgpt.md) |
| Smol Developer | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/smol-developer.md) |
| smolagents (Hugging Face) | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/smolagents.md) |
| StarCoder | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/starcoder.md) |
| SWE-agent | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/swe-agent.md) |
| Toolhouse | 🧩 Agent Framework | Partial | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/toolhouse.md) |
| Vercel AI SDK | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | No | 2026-10-20 | [→](tools/vercel-ai-sdk.md) |
| Cosine (Genie) | 🤖 Coding Agent | No | ⚫ Unknown | — | On-prem deployment option available for enterprise | Yes | Unknown | 2026-10-20 | [→](tools/cosine-genie.md) |
| Google Antigravity | 🔌 IDE Extension | No | ⚫ Unknown | Google first-party | App: Settings > Account > "Enable Telemetry" … | Yes | Yes | 2026-10-20 | [→](tools/antigravity.md) |
| Magic AI | 🤖 Coding Agent | No | ⚫ Unknown | — | — | Unknown | Unknown | 2026-10-20 | [→](tools/magic-ai.md) |
| Poolside AI | 🏗️ Code Generation | No | ⚫ Unknown | — | On-prem deployment option available | Unknown | Unknown | 2026-10-20 | [→](tools/poolside-ai.md) |
| Safurai | 🔌 IDE Extension | No | ⚫ Unknown | — | Self-hosted option available for enterprise | Unknown | Unknown | 2026-03-23 | [→](tools/safurai.md) |
| Stenography AI | 🏗️ Code Generation | No | ⚫ Unknown | — | — | Yes | Unknown | 2026-10-20 | [→](tools/stenography-ai.md) |
<!-- END GENERATED:table -->

---

## Red Flags — Hall of Shame

Findings below are from source code at a pinned commit or from the vendor's own documentation, unless marked as reported by third parties. Each tool page links the evidence.

| Tool | What We Found | Severity |
|------|--------------|----------|
| **[GPT Pilot](tools/gpt-pilot.md)** | A malicious commit (2025-08-24, disguised as a revert) hid a credential-stealing loader in `core/telemetry/` until it was removed on 2026-06-11. The README tells anyone who ran from source in that window to rotate credentials. Telemetry itself is ON by default and includes app-description prompts. | Critical |
| **[Trae (ByteDance)](tools/trae.md)** | Independent testing in July 2025 found telemetry continuing after the settings opt-out; ByteDance then reworded the toggle to cover only VS Code-framework telemetry. Trae's own blog says some telemetry continues in Privacy Mode. | Critical |
| **[Melty](tools/melty.md)** | Sends the full text of every chat message to PostHog, and diff-failure events include file content. No opt-out. | High |
| **[Aide](tools/aide.md)** | The sidecar backend sends LLM requests (prompts plus code context) and responses to PostHog and Parea; the extension's `disableTelemetry` setting does not cover it. Project archived. | High |
| **[Kilo Code](tools/kilo-code.md)** | CLI telemetry ON by default, keyed to the account email when signed in, with GeoIP enabled. If `~/.conda/aau_token` exists, it runs `conda info` to read Anaconda's anonymous-usage client token and attaches it to events. | High |
| **[Qwen Code](tools/qwen-code.md)** | Usage statistics go to Alibaba Cloud RUM for every auth type, including a custom OpenAI-compatible `base_url`, although the docs say API-key users get no extra collection. | High |
| **[Sweep (OSS)](tools/sweep.md)** | The self-hosted server sends issue titles, repo names and GitHub usernames to Sweep's PostHog through a hard-coded key, with no documented off switch. Unmaintained. | High |
| **[Kodu AI](tools/kodu-ai.md)** | Looks up the user's public IP via ipinfo.io and attaches it to Amplitude analytics. No documented opt-out. | High |
| **[Cline](tools/cline.md)** | We previously listed Cline as telemetry-free. PostHog telemetry is ON by default (an unset setting counts as opted in), and Cline's docs say telemetry for its own providers can include prompts. | Medium |
| **[OpenHands](tools/openhands.md)** | An anonymous install event (random ID, basic browser info) is sent before consent, through a first-party proxy the code says exists to avoid ad blockers. Other events wait for consent; Do Not Track disables everything. | Medium |
| **[OpenAI Agents SDK](tools/openai-agents-sdk.md)** | Tracing is ON by default and spans include LLM inputs/outputs and tool I/O, sent to OpenAI even when the agent uses another model provider (if an OpenAI key is available). | Medium |
| **[Gemini CLI](tools/gemini-cli.md)** | Usage statistics are ON by default and include the signed-in Google account email, while the docs say email is not collected. | Medium |
| **[PearAI](tools/pearai.md)** | The webview initializes and identifies the user in PostHog regardless of the `allowAnonymousTelemetry` setting. | Medium |
| **[Cursor](tools/cursor.md)** | Without Privacy Mode, Cursor may store and train on codebase data, prompts and editor actions (per Cursor's data-use page). Requests go through Cursor's backend even with your own API key. | Medium |
| **Training by default** | [GitHub Copilot](tools/github-copilot.md) Free/Pro/Pro+ (since 2026-04-24), [v0](tools/v0.md) Hobby/Free, [Lovable](tools/lovable.md) Free/Pro (since 2026-09-09), [Perplexity](tools/perplexity.md) consumer plans and [JetBrains AI](tools/jetbrains-ai.md) non-commercial licenses use interaction data unless you opt out. | Medium |

> Found something worse? [Open an issue](https://github.com/pwchiefy/agent-snitch-list/issues/new?template=update-tool.yml).

---

## Privacy Champions

No telemetry found in current source, and actively maintained or stable.

| Tool | Why It's Great |
|------|---------------|
| **[SWE-agent](tools/swe-agent.md)** | Princeton research project. No telemetry infrastructure. |
| **[LangChain](tools/langchain.md)** | No built-in telemetry. Tracing is opt-in through LangSmith, a separate product. |
| **[LlamaIndex](tools/llamaindex.md)** | No telemetry in `llama-index-core`. |
| **[smolagents](tools/smolagents.md)** | Hugging Face's agent library. No telemetry in the library source. |
| **[Pydantic AI](tools/pydantic-ai.md)** | Instrumentation is off by default; Logfire is an optional extra you configure yourself. |
| **[Google ADK](tools/google-adk.md)** | No telemetry. It only adds client labels to Google API calls you already make. |
| **[Official MCP servers](tools/mcp-official-servers.md)** | The reference servers from the MCP project contain no telemetry. |
| **[Playwright MCP](tools/mcp-playwright.md)** | Microsoft's browser MCP server. No telemetry. |

**Worth noting:** the 2026-03 edition listed Cline, Void and OpenCode here. Cline and Void turned out to ship default-on telemetry, and OpenCode's new desktop and web builds include Sentry (its CLI is still clean). In this dataset, the tools with no telemetry are mostly community or research projects; venture-backed products more often ship analytics SDKs.

---

## How to Contribute

- **Add a new tool**: [Open an issue](https://github.com/pwchiefy/agent-snitch-list/issues/new?template=new-tool.yml) or submit a PR
- **Update existing data**: [Open an issue](https://github.com/pwchiefy/agent-snitch-list/issues/new?template=update-tool.yml) or submit a PR
- **Dispute a finding**: [Use the dispute template](https://github.com/pwchiefy/agent-snitch-list/issues/new?template=dispute.yml) — we take accuracy seriously

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines, evidence standards, and the review process.

---

## Methodology

Every entry in this list is backed by evidence: source code analysis, network traffic inspection, dependency audits, or official documentation review. 

Our research process covers:
- GitHub code search for telemetry patterns (`posthog`, `segment`, `sentry`, `amplitude`, `rudderstack`, `mixpanel`, etc.)
- Dependency tree analysis (`package.json`, `requirements.txt`, `Cargo.toml`, etc.)
- Runtime network traffic capture
- Privacy policy and ToS review
- Official documentation audit

See [METHODOLOGY.md](METHODOLOGY.md) for the complete research framework, definitions, and verification standards.

---

## License

This work is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE).

You are free to share and adapt this material for any purpose, including commercial, as long as you give appropriate credit and distribute your contributions under the same license.

---

<p align="center">
  <em>Built by developers who read the source code so you don't have to.</em>
  <br><br>
  <strong>If this saved your team time, give it a ⭐</strong>
</p>
