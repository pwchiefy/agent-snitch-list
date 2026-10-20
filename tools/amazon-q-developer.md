# Amazon Q Developer

| Field | Value |
|-------|-------|
| Website | https://aws.amazon.com/q/developer/ |
| Repository | https://github.com/aws/aws-toolkit-vscode (VS Code plugin); https://github.com/aws/aws-toolkit-jetbrains (JetBrains); service closed source |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON (client telemetry; Free-tier content sharing) |
| Analytics Providers | AWS client-side telemetry |
| Disable Method | `Amazon Q: Telemetry` / 'Send usage metrics to AWS'; Free tier content: `Amazon Q: Share Content` |
| Collects Code | Yes (sent for inference; Free-tier content may be used for service improvement) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

**Client-side telemetry (all tiers, default on):**
- Usage of the service, e.g. whether a recommendation was accepted or rejected
- Feature usage, IDE/plugin version, errors
- AWS states client-side telemetry "does not contain actual code"
- Event schemas are public: aws-toolkit-common `commonDefinitions.json` and per-IDE definition files

**Content (Free tier, default on):**
- Code and prompts may be used for Amazon Q service improvement unless "Share content" is disabled
- Pro tier: AWS states Amazon Q does not collect your content

## What Is NOT Collected

- Code in client-side telemetry (per AWS)
- Pro tier content (per AWS)

## How to Fully Opt Out

1. **VS Code:** Settings > search `Amazon Q: Telemetry` > uncheck; search `Amazon Q: Share Content` > uncheck (Free tier)
2. **JetBrains:** Settings > Tools > AWS > uncheck **Send usage metrics to AWS**; Tools > AWS > Amazon Q > Data sharing > uncheck **Share Amazon Q content with AWS**
3. **Visual Studio:** Tools > Options > AWS Toolkit > General > uncheck **Allow AWS Toolkit to collect usage information**; Amazon Q > **Share Amazon Q Content with AWS** = False
4. **Command line:** Preferences > toggle **Telemetry** and **Share Amazon Q content with AWS**
5. **Pro tier:** content is not collected; client telemetry still needs the per-IDE toggle (admins cannot change it for developers)

## Red Flags

- Client telemetry and Free-tier content sharing are ON by default
- Free-tier code/prompts may be used for service improvement unless opted out
- Per AWS docs, enterprise administrators cannot change a developer's client telemetry setting
- Server side is closed source; IDE plugins are open source

**Notes:** IDE plugins are open source (aws-toolkit-vscode, aws-toolkit-jetbrains). The open-source Amazon Q Developer CLI is in maintenance mode (critical security fixes only) and has been succeeded by the closed-source Kiro CLI, which is not covered by this entry. Pro tier: AWS states content is not collected.

## Evidence

- AWS opt-out docs: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/opt-out-IDE.html
- VS Code telemetry definitions: https://github.com/aws/aws-toolkit-vscode/blob/master/packages/core/src/shared/telemetry/vscodeTelemetry.json
- Amazon Q Developer CLI maintenance notice (Kiro CLI successor): https://github.com/aws/amazon-q-developer-cli
- AWS Privacy Notice: https://aws.amazon.com/privacy/

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified AWS opt-out docs; documented exact per-IDE toggles; marked IDE plugins as open source (repoStatus partial); noted Q Developer CLI is maintenance-only and succeeded by closed-source Kiro CLI.
