# Codegen

| Field | Value |
|-------|-------|
| Website | https://codegen.com (standalone service discontinued 2026-01-09) |
| Repository | https://github.com/codegen-sh/codegen |
| Category | AI Code Generation SDK / CLI (discontinued) |
| Telemetry | Yes |
| Default State | Opt-in (first-run prompt, default No) |
| Analytics Providers | OTLP logs to Codegen-operated collector (Modal) |
| Disable Method | Off unless accepted at the first-run prompt (default answer: No); `codegen config telemetry disable` turns it off later |
| Collects Code | No (telemetry); prompts/repo context go to Codegen's API by design |
| Collects Prompts | No (telemetry) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing unless the user accepts the first-run telemetry prompt (default answer is No)
- When opted in: CLI command usage patterns, performance metrics, error diagnostics, CLI version and platform, anonymous ID
- Opted-in telemetry is exported as OpenTelemetry logs to a Codegen-operated collector on Modal (`https://{workspace}--otel-collector.modal.run/cli/v1/logs`), authenticated with the user's Codegen token
- Core function: prompts and repository context sent to Codegen's hosted agent API

## What Is NOT Collected

- No telemetry by default
- Consent prompt says no source code or PII is collected as telemetry

## How to Fully Opt Out

1. **Default:** answer No (the default) at the first-run prompt
2. **Later:** `codegen config telemetry disable`
3. **Status:** `codegen config telemetry status`

## Red Flags

- Project discontinued: acquired by ClickUp (Dec 2025), standalone service shut down 2026-01-09, repository archived
- When opted in, telemetry goes to a Codegen-operated collector rather than a user-chosen endpoint (corrects the 2026-03-23 entry)

## Notes

Repository renamed from codegen-sh/codegen-sdk to codegen-sh/codegen and archived (last commit 2025-10-07). ClickUp acquired Codegen in December 2025; the standalone service was discontinued on 2026-01-09 and the product continues inside ClickUp. Telemetry remains opt-in with a first-run consent prompt.

## Evidence

- Consent prompt (default False): https://github.com/codegen-sh/codegen/blob/9f970ba6d1a78c15f6cd091cf4bdb0de5a3d8366/src/codegen/cli/telemetry/consent.py
- Config default `enabled: bool = False`: https://github.com/codegen-sh/codegen/blob/9f970ba6d1a78c15f6cd091cf4bdb0de5a3d8366/src/codegen/configs/models/telemetry.py
- Hardcoded Codegen collector endpoint: https://github.com/codegen-sh/codegen/blob/9f970ba6d1a78c15f6cd091cf4bdb0de5a3d8366/src/codegen/cli/telemetry/otel_setup.py#L36-L69
- Repository (archived): https://github.com/codegen-sh/codegen
- ClickUp acquisition: https://www.businesswire.com/news/home/20251223327889/en/ClickUp-Acquires-Cursor-Competitor-Codegen-to-Supercharge-AI-Super-Agents
- Shutdown notice: https://codegen.com/blog/an-update-on-codegen

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo moved to codegen-sh/codegen and archived; ClickUp acquisition and 2026-01-09 shutdown noted; corrected claim that the OTLP endpoint is user-controlled (it is a Codegen-operated collector); still opt-in.
