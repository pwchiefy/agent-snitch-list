# GPT-Engineer

| Field | Value |
|-------|-------|
| Website | https://github.com/AntonOsika/gpt-engineer |
| Repository | https://github.com/AntonOsika/gpt-engineer (archived) |
| Category | AI Code Generation Agent |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | RudderStack |
| Disable Method | Answer 'n' to the consent prompt / delete `.gpte_consent` |
| Collects Code | Yes (if opted in) |
| Collects Prompts | Yes (if opted in) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing unless you answer 'y' to "Is it ok if we store your prompts to help improve GPT Engineer?" and then submit a review.
- When opted in: the prompt, model name, temperature, run configuration, full session logs (which include the LLM conversation and generated code), your review answers, a random session ID (stored in the OS temp dir) and a timestamp.

## What Is NOT Collected

- Nothing is sent if you decline
- No background usage analytics or crash reporting

## How to Fully Opt Out

1. Answer **n** when asked whether your prompts may be stored.
2. To revoke an earlier 'y', delete the `.gpte_consent` file in the directory where you ran gpt-engineer.

## Red Flags

- Opting in sends full prompts and generated code (session logs) to RudderStack.
- Consent is persisted per working directory in `.gpte_consent` and reused silently on later runs from that directory.
- Repository is archived; no maintenance or security fixes.

## Evidence

- RudderStack integration (write key, data plane URL): https://github.com/AntonOsika/gpt-engineer/blob/a90fcd543eedcc0ff2c34561bc0785d2ba83c47e/gpt_engineer/applications/cli/collect.py#L55
- Consent logic: https://github.com/AntonOsika/gpt-engineer/blob/a90fcd543eedcc0ff2c34561bc0785d2ba83c47e/gpt_engineer/applications/cli/learning.py#L183
- Learning payload fields: https://github.com/AntonOsika/gpt-engineer/blob/a90fcd543eedcc0ff2c34561bc0785d2ba83c47e/gpt_engineer/applications/cli/learning.py#L75
- Repository archived/renamed: https://github.com/gpt-engineer-org/gpt-engineer redirects to https://github.com/AntonOsika/gpt-engineer

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected evidence paths (collect.py/learning.py) and opt-out (no `COLLECT_LEARNINGS_OPT_IN` env var exists; consent is a per-directory `.gpte_consent` file). Repo archived and renamed.
