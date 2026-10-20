# Kilo Code

| Field | Value |
|-------|-------|
| Website | https://kilo.ai |
| Repository | https://github.com/Kilo-Org/kilocode |
| Category | AI Coding Agent (VS Code / JetBrains extension and CLI) |
| Telemetry | Yes |
| Default State | ON (CLI); follows VS Code telemetry setting (extension) |
| Analytics Providers | PostHog (`us.i.posthog.com`) |
| Disable Method | VS Code: global `telemetry.telemetryLevel: off`; CLI: `KILO_TELEMETRY_LEVEL=off` or `experimental.openTelemetry: false` in config |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Lifecycle and feature events (see `packages/kilo-telemetry/src/events.ts`): CLI start/exit, sessions, LLM completion, command/tool/agent usage, suggestions, indexing, shares, MCP, remote, auth
- App name, editor name, platform, app version, VS Code version
- Kilo organization ID
- Distinct ID: account email when signed in to Kilo, otherwise random machine UUID stored locally
- GeoIP (PostHog server-side, explicitly enabled)
- Anaconda AAU client token, only if `~/.conda/aau_token` exists

## What Is NOT Collected

- Prompt text and file contents are not part of the defined event properties reviewed
- API keys (per PRIVACY.md)

## How to Fully Opt Out

1. **VS Code:** set `telemetry.telemetryLevel` to `off` (extension passes `KILO_TELEMETRY_LEVEL=off` to its CLI backend)
2. **CLI environment:** `KILO_TELEMETRY_LEVEL=off`
3. **CLI config:** `"experimental": {"openTelemetry": false}`
4. **Network block:** block `us.i.posthog.com`

## Red Flags

- Telemetry ON by default in the CLI
- PostHog distinct ID is the user's Kilo account email when signed in
- GeoIP lookup explicitly enabled (`disableGeoip: false`)
- Reads another vendor's (Anaconda) anonymous-usage token from the local conda install and attaches it as a join key
- CLI opt-out lives under an oddly named `experimental.openTelemetry` config key
- PRIVACY.md (last updated March 2025) does not describe the PostHog telemetry

## Notes

MIT. Current codebase is an OpenCode-based CLI plus VS Code and JetBrains front ends; the VS Code extension follows VS Code's global telemetry setting.

## Evidence

- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/kilo-telemetry/src/client.ts
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/kilo-telemetry/src/identity.ts (email as user ID, lines 114-136)
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/kilo-telemetry/src/conda.ts
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/kilo-telemetry/src/telemetry.ts (`KILO_TELEMETRY_LEVEL`, line 92)
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/opencode/src/kilocode/cli/setup.ts (line 99-103)
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/packages/kilo-vscode/src/services/cli-backend/server-manager.ts (line 157)
- https://github.com/Kilo-Org/kilocode/blob/5cc65d1212b00609f9bba7bd25780aa5e64f516d/PRIVACY.md
- Privacy / data documentation: https://github.com/Kilo-Org/kilocode/blob/main/PRIVACY.md

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
