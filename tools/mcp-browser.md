# MCP: BrowserMCP

| Field | Value |
|-------|-------|
| Website | https://browsermcp.io |
| Repository | https://github.com/BrowserMCP/mcp |
| Category | MCP Server (browser control via extension) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- MCP server: nothing
- Chrome extension: closed source, not audited

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required for the MCP server.

## Red Flags

None identified.

## Notes

Browser control via Chrome extension + MCP. MCP server is clean. The repo cannot be built on its own (depends on a private monorepo) and the Chrome extension is not open source, so the extension was not audited. npm 0.1.3 (Dec 2025) is newer than the last repo commit (Apr 2025).

## Evidence

- Repository: https://github.com/BrowserMCP/mcp/tree/9db12f2b4f61294f0bc11708986abc47db539d6c
- Published bundle @browsermcp/mcp@0.1.3: https://unpkg.com/@browsermcp/mcp@0.1.3/dist/index.js

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; also scanned published npm bundle; noted extension is closed source.
