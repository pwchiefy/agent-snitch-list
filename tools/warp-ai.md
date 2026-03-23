# Warp AI

| Field | Value |
|-------|-------|
| Website | https://www.warp.dev/ |
| Repository | Closed source |
| Category | AI-Powered Terminal |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | RudderStack, Sentry |
| Disable Method | Settings > Privacy > toggle off telemetry |
| Collects Code | Unknown |
| Collects Prompts | Yes (AI features require cloud processing) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Terminal command metadata
- AI prompt queries and interactions
- Feature usage analytics (via RudderStack)
- Crash reports and performance data (via Sentry)
- Session duration and frequency
- OS, hardware, and version info
- Account and authentication data

## What Is NOT Collected

- Warp states it does not sell personal data to third parties
- Shell history is stated to not be stored server-side (when telemetry is off)

## How to Fully Opt Out

1. Open Warp Settings
2. Navigate to **Privacy**
3. Toggle off telemetry/analytics options
4. **Important caveat:** On the free plan, disabling telemetry may disable AI features entirely, as AI queries are processed server-side

## Red Flags

- Closed source -- cannot independently verify data collection claims
- AI features require server-side processing (prompts leave your machine)
- Free plan users may lose AI functionality if telemetry is disabled
- RudderStack is a third-party CDP (Customer Data Platform)
- Account required to use the terminal at all
- Terminal commands may be processed server-side for AI features

## Evidence

- Privacy policy: https://www.warp.dev/privacy
- Settings UI contains privacy toggles
- RudderStack and Sentry identified via network traffic analysis
- User reports confirm AI feature degradation when telemetry is off on free tier

## Changelog

- 2026-03-23: Initial entry
