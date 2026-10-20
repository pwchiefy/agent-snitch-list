# OpenCode

| Field | Value |
|-------|-------|
| Website | https://opencode.ai |
| Repository | https://github.com/anomalyco/opencode |
| Category | AI Coding Assistant (CLI / TUI, desktop app) |
| Telemetry | Yes |
| Default State | Conditional (CLI: none; desktop/web app: Sentry ON) |
| Analytics Providers | Sentry (desktop app and hosted web app builds only) |
| Disable Method | CLI/TUI: nothing to disable. Desktop app: no in-app toggle found; build from source without VITE_SENTRY_DSN or block Sentry at the network level |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- CLI/TUI: nothing (OTLP export only if you set `OTEL_EXPORTER_OTLP_ENDPOINT`)
- Desktop app (official builds) and hosted web app: Sentry error reports with release, environment and platform tags
- User-initiated session sharing uploads the shared session to opencode.ai
- PostHog appears only in a CI workflow for download stats

## What Is NOT Collected

- CLI: no usage analytics, crash reporting or identifiers
- Sentry Breadcrumbs integration is removed in desktop/web builds
- LSP telemetry is suppressed

## How to Fully Opt Out

1. **CLI/TUI:** nothing to do. `OPENCODE_DISABLE_AUTOUPDATE` and `OPENCODE_DISABLE_MODELS_FETCH` stop update and model-list fetches
2. **Desktop app:** no in-app toggle found; block Sentry ingest at the network level or build without `VITE_SENTRY_DSN`

## Red Flags

- Official desktop app builds send crash/error reports to Sentry with no documented opt-out

## Notes

The CLI/TUI remains free of telemetry. The newer desktop app and hosted web app include Sentry error reporting in official builds, so the entry is now Conditional. Very active project (218k+ stars).

Downstream forks differ: Kilo Code is built on the OpenCode codebase but adds PostHog telemetry that is on by default (see [Kilo Code](kilo-code.md)).

## Evidence

- Desktop Sentry: https://github.com/anomalyco/opencode/blob/133b1ebfafc3ae040b9b23ff3fcad49e273c9cf9/packages/desktop/src/renderer/startup/sentry.ts
- Official build sets DSN: https://github.com/anomalyco/opencode/blob/133b1ebfafc3ae040b9b23ff3fcad49e273c9cf9/.github/workflows/publish.yml#L463
- Web app Sentry: https://github.com/anomalyco/opencode/blob/133b1ebfafc3ae040b9b23ff3fcad49e273c9cf9/packages/app/src/entry.tsx#L58-L76
- CLI OTLP from env only: https://github.com/anomalyco/opencode/blob/133b1ebfafc3ae040b9b23ff3fcad49e273c9cf9/packages/util/src/observability.ts#L22-L23
- CI PostHog: https://github.com/anomalyco/opencode/blob/133b1ebfafc3ae040b9b23ff3fcad49e273c9cf9/.github/workflows/stats.yml#L35

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Reclassified OFF -> Conditional: CLI/TUI still clean, but the desktop app and hosted web app ship Sentry error reporting.
- 2026-10-20: Noted that the Kilo Code fork adds default-on PostHog telemetry.
