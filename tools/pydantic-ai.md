# Pydantic AI

| Field | Value |
|-------|-------|
| Website | https://ai.pydantic.dev |
| Repository | https://github.com/pydantic/pydantic-ai |
| Category | Agent Framework (Python) |
| Telemetry | No |
| Default State | N/A (instrumentation opt-in) |
| Analytics Providers | None (optional user-configured OpenTelemetry / Logfire) |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing by default

## What Is NOT Collected

- No analytics or crash reporting in the library

## How to Fully Opt Out

1. No action required. Do not call `Agent.instrument_all()` / `logfire.configure()` if you do not want traces exported.

## Red Flags

None identified.

## Notes

MIT. When instrumentation is enabled, spans can include message content and go to whatever OTel backend the user configures (often Pydantic Logfire).

## Evidence

- https://github.com/pydantic/pydantic-ai/blob/1b10e6dcdc8101e86ac3279221b7f3c225a0f4c4/pydantic_ai_slim/pydantic_ai/agent/__init__.py (line 548)
- https://github.com/pydantic/pydantic-ai/blob/1b10e6dcdc8101e86ac3279221b7f3c225a0f4c4/pydantic_ai_slim/pyproject.toml (`logfire` extra)

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
