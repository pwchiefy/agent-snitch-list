# Continue

| Field | Value |
|-------|-------|
| Website | https://continue.dev |
| Repository | https://github.com/continuedev/continue (no longer actively maintained) |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | No (2.0.0 and later) |
| Default State | N/A |
| Analytics Providers | None (PostHog and Sentry removed in 2.0.0) |
| Disable Method | N/A in 2.x; older versions: `allowAnonymousTelemetry: false` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing in the final 2.0.0 / 2.1.0 releases of the VS Code extension, JetBrains plugin and CLI.
- The CLI can export OpenTelemetry metrics (sessions, tokens, cost, lines changed, hostname, OS type) **only** to an endpoint you configure via `OTEL_EXPORTER_OTLP_ENDPOINT` / `OTEL_METRICS_EXPORTER`; nothing is sent to Continue.
- Historical: versions before 2.0.0 sent PostHog usage events and Sentry error reports by default.

## What Is NOT Collected

- No usage analytics to Continue (2.x)
- No error reporting to Sentry (2.x)
- No code, prompts or LLM responses
- LLM calls go directly to the provider you configure

## How to Fully Opt Out

1. Upgrade to 2.0.0 or later; there is no telemetry to disable.
2. On older versions, set `allowAnonymousTelemetry: false` in your config (VS Code's global telemetry setting is also respected).
3. CLI: do not set `OTEL_*` exporter variables, or set `CONTINUE_METRICS_ENABLED=0`.

## Red Flags

- Older, non-updated installs keep the previous behaviour (PostHog + Sentry on by default).
- The repository is no longer actively maintained and is read-only, so future vulnerabilities are unlikely to be patched.

## Evidence

- README, 'Final 2.0.0 Release': https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/README.md
- PR #12570 (merged 2026-06-08, 'Merge staged work from continue-fork'; its 'Remove telemetry (PostHog + Sentry)' section): https://github.com/continuedev/continue/pull/12570
- CLI OpenTelemetry is enabled only when OTEL config is present: https://github.com/continuedev/continue/blob/5522c6f44ca0ac3528b37244818fbfa39b5af470/extensions/cli/src/telemetry/telemetryService.ts#L68
- No `posthog*` or `@sentry/*` dependencies in core, gui, extensions/vscode or extensions/cli package.json at this commit
- Releases: https://github.com/continuedev/continue/releases (v2.0.0-vscode and v2.1.0-vscode, 2026-06-19)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Final 2.x releases removed PostHog and Sentry telemetry; reclassified from ON to no telemetry (for 2.0.0+). Repository now read-only / no longer actively maintained.
