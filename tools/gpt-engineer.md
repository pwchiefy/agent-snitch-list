# GPT-Engineer

| Field | Value |
|-------|-------|
| Website | https://gptengineer.app |
| Repository | https://github.com/gpt-engineer-org/gpt-engineer |
| Category | AI Code Generation Agent |
| Telemetry | Yes |
| Default State | Opt-in |
| Analytics Providers | RudderStack |
| Disable Method | Decline consent prompt or set `COLLECT_LEARNINGS_OPT_IN=false` |
| Collects Code | Yes (if consented) |
| Collects Prompts | Yes (if consented) |
| Last Verified | 2026-03-23 |

## What Is Collected

When the user opts in via the consent prompt:

- Prompts/specifications provided to the tool
- Generated code and LLM responses
- Conversation logs (full prompt-response pairs)
- Session metadata (timestamps, model used)
- Project type and language information
- Error events and stack traces

When the user does NOT opt in:

- Nothing is collected

## What Is NOT Collected

- API keys or credentials
- File system contents outside the project scope
- Git credentials or repository URLs
- Personal identifying information (beyond anonymous session ID)

## How to Fully Opt Out

1. **Consent prompt:** When GPT-Engineer runs for the first time, it asks whether you consent to sharing data for improvement. Select "No."
2. **Environment variable:** Set `COLLECT_LEARNINGS_OPT_IN=false` before running.
3. **Config:** Ensure the learnings/consent file at `~/.gpt-engineer/consent` does not contain `true`.

## Red Flags

- If users opt in, full prompts and generated code are collected via RudderStack and sent to external infrastructure. This is significant for enterprise environments where prompts may contain proprietary context.
- The consent mechanism is per-user, not per-project, so opting in once applies to all subsequent projects.

## Evidence

- RudderStack integration: `gpt_engineer/core/telemetry.py`
- Consent logic: `gpt_engineer/core/consent.py`
- Learning collection: `gpt_engineer/core/learning.py`
- RudderStack write key in source code
- Repository: https://github.com/gpt-engineer-org/gpt-engineer

## Changelog

- 2026-03-23: Initial entry
