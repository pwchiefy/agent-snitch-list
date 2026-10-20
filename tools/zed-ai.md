# Zed AI

| Field | Value |
|-------|-------|
| Website | https://zed.dev/ |
| Repository | https://github.com/zed-industries/zed |
| Category | AI-Powered Code Editor |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Sentry, Snowflake, Amplitude, Hex |
| Disable Method | Settings JSON: `"telemetry": { "diagnostics": false, "metrics": false }` |
| Collects Code | No (telemetry); AI requests send code to the chosen provider |
| Collects Prompts | No (telemetry); Zed-hosted AI routes prompts via Zed |
| Last Verified | 2026-10-20 |

## What Is Collected

**Diagnostics (default on):**
- Crash reports: minidump + debug metadata, sent on the next launch (Sentry; stored in Snowflake)

**Metrics (default on):**
- File extensions of opened files
- Features and tools used
- Project statistics (e.g., number of files)
- Frameworks detected in your projects
- Tied to a random telemetry ID; may be linked to your email if you are signed in
- Sent every 5 minutes or when 50 events accumulate; analyzed with Hex and Amplitude on top of Snowflake

**Server-side (hosted AI / collaboration):**
- Metadata for rate limiting and billing (e.g., token usage)

## What Is NOT Collected

- Code contents in telemetry (per Zed docs)
- Prompts/code retained for Zed-hosted models, unless you share feedback or opt in to Edit Prediction training data (per Zed AI privacy docs)

## How to Fully Opt Out

1. **Disable telemetry** in settings:
   ```json
   "telemetry": {
     "diagnostics": false,
     "metrics": false
   }
   ```
2. **Audit what was sent:** `zed: open telemetry log` (Help > View Telemetry Log)
3. **AI:** use your own API keys or local models to avoid routing prompts through Zed-hosted models
4. **Zed Business:** admins can enforce a no-sharing policy for training data and feedback

## Red Flags

- Diagnostics and metrics telemetry ON by default
- Usage data may be linked to your email address when signed in
- Data flows to several services (Sentry, Snowflake; Hex and Amplitude used for analysis)
- File extensions and detected frameworks can reveal technology stack

**Notes:** Zed provides an in-app telemetry log (Help > View Telemetry Log). AI request path depends on configuration: Zed-hosted models are routed through Zed to providers under no-training/zero-retention agreements (with provider safety-retention exceptions); BYO API keys, local models and external agents go to the configured provider. Zed states it does not retain prompts or code unless you share feedback or opt into Edit Prediction training data collection.

## Evidence

- Default settings: https://github.com/zed-industries/zed/blob/92e8e2b8a066c6a592fa533d911bb197f3b2821a/assets/settings/default.json
- Telemetry docs: https://zed.dev/docs/telemetry (source: docs/src/telemetry.md at the same commit)
- Event types: crates/telemetry_events in https://github.com/zed-industries/zed
- AI privacy: https://zed.dev/docs/ai/privacy-and-security

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified defaults and docs at current main; added Hex, email linkage, batching details and telemetry log; corrected note on AI request paths (Zed-hosted models route through Zed).
