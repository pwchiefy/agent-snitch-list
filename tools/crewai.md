# CrewAI

| Field | Value |
|-------|-------|
| Website | https://www.crewai.com/ |
| Repository | https://github.com/crewAIInc/crewAI |
| Category | Multi-Agent Framework |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | OpenTelemetry (custom backend) |
| Disable Method | `CREWAI_DISABLE_TELEMETRY=true` environment variable |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Crew execution metadata (number of agents, tasks, tools)
- Task completion status and timing
- Error types and exceptions
- Framework version
- Python version and OS
- Agent role names and tool names
- LLM provider and model names used

## What Is NOT Collected

- No prompt content or LLM responses
- No code or file contents
- No API keys or credentials
- No personally identifiable information
- No task output content

## How to Fully Opt Out

1. **Environment variable:** `export CREWAI_DISABLE_TELEMETRY=true`
2. **In code:** Set before importing CrewAI
3. **Network block:** Block outbound connections to CrewAI telemetry endpoints

## Red Flags

- Telemetry ON by default with no first-run prompt
- Agent role names and tool names are collected, which could reveal project structure
- OpenTelemetry data is sent to CrewAI's backend (not user-controlled)

## Evidence

- Repository: https://github.com/crewAIInc/crewAI
- Telemetry module in source: `crewai/telemetry/`
- `CREWAI_DISABLE_TELEMETRY` documented in README and docs
- OpenTelemetry dependency in requirements

## Changelog

- 2026-03-23: Initial entry
