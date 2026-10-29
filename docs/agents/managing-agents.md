---
outline: deep
---

# Managing Agents

This page covers the **Agents** panel, what an agent can do, importing and exporting agents, and using agents in a chat. Agents and teams are part of Developer mode.

## The Agents panel

Open the side panel and choose **Agents** (next to **Skills**). It lists your agents in two groups, **My agents** and **From templates**. At the top, **New agent** starts the agent creator in the chat (`/agent new`) and **Import** adds an agent from a `.md` file.

Each agent shows chips for what it can do, the connected apps it needs, and its model if it has its own. A switch turns the agent on or off. A team call skips an agent that is turned off.

Click an agent to see its instructions. From there:

- **Give it work** starts a chat message with "Use my … to".
- **Edit by talking** (agents you made) reopens the agent creator with `/agent edit`.
- The **⋯** menu has **Rename**, **Export as .md**, **Merge duplicates** (when two agents share a name) and **Delete**. Deleting an agent also deletes its memory and files, and chats that ran as it go back to the normal assistant.

## What an agent can do

- **Reads and reports**: the agent only reads and reports back. This is the default.
- **Can edit**: the agent may edit files and run commands, with your usual approvals. See [Permissions & Safety](/chat/permissions).

An agent uses the connected apps listed on it. Connect any missing app in the **Marketplace**.

## Import and export

- **Export as .md**, in an agent's **⋯** menu, saves the agent as a markdown file you can share.
- **Import** reads a `.md` file and shows a preview of the agent. Click **Add agent** to keep it, or **Cancel**.

An agent file is markdown: optional frontmatter for its settings, and the body as its instructions.

```markdown
---
name: Marketing Strategist
description: Creates campaign strategies and analyzes market data
color: orange
tools: gws, clickup
---

You are a senior marketing strategist. When the user asks for campaign
help, start by understanding their target audience, budget and timeline.
```

| Field | Description |
|-------|-------------|
| `name` | Display name; defaults to the file name |
| `description` | What work the agent takes and when to pick it |
| `color` | A named colour such as `orange` or `blue`, or a hex value |
| `icon` | One of the app's agent icons, such as `briefcase` or `search` |
| `tools` | Connected apps the agent needs, such as `gws, clickup` |
| `model` | A model from the App's list; without it, the agent uses Auto |
| `access` | `edit` lets the agent edit files and run commands; without it, the agent only reads and reports |

## Teams

Teams are on the **Teams** page in the sidebar. See [Agents Overview](/agents/overview#create-a-team) to create, edit and use them.

## Using an agent in chat

In Developer mode, type `/agents` followed by the agent's name (for example `/agents marketing`) and the chat runs as that agent.

In Developer mode with **Use subagents** on, `@marketing` in your message makes the chat itself answer as that agent. Naming it in plain words, such as "ask the marketing agent to…", starts it as a subagent instead. See [Subagents](/agents/subagents).

In Chat mode there's no picker. Name the agent in your message (`@marketing`, or "use the marketing agent") and it sticks for that chat. A chip above the composer shows the active agent, with an **×** to stop using it.

Your agents, teams and settings are kept across app restarts.
