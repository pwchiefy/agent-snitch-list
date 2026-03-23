# OpenHands

| Field | Value |
|-------|-------|
| Website | https://www.all-hands.dev |
| Repository | https://github.com/All-Hands-AI/OpenHands |
| Category | AI Software Engineering Agent |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | PostHog |
| Disable Method | Settings toggle in the UI |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Page load events
- UI click events and navigation
- Login and session events
- Feature usage metrics
- Browser and OS information
- Anonymous user/session identifiers
- Application version

## What Is NOT Collected

- Source code or repository contents
- Prompts sent to LLMs
- LLM responses or outputs
- API keys or credentials
- File names or paths from user projects
- Personal identifying information (beyond anonymous session ID)

## How to Fully Opt Out

1. **First-run consent modal:** When OpenHands launches for the first time, a consent modal asks whether you want to enable analytics. Select "No" or "Decline."
2. **Settings toggle:** Navigate to Settings in the OpenHands UI and disable the telemetry/analytics toggle.
3. **Environment variable:** Set `OPENHANDS_DISABLE_TELEMETRY=true` before starting the application.

## Red Flags

- PostHog is a third-party analytics platform; data is sent to PostHog's cloud infrastructure unless self-hosted PostHog is configured.

## Evidence

- PostHog integration: `frontend/src/utils/posthog.ts`
- Consent modal: `frontend/src/components/ConsentModal.tsx`
- Settings toggle: `frontend/src/components/Settings.tsx`
- PostHog project key in frontend source code
- Repository: https://github.com/All-Hands-AI/OpenHands

## Changelog

- 2026-03-23: Initial entry
