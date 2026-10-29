---
outline: deep
---

# Workspaces

A workspace groups a set of chats, optional folders, custom instructions, a knowledge document and any uploaded knowledge files. Think of it as one client, one initiative or one long-running effort.

## Creating a workspace

On the **Workspace** page, click **New Workspace**. Give it a name. The workspace is created immediately.

You can also use the **Workspace picker** chip in the chat input. Its **New workspace** action opens the Workspace page.

## The workspace page

The left column is *navigation* (folders, chats and media). The right column is *knowledge* (custom instructions, workspace knowledge, knowledge files).

### Header

- **Workspace name** with its colour swatch.
- **New chat in workspace**: starts a fresh chat already attached to this workspace.
- **Export** (download icon): saves this workspace to a portable file. See [Exporting and importing a workspace](#exporting-and-importing-a-workspace).
- **Delete workspace** (trash icon): removes the workspace and its folders. Chats keep existing but lose their workspace link. Knowledge files attached to the workspace are deleted. If the workspace is shared with a [team](/workspace/teams), deleting it removes it for everyone in the team; only the person who shared it, or a team owner or admin, can delete it.

### Left column: folders and chats

- **Folders (N)**: the folders inside the workspace, with a **New folder** button. Hover over a folder to show *new chat in folder* and *delete* shortcuts.
- **Chats in workspace (N)**: chats that live directly in the workspace (no folder).
- **Image generations / Video generations**: generations you moved to this workspace (with *Move to…* on a sidebar row).

### Right column: knowledge

- **Custom instructions**: free-form text the AI sees in every chat in this workspace. Empty by default.
- **Knowledge files**: uploaded documents and images. See [Knowledge files](/workspace/knowledge-files).
- **Workspace knowledge**: a markdown document Starfish keeps up to date as you chat. See [Workspace & folder memory](/workspace/memory). You can edit it directly.

## Starting a chat in a workspace

Three ways:

1. **From the workspace page**: click **New chat in workspace**. The chat uses the workspace's instructions, knowledge and files from the first message.
2. **From the chat input**: click the **Workspace picker** chip and choose a workspace. The next message you send creates a chat in that workspace.
3. **From a folder page**: click **New chat** to start a chat in that folder.

The picker is **sticky**: once you pick a workspace, new chats use the same workspace until you change it. Click the X next to the chip to clear it.

## Moving an existing chat into a workspace

In the left sidebar, hover any chat row and open the three-dot menu. **Move to… → \<Workspace\>** moves the chat into the workspace. **Move to… → \<Workspace\> → \<Folder\>** moves it into a folder. **Move to… → No workspace** removes the assignment.

The chat keeps all its history. Its next reply uses the workspace's instructions and knowledge.

## Exporting and importing a workspace

A workspace can be moved between devices as a single file.

- **Export**: on the workspace page, click the **download** icon in the header. Starfish saves a `.starfishworkspace` file with the workspace and its folders, their custom instructions and knowledge documents, and the knowledge files.
- **Import**: on the Workspace page, click **Import**, choose a `.starfishworkspace` file, and Starfish recreates it as a new workspace and opens it.

What travels: instructions, knowledge documents and knowledge files. What does not: chats, agents, automations and generated images. Importing always creates a **new** workspace, so importing the same file twice never overwrites or merges into an existing one.

## Deleting a workspace

Click the trash icon in the header and confirm:

- The workspace and all its folders are deleted.
- Its knowledge files are deleted.
- Chats in the workspace (or its folders) survive, unlinked. They stay in your chat list.

There is no undo.

## Tips

- **One workspace per client or topic.** Memory works best when each workspace has a clear scope.
- **Edit instructions over time.** Add rules as you meet them: *"never use Lorem Ipsum,"* *"prefer Notion over Google Docs."* The AI reads them in every chat.
