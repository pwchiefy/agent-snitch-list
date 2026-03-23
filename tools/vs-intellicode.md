# VS IntelliCode

| Field | Value |
|-------|-------|
| Website | https://visualstudio.microsoft.com/services/intellicode/ |
| Repository | Closed source |
| Category | AI Code Completion (IDE Extension) |
| Telemetry | Yes |
| Default State | ON (part of Visual Studio / VS Code telemetry) |
| Analytics Providers | Microsoft telemetry infrastructure |
| Disable Method | VS Code: `"telemetry.telemetryLevel": "off"` / Visual Studio: Help > Privacy Settings |
| Collects Code | No (user-defined code is not sent) |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage analytics (completion types, acceptance rates)
- Extension performance metrics
- Error and crash data
- VS Code / Visual Studio telemetry (standard Microsoft telemetry)
- OS, IDE version, extension version
- Language and file type metadata

## What Is NOT Collected

- **No user-defined code is sent to Microsoft** -- IntelliCode models are trained on public open-source code only
- No file contents, variable names, or custom code
- No prompts (IntelliCode is completion-based, not chat-based)
- No project names or file paths

## How to Fully Opt Out

1. **VS Code:** Add to settings: `"telemetry.telemetryLevel": "off"`
2. **Visual Studio:** Help > Privacy Settings > adjust telemetry level
3. **Note:** Disabling telemetry affects all VS Code/Visual Studio extensions, not just IntelliCode

## Red Flags

- Part of Microsoft's broader telemetry ecosystem
- Telemetry ON by default (inherited from IDE settings)
- Closed source -- cannot verify no-code-sent claims independently
- Disabling requires turning off all IDE telemetry (no IntelliCode-specific toggle)

## Evidence

- Website: https://visualstudio.microsoft.com/services/intellicode/
- Microsoft privacy statement: https://privacy.microsoft.com/privacystatement
- IntelliCode FAQ explicitly states no user code is collected
- Telemetry settings documented in VS Code and Visual Studio docs

## Changelog

- 2026-03-23: Initial entry
