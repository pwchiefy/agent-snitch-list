# Warp AI

| Field | Value |
|-------|-------|
| Website | https://www.warp.dev/ |
| Repository | https://github.com/warpdotdev/warp (client open source; services closed) |
| Category | AI-Powered Terminal |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | RudderStack, Sentry |
| Disable Method | Settings > Privacy > 'Help improve Warp' / 'Send crash reports' |
| Collects Code | Unknown |
| Collects Prompts | Yes (AI features require cloud processing; AI interactions collected as telemetry when enabled) |
| Last Verified | 2026-10-20 |

## What Is Collected

- High-level product usage analytics (RudderStack, non-UGC destination)
- AI interactions and console inputs (RudderStack, separate UGC destination) when 'Help improve Warp' is on
- Crash reports (Sentry) when 'Send crash reports' is on
- Cloud conversation storage for agent conversations (default on)
- OS, version and hardware info; account data

## What Is NOT Collected

- With telemetry disabled, Warp says no console interactions are persisted on its servers
- Business/Enterprise (ZDR): no AI interaction or console data collected, per Warp's docs
- Warp states it never sells usage data

## How to Fully Opt Out

1. Settings > Privacy (or search 'privacy' in the Command Palette): turn off **Help improve Warp** and **Send crash reports**.
2. Turn off cloud conversation storage in agent settings (`agents.cloud_conversation_storage_enabled`).
3. Free plan: disabling telemetry disables AI features; paid plans can opt out and keep AI.
4. If your organization forces telemetry on, the local setting is ignored.

## Red Flags

- Telemetry, crash reporting and cloud conversation storage default to ON.
- Free-plan AI requires telemetry.
- AI interactions and console inputs are collected as telemetry unless disabled.
- Organization admins can force telemetry on.
- An experiment flag (`AgentModeAnalytics`) keeps telemetry on for enrolled users.

## Evidence

- Privacy settings defaults and force-enable logic: https://github.com/warpdotdev/warp/blob/831f4fa9fa1585219b57331f1b17253309f5840d/app/src/settings/privacy.rs#L87
- RudderStack configuration (UGC and non-UGC destinations): https://github.com/warpdotdev/warp/blob/831f4fa9fa1585219b57331f1b17253309f5840d/crates/warp_core/src/channel/config.rs#L92
- Sentry crash reporting init: https://github.com/warpdotdev/warp/blob/831f4fa9fa1585219b57331f1b17253309f5840d/app/src/crash_reporting/mod.rs#L183
- Privacy docs: https://docs.warp.dev/privacy/privacy
- Privacy policy: https://www.warp.dev/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Warp client is now open source; re-verified against source and privacy docs. Added UGC telemetry destination, cloud conversation storage default, org force-enable and experiment-flag override; dropped unverified 'account required' flag.
