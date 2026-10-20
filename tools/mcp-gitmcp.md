# MCP: GitMCP

| Field | Value |
|-------|-------|
| Website | https://gitmcp.io |
| Repository | https://github.com/idosal/git-mcp |
| Category | MCP Server (remote, GitHub docs) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- No client-side component
- Hosted Worker: counts of GitHub API requests (URL, repo) and rate-limit events to Cloudflare Analytics Engine when that binding is configured; Workers observability on, invocation logs off

## What Is NOT Collected

- Agent queries are not stored, per README
- No personal identifiers (no authentication)

## How to Fully Opt Out

No action required. Self-host the Worker if you do not want a third party to see which repositories you query.

## Red Flags

None identified.

## Notes

Remote MCP server for GitHub projects. No client-side telemetry. As with any hosted service, the operator sees which repositories are requested; self-hosting is possible.

## Evidence

- githubClient.ts: https://github.com/idosal/git-mcp/blob/c487a29895dcfcb5b672247e646426a56e2051c1/src/api/utils/githubClient.ts#L136-L143
- wrangler.jsonc: https://github.com/idosal/git-mcp/blob/c487a29895dcfcb5b672247e646426a56e2051c1/wrangler.jsonc
- README privacy section: https://github.com/idosal/git-mcp/blob/c487a29895dcfcb5b672247e646426a56e2051c1/README.md

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source; documented server-side Cloudflare metrics, no change in classification.
