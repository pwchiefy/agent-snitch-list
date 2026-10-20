# Codex CLI

| Field | Value |
|-------|-------|
| Website | https://github.com/openai/codex |
| Repository | https://github.com/openai/codex |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Statsig (OTLP metrics), OpenAI first-party analytics events, Sentry (user-submitted feedback only) |
| Disable Method | `[analytics]` `enabled = false` in `~/.codex/config.toml` |
| Collects Code | No (telemetry); prompts/code go to OpenAI for inference |
| Collects Prompts | No (telemetry) |
| Last Verified | 2026-10-20 |

## What Is Collected

**Built-in metrics (default on in release builds):**
- Exported via OTLP/HTTP to Statsig at `https://ab.chatgpt.com/otlp/v1/metrics` with a hardcoded Statsig client key
- e.g. process start, runtime and SQLite metrics

**Analytics events (default on):**
- `codex_*` events (tool usage, app/plugin usage, artifact operations, product attribution)
- POSTed to `https://chatgpt.com/backend-api/codex/analytics-events/events` using the signed-in ChatGPT credentials; only a subset is sent with API-key auth
- `codex_accepted_line_fingerprints`: turn/thread IDs, model slug, accepted added/deleted line counts and a SHA-1 hash of the canonicalized git remote URL

**Feedback (user-initiated):**
- When you submit feedback, the report and any attachments you consent to are uploaded to Sentry

**Optional user-configured OTel export:** prompt and response logging (`log_user_prompt`, `log_agent_responses`) is off by default and only goes to exporters you configure.

## What Is NOT Collected

- Prompt text in built-in telemetry (prompt logging is off by default and limited to user-configured exporters)
- Telemetry in debug builds (built-in Statsig exporter disabled)

## How to Fully Opt Out

1. **Config file** (`~/.codex/config.toml`):
   ```toml
   [analytics]
   enabled = false
   ```
   This disables OpenAI analytics events and the built-in Statsig metrics exporter.
2. **Metrics export only:** `otel.metrics_exporter = "none"`
3. **Network-level:** block `ab.chatgpt.com` (metrics); analytics events share the `chatgpt.com` API host used for the service, so use the config key

## Red Flags

- Analytics and metrics are ON by default with no first-run prompt; opt-out is a config-file key
- Analytics events are sent using the signed-in ChatGPT account credentials, so they are not anonymous
- Statsig client key and OTLP endpoint are hardcoded in source
- Accepted-line events include a SHA-1 hash of the git remote URL: a stable pseudonymous repository identifier (public repo URLs can be hashed and matched)
- API calls go to OpenAI servers (separate from telemetry)

**Notes:** Codex is now a Rust codebase (codex-rs). The earlier `analytics: false` key description was outdated; the current key is `analytics.enabled`. Debug builds disable the built-in Statsig exporter.

## Evidence

- Statsig endpoint/key: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/otel/src/config.rs
- Metrics exporter default: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/core/src/config/otel.rs
- Analytics consent gate: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/core/src/otel_init.rs
- Analytics events client: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/analytics/src/client.rs
- Config key: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/config/src/types.rs (AnalyticsConfigToml)
- Config reference: https://developers.openai.com/codex/config-reference
- Accepted-line events and repo hash: https://github.com/openai/codex/blob/ab6095dde0040bb8cdf8592acb89c344e5f27a56/codex-rs/analytics/src/accepted_lines.rs

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-audited Rust source: opt-out key is now `analytics.enabled = false`; added first-party analytics events endpoint (authenticated), Statsig OTLP endpoint, and Sentry feedback uploads; updated providers, data collected and red flags.
- 2026-10-20: Added accepted-line analytics events (line counts plus SHA-1 hash of the git remote URL).
