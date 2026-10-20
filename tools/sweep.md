# Sweep

| Field | Value |
|-------|-------|
| Website | https://sweep.dev |
| Repository | https://github.com/sweepai/sweep (unmaintained) |
| Category | AI Code Review / PR Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog; Sentry (optional, self-configured) |
| Disable Method | Override `POSTHOG_API_KEY` (server); decline at `sweep init` (CLI) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- **Self-hosted GitHub app server:** PostHog events (`started`, `issue_closed`, `invalid_issue`, etc.) carrying issue URL, repo full name, organization, repo description, GitHub username, comment ID, issue title, installation ID, model/mode flags, `is_self_hosted` and durations. The PostHog key defaults to Sweep's own project key.
- **CLI:** if accepted at `sweep init` (prompt defaults to Yes), `sweep_init` and run start/success/failure events with issue URL and error text, keyed by `uuid.getnode()` (MAC-derived).
- **Sentry:** only if you set `SENTRY_URL` yourself.

## What Is NOT Collected

- Repository file contents are not included in the PostHog events we reviewed
- LLM prompts/responses are not sent to PostHog

## How to Fully Opt Out

1. **Server:** set `POSTHOG_API_KEY` to a key you control (there is no documented off switch), or block `app.posthog.com` egress.
2. **CLI:** answer **No** to "Enable usage statistics?" during `sweep init` (re-run to change).

## Red Flags

- Issue titles, repo names/descriptions and usernames go to Sweep's PostHog by default from self-hosted deployments.
- No documented server-side opt-out.
- CLI prompt defaults to Yes; identifier derived from the MAC address.
- Unmaintained since 2025-09.

## Evidence

- Default PostHog key: https://github.com/sweepai/sweep/blob/a8b8b67bda4f89faac9314d34e7c7d5a64f76046/sweepai/config/server.py#L106
- PostHog client (app.posthog.com): https://github.com/sweepai/sweep/blob/a8b8b67bda4f89faac9314d34e7c7d5a64f76046/sweepai/utils/event_logger.py#L29
- Event metadata: https://github.com/sweepai/sweep/blob/a8b8b67bda4f89faac9314d34e7c7d5a64f76046/sweepai/handlers/on_ticket.py#L161
- CLI consent prompt: https://github.com/sweepai/sweep/blob/a8b8b67bda4f89faac9314d34e7c7d5a64f76046/sweepai/cli.py#L292
- README (team moved to JetBrains plugin): https://github.com/sweepai/sweep/blob/a8b8b67bda4f89faac9314d34e7c7d5a64f76046/README.md

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: OSS server and CLI contain PostHog telemetry (server on by default with hard-coded key); repo is unmaintained but not archived.
