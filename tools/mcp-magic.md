# MCP: Magic MCP / 21st MCP (21st.dev)

| Field | Value |
|-------|-------|
| Website | https://21st.dev/mcp |
| Repository | https://github.com/21st-dev/magic-mcp |
| Category | MCP Server (UI components; hosted) |
| Telemetry | Yes |
| Default State | SaaS-inherent |
| Analytics Providers | 21st.dev hosted MCP endpoint (server-side) |
| Disable Method | None while using it; the local package is only a proxy |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Every MCP message, including tool names and arguments (which can contain prompts and code context), forwarded to `https://21st.dev/api/mcp` with your API key
- Server-side logging is not documented

## What Is NOT Collected

- The local proxy package itself contains no analytics code

## How to Fully Opt Out

No opt-out other than not using it. `MCP_URL_21ST` can point the proxy elsewhere, but the tools only exist on 21st.dev.

## Red Flags

- All MCP traffic is proxied to a closed-source hosted server
- Old Magic API keys were reset

## Notes

Magic MCP is now the '21st MCP'. The open-source package has no analytics code itself, but it no longer does local work: everything runs on 21st.dev, so it is reclassified as SaaS-inherent.

## Evidence

- Proxy source: https://github.com/21st-dev/magic-mcp/blob/6b5299e8a83ceffa73d4fc4e148905bb3eeeeb55/src/index.ts#L1-L21
- README: https://github.com/21st-dev/magic-mcp/blob/6b5299e8a83ceffa73d4fc4e148905bb3eeeeb55/README.md

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Reclassified OFF -> SaaS-inherent: since v0.2.0 the package is only a proxy to the hosted 21st MCP.
