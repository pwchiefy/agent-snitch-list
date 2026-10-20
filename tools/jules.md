# Jules (Google)

| Field | Value |
|-------|-------|
| Website | https://jules.google |
| Repository | Closed source |
| Category | Cloud Coding Agent (SaaS) |
| Telemetry | Yes |
| Default State | SaaS-inherent |
| Analytics Providers | Google first-party |
| Disable Method | N/A (cloud service) |
| Collects Code | Yes (repo cloned to cloud VM) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Repository contents (cloned into a per-task Google Cloud VM)
- Task prompts, plans and generated code

## What Is NOT Collected

- Private repository content is not used for training (per FAQ)

## How to Fully Opt Out

1. No in-product telemetry opt-out documented; the service is inherently server-side

## Red Flags

- Cloud-only: full repository cloned to Google infrastructure for each task
- FAQ is silent on training use of public repositories
- No documented opt-out beyond not using the service
- Closed source

## Notes

Asynchronous GitHub-connected coding agent.

## Evidence

- https://jules.google/docs/faq/
- Privacy / data documentation: https://jules.google/docs/faq/

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
