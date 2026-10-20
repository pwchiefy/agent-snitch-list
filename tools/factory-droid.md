# Factory Droid

| Field | Value |
|-------|-------|
| Website | https://factory.ai |
| Repository | Closed source |
| Category | AI Coding Agent (CLI / cloud) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Factory first-party OTel collector |
| Disable Method | No documented per-user opt-out; org admins can set `telemetry.granularity: aggregate`; metrics never sent to Factory in airgapped deployments |
| Collects Code | No (telemetry); code is processed by the agent's model providers |
| Collects Prompts | No (telemetry, per docs) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Metrics datapoints with user ID, user email, commit hash, PR number and URL (default `user` granularity)
- Organization ID, session ID, workload attributes such as tool name

## What Is NOT Collected

- Spans and message content never sent to Factory's collector (per docs)
- In `aggregate` mode: user ID, email, commit hash, PR fields removed

## How to Fully Opt Out

1. **Org admin:** set `telemetry.granularity: aggregate` in org-managed settings
2. **User:** `OTEL_TELEMETRY_GRANULARITY=aggregate` reduces identity but does not stop metrics
3. **Airgapped deployment:** metrics never sent to Factory

## Red Flags

- Metrics with per-user identity sent to Factory by default (the docs list user ID and email among the fields that `aggregate` mode removes)
- No documented individual opt-out; a user can set `OTEL_TELEMETRY_GRANULARITY=aggregate` to strip identity, but metrics still flow unless the deployment is airgapped
- Closed source

## Notes

Factory documents that message content is never sent to its collector and that content export to a customer collector is off by default. Docs moved from docs.factory.ai to docs.factory.com.

## Evidence

- https://docs.factory.com/enterprise/telemetry/privacy.md
- https://docs.factory.com/enterprise/telemetry
- Privacy / data documentation: https://docs.factory.com/enterprise/telemetry/privacy

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
