# Open Interpreter

| Field | Value |
|-------|-------|
| Website | https://openinterpreter.com/ |
| Repository | https://github.com/OpenInterpreter/open-interpreter |
| Category | CLI AI Assistant / Code Execution |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | `--disable_telemetry` flag or `DISABLE_TELEMETRY=true` env var |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Interaction mode (chat vs script)
- Message type (user/assistant/system)
- Exception types and error messages
- Version number
- OS and Python version
- Model name being used
- Language of code blocks executed

## What Is NOT Collected

- No actual code content
- No prompt text or conversation content
- No file contents or paths
- No API keys
- No personally identifiable information

## How to Fully Opt Out

1. **CLI flag:** Run with `--disable_telemetry`
2. **Environment variable:** `export DISABLE_TELEMETRY=true`
3. **In Python:**
   ```python
   interpreter.anonymized_telemetry = False
   ```
4. **Network block:** Block outbound connections to `app.posthog.com`

## Red Flags

- Telemetry is ON by default with no first-run prompt
- PostHog is a third-party analytics platform (data leaves your machine)

## Evidence

- Repository: https://github.com/OpenInterpreter/open-interpreter
- Telemetry module: `interpreter/core/utils/telemetry.py`
- PostHog dependency in requirements
- CLI flag documented in README and `--help`

## Changelog

- 2026-03-23: Initial entry
