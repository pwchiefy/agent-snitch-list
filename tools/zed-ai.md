# Zed AI

| Field | Value |
|-------|-------|
| Website | https://zed.dev/ |
| Repository | https://github.com/zed-industries/zed |
| Category | AI-Powered Code Editor |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry, Snowflake, Amplitude |
| Disable Method | Settings JSON: `"telemetry": { "diagnostics": false, "metrics": false }` |
| Collects Code | No |
| Collects Prompts | No (AI interactions go to LLM provider directly) |
| Last Verified | 2026-03-23 |

## What Is Collected

- File extensions opened (not filenames or content)
- Features used and interaction patterns (via Amplitude)
- Crash reports and diagnostics (via Sentry)
- Editor performance metrics
- OS, version, and hardware info
- Data warehoused in Snowflake for analysis
- Anonymous user identifiers

## What Is NOT Collected

- No file contents or code
- No filenames or paths (only extensions)
- No AI prompt content (prompts go directly to configured LLM provider)
- No keystroke logging
- No project names

## How to Fully Opt Out

1. Open Zed settings (Cmd+,)
2. Add to settings JSON:
   ```json
   {
     "telemetry": {
       "diagnostics": false,
       "metrics": false
     }
   }
   ```
3. **Network block (optional):** Block connections to `o49725.ingest.sentry.io`, Amplitude, and Snowflake endpoints

## Red Flags

- Three separate analytics providers (Sentry + Snowflake + Amplitude) means data flows to multiple third parties
- Telemetry ON by default
- Amplitude is a product analytics platform focused on user behavior tracking
- File extensions could reveal technology stack information

## Evidence

- Repository: https://github.com/zed-industries/zed
- Telemetry code in `crates/telemetry/` directory
- Settings documentation: https://zed.dev/docs/telemetry
- Sentry, Amplitude dependencies visible in source
- Snowflake used for data warehousing (referenced in telemetry docs)

## Changelog

- 2026-03-23: Initial entry
