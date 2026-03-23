# Goose

| Field | Value |
|-------|-------|
| Website | https://block.github.io/goose |
| Repository | https://github.com/block/goose |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | PostHog |
| Disable Method | `GOOSE_TELEMETRY_OFF=1` environment variable |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Operating system and platform info
- Goose version
- LLM model name used (not API keys)
- Session start/end events
- Feature usage events (toolkits used, commands invoked)
- Session duration
- Error events (non-sensitive metadata only)
- Anonymous machine identifier (hashed)

## What Is NOT Collected

- Source code or file contents
- Prompts sent to LLMs
- LLM responses or outputs
- File names or paths
- API keys or credentials
- Repository URLs or names
- Personal identifying information

## How to Fully Opt Out

1. **First-run consent:** When Goose runs for the first time, it asks for consent to collect anonymous usage data. Decline the prompt.
2. **Environment variable:** Set before running:
   ```bash
   export GOOSE_TELEMETRY_OFF=1
   ```
3. **Shell profile:** Add to `~/.bashrc` or `~/.zshrc`:
   ```bash
   export GOOSE_TELEMETRY_OFF=1
   ```

## Red Flags

- PostHog is a third-party analytics platform; data is sent to PostHog's cloud infrastructure
- Developed by Block (formerly Square), a large corporation; privacy practices are governed by Block's corporate policies

## Evidence

- PostHog integration in the Goose source code
- First-run consent prompt implementation
- Environment variable `GOOSE_TELEMETRY_OFF` check
- Repository: https://github.com/block/goose
- Telemetry documentation in project README/docs

## Changelog

- 2026-03-23: Initial entry
