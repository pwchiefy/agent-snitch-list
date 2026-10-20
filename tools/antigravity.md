# Google Antigravity

| Field | Value |
|-------|-------|
| Website | https://antigravity.google |
| Repository | Closed source |
| Category | Agentic IDE and CLI |
| Telemetry | Yes |
| Default State | Unknown (toggle documented, default not stated) |
| Analytics Providers | Google first-party |
| Disable Method | App: Settings > Account > "Enable Telemetry"; CLI: `enableTelemetry` in `/config` or `~/.gemini/antigravity-cli/settings.json` |
| Collects Code | Yes (sent for inference; interaction logs used for model improvement when telemetry on) |
| Collects Prompts | Yes (same) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Interaction logs used to evaluate, develop and improve Antigravity and its models (when telemetry on)
- CLI: anonymous usage statistics and crash reports

## What Is NOT Collected

- Not documented

## How to Fully Opt Out

1. **App:** Settings panel > Account > turn off "Enable Telemetry"
2. **CLI:** set `enableTelemetry` to false in `/config` or `~/.gemini/antigravity-cli/settings.json`

## Red Flags

- When enabled, interaction logs are used to improve Google models
- Default state of the telemetry toggle is not stated in official docs
- Users on the official forum report unclear separation between telemetry and model-training use
- Closed source

## Notes

Additional terms reportedly exclude prompt/content collection when accessed via Google Workspace or Google Cloud; not verified against the terms text in this review.

## Evidence

- https://antigravity.google/docs/settings?tab=ide
- https://antigravity.google/docs/settings?app=cli
- https://discuss.ai.google.dev/t/antigravity-data-training-opt-out/125236
- Privacy / data documentation: https://antigravity.google/docs/settings

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
