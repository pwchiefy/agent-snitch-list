# Goose

| Field | Value |
|-------|-------|
| Website | https://goose-docs.ai |
| Repository | https://github.com/aaif-goose/goose |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | PostHog |
| Disable Method | Decline prompt; `GOOSE_TELEMETRY_ENABLED=false`; `GOOSE_TELEMETRY_OFF=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing until you opt in at the first-run prompt.
- After opt-in: OS, version and architecture; goose version and install method; provider and model; extension and tool usage counts (names only); session duration, interaction count and token usage; error types (e.g. `rate_limit`, no details); an anonymous installation ID.

## What Is NOT Collected

- Conversations, code, tool arguments or error messages
- Personal data (per goose docs)

## How to Fully Opt Out

1. **First run:** decline the usage-data prompt.
2. **Desktop:** Settings > App > Privacy > toggle off *Anonymous usage data*.
3. **CLI:** `goose configure` > goose settings > Telemetry > No.
4. **Config/env:** `GOOSE_TELEMETRY_ENABLED: false` in `config.yaml` or as an env var; `GOOSE_TELEMETRY_OFF=1` forces it off.

## Red Flags

- When opted in, events go to PostHog's US cloud.

## Evidence

- PostHog key and capture URL: https://github.com/aaif-goose/goose/blob/9920efa16d078777a4d9715b2f00d8800a4da188/crates/goose/src/posthog.rs#L16
- Opt-in default: https://github.com/aaif-goose/goose/blob/9920efa16d078777a4d9715b2f00d8800a4da188/crates/goose/src/posthog.rs#L50
- Usage-data docs: https://github.com/aaif-goose/goose/blob/9920efa16d078777a4d9715b2f00d8800a4da188/documentation/docs/guides/usage-data.md
- Docs site: https://goose-docs.ai/docs/guides/usage-data/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified (opt-in). Repo moved to aaif-goose/goose (Linux Foundation AAIF); added `GOOSE_TELEMETRY_ENABLED` and documented data list; privacy URL added; dropped Block-governance flag.
