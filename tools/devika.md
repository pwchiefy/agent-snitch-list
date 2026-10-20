# Devika

| Field | Value |
|-------|-------|
| Website | https://github.com/stitionai/devika |
| Repository | https://github.com/stitionai/devika |
| Category | AI Software Engineer Agent |
| Telemetry | No |
| Default State | OFF |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing. Devika is fully self-hosted with no telemetry.

## What Is NOT Collected

- No usage analytics
- No code or generated output
- No prompts or agent conversations
- No crash reports
- No user identifiers

## How to Fully Opt Out

No action required. Devika runs entirely on your own infrastructure with no phone-home behavior.

## Red Flags

None identified. Fully self-hosted architecture. All LLM calls go to user-configured API endpoints.

**Status (2026-10-20):** Last code change 2024-09; the README (2025-09) points to Opcode (opcode.sh) as the second iteration of Devika (not audited here).

## Evidence

- Repository: https://github.com/stitionai/devika
- No analytics dependencies in requirements
- Self-hosted architecture with local web UI
- No outbound telemetry in source code
- https://github.com/stitionai/devika/tree/80bb343cbe4a4e5f5a0ba08d2524920139baceb6 -- requirements.txt and UI contain no analytics SDKs

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified, no change; README now points to Opcode as Devika's successor (not audited).
