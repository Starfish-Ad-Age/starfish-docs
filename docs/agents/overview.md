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

## How Agents Work

1. Open the **Agent Selector** dropdown in the composer area.
2. Select one or more agents to activate. Active agents appear as pills above the composer.
3. Start chatting -- the agent's instructions and tool set are automatically applied.
4. Click an active agent pill to deactivate it.

You can activate multiple agents at once. When multiple agents are active, the main AI can delegate subtasks to them.

## Execution Modes

When multiple agents are active, Starfish supports three execution modes:

### Direct (Default)

The main AI decides when and whether to delegate tasks to active agents. It routes subtasks based on each agent's capabilities and the current request.

### Pipeline

Agents run sequentially in order. Each agent receives the output of the previous one. Useful for multi-step workflows like: research -> draft -> review.

### Parallel

All active agents run simultaneously on the same task. Their results are collected and presented together. Useful when you want multiple perspectives or need to gather information from several sources at once.

## Delegation and Task Tracking

When the main AI delegates to an agent, a **running task** appears in the chat. Each task shows:

- Agent name and status
- Activity log (tool calls, thinking steps)
- Real-time progress as the agent works

You can monitor all running agent tasks during a multi-agent session.
