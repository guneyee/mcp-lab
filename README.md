# MCP Demo 1

This workspace contains hands-on MCP workshop artifacts for Jira and Confluence sync workflows.

## What is in this repo

- `specs/stories/` Jira story source files (markdown is source of truth)
- `specs/prds/` Confluence PRD source files (markdown is source of truth)
- `.github/prompts/` reusable prompt files for batch sync and status checks
- `.vscode/mcp.json` MCP server configuration for Context7, Playwright, and Atlassian

## Reusable prompts

- `sync-to-jira.prompt.md`
- `sync-to-confluence.prompt.md`
- `check-sync-status.prompt.md`
- `sync-plan.prompt.md`

## Typical workflow

1. Create or edit a markdown file under `specs/`.
2. Run the related sync prompt to preview CREATE/UPDATE actions.
3. Approve execution.
4. Confirm frontmatter `sync.*` fields were updated.
5. Verify in Jira/Confluence UI.

## Notes

- Markdown files are the source of truth.
- `sync.*.synced_at` tracks the last sync time.
- Use prompt previews before execution for safer batch updates.
