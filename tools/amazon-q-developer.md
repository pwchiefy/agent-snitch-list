# Amazon Q Developer

| Field | Value |
|-------|-------|
| Website | https://aws.amazon.com/q/developer/ |
| Repository | Closed source |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | AWS internal telemetry infrastructure |
| Disable Method | IDE settings toggle |
| Collects Code | Yes (free/individual tier: code used for service improvement; Pro tier with admin controls) |
| Collects Prompts | Yes (free/individual tier) |
| Last Verified | 2026-03-23 |

## What Is Collected

**All tiers:**
- Code context sent to AWS servers for completion generation
- Suggestion acceptance/rejection events
- IDE type and version
- Plugin/extension version
- Programming language of active file
- Latency and performance metrics
- Feature usage events
- Error telemetry

**Free/Individual tier:**
- Content (code snippets, prompts, suggestions) may be used for service improvement
- Usage data linked to AWS account

**Pro tier (with organizational admin controls):**
- Admins can opt out of content sharing for service improvement
- Code is not retained after generating suggestions when opt-out is enabled
- AWS Organizations integration for policy enforcement

## What Is NOT Collected

- Pro tier (with opt-out): code content is not retained for training
- AWS account credentials (IAM keys) are not transmitted through the coding extension
- Local file system contents beyond the active editor context

## How to Fully Opt Out

1. **IDE telemetry toggle:**
   - **VS Code:** Settings > Extensions > Amazon Q > uncheck "Share Content With AWS"
   - **JetBrains:** Settings > Tools > Amazon Q > uncheck sharing options
2. **AWS Organization policy (Pro tier):**
   - Organization admins can disable content sharing via AWS Organizations service control policies
   - Navigate to the Amazon Q Developer console and disable "Service improvement" under data settings
3. **Disable IDE telemetry:**
   - VS Code: Set `"telemetry.telemetryLevel": "off"` (affects all extensions)
4. **Network-level:** Blocking AWS telemetry endpoints will likely break functionality as code completion requires server communication.

## Red Flags

- Free tier users' code is used for service improvement by default
- Closed source: telemetry behavior cannot be independently verified
- Tight integration with AWS ecosystem means usage data is linked to your AWS identity
- The distinction between "telemetry" (operational metrics) and "content sharing" (code used for improvement) requires careful attention; disabling one does not disable the other
- Code context must be sent to AWS servers for the service to function (inherent to architecture)

## Evidence

- AWS documentation: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/opt-out-of-data-collection.html
- Amazon Q Developer FAQ: https://aws.amazon.com/q/developer/faqs/
- AWS Privacy Notice: https://aws.amazon.com/privacy/
- Service terms: https://aws.amazon.com/service-terms/ (Amazon Q section)

## Changelog

- 2026-03-23: Initial entry
