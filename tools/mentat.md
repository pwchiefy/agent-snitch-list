# Mentat

| Field | Value |
|-------|-------|
| Website | https://mentat.ai (now a different product) |
| Repository | https://github.com/AbanteAI/archive-old-cli-mentat (archived) |
| Category | AI Coding Assistant (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry |
| Disable Method | No documented opt-out |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Error reports and exception stack traces
- Performance traces and profiles (`traces_sample_rate=1.0`, `profiles_sample_rate=1.0`)
- Mentat version
- A persistent random user ID stored in `~/.mentat/.user`
- Full `platform.uname()` description (OS, hostname, kernel, architecture)
- File path fragments in stack traces

## What Is NOT Collected

- Source code contents (not explicitly sent; may appear incidentally in exception context)
- Prompts are not sent to Sentry by design

## How to Fully Opt Out

1. There is no supported opt-out. Sentry is skipped only when the bundled `conf.ini` environment type is `dev` or under pytest.
2. Block `*.ingest.sentry.io` at the network level, or stop using the archived CLI.

## Red Flags

- Telemetry ON by default with no opt-out.
- `platform.uname()` includes the machine's hostname.
- Repository archived; no fixes.

## Evidence

- Sentry init and context: https://github.com/AbanteAI/archive-old-cli-mentat/blob/3a01f0a59404d717e527e4b60b6244cca158cfed/mentat/sentry.py#L38
- Call site: https://github.com/AbanteAI/archive-old-cli-mentat/blob/3a01f0a59404d717e527e4b60b6244cca158cfed/mentat/session.py#L62
- Archive notice: https://github.com/AbanteAI/archive-old-cli-mentat/blob/3a01f0a59404d717e527e4b60b6244cca158cfed/README.md

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified on archived source; repo renamed to AbanteAI/archive-old-cli-mentat; added hostname/uname and 100% sampling details; noted mentat.ai is now a different product.
