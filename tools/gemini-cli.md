# Gemini CLI

| Field | Value |
|-------|-------|
| Website | https://github.com/google-gemini/gemini-cli |
| Repository | https://github.com/google-gemini/gemini-cli |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON (usage statistics); OFF (OpenTelemetry export) |
| Analytics Providers | Google Clearcut (`play.googleapis.com/log`) |
| Disable Method | Set `privacy.usageStatisticsEnabled: false` in `~/.gemini/settings.json` |
| Collects Code | No |
| Collects Prompts | No (prompt length only); OTel `logPrompts` defaults to true if a user enables OTel |
| Last Verified | 2026-10-20 |

## What Is Collected

- Tool call names, success/failure and execution time (no arguments or results, per docs)
- Model name, request duration and success for each API request
- CLI configuration such as enabled tools and approval mode
- Prompt length and prompt ID (not prompt text)
- OS, CLI version, surface (terminal, IDE, CI)
- In GitHub Actions: workflow name, hashed repository name, PR number, issue number
- Identity: cached Google account email when signed in with a Google account, otherwise a random installation ID

## What Is NOT Collected

- Prompt and response text (per docs and the Clearcut prompt event, which sends length only)
- File contents
- API keys

## How to Fully Opt Out

1. **Settings file:** add `{"privacy": {"usageStatisticsEnabled": false}}` to `~/.gemini/settings.json` (restart required)
2. **OpenTelemetry:** leave `telemetry.enabled` at its default `false`; if you enable it, set `telemetry.logPrompts: false` to keep prompt text out of your own OTel backend
3. **Network block:** block `play.googleapis.com/log`

## Red Flags

- Usage statistics ON by default
- Events include the signed-in Google account email (`client_email`) when available, while the docs say PII such as email is not collected
- In GitHub Actions, events include workflow name, hashed repository name, PR number and issue number
- OpenTelemetry `logPrompts` defaults to true (only matters once a user enables OTel export)

## Notes

Apache-2.0. Usage statistics and OpenTelemetry are separate systems: OTel is off by default and exports locally unless configured; Clearcut usage statistics are on by default.

## Evidence

- https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/telemetry/clearcut-logger/clearcut-logger.ts (CLEARCUT_URL line 244; `client_email` / `client_install_id` lines 496-501)
- https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/packages/core/src/config/config.ts (`usageStatisticsEnabled ?? true`, line 1106)
- https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/docs/reference/configuration.md (Usage statistics section)
- https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/docs/cli/telemetry.md (OTel settings table)
- https://github.com/google-gemini/gemini-cli/blob/76e4d7c046c7dab5727787da378b9c06bf0948cf/docs/resources/tos-privacy.md
- Privacy / data documentation: https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/tos-privacy.md

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
