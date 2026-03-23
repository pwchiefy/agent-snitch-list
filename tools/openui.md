# OpenUI

| Field | Value |
|-------|-------|
| Website | https://github.com/wandb/openui |
| Repository | https://github.com/wandb/openui |
| Category | AI UI Code Generation |
| Telemetry | No (outbound) |
| Default State | OFF |
| Analytics Providers | None (W&B dev tracing goes to user's own account) |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing is sent to third parties.
- **W&B tracing (optional):** If configured with a Weights & Biases API key, development traces go to the user's own W&B account -- not to wandb/OpenUI developers.

## What Is NOT Collected

- No outbound telemetry to OpenUI or W&B team
- No generated UI code
- No prompts
- No usage analytics

## How to Fully Opt Out

No action required. There is no outbound telemetry. W&B tracing is optional and user-controlled.

## Red Flags

None identified. Built by Weights & Biases but does not phone home to W&B servers unless the user explicitly configures their own W&B account for tracing.

## Evidence

- Repository: https://github.com/wandb/openui
- No analytics dependencies beyond optional W&B integration
- W&B integration sends data to user's own account

## Changelog

- 2026-03-23: Initial entry
