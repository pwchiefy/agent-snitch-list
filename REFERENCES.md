# References & Prior Art

This project builds on the work of many researchers and journalists. We aim to credit all prior art that informed our findings.

## Comparable Projects

| Project | Author | What It Does |
|---------|--------|-------------|
| [Chaser Systems — What data do coding agents send?](https://chasersystems.com/blog/what-data-do-coding-agents-send-and-where-to/) | Lucas Pye | Network interception analysis of 7 coding agents (Nov 2025). Closest prior work to this project. |
| [arXiv:2509.20388 — Can You Trust Your Copilot?](https://arxiv.org/abs/2509.20388) | Academic | Privacy scorecard for 5 AI coding assistants against 14 criteria (Sep 2025). |
| [beatcracker/toptout](https://github.com/beatcracker/toptout) | beatcracker | Comprehensive machine-readable database of telemetry opt-out methods across many tools. |
| [pluja/awesome-privacy](https://github.com/pluja/awesome-privacy) | pluja | Privacy-respecting alternatives including an "AI Coding" section. |
| ["Impossible to hide secret ...": Uncovering Security and Privacy Issues in LLM-native IDEs](https://www.theregister.com/ai-and-ml/2026/08/08/devs-to-anthropic-openai-cursor-and-friends-make-security-and-privacy-the-default/5285107) | Akhond, Al Mamun, Wang, Uddin | Accepted at IEEE/ACM ASE 2026. Taxonomy built from 446 Reddit posts and 6,000+ comments; telemetry and opaque data collection appear as complaint categories (link is The Register's coverage, Aug 2026). |
| [CSA — AI Coding Assistants as Attack Surface: Code, Skills, and Secrets](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-coding-assistant-attack-surface-2026040/) | Cloud Security Alliance | Research note on code, skill and secret exposure through AI coding assistants (2026). |

## Tool-Specific Research

### Trae (ByteDance)
- [segmentationf4u1t/trae_telemetry_research](https://github.com/segmentationf4u1t/trae_telemetry_research) — Original research documenting ~500 network calls in 7 minutes, hardware fingerprinting, opt-out bypass (Jul 2025)
- [Unit 221B — Unveiling Trae](https://blog.unit221b.com/dont-read-this-blog/unveiling-trae-bytedances-ai-ide-and-its-extensive-data-collection-system) — Lance James, earlier independent analysis (Mar 2025)
- [The Register — ByteDance Trae telemetry continues after opt-out](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/) — Tim Anderson (Jul 2025)
- [CyberNews — Vibe coders' data harvested](https://cybernews.com/security/bytedance-ai-coding-tool-trae-data-collection/)
- [TechRadar — ByteDance AI tool caught](https://www.techradar.com/pro/security/bytedance-ai-tool-caught-spying-on-users)

### Cursor
- [Cursor Forum — PostHog telemetry observed despite Privacy Mode](https://forum.cursor.com/t/title-posthog-telemetry-us-i-posthog-com-observed-despite-privacy-mode-enabled/149348) — Christopher Hudson (Jan 2026)
- [Cursor Forum — Privacy Mode concerns](https://forum.cursor.com/t/concerns-about-privacy-mode-and-data-storage/5418)

### Roo Code
- [GitHub Issue #11602 — Cloud Telemetry Bypasses User Settings](https://github.com/RooCodeInc/Roo-Code/issues/11602) — Pablo Vitasso (Feb 2026). Closed as fixed 2026-02-19; the final release v3.54.0 removed all telemetry before the project shut down (2026-05-15).

### Claude Code
- [Reid Barber — Reverse engineering Claude Code](https://www.reidbarber.com/blog/reverse-engineering-claude-code) — Statsig/Sentry internals (Mar 2025)
- [GitHub Issue #10494 — DISABLE_TELEMETRY ignored](https://github.com/anthropics/claude-code/issues/10494) — 300-400 connections/hour to Google IPs despite opt-out (Oct 2025)
- [GitHub Issue #7151 — Statsig/OpenAI acquisition concern](https://github.com/anthropics/claude-code/issues/7151) (Sep 2025)
- [Nasairwhite/claude-code-deep-research](https://github.com/Nasairwhite/claude-code-deep-research) — 370 gates, 51 endpoints, 331 env vars
- [GitHub Issue #47558 — DISABLE_TELEMETRY should document experiment-gate side effects](https://github.com/anthropics/claude-code/issues/47558) (Apr 2026, open)
- [Claude Code CHANGELOG](https://github.com/anthropics/claude-code/blob/772c6bee5c36f58be43bbb2b182862aeb22aceff/CHANGELOG.md) — v2.1.282 stops project/local settings from turning on OpenTelemetry export; v2.1.290 fixes telemetry sent behind a Claude apps gateway

### Cline
- [GitHub Issue #3361 — Sensitive data transmitted despite disabled telemetry](https://github.com/cline/cline/issues/3361) — PostHog autocapture sent prompts and filenames. Fixed v3.14.1. (May 2025)
- [GitHub Issue #7068 — Telemetry sending when disabled](https://github.com/cline/cline/issues/7068) — Second report of recurring issue (Oct 2025)
- [Cline telemetry docs](https://docs.cline.bot/more-info/telemetry) — Documents the PostHog telemetry that is on by default and that provider telemetry can include prompts

### Continue
- [GitHub Issue #2082 — Telemetry sent to PostHog despite allowAnonymousTelemetry: false](https://github.com/continuedev/continue/issues/2082) — Payload included user input. Fixed PR #4449. (Aug 2024)
- [PR #12570](https://github.com/continuedev/continue/pull/12570) — Removed PostHog and Sentry telemetry ahead of the final 2.x releases

### GitHub Copilot
- [GitGuardian — GitHub Copilot Privacy: Key Risks](https://blog.gitguardian.com/github-copilot-security-and-privacy/)
- [Paul Sorensen — Copilot privacy guide](https://paulsorensen.io/github-copilot-vscode-privacy/)
- [GitHub Changelog — Updates to our privacy statement and terms (2026-03-25)](https://github.blog/changelog/2026-03-25-updates-to-our-privacy-statement-and-terms-of-service-how-we-use-your-data/) — Free/Pro/Pro+ interaction data used for training by default from 2026-04-24
- [Copilot CLI issue #3387 — telemetry opt-out request](https://github.com/github/copilot-cli/issues/3387) (May 2026); `--disable-client-telemetry` shipped in [v1.0.100](https://github.com/github/copilot-cli/blob/main/changelog.md) (2026-10-19)

### GPT Pilot
- [Malicious commit 065ee8eb](https://github.com/Pythagora-io/gpt-pilot/commit/065ee8ebee7385cb644fd1608587a18edb91f4fb) — Credential-stealing loader hidden in `core/telemetry/` (2025-08-24); removed in [8c174942](https://github.com/Pythagora-io/gpt-pilot/commit/8c174942b372efe4cf7ee2e977b7f2f0a2bc4bbe) (2026-06-11)

## Official Documentation
- [Aider analytics](https://aider.chat/docs/more/analytics.html) — Transparent opt-in PostHog telemetry
- [Open Interpreter telemetry](https://docs.openinterpreter.com/telemetry/telemetry)
- [Claude Code data usage](https://code.claude.com/docs/en/data-usage)
- [Goose usage data](https://goose-docs.ai/docs/guides/usage-data/) (project moved from block/goose to aaif-goose/goose)
- [Cursor data use](https://cursor.com/data-use)
- [Gemini CLI configuration — usage statistics](https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/configuration.md)
- [Crush metrics](https://github.com/charmbracelet/crush#metrics)
- [Mastra CLI telemetry](https://github.com/mastra-ai/mastra/blob/main/docs/src/content/en/reference/cli/mastra.mdx)
- [Chrome DevTools MCP usage statistics](https://github.com/ChromeDevTools/chrome-devtools-mcp#usage-statistics)
- [OpenAI Agents SDK tracing](https://openai.github.io/openai-agents-python/tracing/)
- [Kiro data protection](https://kiro.dev/docs/privacy-and-security/data-protection/)
- [Factory telemetry privacy controls](https://docs.factory.com/enterprise/telemetry/privacy)
- [Amp security](https://ampcode.com/security)
- [Codex config reference](https://developers.openai.com/codex/config-reference)
- [JetBrains product data collection notice](https://www.jetbrains.com/legal/docs/terms/product_data_collection/)
- [Lovable data opt-out](https://docs.lovable.dev/features/business/data-opt-out)
- [Vercel terms update, March 2026 (v0 training defaults)](https://vercel.com/changelog/updates-to-terms-of-service-march-2026)

## News Coverage
- [The Register — Trae telemetry](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/)
- [Neowin — Trae resource hog](https://www.neowin.net/news/report-bytedances-vs-code-fork-trae-is-a-resource-hog-that-spies-on-you/)
- [Distill Tech Blog — Deceptive Telemetry?](https://distill.tech.blog/2025/07/28/bytedances-ide-a-case-of-deceptive-telemetry/)
- [The Register — GitHub Copilot training policy change](https://www.theregister.com/2026/03/26/github_ai_training_policy_changes/) (2026-03-26)
- [Help Net Security — GitHub Copilot data privacy policy update](https://helpnetsecurity.com/2026/03/26/github-copilot-data-privacy-policy-update) (2026-03-26)
- [The Register — Developers ask AI IDE makers to make security and privacy the default](https://www.theregister.com/ai-and-ml/2026/08/08/devs-to-anthropic-openai-cursor-and-friends-make-security-and-privacy-the-default/5285107) (2026-08-08)

---

*If we missed crediting your work, please [open an issue](https://github.com/pwchiefy/agent-snitch-list/issues) and we'll add it.*
