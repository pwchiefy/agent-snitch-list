# CodeRabbit

| Field | Value |
|-------|-------|
| Website | https://coderabbit.ai/ |
| Repository | Closed source |
| Category | AI Code Review |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (CodeRabbit cloud); unnamed analytics/cookie providers |
| Disable Method | Opt out of review-data storage; no opt-out for core processing |
| Collects Code | Yes (ephemeral) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- PR diffs and repository code, processed in an isolated environment that CodeRabbit says is disposed of after review
- Code sent to OpenAI and Anthropic for review generation
- Review comments, chat interactions and 'learnings', stored as vector embeddings unless you opt out
- Embeddings from linked issue trackers
- Usage analytics, cookies, web beacons
- Account/org data and git metadata

## What Is NOT Collected

- CodeRabbit states code is not retained after review and that neither it nor OpenAI/Anthropic train on personal information from reviews (this commitment does not apply to open-source projects, per the policy)

## How to Fully Opt Out

1. Opt out of data storage (learnings) in CodeRabbit settings; this reduces review personalization.
2. Use `.coderabbit.yaml` path filters to exclude sensitive files.
3. No opt-out for core code processing; uninstall the app to stop it.

## Red Flags

- Closed source; ephemeral-processing claims cannot be independently verified.
- Learnings stored by default.
- Open-source repositories are excluded from the no-training commitment.
- Broad repository permissions; January 2025 RCE disclosure (Kudelski Security) exposed production secrets before a same-day fix; CodeRabbit reports no evidence of customer data access.

## Evidence

- Privacy policy (last updated 2026-10-16): https://www.coderabbit.ai/privacy-policy
- Vulnerability response post (2025-08-19): https://coderabbit.ai/blog/our-response-to-the-january-2025-kudelski-security-vulnerability-disclosure-action-and-continuous-improvement
- SOC 2 Type II: https://www.coderabbit.ai/trust-center/soc

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified against Oct 2026 privacy policy: added learnings/embeddings storage and opt-out, OpenAI/Anthropic processing, OSS training carve-out, and the 2025 disclosed vulnerability; updated privacy URL.
