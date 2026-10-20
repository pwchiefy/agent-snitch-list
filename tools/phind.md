# Phind

| Field | Value |
|-------|-------|
| Website | https://www.phind.com/ |
| Repository | Closed source |
| Category | AI Code Search / Chat |
| Telemetry | Yes |
| Default State | SaaS (always on) |
| Analytics Providers | Custom (Phind servers) |
| Disable Method | Paid plans offer data opt-out options |
| Collects Code | Yes (queries include code context) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Search queries and chat prompts
- Code snippets included in queries
- Conversation history
- Usage analytics
- Browser metadata (web version)
- Account data
- VS Code extension: editor context sent with queries

## What Is NOT Collected

- Paid plans may offer reduced data retention
- Specific exclusions not well-documented

## How to Fully Opt Out

1. **Paid plans:** Some paid tiers offer data opt-out or reduced retention
2. **Free tier:** No opt-out available for data collection
3. **VS Code extension:** Uninstall to stop editor context collection
4. **Account deletion:** Request via account settings

## Red Flags

- Free tier has no opt-out for data collection
- All queries processed on Phind servers
- Conversation history stored server-side
- Code context from editor is sent with VS Code extension queries
- Limited transparency on data retention periods
- Unclear whether queries are used for model training (free tier)

**Status (2026-10-20 check):** Status unconfirmed: multiple secondary sources report Phind shut down on 2026-01-16 (Pro refunds; data export until 2026-01-30). phind.com returned HTTP 403 to automated checks on 2026-10-20, so the shutdown could not be confirmed from a primary source. Entry retained for historical reference.

## Evidence

- Website: https://www.phind.com/
- Privacy policy: https://www.phind.com/privacy
- VS Code extension sends editor context observable via network inspection
- Paid plan data policies mentioned in pricing documentation
- Privacy Policy (unreachable to automated checks 2026-10-20): https://www.phind.com/privacy
- Shutdown reports are secondary (aggregator sites); no primary announcement located

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Status check: reported shut down 2026-01-16 by secondary sources, unconfirmed from primary source; data fields not re-verified.
