# CodeReview AI

| Field | Value |
|-------|-------|
| Website | https://chromewebstore.google.com/detail/gndnlmacnaiokbgdmdakcohccbjjbfmb |
| Repository | https://github.com/Richie911/code-review (source published, no license) |
| Category | AI Code Review (Browser Extension) |
| Telemetry | No |
| Default State | N/A (no telemetry) |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. Reviews run on-device with Chrome's built-in Gemini Nano (Prompt and Summarizer APIs)

## What Is NOT Collected

- No usage analytics
- No crash reporting
- No identifiers
- No code or prompts sent to the vendor

## How to Fully Opt Out

No action required.

## Red Flags

None identified.

## Notes

Source is published on GitHub without a license (hence 'partial'). Very small extension (about 10 users). Reads pull-request pages on GitHub/GitLab; code does not leave the browser.

## Evidence

- Manifest (storage, sidePanel; github.com/gitlab.com only): https://github.com/Richie911/code-review/blob/9ac25ade6ac19bc6f92279aa4f35edd7c3c2d2fa/manifest.json
- Background script (no network calls): https://github.com/Richie911/code-review/blob/9ac25ade6ac19bc6f92279aa4f35edd7c3c2d2fa/background.js
- Chrome Web Store listing (v1.0.0, 2025-10-09): https://chromewebstore.google.com/detail/gndnlmacnaiokbgdmdakcohccbjjbfmb

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified against published source (Richie911/code-review): no network calls; repoStatus set to partial (source without license).
