# Supermaven

| Field | Value |
|-------|-------|
| Website | https://supermaven.com/ |
| Repository | https://github.com/supermaven-inc/supermaven-nvim (Neovim client, partial) |
| Category | AI Code Completion |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (Supermaven cloud) |
| Disable Method | No documented opt-out for telemetry |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-03-23 |

## What Is Collected

- Code context surrounding cursor for completions (sent to Supermaven servers)
- File content for context window processing
- Usage metrics and completion acceptance rates
- Editor metadata (language, file type)
- Account and session data
- **7-day code retention** -- code snippets are retained for up to 7 days for model improvement and debugging

## What Is NOT Collected

- Supermaven states code is not used for training third-party models
- Pro/enterprise plans may have different (shorter) retention policies

## How to Fully Opt Out

There is no documented way to disable telemetry while keeping the extension functional. Code is sent to servers as part of core functionality.

1. **Only option:** Uninstall the extension to stop all data collection
2. Enterprise plans may offer on-premises or zero-retention options

## Red Flags

- **7-day code retention** -- your code is stored on Supermaven servers for up to a week
- No opt-out for code collection (it is the core feature)
- Server-side binary (closed source) handles all completions
- Neovim client is open source but the backend/model server is not
- No independent security audit published
- Retention policy details are sparse

## Evidence

- Privacy policy: https://supermaven.com/privacy
- Neovim client: https://github.com/supermaven-inc/supermaven-nvim
- 7-day retention mentioned in documentation and privacy policy
- Code sent to `api.supermaven.com` observable via network inspection

## Changelog

- 2026-03-23: Initial entry
