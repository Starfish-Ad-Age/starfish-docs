---
outline: deep
---

# Changelog

What's new in Starfish, newest first. The in-app **Settings → Changelog** shows a short summary of the latest versions; this page carries the full history and detail.

## 0.6.9-beta.46 — 2026-10-29 — current

Send a picture while a task is running and Starfish uses it in that task when it can. Automations save their result in their own workspace and pick up after a restart. Projects are now called workspaces everywhere, and updates come to signed-in accounts.

### Chat

**Send a picture while Starfish works.** Add a picture to a message while a task is running. Starfish uses it in the running task when it can. Otherwise it goes with your next message.

**Workspaces everywhere.** What was called a project is now called a workspace wherever it means a workspace. Project folders in Developer mode keep their name.

**Long chats.** Long chats are condensed less often, and Starfish can still look back at earlier parts of a chat after it is condensed.

### Automations

**Saved in its workspace.** An automation in a workspace saves its result there as a note. Saving there is part of the task, so it works with Create and update connected work turned off.

**Picks up after a restart.** If Starfish quits or your Mac sleeps during a run, the run continues where it stopped and does not repeat a step it already did, such as sending a message.

**Clear reasons.** A step that a setting does not allow names that setting. A run that prepared its result is shown as finished, with a note on what it was not allowed to do.

See [Automations](/automations/overview).

### Developer mode

**Folders on your other Mac in a new chat.** The folder picker of a new Developer chat lists the folders your other Mac shares. A folder on a Mac that is offline shows its state and cannot be picked.

### Your account

**Access checked while you work.** Starfish checks every few minutes that your account still has access. If access ends, Starfish signs you out and says so when you try to sign in again.

**Updates for signed-in accounts.** Updates download for a signed-in account with access.

### Security

**Updated components.** Starfish's built-in components, including the PDF viewer, are updated with security fixes.

**Sign-in pages stay on this Mac.** When you connect TikTok, GoHighLevel or ClickUp, the sign-in page Starfish opens can be reached only from this Mac.

## 0.6.9-beta.45 — 2026-10-27

Talk to Starfish with your voice, on your Mac or your phone. Select part of your screen and ask about it. Change a finished Studio deck by asking. In Developer mode, make skills, agents and teams by talking, and work in folders on your other Mac. Long chats stay fast, answers are shorter, and Starfish checks more before it acts.

### Voice and your screen

**Talk to Starfish.** Press ⇧⌘ Space, choose Talk to Starfish… in the menu bar, or click New voice chat under New Chat. A small voice window listens, starts and steers chats, tells you what is running, and tells you when the chats it started finish, fail or need you. Choose a full or compact voice window.

**Approvals by voice.** Say yes out loud to a simple step. A step that deletes, spends money or cannot be undone still needs a click.

**One voice chat.** What you and Starfish say is kept in one voice chat. Start again within 5 minutes and it continues the same chat. Stopping before you say anything leaves no empty chat.

**Voice on your phone.** Open your phone link and tap New voice chat. The sound goes through your Mac, and your AI key never leaves it. Voice runs on one device at a time.

**Ask about this screen.** Press ⌥ Space, or choose Ask about this screen in the menu bar or the + menu, then drag over part of your screen in any app. Space picks a whole window and Esc cancels. Ask in the bar that appears: the answer shows there, you can ask a follow-up, and the chat is saved in Starfish. Starfish needs Screen Recording permission and shows how to allow it.

**Voice & shortcuts.** A new Settings page in Chat mode and Developer mode. Change both shortcuts, the voice window style and position, the ask bar size and position, and the voice model. Voice can be used for 30 minutes a day, shared by your Mac and your phone.

**Voice is in preview.** New voice chat shows a Preview pill while voice is still new.

See [Voice assistant](/voice/voice-assistant) and [Ask about this screen](/voice/ask-about-this-screen).

### Studio

**Change a finished deck by asking.** Ask to add, remove, move or copy slides, replace a word everywhere, or switch the brand colour and fonts. Only the slides you name change, and interactive slides keep working.

**New slides match the deck.** Added slides use the deck's own layouts and style. Ask Starfish to look something up and it finds the facts on the web. New slides go before the score and closing slides unless you say "at the end".

**Undo.** Say "undo" to go back to the deck before the last change.

See [Studio](/studio/overview).

### Developer mode

**Skills by talking.** Type /skill or /create-skill, or just ask for a skill in plain words. Starfish asks what the skill should do and a few short questions (Skip uses the recommended answer), writes it, runs a test and saves it when you agree, for you or for this project. Skills are SKILL.md folders.

**Your skills in one place.** /skills opens the Skills tab: turn a skill on or off, run it, or edit it by talking. Skills from Claude Code and Codex folders show there too. A skill you did not make in Starfish asks before its first run.

**Agents by talking.** Type /agent new and describe the agent. Starfish writes it, tests it on a real task and saves it. The Agents tab in the side panel lists your agents.

**Teams from chat.** Say "create a team for …", or on the Teams page click New team, then Create from chat. Starfish puts the team together and shows it on a card to save. New agent on the Teams page starts a new agent the same way. See [Agents Overview](/agents/overview#create-a-team).

**Teams.** The Agents page is now Teams. Put agents in a team, then say "use my Launch team" or @Launch team in a chat. The members start at once and you get one combined answer. Teams you made before are there with their members; the old work board, decisions and results are no longer shown.

**Better subagents.** Subagents get the tools they need to do the work, use the custom agent that fits each part, and can hand their results to each other. A subagent only gets the apps its agent needs. When more start than your limit, the rest wait for a free slot. Settings → Models → Subagents can notify you when they need you or finish; it is off by default.

**Chats without a folder.** A Developer chat with no project folder can work on the files and folders you name.

**Only deletes wait.** With Local access set to Full Access, in Approve for me or Full access, the steps you asked for run without a card. Deletes and a few risky steps wait and are listed once at the end. Type "go" to run them. See [Permissions](/chat/permissions#local-access-set-to-full-access-developer-mode).

**Studio offer in Developer.** Ask for a deck in a long Developer chat and Starfish offers to continue in Studio, the same card Chat shows.

**The right skills for a site.** When you change a site already in the project folder, Starfish picks the website and design skills first, and a carousel on a site no longer starts a social post.

See [Subagents](/agents/subagents).

### Your other Mac

**Work in folders on your other Mac.** In Developer mode, work in folders on another Mac signed in to the same account with Starfish open. Read, change and create files and run commands there, with the same approval cards. The files stay on that Mac.

**Pair once.** On the Mac with the folders, open Settings → Remote, turn on Share folders and click Let another computer connect. On this Mac, click Connect to a computer, type the code and check that both screens show the same number.

**You choose what is shared.** Share only the folders you pick, or all project folders. While another Mac works there, a bar says so, and Stop sharing ends it at any time.

**Dots, push and pull.** Each shared folder shows a dot: green when connected, red when offline. Push and pull run on the other Mac with its own sign-ins.

See [Work on your other Mac](/phone/other-mac).

### Chat

**Chats sorted by workspace.** In Chat mode, a Workspaces section above Recents holds each workspace's chats. Click + on a workspace to start a chat in it. Pin a workspace from its menu to keep it at the top, in Chat mode and Developer mode.

**Tabs grouped by workspace.** Open chats from the same workspace fold into one tab with a count. Click it to see the list. On by default; turn it off in Settings → Appearance → Group tabs by workspace.

**Smart Auto.** In Chat mode, Auto picks a model for each message. Hard coding and reasoning work gets a model suited to it, and everyday questions stay on a fast one.

**Pages and small apps as a file.** A web page, calculator or small app Starfish makes shows in the chat as its file name. Click it to open the preview, comments and versions. Studio is unchanged.

**Your writing rules in your apps.** Comments, messages and emails Starfish writes into your apps are checked against your saved writing preferences before they go out.

**Emails ask first.** In Auto, sending an email always shows one card first. Preparing an unsent email does not.

**Shorter, easier answers.** The first line is the answer, paragraphs are short, bold marks what to look at, and a table appears only for a comparison. Your concise setting is followed more closely. Studio is unchanged.

**Answer an approval card by typing.** With a card waiting, type "go", "no" or "do 1 and 3" in the chat. It works for every kind of card, and text after "go" carries on as your next instruction.

**Business facts from the web.** Starfish can look up a business's name, address, website and public reviews, even when they appear in your files. A person's name, personal phone or email, and secrets from your files still stay in.

**Quieter steps.** Starfish's own steps, such as checking the guide, a skill or memory, show one line with no details. Connected apps, the web, files and commands keep theirs.

**Attachments are not instructions.** Text in an attached or pasted file no longer changes the shape of the answer. For example, a list in a file no longer turns the reply into a long list.

### Long chats

**Compact when idle.** After about an hour away from a long chat, Starfish condenses what it carries forward, so your next reply is faster. The whole chat stays visible. On by default, in Settings → Personalization.

**Compaction on time.** Long chats now compact based on what is really sent, keep exact numbers, codes, dates and names, and no longer carry too much in the first reply after an update or restart.

**Stays fast.** Finished replies now free their memory, so Starfish no longer slows down after many long chats.

**Resume keeps your answers.** When Starfish restarts in the middle of a long task, it carries on with the facts it found and the answers you gave, and does not ask again.

**App results fit.** Big results from connected apps are shortened like other results, so a new chat no longer compacts on its first reply.

### Notifications and meetings

**Notification settings in both modes.** Notifications and Do not disturb are at the top of Settings → General, and the bell's Notification settings link goes there in Chat mode and Developer mode.

**A quieter meeting prompt.** "In a meeting?" now shows for real calls, not for dictation tools or Starfish's own voice. Never for this app turns it off for that app; remove an app again in Settings → Meetings. Closing the prompt keeps the app you were using in front.

### Security

**Pictures and links.** Pictures from the web in an answer show as links you click, so a page cannot send your data out through an image. Links to other programs on this Mac open in your browser, not in Starfish.

**Web addresses checked.** Before Starfish opens a web address that did not come from you, a search or a connected app, it checks that the address does not carry your data out.

**Commands that change things ask.** In Developer mode with Ask, commands such as npm test, or ones that write a file, show an approval card. Plain reads such as ls and git status do not.

**The whole message is checked.** The safety check reads the whole message or email before it is sent, however long, and automations that send go through it too.

**A harder app.** Your AI key stays out of the built-in terminal, only one copy of Starfish runs at a time, and the app checks its own files when it starts.

### Apps and speed

**Sites on the new service.** Sites now run on Starfish's new Sites service, live since 26 October. Your existing site links keep working.

**More GoHighLevel actions.** Starfish can use 1,486 GoHighLevel operations, up from 1,203. Approvals work as before.

**A faster in-app browser.** Clicks and typing no longer wait for the cursor, pages stop loading as soon as they are ready, and safe steps skip the screenshot check.

**Public links open.** The in-app browser opens public links, such as a Google Form you found, without an extra check.

**ClickUp Docs.** ClickUp documents are now real ClickUp Docs you can edit.

**Starfish Server.** The server Starfish runs in the background now shows as Starfish Server in Activity Monitor.

## 0.6.9-beta.44 — 2026-10-19

Studio is back and makes slide decks. Describe the deck, answer a question or two, then edit, tweak and share every slide. A long chat can continue in Studio, and a finished deck goes to Google Drive or ClickUp. Meetings remind you to tell the people in the call, and a meeting can belong to a workspace. Automations tell you when they finish or need you. Starfish asks before it makes an expensive video.

### Studio

**Slide decks from a few words.** Studio is back in the sidebar with a new icon, in Chat mode and Developer mode. Describe the deck and Studio asks only the questions it needs, skipping anything you already said. Choose Quick, Polished or Deep reasoning.

**Steer while it builds.** Send more instructions while the deck is building. Studio adds them to the slides it has not written yet.

**Edit any slide.** Select, comment on a slide and apply the comments, edit text in place, and drag or resize any element. Undo and redo work, and every change saves a version you can preview and restore.

**Tweaks.** Change the deck's accent colour, text size, spacing and corners for the whole deck. One button resets the original look.

**Pictures.** Studio adds icons, brand logos and illustrations in one matching style per deck. Comment on a picture to redraw it, or add your own photo from your Mac. Say "no illustrations" and Studio does not ask about them.

**Interactive decks.** Reveal, tabs, steps, quizzes, polls, flip cards, timers and more work the same in the editor, in Present, in a shared link and in the downloaded file. Training decks get knowledge checks with a score at the end.

**Export, share and present.** Export to PDF, PowerPoint (exact or editable), PNG slides and an offline HTML file. Share a deck with a link, or present it full screen.

**Remembers your brand.** Studio remembers your brand, tone and choices per client and uses them next time. It can read brand colours and logos from your chat or your uploads.

**From a chat to Studio.** In a long chat, asking for a deck offers to continue in Studio. Studio takes the whole chat along and asks only what the chat did not answer.

**Send to Google Drive or ClickUp.** When a deck is done, Save this to Google Drive and Send to ClickUp ask you where to put it before they upload. If a step needs your OK, the approval card shows right in Studio.

**Told when it is ready.** The bell and a Mac notification tell you when a deck needs answers, is ready or has paused.

**Studio on the phone.** Open a deck on your phone, edit its text and use Tweaks.

**Decks only.** Studio now makes slide decks. Website concepts you made earlier stay in Studio to view, download or delete.

### Meetings

**A reminder at the top of the screen.** Every time a recording starts, a short notice at the top of your screen reminds you to tell the people in the call that you are taking notes, and the Mac plays a short sound. The meeting keeps when the reminder was shown.

**Take notes starts at once.** Take notes in the "In a meeting?" prompt starts recording straight away. The recording pill and the prompt show reliably again, also after you dismiss one.

**Meetings in workspaces.** Add a meeting to a client or project workspace. Its notes are then available in that workspace's chats, and the workspace page lists its meetings. In a team workspace, Starfish asks first, because teammates will see the notes and transcript.

**A meeting player.** Play, pause, skip 15 seconds, seek and change the speed of a recorded meeting. Recordings are kept for 180 days.

**Transcription on your key.** Transcription and live captions run on your own Vercel AI Gateway key, or on this Mac.

See [Meetings](/meetings/overview).

### Automations

**Simpler setup.** Setup asks its questions in plain words, all at once, and picks sensible defaults. It knows what is in the automation's workspace, and an app that is not connected gets one plain message with a link to Marketplace.

**Told when it matters.** The bell and a Mac notification tell you when a run finishes, needs you or fails. Click it to open the run.

**Clear states.** A run that is waiting for you says Needs you on the run card, the detail page and the bell. Failures are in plain words, such as "Reconnect Google in Settings to continue."

**Does the whole task.** Repeating automations do the whole task every run. Run chats have plain titles and show your request. Finished one-time automations show Run again, and turning one on is faster.

See [Automations](/automations/overview).

### Video and media

**Asks before an expensive video.** Before a video is made, Starfish shows its length, size and engine. It asks before it makes an expensive video, or one on an engine with no published price.

**Videos open.** The Videos tab on the Media page opens, and clicking a video opens it in its chat or in a viewer. Stabilise gives much steadier video.

See [Video generation](/media/video-generation).

### Privacy and your data

**Your Vercel plan.** Starfish asks which Vercel plan your key is on and shows what that means for your data. New users answer it in setup. Everyone else sees a small banner until they choose, in Settings → General.

**Remove sensitive information.** Starfish removes things like social security numbers, card numbers, bank accounts and ID numbers before your message goes to the AI. On by default; turn it off in Settings.

**Private providers only.** A new switch in Settings → Models sends your chat requests only to providers that do not train on your data and keep no copy. Off by default. Some chat models are not available while it is on. Images, video, dictation and read aloud use their normal providers.

**Sync is your choice.** New installs do not sync until you turn it on. A Mac that already synced asks once: "Keep syncing this Mac?"

**Your account, your data.** Download my cloud data gives you a zip of everything Starfish keeps for you in the cloud, and you can delete your Starfish account in Settings.

**Plain names.** Your AI key is called Vercel AI Gateway key everywhere. Settings has an Open-source licenses list.

### Chat and phone

**Fewer questions.** Starfish still asks for facts only you know, such as names, prices and dates. It decides tone and structure itself and tells you what it picked.

**Nothing lost.** Long plans and reports are no longer cut short, the same answer no longer shows twice, and new chats get their real name without a click.

**A sharper second opinion.** On a hard or high-stakes step, Starfish asks its advisor. The advice is now shorter and clearer, says so when the plan is already right, and keeps to the facts it was given.

**Artifacts on the phone.** Artifacts open full screen on the phone and Back closes them. Pinch and double-tap zoom the artifact, slide decks show one slide per screen with swipe, and the phone no longer shows "Do this on your Mac" for things you did not tap.

## 0.6.9-beta.43 — 2026-10-13

### Teams

**Create a team.** Create a team in **Settings → Team** and invite people with a code. They paste the code in **Settings → Team → Join**. Invite links and email invites are coming soon.

**Share a workspace.** Share a workspace with your team and choose **Can edit** or **Can view**. Your chats stay private: only the workspace's files, folders and instructions are shared.

**Manage who is in.** Remove someone and they lose access to everything the team shares. You can add them again later with a new code. Deleting a shared workspace removes it for everyone in the team, and Starfish warns you first.

**Your team on the phone.** See who is in your team and what it shares from your phone.

**Sign in from Settings.** Team and Sync have a **Sign in** button, and you come straight back to Settings afterwards.

See [Teams](/workspace/teams).

### PDFs

**Tables across pages.** Long tables continue on the next page, and their header row repeats.

**Coloured pages.** A page with a coloured background is coloured right to the edge.

**Every slide of a deck.** Turn a slide deck into a PDF, choose **Open all sections**, and every slide is in it, one slide per page, not only the one on screen.

**A plain question first.** When Starfish needs to ask what a PDF of an interactive page should show, the question is in plain words.

**The viewer fits the page.** A PDF opens at full width, so nothing is cut off on the right.

**PDFs in Developer mode.** Developer mode makes a PDF in one step instead of going round in circles.

### Images and slide decks

**Every version in one place.** Several edits of one image in a reply show as one picture. Step through them with the arrows.

**A clearer image editor.** Messages in the image editor no longer cover its buttons, and choosing an area to edit works on the phone.

**Slide decks that look consistent.** Slide decks made in the chat share one tested design, and each slide prints on its own page.

### TikTok

**TikTok Organic for every client.** Connect each client's TikTok account in **Marketplace > TikTok Organic > Connect account** and sign in once. Starfish keeps every sign-in on your Mac and renews it automatically. Rename or disconnect an account at any time.

**Work with posts and comments.** See profile and video statistics, read and answer comments, hide comments, and publish videos and photos. Publishing and commenting follow your approval setting, and Starfish never deletes a comment unless you ask it to or say yes.

**The right account every time.** Name one client and Starfish uses only that account. Say "all" or "compare A and B" and it uses those accounts without asking. A misspelled name gets one "Did you mean ...?" question.

**TikTok Ads reports per client.** A TikTok Ads report covers only the client you name, "all" compares every advertiser, and Starfish asks one short question only when it is unclear. Automations must name the account or advertiser in the prompt.

See [TikTok](/integrations/tiktok).

### Faster and smoother

**Faster, smarter tool choice.** Starfish picks the right tools for a task faster and more precisely.

**Reading files needs no permission.** Starfish can list, read and search your files in every mode, whatever your Local Access setting. Secret files, such as SSH keys, keychains, `.env` files, browser passwords and Starfish's own data, stay off limits. Writing files and running commands still follow your settings.

**Fewer safety holds.** Starfish stops to ask you less often for safe steps, and it no longer repeats a step that was already blocked.

**Choose a folder with /project.** In Developer mode with no folder chosen, Starfish asks you to type **/project**, pick the folder and send your message again.

**Your time zone.** New calendar events use your Mac's time zone.

## 0.6.9-beta.42 — 2026-10-04

### Faster and cheaper long chats

**Steadier replies.** A chat stays with the same AI service while it works, and moves to a backup only if that service fails.

### Chat tabs and several chats at once

**Chat tabs.** Your open chats sit as tabs in a row along the top. A dot on each tab shows whether it is still working, has finished, or needs your answer. Turn tabs off or on in **Settings → Appearance → Chat tabs**.

**Each chat keeps its own settings.** The model and approval choice you pick stay with that chat.

**Switch without losing work.** Moving to another chat or starting a new one never stops a chat that is still running, and your message is saved the moment you send it.

### The new look

**A cleaner sidebar.** Chats and projects sit in one tidy list with status dots and actions on hover. Search shows your recent chats and quick actions before you type.

**Menus that match.** Right-click menus and the chat menu look and work the same everywhere. Rename a chat from the menu at the top, and deleting a chat asks first.

**One card for approvals and questions.** Approvals and questions share one clear design, and a risky step is clearly marked.

**A darker dark mode.** Dark mode is deeper, and text is easier to read in every theme.

**Simpler Settings.** Settings share one clean layout with a search box. The light and dark switch lives in **Settings → Appearance**, and notifications are in the sidebar.

**Calmer answers.** Each answer shows how long Starfish worked in one place, the answer actions are simple icons, and a stopped reply says when you stopped it. Animations are quicker, and Reduce motion is respected everywhere.

### The browser

**Works in background chats.** A chat you are not looking at can still use the browser, and each chat keeps its own browser tabs.

**A small live preview.** A floating picture-in-picture preview shows the browser while Starfish works, with controls when you hover. Close it and it stays closed for that task.

**See where it clicks.** A cursor moves across the page, so you can follow every click and what Starfish types.

**Uses the browser when you ask.** Ask Starfish to use the browser for research and it does. If a site asks for your camera or microphone, Starfish stops and asks you first.

### Developer mode

**Commit, push and pull request.** Commit, Commit and push, or Push and create PR right from the app, using your GitHub connection. A button that cannot be used tells you why.

**The Changes view.** See every changed file in your project, tick the ones you want, and read their changes together in colour. The Edited files card has a View changes button.

**Undo a turn.** The undo icon next to Copy puts your files back to how they were before that turn and every later one. New files and the chat stay.

**Clearer runs.** Commands show as their own rows, a finished run opens into a list of its steps, and you can set the effort in the model menu.

### Memory

**No more 50-item limit.** A short core is always used, and any number of notes are found when they matter. Imports from other AIs no longer hit a limit.

**Learns how you work.** Starfish learns how you work, including with each client. Facts about a client go to that workspace's memory, not your personal memory. Secrets and account numbers are never saved.

**Memory summary.** **Settings → Personalization → Memory summary → Manage** shows a readable summary of what Starfish knows. Use **Dive deeper** to explore a topic, or **Ask or update** to ask or change your memory in plain words.

**Smarter recall in Developer mode.** Developer mode finds the right memory more often, even when you word things differently.

### More to try

**Create a workspace from a chat.** In Chat mode, open **+ → Files → Create a workspace from this chat**. In Developer mode, type **/workspace**. Starfish suggests the name, main instructions, folders with their own instructions, and starting memory. Review and edit everything, click **Create**, and the chat moves into the new workspace. With no chat open, it first asks what the workspace is for.

**Import from other AI.** **Settings → Import from other AI** gives you prompts to copy into ChatGPT and other assistants. Paste their replies or upload files, a zip too, to bring your memory and projects into Starfish. The import runs in the background, and you can review and undo it.

**Better PDFs from web pages.** A web page saved as a PDF now looks exactly like the page. If the page is interactive, Starfish asks first.

**New image and video models.** A new image model and a new default video model. Starfish can also remove a background, make an image square, resize, compress or convert it.

**Files open in Starfish.** File links in the chat open inside Starfish.

## 0.6.9-beta.41 — 2026-09-27

This is a big update. Give your chats a wallpaper, build teams of agents that work together, fine-tune a website right on the page, and run SEO site audits in the chat. Reports and PDFs are more trustworthy, long tasks keep going on their own, and the app starts and switches chats faster.

### New

**Chat wallpapers.** Pick a wallpaper for a new chat in **Settings → Appearance → Wallpaper**. Choose one of thirteen artworks, upload your own image, or pick None, and turn the gentle **line effect** on or off.

**Designer (Developer mode).** Preview your site at real desktop, tablet and phone sizes, or pop the preview into its own window. Select, comment on or edit text right on the page, and send it to the chat so Starfish makes the change.

**Agents (Developer mode).** Build teams of agents, a lead with specialists, shown as an org chart. Give the lead a goal and it splits the work. Watch the team talk live, answer their questions in one questionnaire, and collect finished reports, PDFs and web pages in **Deliverables**. Start fast from a template. All teams share a daily budget you can change, and write actions are off until you turn them on; even then, you approve each one.

**Search Studio.** Built-in SEO site audits: Starfish checks a public site page by page, lists the issues by how much they matter, and adds page-speed scores using your Google connection.

### Improved

**Reports and PDFs you can trust.** Reports and PDFs no longer include made-up figures, and a PDF never stops to ask where to save it.

**Web page previews look right.** An HTML preview now shows its images and styles.

**Clean file links.** Links to your files show just the file, not a long folder path.

**Long tasks keep going.** If the connection drops partway through, Starfish picks the task back up on its own. No more typing "Continue".

**Faster start, smoother switching.** The app opens faster, and moving between chats no longer flickers or goes blank.

**Better video stills.** Stills and moments keep the video's true colours, work across two videos at once, and find every video you uploaded, in branched chats too.

**Word-for-word dictation.** Dictation writes exactly what you said, without the "um"s.

**Real browser tabs.** Starfish can list the open tabs and switch between them.

**Big documents.** Very large documents and files are read reliably, in parts.

**Safer by design.** The app's local connection now only talks to the Starfish window, and web pages made by agents open in a safe sandbox.

**Developer mode.** Servers Starfish starts no longer clash with your project, clear Allow and Reject cards ask before a step runs, files are tidied when saved, you can drag and drop into the terminal, and GitHub uses the account you connected.

**Small touches.** Progress notes fold away when you come back to a chat, and the task-steps card now sits to the side.

## 0.6.9-beta.40 — 2026-09-18

A long conversation now shows its own housekeeping: when Starfish compresses the history it says so, in the open, and lets you keep typing. A long research answer arrives as a document with a short written summary. The browser only opens when you ask, connected apps load only when the work needs them, and a run that stops making progress ends instead of looping. The browser can also keep several pages open at once, each in its own tab; watching a video says so while it runs; and a question that needs a fresh look at the video gets one. Media gains a real cleanup path, PDFs have to pass a quality check before they count as done, and GitHub connects without the Terminal.

### New

**A long answer as a document, with a written summary.** When a reply is long enough to be a report — a research brief, a multi-section write-up — Starfish saves the whole thing as a document and writes a short summary in the chat: the single most useful conclusion or recommendation, at most two sentences, followed by the pointer to the card. You get the answer immediately and the detail a click away, instead of a wall of text in the transcript. The summary is written for the person who asked — it states the conclusion, never restates the title, and does not open with "This report". If the document cannot be produced, the full answer still lands in the chat. Auto-continue no longer carries a finished long answer on into another round.

**Clean up a photo or a clip by asking.** A new deterministic media pass covers what people actually ask for, applied to the file with real ffmpeg filters rather than redrawn: remove a grade or filter, naturalise, auto white balance, normalise, histogram equalise, HDR-to-SDR, match a look against a LUT, and adjust exposure, brightness, contrast, saturation, gamma, temperature, tint, colour balance, channel mixer and curves; crop, pad and rotate; remove a logo or watermark (delogo); denoise, sharpen and stabilise; and strip metadata. A report mode tells you what has already been done to a file and what is recoverable. HDR sources (10-bit BT.2020/HLG) are detected and tone-mapped to BT.709 for every SDR output, so a still pulled from an iPhone clip looks faithful instead of "filtered". **HEIC**, **HEIF** and **AVIF** images are decoded through the Mac's own `sips` for every media path, so an iPhone photo now works where the bundled ffmpeg had no HEIC decoder. Requests that need invented pixels — unblur, remove an object or person, restore detail or a face — are refused with a plain explanation and an ask-first prompt, and a cleanup request can never reach a generative tool. Nothing normalises on its own: upload, preview, extraction and generation are untouched unless you ask.

**Starfish learns how you like to work.** A profile Starfish carries into every reply: your **occupation or designation** (and, if it is a technical one, a technical register rather than the basics), what you want to be **called**, anything else in your own words, a **tone** (professional, friendly, candid, quirky, efficient, cynical), and how much warmth, enthusiasm, headers and lists, and emoji you want. You can also give standing **custom instructions**, turn on **Fast answers** (answer from general knowledge without memory or connected sources), and choose whether **starter prompts** appear on a new chat. It is set up when you first open the app and lives in **Settings**.

**A PDF has to pass a quality check before it counts as done.** Before Starfish claims a PDF is ready it rasterises the pages and checks for **blank pages**, content lost against the **previous version**, a **shrinking page count**, and unreadable **text or fill contrast** — measured at 1000px so small type is judged fairly, and polarity-aware so light-on-dark is read correctly. A `#datatable` helper makes the correct contrast the easy path. If a problem survives two repair attempts the file is still written, with a plain warning that names the issue, instead of trapping the model in a retry loop.

### Improved


**A tidier transcript.** The tool-activity summary is now a single clean line — the apps used and the **source favicons**, one click to expand the detail. The green tick, red cross and amber shield glyph and the expand chevron are gone; a group that needs attention simply reads in amber. File cards were slimmed to the **name**, a **Created**/**Updated** badge, and the **Save** and **Open** buttons, and the long-chat rail sits a little further from the text.

**Markdown reports open as a rendered document, diagrams included.** A markdown deliverable now opens as a **rendered preview** — headings, tables and **Mermaid** diagrams included — rather than raw text, and it carries the whole answer. Research and report output is also required to include the **diagrams it refers to**, matched in-text.

**The skills got better, including a new one.** The analytics, research, reports, spreadsheets, ads, social, brand, browser, video and editing skills were upgraded for executive-quality output, and a new **code-changes-and-pull-requests** skill was added. The personalization designation now drives what Starfish recommends.

**Video colour is faithful, with an untouched path.** Converting or extracting from an HDR source now tone-maps it to BT.709 by default so an SDR output looks like the original instead of a flat, colour-stripped decode. When you ask for the original raw frame, `colour: "untouched"` leaves the frame data exactly as it was.

**Watching a video shows on the orb, with honest timing.** While Starfish watches a video the activity orb says so — "**Watching the video you sent**" for a YouTube link, "**Watching your video**" for a file — with a plain note that a long video takes a while, and then "**Writing up what it watched**" while the memo is prepared. A watch that fails does not claim it is writing anything up. The same wording reaches both the live orb and a durable run's own progress line.

**Opening a link is not the same as asking what it says.** "Open this", "play this" or "show me this" opens the link in the browser panel; "what does it say", "what does it contain", "summarise it" or "transcribe it" reads the video. The two are now separated in the guidance, so a link the person asked to open is never sent to the video reader, and a question about a video's content is never answered by merely opening the page.

**A visual question about a video gets a fresh look.** Questions that need eyes on the actual pixels — the best moments, cinematic stills, faces, close-ups, framing or lighting, thumbnails and cover images, favourite or different frames — now re-watch the video and return precise timestamps and reasons, instead of answering from the earlier summary. The set of questions that triggers this now also recognises "favourite", "different", "other", "cinematic" and "portrait", alongside the earlier quality and shot words. Ordinary questions — what the video is about, what happens in a given range, the prices shown, the speakers, the length, who appears — still use the memo and do not pay for a second watch.

**The video memo keeps a timeline.** The compact summary Starfish keeps for later questions now ends with the video's timeline: a sampled, chronological set of ranges, each with its visuals, speech, on-screen text or audio and absolute `mm:ss` timestamps. It samples across the whole video — including the last part, so the end is represented — and drops middle entries rather than the ends when it has to fit the budget. "When did that happen" can now be answered from the memo, without watching the video again.

## 0.6.9-beta.39 — 2026-09-16

### Improved

**An edit keeps your picture.** Editing an image now goes back to the image engine on the **same canvas as the original**, so "add a blue glow to this photo" adjusts that photograph instead of returning a redrawn version of it. The reference image is handed to the engine, and the source's own proportions are preserved.

## 0.6.9-beta.38 — 2026-09-16

### Improved

**Starfish prepares while you type.** The next reply is classified and the connected apps are checked while you are still writing, so the work begins the moment you send.

### New

**Ask for one app, get all of it.** When a reply needs a connected app whose tools are not loaded yet, Starfish loads that app's **complete toolset** and keeps working — every tool the app offers, not a subset.

## 0.6.9-beta.37 — 2026-09-13

Starfish now **checks your spelling and grammar as you type**, **rewrites what you have written** on demand, and **types with your voice** using a cloud speech model of your choice. Generated images and video appear where the finished result will land, Simple mode picks up the Developer layout, and switching between Chat and Developer leaves the chat running. The rest of the release is fixes.

### New

**Spelling and grammar as you type.** Starfish checks your message as you write it with **Harper**, running entirely on your Mac. Problems are underlined in the message box; click one to fix it, ignore it, or add it to your dictionary. **Settings → Spelling & grammar** has a master switch plus per-category controls — spelling, grammar, punctuation, capitalization and style — and a dialect to choose. Nothing leaves the machine.

**Polish.** Select some text — or nothing at all — and press the pen, or **⌘⇧P**, to rewrite it for grammar, clarity and tone. Read the result and accept it or discard it.

**Images and video, revealed in place.** A generated image or video now appears in a live grid-reveal preview that resolves into the result in the same spot, with a note while it runs. A single image, a batch, and video are all supported.

**Simple mode takes after Developer mode.** Simple mode now uses the Developer layout — your message on the right, the reply on the left — shows the site logo before links, and renders `@app` mentions inline as text with the app's logo instead of a chip.

**Switch modes without losing the chat.** The Chat/Developer switch now opens that mode's chat — your last one, or a new one — and leaves the chat running in the background. Switching back returns to your last chat.

**A rail, and actions in replies.** Long chats get a proximity conversation rail that grows as the pointer approaches, and replies carry selection actions — **Ask Starfish**, **Explain** and **Copy**.

## 0.6.9-beta.36 — 2026-09-08

Starfish can **read a reply out loud** in a voice you choose. **Scheduled work** is now set up by talking to it rather than filling in a form. You can connect **more than one GoHighLevel account**, the browser panel has grown into **a full browser**, and **the files on your Mac** can be browsed, opened and attached from inside a chat. The rest of the release is fixes.

### New

**Read replies aloud.** Press the speaker on any reply and Starfish reads it out. Pick a voice in **Settings → Voice** — Sarah, Polo, Selene, Adrian or Ethan — and press **Preview** to hear it before you choose. Set the pace to **Slower**, **Normal** or **Faster**. The voice you pick is used for the whole reply, first sentence to last. It reads the words rather than the formatting: no "asterisk asterisk" for bold, no spelling out a long link, code blocks announced once, and a table described by its shape rather than read cell by cell. Stop it early and the rest is never spoken. Nothing is read aloud unless you press the button.

**Your Mac's files in chat.** Type `@`, open the **Files** tab and pick **Choose from this Mac** to browse your Mac the way you would in Finder — places, drives, cloud folders and search, scoped to a folder or to the whole machine. Attach a file to a message, open one in a viewer inside Starfish, edit and save a text file there, and **Reveal in Finder** from the viewer, the browser's context menu or a file chip in a reply. Files Starfish saves for you appear as the same chips.

Local file access is **off until you switch it on** in **Settings → Local File Access**. You choose **Full Access**, meaning your home directory, or **Scoped Access**, where you add the folders Starfish may use and it can reach nothing else. Reading and listing happen without interruption; writing, editing or running a command asks you first. Some paths are never reachable in either mode, including `/System`, `/Applications`, `node_modules`, `.ssh`, `.aws` and `.gnupg`. Preview and in-app editing are limited to text-like files under about a megabyte.

**Scheduled work you set up by talking.** The long setup form is gone. You describe the job in conversation, against your real connected data, and Starfish reads the schedule back to you in plain English. A job **reads and reports by default**; one tick box governs everything it may change, and the exact actions it proposes are listed beside it, so unticking tells you plainly what the job will then not do. You can save a job without running it, look back at what past runs actually did, and reach the whole thing from the main navigation, between **Marketplace** and **Media**.

**A real browser inside Starfish.** Each tab keeps its own live page, so a sign-in and your place on the page survive switching tabs. Back and Forward follow the page's real history, and the toolbar carries **Find**, **Print**, **Zoom**, **Screenshot**, **Downloads**, **History** and browser settings, with a favicon per tab and a site shield that turns green on HTTPS. Downloads are listed and never silently overwrite a file you already have; camera, microphone and location are asked for per site. Pages opened in it cannot reach your cookies, your saved passwords or Starfish's own internals. Starfish can open a page and work in it from a cold start, without you opening the panel first.

**More Google Workspace, ClickUp and QuickBooks operations.** A large batch of further operations across the three is now available in chat.

## 0.6.9-beta.35 — 2026-08-20

### Changed

**Simple mode has one composer bar.** The row of buttons under the message box is gone. Starfish chooses the model for each request on **Smart Auto**, and you can still say **Quick**, **Balanced** or **Best** from the model menu whenever you want to decide yourself — a choice you make always wins. **Plan Together**, **Prompt Builder**, the **browser panel** and the **permission switch** now live in Technical mode, which you reach in one click from that same model menu. Nothing was removed from the product; it moved.

**Approval happens at the moment it matters, not up front.** Simple mode no longer asks you to choose a permission mode before you start. Starfish reviews an action as it is about to leave the app — sending, posting, publishing, changing something outside Starfish — and asks then. Reading your own email, tasks or documents never interrupts you. The question you get is one you can answer: yes, or not now.

**When Starfish needs to know something, it asks with the real options.** If it is missing a fact it cannot guess — which client, which list, which of three files you meant — it stops and shows a card with the actual choices rather than picking one and hoping. Answer with a tap, choose several where that makes sense, or write your own answer. Questions arrive one at a time on a single card.

## 0.6.9-beta.34 — 2026-08-04

The largest release so far. **Meetings** arrives: Starfish can sit in on a call, write the transcript as people speak, and turn it into notes when you stop. Speech is transcribed on your Mac rather than by a cloud service; the notes themselves are written by an AI model, so the transcript text is sent for summarising. It ships as a **Preview**, which means recording, transcription and notes are ready for everyday use, while speaker grouping is still being proven on real recordings.

Alongside it: a rail for jumping around long chats, a memory you can actually read and edit, and Auto model selection for images and video.

### New

**Meetings — record, transcribe, and get notes.** Open **Meetings** in the sidebar and press Start recording. Starfish captures the call and your microphone separately, so "you said" and "they said" stay apart, and the transcript builds live as people speak. Stop the recording and it writes a short overview, the topics, decisions, open questions and action items. You can search the transcript, export the notes to PDF, and hand the whole meeting to a chat to ask questions about it. It does not join the call and does not appear as a participant.

**You have to confirm you'll tell people you're recording.** Recording will not start until you tick the box. Recording rules differ by country and by US state and many require everyone's agreement — this is a deliberate speed bump, not a formality.

**Voices are grouped, and you name them once.** After a recording ends, Starfish works out how many distinct voices are in it and shows them as a legend above the transcript. Hover a voice and every other line dims, so you can see at a glance which lines are theirs. Click it, type a name, press Enter, and **every line that voice spoke is renamed at once**. Voices are listed by how much each person spoke, so whoever drove the meeting is offered first. This is voice *grouping*, not recognition: Starfish can prove the same person spoke on thirty lines, but only you can say that person is Sarah — so it only has to be told once. In-person meetings sharing one microphone are grouped too; a nine-person room comes back as nine voices.

**Meeting notes can be edited by hand.** Fix a wrong name or tighten a line directly in the notes. Regenerating the notes replaces your edits, and the screen says so before you do it.

**The notes panel can be resized.** Drag its left edge to give the notes or the transcript more room; the width is remembered next time. Double-click the divider to reset it.

**A rail for long chats.** Long conversations get a slim strip of marks down the left, one per question you asked. Hover a mark to see the question and the start of its answer; click to jump straight to that point. It appears only once a chat is long enough to be worth navigating, and it scrolls independently of the conversation.

**Memory you can read and change.** Everything Starfish has picked up about how you like to work — writing style, tools you use, clients, things to avoid — is listed in **Settings → Memory**. Add your own, edit any entry, delete one, or clear the lot. Entries you wrote yourself are labelled as yours and are never dropped automatically to make room for something Starfish inferred on its own. Full detail: [Memory](/settings/memory).

**Auto picks the image and video model.** Image and video generation both start on **Auto**, so you no longer need to know which model suits the job — and a model you pick yourself always wins. For images, Auto recognises when a picture needs readable words *in* it and routes to a model that can actually render text, instead of leaving that to chance.

**Zoom control on designs and documents.** When a design is wider than the panel, a button shows the current fit percentage — click to toggle between fitting the width and actual size.

**Version history says what changed.** The history on an edited document now carries a plain-English label — "Before: pie chart added at bottom" — instead of four identical-looking timestamps.

**Starfish can watch YouTube videos** rather than reading the page around them, so a question about what happens in a video is answered from the video.

**A running tally of code changes.** When Starfish edits a codebase, a plus/minus count of lines changed appears above the composer, and you can put every changed file back exactly as it was.

### Improved

**Questions about what's working right now prefer a live search.** Anything about current platform behaviour — algorithm changes, trending formats, current pricing, what a competitor is doing — leans toward checking the web rather than answering from training data that may be a year stale, and says when an answer might be out of date.

**Meeting notes are much harder to lose.** If the first attempt comes back empty or malformed, Starfish retries, and falls back to plain-text notes rather than showing an error and throwing the summary away. Retries now wait between attempts instead of firing instantly — notes are written the moment a recording stops, which is exactly when the machine is busiest, so three instant attempts all hit the same bad moment. Long meetings are asked for fuller notes rather than compressed ones.

**Fewer echoed lines in transcripts.** Your microphone picks up a little of what the other side just said; that duplicate is filtered out. It now also catches echoes that straddle the boundary between two saved chunks, which previously slipped through.

**Progress describes what is actually running.** Longer work reports the kind of operation genuinely in flight rather than guessing from the name of the tool, so Starfish can no longer claim to be building something while it is only reading.

**Designed pages follow the project's real fonts and colours** instead of guessing them, and a design that ignores them is rejected rather than shipped.

**Code search is fast and respects .gitignore everywhere**, and no longer returns build output or vendored dependencies as if they were your code.

## 0.6.9-beta.33 — 2026-07-29

**Video intelligence for real-world footage.** Starfish can now understand attached and generated videos: scenes, speech, on-screen text, important moments, claims, and timestamps. Large recordings are prepared automatically in reliable sections, while a compact analysis is retained for follow-up questions so the original footage is not repeatedly processed.

**Document retrieval built for depth and efficiency.** PDFs, Google Docs, Word files, spreadsheets, CSVs, and text sources are indexed once. Focused questions retrieve the exact relevant passages; complete reviews read the source in bounded order. Binary files and base64 payloads stay outside the AI conversation, reducing context cost without sacrificing source coverage.

**Research that resolves into a decision.** Research runs now establish a bounded plan, load only the guidance the task requires, prioritize high-value sources, and stop when the evidence is sufficient. Findings distinguish evidence from inference, preserve limitations, and arrive as a decision-ready briefing instead of a diary of searches.

## 0.6.9-beta.32 — 2026-07-26

**Browser control.** Switch it on under Apps and Starfish can use the browser panel itself — reading pages and filling things in on sites you're already signed in to, like ad platforms and analytics dashboards. You watch it work in the panel, it never handles your passwords, and it asks first before anything irreversible such as publishing, sending or deleting. It's off until you turn it on.

## 0.6.9-beta.31 — 2026-07-25

**PDFs keep a version history.** Ask for a change and Starfish rebuilds the PDF, but the previous version is kept — open the History button on the file to look at or restore any of the last 25 versions.

## 0.6.9-beta.30 — 2026-07-24

## 0.6.9-beta.29 — 2026-07-24

**Real, properly typeset PDFs.** Starfish now builds PDFs with a professional typesetting engine built into the app. Expect clean pages, tables that line up, sensible page breaks, page numbers, and your logo embedded.

## 0.6.9-beta.28 — 2026-07-24

**More built-in marketing expertise.** Dedicated skills for copywriting & email, social content, paid ad campaigns, analytics & reporting, and brand voice, so those requests come out sharper and more on-brand. Skills also produce more varied designs and only kick in when a task actually calls for one, keeping responses lean.

**Big designs finish building.** Multi-section decks, dashboards, and pages that build live in front of you now run all the way to the end instead of occasionally stopping partway through.

**The Copy button on a design** now reliably copies its full HTML code, ready to paste elsewhere.

**One-click updates.** When a new version is ready, a banner offers to update; click once and it downloads and restarts for you, with no manual reinstall.

**Announcements and feature flags.** We can now send short in-app announcements and turn already-built features on without you needing to install a new version.

## 0.6.9-beta.27 — 2026-07-17

**Generated images carry cleanly into videos and designed artifacts** without Terminal searches, broken local paths, or repeated base64 content.

**TikTok Ads is built in** with direct OAuth, a safe read-only default, optional write access, pagination safeguards, and account-aware reporting.

**Google Workspace** once again exposes every tool allowed by the permissions you granted, so Gmail, Drive, Docs, Sheets, Slides, Calendar, and Chat remain available throughout a conversation.

**Google Ads** now resolves manager-account hierarchies and matches the requested client account before reporting results, preventing empty data from the wrong account from being presented as fact.

**Artifact creation and editing** recover more gracefully from failed or stuck tool calls, preserve generated media, and keep real build progress visible while longer designs are being made.

## 0.6.9-beta.26 — 2026-07-10

**Branch a chat to keep it focused.** Start a brand-new conversation from any reply — it carries everything up to that point as context, so you can chase a tangent, or give a long thread a clean restart, without losing the thread or letting it balloon. Look for **Branch** under any assistant response; branched chats are marked in the sidebar and link back to the conversation they came from.

**Copy any table the assistant makes.** Hover a table and a **Copy** button appears — it pastes as a real, formatted table into Google Docs, Sheets, Word, or email, so you never rebuild one by hand. Tables also picked up a subtle rounded frame.

**Much better slide decks, dashboards, and designs.** Visual and creative requests now render as a polished, self-contained page you can preview live, tweak with fast in-place edits (instead of regenerating the whole thing each time), and open full-screen — with a Preview/Code toggle and one-click copy. Logos and images embed directly into the page. If a request is ambiguous, the assistant confirms what you want before building.

**Hover tooltips across the app.** Hover almost any control — the message actions (Branch, Rewrite, Copy), the composer's Agents / Apps / Media, sidebar items like Marketplace and Open Workspace — and a short note explains what it does.

**Tool activity is easier to follow.** Instead of raw function names, the assistant shows what it's doing grouped by app — e.g. "Calling ClickUp · 5×" — which you can expand for the step-by-step detail.

**Automations are more reliable and smarter.** Runs that got stuck now self-heal, every run has a time limit so it can't hang, and completion is reported honestly — a run that was blocked or only partly finished no longer reports "done." Each run remembers the last one, and a quick readiness check verifies your connections and the task before you switch an automation on. A new **Improve task** button rewrites a rough instruction to be clearer and tool-aware, and asks you to confirm before applying it.

**ClickUp comments mention the right people, formatted.** When the assistant comments on a ClickUp task it now resolves real @mentions and posts with proper Markdown formatting — and tells you if a name couldn't be matched.

**Chats name themselves.** New chats get a title automatically from your first message.

## 0.6.9-beta.25 — 2026-07-03

**Apify connects again.** The Apify integration was pointing at a connection endpoint that Apify retired, so it silently failed to load its tools. It now uses Apify's current endpoint, and connections made before the fix heal automatically the next time the app starts — no need to reconnect.

**Rearrange your agents.** On the Agents tab you can drag your agents into whatever order you like, and the agent picker in the chat composer follows the same order.

**Google Ads: upload images to your asset library.** You can now upload image assets straight into a Google Ads account's library for use in campaigns.

**Google Ads: remove assets from campaigns.** The assistant can now detach assets — for example, disapproved images or logos — so they stop serving on a campaign. (Google Ads never allows permanently deleting an asset from the account library; detaching is how you take it out of a campaign, and it's exactly what the Google Ads interface's "remove" does too.)

## 0.6.9-beta.24 — 2026-07-02

**The assistant knows exactly what it's connected to.** It now reports the precise Google services you've connected and at what access level, instead of sometimes claiming only Gmail is available. And when you've granted read-only access, it won't offer to create or edit files and then fail — it only promises what it can actually do.

## 0.6.9-beta.23

**Google Ads runs your whole account.** Beyond Search campaigns, the assistant can now build Performance Max campaigns, set up conversion tracking (leads, purchases, calls), add ad extensions (sitelinks, callouts, structured snippets, call assets), and create remarketing and Customer Match audience lists.

**Google Analytics can create, not just read.** GA4 can now create audiences, plus custom dimensions, custom metrics, key events, and data streams, and update property settings. Reconnect Google Marketing Suite and allow the new edit permission so these changes save.

**Connect Google Workspace read-only.** Connect Drive, Calendar, and Chat — not just Gmail — and choose Off / Read-only / Read & Write for each service, so you can connect a client's account for reference without granting the ability to edit or delete.

## 0.6.9-beta.22 — 2026-06-30

**Clearer Google Ads errors.** When Google rejects an action, the app now shows the exact field and reason instead of a generic "invalid argument," so problems are obvious instead of guesswork.

**Manager (MCC) accounts.** Google Ads manager accounts can now create and manage campaigns on any sub-account — connect with your manager account ID and operate across every account it manages.

## 0.6.9-beta.21

**Analytics, Search Console and Tag Manager upgrade.** Much more of each is now available to the assistant: richer GA4 reports and account details, Search Console site and sitemap management, and full create/edit/delete for Tag Manager tags, triggers, variables, and versions.

**Dictation.** Tap the mic and the message box becomes a live waveform that moves as you speak; tap the checkmark and the transcription is added to whatever you'd already typed (never replaced).

**Long chats stay fast and affordable.** Older messages are automatically summarized before a conversation gets expensive, with a clear notice when it happens — nothing important is lost.

**All your chats are back in the sidebar.** It previously showed only the most recent ~50.

**Polish.** Sidebar icons animate on hover and menus open with smoother motion.

## 0.6.9-beta.20 — 2026-06-26

**Arrange your workspace your way.** You can now drag to reorder the projects on your Workspace screen, and the folders inside a project, into whatever order you prefer. Click **Reorder**, drag things into place, then click **Done** to save. The arrangement is a personal view stored on this device — it doesn't change anything for anyone else, and newly added projects or folders simply appear at the end.

## 0.6.9-beta.19 — 2026-06-24

**GoHighLevel v3 and Agency OAuth.** The GoHighLevel integration now covers the v3 API in addition to v2 — most notably, the assistant can create, update, and schedule email campaigns. You can also connect using **Agency OAuth**: authorize once at the agency level and the assistant reaches every sub-account from a single connection, requesting per-location access as needed. The existing Private Integration Token option remains for connecting a single sub-account, and you still choose Read or Read + Write access when you connect.

**Smarter workspace and agent memory.** When a chat lives inside a folder, the knowledge the assistant saves is now routed to the right place: details specific to that folder's work stay in the folder, while information useful across the whole project is saved at the workspace level, so the same fact is no longer duplicated in both. The assistant also shows when it is drawing on a workspace's saved knowledge. Agent memory stays portable — an agent records only general, reusable preferences about how you like it to work, rather than details tied to one project, so it behaves consistently wherever you use it.

**Export and import workspaces.** You can now export a workspace to a single file from its page and import it into the app on another device. The export carries the workspace's instructions, its accumulated knowledge, and its knowledge files. Chats, agents, and automations are not included. Importing always creates a new workspace, so importing the same file twice never overwrites or merges into an existing one.

**Fixes.** A chat could remain marked as "running" after a task had already finished, which previously required switching chats for it to clear. Tasks now finalize as soon as they complete.

## 0.6.9-beta.18 — 2026-06-19

**Storage management.** A new **Settings → Storage** tab shows every generated image and video stored on your Mac, with its size and date. Multi-select the ones you don't need and delete them, or clear everything older than 30 days (and anything orphaned by a deleted chat) in one click. Deleting frees the space but keeps the conversation text — only the media is removed.

**Connected apps stop guessing.** Every built-in integration — ClickUp, GoHighLevel, Facebook & Google Ads, Google Workspace, Google Marketing Suite, and QuickBooks — now tells the assistant when a list or report is only the first page of results. Instead of assuming it already has everything (and potentially making things up), the assistant knows to page through or tell you the result is partial.

**Calmer, more accurate permissions.** Only genuinely irreversible actions — deleting or overwriting data — show the red "can't be undone" warning. Routine, reversible steps like removing a tag, archiving, or un-sharing no longer trigger a false alarm.

**Switch Ask / Auto anytime.** Changing the permission mode now takes effect immediately — even in the middle of a task — not just on the next message.

**Agent management.** Delete agents you've built straight from the Agents page, and edit an agent's memory in a roomy pop-up editor instead of a cramped box.

**Create ClickUp Spaces.** The assistant can now create Spaces in ClickUp, not just folders, lists, and tasks.

**Convert videos in chat.** Point the assistant at a folder of videos and ask it to convert them (for example .mov → .mp4). It uses the built-in converter to write the results into a brand-new folder — your originals are never modified, renamed, or deleted — and shows a live progress bar in the chat with each file's name as it finishes.

**Edit images from chat.** Generated images in a normal chat now have an edit button (hover the image), just like on the Image Gen page. Click it to load the image as a reference and type a follow-up prompt to tweak it.

## 0.6.9-beta.17 — 2026-06-13

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

## 0.6.9-beta.15 — 2026-06-09

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

