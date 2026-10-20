# Aider

| Field | Value |
|-------|-------|
| Website | https://aider.chat |
| Repository | https://github.com/Aider-AI/aider |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | PostHog |
| Disable Method | `--analytics-disable` flag, `--no-analytics`, or config/env setting |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing unless you opt in. After opt-in:
- Random anonymous UUID4 user ID (stored in `~/.aider/analytics.json`)
- OS platform, release and machine architecture; Python version; Aider version
- Main/weak/editor model names (names not in Aider's model database are redacted, e.g. `provider/REDACTED`)
- Edit format, token usage and feature/command usage events
- Exit reasons and exception information (PostHog `enable_exception_autocapture=True`)

## What Is NOT Collected

- Source code or file contents
- Chat messages, prompts or LLM responses
- API keys or credentials
- Personal information (per Aider's analytics documentation)

## How to Fully Opt Out

1. **Decline the prompt** when Aider asks (only ~10% of new users are asked).
2. **Permanent:** `aider --analytics-disable` (writes `permanently_disable` to `~/.aider/analytics.json`).
3. **Per session:** `aider --no-analytics`.
4. **Config/env:** `analytics-disable: true` in `.aider.conf.yml`, or `AIDER_ANALYTICS_DISABLE=true` (Aider maps `AIDER_`-prefixed env vars to flags).

## Red Flags

- The consent prompt is shown to roughly 10% of new users (UUID-sampled). Users who are never asked send nothing, but they may not realise analytics exist.
- Once opted in, PostHog exception autocapture is enabled, so exception details are sent.

## Evidence

- Analytics implementation (PostHog key, host, sampling, consent): https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/analytics.py
- Consent prompt and enable logic: https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/main.py#L642
- CLI flags: https://github.com/Aider-AI/aider/blob/5dc9490bb35f9729ef2c95d00a19ccd30c26339c/aider/args.py#L569
- Documentation: https://aider.chat/docs/more/analytics.html
- Repository moved: https://github.com/paul-gauthier/aider now redirects to https://github.com/Aider-AI/aider

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified against source at 5dc9490. Repo moved to Aider-AI/aider; corrected data-collected list (removed unverified 'repo language mix'; added exception autocapture and model-name redaction); added `--no-analytics` and env-var opt-out; noted latest release v0.86.0.
