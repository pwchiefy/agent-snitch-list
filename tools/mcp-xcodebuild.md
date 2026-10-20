# MCP: MobileBuildMCP (formerly XcodeBuildMCP, Sentry)

| Field | Value |
|-------|-------|
| Website | https://github.com/getsentry/MobileBuildMCP |
| Repository | https://github.com/getsentry/MobileBuildMCP |
| Category | MCP Server (iOS/macOS build tooling) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry |
| Disable Method | Set env `MOBILEBUILDMCP_SENTRY_DISABLED=true` or `SENTRY_DISABLED=true`, or `sentryDisabled: true` in `.mobilebuildmcp/config.yaml`. The old `XCODEBUILDMCP_SENTRY_DISABLED` variable is no longer read |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Internal runtime failures (daemon/MCP faults, unexpected exceptions)
- Tool invocation metrics: tool name, runtime, transport, outcome, duration
- Daemon and MCP lifecycle events and anomalies, uptime, RSS memory, process count, bootstrap duration
- Xcode version and config flags; 100% trace sampling; explicitly tagged logs

## What Is NOT Collected

- User-domain errors (build/test failures, config errors)
- Tool inputs and outputs (`recordInputs/recordOutputs: false`)
- Breadcrumbs (disabled); home-directory paths are redacted
- Source code, build artifacts, certificates

## How to Fully Opt Out

1. **Environment:** `MOBILEBUILDMCP_SENTRY_DISABLED=true` (or `SENTRY_DISABLED=true`)
2. **Project config:** `sentryDisabled: true` in `.mobilebuildmcp/config.yaml`
3. **Note:** the old `XCODEBUILDMCP_SENTRY_DISABLED` variable is no longer read after the 2.7.1 rename

## Red Flags

- Telemetry ON by default; 100% trace sampling
- Renaming the env vars in 2.7.1 means users who set XCODEBUILDMCP_SENTRY_DISABLED have Sentry re-enabled after upgrading
- Operational metrics (memory, process count, uptime, lifecycle anomalies) collected

## Notes

6,491 stars. Renamed from XcodeBuildMCP to MobileBuildMCP in v2.7.1 (repo, npm package, CLI and env-var prefix). Scope was narrowed in v2.1.0 to internal failures; path redaction and a documented opt-out remain.

## Evidence

- Sentry init: https://github.com/getsentry/MobileBuildMCP/blob/d13ff0c707b0681769cf31da0eb42c4f94ceafff/src/utils/sentry.ts#L308-L330
- Disable checks: https://github.com/getsentry/MobileBuildMCP/blob/d13ff0c707b0681769cf31da0eb42c4f94ceafff/src/utils/sentry.ts#L155-L159
- Rename (CHANGELOG 2.7.1): https://github.com/getsentry/MobileBuildMCP/blob/d13ff0c707b0681769cf31da0eb42c4f94ceafff/CHANGELOG.md
- Privacy & Telemetry docs: https://github.com/getsentry/xcodebuildmcp.com/blob/main/app/docs/_content/privacy.mdx

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Changes: renamed to MobileBuildMCP (repo getsentry/MobileBuildMCP); opt-out env var renamed to MOBILEBUILDMCP_SENTRY_DISABLED; privacy docs linked.
