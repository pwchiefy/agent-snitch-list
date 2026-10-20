# Open Interpreter

| Field | Value |
|-------|-------|
| Website | https://www.openinterpreter.com |
| Repository | https://github.com/openinterpreter/openinterpreter |
| Category | CLI AI Assistant / Code Execution |
| Telemetry | Yes |
| Default State | Conditional (on when a Codex-style login is present) |
| Analytics Providers | Custom endpoint (oi-new-api.fly.dev); Sentry for /feedback |
| Disable Method | `[analytics] enabled = false` in config.toml |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Open Interpreter is now a distribution fork of OpenAI Codex CLI (Rust). It keeps Codex's analytics pipeline but sends events to `https://oi-new-api.fly.dev/v0/interpreter-events` instead of OpenAI.
- Events include turn lifecycle, tool/MCP/plugin/skill usage, accepted-line fingerprints, hook runs and app usage facts.
- Sending requires a Codex-style auth in the CLI: with a ChatGPT login all events are eligible; with an API-key login only plugin-related events are sent; with no such auth (e.g. providers configured only by env key) nothing is sent.
- `/feedback`: when you submit feedback, logs and optional attachments are uploaded to Sentry.

## What Is NOT Collected

- Prompt or response text is not part of the analytics event schema we reviewed (not verified by traffic capture)
- Nothing from the analytics client when `[analytics] enabled = false`

## How to Fully Opt Out

1. Add to your config file (the product home is `~/.openinterpreter` per FORK_BRANDING.md; the source comment references `~/.codex/config.toml`):
   ```toml
   [analytics]
   enabled = false
   ```
2. Do not use `/feedback` if you do not want logs uploaded to Sentry.
3. Legacy Python versions: `--disable_telemetry` or `DISABLE_TELEMETRY=true` (not re-verified).

## Red Flags

- Analytics are on by default whenever a Codex-style login is present, with no first-run prompt.
- The analytics POST attaches the CLI's auth headers (`auth_provider_from_auth(auth).to_auth_headers()`), which for ChatGPT/API-key logins is a bearer token, to a third-party (non-OpenAI) endpoint. We have not confirmed this by traffic capture.
- No published telemetry/privacy documentation for the Rust fork.
- Prior audit of the Python project (PostHog) does not describe current releases.

## Evidence

- Endpoint constant and opt-out comment: https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/codex-rs/analytics/src/client.rs#L87
- Default-enabled queue: https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/codex-rs/analytics/src/client.rs#L254
- Auth gating (API key vs ChatGPT): https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/codex-rs/analytics/src/client.rs#L875
- Auth headers on analytics request: https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/codex-rs/analytics/src/client.rs#L951
- Feedback Sentry DSN: https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/codex-rs/feedback/src/lib.rs#L56
- Fork/branding notes: https://github.com/openinterpreter/openinterpreter/blob/ac1fcc8fe57aba51fcc3c79afd57a0883237fe87/FORK_BRANDING.md
- Releases: https://github.com/openinterpreter/openinterpreter/releases

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Project rewritten as a Codex CLI fork (Rust). Replaced PostHog findings with the fork's analytics endpoint (oi-new-api.fly.dev) and /feedback Sentry upload; reclassified ON -> conditional; repo renamed.
