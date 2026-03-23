# CodeGeeX

| Field | Value |
|-------|-------|
| Website | https://codegeex.cn |
| Repository | https://github.com/THUDM/CodeGeeX |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom endpoint (Zhipu AI / THUDM infrastructure) |
| Disable Method | Privacy Mode setting in extension |
| Collects Code | Yes (unless Privacy Mode is enabled) |
| Collects Prompts | Yes (unless Privacy Mode is enabled) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Without Privacy Mode (default):**
- Code context sent to CodeGeeX/Zhipu AI servers for completion generation
- Completion content and acceptance/rejection events
- Chat prompts and responses
- IDE type and version
- Extension version
- Programming language of active file
- Usage metrics and feature events
- Error telemetry
- Anonymous user identifier

**With Privacy Mode:**
- Basic operational metrics (reduced data collection)
- Code content reportedly not collected/retained

## What Is NOT Collected

- With Privacy Mode: code content not retained (per documentation)
- Local file system contents beyond editor context
- Git credentials

## How to Fully Opt Out

1. **Enable Privacy Mode in the extension:**
   - Open VS Code Settings
   - Search for "CodeGeeX"
   - Enable Privacy Mode / disable data collection
2. **VS Code global telemetry:**
   ```json
   {
     "telemetry.telemetryLevel": "off"
   }
   ```
3. **Self-hosted model:** Use the open-source CodeGeeX model weights locally to avoid all server communication:
   - Download model from the GitHub repository
   - Run inference locally (requires significant GPU resources)

## Red Flags

- Telemetry data is sent to servers operated by Zhipu AI / Tsinghua University (China-based infrastructure)
- Completion content (code snippets) is collected by default unless Privacy Mode is explicitly enabled
- Data is governed by Chinese data protection laws, which may differ significantly from GDPR/CCPA
- The custom telemetry endpoint is not a well-known Western analytics provider, making independent verification of data handling practices more difficult
- The open-source repository (CodeGeeX model) is distinct from the CodeGeeX VS Code extension/service

## Evidence

- Model repository: https://github.com/THUDM/CodeGeeX
- VS Code extension: CodeGeeX extension in VS Code marketplace
- Telemetry endpoints visible in extension network traffic (pointing to Zhipu AI infrastructure)
- Developed by THUDM (Tsinghua University) and Zhipu AI

## Changelog

- 2026-03-23: Initial entry
