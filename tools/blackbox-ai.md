# Blackbox AI

| Field | Value |
|-------|-------|
| Website | https://www.blackbox.ai/ |
| Repository | Closed source |
| Category | AI Code Completion / Chat |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (Blackbox cloud) |
| Disable Method | No documented opt-out |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Code context sent to Blackbox servers for completion
- Chat prompts and queries
- Usage analytics
- Editor metadata (file type, language, cursor position)
- Account and session data

## What Is NOT Collected

- Not documented. No public list of excluded data types.

## How to Fully Opt Out

There is no documented way to fully opt out of data collection while using the service. The only way to prevent data collection is to uninstall the extension.

## Red Flags

- **All code is cloud-processed** -- code context is sent to Blackbox servers for every completion
- Closed source with no independent audit available
- No documented opt-out mechanism for telemetry
- Privacy policy is vague on data retention and sharing
- VS Code extension requests broad permissions
- No clarity on whether user code is used for model training
- Free tier with unclear monetization model raises data-use questions

## Evidence

- Privacy policy: https://www.blackbox.ai/privacy
- Extension sends code to `api.blackbox.ai` for processing (observable via network inspection)
- No telemetry toggle in extension settings

## Changelog

- 2026-03-23: Initial entry
