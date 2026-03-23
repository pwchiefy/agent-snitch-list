# Sweep AI (Hosted)

| Field | Value |
|-------|-------|
| Website | https://sweep.dev/ (archived) |
| Repository | https://github.com/sweepai/sweep (archived) |
| Category | AI Code Generation / PR Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | No documented opt-out (service is now archived) |
| Collects Code | Yes (30-day snippet retention) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Code snippets from repositories (retained for up to 30 days)
- Issue descriptions and PR context
- Usage analytics (via PostHog)
- Repository metadata
- Account and organization data
- Generated code and PR content

## What Is NOT Collected

- Full repository clones (only relevant snippets)
- Specific exclusions not well-documented

## How to Fully Opt Out

The service is now archived/discontinued. If you previously used it:

1. Remove the GitHub App integration
2. Request data deletion if account still exists
3. Review any remaining Sweep-generated PRs for residual data

## Red Flags

- **30-day code snippet retention** -- code was stored on Sweep servers for up to a month
- PostHog analytics sent to third-party servers
- Service is now **archived/discontinued** -- unclear what happened to stored data
- No documented opt-out mechanism was available when active
- Data retention after service shutdown is unclear

## Evidence

- Repository: https://github.com/sweepai/sweep (archived)
- PostHog dependency in source code
- 30-day retention mentioned in documentation
- Service discontinued -- website may be inactive

## Changelog

- 2026-03-23: Initial entry
