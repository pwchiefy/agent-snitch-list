# Ellipsis

| Field | Value |
|-------|-------|
| Website | https://www.ellipsis.dev/ |
| Repository | Closed source |
| Category | AI Code Review |
| Telemetry | Yes |
| Default State | SaaS (always on) |
| Analytics Providers | Custom (Ellipsis cloud, AWS VPC) |
| Disable Method | No documented opt-out |
| Collects Code | Yes (in-memory, not retained per policy) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- PR diffs and code context, processed in a private AWS VPC and sent to AI model providers
- Repository metadata and git metadata
- Review and agent interactions
- Account, organization and usage data (retained while the account is active)

## What Is NOT Collected

- Per the privacy notice: source code is not retained after processing and is not used for model training

## How to Fully Opt Out

1. No documented opt-out; uninstall the GitHub app to stop processing.
2. Request account/data deletion via team@ellipsis.dev.

## Red Flags

- Closed source; retention claims are not independently verified.
- Code is processed by Ellipsis and its AI model providers.
- No opt-out.
- Broad repository permissions.
- SOC 2 Type 1 (not Type 2).

## Evidence

- Privacy notice (June 2026): https://www.ellipsis.dev/privacy
- Security page: https://www.ellipsis.dev/platform/security
- SOC 2 Type I announcement: https://www.ellipsis.dev/blog/ellipsis-is-now-soc-ii-type-i-certified

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified: added privacy URL, no-retention/no-training statements and SOC 2 Type 1 status (replacing 'no SOC 2 found'); noted broader agent-platform positioning.
