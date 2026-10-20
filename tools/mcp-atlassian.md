# MCP: Atlassian (Confluence/Jira)

| Field | Value |
|-------|-------|
| Website | https://github.com/sooperset/mcp-atlassian |
| Repository | https://github.com/sooperset/mcp-atlassian |
| Category | MCP Server (Confluence/Jira) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. The `analytics` module queries Confluence page-view analytics via the Confluence API; it is not telemetry

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

Confluence and Jira integration. Clean.

## Evidence

- confluence/analytics.py: https://github.com/sooperset/mcp-atlassian/blob/0a5d2427144d72f5aade07d4fabd385421cec401/src/mcp_atlassian/confluence/analytics.py

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source, no change.
