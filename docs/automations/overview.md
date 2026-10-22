---
outline: deep
---

# Automations

Automations run a saved instruction on a schedule. Same chat agent you'd talk to interactively, except it fires at a time you pick — daily standup digest, weekly client report, recurring campaign check — and writes its output into a chat session you can review later.

Open the Automations page from the **Automations** link in the sidebar, between Marketplace and Media. In Chat mode the same page is labelled **Scheduled work**.

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

1. Click **New** on the Automations page. (You can also pick one of the ready-made **Suggestions**, which opens setup with the request already written.)
2. Describe what Starfish should do, and when, in your own words, or tap the mic to say it. Click **Set it up**.
3. If anything is missing, Starfish asks its questions in plain words, all at once, up to five. You answer them one by one. It picks sensible defaults for the rest, for example "morning" means 8:00 AM.
4. Review **Here is what I set up**: **When it runs**, **What it does**, **What it may touch** and **Where the result goes**. Nothing is turned on until you say so.
5. In Developer mode, choose **who runs it** — a specialist agent or Starfish itself.
6. Under **How much it is allowed to do**, decide what it may change. The actions the task needs are listed; untick **Let it do these things when it runs** to make it read and report only. See also [Paid images and videos](#paid-images-and-videos).
7. Choose what happens next:
   - **Yes, test it now** — runs once against the real task (when it can act, the button says **Test it now — it really acts**). After the test you see the real result and can **Turn it on**, **Adjust it** or **Throw it away**.
   - **No, just turn it on** — activates it on its schedule without a test.
   - **Keep it, leave it off** — saves it without turning it on.

The Automations page lists every saved automation with its next-fire time.

### The setup check

Before an automation turns on, Starfish checks that it can really run. It knows what is in the automation's workspace, so a task that only uses workspace notes or meetings does not ask for an app.

- An app the task needs that is not connected gets one plain message, such as "ClickUp isn't connected. Connect ClickUp in the Marketplace, then re-check."
- If a specialist works best with an app you have not connected, setup says so with a **Connect it in Marketplace** link. Your setup is kept while you go there.

### Paid images and videos

An automation that makes images or videos only uses cheaper engines unless you allow more. Tick **Allow paid images and videos** under **How much it is allowed to do** to let it make expensive images and videos, and ones with no published price. It is off for new automations.

## Run history

Open an automation to see **Recent activity**. Each run explains in plain words what happened, what it produced, and which steps it was not allowed to do. **Open the chat** opens the run's chat, which is named after the automation and the date, for example "Weekly recap, Oct 19".

Each run shows one of these states:

- **Running** — it is working now.
- **Finished** — it did the work.
- **Needs you** — it is waiting for you, for example to answer one question or to reconnect an app. The run card, the detail page and the bell all say **Needs you**.
- **Failed** — it could not do the work. The reason is in plain words, such as "Reconnect Google in Settings to continue." or "ClickUp hit a usage limit for now. Run it again later."
- **Missed** — it did not run at its time.

If a run stops to ask one question, answer it on the automation and the work continues.

Repeating automations do the whole task on every run. A finished one-time automation shows **Run again**.

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

The bell and a Mac notification tell you when a run finishes, needs you or did not finish. Click one to open the run's chat.

In Developer mode, open **Settings → Automations** to choose which events notify you (**Notify on success**, **Notify on failure**, **Notify on cost-cap hit**, **Notify on missed catch-up**) and to set quiet hours. A run that needs you follows the failure setting. Notifications during quiet hours are queued and delivered when the window ends; automations still fire — only the desktop notifications wait.

## Limits

- Up to **15 automations** in total. Delete one before creating a 16th.
- Minimum interval between fires: **10 minutes**.
- A single unattended run is stopped after **30 minutes** if it has not finished.
- Run history is trimmed to the most recent **50** fires per automation.
