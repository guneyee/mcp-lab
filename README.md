# MCP Demo 1

Hands-on MCP workshop repository for syncing markdown specs with Jira and Confluence.

This project demonstrates a practical spec workflow where local markdown files are the source of truth, and Atlassian tools are synchronized mirrors.

## Repository layout

- `specs/stories/`: Jira story source files
- `specs/prds/`: Confluence PRD source files
- `.github/prompts/`: reusable prompt workflows
- `.vscode/mcp.json`: MCP server configuration (Context7, Playwright, Atlassian)

## Current artifacts

- Stories:
	- `STORY-001.md` (synced to Jira)
	- `STORY-002.md` (synced to Jira)
- PRDs:
	- `PRD-001.md` (synced to Confluence)
	- `PRD-002.md` (synced to Confluence)

## Prompt library

Prompt files under `.github/prompts/`:

- `sync-to-jira.prompt.md`: batch story sync (CREATE/UPDATE)
- `sync-to-confluence.prompt.md`: batch PRD sync (CREATE/UPDATE)
- `check-sync-status.prompt.md`: NEW / OUT-OF-DATE / UP-TO-DATE / ORPHANED report
- `sync-plan.prompt.md`: two-way sync planning with approval gate

## Quick start

1. Ensure MCP servers are configured in `.vscode/mcp.json`.
2. Open this workspace in VS Code with Copilot Chat.
3. Run one of the reusable prompts, for example:
	 - `/sync-to-jira sync all my stories`
	 - `/sync-to-confluence sync all my PRDs`
	 - `/check-sync-status show me what's out of sync`
	 - `/sync-plan generate a two-way sync plan`

## Sync model

Each markdown file keeps sync state in frontmatter:

```yaml
sync:
	jira:
		url: "..."
		issue_key: "MCPW-123"
		synced_at: "2026-05-07T23:00:00Z"
```

or

```yaml
sync:
	confluence:
		url: "..."
		page_id: 123456
		space_key: MCPDOCS
		synced_at: "2026-05-07T23:00:00Z"
```

Decision logic:

- no sync block -> CREATE
- sync id exists -> UPDATE
- sync id exists but remote missing -> ORPHANED (manual decision)

## Recommended workflow

1. Edit markdown under `specs/`.
2. Run prompt in preview mode and inspect planned actions.
3. Approve execution.
4. Verify frontmatter `synced_at` and remote content.
5. Capture screenshot evidence when needed.

## Troubleshooting

- OAuth / permission issues:
	- re-authenticate Atlassian MCP and retry
- wrong project or space:
	- verify Jira project key and Confluence space key first
- noisy out-of-sync detections:
	- check timestamp drift and compare actual content, not timestamp only

## Git notes

- generated Playwright MCP artifacts are ignored via `.gitignore`
- branch: `main`
- remote: `git@github.com:guneyee/mcp-lab.git`
