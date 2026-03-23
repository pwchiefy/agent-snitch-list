# Roo Code

| Field | Value |
|-------|-------|
| Website | https://roocode.com |
| Repository | https://github.com/RooCodeInc/Roo-Code |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Settings toggle (but see Red Flags regarding bug #11602) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage events (commands invoked, mode selections)
- Extension version and IDE version
- OS and platform information
- Session start/end events
- Error events (non-sensitive metadata)
- Model provider type (not API keys)
- Anonymous machine identifier
- Task completion/abandonment events

## What Is NOT Collected

- Source code or file contents
- Prompts sent to LLMs
- LLM responses
- File names or paths
- API keys or credentials
- Repository URLs or names

## How to Fully Opt Out

1. **VS Code extension settings:**
   - Open VS Code Settings
   - Search for "Roo Code"
   - Disable the telemetry toggle
2. **settings.json:**
   ```json
   {
     "roo-code.telemetry.enabled": false
   }
   ```
3. **VS Code global telemetry:**
   ```json
   {
     "telemetry.telemetryLevel": "off"
   }
   ```

**WARNING:** See Red Flags about bug #11602 potentially bypassing opt-out.

## Red Flags

- **Bug #11602 may bypass opt-out:** A reported bug (GitHub issue #11602) indicates that telemetry data may still be sent even after the user has disabled telemetry in settings. This has not been confirmed as fixed; check the issue status before relying on the opt-out toggle.
- Telemetry is ON by default with no first-run consent prompt
- PostHog is a third-party analytics platform; data is processed on PostHog's infrastructure
- Roo Code is a fork/derivative of Cline (which has zero telemetry), meaning telemetry was intentionally added

## Evidence

- PostHog integration in the extension source code
- Bug report: https://github.com/RooCodeInc/Roo-Code/issues/11602 (telemetry bypass)
- Telemetry toggle in extension settings
- PostHog project key in source code
- Repository: https://github.com/RooCodeInc/Roo-Code
- Comparison: Cline (parent project) has zero telemetry; Roo Code added PostHog

## Changelog

- 2026-03-23: Initial entry
