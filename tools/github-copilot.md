# GitHub Copilot

| Field | Value |
|-------|-------|
| Website | https://github.com/features/copilot |
| Repository | https://github.com/microsoft/vscode/tree/main/extensions/copilot (VS Code client, MIT); service closed source |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | GitHub / Microsoft internal telemetry |
| Disable Method | github.com/settings/copilot > Privacy + editor telemetry settings |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Code context and prompts sent to GitHub for completions, chat and agent mode
- Suggestion acceptance/rejection, latency, feature usage, IDE/extension version, language, error reports (to `copilot-telemetry.githubusercontent.com`)
- Optional 'enhanced' telemetry stream that can include prompts and tool details
- **Training (since 2026-04-24):** Copilot Free, Pro and Pro+ interaction data -- inputs, outputs, code snippets and associated context -- is used for AI model training unless you opt out

## What Is NOT Collected

- Business/Enterprise and organization-provided accounts: not used for training (DPA)
- Private repository content at rest is not used for training

## How to Fully Opt Out

1. **Training:** github.com/settings/copilot > Privacy > disallow use of your data for AI model training (previous product-improvement opt-outs are honoured).
2. **Editor telemetry:** set `telemetry.telemetryLevel` to `off` in VS Code (other IDEs have equivalent settings).
3. **Business/Enterprise:** admins manage policies at org/enterprise level.

## Red Flags

- Default-on training use for Free/Pro/Pro+ since April 2026.
- Every completion sends code context to GitHub.
- Microsoft editor telemetry in addition to Copilot telemetry.
- Settings split across GitHub and the editor.
- Service and models closed source.

## Evidence

- Copilot telemetry endpoint and enhanced stream: https://github.com/microsoft/vscode/blob/14d25745845876e0e61eb556d0ad6195c6ba9b2d/src/vs/platform/agentHost/node/agentHostRestrictedTelemetry.ts#L27
- Copilot client source: https://github.com/microsoft/vscode/tree/main/extensions/copilot (previously https://github.com/microsoft/vscode-copilot-chat, now archived)
- Training policy change (2026-03-25): https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified: VS Code client now open source (in microsoft/vscode); added April 2026 default-on training policy for Free/Pro/Pro+ and opt-out path; repoStatus closed -> partial; privacy URL updated.
