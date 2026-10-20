# Supermaven

| Field | Value |
|-------|-------|
| Website | https://supermaven.com/ |
| Repository | https://github.com/supermaven-inc/supermaven-nvim (Neovim client, partial) |
| Category | AI Code Completion |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom (Supermaven cloud) |
| Disable Method | No documented opt-out |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Code context around the cursor and file content sent to Supermaven servers for completions
- Usage information: features used, time, frequency and duration of activity
- Device information: hardware model, OS, unique device identifiers, browser type; cookies
- Account and session data
- **7-day retention** of Code Data (Code Policy)

## What Is NOT Collected

- Supermaven's Code Policy states Code Data is not used to develop its products and services

## How to Fully Opt Out

1. No documented telemetry opt-out; code transmission is the core function.
2. **Only option:** uninstall the extension/plugin. The product was sunset in November 2025.

## Red Flags

- 7-day code retention.
- No opt-out.
- Closed-source agent binary performs all completions.
- Sunset product: no new development or announced security maintenance.
- No independent audit.

## Evidence

- Code Policy: https://supermaven.com/code-policy
- Privacy Policy: https://supermaven.com/privacy-policy
- Sunset announcement (2025-11-21): https://supermaven.com/blog/sunsetting-supermaven
- Neovim client: https://github.com/supermaven-inc/supermaven-nvim/tree/07d20fce48a5629686aefb0a7cd4b25e33947d50 (last commit 2024-10-07)
- VS Code Marketplace: supermaven.supermaven v1.1.12 (last updated 2024-09-18)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Product sunset noted (2025-11-21, post-Cursor acquisition). Re-verified 7-day retention via Code Policy; privacy URL updated; added usage/device data from Privacy Policy.
