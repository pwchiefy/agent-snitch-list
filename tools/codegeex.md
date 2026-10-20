# CodeGeeX

| Field | Value |
|-------|-------|
| Website | https://codegeex.cn |
| Repository | https://github.com/zai-org/CodeGeeX (formerly THUDM/CodeGeeX; model repo) |
| Category | AI Code Completion / Chat (IDE Extension + SaaS) |
| Telemetry | Yes |
| Default State | ON |
| Analytics Providers | Custom endpoint (Zhipu AI / THUDM infrastructure) |
| Disable Method | Privacy Mode setting in extension |
| Collects Code | Yes |
| Collects Prompts | Yes |
| Last Verified | 2026-10-20 |

## What Is Collected

**Without Privacy Mode (default, per original audit):**
- Code context sent to CodeGeeX/Zhipu servers for completion
- Completion content and acceptance events, chat prompts/responses
- IDE/extension version, language, usage metrics, errors, anonymous user ID

**Repository README (extension privacy statement):** code is used only as CodeGeeX input; sharing generated code for research is asked at first use and disabled by default.

## What Is NOT Collected

- Generated code for research purposes unless you agree at first use (per README)
- With Privacy Mode: code content reportedly not retained

## How to Fully Opt Out

1. **Decline** research data sharing at first use; enable Privacy Mode in the extension
2. **VS Code:** `"telemetry.telemetryLevel": "off"`
3. **Self-host:** run open model weights locally (significant GPU required)

## Red Flags

- Telemetry data sent to China-based infrastructure (Zhipu AI / Tsinghua University)
- Code snippets collected by default unless Privacy Mode enabled
- Data governed by Chinese data protection laws
- Custom telemetry endpoint makes independent verification difficult
- Open-source model repository is distinct from the VS Code extension/service

**Notes:** The GitHub org THUDM was renamed zai-org (Zhipu / Z.ai). The repo's extension README says code is used only as model input and that sharing generated code for research is asked at first use and disabled by default; the extension itself is closed source, so the remaining telemetry claims are carried over from the original entry. Self-hosted model weights available for local inference.

## Evidence

- Model repo: https://github.com/zai-org/CodeGeeX
- Extension privacy statement: https://github.com/zai-org/CodeGeeX/blob/2838420b7b4492cf3d16bce5320e26e65960c9e2/vscode-extension/README.md
- Extension telemetry endpoints (carried over from original network observation; not re-verified)

## Changelog

- 2026-03-23: Initial entry
- 2026-10-20: Repo moved THUDM -> zai-org; added README privacy statement (research sharing opt-in, disabled by default); extension telemetry claims carried over unverified.
