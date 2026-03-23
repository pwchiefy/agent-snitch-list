# Codex CLI

| Field | Value |
|-------|-------|
| Website | https://github.com/openai/codex |
| Repository | https://github.com/openai/codex |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Statsig |
| Disable Method | Set `analytics: false` in config file |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage events (via Statsig)
- Command types and patterns
- Session metadata
- Version and environment info
- Error events
- No PII in telemetry payloads

## What Is NOT Collected

- No code content or file contents
- No prompt text
- No API keys or credentials
- No personally identifiable information
- No file paths or project names

## How to Fully Opt Out

1. **Config file:** Set `analytics: false` in the Codex CLI configuration
2. **Network block:** Block connections to Statsig endpoints

## Red Flags

- Telemetry ON by default
- Statsig is a third-party feature flagging/analytics platform
- OpenAI product -- API calls go to OpenAI servers (separate from telemetry, but worth noting)

## Evidence

- Repository: https://github.com/openai/codex
- Statsig dependency in source
- Config option for `analytics: false` documented
- No PII collection stated in documentation

## Changelog

- 2026-03-23: Initial entry
