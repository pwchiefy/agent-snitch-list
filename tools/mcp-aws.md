# MCP: AWS MCP Servers

| Field | Value |
|-------|-------|
| Website | https://awslabs.github.io/mcp/ |
| Repository | https://github.com/awslabs/mcp |
| Category | MCP Server suite (AWS services) |
| Telemetry | Yes |
| Default State | Conditional |
| Analytics Providers | AWS service User-Agent metadata (no separate endpoint) |
| Disable Method | aws-api-mcp-server: set env `AWS_API_MCP_TELEMETRY=false`. Other servers: no switch for the User-Agent server/version tag |
| Collects Code | No |
| Collects Prompts | No |
| Last Verified | 2026-10-20 |

## What Is Collected

- No analytics SDKs or extra endpoints
- Most servers: User-Agent suffix naming the MCP server and version on AWS SDK calls
- aws-api-mcp-server (default on): MCP client name/version plus config flags (read-only mode, mutation consent, agent scripts, file-access mode) in the User-Agent of every AWS API call

## What Is NOT Collected

- Command arguments or results beyond what AWS already receives as API calls
- No separate telemetry calls (per README)

## How to Fully Opt Out

1. **aws-api-mcp-server:** set `AWS_API_MCP_TELEMETRY=false`
2. **Other servers:** no switch for the server/version User-Agent tag

## Red Flags

- aws-api-mcp-server sends MCP client identity and configuration flags to AWS by default (documented, opt-out available)

## Notes

Official AWS MCP servers (60+). Low-impact and documented: metadata rides on the AWS calls the user is already making, with no extra endpoint. Classed Conditional because it depends on which server is used. OpenTelemetry references in the CloudWatch servers are for reading CloudWatch data.

## Evidence

- get_user_agent_extra: https://github.com/awslabs/mcp/blob/1db41fb81194a3696c07b6b5ec946344ced9307f/src/aws-api-mcp-server/awslabs/aws_api_mcp_server/core/common/config.py#L98-L117
- Default true: https://github.com/awslabs/mcp/blob/1db41fb81194a3696c07b6b5ec946344ced9307f/src/aws-api-mcp-server/awslabs/aws_api_mcp_server/core/common/config.py#L172
- README env var table: https://github.com/awslabs/mcp/blob/1db41fb81194a3696c07b6b5ec946344ced9307f/src/aws-api-mcp-server/README.md

## Changelog

- 2026-10-20: Initial page (entry previously existed only in data/tools.json); re-verified against current source. Reclassified OFF -> Conditional: aws-api-mcp-server adds client/config metadata to AWS User-Agent by default (AWS_API_MCP_TELEMETRY).
