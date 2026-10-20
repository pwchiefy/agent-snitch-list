# Snyk Code AI

| Field | Value |
|-------|-------|
| Website | https://snyk.io/ |
| Repository | https://github.com/snyk/cli (CLI; engine closed) |
| Category | AI-Assisted Security Scanning |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Snyk API; Sentry (npm wrapper); Datadog/Snowflake (processors) |
| Disable Method | `SNYK_DISABLE_ANALYTICS=1` / `snyk config set disable-analytics=1` (optional analytics only) |
| Collects Code | Yes (`snyk code test`) |
| Collects Prompts | Unknown |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Essential operational analytics (always on):** anonymized success/failure rates, execution times and technical metadata; processed in Snowflake and Datadog per Snyk docs
- **Optional usage analytics:** CLI command, version, error codes, usage patterns
- **Scanning data:** code snippets for `snyk code test`; dependency manifests for `snyk test`; OS/CLI/Node version; org/project metadata; results
- **npm wrapper:** install/binary errors reported to Sentry when analytics are enabled

## What Is NOT Collected

- `snyk test` (open-source dependency scanning) does not upload source code

## How to Fully Opt Out

1. **Env var:** `export SNYK_DISABLE_ANALYTICS=1` (also `SNYK_CFG_DISABLE_ANALYTICS`).
2. **Config:** `snyk config set disable-analytics=1`.
3. These disable optional analytics only; essential operational analytics remain (per Snyk docs).
4. Avoid `snyk code test` if code must not leave your machine.

## Red Flags

- Code scanning uploads source code.
- Essential analytics cannot be disabled.
- Analytics opt-out does not stop code upload.
- Sentry error reporting in the npm wrapper.
- Closed analysis engine.

## Evidence

- Opt-out constant: https://github.com/snyk/cli/blob/72c8b5b98bd4f72389b944246ebc941692b93229/cliv2/internal/constants/constants.go#L28
- Legacy analytics gate: https://github.com/snyk/cli/blob/72c8b5b98bd4f72389b944246ebc941692b93229/src/lib/analytics/index.ts#L58
- Sentry init in npm wrapper: https://github.com/snyk/cli/blob/72c8b5b98bd4f72389b944246ebc941692b93229/ts-binary-wrapper/src/common.ts#L384
- CLI analytics docs: https://docs.snyk.io/developer-tools/snyk-cli/snyk-cli-analytics
- Privacy policy: https://snyk.io/policies/privacy/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified: added always-on essential operational analytics (docs), Sentry in npm wrapper, Datadog/Snowflake processors; privacy URL now points to CLI analytics docs.
