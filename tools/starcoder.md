# StarCoder

| Field | Value |
|-------|-------|
| Website | https://huggingface.co/bigcode |
| Repository | https://github.com/bigcode-project/starcoder |
| Category | Open-Source Code LLM (Model Weights Only) |
| Telemetry | No |
| Default State | N/A |
| Analytics Providers | None |
| Disable Method | N/A (no telemetry to disable) |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-03-23 |

## What Is Collected

- Nothing. StarCoder is a set of open-source model weights, not a service or application. It does not include any telemetry, analytics, or tracking infrastructure.

## What Is NOT Collected

- No usage analytics
- No error reporting
- No code or file contents
- No prompts or model outputs
- No machine identifiers
- No network calls to any service

## How to Fully Opt Out

No action required. StarCoder is model weights only. When you run StarCoder locally:
- All inference happens on your hardware
- No data is sent to any external service
- No phone-home or update checks

Note: If you use StarCoder through a hosted inference API (e.g., Hugging Face Inference API), the hosting provider's privacy policy applies, not StarCoder's.

## Red Flags

None identified for the model weights themselves. Considerations:
- If using StarCoder through a hosted API (Hugging Face, etc.), the API provider may collect data
- StarCoder was trained on public code from The Stack dataset; the model itself does not collect data, but the training data provenance is documented at https://huggingface.co/datasets/bigcode/the-stack

## Evidence

- Model repository: https://huggingface.co/bigcode/starcoder
- GitHub: https://github.com/bigcode-project/starcoder
- No analytics code, no network calls, no telemetry modules in the repository
- BigCode project: https://www.bigcode-project.org

## Changelog

- 2026-03-23: Initial entry
