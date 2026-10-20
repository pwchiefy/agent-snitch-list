# Cursor

| Field | Value |
|-------|-------|
| Website | https://cursor.com |
| Repository | Closed source |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog (reported; not named in official docs) |
| Disable Method | Enable "Privacy Mode" in settings |
| Collects Code | Yes (training/storage only without Privacy Mode; always sent for processing) |
| Collects Prompts | Yes (unless Privacy Mode is enabled) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Without Privacy Mode:**
- Cursor states it may use and store codebase data, prompts, editor actions and code snippets to improve AI features and train models
- Some inference providers may temporarily store inputs/outputs
- Telemetry events, error reports, OS/platform/version, machine identifier

**With Privacy Mode:**
- No training on your data; zero-data-retention agreements with model providers (non-ZDR models are labeled or require admin opt-in)
- Code is still sent to Cursor's backend for processing -- "Even if you use your API key, your requests will still go through our backend"
- File contents may be temporarily cached, encrypted with client-generated keys
- Community reports describe crash-level telemetry (e.g. `metrics.cursor.sh`) continuing in Privacy Mode

## What Is NOT Collected

- With Privacy Mode: no training on customer data and no permanent storage of cached file contents (per Cursor)
- Git credentials, SSH keys

## How to Fully Opt Out

1. **Enable Privacy Mode:** Cursor Settings > General > Privacy Mode (team/enterprise admins can enforce it; new members inherit the team setting)
2. **Disable inherited VS Code telemetry:**
   ```json
   { "telemetry.telemetryLevel": "off" }
   ```
3. **Network-level:** blocking Cursor's own domains breaks functionality; Cursor recommends allowlisting its backend domains

## Red Flags

- Privacy Mode is a user setting for individual accounts (available on free and Pro); teams/enterprises can enforce it. The individual default is not stated in Cursor's data-use docs
- Without Privacy Mode, Cursor may store and train on codebase data, prompts and editor actions
- All requests are routed through Cursor's backend even when you supply your own API key
- A community report observed connections to metrics.cursor.sh and other domains with Privacy Mode on; Cursor staff replied that only fatal-level crash events (Sentry) and keep-alives are sent in Privacy Mode, with no content
- Closed source: telemetry behavior cannot be independently verified through source review
- Inherits VS Code telemetry infrastructure in addition to its own

**Notes:** Official docs (security/data-use) do not name third-party analytics vendors; the PostHog attribution is carried over from the original entry and community reports and remains unverified by primary source as of 2026-10-20. Business/enterprise tiers offer stronger contractual guarantees.

## Evidence

- Data use: https://cursor.com/data-use
- Security: https://cursor.com/security
- Privacy Policy (updated 2026-10-11): https://cursor.com/privacy
- Community report on domains contacted in Privacy Mode: https://forum.cursor.com/t/cursor-connects-to-multiple-undocumented-domains/162860
- PostHog attribution: carried over from original entry; not confirmed in official documentation

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-checked data-use/security/privacy pages: documented training without Privacy Mode, ZDR with Privacy Mode, and backend routing even with own API keys; PostHog attribution marked as unverified by primary source. Privacy Mode wording corrected: the cited forum thread shows Sentry crash events, not PostHog, and the individual default is not stated in Cursor's docs.
