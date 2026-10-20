# GPT Pilot

| Field | Value |
|-------|-------|
| Website | https://github.com/Pythagora-io/gpt-pilot |
| Repository | https://github.com/Pythagora-io/gpt-pilot |
| Category | AI Code Generation Agent |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (api.pythagora.io/telemetry) |
| Disable Method | `telemetry.enabled: false` in config or `DISABLE_TELEMETRY` env var |
| Collects Code | No |
| Collects Prompts | Yes (app description) |
| Last Verified | 2026-10-20 |

## What Is Collected

- Platform, Python version, GPT Pilot version, LLM provider/model
- Initial and updated app description prompts
- Architecture/templates, app ID
- Counts of LLM requests, tokens, steps, commands, files, lines; elapsed time
- Random telemetry UUID

**Security incident:** a malicious commit (`065ee8eb`, 2025-08-24, disguised as a revert) hid a credential-stealing loader in `core/telemetry/` (`_hooks.py`, `_runtime.bin`). It was publicly reported 2026-06-08 and removed 2026-06-11. Per the README, anyone who ran GPT Pilot from source in that window should rotate credentials.

## What Is NOT Collected

- Source code files (not in the telemetry payload)

## How to Fully Opt Out

1. **Config:** set `telemetry.enabled` to `false` in the GPT Pilot config file
2. **Environment:** set `DISABLE_TELEMETRY=1`
3. **If you ran it between 2025-08 and 2026-06-11:** follow the README security notice (rotate credentials, check for indicators of compromise)

## Red Flags

- Security incident: a malicious commit (2025-08-24) hid a credential-stealing loader in core/telemetry/ until its removal on 2026-06-11; anyone who ran GPT Pilot from source in that window should rotate credentials (per project README)
- Telemetry ON by default with no first-run consent prompt
- App description prompts are sent to Pythagora servers
- Project is no longer actively maintained

**Notes:** The README now carries a security notice: commit 065ee8eb added core/telemetry/_hooks.py and _runtime.bin (a Shai-Hulud-class worm) disguised as telemetry; removed 2026-06-11 (PR #1183). The project is no longer actively maintained.

## Evidence

- Telemetry defaults: https://github.com/Pythagora-io/gpt-pilot/blob/9b763fdaf0020c7d8abacc7b58b2b09e57494623/core/config/user_settings.py
- Payload and DISABLE_TELEMETRY: core/telemetry/__init__.py at the same commit
- Malicious commit: https://github.com/Pythagora-io/gpt-pilot/commit/065ee8ebee7385cb644fd1608587a18edb91f4fb
- Removal: https://github.com/Pythagora-io/gpt-pilot/commit/8c174942b372efe4cf7ee2e977b7f2f0a2bc4bbe
- Pythagora privacy policy: https://www.pythagora.ai/privacy

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Added security incident (malicious code hidden in core/telemetry/ 2025-08-24 to 2026-06-11) and unmaintained status; documented endpoint, payload fields and both opt-outs.
