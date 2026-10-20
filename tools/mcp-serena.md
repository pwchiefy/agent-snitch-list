# MCP: Serena

| Field | Value |
|-------|-------|
| Website | https://github.com/oraios/serena |
| Repository | https://github.com/oraios/serena |
| Category | MCP Server (coding agent toolkit) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom endpoint (oraios-software.de) |
| Disable Method | Set env `SERENA_USAGE_REPORTING=false` (also skipped when CI=true or GITHUB_ACTIONS=true) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- On every start: Serena version, OS, agent interface, language backend, dashboard enabled flag, active context name (GET to `oraios-software.de/serena_usage.php`; your IP is visible to the server)
- Web dashboard: fetches news (`serena_news.json`) and banners from oraios-software.de; loads Google Fonts and jsDelivr assets

## What Is NOT Collected

- Project data, code, file names, prompts
- Local `analytics.py` token/tool stats stay on the machine

## How to Fully Opt Out

1. **Environment:** `SERENA_USAGE_REPORTING=false`
2. Automatically skipped when `CI=true` or `GITHUB_ACTIONS=true`

## Red Flags

- Usage reporting added after the 2026-03-23 audit and ON by default

## Notes

30,458 stars. Since April 2026 (v1.1.x) Serena sends a small, documented usage ping at startup. The ping carries no project data, but it is ON by default. agno integration still sets telemetry=False.

## Evidence

- Usage ping: https://github.com/oraios/serena/blob/abb0a0f01b94bc8050086f0fb860077d17730324/src/serena/agent.py#L751-L770
- Privacy doc: https://github.com/oraios/serena/blob/abb0a0f01b94bc8050086f0fb860077d17730324/docs/01-about/070_privacy.md
- Commit 'Collect basic usage data' (2026-04-10): https://github.com/oraios/serena/commit/6844eec0f55b
- Dashboard news URL: https://github.com/oraios/serena/blob/abb0a0f01b94bc8050086f0fb860077d17730324/src/serena/dashboard.py#L773

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Reclassified OFF -> ON: startup usage ping added in April 2026 (documented, opt-out via SERENA_USAGE_REPORTING=false).
