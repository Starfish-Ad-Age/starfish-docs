---
outline: deep
---

# Changelog

What's new in Starfish, newest first. The in-app **Settings → Changelog** shows a short summary of the latest versions; this page carries the full history and detail.

## 0.6.9-beta.20 — current

**Import large workspaces.** Importing a workspace that holds a lot of images — which can make its export file very large — used to fail with a confusing "couldn't read the file" error. Large workspaces now import correctly. (Under the hood, the import was being cut off at a 10 MB ceiling on how much of the uploaded file the app would read; that limit is now far above any realistic workspace.)

**Arrange your workspace your way.** You can now drag to reorder the projects on your Workspace screen, and the folders inside a project, into whatever order you prefer. Click **Reorder**, drag things into place, then click **Done** to save. The arrangement is a personal view stored on this device — it doesn't change anything for anyone else, and newly added projects or folders simply appear at the end.

## 0.6.9-beta.19

**GoHighLevel v3 and Agency OAuth.** The GoHighLevel integration now covers the v3 API in addition to v2 — most notably, the assistant can create, update, and schedule email campaigns. You can also connect using **Agency OAuth**: authorize once at the agency level and the assistant reaches every sub-account from a single connection, requesting per-location access as needed. The existing Private Integration Token option remains for connecting a single sub-account, and you still choose Read or Read + Write access when you connect.

**Smarter workspace and agent memory.** When a chat lives inside a folder, the knowledge the assistant saves is now routed to the right place: details specific to that folder's work stay in the folder, while information useful across the whole project is saved at the workspace level, so the same fact is no longer duplicated in both. The assistant also shows when it is drawing on a workspace's saved knowledge. Agent memory stays portable — an agent records only general, reusable preferences about how you like it to work, rather than details tied to one project, so it behaves consistently wherever you use it.

**Export and import workspaces.** You can now export a workspace to a single file from its page and import it into the app on another device. The export carries the workspace's instructions, its accumulated knowledge, and its knowledge files. Chats, agents, and automations are not included. Importing always creates a new workspace, so importing the same file twice never overwrites or merges into an existing one.

**Fixes.** A chat could remain marked as "running" after a task had already finished, which previously required switching chats for it to clear. Tasks now finalize as soon as they complete.

## 0.6.9-beta.18

**Storage management.** A new **Settings → Storage** tab shows every generated image and video stored on your Mac, with its size and date. Multi-select the ones you don't need and delete them, or clear everything older than 30 days (and anything orphaned by a deleted chat) in one click. Deleting frees the space but keeps the conversation text — only the media is removed.

**Connected apps stop guessing.** Every built-in integration — ClickUp, GoHighLevel, Facebook & Google Ads, Google Workspace, Google Marketing Suite, and QuickBooks — now tells the assistant when a list or report is only the first page of results. Instead of assuming it already has everything (and potentially making things up), the assistant knows to page through or tell you the result is partial.

**Calmer, more accurate permissions.** Only genuinely irreversible actions — deleting or overwriting data — show the red "can't be undone" warning. Routine, reversible steps like removing a tag, archiving, or un-sharing no longer trigger a false alarm.

**Switch Ask / Auto anytime.** Changing the permission mode now takes effect immediately — even in the middle of a task — not just on the next message.

**Agent management.** Delete agents you've built straight from the Agents page, and edit an agent's memory in a roomy pop-up editor instead of a cramped box.

**Create ClickUp Spaces.** The assistant can now create Spaces in ClickUp, not just folders, lists, and tasks.

**Convert videos in chat.** Point the assistant at a folder of videos and ask it to convert them (for example .mov → .mp4). It uses the built-in converter to write the results into a brand-new folder — your originals are never modified, renamed, or deleted — and shows a live progress bar in the chat with each file's name as it finishes.

**Edit images from chat.** Generated images in a normal chat now have an edit button (hover the image), just like on the Image Gen page. Click it to load the image as a reference and type a follow-up prompt to tweak it.

## 0.6.9-beta.17

The largest release so far, bundling several rounds of work.

**GoHighLevel, built in.** GoHighLevel now runs through a bundled integration that covers the full HighLevel API — contacts, conversations, calendars, opportunities, invoices, products, payments, social posts, and more — rather than the limited official connector. When you connect, you choose an access level:

- **Read** — the assistant can look things up across every area, but can't change anything.
- **Read + Write** — full access, including creating and updating records and sending messages. Destructive actions (like deleting a contact) always ask you to confirm first.

**One agent per chat.** Agents are now simpler: a chat talks to **one** agent at a time — the one you pick in the agent selector. Switch to another agent whenever you like and it picks up the conversation from where you left off, so you can hand work from one specialist to the next (e.g. research with one, visuals with another). The old background "sub-agent" delegation was removed — there's no hidden work, and you always see exactly what the agent you picked is doing.

**Knows when to stop.** The assistant no longer charges ahead and performs an action before you've answered a question it asked you.

**Simple and Technical modes.** Choose how much of the machinery you want to see, with **Quick / Balanced / Best** model tiers for picking speed vs. capability.

**Smarter memory of the conversation.** Long chats keep more context and stay sharp instead of "getting dumber" over time.

**Collaborative document editor.** Open a document the assistant created, edit it in the side panel, and the assistant sees your changes on your next message — like working alongside an editor.

**Quality-of-life.** One-tap reply rewrites (shorter, simpler, punchier…), real brand logos for connected apps, a cleaner activity indicator, and much smoother multi-chat — chats, queued messages, and live activity no longer disappear when you switch away and come back.

## 0.6.9-beta.15

- **Self-curating memory** — the assistant learns how you like to work and tailors itself over time.
- **Run a chat directly as a chosen agent.**
- Stability and security hardening.

## 0.6.9-beta.14

- **Agent builder** — create and edit your own agents: give them instructions, knowledge files, and the specific tools they're allowed to use.
- **Background dev servers** with a Servers panel for anything the assistant starts.
- Clearer, more accurate permission prompts and a more capable, persistent assistant.

## 0.6.9-beta.13

- **Clipify video editor** — edit by talking to it, with one-button rendering and a soundtrack library.
- **QuickBooks Online** integration.
- **Ask / Auto permission modes** — risky, destructive actions are blocked unless you explicitly allow them.

## 0.6.9-beta.12

- **Google Ads** integration — create and edit full campaigns.
- Clipify soundtracks that automatically duck under your voiceover.

