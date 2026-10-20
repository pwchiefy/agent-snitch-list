# Claude Code

| Field | Value |
|-------|-------|
| Website | https://code.claude.com/docs |
| Repository | https://github.com/anthropics/claude-code (docs, changelog and plugins; CLI is closed source) |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Anthropic + third-party metrics logging; third-party error tracking (vendors not named in current docs) |
| Disable Method | `DISABLE_TELEMETRY=1`, `DISABLE_ERROR_REPORTING=1`, or `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Metrics** (default on for the Claude API): latency, reliability and usage patterns, sent to Anthropic and third-party logging infrastructure; docs say no code, prompts or file paths.
- **Feature-flag evaluation** (disabled together with metrics).
- **Error reports**: internal error messages and stack traces after redaction of secrets, file paths, emails and other PII; on only for Claude Pro/Max sign-ins on v2.1.198+ connecting directly to the Claude API, without ZDR/HIPAA.
- **Session quality surveys**: rating only; an optional follow-up can upload the session transcript (including code) if you choose Yes.
- **WebFetch safety check**: the hostname (not the full URL) of fetched URLs is sent to api.anthropic.com.
- **User-initiated** `/feedback`, `/bug`, `/share`: conversation history including code, retained 5 years.

## What Is NOT Collected

- Code, prompts or file paths in metrics (per docs)
- Nothing from metrics, error reports or /feedback by default on Bedrock, Google Cloud's Agent Platform, Microsoft Foundry or Claude Platform on AWS

## How to Fully Opt Out

1. Metrics and feature flags: `export DISABLE_TELEMETRY=1`
2. Error reports: `export DISABLE_ERROR_REPORTING=1`
3. Feedback command: `export DISABLE_FEEDBACK_COMMAND=1`
4. Surveys: `export CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY=1` (also disabled by `DISABLE_TELEMETRY` or `DO_NOT_TRACK`)
5. Everything non-essential at once: `export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`
6. Not covered by the above: set `skipWebFetchPreflight: true` in settings for the WebFetch check, and `CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL` for plugin marketplace auto-install
7. All of these can be set in `settings.json`.

## Red Flags

- Metrics ON by default for the Claude API, with no consent prompt.
- Multiple env vars with different scopes.
- WebFetch hostname check and marketplace auto-install are not covered by the non-essential-traffic switch.
- Surveys run on all providers unless disabled.
- Disabling telemetry also disables feature flags (some features may be unavailable).
- CLI source is not public, so behaviour is documented rather than auditable.
- `DISABLE_TELEMETRY` also turns off remote experiment gates; this side effect is not documented (open docs issue #47558).

**Recent changes:** v2.1.282 made project and local settings ignore OpenTelemetry variables that turn on export, set its endpoint or capture content. v2.1.290 fixed background commands, the agents view and daemon workers sending telemetry and a feature-flag request to Anthropic behind a Claude apps gateway.

## Evidence

- Data usage docs (telemetry services, defaults by provider, WebFetch check, surveys, retention): https://code.claude.com/docs/en/data-usage
- Repository README data-collection section: https://github.com/anthropics/claude-code/blob/a6e289a2e772a17b3614a9ef43303003de5cd887/README.md#L60
- License (all rights reserved, Commercial Terms): https://github.com/anthropics/claude-code/blob/a6e289a2e772a17b3614a9ef43303003de5cd887/LICENSE.md

- Changelog (2.1.282, 2.1.290): https://github.com/anthropics/claude-code/blob/772c6bee5c36f58be43bbb2b182862aeb22aceff/CHANGELOG.md
- Issue #47558: https://github.com/anthropics/claude-code/issues/47558

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified against current data-usage docs: added DISABLE_ERROR_REPORTING, DISABLE_FEEDBACK_COMMAND, survey and DO_NOT_TRACK controls, WebFetch hostname check, provider defaults and error-reporting scope; repoStatus corrected to closed-source; vendor names now marked as previously documented.
- 2026-10-20: Added v2.1.282 / v2.1.290 telemetry-related changelog items and the undocumented experiment-gate side effect of `DISABLE_TELEMETRY` (issue #47558).
