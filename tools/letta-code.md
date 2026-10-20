# Letta Code

| Field | Value |
|-------|-------|
| Website | https://www.letta.com |
| Repository | https://github.com/letta-ai/letta-code |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom first-party (`/v1/metadata/telemetry` on api.letta.com or the configured Letta server) |
| Disable Method | `LETTA_CODE_TELEM=0` or `DO_NOT_TRACK=1` |
| Collects Code | No (not by design; see debug-log tail on errors) |
| Collects Prompts | No (input length and slash-command name only) |
| Last Verified | 2026-10-20 |

## What Is Collected

- `session_start`, `session_end`, `tool_usage`, `user_input`, `error`, reflection events
- User input metadata: length, whether it is a slash command and its name, message type, model ID
- Error details: error type and message, HTTP status, model, run ID, recent stream chunks, tail of local debug log
- Platform, version, server version, device ID

## What Is NOT Collected

- Full prompt text in `user_input` events (length only)

## How to Fully Opt Out

1. **Environment:** `LETTA_CODE_TELEM=0` (or `false`)
2. **Convention:** `DO_NOT_TRACK=1`

## Red Flags

- Telemetry ON by default
- Error events attach a tail of the local debug log and recent stream chunks, which can contain model output or tool output
- Opt-out is environment-variable only

## Notes

Apache-2.0. Telemetry goes to the Letta server the CLI is pointed at (Letta Cloud by default).

## Evidence

- https://github.com/letta-ai/letta-code/blob/e8073d4e475ab7f56e76f9aaeea81a7618a92575/src/telemetry/index.ts (lines 388-405, 780-822, 901-950)
- https://github.com/letta-ai/letta-code/blob/e8073d4e475ab7f56e76f9aaeea81a7618a92575/src/backend/api/metadata.ts
- https://github.com/letta-ai/letta-code/blob/e8073d4e475ab7f56e76f9aaeea81a7618a92575/src/auth/oauth.ts

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
