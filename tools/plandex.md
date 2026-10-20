# Plandex

| Field | Value |
|-------|-------|
| Website | https://plandex.ai |
| Repository | https://github.com/plandex-ai/plandex |
| Category | AI Coding Agent (CLI + Cloud) |
| Telemetry | No (self-hosted) |
| Default State | N/A |
| Analytics Providers | None (OSS); Rollbar used by Plandex Cloud |
| Disable Method | N/A (self-host) |
| Collects Code | No (self-hosted) |
| Collects Prompts | No (self-hosted) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Self-hosted CLI/server: nothing sent to Plandex. The CLI fetches `https://plandex.ai/v2/cli-version.txt` for upgrade checks.
- Plandex Cloud (winding down, no new users since 2025-10-03): code context and prompts processed server-side; Rollbar error tracking per cloud docs.

## What Is NOT Collected

- No analytics or crash reporting in the open-source CLI or server

## How to Fully Opt Out

1. Self-host the server (Docker local mode).
2. Cloud users: migrate to self-hosting as the cloud winds down.

## Red Flags

- Cloud service winding down.
- Project activity has slowed (last commit October 2025).

## Evidence

- Source at e2d7720: no Rollbar/GA/PostHog/Sentry in app/cli or app/server (https://github.com/plandex-ai/plandex/tree/e2d772072efadbe41d2946d97d79be55532dbab5)
- Cloud wind-down: https://github.com/plandex-ai/plandex/blob/e2d772072efadbe41d2946d97d79be55532dbab5/README.md#L157
- Cloud sub-processors incl. Rollbar: https://github.com/plandex-ai/plandex/blob/e2d772072efadbe41d2946d97d79be55532dbab5/docs/docs/hosting/cloud.md#L95
- Upgrade check URL: https://github.com/plandex-ai/plandex/blob/e2d772072efadbe41d2946d97d79be55532dbab5/app/cli/upgrade.go#L40

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified: OSS code has no telemetry (Google Analytics/Rollbar not present; Rollbar documented for Cloud only). Plandex Cloud winding down since 2025-10-03. Reclassified conditional -> no telemetry (self-hosted).
