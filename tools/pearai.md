# PearAI

| Field | Value |
|-------|-------|
| Website | https://trypear.ai/ |
| Repository | https://github.com/trypear/pearai-app |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Settings toggle (if available) |
| Collects Code | Unknown |
| Collects Prompts | Yes (logged for QA purposes) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage analytics (via PostHog)
- AI prompts and interactions (logged for QA)
- Editor interaction patterns
- Error and crash data
- OS, version, and environment info
- Session metadata

## What Is NOT Collected

- Specific exclusions not well-documented

## How to Fully Opt Out

1. **Settings:** Check PearAI settings for telemetry toggle
2. **Network block:** Block outbound connections to `app.posthog.com` and PearAI servers

## Red Flags

- **Prompts are logged for QA** -- this means your AI conversations may be stored and reviewed by the PearAI team
- Telemetry ON by default
- PostHog is a third-party analytics platform
- Prompt logging for QA is more invasive than typical usage analytics
- VS Code fork -- users may not realize telemetry behavior differs from upstream VS Code
- Early-stage project with evolving data practices

## Evidence

- Repository: https://github.com/trypear/pearai-app
- PostHog dependency in source
- QA logging of prompts documented/observed in source code
- Telemetry module in application source

## Changelog

- 2026-03-23: Initial entry
