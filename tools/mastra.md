# Mastra (and Mastra Code)

| Field | Value |
|-------|-------|
| Website | https://mastra.ai |
| Repository | https://github.com/mastra-ai/mastra |
| Category | Agent Framework (TypeScript) and Coding Agent (Mastra Code) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | `MASTRA_TELEMETRY_DISABLED=1` |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- CLI: OS, Mastra version, Node.js version, command usage
- Server: `mastra_model_token_usage_v2` per provider/model every 15 minutes and at shutdown (token counts, window, command, NODE_ENV)
- Server: startup feature snapshot (component counts, feature flags, storage backend category)
- `project_id` (truncated SHA-256 of project root path); `project_id2` (unhashed `mp_<uuid>` Platform ID or truncated hash of normalized git origin)
- Studio UI: page views and UI interactions
- Mastra Code: session start, prompt submission (not text), thread/model changes, slash commands; OS, version, Node, arch, hostname-derived distinct ID

## What Is NOT Collected

- Prompts, responses, message content (per docs)
- Component names or IDs
- Raw repository URLs or credentials

## How to Fully Opt Out

1. **Environment:** `MASTRA_TELEMETRY_DISABLED=1` (covers CLI, server, Studio and Mastra Code; when disabled the server skips git remote lookup)

## Red Flags

- Telemetry ON by default, including in production servers built with `mastra build`, not just the CLI
- Server events are not anonymous by Mastra's own description: project IDs can be correlated with known repositories via the hashed git remote
- Token usage (counts only, no content) reported every 15 minutes from running servers that have observability configured

## Notes

Unusually thorough first-party documentation of exactly what is sent, with source links. Mastra Code (coding agent TUI, `npx mastracode`) uses the same opt-out.

## Evidence

- https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/packages/core/src/telemetry/posthog.ts
- https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/packages/core/src/telemetry/model-usage-telemetry.ts
- https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/packages/cli/src/analytics/index.ts
- https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/docs/src/content/en/reference/cli/mastra.mdx (Telemetry section)
- https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/docs/src/mastra-code/configuration.mdx (Telemetry section)
- Privacy / data documentation: https://github.com/mastra-ai/mastra/blob/018a2193014c6693ecc386259797513b1435a1e3/docs/src/content/en/reference/cli/mastra.mdx

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
