# Aide

| Field | Value |
|-------|-------|
| Website | https://aide.dev/ |
| Repository | https://github.com/codestoryai/aide |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Setting: `codestory.disableTelemetry: true` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage analytics (via PostHog)
- Editor interaction patterns
- AI feature usage (completions, chat, edits)
- Error and crash data
- OS, version, and hardware info
- Anonymous user identifiers

## What Is NOT Collected

- No code content
- No prompt text or AI conversation content
- No file contents or paths
- No API keys

## How to Fully Opt Out

1. **Settings:** Add `"codestory.disableTelemetry": true` to settings JSON
2. **Network block:** Block outbound connections to `app.posthog.com`

## Red Flags

- Telemetry ON by default
- PostHog is a third-party analytics platform
- As a VS Code fork, users may expect VS Code-like telemetry behavior but the telemetry infrastructure is different

## Evidence

- Repository: https://github.com/codestoryai/aide
- PostHog dependency in source
- `codestory.disableTelemetry` setting documented
- Telemetry module in source code

## Changelog

- 2026-03-23: Initial entry
