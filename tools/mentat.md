# Mentat

| Field | Value |
|-------|-------|
| Website | https://mentat.ai |
| Repository | https://github.com/AbanteAI/mentat (archived) |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry |
| Disable Method | No documented opt-out |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Error reports and exception stack traces (via Sentry)
- Performance traces and transaction data
- Python version and OS information
- Mentat version
- Session duration and command usage
- File path fragments may appear in stack traces

## What Is NOT Collected

- Source code or file contents
- Prompts sent to LLMs
- LLM responses
- API keys or credentials
- Repository URLs

## How to Fully Opt Out

There is no officially documented opt-out mechanism. Possible workarounds:

1. **Network blocking:** Block Sentry's ingestion endpoint (`*.ingest.sentry.io`) at the firewall or DNS level.
2. **Environment variable (unofficial):** Setting `SENTRY_DSN=""` before running may prevent Sentry initialization, but this is not officially supported.
3. **Source modification:** Comment out the `sentry_sdk.init()` call in the source code.

## Red Flags

- Telemetry is ON by default with no documented opt-out mechanism
- The repository is archived (no longer maintained), so no fixes or opt-out improvements will be made
- Sentry stack traces may inadvertently include file paths from the user's system
- No privacy policy or telemetry documentation found in the repository

## Evidence

- Sentry initialization: `mentat/app.py` (sentry_sdk.init with DSN)
- Sentry DSN embedded in source code
- Repository status: Archived (read-only)
- Repository: https://github.com/AbanteAI/mentat

## Changelog

- 2026-03-23: Initial entry
