# Morph

| Field | Value |
|-------|-------|
| Website | https://morph.so/ |
| Repository | https://github.com/morph-labs/morph-python-sdk (also morph-typescript-sdk) |
| Category | AI Code Generation / Cloud Dev Environment |
| Telemetry | No (client-side) |
| Default State | OFF |
| Analytics Providers | None (client SDK) |
| Disable Method | N/A |
| Collects Code | No (client-side) |
| Collects Prompts | No (client-side) |
| Last Verified | 2026-10-20 |

## What Is Collected

- The client SDK/tools do not include telemetry.
- **Cloud environment:** When using Morph's hosted cloud development environment, code execution occurs on Morph infrastructure.

## What Is NOT Collected

- No client-side analytics
- No local code collection

## How to Fully Opt Out

No client-side telemetry to disable.

## Red Flags

- Cloud development environment processes code on Morph infrastructure (by design)
- Limited public documentation on data retention for cloud workspaces

**Status (2026-10-20):** Repo field now points to morph-labs/morph-python-sdk (current open-source surface: Morph Cloud SDKs/CLI).

## Evidence

- Website: https://morph.so/
- GitHub: https://github.com/morph-labs
- No analytics dependencies in client packages
- https://github.com/morph-labs/morph-python-sdk/tree/ac0b6454130fd3a2cad2fae4880dfbb0b3498f43 -- no telemetry code or analytics dependencies

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified, no change; repo field set to morph-labs/morph-python-sdk.
