# Changelog

Dataset-level changes. Per-tool changes are recorded in the Changelog section of each `tools/<slug>.md` page.

## 2026-10-20: full refresh

The previous full verification was 2026-03-23.

**Coverage**
- 118 → 138 entries (20 added). 134 entries were re-verified on 2026-10-20 against source code at pinned commits, official privacy and telemetry docs, and release notes.
- 4 entries could not be re-verified because the product or its pages are unreachable, so they keep `lastVerified: 2026-03-23` with a status note on the page: Codejet, Mutable AI, Phind, Safurai.
- The README now lists all 138 entries, including the 22 MCP servers that the earlier README table left out.

**New entries (20)**
Gemini CLI, Qwen Code, Crush, Kilo Code, Pi coding agent, Letta Code, Kimi Code CLI, GitHub Copilot CLI, Kiro, Antigravity, Amp, Factory Droid, Jules, OpenAI Agents SDK, Google ADK, Mastra, smolagents, Pydantic AI, Chrome DevTools MCP, Context7 MCP.

**Default-state reclassifications (21)**
Continue (on → off); Cline (off → on); OpenHands (opt-in → on); Open Interpreter (on → conditional); Sweep (OSS) (off → on); Double (Bloop) (on → off); Void (off → on); Refact.ai (on → off); Plandex (conditional → off); Magic AI (on → unknown); JetBrains AI (on → conditional); Melty (off → on); OpenUI (off → conditional); Marblism (on → saas); Devin (on → saas); OpenCode (off → conditional); Roo Code (on → off); Figma Context MCP (off → on); Serena MCP (off → on); AWS MCP Servers (off → conditional); Magic MCP / 21st MCP (off → saas).

**Corrections to the 2026-03 edition**
- Cline, Void and Melty were listed as having no telemetry. All three ship PostHog telemetry that is on by default. Melty sends chat message text and has no opt-out.
- The self-hosted Sweep server sends issue titles, repo names and GitHub usernames to Sweep's PostHog via a hard-coded key.
- Claude Code's `repoStatus` was corrected to closed-source: the public repo holds docs, the changelog and plugins, not the CLI source.
- Mistral Vibe is the Apache-2.0 CLI `mistralai/mistral-vibe`, not a closed IDE.
- Several evidence paths and opt-out variables were corrected, among them gpt-engineer (consent is a `.gpte_consent` file and no `COLLECT_LEARNINGS_OPT_IN` exists), Tabby, Devon, Semgrep, Composio and Codex CLI (`[analytics] enabled = false`).

**Notable new findings**
- GPT Pilot: a malicious commit (2025-08-24) hid a credential-stealing loader in `core/telemetry/`, and it was removed on 2026-06-11.
- Telemetry removed in final releases: Continue (2.0/2.1) and Roo Code (v3.54.0).
- Training on by default for personal or consumer plans: GitHub Copilot Free/Pro/Pro+ (2026-04-24), v0 Hobby/Free, Lovable Free/Pro (2026-09-09), Perplexity, and JetBrains AI non-commercial licenses (detailed data collection).
- Codex CLI: accepted-line analytics carry a SHA-1 hash of the git remote URL.
- Claude Code: v2.1.282 stops project and local settings from enabling OTel export. Separately, `DISABLE_TELEMETRY` also disables experiment gates, which is undocumented (issue #47558).

**Fact-check pass (same day)**
- Cursor: the cited forum thread shows Sentry crash events (not PostHog) in Privacy Mode, and Cursor staff say no content is sent; the PostHog attribution is now marked unconfirmed and the claim that Privacy Mode is off by default for individuals was removed (Cursor's docs do not state it).
- GitHub Copilot CLI: "no opt-out existed" softened to "first documented CLI opt-out arrived in v1.0.100".
- Factory Droid: the per-user email claim is now attributed to the docs' list of fields removed in `aggregate` mode; the per-machine `OTEL_TELEMETRY_GRANULARITY=aggregate` setting is noted.
- Mastra: token-usage reporting qualified (counts only, only on servers with observability configured).
- OpenHands and Kilo Code: README wording aligned with source (anonymous install event and Do Not Track; conda token read via `conda info`).
- Continue: PR #12570 is cited by its real title ("Merge staged work from continue-fork").

**Repository moves and renames**
Aider (Aider-AI/aider), MetaGPT (FoundationAgents/MetaGPT), OpenHands (OpenHands/OpenHands), SWE-agent (SWE-agent/SWE-agent), Rawdog (granawkins/rawdog), Open Interpreter (openinterpreter/openinterpreter, now a Rust fork of Codex CLI), GPT-Engineer (AntonOsika/gpt-engineer, archived), Mentat (AbanteAI/archive-old-cli-mentat), AutoCodeRover (AutoCodeRoverSG/auto-code-rover), Goose (aaif-goose/goose), Sourcegraph Cody (sourcegraph/cody-public-snapshot), PR-Agent (The-PR-Agent/pr-agent), CodeGeeX (zai-org/CodeGeeX), Codegen (codegen-sh/codegen), Kodu AI (kodu-ai/claude-coder), MobileBuildMCP (getsentry/MobileBuildMCP, formerly XcodeBuildMCP), MCP Toolbox for Databases (googleapis/mcp-toolbox). Windsurf is now listed as Windsurf (Cognition).

**Tooling and docs**
- `scripts/generate-readme.ts` was rewritten to read the actual `data/tools.json` schema. The old version expected `openSource`, `website` and `details` fields that do not exist, and it overwrote the whole README. It now regenerates only the marked README sections (intro count, badges, At a Glance, legend, table), and the output is deterministic.
- `.github/workflows/validate.yml` now checks the real schema: the `mcp-server` category, `repoStatus`, and nullable booleans and strings. It installs dependencies with `npm ci`.
- CONTRIBUTING.md and METHODOLOGY.md now describe the `data/tools.json` → `npm run readme` workflow.
- REFERENCES.md gained new research, documentation and news citations.
- AUDIT.md (a Claude Skills audit) is annotated as belonging with the skill snitch list. It is kept unchanged.

## 2026-03-23: initial release

- 118 entries verified, with tool pages in `tools/`.
