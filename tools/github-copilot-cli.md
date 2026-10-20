# GitHub Copilot CLI

| Field | Value |
|-------|-------|
| Website | https://github.com/github/copilot-cli |
| Repository | https://github.com/github/copilot-cli |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | GitHub first-party (endpoint not verified) |
| Disable Method | `--disable-client-telemetry` flag (added v1.0.100, 2026-10-19); model-training controls at github.com/settings/copilot/features |
| Collects Code | Yes (sent for inference; training on personal plans unless opted out) |
| Collects Prompts | Yes (sent for inference) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Client telemetry uploads (schema not published)
- Prompts, code context and tool results sent to the Copilot service for inference
- Personal Free/Pro/Pro+: interaction data used for AI model training by default since 2026-04-24 unless disabled

## What Is NOT Collected

- Business/Enterprise plan data is excluded from model training (per GitHub's 2026 policy update, as reported)

## How to Fully Opt Out

1. **Client telemetry:** run with `--disable-client-telemetry` (v1.0.100+)
2. **Model training:** github.com/settings/copilot/features -> Privacy -> disable "Allow GitHub to use my data for AI model training"
3. **OpenTelemetry:** off unless configured (`copilot help monitoring`)

## Red Flags

- Client telemetry ON by default; the first documented CLI opt-out (`--disable-client-telemetry`) arrived in v1.0.100 (2026-10-19)
- Closed source: telemetry payloads cannot be audited
- Personal-plan interaction data used for model training by default since 2026-04-24 (account-level opt-out)
- Issue #4782: enterprise managed settings reported ignored for telemetry in the desktop app

## Notes

Separate product from the Copilot IDE extensions (see github-copilot). Business/Enterprise plans excluded from training use.

## Evidence

- https://github.com/github/copilot-cli/blob/main/changelog.md (1.0.100 entry)
- https://github.com/github/copilot-cli/issues/3387
- https://github.com/github/copilot-cli/issues/4782
- https://www.theregister.com/2026/03/26/github_ai_training_policy_changes/
- Privacy / data documentation: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
