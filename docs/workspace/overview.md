---
outline: deep
---

# Workspace

Workspaces give you a place to group related chats, attach instructions and uploaded files, and keep persistent knowledge that follows the AI from one conversation to the next.

Each workspace holds its chats, meetings and optional folders:

```
Workspace         e.g. "Acme Inc"
├── Folder        e.g. "Brand"   (optional)
│   └── Chats
└── Chats, meetings
```

Folders are optional. A chat can live directly in a workspace, or inside a folder for tighter scoping. A meeting can belong to a workspace too; see [Meetings in a workspace](/meetings/overview#meetings-in-a-workspace).

## Why use a workspace?

Three concrete wins:

- **Persistent workspace knowledge.** Every conversation in a workspace (or folder) feeds a structured knowledge document the AI consults on its next turn. Decisions, facts, preferences, links, and people accumulate over time without you re-stating them.
- **Custom instructions.** Tell the AI once how to behave for this client / topic ("formal tone, never propose discounts under 15%, always cite the brand guidelines PDF"). Workspace instructions apply to every chat in the workspace; folder instructions take precedence inside their folder.
- **Knowledge files.** Upload PDFs, Word docs, spreadsheets, images, and code samples. The AI summarises them on upload and can read their full content when it needs it.

## Opening the workspace

The left sidebar's primary navigation has a **Workspace** link. It takes you to a grid of all your workspaces.

From there you can:

- Click any workspace to open its page (folders, chats, instructions, knowledge).
- Create a new workspace with the **New Workspace** button.
- Delete a workspace. Its chats are *unlinked*, not deleted; they remain in your chat list.

## What's persisted

Everything in a workspace is stored in the App's local data folder on your Mac. If you share a workspace with a [team](/workspace/teams), its files, folders and instructions sync to your teammates. Chats always stay private.

When you delete a workspace, its folders and knowledge files are deleted too. Chats survive; they just lose their workspace assignment.

## What's next

- [Workspaces](/workspace/projects) — creating, editing, and using a workspace as a chat scope.
- [Folders](/workspace/folders) — sub-grouping inside a workspace.
- [Knowledge files](/workspace/knowledge-files) — uploading documents the AI can read.
- [Workspace & folder memory](/workspace/memory) — how the AI accumulates knowledge from your chats.
- [Teams](/workspace/teams) — sharing a workspace with the people you work with.
