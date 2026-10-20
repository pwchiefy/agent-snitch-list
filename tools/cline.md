# Cline

| Field | Value |
|-------|-------|
| Website | https://cline.bot |
| Repository | https://github.com/cline/cline |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog (via `data.cline.bot`) |
| Disable Method | Settings > General > 'Allow error and usage reporting' (IDE); `telemetryOptOut: true` (CLI) |
| Collects Code | No |
| Collects Prompts | No (Yes for Cline/ClinePass providers, per docs) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Features used (tools, slash commands, skills), tasks started/completed, Plan/Act mode switches
- Errors such as API and tool failures
- Token counts, timings, model and provider names
- Cline version, OS and editor
- A per-installation device identifier; account and organization identifiers when signed in
- Per Cline's docs: for the Cline and ClinePass providers, telemetry can include prompts and model responses

## What Is NOT Collected

- Code and file contents (per Cline docs)
- Prompts when using your own API keys with third-party providers (per Cline docs)

## How to Fully Opt Out

1. **VS Code / JetBrains:** Settings (gear) > General > clear **Allow error and usage reporting**. VS Code's global `telemetry.telemetryLevel` is also respected.
2. **Cline Desktop:** Settings > General > turn off Telemetry.
3. **CLI:** set `"telemetryOptOut": true` in `~/.cline/data/settings/global-settings.json` and restart Cline and its background hub.
4. Note: organization admins can enforce telemetry via remote configuration in the IDE extensions.

## Red Flags

- Telemetry is ON by default: the stored setting defaults to `unset`, which the code treats as opted in. Cline's February 2025 launch post described an opt-in prompt.
- With the Cline/ClinePass providers, telemetry can include prompts and model responses (documented).
- Opting out sends a single 'required' opt-out event.
- Sign-in and feature-flag requests to Cline servers continue with telemetry off (documented).

## Evidence

- PostHog provider and opt-in logic: https://github.com/cline/cline/blob/0870796e9e0c640408bb87d9503514a83f57d470/apps/vscode/src/services/telemetry/providers/posthog/PostHogTelemetryProvider.ts#L122
- PostHog host `https://data.cline.bot`: https://github.com/cline/cline/blob/0870796e9e0c640408bb87d9503514a83f57d470/apps/vscode/src/shared/services/config/posthog-config.ts#L43
- Default `telemetrySetting: "unset"`: https://github.com/cline/cline/blob/0870796e9e0c640408bb87d9503514a83f57d470/apps/vscode/src/shared/storage/state-keys.ts#L275
- `isOptedIn = telemetrySetting !== "disabled"`: https://github.com/cline/cline/blob/0870796e9e0c640408bb87d9503514a83f57d470/apps/vscode/src/core/controller/ui/initializeWebview.ts#L235
- Required opt-out event: https://github.com/cline/cline/blob/0870796e9e0c640408bb87d9503514a83f57d470/sdk/packages/core/src/services/telemetry/core-events.ts#L414
- Docs: https://docs.cline.bot/more-info/telemetry
- Launch post (2025-02-26): https://cline.bot/blog/introducing-anonymous-telemetry-in-cline

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: Cline has PostHog telemetry (added Feb 2025) and it is ON by default in current source/docs. Previous 'no telemetry' classification was wrong.
