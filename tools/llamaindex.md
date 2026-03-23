# LlamaIndex

| Field | Value |
|-------|-------|
| Website | https://www.llamaindex.ai/ |
| Repository | https://github.com/run-llama/llama_index |
| Category | LLM Data Framework |
| Telemetry | No |
| Default State | OFF |
| Analytics Providers | None |
| Disable Method | N/A |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing. The core LlamaIndex library does not include telemetry.
- **LlamaCloud (separate product):** If using the hosted LlamaCloud service, data is processed on their servers, but this is a separate opt-in product.

## What Is NOT Collected

- No usage analytics in the framework
- No prompts or completions
- No indexed document content
- No crash reports
- No user identifiers

## How to Fully Opt Out

No action required for the core library. To avoid LlamaCloud data processing, do not use `LlamaCloudIndex` or `LlamaParse` cloud endpoints.

## Red Flags

None identified for the core open-source library. LlamaCloud/LlamaParse are separate hosted services with their own data handling.

## Evidence

- Repository: https://github.com/run-llama/llama_index
- No analytics dependencies in core library
- No telemetry module in source tree
- LlamaCloud is a separate product with its own terms

## Changelog

- 2026-03-23: Initial entry
