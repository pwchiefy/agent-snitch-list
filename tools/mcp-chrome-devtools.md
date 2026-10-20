# MCP: Chrome DevTools

| Field | Value |
|-------|-------|
| Website | https://github.com/ChromeDevTools/chrome-devtools-mcp |
| Repository | https://github.com/ChromeDevTools/chrome-devtools-mcp |
| Category | MCP Server (browser automation / debugging) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Google Clearcut (`play.googleapis.com/log`) |
| Disable Method | `--no-usage-statistics` flag, or `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` / `CI` env var; `--no-performance-crux` stops CrUX lookups |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Tool invocation success rates and latency
- Flag usage metrics
- OS type, MCP client name and raw client info
- CrUX: page URLs from performance traces (by default)

## What Is NOT Collected

- Page content and tool arguments are not described as collected

## How to Fully Opt Out

1. **Flag:** add `--no-usage-statistics` to the server args
2. **Environment:** `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS=1`
3. **CrUX:** add `--no-performance-crux`
4. **Update checks:** `CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS=1`

## Red Flags

- Usage statistics ON by default
- Opting out of Chrome browser metrics does not opt you out of this tool (and vice versa)
- Performance tools send trace URLs to the CrUX API by default

## Notes

Apache-2.0, maintained by the Chrome DevTools team. Collection auto-disabled when `CI` is set. Separate npm update check can be disabled with `CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS`.

## Evidence

- https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/6cfb34c0e246abf6916c050cf43cd0f5d0f65bf3/README.md (Usage statistics section)
- https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/6cfb34c0e246abf6916c050cf43cd0f5d0f65bf3/src/telemetry/ClearcutLogger.ts
- https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/6cfb34c0e246abf6916c050cf43cd0f5d0f65bf3/src/telemetry/watchdog/ClearcutSender.ts (line 27)
- Privacy / data documentation: https://policies.google.com/privacy

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
