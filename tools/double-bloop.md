# Double (Bloop)

| Field | Value |
|-------|-------|
| Website | https://bloop.ai/ (now Double) |
| Repository | https://github.com/BloopAI/bloop (archived) |
| Category | AI Code Search / Chat |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry |
| Disable Method | No documented opt-out |
| Collects Code | Yes (indexed for search) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Code repository contents (indexed server-side for search)
- Search queries and chat prompts
- Crash reports and errors (via Sentry)
- Usage analytics
- Session and account data

## What Is NOT Collected

- Not documented in detail

## How to Fully Opt Out

There is no documented way to disable telemetry. The repository has been archived and the product has pivoted to Double (a SaaS product).

1. **Only option:** Stop using the service and delete your account

## Red Flags

- Repository is **archived** -- no further open-source development
- Sentry sends crash data to third-party servers
- Code indexing requires server-side processing
- Product pivot from open source to closed SaaS (Double) means reduced transparency
- No opt-out mechanism was provided even when open source

## Evidence

- Archived repository: https://github.com/BloopAI/bloop
- Sentry dependency visible in source code
- Product rebranded to Double with closed-source SaaS model

## Changelog

- 2026-03-23: Initial entry
