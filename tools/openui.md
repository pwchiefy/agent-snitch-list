# OpenUI

| Field | Value |
|-------|-------|
| Website | https://github.com/wandb/openui |
| Repository | https://github.com/wandb/openui |
| Category | AI UI Code Generation |
| Telemetry | Yes |
| Default State | Conditional |
| Analytics Providers | Google Analytics (hosted build only), Sentry via W&B Weave SDK (only when a WANDB_API_KEY is present) |
| Disable Method | Default self-hosted run sends nothing. If a W&B key is set, unset WANDB_API_KEY or set WANDB_ERROR_REPORTING=false to stop Weave's Sentry error reporting |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Default self-hosted run: nothing beyond calls to your configured LLM provider
- If `WANDB_API_KEY` is present: Weave traces (prompts and generated UI) to your own W&B project, and the Weave SDK's Sentry error reports to W&B
- Hosted build (`MODE=hosted`): Google Analytics (G-FDHP7DEY94)

## What Is NOT Collected

- Default local run: no analytics, no crash reporting, no identifiers

## How to Fully Opt Out

1. **Default:** no action if no W&B key is set
2. **With W&B:** set `WANDB_ERROR_REPORTING=false` to stop Weave's Sentry reporting, or unset `WANDB_API_KEY`
3. **Hosted demo:** self-host instead

## Red Flags

- Enabling the W&B integration also turns on the Weave SDK's error reporting to W&B's Sentry by default

## Notes

Default local use is clean. Behavior depends on configuration: the hosted demo build includes Google Analytics, and the optional W&B integration pulls in Weave's own error reporting. Last commit 2026-06-30.

## Evidence

- GA only in hosted mode: https://github.com/wandb/openui/blob/42d7ab4ab6650433486dfb12eb3783c393a3e475/frontend/index.html#L4-L19
- weave.init when W&B auth found: https://github.com/wandb/openui/blob/42d7ab4ab6650433486dfb12eb3783c393a3e475/backend/openui/server.py#L603-L621
- Weave Sentry reporting: https://github.com/wandb/weave/blob/25398c8b06a027f2333e2635b969169c6940982d/weave/telemetry/trace_sentry.py#L39-L53

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Reclassified OFF -> Conditional: hosted build has Google Analytics; W&B integration enables Weave's Sentry error reporting.
