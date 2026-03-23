# Agent Snitch List 🕵️

**is your clanker a snitch?**

A community-maintained audit of telemetry, analytics, and data collection in 100+ AI coding tools.

[![Tools Tracked](https://img.shields.io/badge/tools_tracked-98-blueviolet?style=for-the-badge)](https://github.com/pwchiefy/agent-snitch-list)
[![Last Updated](https://img.shields.io/badge/last_updated-2026--03--23-informational?style=for-the-badge)](https://github.com/pwchiefy/agent-snitch-list/commits/main)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/license-CC_BY--SA_4.0-lightgrey?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)

---

## At a Glance

| Status | Count | Meaning |
|--------|-------|---------|
| 🔴 Telemetry ON by default | **52** | Phones home the moment you install it |
| 🟡 Opt-in / asks first | **5** | Telemetry exists but requires your consent |
| 🟢 No telemetry | **32** | Zero phone-home behavior detected |
| ⚫ Unknown | **4** | Closed-source, couldn't verify |
| 🔵 Conditional | **2** | Depends on deployment mode |
| ☁️ SaaS-inherent | **3** | Cloud-only; telemetry is the product |
| | **98** | |

---

## Table of Contents

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

> **Legend:**
> 🔴 ON by default &nbsp;|&nbsp; 🟡 Opt-in &nbsp;|&nbsp; 🟢 None &nbsp;|&nbsp; ⚫ Unknown &nbsp;|&nbsp; 🔵 Conditional &nbsp;|&nbsp; ☁️ SaaS-inherent
>
> **Categories:**
> 🤖 Coding Agent &nbsp;|&nbsp; 🔌 IDE Extension &nbsp;|&nbsp; 🔍 Code Review &nbsp;|&nbsp; 🏗️ Code Generation &nbsp;|&nbsp; 🛡️ Security Scanning &nbsp;|&nbsp; 🧩 Agent Framework &nbsp;|&nbsp; 💻 Terminal AI

| Tool | Category | Open Source? | Default State | Analytics Provider | Disable Method | Collects Code? | Details |
|------|----------|-------------|---------------|-------------------|----------------|---------------|---------|
| Aide | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | `codestory.disableTelemetry: true` | No | [→](tools/aide.md) |
| Amazon Q Developer | 🔌 IDE Extension | No | 🔴 ON | AWS service | IDE settings toggle | Yes (free tier) | [→](tools/amazon-q-developer.md) |
| AskCodi | 🔌 IDE Extension | No | 🔴 ON | Cookies | Cookie consent | No | [→](tools/askcodi.md) |
| Augment Code | 🔌 IDE Extension | No | 🔴 ON | SaaS | Enterprise controls | No | [→](tools/augment-code.md) |
| Bito AI | 🔌 IDE Extension | Partial | 🔴 ON | GA, Mixpanel | No documented opt-out | No | [→](tools/bito-ai.md) |
| Blackbox AI | 🔌 IDE Extension | No | 🔴 ON | Custom | No documented opt-out | Yes | [→](tools/blackbox-ai.md) |
| Builder.io Visual Copilot | 🏗️ Code Generation | Partial | 🔴 ON | Custom | Privacy Mode | Snippets | [→](tools/builder-io-visual-copilot.md) |
| Claude Code | 🤖 Coding Agent | Yes | 🔴 ON | Statsig, Sentry | `DISABLE_TELEMETRY=1` | No | [→](tools/claude-code.md) |
| Codacy | 🛡️ Security Scanning | Partial | 🔴 ON | Cookies | Cookie consent | No | [→](tools/codacy.md) |
| CodeGeeX | 🔌 IDE Extension | Yes | 🔴 ON | Custom | `Codegeex.Privacy` (partial) | Yes (unless Privacy) | [→](tools/codegeex.md) |
| CodeRabbit | 🔍 Code Review | No | 🔴 ON | SaaS | Privacy opt-out | Ephemeral | [→](tools/coderabbit.md) |
| Codex CLI | 🤖 Coding Agent | Yes | 🔴 ON | Statsig | `analytics: false` in config | No | [→](tools/codex-cli.md) |
| Codejet | 🏗️ Code Generation | No | 🔴 ON | Cookies | Cookie consent | No | [→](tools/codejet.md) |
| Composio | 🧩 Agent Framework | Yes | 🔴 ON | Custom | `COMPOSIO_DISABLE_TELEMETRY=true` | No | [→](tools/composio.md) |
| Continue | 🔌 IDE Extension | Yes | 🔴 ON | PostHog, Sentry | `allowAnonymousTelemetry: false` | No | [→](tools/continue.md) |
| CrewAI | 🧩 Agent Framework | Yes | 🔴 ON | OpenTelemetry | `CREWAI_DISABLE_TELEMETRY=true` | No | [→](tools/crewai.md) |
| Cursor | 🔌 IDE Extension | No | 🔴 ON | PostHog | Privacy Mode toggle | Yes (unless Privacy Mode) | [→](tools/cursor.md) |
| Devon | 🤖 Coding Agent | Yes | 🔴 ON | PostHog | `DEVON_TELEMETRY_DISABLED=true` | No | [→](tools/devon.md) |
| Double (Bloop) | 🔌 IDE Extension | Archived | 🔴 ON | Sentry | No documented opt-out | Unknown | [→](tools/double-bloop.md) |
| GPT Pilot | 🤖 Coding Agent | Yes | 🔴 ON | Custom | `DISABLE_TELEMETRY` env | Prompts | [→](tools/gpt-pilot.md) |
| GitHub Copilot | 🔌 IDE Extension | Partial | 🔴 ON | GitHub service | VS Code + GitHub settings | Yes (free tier) | [→](tools/github-copilot.md) |
| GitWit | 🏗️ Code Generation | Yes | 🔴 ON | Vercel Analytics | Self-host | No | [→](tools/gitwit.md) |
| JetBrains AI | 🔌 IDE Extension | No | 🔴 ON | Proprietary | Privacy Settings | Opt-in only | [→](tools/jetbrains-ai.md) |
| Kodu AI | 🔌 IDE Extension | Yes | 🔴 ON | Amplitude | None found | No (fetches IP) | [→](tools/kodu-ai.md) |
| Kombai | 🏗️ Code Generation | No | 🔴 ON | SaaS | No documented opt-out | No | [→](tools/kombai.md) |
| Lovable | 🏗️ Code Generation | No | 🔴 ON | SaaS | No documented opt-out | Yes | [→](tools/lovable.md) |
| Magic AI | 🏗️ Code Generation | No | 🔴 ON | SaaS | No documented opt-out | No (enterprise) | [→](tools/magic-ai.md) |
| Marblism | 🏗️ Code Generation | No | 🔴 ON | SaaS | Opt-out page | Prompts | [→](tools/marblism.md) |
| Mentat | 🤖 Coding Agent | Archived | 🔴 ON | Sentry | No documented opt-out | No | [→](tools/mentat.md) |
| Mintlify | 🏗️ Code Generation | Yes | 🔴 ON | PostHog, Segment | `telemetry.enabled: false` | No | [→](tools/mintlify.md) |
| Mistral Vibe | 🤖 Coding Agent | Yes | 🔴 ON | Custom | `enable_telemetry: false` | No | [→](tools/mistral-vibe.md) |
| Mutable AI | 🏗️ Code Generation | No | 🔴 ON | SaaS | Support request | Yes | [→](tools/mutable-ai.md) |
| Open Interpreter | 💻 Terminal AI | Yes | 🔴 ON | PostHog | `--disable_telemetry` / env | No | [→](tools/open-interpreter.md) |
| PearAI | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | `allowAnonymousTelemetry: false` | Prompts (QA) | [→](tools/pearai.md) |
| Perplexity | 🤖 Coding Agent | No | 🔴 ON | GA, SaaS | Training opt-out | Prompts | [→](tools/perplexity.md) |
| Pieces | 🔌 IDE Extension | No | 🔴 ON | SaaS | Settings checkbox | No | [→](tools/pieces.md) |
| Refact.ai | 🔌 IDE Extension | Yes | 🔴 ON | Custom | `basic_telemetry: false` | No | [→](tools/refact-ai.md) |
| Replit Agent | 🏗️ Code Generation | No | 🔴 ON | GA, proprietary | Limited | Yes (ML training) | [→](tools/replit-agent.md) |
| Roo Code | 🔌 IDE Extension | Yes | 🔴 ON | PostHog | Settings toggle | No | [→](tools/roo-code.md) |
| Snyk Code AI | 🛡️ Security Scanning | Yes | 🔴 ON | Custom API | `SNYK_DISABLE_ANALYTICS=1` | No | [→](tools/snyk-code-ai.md) |
| Sourcegraph Cody | 🔌 IDE Extension | Archived | 🔴 ON | GraphQL, OTLP, Sentry | `cody.experimental.telemetry.enabled: false` | Prompts (cloud) | [→](tools/sourcegraph-cody.md) |
| Supermaven | 🔌 IDE Extension | Partial | 🔴 ON | Server-side | No documented opt-out | Yes (7-day) | [→](tools/supermaven.md) |
| Tabby | 🔌 IDE Extension | Yes | 🔴 ON | Custom | `anonymousUsageTracking.disable: true` | No | [→](tools/tabby.md) |
| Tabnine | 🔌 IDE Extension | Yes | 🔴 ON | Application Insights | VS Code telemetry setting | No | [→](tools/tabnine.md) |
| Trae (ByteDance) | 🔌 IDE Extension | No | 🔴 ON | Custom + fingerprinting | Privacy Mode (unreliable) | Fingerprints | [→](tools/trae.md) |
| VS IntelliCode | 🔌 IDE Extension | No | 🔴 ON | Microsoft | VS telemetry settings | No | [→](tools/vs-intellicode.md) |
| Warp AI | 💻 Terminal AI | No | 🔴 ON | RudderStack, Sentry | Settings > Privacy | No | [→](tools/warp-ai.md) |
| Windsurf/Codeium | 🔌 IDE Extension | No | 🔴 ON | Custom | Account settings | Yes (individual) | [→](tools/windsurf-codeium.md) |
| Zed AI | 🔌 IDE Extension | Yes | 🔴 ON | Sentry, Amplitude | Settings JSON | No | [→](tools/zed-ai.md) |
| v0 by Vercel | 🏗️ Code Generation | No | 🔴 ON | SaaS | `vercel telemetry disable` | Prompts | [→](tools/v0-by-vercel.md) |
| Fixie/AI.JSX | 🧩 Agent Framework | Yes | 🔵 Platform only | OTLP | Don't configure OTEL | No | [→](tools/fixie-ai-jsx.md) |
| Plandex | 🤖 Coding Agent | Yes | 🔵 Cloud only | GA, Rollbar | Self-host | No | [→](tools/plandex.md) |
| Semgrep | 🛡️ Security Scanning | Yes | 🔵 AUTO | Custom | `--metrics=off` | No | [→](tools/semgrep.md) |
| Devin | 🤖 Coding Agent | No | ☁️ SaaS | SaaS | Data Controls | No | [→](tools/devin.md) |
| Ellipsis | 🔍 Code Review | No | ☁️ SaaS | SaaS | No opt-out | Ephemeral | [→](tools/ellipsis.md) |
| Phind | 🤖 Coding Agent | No | ☁️ SaaS | SaaS | Paid plans | Queries | [→](tools/phind.md) |
| What The Diff | 🔍 Code Review | No | ☁️ SaaS | SaaS | No opt-out | No | [→](tools/what-the-diff.md) |
| Aider | 🤖 Coding Agent | Yes | 🟡 Opt-in | PostHog | `--analytics-disable` | No | [→](tools/aider.md) |
| Codegen | 🤖 Coding Agent | Yes | 🟡 Opt-in | OpenTelemetry | `codegen config telemetry disable` | No | [→](tools/codegen.md) |
| GPT-Engineer | 🏗️ Code Generation | Yes | 🟡 Opt-in | RudderStack | Answer "n" | Prompts (if consented) | [→](tools/gpt-engineer.md) |
| Goose | 🤖 Coding Agent | Yes | 🟡 Opt-in | PostHog | `GOOSE_TELEMETRY_OFF=1` | No | [→](tools/goose.md) |
| OpenHands | 🤖 Coding Agent | Yes | 🟡 Opt-in | PostHog | Settings toggle | No | [→](tools/openhands.md) |
| AI Shell | 💻 Terminal AI | Yes | 🟢 None | — | — | No | [→](tools/ai-shell.md) |
| AgentCoder | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/agentcoder.md) |
| AutoCodeRover | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/autocoderover.md) |
| AutoGen | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/autogen.md) |
| ChatDev | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/chatdev.md) |
| Cline | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/cline.md) |
| CodeReview AI | 🔍 Code Review | No | 🟢 None | — | — | No | [→](tools/codereview-ai.md) |
| Devika | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/devika.md) |
| Draw-a-UI | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | [→](tools/draw-a-ui.md) |
| E2B | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/e2b.md) |
| LangChain | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/langchain.md) |
| LlamaIndex | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/llamaindex.md) |
| Melty | 🔌 IDE Extension | Yes | 🟢 None | — | — | No | [→](tools/melty.md) |
| MetaGPT | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/metagpt.md) |
| Micro Agent | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/micro-agent.md) |
| Morph | 🧩 Agent Framework | No | 🟢 None | — | — | No | [→](tools/morph.md) |
| OpenCode | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/opencode.md) |
| OpenUI | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | [→](tools/openui.md) |
| Privy | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/privy.md) |
| Qodo PR-Agent | 🔍 Code Review | Yes | 🟢 None | — | — | No | [→](tools/qodo-pr-agent.md) |
| Rawdog | 💻 Terminal AI | Yes | 🟢 None | — | — | No | [→](tools/rawdog.md) |
| SWE-agent | 🤖 Coding Agent | Yes | 🟢 None | — | — | No | [→](tools/swe-agent.md) |
| Screenshot to Code | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | [→](tools/screenshot-to-code.md) |
| ShellGPT | 💻 Terminal AI | Yes | 🟢 None | — | — | No | [→](tools/shellgpt.md) |
| Smol Developer | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | [→](tools/smol-developer.md) |
| StarCoder | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/starcoder.md) |
| Sweep (OSS) | 🔍 Code Review | Archived | 🟢 None | — | — | No | [→](tools/sweep.md) |
| Toolhouse | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/toolhouse.md) |
| Vercel AI SDK | 🧩 Agent Framework | Yes | 🟢 None | — | — | No | [→](tools/vercel-ai-sdk.md) |
| Void | 🔌 IDE Extension | Yes | 🟢 None | — | — | No | [→](tools/void.md) |
| bolt.new (OSS) | 🏗️ Code Generation | Yes | 🟢 None | — | — | No | [→](tools/bolt-new.md) |
| Cosine (Genie) | 🤖 Coding Agent | No | ⚫ Unknown | SaaS | On-prem option | No (self-hosted) | [→](tools/cosine-genie.md) |
| Poolside AI | 🏗️ Code Generation | No | ⚫ Unknown | — | On-prem | No | [→](tools/poolside-ai.md) |
| Safurai | 🔌 IDE Extension | No | ⚫ Unknown | — | Self-hosted option | Unknown | [→](tools/safurai.md) |
| Stenography AI | 🏗️ Code Generation | No | ⚫ Unknown | — | Unknown | Unknown | [→](tools/stenography-ai.md) |

---

## Red Flags

| Tool | What We Found | Severity |
|------|--------------|----------|
| **Trae (ByteDance)** | Telemetry persists after opt-out. Hardware fingerprinting via canvas/WebGL. Privacy policy claims 5-year data retention. "Privacy Mode" toggle does not fully disable collection. | Critical |
| **Kodu AI** | Fetches user's external IP address on startup. No documented opt-out mechanism. Amplitude analytics key hardcoded in source. | High |
| **Roo Code** | Known bug where telemetry events bypass the opt-out toggle. PostHog events fire even when setting is disabled. | High |
| **Cursor** | PostHog analytics remain active even with Privacy Mode enabled. Privacy Mode only controls whether code content is sent to Cursor servers — it does not disable behavioral telemetry. | High |
| **Replit Agent** | Code you write on Replit is used for ML model training per their ToS. "Limited" opt-out options available. | High |
| **PearAI** | User prompts are logged and retained for "QA purposes." Inherited from Continue fork but with additional server-side logging. | Medium |
| **Blackbox AI** | No documented opt-out. Closed source. Code content collection confirmed. | High |
| **Supermaven** | Retains code context for 7 days server-side. No documented way to disable telemetry. | Medium |

> Found something worse? [Open an issue](https://github.com/pwchiefy/agent-snitch-list/issues/new?template=update-tool.yml).

---

## Privacy Champions

Zero telemetry, zero analytics, zero tracking. 

| Tool | Why It's Great |
|------|---------------|
| **Cline** | Full-featured VS Code coding agent. Zero telemetry. All processing happens locally or via your own API keys. |
| **OpenCode** | Terminal-based coding agent with no analytics whatsoever. Clean codebase, no tracking dependencies. |
| **SWE-agent** | Princeton research project. Pure open source, no telemetry infrastructure. Focused on the science, not the metrics. |
| **Void** | Open-source IDE extension explicitly built as a privacy-first alternative. No telemetry by design. |
| **bolt.new (OSS)** | Full-stack code generation with zero tracking in the open-source version. |
| **LangChain** | The most popular agent framework ships with no built-in telemetry. Tracing is opt-in via LangSmith, a separate product. |
| **AutoGen** | Microsoft's multi-agent framework. No telemetry despite being backed by a company that loves telemetry. |

**The pattern is clear:** open-source tools with no VC funding tend to have zero telemetry. The moment a tool takes venture capital, PostHog shows up in `package.json` within two sprints.

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
