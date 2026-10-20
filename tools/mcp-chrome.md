# MCP: Chrome (mcp-chrome)

| Field | Value |
|-------|-------|
| Website | https://github.com/hangwin/mcp-chrome |
| Repository | https://github.com/hangwin/mcp-chrome |
| Category | MCP Server (Chrome extension) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. The analytics-domain list in constants.ts filters trackers out of captured network traffic

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

Chrome extension-based MCP server. Clean; the analytics domain list is a privacy feature. No commits since 2026-01-06.

## Evidence

- constants.ts: https://github.com/hangwin/mcp-chrome/blob/f48e71751e00bc09725c7e173423cff4f2ccd12a/app/chrome-extension/common/constants.ts

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source, no change.
