# Double (Bloop)

| Field | Value |
|-------|-------|
| Website | https://bloop.ai/ (unreachable 2026-10-20) |
| Repository | https://github.com/BloopAI/bloop (archived, `oss` branch) |
| Category | AI Code Search / Chat |
| Telemetry | No (final OSS code) |
| Default State | N/A |
| Analytics Providers | None (Sentry and RudderStack removed April 2024) |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing in the final open-source code on the `oss` branch.
- Historical: releases before April 2024 included Sentry crash reporting and RudderStack analytics (removed in commits 40602c0 and 49fe36b).

## What Is NOT Collected

- No analytics or crash reporting in the final code
- Answer API defaults to `http://127.0.0.1:7879` (local)

## How to Fully Opt Out

1. No action required for builds from the final `oss` source.
2. Old binaries (pre-April 2024) may still contain Sentry/RudderStack; stop using them.

## Red Flags

- Archived and unmaintained.
- Older builds had telemetry.
- The company has shut down (April 2026).

## Evidence

- 'remove analytics' commit: https://github.com/BloopAI/bloop/commit/40602c0c2975217ef8ae0743e30dd980408bcec5
- 'remove sentry' commit: https://github.com/BloopAI/bloop/commit/49fe36bda2c65648e078828710813929ff3c016b
- Final commit (no init calls): https://github.com/BloopAI/bloop/tree/431e9e82c5a293c40f22aadb3615c3aa387af82e
- Shutdown announcement (2026-04-10): https://vibekanban.com/blog/shutdown

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: telemetry (Sentry, RudderStack) was removed from the OSS code in April 2024; company shut down April 2026. 'Rebranded to Double' claim could not be verified.
