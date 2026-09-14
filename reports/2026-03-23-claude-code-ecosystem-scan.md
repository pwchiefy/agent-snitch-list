# Claude Code Ecosystem Scan — Installable Components

**Date:** 2026-03-23
**Purpose:** Catalog repos/packages that users actually install into their Claude Code setup — skills, hooks, MCP servers, plugins, proxies, config bundles, and orchestrators — with risk assessment for each.

---

## Attack Surface Summary

Claude Code's extensibility creates **six distinct installation vectors**, each with different risk profiles:

| Vector | How It Runs | Risk Level | Mechanism |
|--------|-------------|------------|-----------|
| **Skills** (`.claude/commands/*.md`) | Injected into LLM context as instructions | Medium | Can instruct Claude to run arbitrary bash, exfiltrate data via tool calls |
| **Hooks** (`.claude/settings.json` hooks) | Execute shell commands on tool events | **Critical** | Direct shell execution on PreToolUse/PostToolUse/Notification events |
| **MCP Servers** | Run as persistent child processes | **Critical** | Full code execution, network access, filesystem access |
| **Plugins** (marketplace JSON) | Mixed — skills + hooks + MCP | **Critical** | Bundles multiple vectors; single install grants broad access |
| **Proxies** | MITM between Claude Code and API | **Critical** | See/modify all prompts, responses, code, and API keys |
| **Config Bundles** | Replace/modify `.claude/` directory | High | Can install any of the above silently |

---

## Category 1: Skills (Markdown Slash Commands)

Skills are `.md` files in `.claude/commands/`. They inject instructions into Claude's context. **Risk: Medium** — they don't execute code directly, but they can instruct Claude to run shell commands, write files, and make network requests.

### Mega Collections & Marketplaces

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 12,517 | 700+ skills for Claude Code, Codex, Cursor, etc. | **HIGH** — Massive collection; impossible to audit every skill. Skills may instruct agent to run arbitrary bash. |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 6,531 | 192+ skills for Claude Code and 8 other agents | **HIGH** — Large bundle from single author. Covers engineering, marketing, compliance, C-level advisory. |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | 26,805 | 1,304+ agentic skills with installer CLI | **HIGH** — Includes CLI installer that writes to your `.claude/commands/`. Installer itself runs code. |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 47,196 | Curated list of Claude skills and resources | **MEDIUM** — Aggregator/index, not a direct installer. Links to many third-party repos. |
| [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) | 1,691 | 340 plugins + 1,367 skills with CCPI package manager | **HIGH** — Package manager installs skills automatically. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 9,257 | Personal skill directory from Matt Pocock | **LOW** — Well-known TypeScript educator, small curated set. |
| [twostraws/Swift-Agent-Skills](https://github.com/twostraws/Swift-Agent-Skills) | 803 | Swift/Apple development skills | **LOW** — Trusted author (Hacking with Swift), domain-specific. |

### High-Profile Individual Skills

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | 16,940 | Manus-style persistent markdown planning | **LOW** — Pure planning methodology in markdown. |
| [blader/humanizer](https://github.com/blader/humanizer) | 10,729 | Removes AI-generated writing markers | **MEDIUM** — Instructs Claude to rewrite text; could be used to obfuscate AI output in sensitive contexts. |
| [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | 5,388 | Turns codebases into interactive knowledge graphs | **MEDIUM** — Reads and indexes your entire codebase. |
| [trailofbits/skills](https://github.com/trailofbits/skills) | 3,837 | Security research and vulnerability detection | **LOW** — Trail of Bits is a reputable security firm. Skills are security-focused. |
| [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) | 2,117 | Browser automation with Playwright | **HIGH** — Claude autonomously writes and executes Playwright scripts. Browser automation = credential/cookie exposure risk. |
| [htdt/godogen](https://github.com/htdt/godogen) | 1,881 | Builds complete Godot 4 projects | **MEDIUM** — Generates and writes game project files. |
| [shuvonsec/claude-bug-bounty](https://github.com/shuvonsec/claude-bug-bounty) | 1,025 | AI-assisted bug bounty hunting | **HIGH** — Performs recon, IDOR, XSS, SSRF, OAuth testing. Could be misused or expose targets. |
| [skills-directory/skill-codex](https://github.com/skills-directory/skill-codex) | 989 | Delegates prompts to OpenAI Codex | **MEDIUM** — Sends your context to a second AI provider (OpenAI). Data leaves Anthropic ecosystem. |
| [blader/napkin](https://github.com/blader/napkin) | 432 | Persistent memory of agent mistakes via markdown | **LOW** — Writes to local markdown files only. |
| [DrCatHicks/learning-opportunities](https://github.com/DrCatHicks/learning-opportunities) | 646 | Deliberate skill development during AI coding | **LOW** — Educational/process skill. |
| [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills) | 477 | HashiCorp product skills | **LOW** — From HashiCorp official org. |

### Niche/Domain Skills

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [CharlesWiltgen/Axiom](https://github.com/CharlesWiltgen/Axiom) | 675 | iOS/iPadOS/watchOS development | LOW |
| [Aaronontheweb/dotnet-skills](https://github.com/Aaronontheweb/dotnet-skills) | 670 | .NET development skills | LOW |
| [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | 1,335 | Android reverse engineering | **MEDIUM** — RE tooling could be misused. |
| [Ceeon/videocut-skills](https://github.com/Ceeon/videocut-skills) | 1,186 | Video editing agent (Chinese) | MEDIUM — Executes ffmpeg/video tools. |
| [deusyu/translate-book](https://github.com/deusyu/translate-book) | 523 | Translates entire books using parallel subagents | MEDIUM — Processes full documents, spawns subagents. |
| [wshuyi/x-article-publisher-skill](https://github.com/wshuyi/x-article-publisher-skill) | 675 | Publishes to X (Twitter) Articles | **HIGH** — Posts content to social media on your behalf. Needs API credentials. |
| [GPTomics/bioSkills](https://github.com/GPTomics/bioSkills) | 376 | Bioinformatics skills | LOW |
| [iPlug3/audio-plugin-dev-skills](https://github.com/iPlug3/audio-plugin-dev-skills) | 47 | Audio plugin development | LOW |
| [gpshead/cpython-skills](https://github.com/gpshead/cpython-skills) | 12 | CPython development | LOW |

---

## Category 2: Hooks (Shell Execution on Events)

Hooks execute shell commands when Claude Code performs actions. **Risk: Critical** — they run arbitrary code triggered by every tool invocation.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) | 3,383 | Master guide + hook collection | **HIGH** — Teaches and provides hooks that execute on every tool call. |
| [disler/claude-code-hooks-multi-agent-observability](https://github.com/disler/claude-code-hooks-multi-agent-observability) | 1,292 | Real-time monitoring via hook events | **HIGH** — Captures ALL tool usage events and streams to web interface. By design, this is a telemetry/surveillance system. |
| [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks) | 298 | Growing collection of copy-paste hooks | **MEDIUM** — Individual hooks to review, but shell execution. |
| [shanraisshan/claude-code-hooks](https://github.com/shanraisshan/claude-code-hooks) | 189 | Voice integration via hooks | **MEDIUM** — Audio capture + shell execution. |
| [GowayLee/cchooks](https://github.com/GowayLee/cchooks) | 124 | Python SDK for Claude Code hooks | **HIGH** — Framework for building hooks; makes it easy to create complex hook chains. |
| [beyondcode/claude-hooks-sdk](https://github.com/beyondcode/claude-hooks-sdk) | 62 | PHP SDK for Claude Code hooks | **HIGH** — Same concern as Python SDK. |
| [gabriel-dehan/claude_hooks](https://github.com/gabriel-dehan/claude_hooks) | 36 | Ruby DSL for hooks | HIGH |
| [sushichan044/cc-hooks-ts](https://github.com/sushichan044/cc-hooks-ts) | 36 | TypeScript hooks with full type safety | HIGH |
| [webdevtodayjason/claude-hooks](https://github.com/webdevtodayjason/claude-hooks) | 73 | CLI manager for hooks | **MEDIUM** — Manages hooks installation. |
| [ramakay/claude-organizer](https://github.com/ramakay/claude-organizer) | 62 | AI file organization via hooks | **HIGH** — Moves/renames files automatically based on AI decisions. |
| [Dicklesworthstone/post_compact_reminder](https://github.com/Dicklesworthstone/post_compact_reminder) | 34 | Post-compaction AGENTS.md re-read hook | LOW — Simple re-injection, limited scope. |
| [tzachbon/claude-model-router-hook](https://github.com/tzachbon/claude-model-router-hook) | 25 | Auto-switches model tier based on complexity | **MEDIUM** — Intercepts and modifies model selection. |
| [williamkapke/MadameClaude](https://github.com/williamkapke/MadameClaude) | 21 | Monitoring system that captures tool usage events to web UI | **HIGH** — Surveillance tool. Captures everything Claude does. |
| [slavaspitsyn/claude-code-security-hooks](https://github.com/slavaspitsyn/claude-code-security-hooks) | 7 | 7 layers of defense against prompt injection | **MEDIUM** — Security-focused but still executes shell commands on events. |
| [ihavespoons/hooksy](https://github.com/ihavespoons/hooksy) | 7 | Security hook tool | MEDIUM |

---

## Category 3: MCP Servers (Persistent Processes)

MCP servers run as child processes with full system access. **Risk: Critical** — they can read/write files, make network requests, and execute arbitrary code.

### High-Profile MCP Servers for Claude Code

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [oraios/serena](https://github.com/oraios/serena) | 21,977 | Semantic retrieval and editing (MCP + integrations) | **HIGH** — Deep codebase access with retrieval capabilities. |
| [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 15,939 | Build n8n workflows via MCP | **HIGH** — Creates automation workflows that execute independently. |
| [yctimlin/mcp_excalidraw](https://github.com/yctimlin/mcp_excalidraw) | 1,523 | Excalidraw canvas toolkit | MEDIUM — Diagram tool, limited scope. |
| [grahama1970/claude-code-mcp-enhanced](https://github.com/grahama1970/claude-code-mcp-enhanced) | 106 | Enhanced Claude Code MCP with orchestration | **HIGH** — Wraps Claude Code itself as an MCP server. |
| [trayders/trayd-mcp](https://github.com/trayders/trayd-mcp) | 11 | Trade Robinhood via Claude Code | **CRITICAL** — Financial trading. Executes real trades. |
| [buildoak/eywa-continuum](https://github.com/buildoak/eywa-continuum) | 7 | Cross-session memory MCP | MEDIUM — Persists conversation data. |
| [scottf007/llm_memory](https://github.com/scottf007/llm_memory) | 4 | Memory system with SQLite + web dashboard | **MEDIUM** — Stores conversation data, exposes web dashboard. |
| [tjx666/vscode-mcp](https://github.com/tjx666/vscode-mcp) | 65 | LSP diagnostics MCP for VS Code | MEDIUM — Reads editor state. |
| [Gonzih/tokwave](https://github.com/Gonzih/tokwave) | 1 | Token waveform visualizer (MCP + hook) | LOW |

### MCP Aggregator Lists (Discovery Risk)

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 83,905 | Largest MCP server collection | **INDEX RISK** — Not installable itself, but directs users to hundreds of MCP servers with varying quality. |
| [Puliczek/awesome-mcp-security](https://github.com/Puliczek/awesome-mcp-security) | 670 | MCP security resources | Useful for defense. |
| [ccplugins/awesome-claude-code-plugins](https://github.com/ccplugins/awesome-claude-code-plugins) | 645 | Claude Code slash commands, subagents, MCP, hooks | **INDEX RISK** — Aggregates all vector types. |

---

## Category 4: Plugins & Marketplaces (Bundled Vectors)

Plugins combine skills + hooks + MCP servers + config. **Risk: Critical** — a single "install" can deploy multiple attack vectors.

### Official & Major Marketplaces

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 14,284 | Anthropic-managed plugin directory | **LOW** — Official, curated by Anthropic. |
| [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) | 716 | Curated plugin marketplace | MEDIUM — Third-party curation. |
| [ananddtyagi/cc-marketplace](https://github.com/ananddtyagi/cc-marketplace) | 666 | Community marketplace | **MEDIUM** — Community submissions, varying quality. |
| [daymade/claude-code-skills](https://github.com/daymade/claude-code-skills) | 711 | "Professional" skills marketplace | MEDIUM |
| [mhattingpete/claude-skills-marketplace](https://github.com/mhattingpete/claude-skills-marketplace) | 488 | Git automation, testing, code review | MEDIUM |

### High-Star Plugins (Installable Bundles)

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 39,801 | Auto-captures everything Claude does, compresses with AI, reinjects | **CRITICAL** — By design captures ALL agent actions. Uses claude-agent-sdk. Stores session history. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 41,354 | Garry Tan's Claude Code setup: 15 tools as CEO/Designer/QA | **HIGH** — Celebrity-endorsed bundle. 15 opinionated tools means 15 things to audit. |
| [get-shit-done/get-shit-done](https://github.com/gsd-build/get-shit-done) | 39,642 | Meta-prompting and context engineering system | **HIGH** — Modifies how Claude Code processes all requests. |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | 11,857 | Shows context usage, active tools, running agents, todo progress | **MEDIUM** — Monitors Claude Code internals. |
| [agenticnotetaking/arscontexta](https://github.com/agenticnotetaking/arscontexta) | 2,832 | Generates knowledge systems from conversations | **HIGH** — Processes all conversation content. Outputs to markdown files. |
| [kingbootoshi/cartographer](https://github.com/kingbootoshi/cartographer) | 523 | Maps codebases using parallel AI subagents | **HIGH** — Spawns multiple subagents that read your entire codebase. |
| [hamelsmu/claude-review-loop](https://github.com/hamelsmu/claude-review-loop) | 605 | Automated code review loop with Codex | **MEDIUM** — Sends code to OpenAI Codex for review. Data leaves Anthropic. |
| [zscole/adversarial-spec](https://github.com/zscole/adversarial-spec) | 513 | Multi-LLM debate for spec refinement | **MEDIUM** — Sends data to multiple LLM providers. |
| [humanplane/homunculus](https://github.com/humanplane/homunculus) | 319 | Watches how you work, learns patterns, evolves itself | **CRITICAL** — Self-modifying plugin that observes all your behavior. |

---

## Category 5: Proxies (MITM on All Traffic)

Proxies sit between Claude Code and the Anthropic API. **Risk: Critical** — they see every prompt, response, API key, and generated code.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | 30,258 | Route Claude Code to alternative LLM providers | **CRITICAL** — All traffic passes through. Designed to redirect to non-Anthropic providers. |
| [badrisnarayanan/antigravity-claude-proxy](https://github.com/badrisnarayanan/antigravity-claude-proxy) | 3,228 | Proxy Antigravity models to Claude Code | **CRITICAL** — MITM on all API traffic. |
| [1rgs/claude-code-proxy](https://github.com/1rgs/claude-code-proxy) | 3,282 | Run Claude Code on OpenAI models | **CRITICAL** — Rewrites API calls. Sees all content. |
| [fuergaosi233/claude-code-proxy](https://github.com/fuergaosi233/claude-code-proxy) | 2,217 | Claude Code to OpenAI API proxy | **CRITICAL** |
| [seifghazi/claude-code-proxy](https://github.com/seifghazi/claude-code-proxy) | 415 | Captures and visualizes in-flight requests | **CRITICAL** — Explicitly designed to capture all requests/conversations. |
| [starbaser/ccproxy](https://github.com/starbaser/ccproxy) | 189 | Hook any request, modify any response, custom model routing | **CRITICAL** — Request/response modification. |
| [glidea/claude-worker-proxy](https://github.com/glidea/claude-worker-proxy) | 265 | Cloudflare Worker proxy | **CRITICAL** — Traffic goes through Cloudflare worker (third party infra). |
| [horselock/claude-code-proxy](https://github.com/horselock/claude-code-proxy) | 105 | Uses Claude Code auth for direct API calls | **CRITICAL** — Reuses your authentication tokens. |
| [CaddyGlow/ccproxy-api](https://github.com/CaddyGlow/ccproxy-api) | 205 | Unified access to multiple AI providers | CRITICAL |
| [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | 19,444 | Wraps CLI tools as OpenAI-compatible API | **CRITICAL** — Exposes Claude Code as an API service. |
| [zxc123aa/cc-proxy-detector](https://github.com/zxc123aa/cc-proxy-detector) | 27 | Detects proxy backend origin | Useful for defense — verifies if you're hitting real Anthropic. |

---

## Category 6: Config Bundles & Frameworks

These replace or heavily modify your `.claude/` directory. **Risk: High** — they can install skills, hooks, MCP configs, and settings.json modifications.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 101,277 | "Agent harness" — skills, instincts, memory, security | **HIGH** — Extremely popular. Comprehensive system that modifies agent behavior at every level. |
| [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | 21,863 | Config framework with commands, personas, methodologies | **HIGH** — Replaces/augments core Claude Code behavior. |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | 23,420 | CLI tool for configuring and monitoring Claude Code | **HIGH** — Modifies configuration. |
| [centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup) | 2,095 | Starter template + CLAUDE.md memory bank | MEDIUM — Template, user reviews before applying. |
| [Piebald-AI/tweakcc](https://github.com/Piebald-AI/tweakcc) | 1,393 | Customize system prompts, create custom toolsets, unlock unreleased features | **CRITICAL** — Modifies Claude Code's system prompts. Can unlock "private/unreleased features." Patches the binary. |
| [Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts) | 6,413 | All parts of Claude Code's system prompt | **MEDIUM** — Reference material, but tweakcc uses these to modify behavior. |
| [BayramAnnakov/claude-reflect](https://github.com/BayramAnnakov/claude-reflect) | 841 | Self-learning system that syncs to CLAUDE.md | **HIGH** — Automatically modifies your CLAUDE.md and AGENTS.md based on corrections. |
| [iannuttall/dotagents](https://github.com/iannuttall/dotagents) | 650 | One location for all hooks, commands, skills, AGENT/CLAUDE.md | **HIGH** — Centralizes all config vectors. |
| [alinaqi/claude-bootstrap](https://github.com/alinaqi/claude-bootstrap) | 546 | Opinionated project initialization | MEDIUM — Security-first claims, but modifies project config. |
| [alirezarezvani/claude-code-skill-factory](https://github.com/alirezarezvani/claude-code-skill-factory) | 624 | Toolkit for building and deploying skills at scale | **HIGH** — Factory for generating skills programmatically. |
| [alirezarezvani/ClaudeForge](https://github.com/alirezarezvani/ClaudeForge) | 322 | CLAUDE.md generator and maintenance tool | MEDIUM |
| [sangrokjung/claude-forge](https://github.com/sangrokjung/claude-forge) | 596 | 11 agents, 36 commands, 15 skills, 6-layer security hooks | **HIGH** — Large bundle with hooks. |
| [gadievron/raptor](https://github.com/gadievron/raptor) | 1,507 | Turns Claude Code into offensive security agent | **CRITICAL** — Offensive security tooling. Configures Claude for "adversarial thinking" and attack operations. |
| [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | 693 | Hand-crafted skills for improving agent results | LOW — Focus on quality, not execution. |

---

## Category 7: Monitoring & Telemetry (Observer Tools)

These specifically capture and report on Claude Code's behavior. Some are useful for oversight; others add new tracking.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [steveyegge/beads](https://github.com/steveyegge/beads) | 19,544 | Memory upgrade for coding agents | **MEDIUM** — Persists agent decisions across sessions. |
| [waynesutton/opensync](https://github.com/waynesutton/opensync) | 318 | Cloud-synced dashboards for Claude Code | **HIGH** — Syncs session data to cloud. Semantic search over your sessions. |
| [Ido-Levi/claude-code-tamagotchi](https://github.com/Ido-Levi/claude-code-tamagotchi) | 309 | Real-time behavioral enforcement | **HIGH** — Monitors all AI actions, detects "violations," interrupts behavior. |
| [onikan27/claude-code-monitor](https://github.com/onikan27/claude-code-monitor) | 214 | Real-time dashboard for monitoring sessions | **MEDIUM** — Local monitoring with mobile web UI via QR code. |
| [lainra/claude-code-telemetry](https://github.com/lainra/claude-code-telemetry) | 20 | Forwards telemetry to Langfuse | **HIGH** — Bridges Claude Code data to third-party analytics (Langfuse). |
| [quickcall-dev/quickcall-supertrace](https://github.com/quickcall-dev/quickcall-supertrace) | 41 | Observability tool | MEDIUM |
| [cometkim/cc-monitor-worker](https://github.com/cometkim/cc-monitor-worker) | 18 | Monitoring via Cloudflare Workers Analytics | **HIGH** — Sends data to Cloudflare analytics. |
| [tw93/claude-health](https://github.com/tw93/claude-health) | 477 | Audit Claude Code config health | **LOW** — Read-only audit of your config. |
| [ccusage (npm)](https://www.npmjs.com/package/ccusage) | — | Usage analysis for Claude Code | MEDIUM — Reads local session data. |

---

## Category 8: Orchestrators & Multi-Agent Systems

These run multiple Claude Code instances or coordinate with other AI agents.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [wshobson/agents](https://github.com/wshobson/agents) | 32,074 | Multi-agent orchestration for Claude Code | **HIGH** — Runs multiple autonomous agents. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 23,558 | Multi-agent swarm platform | **HIGH** — "Distributed swarm intelligence." Autonomous workflows. |
| [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban) | 23,664 | Kanban for Claude Code/Codex agents | MEDIUM — Task management layer. |
| [Dicklesworthstone/claude_code_agent_farm](https://github.com/Dicklesworthstone/claude_code_agent_farm) | 742 | Run 20+ Claude Code agents in parallel | **HIGH** — Automated bug fixing with parallel agents. |
| [parcadei/Continuous-Claude-v3](https://github.com/parcadei/Continuous-Claude-v3) | 3,620 | Context management via hooks/ledgers/handoffs | **HIGH** — Hooks maintain persistent state. MCP execution. |
| [yohey-w/multi-agent-shogun](https://github.com/yohey-w/multi-agent-shogun) | 1,096 | Samurai-themed multi-agent system via tmux | **MEDIUM** — Orchestrates via tmux; visible but complex. |
| [kingbootoshi/codex-orchestrator](https://github.com/kingbootoshi/codex-orchestrator) | 250 | Delegates to OpenAI Codex via tmux | **MEDIUM** — Sends work to OpenAI. |
| [team-attention/agent-council](https://github.com/team-attention/agent-council) | 119 | Multi-agent collaboration (Codex, Gemini, etc.) | **HIGH** — Sends your code context to multiple AI providers. |

---

## Category 9: OpenClaw Ecosystem (Always-On Agents)

OpenClaw runs Claude Code as a persistent daemon. **Risk: Critical** — 24/7 system access.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 331,971 | Personal AI assistant, any OS | **CRITICAL** — Always-on daemon with full system access. |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | 6,708 | Skill directory for OpenClaw | **HIGH** — Skills that run in always-on context. |
| [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 25,042 | Lightweight OpenClaw in containers | **HIGH** — Connects to WhatsApp, Telegram, Slack, Discord, Gmail. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 19,797 | 24/7 cowork app for Claude Code + others | **HIGH** — Always-on multi-agent. |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 18,346 | Context database for AI agents | MEDIUM — Storage layer. |
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 41,249 | 5,400+ OpenClaw skills | **HIGH** — Massive skill collection for always-on agents. |
| [albert-ying/agentic-cortex](https://github.com/albert-ying/agentic-cortex) | 11 | Personal AI OS on OpenClaw + MCP + voice cloning | **CRITICAL** — Voice cloning, Screenpipe integration (screen recording). |

---

## Category 10: npm Packages (Direct Install)

Packages installed via `npm install` or `npx`.

| Package | Description | Risk Notes |
|---------|-------------|------------|
| `@anthropic-ai/claude-code` | Official Claude Code | Baseline — Statsig + Sentry telemetry. |
| `@musistudio/claude-code-router` | Route to other LLM providers | **CRITICAL** — Proxy. |
| `claude-code-templates` | Templates + tracking system | **MEDIUM** — "tracking system" in description. |
| `@siteboon/claude-code-ui` | Web UI for Claude Code CLI | MEDIUM — Web interface to CLI. |
| `chrome-local-mcp` | Chrome automation MCP via Puppeteer | **HIGH** — Browser automation. |
| `ccstatusline` | Status line formatter | LOW |
| `ccusage` | Usage analysis tool | MEDIUM — Reads session data. |
| `@steipete/claude-code-mcp` | One-shot Claude Code execution MCP | HIGH — Runs Claude Code from MCP. |
| `@lmnr-ai/claude-code-proxy` | Laminar proxy (native addon) | **CRITICAL** — Native binary proxy with telemetry to Laminar. |
| `@generacy-ai/generacy-plugin-claude-code` | Runs agents in Docker containers | HIGH — Docker execution. |
| `@antseed/provider-claude-code` | Keychain provider plugin | **HIGH** — Accesses keychain. |
| `antd-claude-skill` | Ant Design skill package | LOW |
| `@swarmvault/claude-skill` | Trading execution (swaps/transactions) | **CRITICAL** — Financial transactions. |
| `deepagents-cli-claude-skill` | Deep Agents CLI skill | MEDIUM |
| `skillflag` | Skill flag producer CLI | MEDIUM — Unknown scope. |

---

## Category 11: Subagent Collections

Subagents are spawned by Claude Code to handle subtasks. They inherit permissions.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 14,881 | 100+ specialized subagents | **HIGH** — Large collection of agents with varying permissions. |
| [hesreallyhim/a-list-of-claude-code-agents](https://github.com/hesreallyhim/a-list-of-claude-code-agents) | 1,209 | Community-submitted agent list | MEDIUM — Index, not installer. |
| [0xfurai/claude-code-subagents](https://github.com/0xfurai/claude-code-subagents) | 792 | 100+ production-ready subagents | HIGH |
| [backant-io/backant-agents](https://github.com/backant-io/backant-agents) | 351 | Agents for BackAnt platform | MEDIUM |
| [darcyegb/ClaudeCodeAgents](https://github.com/darcyegb/ClaudeCodeAgents) | 614 | QA agents | MEDIUM |

---

## Category 12: Binary Patchers & System Modifiers

These modify the Claude Code binary or system behavior.

| Repo | Stars | Description | Risk Notes |
|------|-------|-------------|------------|
| [Piebald-AI/tweakcc](https://github.com/Piebald-AI/tweakcc) | 1,393 | Patches system prompts, unlocks unreleased features | **CRITICAL** — Modifies the Claude Code binary behavior. |
| [aleks-apostle/claude-code-patches](https://github.com/aleks-apostle/claude-code-patches) | 52 | Patches thinking trace display | LOW — Cosmetic only. |
| [bl-ue/tweakcc-system-prompts](https://github.com/bl-ue/tweakcc-system-prompts) | 34 | Custom system prompts for tweakcc | **HIGH** — Modified system prompts change agent behavior. |
| [jimmy927/claude-code-extension-patcher](https://github.com/jimmy927/claude-code-extension-patcher) | 15 | --dangerously-skip-permissions for VS Code extension | **CRITICAL** — Bypasses permission system. |
| [denysvitali/claude-code-patches](https://github.com/denysvitali/claude-code-patches) | 5 | Performance patches | MEDIUM |
| [omnificat/claude-code-model-patcher](https://github.com/omnificat/claude-code-model-patcher) | 1 | Thinking effort/output limit patcher | MEDIUM |
| [stripe/claude-code-patches](https://github.com/stripe/claude-code-patches) | 2 | Stripe's Claude Code patches | LOW — From Stripe official org. |

---

## Top-20 Highest Risk Installs

Ranked by (popularity x risk severity):

| # | Repo | Stars | Vector | Why It's Dangerous |
|---|------|-------|--------|-------------------|
| 1 | openclaw/openclaw | 331,971 | Daemon | Always-on, full system access, 24/7 |
| 2 | affaan-m/everything-claude-code | 101,277 | Config bundle | Modifies every layer of agent behavior |
| 3 | VoltAgent/awesome-openclaw-skills | 41,249 | Skills | 5,400 skills for always-on daemon |
| 4 | garrytan/gstack | 41,354 | Config bundle | 15 tools, celebrity trust = less scrutiny |
| 5 | thedotmack/claude-mem | 39,801 | Plugin | Captures ALL agent actions by design |
| 6 | gsd-build/get-shit-done | 39,642 | Framework | Meta-prompting modifies all request processing |
| 7 | farion1231/cc-switch | 32,281 | Desktop app | Cross-platform wrapper for multiple agents |
| 8 | wshobson/agents | 32,074 | Orchestrator | Multi-agent autonomous workflows |
| 9 | musistudio/claude-code-router | 30,258 | Proxy | All traffic visible and reroutable |
| 10 | sickn33/antigravity-awesome-skills | 26,805 | Skills + CLI | 1,304 skills with auto-installer |
| 11 | qwibitai/nanoclaw | 25,042 | Daemon | Connects to WhatsApp/Telegram/Slack/Discord/Gmail |
| 12 | ruvnet/ruflo | 23,558 | Orchestrator | Distributed swarm intelligence |
| 13 | davila7/claude-code-templates | 23,420 | Config CLI | Configuring and monitoring tool |
| 14 | SuperClaude-Org/SuperClaude_Framework | 21,863 | Framework | Replaces core Claude Code behavior |
| 15 | oraios/serena | 21,977 | MCP | Deep semantic codebase access |
| 16 | CLIProxyAPI | 19,444 | Proxy | Exposes CLI agents as API service |
| 17 | czlonkowski/n8n-mcp | 15,939 | MCP | Creates independently-executing workflows |
| 18 | VoltAgent/awesome-claude-code-subagents | 14,881 | Subagents | 100+ agents with inherited permissions |
| 19 | VoltAgent/awesome-agent-skills | 12,517 | Skills | 700+ skills, impossible to audit all |
| 20 | Piebald-AI/tweakcc | 1,393 | Binary patch | Modifies system prompts, unlocks hidden features |

---

## Defensive Resources

| Repo | Stars | Description |
|------|-------|-------------|
| [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | 3,953 | Official security review GitHub Action |
| [anthropics/claude-code-monitoring-guide](https://github.com/anthropics/claude-code-monitoring-guide) | 223 | Official monitoring guidance |
| [Puliczek/awesome-mcp-security](https://github.com/Puliczek/awesome-mcp-security) | 670 | MCP security resources |
| [tw93/claude-health](https://github.com/tw93/claude-health) | 477 | Config health audit |
| [zxc123aa/cc-proxy-detector](https://github.com/zxc123aa/cc-proxy-detector) | 27 | Detects proxy backend origin |

---

## Key Observations

1. **The ecosystem is enormous and fast-growing.** Hundreds of repos with installable components, many with 10k+ stars. The attack surface for Claude Code users is vastly larger than the base tool's telemetry.

2. **Hooks are the most dangerous primitive.** They execute shell commands on every Claude Code tool invocation. A malicious hook in a shared `.claude/settings.json` could exfiltrate code, credentials, or session data silently.

3. **Proxies see everything.** Any proxy between Claude Code and the API sees all prompts, all code, all responses, and the API key. The "use Claude Code with cheaper models" trend means many users are voluntarily MITMing themselves.

4. **Skill collections are unauditable at scale.** Collections with 700-5,400 skills cannot be meaningfully reviewed. Users install them based on star count and README promises.

5. **The plugin/marketplace model bundles multiple vectors.** A single "marketplace install" can deploy skills, hooks, MCP servers, and config changes simultaneously. The blast radius of a compromised marketplace entry is total.

6. **Self-modifying agents are emerging.** Repos like `homunculus` (watches you, evolves itself), `claude-reflect` (auto-modifies CLAUDE.md), and `arscontexta` (generates knowledge from conversations) represent a new class of agents that change their own behavior over time — making auditing a point-in-time exercise.

7. **Financial and social media integrations exist.** Trading bots (trayd-mcp, @swarmvault/claude-skill) and social media publishers (x-article-publisher) introduce real-world consequence risk.

8. **VoltAgent is a key aggregator to watch.** They maintain awesome-agent-skills (12.5k), awesome-claude-code-subagents (14.9k), and awesome-openclaw-skills (41.2k) — directing users to thousands of installable components.
