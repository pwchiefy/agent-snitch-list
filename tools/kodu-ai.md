# Kodu AI

| Field | Value |
|-------|-------|
| Website | https://kodu.ai |
| Repository | https://github.com/kodu-ai/kodu-coder |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Amplitude |
| Disable Method | No documented opt-out |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage events (commands, interactions)
- Extension version and IDE version
- OS and platform information
- Session events (start, end, duration)
- Error events
- Model provider and model name used
- Anonymous user identifier
- Task type and mode selections
- **External IP address:** The extension fetches the user's external/public IP address

## What Is NOT Collected

- Source code or file contents
- Prompts sent to LLMs
- LLM responses
- File names or paths (beyond what may appear in errors)
- API keys or credentials

## How to Fully Opt Out

There is no documented opt-out mechanism for Kodu AI's telemetry.

Possible workarounds:
1. **Network-level blocking:**
   - Block Amplitude endpoints: `*.amplitude.com`, `api.amplitude.com`, `api2.amplitude.com`
   - Block IP lookup services used by the extension
2. **Disable the extension** when not actively needed
3. **Source code modification:** Fork the repository and remove the Amplitude integration

## Red Flags

- **No documented opt-out:** Unlike most tools in this category, there is no setting, environment variable, or configuration option to disable telemetry
- **Fetches external IP address:** The extension makes a network call to determine the user's public IP address, which is unusual and concerning for a coding tool. This goes beyond standard anonymous telemetry.
- **Amplitude is a commercial analytics platform:** Data is processed on Amplitude's infrastructure, adding a third party to the data flow
- Telemetry is ON by default with no consent prompt
- The combination of external IP collection + Amplitude analytics means Kodu has the ability to correlate usage data with network location

## Evidence

- Amplitude SDK integration in extension source code
- External IP fetching code in the extension (network call to IP lookup service)
- Amplitude API key embedded in source
- No telemetry opt-out settings found in `package.json` contribution points or extension settings schema
- Repository: https://github.com/kodu-ai/kodu-coder

## Changelog

- 2026-03-23: Initial entry
