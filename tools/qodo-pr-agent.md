# Qodo PR-Agent

| Field | Value |
|-------|-------|
| Website | https://www.qodo.ai |
| Repository | https://github.com/Codium-ai/pr-agent |
| Category | AI Code Review / PR Agent |
| Telemetry | No (external) |
| Default State | N/A |
| Analytics Providers | None (local logging only) |
| Disable Method | N/A (no external telemetry to disable) |
| Collects Code | No (not sent to Qodo; sent to configured LLM provider) |
| Collects Prompts | No (not sent to Qodo; sent to configured LLM provider) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing is sent to Qodo/Codium servers in the open-source self-hosted version
- Local logging only (standard Python logging to stdout/files)
- Code and prompts are sent directly to the user's configured LLM provider (OpenAI, Anthropic, etc.)

Note: The Qodo hosted service (SaaS) has its own data collection practices that differ from the OSS version.

## What Is NOT Collected

- No usage analytics sent to external services
- No error reporting to third parties
- No code or PR content transmitted to Qodo
- No machine identifiers or tracking
- No phone-home or update checks to Qodo infrastructure

## How to Fully Opt Out

No action required for the open-source version. All data stays local and flows only to your configured LLM API provider.

For the Qodo hosted SaaS service, consult Qodo's privacy policy.

## Red Flags

- The Qodo hosted/SaaS version (as opposed to the self-hosted OSS version) likely has different data collection practices. Ensure you are evaluating the correct deployment model.
- PR content is sent to whichever LLM provider you configure; data handling is governed by that provider's terms.

## Evidence

- No PostHog, Sentry, Amplitude, or similar dependencies in `requirements.txt`
- No analytics or telemetry modules in the codebase
- Logging is standard Python logging (local output only)
- Repository: https://github.com/Codium-ai/pr-agent

## Changelog

- 2026-03-23: Initial entry
