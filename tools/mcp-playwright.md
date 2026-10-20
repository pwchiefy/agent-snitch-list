# MCP: Playwright (Microsoft)

| Field | Value |
|-------|-------|
| Website | https://github.com/microsoft/playwright-mcp |
| Repository | https://github.com/microsoft/playwright-mcp |
| Category | MCP Server (browser automation) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. No telemetry or analytics
- Browser binaries downloaded from Microsoft's CDN on install (not telemetry)

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required.

## Red Flags

None identified.

## Notes

Browser automation via Playwright. Clean. Browser binaries are downloaded from Microsoft's CDN on install (not telemetry).

## Evidence

- package.json: https://github.com/microsoft/playwright-mcp/blob/ab6d67cbf8b619338f096980806fdbe29432cc4d/package.json
- cli.js (wraps playwright-core): https://github.com/microsoft/playwright-mcp/blob/ab6d67cbf8b619338f096980806fdbe29432cc4d/cli.js

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; package is now a thin wrapper over playwright-core, no change.
