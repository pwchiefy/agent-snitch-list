# Pieces

| Field | Value |
|-------|-------|
| Website | https://pieces.app/ |
| Repository | Closed source |
| Category | AI Code Snippets / Copilot |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Segment, Sentry, Satismeter |
| Disable Method | App privacy settings > disable usage analytics and diagnostics |
| Collects Code | Yes (captured content sent to cloud LLM after redaction) |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

- Usage analytics and diagnostics: feature usage, performance metrics, crash reports (Segment, Sentry)
- Device information: hardware model, OS, unique device identifiers, browser type; cookies
- Analytics may include limited content such as your prompts (per policy)
- Optional NPS/feedback surveys (Satismeter)
- To form memories and answer chats, captured text/visual/audio-derived content (which can include code you work with) is sent to a cloud LLM (default routed via OpenRouter, or your BYOK model) after on-device redaction; Pieces says it is not retained

## What Is NOT Collected

- Memories are stored locally by default (no cloud backup unless enabled)
- Pieces states it never uses your content to train models

## How to Fully Opt Out

1. Disable usage analytics and diagnostics in the app's privacy settings (Segment collection can be turned off).
2. Leave optional cloud backup off; use a BYOK/local model where available.

## Red Flags

- Closed source; claims cannot be independently verified.
- Analytics may contain prompts.
- Default cloud LLM processing of captured content; redaction is acknowledged to be imperfect.

## Evidence

- Privacy policy (effective 2026-07-01): https://pieces.app/legal/privacy
- VS Code Marketplace listing MeshIntelligentTechnologiesInc.pieces-vscode (v3.0.1, 2025-06-15)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified against July 2026 privacy policy: named Segment/Sentry/Satismeter, noted analytics may include prompts and default cloud LLM processing of captured content; updated privacy URL.
