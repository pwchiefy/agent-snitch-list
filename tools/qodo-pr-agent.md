# PR-Agent (formerly Qodo PR-Agent)

| Field | Value |
|-------|-------|
| Website | https://www.qodo.ai |
| Repository | https://github.com/The-PR-Agent/pr-agent |
| Category | AI Code Review / PR Agent |
| Telemetry | No |
| Default State | OFF |
| Analytics Providers | None (optional operator-configured OTel / LiteLLM callbacks) |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing sent to the project by default.
- Optional OpenTelemetry (`[otel] is_enabled = false` by default) exports to console, an OTLP endpoint or Prometheus only when the operator configures it.
- Optional LiteLLM success/failure callbacks (e.g. Langfuse, Datadog, PostHog) only when set in deployment settings; they can attach full prompt/response content unless message logging is disabled.
- PR content is sent to the LLM provider you configure.

## What Is NOT Collected

- No built-in analytics or phone-home

## How to Fully Opt Out

No action required. Leave `[otel] is_enabled = false` and do not configure LiteLLM callbacks if you want no third-party observability.

## Red Flags

- PR content sent to whichever LLM provider you configure
- If operators enable LiteLLM callbacks, full prompts/responses may be sent to that observability vendor unless message logging is disabled
- Qodo's hosted product is a separate offering with its own data practices

**Notes:** The repo moved from Codium-ai/pr-agent to The-PR-Agent/pr-agent and is described as a community-maintained legacy project of Qodo; its README states it is not Qodo's offering for open-source projects. Evaluate the correct deployment model (OSS vs Qodo SaaS).

## Evidence

- Config defaults: https://github.com/The-PR-Agent/pr-agent/blob/729415c68b8ef55df8bcce919a419af7f5cebffb/pr_agent/settings/configuration.toml
- pr_agent/telemetry/config.py and pr_agent/algo/ai_handlers/litellm_ai_handler.py at the same commit

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo moved to The-PR-Agent/pr-agent (community-maintained legacy Qodo project, distinct from Qodo's product); re-verified no default telemetry; documented opt-in OTel and LiteLLM callbacks.
