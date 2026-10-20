# Codacy

| Field | Value |
|-------|-------|
| Website | https://www.codacy.com/ |
| Repository | https://github.com/codacy/codacy-analysis-cli (legacy); https://github.com/codacy/codacy-cli-v2 |
| Category | AI Code Quality / Review |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Web cookies; unnamed analytics/advertising providers |
| Disable Method | Cookie consent; self-hosted deployment |
| Collects Code | Yes (cloud mode) |
| Collects Prompts | Unknown |
| Last Verified | 2026-10-20 |

## What Is Collected

- Repository code cloned for analysis in cloud mode
- Code quality metrics and findings
- Cookies, web beacons and pixels on the web app (usage data)
- Account, organization and team data; git and integration metadata

## What Is NOT Collected

- The CLIs themselves showed no analytics SDKs in source
- Local CLI analysis does not require sending code (uploading results sends findings)

## How to Fully Opt Out

1. Manage cookie preferences per Codacy's Cookies Policy.
2. Use local CLI analysis, or Codacy's self-hosted option, to keep code on your infrastructure.

## Red Flags

- Cloud mode clones whole repositories.
- Privacy policy mentions sharing with analytics and advertising providers.
- Core platform closed source.
- Broad repository permissions.

## Evidence

- Legacy CLI (README legacy warning): https://github.com/codacy/codacy-analysis-cli/blob/282cd363a90a990b7b2345ea622ef984d103c8d7/README.md
- CLI v2: https://github.com/codacy/codacy-cli-v2
- Privacy policy (updated 2023-06-30): https://www.codacy.com/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified; noted analysis CLI is legacy (CLI v2 recommended), no analytics SDK in either CLI, and privacy-policy sharing with analytics/advertising providers.
