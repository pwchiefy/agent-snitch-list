# Bito AI

| Field | Value |
|-------|-------|
| Website | https://bito.ai/ |
| Repository | Partial (IDE extensions) |
| Category | AI Code Assistant |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Google Analytics, Mixpanel |
| Disable Method | No documented opt-out |
| Collects Code | No (metadata only per claims) |
| Collects Prompts | Yes (sent to backend for processing) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Usage analytics (via Google Analytics and Mixpanel)
- Prompts sent to Bito backend for AI processing
- Feature usage patterns
- Editor metadata (language, file type)
- Account and session data
- Error and crash data
- Bito states only metadata is collected for analytics, not code content

## What Is NOT Collected

- Bito claims code content is not stored for analytics purposes
- Claims no code used for model training

## How to Fully Opt Out

There is no documented way to opt out of telemetry while using the extension.

1. **Only option:** Uninstall the extension

## Red Flags

- **Two third-party analytics providers** (Google Analytics + Mixpanel) -- data flows to Google and Mixpanel
- No documented opt-out mechanism
- Prompts processed on Bito backend
- "Metadata only" claim is difficult to verify (closed source)
- Mixpanel tracks detailed user behavior patterns

## Evidence

- Website: https://bito.ai/
- Privacy policy: https://bito.ai/privacy
- Google Analytics and Mixpanel identified in extension/web properties
- No telemetry toggle in extension settings

## Changelog

- 2026-03-23: Initial entry
