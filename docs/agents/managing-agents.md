---
outline: deep
---

# Managing Agents

The **Agents** page is your library for creating, installing, arranging, and removing agents. It's in the sidebar in Developer mode; Simple mode hides the page and picks agents by name in the message instead.

## The Agents page

Open **Agents** in the sidebar. The page shows your whole library with two tabs:

- **All agents** — everything you have, both templates and your own.
- **Built by me** — only the agents you created or uploaded.

Each card shows the agent's name, avatar or icon, color, description, and the apps it expects.

The header actions are **Create agent**, **Browse templates**, and **Upload agent**. With more than one agent, **Reorder** lets you drag the cards into the order you want; the saved order is mirrored in the in-chat agent picker.

## Selecting an agent

In Developer mode, use the **Agents** dropdown in the composer. **Main agent** is single-select:

- Pick an agent to make it the one this chat runs as.
- **None (generic assistant)** clears the selection.
- Picking the selected agent again turns it off.

When an agent is active:

- Its system instructions are included in every message you send.
- Its tool access applies.
- Its preferred model is used, unless it's set to Auto.

In Simple mode there is no picker. Name the agent in your message — `@marketing`, or a phrase like "use the marketing agent" — and it sticks for that chat; a chip above the composer shows the active agent, with an **×** to stop using it.

## Choosing connected apps

The coverage of a chat (or an agent) also depends on which apps are switched on. Use the **Apps** dropdown beside the composer to turn connected apps on or off for the current chat. An agent's own tool access is set when you build or edit it.

## Creating an agent

Click **Create agent** and describe the role you want. Starfish drafts the agent, then opens it in the builder where you can set:

- Name and description
- Avatar, icon, and color
- Model — **Auto** to match the chat, or a specific model
- System prompt
- Tool access — which integrations it may use

Click **Save** to add it to your library. Newly saved agents appear under **Built by me**.

In Simple mode the builder keeps the essentials and hides the model, system prompt, and tool controls.

## Installing and uploading

- **Browse templates** opens the template directory. Installing one adds a ready-made agent to your library; it's marked **Template**.
- **Upload agent** accepts a single `.md` file. Its body becomes the agent's instructions, and optional frontmatter can set the name, description, tools, color, icon, and model. You review everything in the builder before saving.

## Editing and deleting

- **Edit** — hover a card and click the pencil. Only agents you built can be edited in place; editing a pristine template forks it first. Once an agent is saved, the builder also carries its **memory** (what it has learned about how you like to work) and its uploaded resources. Memory opens in a roomy pop-up editor, so you can read and tidy it comfortably.
- **Delete** — hover a card and click the trash button, then confirm. Deleting an agent you built also removes its memory and uploaded files, and can't be undone. Removing a template simply uninstalls it — you can re-install it from **Browse templates** at any time.

A chat that was using an agent you delete falls back to the generic assistant.

## Persistence

Agent selections, tool access, memory, and your saved order persist across sessions and app restarts. Your configuration is always waiting when you come back.
