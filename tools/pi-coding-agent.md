# Pi (coding agent)

| Field | Value |
|-------|-------|
| Website | https://pi.dev |
| Repository | https://github.com/earendil-works/pi |
| Category | AI Coding Agent (CLI / TUI) |
| Telemetry | Yes |
| Default State | ON (install/update ping only); OFF (analytics) |
| Analytics Providers | Custom first-party endpoint (`pi.dev/api/report-install`) |
| Disable Method | `PI_TELEMETRY=0`, `PI_OFFLINE=1`, or `enableInstallTelemetry: false` in settings |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Install or update event: version in query string
- User-Agent: pi version, OS platform, Node/Bun runtime version, CPU arch
- Provider attribution headers on LLM requests (OpenRouter, NVIDIA NIM, others) while install telemetry is enabled

## What Is NOT Collected

- No usage events, prompts, code or file contents in the default path
- `enableAnalytics` (first-run setup analytics) is off by default

## How to Fully Opt Out

1. **Environment:** `PI_TELEMETRY=0` (also removes attribution headers)
2. **Settings:** `"enableInstallTelemetry": false`
3. **All automatic network activity:** `PI_OFFLINE=1`; version check alone: `PI_SKIP_VERSION_CHECK=1`

## Red Flags

- Install/update ping ON by default (minimal: version, platform, runtime, arch)

## Notes

MIT monorepo (formerly badlogic/pi-mono). Install telemetry is limited to a version ping; no usage analytics in the default path. `packages/telemetry` is a vendor-neutral tracing contract with no built-in exporter.

## Evidence

- https://github.com/earendil-works/pi/blob/fdce48eb404ec014adaf2ac10a3a53bc6b1740c2/packages/coding-agent/src/modes/interactive/interactive-mode.ts (lines 1338-1375)
- https://github.com/earendil-works/pi/blob/fdce48eb404ec014adaf2ac10a3a53bc6b1740c2/packages/coding-agent/src/core/telemetry.ts
- https://github.com/earendil-works/pi/blob/fdce48eb404ec014adaf2ac10a3a53bc6b1740c2/packages/coding-agent/src/core/provider-attribution.ts
- https://github.com/earendil-works/pi/blob/fdce48eb404ec014adaf2ac10a3a53bc6b1740c2/packages/coding-agent/docs/settings.md (Updates, telemetry, and warnings)
- https://github.com/earendil-works/pi/blob/fdce48eb404ec014adaf2ac10a3a53bc6b1740c2/packages/coding-agent/docs/environment-variables.md

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
