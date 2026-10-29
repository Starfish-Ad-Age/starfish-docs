---
outline: deep
---

# Agents Overview

Agents are helpers with their own instructions. Each one has a name, a short description of the work it takes, the connected apps it needs, and its instructions. A **team** groups agents that work well together, so one request can be shared between them.

Agents and teams are part of Developer mode. Your agents are in the **Agents** panel next to **Skills** in the side panel, and your teams are on the **Teams** page in the sidebar.

## Create an agent from chat

Type `/agent new` in a Developer chat, or click **New agent** on the Teams page or in the Agents panel. You can also say it in plain words, such as "I want an agent that writes our launch emails".

1. Starfish asks what the agent should do, then a few short questions: its role and scope, what good work looks like, and which connected apps it needs.
2. Starfish writes the agent and tests it on a realistic sample task, then shows you the result.
3. Click **Save agent** to keep it, **Change something** to adjust it, or **Cancel**.
4. Once saved, click **Give it work**, or **Open in Agents** to see it in the panel.

To change a saved agent later, type `/agent edit` and its name, or click **Edit by talking** in the agent's details.

## Create a team

On the Teams page, click **New team**:

- **Create from chat** opens a chat where Starfish asks what the team is for, picks the agents that fit, and suggests new agents for any part of the work that none of yours covers.
- **Manual** opens a form. Enter a **Name** and **What it is for**, tick the agents that belong in the team, and click **Create team**.

You can also create a team in any Developer chat: say "create a team for …". Starfish shows the team on a card with its name, purpose and agents. Click **Save team** to keep it, **Change something** to adjust it, or **Cancel**. Once saved, click **Give it work**, or **Open in Teams** to see it.

## Use a team

In a Developer chat, say "use my Launch team to …" or type `@Launch team`. The chat leads the team: it splits your request into one part per agent, the agents work at the same time as [subagents](/agents/subagents), and you get one combined answer. If an agent needs something only you can answer, Starfish asks you in the chat.

Each team card on the Teams page shows the name to type, such as `@Launch team`. Teams need **Use subagents** to be on, which it is by default.

An agent that is turned off in the Agents panel is skipped when its team is called.

## The Teams page

The Teams page lists your teams. Each card shows the team's name, what it is for, and its agents. Use the **⋯** menu on a card to **Edit team** (rename it, change its purpose, add or remove agents) or **Delete team**. Deleting a team leaves its agents as they are.

## Use one agent

- **Let Starfish choose.** Your chats hand matching work to an agent as a subagent, based on the agent's description.
- **Name it.** Say "use my marketing agent to …" or "ask the marketing agent to …" to start it as a subagent.
- **Run the chat as the agent.** Type `@marketing`, or `/agents marketing`, and the chat answers as that agent.

See [Managing Agents](/agents/managing-agents) for the Agents panel, importing and exporting agents, and using agents in Chat mode.

## How to get good results

- **Build the team around the work.** One agent per kind of job, each with only the apps it needs: an inbox agent with Google Workspace, an analytics agent with Google Marketing Suite, a research agent for the web.
- **Write a clear description for each agent.** The chat uses it to decide which agent gets which part.
- **Write a clear request.** Say the goal, the scope (which account, site or time period), the result you want back, and when it's due.

| Weak | Strong |
|------|--------|
| Check my latest emails and analytics | Morning brief for today: 1) unread emails from the last 24 hours that need a reply, 2) website users and conversions for the last 7 days vs the week before. One summary with a section for each part. |
