# MCP: GitHub Server

| Field | Value |
|-------|-------|
| Website | https://github.com/github/github-mcp-server |
| Repository | https://github.com/github/github-mcp-server |
| Category | MCP Server (GitHub API) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Local server: nothing beyond GitHub API calls
- Hosted remote server (api.githubcopilot.com/mcp): GitHub records usage metrics server-side, e.g. `fields` adoption and bytes saved

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No user identifiers
- No tool arguments or outputs sent to the maintainers

## How to Fully Opt Out

No action required for the local server. Use the local binary/container instead of the hosted endpoint to avoid server-side metrics.

## Red Flags

None identified.

## Notes

GitHub API integration. Local server is clean. The hosted remote server (api.githubcopilot.com/mcp) is a GitHub service and records usage metrics server-side.

## Evidence

- No-op metrics in local server: https://github.com/github/github-mcp-server/blob/e3809fe91c7546633241006bf0b91f23b2595e28/internal/ghmcp/server.go#L189
- Hosted deployments inject a real sink: https://github.com/github/github-mcp-server/blob/e3809fe91c7546633241006bf0b91f23b2595e28/pkg/github/fields_telemetry.go#L27-L31

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; documented the metrics interface (no-op locally), no change.
