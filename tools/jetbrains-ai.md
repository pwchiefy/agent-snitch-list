# JetBrains AI

| Field | Value |
|-------|-------|
| Website | https://www.jetbrains.com/ai/ |
| Repository | Closed source |
| Category | AI Code Assistant (IDE Plugin) |
| Telemetry | Yes |
| Default State | ON (behavioral analytics); code sharing is opt-in only |
| Analytics Providers | JetBrains analytics infrastructure |
| Disable Method | Settings > Data Sharing; AI code sharing is opt-in |
| Collects Code | Opt-in only (explicit consent required) |
| Collects Prompts | Yes (sent to JetBrains/LLM provider for processing) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Feature usage and interaction patterns (behavioral analytics)
- AI completion acceptance/rejection rates
- IDE performance metrics
- Error and exception data
- Plugin version and IDE version
- OS and environment info
- When AI features are used: prompts sent to JetBrains cloud or configured LLM provider

## What Is NOT Collected

- Code is not sent for analytics unless explicitly opted in
- User-defined code is not used for model training without opt-in consent
- JetBrains has a clear separation between behavioral telemetry and code sharing

## How to Fully Opt Out

1. **Behavioral analytics:** Settings > Appearance & Behavior > System Settings > Data Sharing > uncheck all boxes
2. **AI code sharing:** This is opt-in only -- do not enable it
3. **AI features entirely:** Disable the JetBrains AI plugin
4. **IDE telemetry:** Separate from AI -- also configurable in Data Sharing settings

## Red Flags

- Behavioral telemetry is ON by default (standard for JetBrains products)
- AI prompts are processed server-side (necessary for cloud LLM features)
- Closed source plugin -- cannot independently verify data handling
- JetBrains account required for AI features

## Evidence

- Website: https://www.jetbrains.com/ai/
- Privacy policy: https://www.jetbrains.com/legal/docs/privacy/privacy/
- Data sharing settings documented in IDE preferences
- AI feature data handling documented in JetBrains AI terms

## Changelog

- 2026-03-23: Initial entry
