# ChatDev

| Field | Value |
|-------|-------|
| Website | https://github.com/OpenBMB/ChatDev |
| Repository | https://github.com/OpenBMB/ChatDev |
| Category | Multi-Agent Software Development |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. Neither the Python backend nor the Vue frontend includes analytics or crash reporting.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No machine identifiers
- Prompts go only to the model providers you configure

## How to Fully Opt Out

1. No action required.

## Red Flags

- None identified.

## Evidence

- requirements.txt and frontend/package.json at a2ea4a2: no analytics dependencies (https://github.com/OpenBMB/ChatDev/blob/a2ea4a263cebe9a7abd01ee3b5b0bf95698ed328/requirements.txt)
- Source grep at a2ea4a2: no telemetry endpoints
- ChatDev 2.0 announcement in README (2026-01-07)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified on ChatDev 2.0 (DevAll) codebase; still no telemetry.
