# Sweep

| Field | Value |
|-------|-------|
| Website | https://sweep.dev |
| Repository | https://github.com/sweepai/sweep (archived) |
| Category | AI Code Review / PR Agent |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None (in OSS version) |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No (in OSS version) |
| Collects Prompts | No (in OSS version) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing in the open-source self-hosted version. Sweep operated as a GitHub App SaaS service (now discontinued), which processed repository code server-side. The open-source codebase does not contain analytics or telemetry instrumentation.

## What Is NOT Collected

- No usage analytics in the OSS version
- No error reporting
- No code transmission to third parties
- No prompts or LLM response logging to external services

## How to Fully Opt Out

No action required for the open-source version. The SaaS service has been discontinued.

## Red Flags

- The repository is archived and no longer maintained
- The SaaS version (when it was operational) had access to repository code via GitHub App permissions, but this is no longer relevant as the service has been shut down
- No ongoing security updates

## Evidence

- No analytics SDKs found in `requirements.txt` or `pyproject.toml`
- No PostHog, Sentry, Amplitude, or similar imports in the codebase
- Repository status: Archived (read-only)
- Repository: https://github.com/sweepai/sweep

## Changelog

- 2026-03-23: Initial entry
