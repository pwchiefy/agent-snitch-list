> **Note (2026-10-20):** This file is a Claude Skills telemetry audit from 2026-03-23 and belongs with the skill snitch list rather than this agent list; it is kept here unchanged for history and is not part of `data/tools.json` or the README counts.

# Claude Skills Telemetry Audit Report
## Date: 2026-03-23
## Sources Audited

1. **travisvn/awesome-claude-skills** — 15 unique repos linked
2. **BehiSecc/awesome-claude-skills** — 72 unique repos linked
3. **affaan-m/everything-claude-code** — 1 repo (self + agentshield)

Total unique repos extracted and audited: **83**

---

## CONFIRMED TELEMETRY

### CRITICAL: asklokesh/claudeskill-loki-mode (766 stars)

**PostHog telemetry with hardcoded API key, active by default.**

- **PostHog endpoint:** `https://us.i.posthog.com/capture/`
- **Hardcoded API key:** `phc_ya0vGBru41AJWtGNfZZ8H9W4yjoZy4KON0nnayS7s87`
- **Persistent device ID:** Creates `~/.loki-telemetry-id` (UUID stored to disk)
- **Data collected:** OS, architecture, version, install channel (npm/homebrew/skill/docker/source), event type
- **Implementation:** Both shell (`autonomy/telemetry.sh`) and Python (`dashboard/telemetry.py`)
- **OpenTelemetry SDK:** Full OTEL stack with `@opentelemetry/api`, `@opentelemetry/sdk-trace-node`, `@opentelemetry/exporter-trace-otlp-http`
- **Opt-out available:** `LOKI_TELEMETRY_DISABLED=true` or `DO_NOT_TRACK=1`
- **Risk: HIGH** — Sends data to PostHog on every use, creates persistent tracking ID on disk, OTEL bridge can export traces to any collector endpoint

---

## FULL REPO AUDIT TABLE

### Legend
- **Type**: Skill = SKILL.md only, Skill+Scripts = includes executable code, MCP = MCP server, Plugin = Claude Code plugin, Collection = curated list/archive
- **Telemetry**: NONE = no telemetry found, POSTHOG = sends to PostHog, API = calls external commercial API (user-initiated, requires API key)
- **Risk**: NONE = markdown only, LOW = scripts but local-only, MEDIUM = external API calls (user-configured), HIGH = telemetry/tracking, ELEVATED = hooks + env access

| # | Repo | Stars | Type | Telemetry | Risk | Notes |
|---|------|-------|------|-----------|------|-------|
| 1 | anthropics/skills | 100,880 | Skill+Scripts | NONE | LOW | Official Anthropic skills (docx, pdf, pptx, xlsx, etc). Python scripts for local file manipulation only. No external calls. |
| 2 | obra/superpowers | 107,408 | Plugin | NONE | LOW | Core skills framework. Hooks inject context on SessionStart. No telemetry. No external calls. Clean. |
| 3 | obra/superpowers-lab | 238 | Skill | NONE | LOW | Experimental skills. No telemetry. |
| 4 | obra/superpowers-skills | 574 | Skill | NONE | LOW | Community skills. Archived repo. No telemetry. |
| 5 | affaan-m/everything-claude-code | 101,282 | Plugin | NONE | ELEVATED | Massive plugin: 28 agents, 119 skills, 60 commands, hooks. Hooks run shell commands (auto-tmux, git-push review, secret detection, session persistence). All local - no external telemetry. .env file present but is .env.example template. |
| 6 | affaan-m/agentshield | 197 | Tool | NONE | LOW | Security scanner. TypeScript CLI. No telemetry deps. |
| 7 | ComposioHQ/awesome-claude-skills | 47,196 | Collection+Skills | NONE | LOW | Curated list + document skills (docx/pdf/pptx). Python scripts for local file manipulation. No telemetry. |
| 8 | asklokesh/claudeskill-loki-mode | 766 | Plugin | **POSTHOG** | **HIGH** | **CONFIRMED TELEMETRY.** PostHog analytics with hardcoded API key. Creates persistent UUID at ~/.loki-telemetry-id. OpenTelemetry SDK. Sends OS, arch, version, channel. Opt-out: LOKI_TELEMETRY_DISABLED=true. Has postinstall hook that creates symlinks in ~/.claude/skills/, ~/.codex/skills/, ~/.gemini/skills/. |
| 9 | K-Dense-AI/claude-scientific-skills | 15,950 | Skill+Scripts | NONE | LOW | 125+ scientific skills. Python scripts for local computation (bioinformatics, cheminformatics). No telemetry. |
| 10 | zarazhangrui/frontend-slides | 10,975 | Skill | NONE | NONE | HTML presentation skill. CSS/markdown only. |
| 11 | yusufkaraaslan/Skill_Seekers | 11,214 | Tool | NONE | MEDIUM | Converts docs/GitHub/PDFs to skills. MCP server component. Python dependencies include httpx, requests, PyGithub - all for user-directed scraping. No telemetry. |
| 12 | jeffallan/claude-skills | 7,188 | Skill | NONE | LOW | 66 full-stack dev skills. Hooks detected but no telemetry. Markdown + guidance only. |
| 13 | ykdojo/claude-code-tips | 6,594 | Plugin | NONE | LOW | Tips repo + dx plugin. Hooks detected but for local workflow only. No telemetry. |
| 14 | trailofbits/skills | 3,837 | Skill+Scripts | NONE | LOW | Security research skills (CodeQL, Semgrep). MCP config detected. Python scripts for local static analysis. No telemetry. |
| 15 | backnotprop/plannotator | 3,483 | Plugin | NONE | LOW | Plan review UI. TypeScript. Hook server for local session logging. No telemetry deps (diff, dompurify only). |
| 16 | openclaw/skills | 3,308 | Collection | NONE | MEDIUM | Archive of 500K+ skills from clawhub.com. Enormous repo (582MB). Contains MCP configs, hooks, .env files from various authors. Individual skills NOT audited - too many. |
| 17 | deanpeters/Product-Manager-Skills | 2,356 | Skill+Scripts | NONE | LOW | PM skills. Python/shell scripts for local workflow. No telemetry. |
| 18 | lackeyjb/playwright-skill | 2,117 | Skill+Scripts | NONE | LOW | Browser automation with Playwright. JavaScript. No telemetry. Local browser control only. |
| 19 | expo/skills | 1,528 | Skill | NONE | NONE | Official Expo skills. JavaScript/markdown. No telemetry. |
| 20 | huifer/Claude-Ally-Health | 791 | Skill | NONE | LOW | Health assistant. No actual dependencies (empty deps in package.json). Keywords "analytics" and "tracking" are in package.json keywords list only (health-analytics, health-tracking), not actual telemetry. False positive. |
| 21 | BehiSecc/VibeSec-Skill | 720 | Skill | NONE | NONE | Security coding guidelines. Markdown only. No code. |
| 22 | conorluddy/ios-simulator-skill | 645 | Skill+Scripts | NONE | LOW | iOS simulator automation. Python scripts for local Xcode/simulator control. No telemetry. |
| 23 | mhattingpete/claude-skills-marketplace | 488 | Skill | NONE | LOW | Engineering workflow skills. HTML/markdown. MCP config template. No telemetry. |
| 24 | hashicorp/agent-skills | 477 | Skill | NONE | NONE | Official HashiCorp Terraform skills. Shell scripts. No telemetry. |
| 25 | NoizAI/skills | 402 | Skill+Scripts | NONE | MEDIUM | TTS skills. Python scripts call Noiz API (https://noiz.ai/v1) and optionally Google Storage for reference audio. Requires user API key. No telemetry collection. |
| 26 | coffeefuelbump/csv-data-summarizer-claude-skill | 305 | Skill+Scripts | NONE | NONE | CSV analysis. Python/pandas. No external calls. |
| 27 | michalparkola/tapestry-skills-for-claude-code | 294 | Skill+Scripts | NONE | LOW | Article/YouTube transcript extraction. Shell scripts. Fetches user-specified URLs only. |
| 28 | wondelai/skills | 252 | Skill | NONE | NONE | 25 agent skills (UX, marketing, sales). Markdown only. |
| 29 | ryanbbrown/revealjs-skill | 237 | Skill | NONE | NONE | Reveal.js presentation skill. JavaScript/CSS. No telemetry. |
| 30 | alonw0/web-asset-generator | 223 | Skill+Scripts | NONE | LOW | Favicon/icon generation. Python. Local image manipulation. |
| 31 | AlmogBaku/debug-skill | 219 | Tool | NONE | LOW | Go debugger CLI. No telemetry deps in Cargo/Go. |
| 32 | zxkane/aws-skills | 216 | Skill | NONE | NONE | AWS CDK skills. Shell/markdown. No telemetry. |
| 33 | sanjay3290/ai-skills | 168 | Skill+Scripts | NONE | MEDIUM | Collection of API integration skills (Gmail, Calendar, Drive, Sheets, NotebookLM, ElevenLabs, Imagen, PostgreSQL, MySQL, MSSQL, etc). Each requires user API keys. MCP configs. No telemetry. |
| 34 | testdino-hq/playwright-skill | 154 | Skill | NONE | NONE | Playwright testing guides. Markdown only. |
| 35 | digitalsamba/claude-code-video-toolkit | 141 | Skill+Scripts | NONE | LOW | Video production toolkit. Python. .env for user API keys (ElevenLabs). No telemetry. |
| 36 | chrisvoncsefalvay/claude-d3js-skill | 135 | Skill | NONE | NONE | D3.js visualization skill. JavaScript/markdown. |
| 37 | jthack/ffuf_claude_skill | 128 | Skill+Scripts | NONE | LOW | FFUF web fuzzing integration. Python. Local tool. |
| 38 | avifenesh/agnix | 103 | Tool | NONE | LOW | Rust linter for AI configs. No telemetry deps in Cargo.toml. MCP config validation. |
| 39 | smerchek/claude-epub-skill | 97 | Skill+Scripts | NONE | LOW | Markdown to EPUB converter. Python. Local processing. |
| 40 | bluzername/claude-code-terminal-title | 95 | Skill | NONE | LOW | Terminal title updater. Shell script. Local only. |
| 41 | product-on-purpose/pm-skills | 91 | Skill | NONE | LOW | 27 PM skills. MCP server config for validation. No telemetry. |
| 42 | daxaur/openpaw | 90 | Plugin | NONE | MEDIUM | Personal assistant (Telegram, Discord, Obsidian). TypeScript. Uses Grammy (Telegram bot lib). Hooks. No telemetry deps. Accesses user-configured services. |
| 43 | wrsmith108/linear-claude-skill | 69 | Skill+Scripts | NONE | LOW | Linear project management. TypeScript. "tracking" flag was false positive (semantic-release package). @linear/sdk for user-configured Linear instance. |
| 44 | raintree-technology/claude-starter | 65 | Plugin | NONE | LOW | Claude Code framework template. Zig encoder. Hooks (secret-scanner, file-size-monitor). MCP config template. No telemetry. |
| 45 | rebelytics/one-skill-to-rule-them-all | 58 | Skill | NONE | NONE | Meta-skill for skill improvement. Markdown only. |
| 46 | omkamal/pypict-claude-skill | 57 | Skill+Scripts | NONE | LOW | PICT test case generation. Python. Local computation. |
| 47 | jonathimer/devmarketing-skills | 48 | Skill | NONE | NONE | Developer marketing skills. Markdown only. |
| 48 | ComposioHQ/awesome-claude-skills (video-downloader) | (same repo) | Skill+Scripts | NONE | LOW | Video downloader. Python yt-dlp wrapper. Fetches user-specified URLs. |
| 49 | emaynard/claude-family-history-research-skill | 45 | Skill | NONE | NONE | Genealogy research planning. Markdown only. |
| 50 | oil-oil/oiloil-ui-ux-guide | 44 | Skill | NONE | NONE | UI/UX guide. HTML/markdown. |
| 51 | ivan-magda/claude-code-plugin-template | 44 | Skill | NONE | LOW | Plugin template. Shell scripts for scaffolding. |
| 52 | guia-matthieu/clawfu-skills | 44 | MCP Server | NONE | MEDIUM | 172 marketing skills as MCP server. Python. Analytics skills do A/B test math and cohort analysis locally. No telemetry. |
| 53 | conorbronsdon/avoid-ai-writing | 37 | Skill | NONE | NONE | Writing audit skill. Markdown only. |
| 54 | Square-Zero-Labs/video-prompting-skill | 32 | Skill | NONE | NONE | Video prompt crafting. Markdown only. |
| 55 | agamm/claude-code-owasp | 30 | Skill | NONE | NONE | OWASP security guidelines. Markdown only. |
| 56 | HeshamFS/materials-simulation-skills | 26 | Skill+Scripts | NONE | LOW | Computational materials science. Python scripts for local simulation. |
| 57 | agentbay-ai/agentbay-skills | 26 | Collection | NONE | MEDIUM | Skills collection for AgentBay platform. Includes Qwen Image API, Amap traffic API skills. Each requires user API keys. No telemetry found. |
| 58 | shmlkv/dna-claude-analysis | 25 | Skill+Scripts | NONE | LOW | DNA analysis toolkit. Python. Local genome data processing. |
| 59 | Digidai/product-manager-skills | 21 | Skill | NONE | NONE | PM skill library. Markdown only. |
| 60 | Xquik-dev/x-twitter-scraper | 21 | MCP Server | NONE | MEDIUM | X/Twitter scraper. MCP server + REST API. HMAC webhooks mentioned. Requires user API config. Repo 404 on tree (private/restricted access). |
| 61 | 1NickPappas/move-code-quality-skill | 18 | Skill | NONE | NONE | Move language quality checker. Markdown only. |
| 62 | takechanman1228/claude-ecom | 16 | Skill+Scripts | NONE | LOW | E-commerce analytics. Python (pandas, numpy, click). "analytics" in pyproject.toml is a keyword, not a dep. Local CSV processing. |
| 63 | wrsmith108/varlock-claude-skill | 16 | Skill | NONE | NONE | Env var security skill. Markdown only. |
| 64 | K-Dense-AI/claude-scientific-skills | (dup) | — | — | — | Already listed at #9 |
| 65 | Valian/linear-cli-skill | 13 | Skill+Scripts | NONE | LOW | Linear CLI skill. JavaScript. .env for user config. |
| 66 | framix-team/skill-email-html-mjml | 13 | Skill | NONE | NONE | MJML email template skill. Markdown only. |
| 67 | deapi-ai/claude-code-skills | 12 | Skill | NONE | MEDIUM | Media toolkit skill. Instructions to call deAPI endpoints (image gen, TTS, transcription, OCR). Requires user API key. |
| 68 | shepsci/kaggle-skill | 10 | Skill+Scripts | NONE | MEDIUM | Kaggle integration. Python scripts call Kaggle API. Requires user credentials. MCP config. .env for config. |
| 69 | tasteray/skills | 9 | Skill | NONE | MEDIUM | Psychological profiling + recommendations via TasteRay API (https://api.tasteray.com). Requires user API key. |
| 70 | Linked-API/linkedin-skills | 8 | Skill | NONE | MEDIUM | LinkedIn automation via Linked API (app.linkedapi.io). Requires user tokens. CLI tool @linkedapi/linkedin-cli. |
| 71 | Ashutos1997/claude-design-auditor-skill | 7 | Skill | NONE | NONE | Design audit skill. Markdown only. |
| 72 | EmblemCompany/Agent-skills | 7 | Skill | NONE | MEDIUM | Crypto wallet management. Requires @emblemvault/agentwallet CLI + auth. Read-only wallet review. |
| 73 | jeffallan/claude-skills | (dup) | — | — | — | Already listed at #12 |
| 74 | mattjoyce/kanban-skill | 7 | Skill | NONE | NONE | Markdown Kanban board. Shell scripts. Local file management. |
| 75 | agent-cards/skill | 6 | Skill | NONE | MEDIUM | Prepaid virtual Visa cards for agents. MCP tools. External service (checkout URLs). |
| 76 | wannabehero/charles-proxy-extract-skill | 6 | Skill+Scripts | NONE | LOW | Charles Proxy session parser. Python. Local file processing. |
| 77 | ykdojo/paper-search | 6 | Plugin | NONE | LOW | OpenAlex academic paper search. Shell scripts. Free API, no key needed. |
| 78 | pjt222/agent-almanac | 4 | Collection | NONE | LOW | 317 skills, 65 agents reference. R + markdown. No telemetry. |
| 79 | Octav-Labs/octav-api-skill | 3 | Skill | NONE | MEDIUM | Crypto portfolio API (https://api.octav.fi). Requires user API key. |
| 80 | glitternetwork/skills | 2 | Skill | NONE | LOW | PinMe IPFS deployment. CLI tool uploads to IPFS. |
| 81 | jacob-g-park/polaris-datainsight-doc-extract | 2 | Skill | NONE | MEDIUM | Doc extraction via Polaris AI DataInsight API. Requires API key. |
| 82 | uriva/find-scene-skill | 2 | Skill | NONE | MEDIUM | Movie scene search via FindScene API (api.find-scene.com). Requires user token. |
| 83 | ChainAware/behavioral-prediction-mcp | 1 | MCP Server | NONE | MEDIUM | Blockchain wallet analysis. MCP server at prediction.mcp.chainaware.ai. Requires API key. |
| 84 | polaroteam/moltdj-skill | 1 | Skill | NONE | MEDIUM | AI music platform. Calls api.moltdj.com. Requires API key. Instructions to fetch remote SKILL.md updates from api.moltdj.com. |
| 85 | RioTheGreat-ai/agentfund-mcp | 0 | MCP Server | NONE | MEDIUM | AI crowdfunding on Base chain. MCP server. |
| 86 | 8144225309/superscalar-mcp | 0 | MCP Server | NONE | LOW | Bitcoin Lightning protocol reference. TypeScript MCP server. Educational. |

---

## SUMMARY OF FINDINGS

### Telemetry Detection Results
- **1 repo with CONFIRMED active telemetry**: asklokesh/claudeskill-loki-mode (PostHog + OpenTelemetry)
- **0 repos with Sentry, Amplitude, Mixpanel, or Segment**
- **0 repos with hidden/undisclosed tracking**
- **Multiple false positives**: "analytics" in keywords (huifer/Claude-Ally-Health, takechanman1228/claude-ecom), "tracking" in dev tooling (wrsmith108/linear-claude-skill)

### Skills That Instruct Claude to Fetch External URLs
| Repo | External Endpoint | Purpose |
|------|------------------|---------|
| tasteray/skills | api.tasteray.com | Psychological profiling / recommendations |
| Octav-Labs/octav-api-skill | api.octav.fi | Crypto portfolio tracking |
| uriva/find-scene-skill | api.find-scene.com | Movie scene search |
| polaroteam/moltdj-skill | api.moltdj.com | AI music platform + remote skill updates |
| deapi-ai/claude-code-skills | deAPI endpoints | Image gen, TTS, OCR, video |
| Linked-API/linkedin-skills | app.linkedapi.io | LinkedIn automation |
| agent-cards/skill | Agent Cards service | Virtual Visa cards |
| NoizAI/skills | noiz.ai/v1 | Text-to-speech |
| ChainAware/behavioral-prediction-mcp | prediction.mcp.chainaware.ai | Blockchain analysis |
| EmblemCompany/Agent-skills | emblemvault.dev | Crypto wallet |
| sanjay3290/ai-skills | Various Google/Atlassian APIs | Gmail, Calendar, Jira, etc. |
| shepsci/kaggle-skill | Kaggle API | Competition/dataset access |

### Skills That Include Hooks Running Shell Commands
| Repo | Hook Type | What It Does |
|------|-----------|-------------|
| affaan-m/everything-claude-code | PreToolUse, PostToolUse, Stop, SessionStart | Session persistence, compaction suggestions, tmux reminders, git-push review, secret detection, continuous learning observation. All local. |
| obra/superpowers | SessionStart | Context injection from SKILL.md. Local only. |
| asklokesh/claudeskill-loki-mode | PostToolUse + various | Metrics tracking (local), OTEL bridge, **PostHog telemetry** |
| backnotprop/plannotator | SessionStart | Session logging. Local only. |
| raintree-technology/claude-starter | Various | Secret scanner, file-size monitor, settings backup. Local only. |
| ykdojo/claude-code-tips | Various | Local workflow helpers. |
| trailofbits/skills | Various | Security analysis tool invocation. |

### Skills That Bundle MCP Server Configurations
| Repo | MCP Servers |
|------|------------|
| affaan-m/everything-claude-code | GitHub, Supabase, Vercel, Railway, etc (14 servers, user must add API keys) |
| ChainAware/behavioral-prediction-mcp | Self (prediction.mcp.chainaware.ai) |
| RioTheGreat-ai/agentfund-mcp | Self (AgentFund MCP) |
| 8144225309/superscalar-mcp | Self (Lightning protocol MCP) |
| Xquik-dev/x-twitter-scraper | Self (Twitter MCP) |
| guia-matthieu/clawfu-skills | Self (marketing skills MCP) |
| product-on-purpose/pm-skills | MCP validation scripts |
| yusufkaraaslan/Skill_Seekers | MCP server for doc conversion |

### Skills That Access Environment Variables or System Info
| Repo | What Is Accessed | Risk |
|------|-----------------|------|
| asklokesh/claudeskill-loki-mode | OS, arch, install channel, creates ~/.loki-telemetry-id | HIGH - sends to PostHog |
| affaan-m/everything-claude-code | CLAUDE_PLUGIN_ROOT, ECC_HOOK_PROFILE, ECC_DISABLED_HOOKS, package manager detection | LOW - all local config |
| sanjay3290/ai-skills | Google OAuth tokens, API keys (user-configured) | MEDIUM - user-directed |
| shepsci/kaggle-skill | Kaggle credentials | MEDIUM - user-directed |
| Valian/linear-cli-skill | Linear API config (.env) | LOW - user-directed |
| digitalsamba/claude-code-video-toolkit | ElevenLabs API key (.env) | LOW - user-directed |

---

## RISK CLASSIFICATION

### HIGH RISK (1 repo)
- **asklokesh/claudeskill-loki-mode** — Active PostHog telemetry with hardcoded API key, persistent device fingerprinting via UUID, OpenTelemetry SDK for trace export

### ELEVATED RISK (1 repo)
- **affaan-m/everything-claude-code** — Extensive hooks system (no telemetry, but hooks run shell commands on every tool use; must trust the hook code)

### MEDIUM RISK (19 repos)
- Repos that call external commercial APIs (user must provide API keys)
- openclaw/skills (massive archive, individual skills not fully audited)

### LOW RISK (29 repos)
- Repos with executable scripts but all processing is local

### NO RISK (34 repos)
- Markdown-only skills with no executable code
