# Continue

| Field | Value |
|-------|-------|
| Website | https://continue.dev |
| Repository | https://github.com/continuedev/continue |
| Category | AI Coding Assistant (IDE Extension) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog, Sentry |
| Disable Method | Set `allowAnonymousTelemetry: false` in `config.json` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Anonymous usage events (feature usage, commands invoked)
- Error reports and stack traces (via Sentry)
- Extension version and IDE version
- OS and platform information
- Model provider type (not API keys)
- Session duration and interaction counts
- Anonymized machine ID (VS Code machine ID hash)
- Autocomplete acceptance/rejection rates

## What Is NOT Collected

- Source code or file contents
- Prompts sent to LLMs
- LLM responses
- File names or repository information
- API keys or credentials
- Personal identifying information

## How to Fully Opt Out

1. **Via config file:** Edit `~/.continue/config.json` and set:
   ```json
   {
     "allowAnonymousTelemetry": false
   }
   ```
2. **Via IDE settings:** In VS Code settings, search for "Continue" and uncheck "Allow Anonymous Telemetry"
3. **Via config.ts** (if using TypeScript config):
   ```typescript
   export function modifyConfig(config: Config): Config {
     config.allowAnonymousTelemetry = false;
     return config;
   }
   ```

## Red Flags

- Telemetry is ON by default; users must actively opt out
- Sentry error reporting may capture stack traces that include file path fragments

## Evidence

- Telemetry implementation: `core/util/posthog.ts`
- Sentry integration: `extensions/vscode/src/activation/environmentSetup.ts`
- Configuration schema: `core/config/types.ts` (`allowAnonymousTelemetry` field)
- Privacy documentation: https://docs.continue.dev/telemetry
- PostHog project key in source: `core/util/posthog.ts`

## Changelog

- 2026-03-23: Initial entry
