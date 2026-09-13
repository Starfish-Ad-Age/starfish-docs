---
outline: deep
---

# Automations

Automations run a saved instruction on a schedule. Same chat agent you'd talk to interactively, except it fires at a time you pick — daily standup digest, weekly client report, recurring campaign check — and writes its output into a chat session you can review later.

Open the Automations page from the **Automations** link in the sidebar, between Marketplace and Media. In Simple mode the same page is labelled **Scheduled work**.

## What an automation is

An automation is a saved configuration with:

- **Name and description** — for you to remember what it does.
- **Schedule** — daily, weekly, every N (for example, "every 2 hours"), or a one-off at a specific date and time.
- **Instructions** — the prompt the agent runs on every fire.
- **Who runs it** — an optional specialist agent, or Starfish decides.
- **Connected apps** — which apps it may use (Google Workspace, ClickUp, etc.).
- **Approval** — you see the exact actions the task needs. One switch allows them; untick it and the automation reads and reports only. Deletes and overwrites are always blocked.
- **Catch-up on launch** — on by default: a missed run fires once the next time you open the app.

Each fire creates a real chat session you can open and inspect. Sessions are labelled with the automation's name in the sidebar so they're easy to tell apart from regular chats.

## When to use one

- **Daily summaries** — "Every weekday at 8 AM, list my overdue ClickUp tasks, group by space, and email me a markdown summary."
- **Campaign monitoring** — "Pull yesterday's Facebook Ads spend and ROAS by campaign, and alert me if any dropped more than 30%."
- **Content pipelines** — "Every Monday, draft a LinkedIn post about last week's product update."
- **Workspace memory rebuild** — kick a folder's knowledge document into a refresh on a schedule.

Anything you'd type into chat and want to fire on a clock.

## Creating an automation

1. Click **New** on the Automations page. (You can also pick one of the ready-made **Suggestions**, which opens the setup conversation with the request already written.)
2. Describe the outcome in your own words, or tap the mic to say it.
3. If anything is unclear, Starfish asks you about it and offers real choices — which client, which list, which time.
4. Review the summary: **when it runs**, **what it does**, **what it may touch**, and **where the result goes**, plus the exact facts it will use.
5. In Developer mode, choose **who runs it** — a specialist agent or Starfish itself.
6. Decide what it may change. The actions the task needs are listed and pre-selected; untick the box to make it read and report only.
7. Choose what happens next:
   - **Test it now** — runs once against the real task (a granted action really happens).
   - **Just turn it on** — activates it on its schedule without a test.
   - **Keep it, leave it off** — saves it without turning it on.

The automation starts firing on its schedule. The Automations page lists every saved automation with its next-fire time.

## Run history

Each fire is recorded with a status — `running`, `completed`, `delivered`, `failed`, `cancelled`, or `missed` — plus cost, token count, duration, and a link to the underlying chat session. Open an automation to see **Recent activity**, where each run explains in plain language what happened, what it produced, and which steps it was not allowed to do.

If a run stops to ask one question, a prompt appears on the automation row so you can answer it and let the work continue.

## Concurrency

Default policy is **skip** — if a run is still in flight when the next fire is scheduled, the new fire is marked `missed` and the in-flight run continues. This prevents runaway cost on long-running automations.

## Catch-up on launch

When your Mac was asleep, or Starfish wasn't running, scheduled fires get skipped. Catch-up on launch is on by default: the first launch after a gap runs the automation once if any fires were missed (occurrences older than 24 hours are not caught up). The catch-up run is marked separately from a normal scheduled run.

## Workspace context

When an automation carries a project (and optionally a folder) scope, each run picks up:

- The project's [custom instructions](/workspace/projects)
- The project's [memory document](/workspace/memory)
- Any [knowledge files](/workspace/knowledge-files) attached to the project / folder

Folder context overrides project context inside its folder, same as interactive chats.

## Notifications

Open **Settings → Automations** to configure per-event notifications (success, failure, cost cap, missed catch-up) and quiet hours. Notifications during quiet hours are queued and delivered when the window ends; automations still fire — only the desktop notifications wait.

## Limits

- Hard cap of **15 automations** per workspace. Delete one before creating a 16th.
- Minimum interval between fires: **10 minutes**.
- A single unattended run is stopped after **30 minutes** if it has not finished.
- Run history is trimmed to the most recent **50** fires per automation.
