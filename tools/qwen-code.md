# Qwen Code

| Field | Value |
|-------|-------|
| Website | https://github.com/QwenLM/qwen-code |
| Repository | https://github.com/QwenLM/qwen-code |
| Category | AI Coding Agent (CLI) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Alibaba Cloud Real User Monitoring (`gb4w8c3ygj-default-sea.rum.aliyuncs.com`) |
| Disable Method | Set `privacy.usageStatisticsEnabled: false` in settings or `QWEN_USAGE_STATISTICS_ENABLED=false` |
| Collects Code | No |
| Collects Prompts | No (prompt length and ID only) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Session start/end, new-prompt events (prompt ID and length), tool calls, API request/response/error events
- OS type and release, CLI version, channel/source
- Auth type and model name
- User ID derived from a local installation ID (`user-<installationId>`), session ID
- For OpenAI-compatible API-key auth: the configured `base_url`

## What Is NOT Collected

- Prompt text and model responses (fields are IDs and lengths)
- File contents

## How to Fully Opt Out

1. **Settings:** set `privacy.usageStatisticsEnabled` to `false`
2. **Environment:** `QWEN_USAGE_STATISTICS_ENABLED=false` (takes precedence over settings)
3. **Network block:** block `*.rum.aliyuncs.com`

## Red Flags

- Usage statistics ON by default for every auth type
- Docs say API-key users get no additional collection by Qwen Code, but the RUM payload is built regardless of auth type and includes the custom OpenAI-compatible `base_url`
- Third-party-cloud endpoint (Alibaba Cloud RUM) hard-coded in source
- Fork of Gemini CLI; inherits a similar default-on usage statistics model

## Notes

Apache-2.0 fork of Gemini CLI. Separate OpenTelemetry export is user-configured.

## Evidence

- https://github.com/QwenLM/qwen-code/blob/ef155d8398c5709a91288a1682fd70aa5a24131c/packages/core/src/telemetry/qwen-logger/qwen-logger.ts (hostname line 82; payload lines 320-360)
- https://github.com/QwenLM/qwen-code/blob/ef155d8398c5709a91288a1682fd70aa5a24131c/packages/core/src/telemetry/config.ts (env -> settings -> default true, lines 37-52)
- https://github.com/QwenLM/qwen-code/blob/ef155d8398c5709a91288a1682fd70aa5a24131c/docs/users/support/tos-privacy.md (Usage Statistics and Telemetry section)
- https://github.com/QwenLM/qwen-code/blob/ef155d8398c5709a91288a1682fd70aa5a24131c/docs/users/configuration/settings.md (`privacy.usageStatisticsEnabled` default `true`)
- Privacy / data documentation: https://github.com/QwenLM/qwen-code/blob/main/docs/users/support/tos-privacy.md

## Changelog

- 2026-10-20: Initial entry (verified against source/docs listed above)
