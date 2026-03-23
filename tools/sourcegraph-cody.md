# Sourcegraph Cody

| Field | Value |
|-------|-------|
| Website | https://sourcegraph.com/cody |
| Repository | https://github.com/sourcegraph/cody (extension); https://github.com/sourcegraph/sourcegraph (platform) |
| Category | AI Coding Assistant (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | GraphQL telemetry endpoint, OpenTelemetry (OTLP), Sentry |
| Disable Method | VS Code settings; self-hosted instance configuration |
| Collects Code | Yes (cloud: code context for completions; self-hosted: stays on your server) |
| Collects Prompts | Yes (cloud users: prompts processed server-side) |
| Last Verified | 2026-03-23 |

## What Is Collected

**Cloud (sourcegraph.com):**
- Usage telemetry via GraphQL endpoint (feature events, completion metrics)
- Error reports and stack traces (Sentry)
- Distributed traces (OpenTelemetry/OTLP)
- Code context and prompts sent to Sourcegraph servers for LLM processing
- Completion acceptance/rejection rates
- IDE type, version, and extension version
- Cody feature usage (chat, autocomplete, commands)
- Anonymous user and session identifiers
- Programming language statistics

**Self-hosted Sourcegraph:**
- Aggregate usage statistics sent to Sourcegraph (can be disabled by admin)
- Code and prompts stay within your infrastructure
- Sentry error reporting (can be disabled)

## What Is NOT Collected

- Self-hosted: code does not leave your infrastructure
- Enterprise: contractual guarantees on data handling
- Git credentials or SSH keys

## How to Fully Opt Out

1. **VS Code extension telemetry:**
   ```json
   {
     "cody.telemetry.level": "off",
     "telemetry.telemetryLevel": "off"
   }
   ```
2. **Self-hosted Sourcegraph instance:**
   - Disable telemetry in site admin: Site Admin > Configuration:
     ```json
     {
       "disableNonCriticalTelemetry": true
     }
     ```
3. **Enterprise deployment:** Use self-hosted Sourcegraph with air-gapped LLM providers for complete data isolation.
4. **Network-level:** Block `*.sourcegraph.com` telemetry endpoints (cloud users; will break functionality).

## Red Flags

- Cloud users' prompts and code context are necessarily sent to Sourcegraph servers
- Multiple telemetry systems in play (GraphQL, OTLP, Sentry) increase the surface area for data collection
- The VS Code extension `cody.telemetry.level` setting may not cover all telemetry channels (Sentry operates independently)
- Sourcegraph's GraphQL telemetry endpoint receives structured event data that can be quite detailed
- Cloud service processes code through Sourcegraph's infrastructure before reaching the LLM provider

## Evidence

- Telemetry implementation: `client/cody/src/services/telemetry-v2.ts` (VS Code extension)
- GraphQL telemetry: `internal/telemetry/` (Sourcegraph platform)
- OTLP configuration: `internal/otel/` (Sourcegraph platform)
- Sentry integration in both extension and platform
- Privacy documentation: https://sourcegraph.com/terms/privacy
- Cody extension: https://github.com/sourcegraph/cody
- Platform: https://github.com/sourcegraph/sourcegraph

## Changelog

- 2026-03-23: Initial entry
