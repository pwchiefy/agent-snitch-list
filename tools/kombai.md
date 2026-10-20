# Kombai

| Field | Value |
|-------|-------|
| Website | https://kombai.com/ |
| Repository | Closed source |
| Category | AI Design Engineer (IDE extension + desktop app) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog (Trust Center subprocessor), Sentry (Trust Center subprocessor), Google Analytics (privacy policy) |
| Disable Method | No documented telemetry opt-out (Google Analytics browser opt-out and cookie controls only) |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Content created or uploaded: designs, prompts, generated code
- Repository context used to build 'Context Graphs'
- Technical data: IP, device, browser, cookie IDs, pages visited, OS and 'coding preferences'
- Account and support data
- Analytics via PostHog and error monitoring via Sentry (Trust Center subprocessors); Google Analytics (privacy policy)

## What Is NOT Collected

- Payment data handled by processors

## How to Fully Opt Out

No documented telemetry opt-out.
1. **Google Analytics:** Google's browser opt-out
2. **Cookies:** browser settings
3. **Deletion:** delete account / email support@kombai.com

## Red Flags

- No documented telemetry opt-out
- Uses PostHog and Sentry (per its own subprocessor list)
- Privacy policy does not say whether user content is used for model training
- Closed source

## Notes

Kombai is now an 'AI design engineer' delivered as a VS Code/Open VSX extension and desktop app working inside the user's codebase. The previous red flag 'no published security certifications' was removed: the Trust Center claims SOC 2 (type not stated).

## Evidence

- Privacy policy (last modified 2026-01-06): https://kombai.com/privacy
- Trust Center (SOC 2 claim; PostHog, Sentry subprocessors): https://kombai.trust.site/
- Homepage: https://kombai.com/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Product is now an IDE extension/desktop agent; added PostHog, Sentry, Google Analytics from Kombai's own documents; removed 'no security certifications' flag (SOC 2 claimed).
