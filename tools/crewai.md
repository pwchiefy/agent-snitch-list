# CrewAI

| Field | Value |
|-------|-------|
| Website | https://www.crewai.com/ |
| Repository | https://github.com/crewAIInc/crewAI |
| Category | Multi-Agent Framework |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | OpenTelemetry (CrewAI backend: telemetry.crewai.com) |
| Disable Method | `CREWAI_DISABLE_TELEMETRY=true` or `OTEL_SDK_DISABLED=true` |
| Collects Code | No (unless `share_crew=True`) |
| Collects Prompts | No (unless `share_crew=True`) |
| Last Verified | 2026-10-20 |

## What Is Collected

**By default:**
- CrewAI and Python versions
- Randomly generated crew/agent/task IDs, process type, memory flag
- Agent role names, tool names and usage counts, LLM name/model/temperature
- Task and flow lifecycle signals; exception class names on failures
- CLI events: project creation (with project ID), deployment attempts
- Execution environment: which AI coding assistant runs the process (e.g. `claude_code`, `codex`, `cursor`), runtime context (ci/container/serverless/interactive), project_id

**With `share_crew=True` (opt-in):** goals, backstories, task descriptions, inputs and outputs, platform details.

**AMP tracing (separate):** first-run traces stay in memory and are uploaded only after an interactive consent prompt.

## What Is NOT Collected

- By default: prompts, task descriptions, backstories, responses, secrets/env vars (per CrewAI docs)
- Spans from your other instrumented libraries (separate private TracerProvider)

## How to Fully Opt Out

1. **Environment variable:** `CREWAI_DISABLE_TELEMETRY=true` (also `1`, `yes`, `on`), or `CREWAI_DISABLE_TRACKING`
2. **All OTel in process:** `OTEL_SDK_DISABLED=true`
3. **AMP tracing:** `CREWAI_TRACING_ENABLED=false` or `tracing=False`
4. **Do not set** `share_crew=True` unless you intend to share detailed data

## Red Flags

- Telemetry ON by default with no first-run prompt
- Agent role names and tool names collected, which could reveal project structure
- Records which AI coding assistant (e.g. claude_code, codex, cursor) is running the process
- OpenTelemetry data sent to CrewAI's backend (not user-controlled)

**Notes:** CrewAI telemetry uses a private TracerProvider and does not export spans from other instrumented libraries or to user observability backends. First-run AMP trace sharing is held in memory and only uploaded after an interactive consent prompt.

## Evidence

- Telemetry core: https://github.com/crewAIInc/crewAI/blob/4f4573706ea4afee6c4da4c31cfb9622a4495ab7/lib/crewai-core/src/crewai_core/telemetry.py
- Framework telemetry: lib/crewai/src/crewai/telemetry/ at the same commit
- Telemetry docs: https://docs.crewai.com/en/telemetry

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-audited current source/docs: added OTEL_SDK_DISABLED / CREWAI_DISABLE_TRACKING opt-outs, AI coding-assistant and runtime-environment attributes, AMP tracing consent flow; added docs URL.
