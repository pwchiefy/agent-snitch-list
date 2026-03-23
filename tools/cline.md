# Cline

| Field | Value |
|-------|-------|
| Website | https://cline.bot |
| Repository | https://github.com/cline/cline |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing. Cline does not implement any telemetry, analytics, or tracking.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No code or file contents
- No prompts or LLM responses
- No machine identifiers
- No network calls to any analytics service

## How to Fully Opt Out

No action required. Cline has no telemetry infrastructure. All LLM API calls go directly from the extension to your configured provider using your own API keys.

## Red Flags

None identified. The codebase is clean of any analytics SDKs, tracking pixels, or telemetry endpoints. This has been independently verified through source code audit.

## Evidence

- Full codebase search for PostHog, Sentry, Amplitude, Mixpanel, analytics, telemetry, and tracking yields zero results
- `package.json` contains no analytics dependencies
- All network calls are to user-configured LLM API endpoints only
- Repository: https://github.com/cline/cline

## Changelog

- 2026-03-23: Initial entry
