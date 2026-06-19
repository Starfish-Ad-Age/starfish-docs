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
- **Enabled tools** -- which integrations the agent can access
- **Color and icon** -- visual identification in the UI

## Example Agents

| Agent | Tools | Purpose |
|-------|-------|---------|
| Code Review Agent | GitHub | Reviews PRs, checks code quality |
| Marketing Agent | Facebook Ads, Google Analytics | Creates campaigns, analyzes performance |
| Project Manager | ClickUp | Manages tasks, tracks progress |
| Content Writer | Google Docs, Drive | Drafts documents, organizes files |

## Agent Components

Every agent is defined by:

- **Name** -- display name shown in the UI
- **Icon** -- visual identifier (Lucide icon name)
- **Color** -- accent color for the agent card
- **System instructions** -- the prompt that shapes the agent's behavior
- **Default model** -- which AI model this agent prefers
- **Enabled tools** -- which MCP tools and integrations this agent can use

![Agent panel showing available agents](/images/agent-panel.png)

## How agents work

1. Open the **Agent selector** dropdown in the composer area.
2. Pick the agent you want. It becomes the agent this chat runs as -- its instructions, knowledge, and tools apply to every message.
3. Start chatting. That agent stays in control of the conversation.
4. Need a different specialist? Just pick another agent. It takes over from that point and sees everything said so far.

You talk to **one agent at a time** -- the one you've selected. To combine strengths, work through part of a task with one agent, then switch to another and keep going; the new agent inherits the conversation, so handing off (for example, research with one agent and visuals with another) is just a click.

There's no hidden background delegation. You're always talking to the agent you picked, and you can see exactly what it's doing -- which keeps things predictable and easy to follow.
