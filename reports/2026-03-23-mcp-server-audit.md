# MCP Server Telemetry Audit — 2026-03-23

Audit of the 21 most popular MCP (Model Context Protocol) server repositories for telemetry, analytics, and tracking code. MCP servers run as separate processes with full system access, making them a significant vector for data collection.

---

## Summary

| Verdict | Count | Repos |
|---------|-------|-------|
| TELEMETRY FOUND | 3 | DesktopCommanderMCP, Windows-MCP, XcodeBuildMCP |
| OPT-IN TELEMETRY (safe) | 2 | fastmcp, genai-toolbox |
| SAFE | 16 | All others below |

---

## TELEMETRY FOUND

### 1. DesktopCommanderMCP (`wonderwhy-er/DesktopCommanderMCP`)
- **Stars:** 5,755
- **What it does:** Terminal control, file system search, and diff file editing for Claude
- **Telemetry:** YES — HEAVY
- **Risk Level:** TELEMETRY FOUND
- **Details:**
  - **Google Analytics (GA4)** — sends to THREE separate GA4 properties:
    - `G-F3GK01G39Y` (general events)
    - `G-8L163XZ1CE` (tool events, lower volume)
    - `G-ZDF1M5403Z` (high-volume tool events)
    - `G-MPFSWEGQ0T` (UI events)
  - **Custom BigQuery Telemetry Proxy** — sends to `https://dc-telemetry-proxy-83847352264.europe-west1.run.app/mp/collect` with bearer token, for "high-volume events to avoid the 1M/day GA4 BigQuery export limit"
  - **Data collected:**
    - Every tool invocation (tool name, duration, success/failure)
    - Client info (name, version of the AI client calling it)
    - Platform, OS, container info (Docker detection)
    - Runtime source (npx, Smithery, direct)
    - File extensions (not paths, paths are stripped)
    - A/B test assignments
    - Config changes (key names, not values)
    - UI events (clicks, expands, text selections, copy actions)
    - Onboarding state, feedback state, usage statistics
    - Persistent UUID stored at `~/.claude-server-commander/config.json`
  - **Default:** ON (opt-out, not opt-in)
  - **How to disable:** Set `telemetryEnabled: false` in `~/.claude-server-commander/config.json` or use the `set_config_value` tool
  - **Key files:**
    - `src/utils/capture.ts` — core telemetry pipeline (GA4 + BigQuery proxy, dual-send)
    - `src/config-manager.ts` — config with `telemetryEnabled: true` default
    - `src/utils/usageTracker.ts` — local usage tracking + survey prompts
    - `setup-claude-server.js` — setup-time GA4 tracking (separate `G-NGGDNL0K4L` property)

### 2. Windows-MCP (`CursorTouch/Windows-MCP`)
- **Stars:** 4,841
- **What it does:** Computer use / UI automation on Windows via UIA
- **Telemetry:** YES
- **Risk Level:** TELEMETRY FOUND
- **Details:**
  - **PostHog** — sends to `https://us.i.posthog.com` with API key `phc_uxdCItyVTjXNU0sMPr97dq3tcz39scQNt3qjTYw5vLV`
  - `disable_geoip=False` — GeoIP is ENABLED, meaning PostHog collects your approximate location
  - `enable_exception_autocapture=True` — auto-captures all exceptions
  - `process_person_profile: True` — creates user profiles in PostHog
  - **Data collected:**
    - Every tool execution (tool name, duration, success/failure)
    - Errors and exceptions with full traceback
    - Session IDs, persistent user ID (UUID stored in temp dir)
    - Client name and version (the AI app calling the MCP)
    - Feature flag evaluations
    - Mode (local vs other)
  - **Default:** Always ON — no opt-out mechanism found in the codebase
  - **How to disable:** No documented way. The `posthog` dependency is hardcoded.
  - **Key files:**
    - `src/windows_mcp/analytics.py` — PostHog client with hardcoded API key
    - `src/windows_mcp/__main__.py` — initializes analytics on startup
    - `pyproject.toml` — `posthog>=7.4.0` in dependencies

### 3. XcodeBuildMCP (`getsentry/XcodeBuildMCP`)
- **Stars:** 4,854
- **What it does:** Xcode build, test, and simulator control for AI coding agents
- **Telemetry:** YES — Sentry (made by same company)
- **Risk Level:** TELEMETRY FOUND
- **Details:**
  - **Sentry** — sends to `https://326e2c19ee84f3b2c892207b5726cde0@o1.ingest.us.sentry.io/4510869777416192`
  - Made by Sentry themselves, so unsurprising they use Sentry
  - `sendDefaultPii: false` — PII sending disabled
  - `tracesSampleRate: 1.0` — 100% of traces are sampled
  - `enableLogs: true` + `enableMetrics: true`
  - Path redaction: `/Users/username` -> `/Users/<redacted>`
  - User/request/breadcrumb data explicitly deleted from events
  - **Data collected:**
    - Tool invocation metrics (tool name, runtime mode, transport, outcome, duration)
    - Internal errors (component, error kind)
    - Daemon lifecycle events (start/shutdown/crash)
    - MCP lifecycle metrics (uptime, RSS memory, process count, active operations)
    - Bootstrap duration
    - Xcode version, build version
    - Configuration flags (incremental builds, debug mode, workflow count)
    - Shutdown summaries with anomaly detection
  - **Default:** ON
  - **How to disable:** Set env var `XCODEBUILDMCP_SENTRY_DISABLED=true` or `SENTRY_DISABLED=true`
  - **Key files:**
    - `src/utils/sentry.ts` — full Sentry init, metrics, redaction logic
    - `src/utils/tool-registry.ts` — per-tool invocation metrics
    - `src/cli.ts` — bootstrap duration tracking

---

## OPT-IN TELEMETRY (Safe by default)

### 4. FastMCP (`PrefectHQ/fastmcp`)
- **Stars:** 23,926
- **What it does:** Python framework for building MCP servers
- **Telemetry:** OpenTelemetry instrumentation — NO-OP by default
- **Risk Level:** SAFE
- **Details:**
  - Uses `opentelemetry-api` only (not SDK) — this means telemetry is completely inert unless the user explicitly installs an OTEL SDK and configures an exporter
  - From their code: "It uses only the opentelemetry-api package, so telemetry is a no-op unless the user installs an OpenTelemetry SDK and configures exporters."
  - No data sent anywhere unless user sets it up
  - This is proper instrumentation, not phone-home telemetry

### 5. Google GenAI Toolbox (`googleapis/genai-toolbox`)
- **Stars:** 13,500
- **What it does:** MCP Toolbox for Databases (Google Cloud)
- **Telemetry:** OpenTelemetry — opt-in via CLI flags
- **Risk Level:** SAFE
- **Details:**
  - `--telemetry-gcp` flag (default: `false`) — exports to Google Cloud Monitoring
  - `--telemetry-otlp` flag (default: empty) — exports to OTLP endpoint
  - No telemetry sent unless user explicitly passes these flags
  - Proper observability tooling for production database servers

---

## SAFE — No Telemetry Found

### 6. Official MCP Servers (`modelcontextprotocol/servers`)
- **Stars:** 81,865
- **What it does:** Reference implementations (filesystem, git, fetch, memory, time, etc.)
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Clean scan. No analytics dependencies, no outbound calls except to intended services. This is the gold standard.

### 7. Playwright MCP (`microsoft/playwright-mcp`)
- **Stars:** 29,516
- **What it does:** Browser automation via Playwright
- **Telemetry:** NO
- **Risk Level:** SAFE

### 8. GitHub MCP Server (`github/github-mcp-server`)
- **Stars:** 28,178
- **What it does:** GitHub API integration (repos, issues, PRs, etc.)
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Has internal profiling for performance measurement but no external data exfiltration.

### 9. Serena (`oraios/serena`)
- **Stars:** 21,977
- **What it does:** Coding agent toolkit with semantic retrieval and editing
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Has a local `analytics.py` module but it only does local token counting and tool usage stats (in-memory). Explicitly sets `telemetry=False` when initializing sub-components.

### 10. Figma-Context-MCP (`GLips/Figma-Context-MCP`)
- **Stars:** 13,875
- **What it does:** Provides Figma layout information to AI coding agents
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Only fetches from Figma API (the intended service). No analytics dependencies.

### 11. PAL MCP Server (`BeehiveInnovations/pal-mcp-server`)
- **Stars:** 11,306
- **What it does:** Multi-LLM router (Gemini/OpenAI/etc.) for Claude Code
- **Telemetry:** NO
- **Risk Level:** SAFE

### 12. MCP Chrome (`hangwin/mcp-chrome`)
- **Stars:** 10,878
- **What it does:** Chrome extension for browser automation via MCP
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Has a blocklist of analytics domains (amplitude.com, mixpanel.com, hotjar.com, etc.) used for *filtering out* tracking requests in network captures — not for sending data.

### 13. AWS MCP Servers (`awslabs/mcp`)
- **Stars:** 8,542
- **What it does:** Official AWS MCP servers (Bedrock, CloudWatch, S3, etc.)
- **Telemetry:** NO (OpenTelemetry references are for querying CloudWatch OTEL data, not sending)
- **Risk Level:** SAFE

### 14. GhidraMCP (`LaurieWired/GhidraMCP`)
- **Stars:** 8,024
- **What it does:** MCP server for Ghidra reverse engineering tool
- **Telemetry:** NO
- **Risk Level:** SAFE

### 15. GitMCP (`idosal/git-mcp`)
- **Stars:** 7,817
- **What it does:** Remote MCP server for any GitHub project (anti-hallucination)
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Has `sendBeacon` in TypeScript definitions (Cloudflare Worker types), not actual telemetry.

### 16. BrowserMCP (`BrowserMCP/mcp`)
- **Stars:** 6,138
- **What it does:** Browser control via Chrome extension + MCP
- **Telemetry:** NO
- **Risk Level:** SAFE

### 17. Firecrawl MCP Server (`firecrawl/firecrawl-mcp-server`)
- **Stars:** 5,834
- **What it does:** Web scraping and search via Firecrawl API
- **Telemetry:** NO
- **Risk Level:** SAFE

### 18. WhatsApp MCP (`lharries/whatsapp-mcp`)
- **Stars:** 5,441
- **What it does:** WhatsApp messaging integration
- **Telemetry:** NO
- **Risk Level:** SAFE

### 19. MCP Atlassian (`sooperset/mcp-atlassian`)
- **Stars:** 4,699
- **What it does:** Confluence and Jira integration
- **Telemetry:** NO
- **Risk Level:** SAFE
- **Details:** Has an "analytics" module but it's for querying *Confluence page view analytics* via the Confluence API — not telemetry about the user.

### 20. Magic MCP (`21st-dev/magic-mcp`)
- **Stars:** 4,539
- **What it does:** UI component generation (like v0) inside Cursor/WindSurf
- **Telemetry:** NO (but sends requests to `https://magic.21st.dev`)
- **Risk Level:** SAFE
- **Details:** All requests go to the 21st.dev API which is the intended service (component generation). Requires an API key. No separate analytics/tracking.

### 21. ACI (`aipotheosis-labs/aci`)
- **Stars:** 4,748
- **What it does:** Tool-calling platform connecting 600+ tools to AI IDEs
- **Telemetry:** Sentry + PostHog in their *cloud frontend/backend*, NOT in the MCP client
- **Risk Level:** SAFE (for local MCP usage)
- **Details:** The Sentry/PostHog/analytics code is in `frontend/` and `backend/` (their hosted platform). Users connecting via MCP don't run that code locally.

---

## Key Findings

1. **3 out of 21 popular MCP servers have active telemetry** that sends data to external endpoints by default.

2. **DesktopCommanderMCP is the worst offender** — it sends to FOUR Google Analytics properties AND a custom BigQuery proxy, tracking every tool call, UI interaction, and client info. Default: ON.

3. **Windows-MCP uses PostHog with GeoIP enabled and user profiling** — no documented opt-out mechanism.

4. **XcodeBuildMCP (by Sentry)** uses Sentry with fairly comprehensive metrics, but at least has path redaction and an env var to disable it (`XCODEBUILDMCP_SENTRY_DISABLED=true`).

5. **The official MCP servers from Anthropic are completely clean** — no telemetry at all.

6. **Major corporate MCP servers (GitHub, Microsoft, AWS, Google) are clean** — none phone home beyond their intended API services.

7. **Framework-level OTEL support (FastMCP, genai-toolbox) is opt-in and inert by default** — this is proper observability, not spyware.

## Recommendations

- **DesktopCommanderMCP:** Set `telemetryEnabled: false` in `~/.claude-server-commander/config.json` immediately after install
- **Windows-MCP:** Consider forking with PostHog removed, or patching `analytics.py` to no-op
- **XcodeBuildMCP:** Set `XCODEBUILDMCP_SENTRY_DISABLED=true` in your environment
- **General:** Always audit MCP server code before installing. Check `package.json`/`pyproject.toml` for analytics dependencies (posthog, sentry, segment, mixpanel, amplitude)
