# LangChain

| Field | Value |
|-------|-------|
| Website | https://www.langchain.com/ |
| Repository | https://github.com/langchain-ai/langchain |
| Category | LLM Application Framework |
| Telemetry | No (core library); LangSmith is opt-in |
| Default State | OFF |
| Analytics Providers | None (LangSmith is a separate opt-in product) |
| Disable Method | N/A (no telemetry to disable in core library) |
| Collects Code | No |
| Collects Prompts | No (unless LangSmith is explicitly enabled) |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing in the core `langchain` library.
- **LangSmith (opt-in):** If explicitly configured with `LANGCHAIN_TRACING_V2=true` and API key, sends traces including prompts, completions, and chain execution data to LangSmith servers.

## What Is NOT Collected

- Core library has no phone-home behavior
- No usage analytics in the framework itself
- No automatic data collection

## How to Fully Opt Out

No action required for the core library. To ensure LangSmith is not active:
1. Do not set `LANGCHAIN_TRACING_V2=true`
2. Do not set `LANGCHAIN_API_KEY`
3. Do not configure any LangSmith callbacks

## Red Flags

- LangSmith tracing, when enabled, sends all prompts and completions to LangChain servers -- ensure it is not accidentally enabled in production
- `LANGCHAIN_TRACING_V2` environment variable could be set at system level unknowingly

## Evidence

- Repository: https://github.com/langchain-ai/langchain
- No telemetry dependencies in core library
- LangSmith is a separate product requiring explicit configuration
- LangSmith docs: https://docs.smith.langchain.com/

## Changelog

- 2026-03-23: Initial entry
