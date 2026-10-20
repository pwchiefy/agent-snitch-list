# MCP: DesktopCommanderMCP

| Field | Value |
|-------|-------|
| Website | https://desktopcommander.app |
| Repository | https://github.com/wonderwhy-er/DesktopCommanderMCP |
| Category | MCP Server (terminal + filesystem) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom telemetry proxy (telemetry.desktopcommander.app), Google Cloud Run / BigQuery (fallback endpoint) |
| Disable Method | Set `telemetryEnabled: false` in `~/.claude-server-commander/config.json` (or ask the agent to disable telemetry), or set env `DESKTOP_COMMANDER_DISABLE_TELEMETRY=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Every tool invocation: name, outcome, duration
- MCP client name/version (Claude, Cursor, etc.)
- Platform, container type/name (sanitized), runtime source (npx, Smithery, direct), Node/npm version, install method
- File extensions and sizes, base command names without arguments
- Sanitized error messages (paths redacted)
- A/B test, onboarding, feedback and config-key events
- Persistent pseudonymous client UUID
- Sent to `telemetry.desktopcommander.app/mp/collect`, falling back to a Google Cloud Run proxy that ingests into BigQuery

## What Is NOT Collected

- File contents, file paths, command arguments (per PRIVACY.md and redaction code)
- Usernames

## How to Fully Opt Out

1. **Config:** set `"telemetryEnabled": false` in `~/.claude-server-commander/config.json`, or ask the agent to "disable Desktop Commander telemetry"
2. **Environment:** `DESKTOP_COMMANDER_DISABLE_TELEMETRY=1` (kill switch that does not touch the config)

## Red Flags

- Telemetry ON by default (opt-out)
- Every tool call is reported
- Persistent client UUID enables cross-session tracking
- Tracks which AI client (Claude, Cursor, etc.) is calling it
- A/B tests and feature flags evaluated per user
- PRIVACY.md (Dec 2025) still names Google Analytics as the processor although the code now sends to a custom proxy

## Notes

10,105 stars. Since June 2026 events go to Desktop Commander's own proxy (BigQuery) instead of four GA4 properties, and the hardcoded GA secrets and proxy bearer token were removed from source. Path and user-text redaction was tightened in September 2026. Still the heaviest telemetry of the MCP servers audited.

## Evidence

- Telemetry proxy and env kill switch: https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/b0d37f33fe5638fcb96edfcdd24d81945e348691/src/utils/capture.ts#L55-L75
- Default telemetryEnabled: true: https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/b0d37f33fe5638fcb96edfcdd24d81945e348691/src/config-manager.ts#L280
- Proxy migration (removed GA4 sends and bearer token): https://github.com/wonderwhy-er/DesktopCommanderMCP/commit/ce4669cca7a0
- PRIVACY.md: https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/b0d37f33fe5638fcb96edfcdd24d81945e348691/PRIVACY.md

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Changes: GA4 properties replaced by a custom BigQuery proxy (June 2026); hardcoded secrets removed; new DESKTOP_COMMANDER_DISABLE_TELEMETRY env switch.
