# Devon

| Field | Value |
|-------|-------|
| Website | https://github.com/entropy-research/Devon |
| Repository | https://github.com/entropy-research/Devon |
| Category | AI Software Engineering Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | `DEVON_TELEMETRY_DISABLED=true` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- A `SessionStartEvent` with the session name
- Server context (`FastAPI`)
- A random user ID persisted in `~/.cache/devon/telemetry_user_id`

## What Is NOT Collected

- Source code or file contents
- Prompts or LLM responses
- API keys

## How to Fully Opt Out

1. Set exactly:
   ```bash
   export DEVON_TELEMETRY_DISABLED=true
   ```
   The check is a case-sensitive string comparison; `1` or `TRUE` do not disable telemetry.

## Red Flags

- ON by default; no consent prompt.
- Strict `== "true"` check means common variants silently leave telemetry on.
- Project unmaintained since July 2024.

## Evidence

- Telemetry client: https://github.com/entropy-research/Devon/blob/8f68f1d7467161562d64138aefee7d26c7e68130/devon_agent/utils/telemetry.py#L106
- Session start capture: https://github.com/entropy-research/Devon/blob/8f68f1d7467161562d64138aefee7d26c7e68130/devon_agent/session.py#L1161
- README telemetry section: https://github.com/entropy-research/Devon/blob/8f68f1d7467161562d64138aefee7d26c7e68130/README.md#L249

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified; corrected source path (devon_agent/utils/telemetry.py) and data collected (only session-start event in current source); clarified exact-value opt-out; noted inactivity.
