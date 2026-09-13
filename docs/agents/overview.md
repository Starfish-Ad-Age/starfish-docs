---
outline: deep
---

# Agents Overview

Agents are pre-configured AI assistants with specific instructions, model preferences, and tool sets. Instead of explaining your context every time you chat, create an agent that already knows your workflow.

## Why Use Agents

Without agents, every conversation starts from zero. You re-explain your role, your tools, and your preferences. Agents eliminate that overhead.

Each agent carries:

- **System instructions** -- persistent context the AI follows in every message
- **Default model** -- the preferred model for this agent's tasks
- **Tool access** -- which integrations the agent can access
- **Color, icon, and avatar** -- visual identification in the UI

## Example Agents

| Agent | Tools | Purpose |
|-------|-------|---------|
| Code Review Agent | GitHub | Reviews PRs, checks code quality |
| Marketing Agent | Facebook Ads, Google Marketing Suite | Creates campaigns, analyzes performance |
| Project Manager | ClickUp | Manages tasks, tracks progress |
| Content Writer | Google Docs, Drive | Drafts documents, organizes files |

## Agent Components

Every agent is defined by:

- **Name** -- display name shown in the UI
- **Icon and avatar** -- visual identifiers (a Lucide icon name plus an optional voxel avatar)
- **Color** -- accent color for the agent card
- **System instructions** -- the prompt that shapes the agent's behavior
- **Default model** -- which AI model this agent prefers (or Auto to match the chat)
- **Tool access** -- which integrations this agent can use

## How agents work

In Developer mode, choose the agent from the **Agents** dropdown in the composer:

1. Open the **Agents** dropdown in the composer area.
2. Pick what the chat runs as. The **Main agent** is single-select; **None (generic assistant)** clears it.
3. Start chatting. That agent's instructions, knowledge, and tools apply to every message.
4. Need a different specialist? Pick another one. It takes over from that point and sees everything said so far.

In Simple mode there is no picker: name an agent in your message — `@marketing`, or a phrase like "use the marketing agent" — and it sticks for that chat. A chip above the composer shows which agent is active, with an **×** to stop using it.

You talk to **one agent at a time** -- the one that's active. To combine strengths, work through part of a task with one agent, then switch to another and keep going; the new agent inherits the conversation, so handing off (for example, research with one agent and visuals with another) is just a click.

There's no hidden background delegation. You're always talking to the agent you picked, and you can see exactly what it's doing -- which keeps things predictable and easy to follow.
