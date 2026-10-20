# Amp (Sourcegraph)

| Field | Value |
|-------|-------|
| Website | https://ampcode.com |
| Repository | Closed source |
| Category | AI Coding Agent (CLI and editor extension, SaaS backend) |
| Telemetry | Yes |
| Default State | SaaS-inherent |
| Analytics Providers | Amp Server (Google Cloud Platform) |
| Disable Method | No telemetry opt-out documented; model training is off unless opted in (Settings > Privacy); mark threads private |
| Collects Code | Yes (stored in threads) |
| Collects Prompts | Yes (stored in threads) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Full threads: prompts, responses, tool calls and included code
- User information and telemetry (multi-tenant GCP project)

## What Is NOT Collected

- Not used for model training unless the user explicitly opts in; never on Enterprise workspaces

## How to Fully Opt Out

1. **Training:** Settings > Privacy (off by default)
2. **Sharing:** mark threads private
3. **Deletion:** delete threads (removed within 30 days)
4. **Telemetry:** no documented opt-out

## Red Flags

- All threads stored server-side by design
- Threads in a workspace are visible to other members unless marked private; personal threads become visible when joining a workspace with the same account
- No telemetry opt-out documented
- Closed source

## Notes

Training is off by default and cannot be enabled on Enterprise workspaces. Minimal Data Retention applies to requests sent with Amp credits; BYO-key requests follow the provider's terms.

## Evidence

- https://ampcode.com/security
- Privacy / data documentation: https://ampcode.com/security

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
