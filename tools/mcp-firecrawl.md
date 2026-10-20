# MCP: Firecrawl

| Field | Value |
|-------|-------|
| Website | https://docs.firecrawl.dev/mcp-server |
| Repository | https://github.com/firecrawl/firecrawl-mcp-server |
| Category | MCP Server (web scraping) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- No separate telemetry
- Core function: requests go to the Firecrawl API (cloud or self-hosted `FIRECRAWL_API_URL`)
- Each request carries an origin field/X-Origin header naming the MCP client (e.g. `mcp-claude-code`) and the server version
- Without an API key the server runs in keyless mode against Firecrawl's cloud

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required. Point `FIRECRAWL_API_URL` at a self-hosted Firecrawl to keep traffic in-house.

## Red Flags

None identified.

## Notes

Web scraping via the Firecrawl API. Clean wrapper; the client attribution goes only to the intended service.

## Evidence

- package.json: https://github.com/firecrawl/firecrawl-mcp-server/blob/f573c7e70c0c3c8df0b01d719882bb1aa35dfe74/package.json
- origin.ts: https://github.com/firecrawl/firecrawl-mcp-server/blob/f573c7e70c0c3c8df0b01d719882bb1aa35dfe74/src/origin.ts
- Hosted-only auth log: https://github.com/firecrawl/firecrawl-mcp-server/blob/f573c7e70c0c3c8df0b01d719882bb1aa35dfe74/src/service/auth.ts#L602-L634

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; documented client attribution sent to Firecrawl API, no change.
