# Devon

| Field | Value |
|-------|-------|
| Website | https://github.com/entropy-research/Devon |
| Repository | https://github.com/entropy-research/Devon |
| Category | AI Software Engineering Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | `DEVON_TELEMETRY_DISABLED=true` environment variable |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Session start/end events
- Feature usage events (commands invoked, agent actions)
- OS and platform information
- Python version
- Devon version
- Anonymous machine/session identifiers
- Error events (non-sensitive)
- Agent loop iteration counts

## What Is NOT Collected

- Source code or file contents
- Prompts or LLM responses
- File names or paths
- API keys or credentials
- Repository URLs or names

## How to Fully Opt Out

1. **Environment variable:** Set before running Devon:
   ```bash
   export DEVON_TELEMETRY_DISABLED=true
   ```
2. **Shell profile:** Add to `~/.bashrc`, `~/.zshrc`, or equivalent:
   ```bash
   export DEVON_TELEMETRY_DISABLED=true
   ```

## Red Flags

- Telemetry is ON by default with no first-run consent prompt
- The environment variable name must be exact; misspelling it silently leaves telemetry enabled

## Evidence

- PostHog integration: `devon/telemetry.py`
- Environment variable check for `DEVON_TELEMETRY_DISABLED`
- PostHog project key embedded in source code
- Repository: https://github.com/entropy-research/Devon

## Changelog

- 2026-03-23: Initial entry
