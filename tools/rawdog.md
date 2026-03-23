# Rawdog

| Field | Value |
|-------|-------|
| Website | https://github.com/AbanteAI/rawdog |
| Repository | https://github.com/AbanteAI/rawdog |
| Category | CLI AI Assistant |
| Telemetry | No |
| Default State | OFF |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing. Rawdog is a minimal CLI tool that generates and executes Python scripts via LLM with no telemetry.

## What Is NOT Collected

- No usage analytics
- No generated scripts
- No prompts or conversations
- No crash reports
- No user identifiers

## How to Fully Opt Out

No action required. There is no telemetry to disable.

## Red Flags

- **Arbitrary code execution by design.** Rawdog executes LLM-generated Python directly on your machine without sandboxing. This is a security concern unrelated to telemetry.

## Evidence

- Repository: https://github.com/AbanteAI/rawdog
- No analytics dependencies in pyproject.toml
- No outbound network calls beyond LLM API

## Changelog

- 2026-03-23: Initial entry
