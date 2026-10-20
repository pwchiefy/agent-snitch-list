# Melty

| Field | Value |
|-------|-------|
| Website | https://melty.sh/ |
| Repository | https://github.com/meltylabs/melty |
| Category | AI Code Editor (VS Code Fork) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | PostHog |
| Disable Method | None (network block only) |
| Collects Code | Yes (in error events) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

PostHog (`posthog-js`, hardcoded project key) is initialized in both the extension host (`us.i.posthog.com`) and the webview:
- `chatmessage_sent`: the full text of each chat message and the task ID
- `melty_errored` (diff application failures): file path, matched/non-matched text, search/replace blocks and new file content
- `melty_errored` (RPC errors): error message and RPC parameters

## What Is NOT Collected

- No separate crash reporter found

## How to Fully Opt Out

No in-app setting. Block `us.i.posthog.com` and `app.posthog.com` at the network level, or remove the bundled extension.

## Red Flags

- Telemetry ON with no opt-out setting
- Chat message text sent to PostHog on every message
- Diff-application error events include source file content
- PostHog project key hardcoded in source

**Notes:** Corrected 2026-10-20: the original entry reported no telemetry, but the bundled Melty extension ('spectacular') initializes posthog-js in both the extension host and webview. The repo has had no commits since 2024-11-14. Users provide their own API keys for LLM access.

## Evidence

- Extension init: https://github.com/meltylabs/melty/blob/3b7046ff22539168ae480918445ad704bdd4d5c4/extensions/spectacular/src/extension.ts
- Webview init: extensions/spectacular/webview-ui/src/index.tsx
- Chat message capture: extensions/spectacular/webview-ui/src/components/ConversationView.tsx
- Diff error capture: extensions/spectacular/src/backend/diffApplication/diffApplicatorXml.ts

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Corrected: original entry reported no telemetry, but the bundled extension sends chat message text and diff-error file content to PostHog with no opt-out. Telemetry -> Yes, Default -> ON; repo inactive since 2024-11-14.
