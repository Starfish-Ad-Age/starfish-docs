---
outline: deep
---

# Changelog

What's new in Starfish, newest first. The in-app **Settings → Changelog** shows a short summary of the latest versions; this page carries the full history and detail.

## 0.6.9-beta.26 — current

**Branch a chat to keep it focused.** Start a brand-new conversation from any reply — it carries everything up to that point as context, so you can chase a tangent, or give a long thread a clean restart, without losing the thread or letting it balloon. Look for **Branch** under any assistant response; branched chats are marked in the sidebar and link back to the conversation they came from.

**Copy any table the assistant makes.** Hover a table and a **Copy** button appears — it pastes as a real, formatted table into Google Docs, Sheets, Word, or email, so you never rebuild one by hand. Tables also picked up a subtle rounded frame.

**Much better slide decks, dashboards, and designs.** Visual and creative requests now render as a polished, self-contained page you can preview live, tweak with fast in-place edits (instead of regenerating the whole thing each time), and open full-screen — with a Preview/Code toggle and one-click copy. Logos and images embed directly into the page. If a request is ambiguous, the assistant confirms what you want before building.

**Hover tooltips across the app.** Hover almost any control — the message actions (Branch, Rewrite, Copy), the composer's Agents / Apps / Media, sidebar items like Marketplace and Open Workspace — and a short note explains what it does.

**Tool activity is easier to follow.** Instead of raw function names, the assistant shows what it's doing grouped by app — e.g. "Calling ClickUp · 5×" — which you can expand for the step-by-step detail.

**Automations are more reliable and smarter.** Runs that got stuck now self-heal, every run has a time limit so it can't hang, and completion is reported honestly — a run that was blocked or only partly finished no longer reports "done." Each run remembers the last one, and a quick readiness check verifies your connections and the task before you switch an automation on. A new **Improve task** button rewrites a rough instruction to be clearer and tool-aware, and asks you to confirm before applying it.

**ClickUp comments mention the right people, formatted.** When the assistant comments on a ClickUp task it now resolves real @mentions and posts with proper Markdown formatting — and tells you if a name couldn't be matched.

**Chats name themselves.** New chats get a title automatically from your first message.

**Model lineup.** Added xAI's **Grok 4.5** and OpenAI's **GPT-5.6 Luna** as selectable models in Advanced mode. The everyday **Balanced** model stays **Claude Sonnet 4.6** — its reliable one-hour prompt caching keeps it the cheapest in real use, even against models with a lower sticker price — and **Gemini 3.1 Pro** was removed.

**Cheaper video generation.** The default video model is now **Kling v2.6**, and models that couldn't actually generate video through the app were removed.

**Fixes and polish.** Fixed a rare error that could interrupt a chat right after it condensed a long conversation. The interface is friendlier throughout — softer rounded corners and shorter wording — with a small reminder that Starfish is AI and can make mistakes.

## 0.6.9-beta.25

**Voice typing runs on your device now.** Dictation is powered by NVIDIA's Parakeet speech model running locally instead of a cloud transcription service — your audio never leaves your Mac. Words stream in live as you speak and drop into the message when you finish. The model isn't bundled with the app (it's a few hundred MB); the one-time download starts the first time you click the microphone, or from **Settings → Voice**, where you can also choose which input device to use. The microphone is released the moment you stop.

**Apify connects again.** The Apify integration was pointing at a connection endpoint that Apify retired, so it silently failed to load its tools. It now uses Apify's current endpoint, and connections made before the fix heal automatically the next time the app starts — no need to reconnect.

**Rearrange your agents.** On the Agents tab you can drag your agents into whatever order you like, and the agent picker in the chat composer follows the same order.

**Google Workspace Chat: message people and manage spaces.** Listing your Chat spaces and their members is fixed (it was failing on an incorrect request), and the assistant can now send direct messages and add, update or remove members of a space. Sending and deleting are an explicit opt-in on a Read & Write connection, and before sending the assistant confirms exactly who and where with you first.

**Google Ads: upload images to your asset library.** You can now upload image assets straight into a Google Ads account's library for use in campaigns.

**Long chats can't trigger premium pricing anymore.** Very long, tool-heavy conversations could grow large enough to cross the point where the AI provider doubles its rates — which quietly ran up cost on big sessions. Every message is now hard-capped below that line: a long chat condenses its oldest raw tool data (the conversation itself is never rewritten), and if it needs those details again the assistant simply re-fetches them. Everyday chats are unaffected — this only ever kicks in on unusually long sessions.

**The token badge now shows how full the chat is.** Instead of a large, alarming lifetime token count, the badge shows the chat's context as a percentage of its working memory — which is what actually determines when older messages get summarized. Hover it for the full detail, including the lifetime total.

**"Best" is now Claude Sonnet 5.** The Best model tier is sharper than before and costs less than the previous Best. "Balanced" remains Claude Sonnet 4.6.

**Google Ads: remove assets from campaigns.** The assistant can now detach assets — for example, disapproved images or logos — so they stop serving on a campaign. (Google Ads never allows permanently deleting an asset from the account library; detaching is how you take it out of a campaign, and it's exactly what the Google Ads interface's "remove" does too.)

## 0.6.9-beta.24

**Big chats cost far less to run.** Long, tool-heavy conversations — like asking the assistant to pull and review every campaign in a Google Ads account — were quietly re-sending and re-caching the entire conversation on every message, which ran cost up fast. The app now caps how much a single turn can pull in, stops a runaway tool loop from ballooning the conversation, and keeps cached context warm for an hour so it's reused instead of rebuilt each time. Long chats stay responsive and much cheaper.

**Fewer interrupted messages.** The intermittent "Gateway request timed out" / "the model returned an error" that could cut off a reply mid-chat is fixed. The app now keeps its connection to the AI warm between messages and quietly retries a dropped connection instead of failing your message.

**The assistant knows exactly what it's connected to.** It now reports the precise Google services you've connected and at what access level, instead of sometimes claiming only Gmail is available. And when you've granted read-only access, it won't offer to create or edit files and then fail — it only promises what it can actually do.

## 0.6.9-beta.23

**Google Ads runs your whole account.** Beyond Search campaigns, the assistant can now build Performance Max campaigns, set up conversion tracking (leads, purchases, calls), add ad extensions (sitelinks, callouts, structured snippets, call assets), and create remarketing and Customer Match audience lists.

**Google Analytics can create, not just read.** GA4 can now create audiences, plus custom dimensions, custom metrics, key events, and data streams, and update property settings. Reconnect Google Marketing Suite and allow the new edit permission so these changes save.

**Connect Google Workspace read-only.** Connect Drive, Calendar, and Chat — not just Gmail — and choose Off / Read-only / Read & Write for each service, so you can connect a client's account for reference without granting the ability to edit or delete.

**Claude Sonnet 5 fixed.** Sonnet 5 was erroring on every message because it uses a new "thinking" mode; the app now sends the correct format.

## 0.6.9-beta.22

**Google Ads campaign creation works end-to-end.** Google's latest API quietly added a required field — an EU political-advertising declaration — that was blocking every new campaign behind an unhelpful generic error. The app now fills it in automatically.

**Clearer Google Ads errors.** When Google rejects an action, the app now shows the exact field and reason instead of a generic "invalid argument," so problems are obvious instead of guesswork.

**Manager (MCC) accounts.** Google Ads manager accounts can now create and manage campaigns on any sub-account — connect with your manager account ID and operate across every account it manages.

## 0.6.9-beta.21

**Complete Google Ads campaigns.** The assistant can now build a full campaign end-to-end — researching keywords (search volume and competition), setting locations and language, targeting the right audience (age, gender, household income, parental status), and tuning bids by device and time of day — instead of just a bare-bones ad. (Campaign creation, which had briefly stopped working against Google's latest API, is also fixed.)

**Analytics, Search Console and Tag Manager upgrade.** Much more of each is now available to the assistant: richer GA4 reports and account details, Search Console site and sitemap management, and full create/edit/delete for Tag Manager tags, triggers, variables, and versions.

**Dictation.** Tap the mic and the message box becomes a live waveform that moves as you speak; tap the checkmark and the transcription is added to whatever you'd already typed (never replaced).

**Long chats stay fast and affordable.** Older messages are automatically summarized before a conversation gets expensive, with a clear notice when it happens — nothing important is lost.

**All your chats are back in the sidebar.** It previously showed only the most recent ~50.

**Polish.** Sidebar icons animate on hover and menus open with smoother motion.

## 0.6.9-beta.20

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

