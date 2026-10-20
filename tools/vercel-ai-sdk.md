# Vercel AI SDK

| Field | Value |
|-------|-------|
| Website | https://ai-sdk.dev/ |
| Repository | https://github.com/vercel/ai |
| Category | AI Application SDK |
| Telemetry | No (SDK itself); user-facing OTLP is opt-in |
| Default State | OFF |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- Nothing by default. Telemetry hooks (OpenTelemetry tracing channel and registered integrations) only send data to destinations you configure, and honor `isEnabled: false`.

## What Is NOT Collected

- No analytics or crash reporting to Vercel from the SDK

## How to Fully Opt Out

No action required. To keep LLM traffic off Vercel AI Gateway, configure an explicit provider (or `globalThis.AI_SDK_DEFAULT_PROVIDER`) instead of plain string model IDs.

## Red Flags

- Plain string model IDs without a configured default provider are routed to Vercel AI Gateway (ai-gateway.vercel.sh) -- LLM traffic rather than telemetry, but it sends prompts to Vercel

**Notes:** Telemetry hooks (OpenTelemetry/integrations) are opt-in and send data only to destinations you configure. Deploying apps on Vercel's platform involves separate Vercel platform telemetry, independent of this SDK.

## Evidence

- Repository (ai@7.0.146): https://github.com/vercel/ai/tree/f2876d0b48517990f22dfa2a2738e764b78ea0bf
- packages/ai/src/telemetry/create-telemetry-dispatcher.ts (isEnabled gate)
- packages/ai/src/model/resolve-model.ts (default provider = gateway); packages/gateway/src/gateway-provider.ts (`https://ai-gateway.vercel.sh/v4/ai`)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Re-verified at ai@7.0.146: no telemetry; added note that string model IDs route to Vercel AI Gateway by default (LLM traffic, not telemetry).
