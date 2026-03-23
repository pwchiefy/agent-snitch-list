# Aider

| Field | Value |
|-------|-------|
| Website | https://aider.chat |
| Repository | https://github.com/paul-gauthier/aider |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | PostHog |
| Disable Method | `--analytics-disable` flag or config setting |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Operating system and platform info
- Python version
- Aider version
- LLM model name used
- Session start/end events
- Feature usage events (e.g., which commands are run)
- Edit format used (diff, whole, etc.)
- Repository language mix (language names only, not code)
- Randomized anonymous user ID (hashed machine identifier)

## What Is NOT Collected

- Source code or file contents
- Prompts or LLM responses
- File names or paths
- Repository URLs or names
- API keys or credentials
- Git history or diffs

## How to Fully Opt Out

1. **At the prompt:** When aider asks if you'd like to share analytics (~10% of first runs), decline.
2. **CLI flag:** Run aider with `--analytics-disable`
3. **Config file:** Add to `.aider.conf.yml`:
   ```yaml
   analytics-disable: true
   ```
4. **Environment variable:** `AIDER_ANALYTICS_DISABLE=true`

## Red Flags

- The opt-in prompt only appears for approximately 10% of new users, which means 90% of users are never asked and never have telemetry enabled. This is a reasonable approach but could confuse users who hear about telemetry but never see the prompt.

## Evidence

- Analytics implementation: `aider/analytics.py` (PostHog integration)
- Consent logic: `aider/main.py` (random sampling for opt-in prompt)
- Privacy documentation: https://aider.chat/docs/more/analytics.html
- PostHog project key visible in source code

## Changelog

- 2026-03-23: Initial entry
