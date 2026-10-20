# Trae (ByteDance)

| Field | Value |
|-------|-------|
| Website | https://trae.ai |
| Repository | Closed source |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | ByteDance internal infrastructure (custom endpoints) |
| Disable Method | Enable Privacy Mode (stops chat data use for analytics/training; Trae says some telemetry continues for functionality and performance). The IDE telemetry toggle only covers VS Code-framework telemetry. Network-level blocking for anything else |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Chat interactions and related code snippets (used for analytics, product improvement and model training unless Privacy Mode is on, per Trae)
- Codebase files uploaded temporarily to compute embeddings (plaintext deleted afterwards, per Trae)
- Telemetry for functionality and performance monitoring (continues in Privacy Mode, per Trae)
- Independent analysis: system information, machine and user IDs, usage patterns, performance metrics, project information; ~500 calls / ~26 MB in ~7 minutes

## What Is NOT Collected

- In Privacy Mode, Trae says chat data is not used for analytics, product improvement or training

## How to Fully Opt Out

1. **Privacy Mode:** turn on in settings (limits chat-data use; some telemetry continues)
2. **Telemetry toggle:** only affects VS Code-framework telemetry (per ByteDance's reworded setting)
3. **Network-level blocking:** needed for anything else
4. **Do not use the tool** if this is unacceptable

## Red Flags

- Telemetry continued after the settings opt-out in independent testing; ByteDance then reworded the toggle to say it only covers VS Code-framework telemetry
- Chat data and code snippets may be used for model training unless Privacy Mode is enabled
- Some telemetry continues even in Privacy Mode, per Trae's own blog
- Very high call volume (~500 calls in ~7 minutes) reported
- ByteDance ownership; data stored in the US, Singapore and Malaysia
- Closed source

## Notes

collectsCode/collectsPrompts changed from Unknown to Yes based on Trae's own data-practices blog. The 5-year retention claim from the 2026-03-23 entry could not be re-verified (privacy policy page renders only via JavaScript).

## Evidence

- Trae data practices blog: https://www.trae.ai/blog/product_thought_0819
- The Register (2025-07-28): https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/
- Unit 221B analysis: https://blog.unit221b.com/dont-read-this-blog/unveiling-trae-bytedances-ai-ide-and-its-extensive-data-collection-system
- Privacy policy: https://www.trae.ai/privacy-policy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Added Privacy Mode and the toggle-scope clarification; collectsCode/Prompts set to Yes from Trae's own blog; 5-year retention not re-verified.
