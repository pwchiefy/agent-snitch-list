# Mistral Vibe / Codestral

| Field | Value |
|-------|-------|
| Website | https://mistral.ai/products/vibe |
| Repository | https://github.com/mistralai/mistral-vibe |
| Category | AI Coding Agent (CLI, open source) + models |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Mistral datalake events endpoint (api.mistral.ai), GrowthBook (experiments), Sentry (release builds) |
| Disable Method | Set `enable_telemetry = false` in Vibe's `config.toml` (also disables experiments and Sentry crash reporting) |
| Collects Code | Yes (sent to Mistral API in normal use; not in telemetry) |
| Collects Prompts | Yes (sent to Mistral API in normal use; not in telemetry) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Session events: Vibe version, MCP client/terminal, number of skills, MCP servers and models, whether AGENTS.md exists
- Request events: model, character and message counts of context and prompt (counts, not content), attachment counts
- Tool-call, compaction, rating and teleport events; experiment assignments (GrowthBook)
- Crash reports to Sentry (release builds; DSN injected at release time)
- Sent to `https://api.mistral.ai/v1/datalake/events` (or the configured Mistral base URL), authenticated with your Mistral API key; only when a Mistral key is configured
- Core function: prompts and code go to the Mistral API (or another configured provider)

## What Is NOT Collected

- Telemetry payloads carry counts, not prompt or file contents (based on send.py)
- Nothing when using self-hosted Codestral/Devstral weights with another tool
- OpenTelemetry traces are off unless `enable_otel = true`

## How to Fully Opt Out

1. **config.toml:**
   ```toml
   enable_telemetry = false
   ```
   This also disables experiments and Sentry crash reporting.
2. **Local models:** run Codestral/Devstral weights locally to keep code off Mistral servers

## Red Flags

- Telemetry is ON by default (no first-run prompt)
- Remote experiment assignment (GrowthBook) is tied to the telemetry setting
- When using the Mistral API, prompts and code context are processed on Mistral's servers

## Notes

Corrects the 2026-03-23 entry: Mistral Vibe is an Apache-2.0 open-source CLI coding agent (mistralai/mistral-vibe), not a closed-source IDE. Telemetry is documented and has a single config switch. Codestral/Devstral weights can run locally with no telemetry.

## Evidence

- Default `enable_telemetry = True`: https://github.com/mistralai/mistral-vibe/blob/dd2c04ce717c417731ab89c333cd0a72541e33ba/vibe/core/config/vibe_schema.py#L815
- Telemetry client and endpoint: https://github.com/mistralai/mistral-vibe/blob/dd2c04ce717c417731ab89c333cd0a72541e33ba/vibe/core/telemetry/send.py
- Sentry (gated by enableTelemetry): https://github.com/mistralai/mistral-vibe/blob/dd2c04ce717c417731ab89c333cd0a72541e33ba/vibe/cli-rust/src/observability/sentry.rs
- GrowthBook eval path: https://github.com/mistralai/mistral-vibe/blob/dd2c04ce717c417731ab89c333cd0a72541e33ba/vibe/core/experiments/_constants.py
- README privacy note: https://github.com/mistralai/mistral-vibe/blob/dd2c04ce717c417731ab89c333cd0a72541e33ba/README.md
- Privacy policy: https://legal.mistral.ai/terms/privacy-policy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: Vibe is an open-source CLI (mistralai/mistral-vibe), not a closed IDE; documented datalake endpoint, GrowthBook experiments and Sentry; privacy URL updated (old /privacy/ returns 404).
