# Fixie / AI.JSX

| Field | Value |
|-------|-------|
| Website | https://fixie.ai/ |
| Repository | https://github.com/fixie-ai/ai-jsx |
| Category | AI Application Framework |
| Telemetry | Conditional (platform only) |
| Default State | OFF (standalone); ON (Fixie platform) |
| Analytics Providers | Custom (Fixie platform only) |
| Disable Method | N/A for standalone use |
| Collects Code | No |
| Collects Prompts | No (standalone); Yes (Fixie platform) |
| Last Verified | 2026-03-23 |

## What Is Collected

- **Standalone AI.JSX:** Nothing. The framework has no telemetry when used independently.
- **Fixie Platform:** When deployed on Fixie's hosted platform, usage analytics, execution logs, and agent interactions are collected for platform operations.

## What Is NOT Collected

- Standalone library has no phone-home behavior
- No analytics dependencies in the framework

## How to Fully Opt Out

No action required for standalone use. To avoid platform telemetry, do not deploy on Fixie's hosted platform.

## Red Flags

- Fixie as a company has pivoted/wound down -- the repository and platform may be unmaintained
- Platform mode collects interaction data as expected for a hosted service

## Evidence

- Repository: https://github.com/fixie-ai/ai-jsx
- No analytics dependencies in standalone package
- Platform telemetry only applies to Fixie hosted deployment

## Changelog

- 2026-03-23: Initial entry
