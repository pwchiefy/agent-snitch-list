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
| Last Verified | 2026-10-20 |

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

**Status (2026-10-20):** Repository inactive since 2024-09-19. The library depends only on `@opentelemetry/api` (no exporter); the docs site uses Google Analytics (gtag).

## Evidence

- Repository: https://github.com/fixie-ai/ai-jsx
- No analytics dependencies in standalone package
- Platform telemetry only applies to Fixie hosted deployment
- https://github.com/fixie-ai/ai-jsx/tree/1df0cfce69821e8d88dca0cf51d930abe4c041c4 -- packages/ai-jsx/package.json, packages/docs/docusaurus.config.js

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified, no change; repo inactive since 2024-09-19.
