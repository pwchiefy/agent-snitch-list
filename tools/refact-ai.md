# Refact.ai

| Field | Value |
|-------|-------|
| Website | https://refact.ai/ |
| Repository | https://github.com/smallcloudai/refact (archived); active: https://github.com/JegernOUTT/refact |
| Category | AI Code Completion / Chat |
| Telemetry | No (current releases) |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing is sent to Refact in current code.
- Optional performance diagnostics (aggregate timings/counters) are held in bounded local memory, disabled by default, and visible on a local Performance page.
- Historical: older plugin/LSP versions had `basic_telemetry` (hourly batched usage stats) on by default, and Refact Cloud processed code server-side.

## What Is NOT Collected

- No snippet telemetry (per docs)
- No usage analytics to Refact
- Code/prompts go only to your configured provider or local runtime

## How to Fully Opt Out

1. No action needed on current releases.
2. On older versions, set `basic_telemetry: false` or upgrade.

## Red Flags

- Original repo archived; development continues in a personal fork.
- Older installs may still have `basic_telemetry` enabled.

## Evidence

- Archive README: https://github.com/smallcloudai/refact/blob/27f86def9423b1153f1ff857a51329a88bbbe292/README.md
- Successor local perf diagnostics: https://github.com/JegernOUTT/refact/blob/0d096c958c6d1af9b702e48607adab03cc689c86/refact-agent/engine/src/chat/perf_telemetry.rs
- Successor release notes (aggregate-only, disabled by default): https://github.com/JegernOUTT/refact/blob/0d096c958c6d1af9b702e48607adab03cc689c86/docs/release-notes/v8.6.0.md#L57
- Docs: 'Refact does not send snippet telemetry': https://github.com/smallcloudai/refact/blob/27f86def9423b1153f1ff857a51329a88bbbe292/docs/src/content/docs/features/code-completion.md#L34

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo archived; Refact Cloud retired; remote telemetry no longer present in current code. Reclassified ON -> no telemetry for current releases.
