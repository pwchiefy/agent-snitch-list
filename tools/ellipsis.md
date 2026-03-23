# Ellipsis

| Field | Value |
|-------|-------|
| Website | https://ellipsis.dev/ |
| Repository | Closed source |
| Category | AI Code Review |
| Telemetry | Yes |
| Default State | SaaS (always on) |
| Analytics Providers | Custom (Ellipsis cloud, AWS VPC) |
| Disable Method | No documented opt-out |
| Collects Code | Yes (ephemeral, processed in AWS VPC) |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Pull request diffs and code context
- Repository metadata
- Review interactions and feedback
- Usage analytics
- Account and organization data
- Git metadata (commits, branches, authors)

## What Is NOT Collected

- Ellipsis states code is processed ephemerally within their AWS VPC
- Claims code is not persisted after review processing
- Claims no use of customer code for model training

## How to Fully Opt Out

There is no way to opt out of data processing while using the service.

1. **Only option:** Remove the Ellipsis GitHub integration

## Red Flags

- Closed source with no independent audit
- All code processing happens on Ellipsis infrastructure (AWS VPC)
- No opt-out mechanism for telemetry or data collection
- GitHub app permissions grant broad repository read access
- "Ephemeral" processing is a trust-based claim with no verification mechanism

## Evidence

- Website: https://ellipsis.dev/
- Security documentation references AWS VPC isolation
- No published SOC 2 or equivalent certification found

## Changelog

- 2026-03-23: Initial entry
