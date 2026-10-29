---
outline: deep
---

# Subagents

In Developer mode, Starfish can split large work into subagents. A subagent is a separate agent that works in the background, in parallel with your chat, and reports back when it is done. Your chat stays free while subagents work.

Starfish starts subagents on its own for large work with independent parts, or for long research or build work. It does not use them for small or quick tasks. You can also ask for them: "use subagents for this", or name an agent.

Each subagent starts fresh. It does not see your chat, so Starfish gives it a complete brief. A subagent has the same tools as your chat. A read-only subagent can only look, not change anything.

## Naming an agent

With **Use subagents** on, naming one of your agents in plain words starts it as a subagent. For example, "ask the marketing agent to write three headlines" runs the marketing agent in the background and brings back its answer.

To have the chat itself answer as an agent instead, type **@** and its name, for example `@marketing`. See [Managing Agents](/agents/managing-agents#using-an-agent-in-chat).

If no agent has the name you used, Starfish tells you so. It does not start a different agent instead.

## In the chat

When Starfish starts a subagent, a card shows its name and status: **Starting…**, **Running**, **Completed**, **Error** or **Stopped**. If it could not start, the card says **Did not start**. Click the card to open the subagent.

When a subagent finishes, its report appears in the chat right away as its own card. Click it to show or hide the report. Starfish reads the report and continues the work. If the subagent changed files, a card with its changes appears under the report.

In the sidebar, a pulsing dot next to a chat means its subagents are still running.

## The Subagents panel

Once a chat has subagents, the right panel shows a **Subagents** tab. A number on the tab shows how many are running. The list has **Running** and **Done** sections.

Open a subagent to see:

- What it is doing, its status, type, model, time and tokens.
- Everything it does, live. Approvals it needs appear here too.
- **Stop** ends a running subagent.
- **Resume** continues a stopped or failed subagent from where it stopped, with its full history.
- A message box. While it runs, **Steer this subagent…** sends it new direction. Afterwards, **Send a follow-up…** gives it more work.

If the app restarts, running subagents stop. Use **Resume** to continue one.

## Settings

Subagents are on by default. In Developer mode, open **Settings → Models → Subagents**:

- **Use subagents** -- lets Starfish split large work into background agents that run in parallel and report back.
- **Maximum subagents at once** -- how many can run at the same time in one chat, from 1 to 8. The default is 4. When the limit is reached, Starfish waits for one to finish.
- **Notify me when delegated work is done or needs me** -- one notification per batch of subagents, only when you are not looking at that chat. Off by default.
