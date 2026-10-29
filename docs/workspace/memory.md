---
outline: deep
---

# Workspace & Folder Memory

Each workspace and each folder has a **knowledge document**, a markdown document that Starfish keeps up to date as you chat. Facts, decisions and preferences build up across chats, so you do not have to restate them.

::: tip Not the same as personal memory
This page is about what Starfish knows about **a workspace**. For what it knows about **you**, such as how you like replies written and the tools you use, see [Memory in Settings](/settings/memory).
:::

## Two layers of context

When you chat in a workspace or one of its folders, the AI receives:

- **Custom instructions**: fixed rules you wrote yourself. *"Formal tone, never recommend competitor X, always cite the brand guide."*
- **The knowledge document**: written by Starfish from earlier chats and updated as you go.

Folder instructions take precedence over workspace instructions when both are set. A chat outside any folder gets only the workspace layer.

## What's in the knowledge document

Up to six sections, shown only when they have content:

```
## Working style & preferences
## Facts
## Decisions
## People & contacts
## Assets & links
## Open questions
```

Starfish records concrete facts, decisions, preferences, people and assets, and open questions. It leaves out small talk.

## How it is updated

After a chat goes idle, Starfish updates the knowledge document in the background. It never holds up your conversation. New information is merged into the document. When the chat is in a folder, details about that folder stay in the folder, and information useful across the whole workspace goes to the workspace.

If an update fails, the document stays as it was and the next chat updates it.

As the document grows, Starfish keeps it compact by merging related entries.

## Editing the document

The knowledge document is plain markdown. Click **Edit** on **Workspace knowledge** (or **Folder knowledge**), change anything, and click **Save**. Later updates build on your version, so this is how you correct a mistake.

Common reasons to edit:

- **Add a fact the AI missed**: *"Decided 2026-04-26 to skip Q4 performance campaigns."*
- **Fix a mistake**: replace a wrong colour code, name or date.
- **Remove obsolete content.**
- **Restructure**: move things between sections or rewrite them for your team.

## Loading indicator

When a chat starts, a small **"Pulling Acme Inc knowledge…"** indicator can appear in the chat header while Starfish loads the workspace knowledge. It clears as soon as the AI starts responding.

## Knowledge files

The knowledge document holds the summary. [Knowledge files](/workspace/knowledge-files) keep the full original documents, so the AI can read the exact text when it needs it.

## Tips

- **Don't spend a chat repeating context.** The AI already knows the workspace's history.
- **Start a new chat for a new sub-topic.** Memory still applies, but the new chat does not carry the previous chat's messages.
- **Edit the document when the AI misses something important.**
- **Use folder memory for narrow topics.** A "Brand" folder's memory stays focused on brand decisions; keep other topics in their own folders.
