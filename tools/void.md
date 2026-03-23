# Void

| Field | Value |
|-------|-------|
| Website | https://voideditor.com |
| Repository | https://github.com/voideditor/void |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | No (effectively) |
| Default State | OFF |
| Analytics Providers | None active |
| Disable Method | N/A (no telemetry active) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing in practice. Void is a fork of VS Code with Microsoft telemetry endpoints removed or deactivated. No analytics API keys are configured, so even if residual VS Code telemetry code paths exist, they have no destination to send data to.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No code or file contents
- No prompts or LLM responses
- No machine identifiers
- No crash reports

## How to Fully Opt Out

No action required. Void ships without active telemetry keys or endpoints. As a VS Code fork, residual telemetry code may exist in the codebase but is non-functional without configured API keys.

For additional assurance:
1. Verify that no telemetry API keys are present in the build
2. Block `*.vortex.data.microsoft.com` and `dc.services.visualstudio.com` at the network level (VS Code's default telemetry endpoints)

## Red Flags

- As a VS Code fork, the codebase inherits VS Code's telemetry infrastructure. While keys are removed, future updates or merges from upstream VS Code could inadvertently re-enable telemetry if not carefully reviewed.
- The project is relatively new; long-term maintenance and review practices are not yet established.

## Evidence

- VS Code telemetry keys removed/absent from build configuration
- No custom analytics SDKs added (no PostHog, Sentry, Amplitude, etc.)
- Repository: https://github.com/voideditor/void

## Changelog

- 2026-03-23: Initial entry
