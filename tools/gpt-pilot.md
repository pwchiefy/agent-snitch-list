# GPT Pilot

| Field | Value |
|-------|-------|
| Website | https://github.com/Pythagora-io/gpt-pilot |
| Repository | https://github.com/Pythagora-io/gpt-pilot |
| Category | AI Code Generation Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (phone-home to Pythagora servers) |
| Disable Method | Configuration setting or environment variable |
| Collects Code | No |
| Collects Prompts | Partial (app description collected) |
| Last Verified | 2026-03-23 |

## What Is Collected

- App description/specification text provided by the user
- Project type and technology stack chosen
- Step completion status and progress
- Error types and exceptions
- Session metadata
- LLM token usage statistics
- Framework version

## What Is NOT Collected

- No generated source code
- No file contents
- No API keys
- No full prompt text (only app description)

## How to Fully Opt Out

1. **Configuration:** Set telemetry to disabled in the configuration file
2. **Network block:** Block outbound connections to Pythagora telemetry endpoints

## Red Flags

- **App description is collected** -- the high-level description of what you are building is sent to Pythagora servers
- Telemetry ON by default with no first-run consent prompt
- Custom phone-home endpoint (not a well-known analytics provider)
- App descriptions could reveal confidential project details

## Evidence

- Repository: https://github.com/Pythagora-io/gpt-pilot
- Telemetry module in source code
- Phone-home to Pythagora API endpoints observable in source
- App description included in telemetry payloads

## Changelog

- 2026-03-23: Initial entry
