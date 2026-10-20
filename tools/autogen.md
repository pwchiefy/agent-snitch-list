# AutoGen

| Field | Value |
|-------|-------|
| Website | https://microsoft.github.io/autogen/ |
| Repository | https://github.com/microsoft/autogen |
| Category | Multi-Agent Framework |
| Telemetry | No |
| Default State | OFF |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. AutoGen does not include telemetry or analytics in the framework.

## What Is NOT Collected

- No usage analytics
- No agent conversations or prompts
- No code or file contents
- No crash reports
- No user identifiers

## How to Fully Opt Out

No action required. There is no telemetry to disable.

## Red Flags

None identified. AutoGen is a Microsoft Research project distributed as an open-source framework. All LLM calls go directly to user-configured API endpoints.

**Status (2026-10-20):** Archived / no longer maintained: as of 2026-10 the README states Microsoft provides no bug fixes, security fixes or support, and the default branch now contains only documentation (last release python-v0.7.5, 2025-09-30). Microsoft recommends Microsoft Agent Framework (not audited here). All LLM calls go directly to user-configured endpoints.

## Evidence

- Repository: https://github.com/microsoft/autogen
- No analytics dependencies in requirements
- No telemetry module in source tree
- Last release source: https://github.com/microsoft/autogen/tree/python-v0.7.5 -- no PostHog/Mixpanel/Amplitude/Segment/Sentry/Application Insights
- Archive notice: https://github.com/microsoft/autogen/blob/004749e6b7102c8fd317b9b1499ce5807223c278/README.md

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Project archived/no longer maintained (README, Oct 2026); default branch now documentation-only; re-verified last release has no telemetry.
