# Devin

| Field | Value |
|-------|-------|
| Website | https://devin.ai |
| Repository | Closed source |
| Category | AI Software Engineering Agent (SaaS) |
| Telemetry | Yes |
| Default State | SaaS-inherent; model training ON by default for paid plans (opt-out) |
| Analytics Providers | Cognition AI internal infrastructure |
| Disable Method | Paid plans: opt out of model training on the Data Controls settings page (admin only on Teams). No opt-out from interaction data processing. |
| Collects Code | Yes (processed server-side; training opt-out on paid plans) |
| Collects Prompts | Yes (processed server-side) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Session data, prompts and task descriptions
- Agent commands and actions
- Repository code and context processed in Cognition-hosted sandboxes
- Feedback and user interaction data (kept 'as long as needed')
- Account information
- Paid plans: data may be used for model training by default unless opted out (per current docs)

## What Is NOT Collected

- Enterprise: no training without express prior written consent
- After a paid-plan opt-out: no training, and zero data retention with model providers

## How to Fully Opt Out

1. **Training:** Data Controls settings page (paid plans; admin-only on Teams)
2. **Enterprise:** contract terms
3. **Interaction data:** no opt-out; it is the service

## Red Flags

- Paid-plan data may be used for model training by default (opt-out), per current docs
- Interaction data always processed server-side; no opt-out
- Agent has access to repositories, credentials and environments granted to it
- Closed source; cannot independently verify data handling

## Notes

Corrects the 2026-03-23 entry, which said training was off by default. Current English docs say paid-plan data may be used for training unless opted out; some localized pages still describe opt-in. Reclassified from ON to SaaS-inherent (cloud-only agent). The old privacy URL devin.ai/privacy now returns 404.

## Evidence

- Security / training policy: https://docs.devin.ai/admin/security
- Trust Center: https://trust.cognition.ai/
- Security page: https://devin.ai/security
- Privacy policy: https://cognition.com/legal/privacy-policy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected training default (docs now say paid-plan data may be used unless opted out); reclassified ON -> SaaS-inherent; privacy URL updated (devin.ai/privacy returns 404).
