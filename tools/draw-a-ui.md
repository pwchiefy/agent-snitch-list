# Draw-a-UI

| Field | Value |
|-------|-------|
| Website | https://github.com/SawyerHood/draw-a-ui |
| Repository | https://github.com/SawyerHood/draw-a-ui |
| Category | AI UI Code Generation (Sketch to Code) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No (images go to OpenAI with your key) |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing sent to the project
- Core function: canvas image sent to the OpenAI API with your own key via the local `/api/toHtml` route

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No identifiers
- No code or prompts sent to the vendor

## How to Fully Opt Out

No action required. If you run it with `next dev`/`next build`, set `NEXT_TELEMETRY_DISABLED=1` to stop Next.js's own CLI telemetry.

## Red Flags

None identified.

## Notes

Sends sketches to the OpenAI API with the user's own key. Inactive: last commit 2025-07-26; the README points to a successor project. Running it with `next dev`/`next build` triggers Next.js's own CLI telemetry unless NEXT_TELEMETRY_DISABLED=1 is set (https://nextjs.org/telemetry).

## Evidence

- package.json: https://github.com/SawyerHood/draw-a-ui/blob/1aca63b4d54a3065fe72fe9784c91265510fbe19/package.json
- Only network call: https://github.com/SawyerHood/draw-a-ui/blob/1aca63b4d54a3065fe72fe9784c91265510fbe19/app/page.tsx#L76
- Next.js telemetry docs: https://nextjs.org/telemetry

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified, no change in classification; noted inactivity (last commit 2025-07-26) and Next.js CLI telemetry.
