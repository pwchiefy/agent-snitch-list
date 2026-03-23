# Tabnine

| Field | Value |
|-------|-------|
| Website | https://www.tabnine.com |
| Repository | https://github.com/codota/tabnine-vscode (VS Code extension) |
| Category | AI Code Completion (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Application Insights (Microsoft Azure) |
| Disable Method | Extension settings; Enterprise admin controls |
| Collects Code | No (zero-retention policy: "no-train, no-retain") |
| Collects Prompts | No (zero-retention policy) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Usage telemetry via Application Insights:
  - Completion suggestion events (shown, accepted, rejected)
  - IDE type and version
  - Extension version
  - Programming language of active file
  - Latency and performance metrics
  - Feature usage events
  - Error reports and exception telemetry
  - Anonymous user/machine identifier
  - Session duration and interaction patterns

**Important "no-train, no-retain" policy:**
- Tabnine processes code for completions but does not retain code snippets after generating suggestions
- Code is not used for training Tabnine's models
- This applies to all tiers (Individual, Enterprise)

## What Is NOT Collected

- Code snippets are not retained after completion generation
- Prompts are not stored or used for training
- No code is used to train Tabnine models (all training uses permissively licensed open-source code)
- Personal identifying information beyond anonymous telemetry IDs

## How to Fully Opt Out

1. **VS Code extension settings:**
   - Open VS Code Settings
   - Search for "Tabnine"
   - Look for telemetry-related toggles and disable them
2. **VS Code global telemetry:**
   ```json
   {
     "telemetry.telemetryLevel": "off"
   }
   ```
3. **Enterprise (on-premise):**
   - Deploy Tabnine on-premise for complete data isolation
   - No telemetry leaves the network in air-gapped deployments
4. **Enterprise admin controls:** Organizational admins can configure telemetry settings centrally.

## Red Flags

- Application Insights (Microsoft Azure) is the telemetry provider, meaning operational metrics flow through Microsoft's infrastructure
- Telemetry is ON by default
- While Tabnine has a strong "no-train, no-retain" policy for code, the operational telemetry (usage patterns, feature metrics) is still collected
- The VS Code extension source is available, but the server-side completion engine is closed source

## Evidence

- Application Insights integration: visible in `tabnine-vscode` extension source
- Tabnine Privacy Policy: https://www.tabnine.com/privacy
- "No-train, no-retain" documentation: https://www.tabnine.com/code-privacy
- VS Code extension: https://github.com/codota/tabnine-vscode
- Enterprise security: https://www.tabnine.com/enterprise

## Changelog

- 2026-03-23: Initial entry
