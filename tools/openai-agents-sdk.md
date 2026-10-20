# OpenAI Agents SDK

| Field | Value |
|-------|-------|
| Website | https://openai.github.io/openai-agents-python/ |
| Repository | https://github.com/openai/openai-agents-python |
| Category | Agent Framework (Python) |
| Telemetry | Yes |
| Default State | ON (tracing) |
| Analytics Providers | OpenAI Traces (`api.openai.com/v1/traces/ingest`) |
| Disable Method | `OPENAI_AGENTS_DISABLE_TRACING=1`, `set_tracing_disabled(True)`, or `RunConfig(tracing_disabled=True)` |
| Collects Code | Yes (tool inputs/outputs in spans by default) |
| Collects Prompts | Yes (LLM inputs/outputs in spans by default) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Trace per workflow run with spans for agents, generations, function calls, guardrails, handoffs
- LLM generation inputs and outputs (sensitive data on by default)
- Function/tool call inputs and outputs (sensitive data on by default)
- Voice pipelines: base64 PCM audio by default

## What Is NOT Collected

- Nothing sent if no OpenAI API key is available to the exporter or tracing is disabled

## How to Fully Opt Out

1. **Environment:** `OPENAI_AGENTS_DISABLE_TRACING=1`
2. **Code:** `agents.set_tracing_disabled(True)`
3. **Per run:** `RunConfig(tracing_disabled=True)`
4. **Keep tracing, drop content:** `OPENAI_AGENTS_TRACE_INCLUDE_SENSITIVE_DATA=false` or `RunConfig(trace_include_sensitive_data=False)`

## Red Flags

- Tracing ON by default
- Spans include LLM inputs/outputs and tool inputs/outputs by default
- Traces are sent even when the agent uses a non-OpenAI model, as long as an OpenAI key is available for export

## Notes

MIT. Tracing is unavailable for Zero Data Retention organizations. Traces go to the user's own OpenAI platform account (visible in the Traces dashboard), not to a separate analytics vendor.

## Evidence

- https://github.com/openai/openai-agents-python/blob/64cd5dfc5a1579870dcbed0ea42b27aa84033fee/src/agents/tracing/processors.py (line 46)
- https://github.com/openai/openai-agents-python/blob/64cd5dfc5a1579870dcbed0ea42b27aa84033fee/src/agents/run_config.py (lines 53-56)
- https://github.com/openai/openai-agents-python/blob/64cd5dfc5a1579870dcbed0ea42b27aa84033fee/src/agents/tracing/provider.py (`OPENAI_AGENTS_DISABLE_TRACING`)
- https://github.com/openai/openai-agents-python/blob/64cd5dfc5a1579870dcbed0ea42b27aa84033fee/docs/tracing.md
- Privacy / data documentation: https://openai.github.io/openai-agents-python/tracing/

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
