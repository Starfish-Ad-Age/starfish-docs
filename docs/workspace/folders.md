---
outline: deep
---

# Folders

Folders are an optional sub-grouping inside a workspace. Use them to scope chats to a specific topic, asset type, or workstream — *"Brand"*, *"Social media"*, *"Client guidelines"*, *"Q3 launch"*.

A folder belongs to exactly one workspace. A chat (or image/video generation) belongs to at most one folder. Folders own their own custom instructions, knowledge document, and knowledge files — separate from the parent workspace's.

## When to use a folder

You don't need folders for small workspaces. Default to chats at workspace level. Add a folder when:

- The workspace has clearly distinct topics (Brand vs. Performance vs. PR).
- Your chats start picking up the wrong context — folder memory is more focused than workspace memory.
- You want to upload guidelines that only apply to one slice of the work.

If a workspace has folders but a chat doesn't fit any of them, leave the chat at the workspace itself.

## Creating a folder

From a workspace page, click **+ New folder**. Type a name and press Enter. The folder appears in the workspace's left column.

The chat input's **Workspace picker** only lets you choose an existing workspace or folder (or jump to the Workspace page). Folders themselves are created from the workspace page.

## The folder page

Same shape as the workspace page — header at the top, two-column body below.

### Header

- A breadcrumb back to the workspace at the top-left.
- **Folder name**.
- **+ New chat** — starts a chat scoped to this folder.
- **Delete folder** (trash icon).

### Left column — chats and media

- **Chats (N)** — chats inside this folder.
- **Image / video generations** — gen sessions you assigned to this folder.

### Right column — knowledge

- **Folder instructions** — text the AI sees on every chat in this folder. **Take precedence over workspace instructions** when both are set.
- **Knowledge files** — files uploaded specifically to this folder. Workspace-level files are still visible to chats in this folder; folder-level files are not visible from outside.
- **Folder knowledge** — markdown document the AI maintains for this folder, separate from workspace knowledge.

## How folder vs workspace context combines

When you chat inside a folder:

- The AI gets **both** the workspace context **and** the folder context.
- Folder instructions override workspace instructions on conflict.
- The AI sees both the workspace's knowledge document and the folder's knowledge document — folder is treated as the "more specific" layer.
- The AI can use the workspace-level files and this folder's files. Files in *other* folders are not visible.

When you chat at the workspace itself (no folder), only the workspace context applies.

## Moving a chat into a folder

Hover any chat row in the sidebar, click the three-dot menu, then **Move to… → Workspace → Folder**.

You can also move chats *between* folders by re-running this action with a different folder. Or move them out of a folder back to the workspace itself by selecting the bare workspace name.

## Deleting a folder

Click the trash icon in the folder header. Chats inside the folder are not deleted. They move to the workspace itself. Knowledge files attached to the folder lose their folder link the same way.

If you want to delete the chats too, do so from the sidebar before deleting the folder.

## Tips

- **Keep folder names short and durable.** *"Brand"* is better than *"Brand Guidelines Final v3 (April 2026)"*.
- **Use folders for workstreams, not file types.** *"Strategy"* / *"Execution"* works; *"Images"* / *"PDFs"* doesn't — files are filtered automatically.
- **Don't over-folder.** Folder memory is per-folder, so chats in unrelated folders won't share context. That's the point — but it also means too many folders fragment knowledge.
