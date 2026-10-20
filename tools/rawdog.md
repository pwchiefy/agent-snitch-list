# Rawdog

| Field | Value |
|-------|-------|
| Website | https://github.com/granawkins/rawdog |
| Repository | https://github.com/granawkins/rawdog |
| Category | CLI AI Assistant |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No machine identifiers
- Prompts go only to the LLM API you configure

## How to Fully Opt Out

1. No action required.

## Red Flags

- Executes LLM-generated Python directly on your machine without sandboxing (a security concern, not telemetry).
- Unmaintained since February 2024.

## Evidence

- Source grep at f08ac12: no analytics SDKs (https://github.com/granawkins/rawdog/tree/f08ac12ba42d49661187a37d5c7f751e44fba87f)
- Repository moved: https://github.com/AbanteAI/rawdog redirects to https://github.com/granawkins/rawdog

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified, no telemetry. Repo moved to granawkins/rawdog; noted inactivity.
