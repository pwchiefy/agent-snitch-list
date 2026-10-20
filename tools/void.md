# Void

| Field | Value |
|-------|-------|
| Website | https://voideditor.com |
| Repository | https://github.com/voideditor/void (archived, deprecated) |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Settings > Metrics > Opt-out (requires restart) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Persistent machine ID and user-machine ID; OS and architecture; Void and VS Code versions, commit, release/quality, dev-mode flag
- An `Alive` ping every 15 minutes
- UI events: accept/reject diff or file, chat navigation, Ctrl+K/Ctrl+L, apply/copy code, execute shell (command length only), model add/delete, MCP server changes, agent loop completion counts
- LLM request metadata: provider name, model name, **custom endpoint URL**, number of models at the endpoint, message counts, FIM prefix/suffix lengths, response/reasoning lengths, duration, tool-call name

## What Is NOT Collected

- Code, prompts and LLM responses (only lengths/counts are sent)
- API keys

## How to Fully Opt Out

1. Open Void Settings > **Metrics** and switch on **Opt-out (requires restart)**, then restart Void.

## Red Flags

- ON by default with no first-run consent prompt.
- Custom endpoint URLs (e.g. internal model hosts) are included in LLM events.
- Deprecated and archived; no fixes.

## Evidence

- Metrics service (PostHog key, opt-in/opt-out): https://github.com/voideditor/void/blob/b3166e7ef2aefbdfeb139445fdf248a561b85d4d/src/vs/workbench/contrib/void/electron-main/metricsMainService.ts#L91
- LLM event properties: https://github.com/voideditor/void/blob/b3166e7ef2aefbdfeb139445fdf248a561b85d4d/src/vs/workbench/contrib/void/electron-main/llmMessage/sendLLMMessage.ts#L39
- Alive ping interval: https://github.com/voideditor/void/blob/b3166e7ef2aefbdfeb139445fdf248a561b85d4d/src/vs/workbench/contrib/void/browser/metricsPollService.ts#L20
- Settings opt-out UI: https://github.com/voideditor/void/blob/b3166e7ef2aefbdfeb139445fdf248a561b85d4d/src/vs/workbench/contrib/void/browser/react/src/void-settings-tsx/Settings.tsx#L1470
- Deprecation notice: https://github.com/voideditor/void/blob/b3166e7ef2aefbdfeb139445fdf248a561b85d4d/README.md

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: Void has PostHog metrics ON by default (opt-out in Settings). Project deprecated and repo archived.
