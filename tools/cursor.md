# Cursor

| Field | Value |
|-------|-------|
| Website | https://cursor.com |
| Repository | Closed source |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | Enable "Privacy Mode" in settings |
| Collects Code | Yes (unless Privacy Mode is enabled) |
| Collects Prompts | Yes (unless Privacy Mode is enabled) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Without Privacy Mode (default):**
- Code context sent to Cursor servers for completions and chat
- Prompts and chat messages
- LLM responses
- Telemetry events (feature usage, commands, session data) via PostHog
- Editor state and interaction patterns
- File types and language information
- Error reports
- OS, platform, and editor version
- Machine identifier

**With Privacy Mode enabled:**
- Cursor states that code is not stored on their servers
- Code is still sent to LLM providers for processing but not retained
- Basic telemetry events may still be sent via PostHog (see Red Flags)

## What Is NOT Collected

- With Privacy Mode: Cursor claims code is not stored server-side
- Git credentials
- SSH keys

## How to Fully Opt Out

1. **Enable Privacy Mode:**
   - Open Cursor Settings (not VS Code settings)
   - Navigate to General > Privacy Mode
   - Toggle ON
   - Or set via settings: `"cursor.general.privacyMode": true`
2. **Disable VS Code telemetry** (inherited from VS Code base):
   ```json
   {
     "telemetry.telemetryLevel": "off"
   }
   ```
3. **Network-level blocking** (for additional assurance):
   - Block PostHog endpoints: `*.posthog.com`, `app.posthog.com`, `us.posthog.com`
   - Note: Blocking Cursor's own endpoints will break functionality

## Red Flags

- **PostHog data leaks reported:** Community reports indicate that PostHog telemetry may transmit data even when Privacy Mode is enabled. PostHog events have been observed containing metadata that could be considered sensitive.
- Privacy Mode is OFF by default; users must actively enable it
- Closed source: telemetry behavior cannot be independently verified through source code review
- As a VS Code fork, Cursor inherits VS Code's telemetry infrastructure in addition to its own PostHog integration
- The distinction between "not stored" and "not sent" is important: code is still transmitted to servers for processing, even in Privacy Mode
- Business tier offers stronger contractual guarantees than individual plans
- PostHog is a third-party analytics platform; Cursor's telemetry data is processed by PostHog's infrastructure

## Evidence

- Cursor Privacy Policy: https://cursor.com/privacy
- Community reports of PostHog data transmission in Privacy Mode (GitHub discussions, forums)
- PostHog integration visible through network traffic analysis
- Privacy Mode documentation: https://cursor.com/privacy
- Cursor Terms of Service: https://cursor.com/terms

## Changelog

- 2026-03-23: Initial entry
