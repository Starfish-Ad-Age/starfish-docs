---
outline: deep
---

# Changelog

What's new in Starfish, newest first. The in-app **Settings → Changelog** shows a short summary of the latest versions; this page carries the full history and detail.

## 0.6.9-beta.40 — 2026-09-18 — current

A long conversation now shows its own housekeeping: when Starfish compresses the history it says so, in the open, and lets you keep typing. A long research answer arrives as a document with a short written summary. The browser only opens when you ask, connected apps load only when the work needs them, and a run that stops making progress ends instead of looping. The browser can also keep several pages open at once, each in its own tab; watching a video says so while it runs; and a question that needs a fresh look at the video gets one. Media gains a real cleanup path, PDFs have to pass a quality check before they count as done, and GitHub connects without the Terminal.

### New

**A long answer as a document, with a written summary.** When a reply is long enough to be a report — a research brief, a multi-section write-up — Starfish saves the whole thing as a document and writes a short summary in the chat: the single most useful conclusion or recommendation, at most two sentences, followed by the pointer to the card. You get the answer immediately and the detail a click away, instead of a wall of text in the transcript. The summary is written for the person who asked — it states the conclusion, never restates the title, and does not open with "This report". If the document cannot be produced, the full answer still lands in the chat. Auto-continue no longer carries a finished long answer on into another round.

**Wan 3.0 and Flux 3.** Two more video engines join the picker. **Wan 3.0 Video** takes **480p**, **720p** and **1080p**, five ratios, **2–30 second** clips, up to **10 reference images** and **5 reference videos**, first-and-last-frame control, and no audio. **Flux 3** takes the provider's **hd**/**fhd**, seven ratios, **5–20 second** clips, **10 reference images** and a reference video, first-and-last-frame control, and synchronised audio.

**Clean up a photo or a clip by asking.** A new deterministic media pass covers what people actually ask for, applied to the file with real ffmpeg filters rather than redrawn: remove a grade or filter, naturalise, auto white balance, normalise, histogram equalise, HDR-to-SDR, match a look against a LUT, and adjust exposure, brightness, contrast, saturation, gamma, temperature, tint, colour balance, channel mixer and curves; crop, pad and rotate; remove a logo or watermark (delogo); denoise, sharpen and stabilise; and strip metadata. A report mode tells you what has already been done to a file and what is recoverable. HDR sources (10-bit BT.2020/HLG) are detected and tone-mapped to BT.709 for every SDR output, so a still pulled from an iPhone clip looks faithful instead of "filtered". **HEIC**, **HEIF** and **AVIF** images are decoded through the Mac's own `sips` for every media path, so an iPhone photo now works where the bundled ffmpeg had no HEIC decoder. Requests that need invented pixels — unblur, remove an object or person, restore detail or a face — are refused with a plain explanation and an ask-first prompt, and a cleanup request can never reach a generative tool. Nothing normalises on its own: upload, preview, extraction and generation are untouched unless you ask.

**Connect GitHub in the app.** GitHub now connects with its **device flow**: Starfish shows a code, copies it to your clipboard, opens **github.com/login/device** and polls. No Terminal and no `gh auth login`, and the token is the app's own rather than borrowed from whichever account your CLI happened to be on. The card shows the account that authorised ("**Connected as …**"), reconnecting replaces both the token and the stated account, and the old personal-access-token path remains as an escape hatch.

**Starfish learns how you like to work.** A profile Starfish carries into every reply: your **occupation or designation** (and, if it is a technical one, a technical register rather than the basics), what you want to be **called**, anything else in your own words, a **tone** (professional, friendly, candid, quirky, efficient, cynical), and how much warmth, enthusiasm, headers and lists, and emoji you want. You can also give standing **custom instructions**, turn on **Fast answers** (answer from general knowledge without memory or connected sources), and choose whether **starter prompts** appear on a new chat. It is set up when you first open the app and lives in **Settings**.

**Several pages at once, each in its own tab.** When a request needs more than one destination — an inbox and a CRM, two dashboards — Starfish opens each in its own tab instead of letting the last one replace the one before it, and the new tab becomes the active one. It can **list the open tabs** with their number, address, title and which is active, **switch** to a tab by its number before reading or acting on it, and **close** one; the last remaining tab is never closed, because the panel always keeps one open. Every page operation — navigate, read, click, type, wait, scroll, key and screenshot — now reports the tab it ran on, as "**· tab 2/3 · mail.google.com**", and a tab can only be claimed when the tab list confirms it.

**A PDF has to pass a quality check before it counts as done.** Before Starfish claims a PDF is ready it rasterises the pages and checks for **blank pages**, content lost against the **previous version**, a **shrinking page count**, and unreadable **text or fill contrast** — measured at 1000px so small type is judged fairly, and polarity-aware so light-on-dark is read correctly. A `#datatable` helper makes the correct contrast the easy path. If a problem survives two repair attempts the file is still written, with a plain warning that names the issue, instead of trapping the model in a retry loop.

### Improved

**Compaction you can see, with a verified handoff.** When a long conversation has to be compressed to stay inside the model's window, you now watch it happen: the activity orb, the word "**Compacting**" and a **live timer**, with the message box staying usable and anything you send going the moment it finishes. Under the hood the budgets are per tier — **Light 200k**, **Balanced 420k**, **Deep 800k** — with soft 65% and hard 85% triggers, the trigger is anchored on real provider usage rather than a characters-per-four estimate, a context overflow now compacts and retries the step once, and the before/after numbers are persisted so compaction can be measured. Every handoff is verified before it replaces history: a typed gate checks for a dropped correction, constraint, id/path or contradiction, repairs once, and falls back to the deterministic summary rather than shipping a lossy one.

**Connected apps load only when the work needs them.** Every connected-app schema used to ride on every turn — for one person with nine apps, **388 tools** and roughly **95k tokens per request**. Auto now preloads only the app or apps a request implies; every other connected app contributes a **name-only manifest** plus two always-present tools: `describe_app_tool` for an exact schema and `call_app_tool` to run it. A proxied call passes the same gates as a direct one — the destructive approval card, the vendor blocklist, the write ledger and the receipt (recorded under the target's real name). A misspelled name returns the **closest real names**, never an unavailability claim. Measured on real connections: first-request input dropped from **21,790 to 1,759 tokens**. There is **one route per app per turn**, and a proxied call is attributed to the **app** rather than the plumbing — "**Used ClickUp**" with its logo and rows naming the real tool.

**The engine you chose is the engine that runs.** The catalog was corrected against the gateway's own capability contract so a request is not silently rerouted to a different engine: **Grok** accepts **7 reference images**, **Veo 3.1** takes **3 images and 1 video**, and **Seedance 2** takes **9 images and 3 videos** and **does support an end frame**. The hardcoded reroute to MiniMax is gone — a chosen engine serves the request whenever it can, and only falls back when it genuinely cannot.

**One answer per turn, and no draft to watch.** A superseded answer can no longer render as a **second answer** in any mode, and long-form prose is **held** so you never watch a draft that may be thrown away — the complete answer arrives at once, in Simple and Developer mode alike. The text dropped when a stage ends is only saved as an interim note if you actually saw it; held prose that never reached you is discarded rather than left behind as a phantom message.

**The browser opens only when you ask.** The browser panel is signed into your live accounts, so opening a page is no longer a read the model may take on its own. Navigation runs only when your own request asked for the browser, or when you have already approved a navigation this turn; otherwise Starfish asks, and if there is no one to ask it fails closed and says the browser needs your go-ahead.

**A tidier transcript.** The tool-activity summary is now a single clean line — the apps used and the **source favicons**, one click to expand the detail. The green tick, red cross and amber shield glyph and the expand chevron are gone; a group that needs attention simply reads in amber. File cards were slimmed to the **name**, a **Created**/**Updated** badge, and the **Save** and **Open** buttons, and the long-chat rail sits a little further from the text.

**Markdown reports open as a rendered document, diagrams included.** A markdown deliverable now opens as a **rendered preview** — headings, tables and **Mermaid** diagrams included — rather than raw text, and it carries the whole answer. Research and report output is also required to include the **diagrams it refers to**, matched in-text.

**The skills got better, including a new one.** The analytics, research, reports, spreadsheets, ads, social, brand, browser, video and editing skills were upgraded for executive-quality output, and a new **code-changes-and-pull-requests** skill was added. The personalization designation now drives what Starfish recommends.

**Video colour is faithful, with an untouched path.** Converting or extracting from an HDR source now tone-maps it to BT.709 by default so an SDR output looks like the original instead of a flat, colour-stripped decode. When you ask for the original raw frame, `colour: "untouched"` leaves the frame data exactly as it was.

**Faster DeepSeek, and Google actions attributed correctly.** DeepSeek requests now go to their own provider first, so they start sooner. Google calls are attributed to **Gmail**, **Calendar** or **Drive** rather than a generic "Workspace", so the activity line names the app that actually did the work.

**A card that grants local access from inside the turn.** When a step is blocked because Local Access is off or scoped too narrowly, the refusal now names the **real configuration** and offers an in-app card to turn on **Full Access** or add a directory, so the same turn can retry. A blocked local step cannot be rerouted through another service — a Drive upload after local file work was refused does not run — and a named destination is bound to the workspace under approved access.

**Watching a video shows on the orb, with honest timing.** While Starfish watches a video the activity orb says so — "**Watching the video you sent**" for a YouTube link, "**Watching your video**" for a file — with a plain note that a long video takes a while, and then "**Writing up what it watched**" while the memo is prepared. A watch that fails does not claim it is writing anything up. The same wording reaches both the live orb and a durable run's own progress line.

**Opening a link is not the same as asking what it says.** "Open this", "play this" or "show me this" opens the link in the browser panel; "what does it say", "what does it contain", "summarise it" or "transcribe it" reads the video. The two are now separated in the guidance, so a link the person asked to open is never sent to the video reader, and a question about a video's content is never answered by merely opening the page.

**A visual question about a video gets a fresh look.** Questions that need eyes on the actual pixels — the best moments, cinematic stills, faces, close-ups, framing or lighting, thumbnails and cover images, favourite or different frames — now re-watch the video and return precise timestamps and reasons, instead of answering from the earlier summary. The set of questions that triggers this now also recognises "favourite", "different", "other", "cinematic" and "portrait", alongside the earlier quality and shot words. Ordinary questions — what the video is about, what happens in a given range, the prices shown, the speakers, the length, who appears — still use the memo and do not pay for a second watch.

**The video memo keeps a timeline.** The compact summary Starfish keeps for later questions now ends with the video's timeline: a sampled, chronological set of ranges, each with its visuals, speech, on-screen text or audio and absolute `mm:ss` timestamps. It samples across the whole video — including the last part, so the end is represented — and drops middle entries rather than the ends when it has to fit the budget. "When did that happen" can now be answered from the memo, without watching the video again.

### Fixed

**Updating an existing PDF is not refused.** Asking Starfish to update a PDF it already made — including the obvious follow-up "Google is connected now" — was treated as a review-classified turn that needed a special phrase. The local-deliverable set held `create_pdf` but not `edit_pdf`, so turning an existing PDF into an updated one was refused while creating a brand-new file was allowed. Revising a local file changes no external data, exactly like creating one, so it is now allowed. The gate's message also no longer tells the model to say the user "explicitly asked for a revision".

**A blocked deliverable stops the turn instead of repeating itself.** When a PDF could not be saved, the build-continuation loop handed the model another round, and each round re-emitted the same closing paragraph — up to **ten times**. The loop now pauses on the first round whose only outcome is a refusal the user has to resolve, and on a second round that emits identical assistant text with nothing landing, and it surfaces that honestly instead of burning the remaining rounds.

**Local work is never gated, and you are never asked to restate.** The review gate decided by tool name against a hand-maintained list, which is why creating a PDF was allowed on a review turn while editing one was refused. The block is now **risk-based**, using the effects model: only an external side effect or a destructive action can be blocked by turn classification, and local writers stay allowed. The two messages that told the model to have you "restate the request naming the target" and to approve by "naming the exact change" are gone — an ambiguous target now routes to a question with the real options, and an unapproved external write surfaces the **Allow / Deny** card. No gate message may instruct you to rephrase, paste or repeat a sentence.

**Colour requirements come from your own words.** Colour requirements used to fall back to "every hex colour anywhere in the text", and an attached document arrives inlined into that text — so a whole HTML file's palette became mandatory and a save could be refused until the build paused with a false "6 of 6 saved". Colour requirements now come from **your** words only (attachment regions excluded, an asking cue required, capped at eight), and a colour that genuinely cannot be matched no longer blocks the file: it saves with a plain note naming the colour and the closest applied value.

**Nothing you send disappears.** A small pasted text was only ever inlined into the model prompt, and a large one was indexed but never attached to the message — the database held 50 image, 5 video, 1 PDF and 26 element attachments and **zero** text. Every attachment is now stored with a pointer (a large paste stores a document id, not megabytes) and reopens from the sent message after a reload: text pastes expand, images open full-size in the existing lightbox, PDFs open in-app as well as download, and videos keep their inline player.

**A run that is not making progress ends.** A long run that is no longer advancing now ends and tells you, instead of looping. The no-progress check also ignores a change of stage or summary on its own — only real movement, or a tool call that does something, counts as progress — so a run that is genuinely working is not stopped early.

**The browser recovers when a button has moved or been renamed.** Pages move between the moment Starfish reads them and the moment it acts — and until now a changed page failed the step outright. Now, when the button Starfish was about to press is no longer where the read said but its label is still on the page, Starfish re-reads and presses the same label once, and reports that the first attempt was stale and the retry worked. It never retries when the label has changed — the read said one thing and the element now says another — because pressing a mislabelled element is how the wrong button gets pressed. And when the label has vanished altogether, Starfish matches the current element to what you asked for, retries once, and says so. An action that reads as irreversible — delete, publish, remove, send — is never retried on its own, so recovery can never fire a destructive click twice.

**A typing that did not land no longer reads as a success.** Typing now checks whether the field actually took the text — whether its value changed, or the page moved — and when it did not, it says "nothing on the page changed — the field may need real input focus or may be read-only" instead of reporting a clean success. Re-typing the same text into a field that already holds it is not falsely flagged as unchanged.

## 0.6.9-beta.39 — 2026-09-16

### Improved

**Auto does more thinking.** **Smart Auto** in Chat mode and **Auto** in Developer mode now run **GPT-5.6 Luna** at its **extra-high** reasoning setting in both modes, so a request that needs judgement gets the deeper pass instead of the cheapest one. Previously Auto inherited the turn's default effort, which Chat mode deliberately kept low to stay cheap, so Auto could answer a question that needed judgement with the shallowest pass. Choosing a level — **Light**, **Balanced** or **Deep** — or a named model still wins over Auto.

**An edit keeps your picture.** Editing an image now goes back to the image engine on the **same canvas as the original**, so "add a blue glow to this photo" adjusts that photograph instead of returning a redrawn version of it. The reference image is handed to the engine, and the source's own proportions are preserved.

**Thinking where it earns its keep.** **GPT Image 2.5** decides how hard to think per request — its own **automatic** level for everyday pictures, and the **top** level when the image has to render readable words or a laid-out design. An explicit level still wins.

**The mid-priced engine, by default.** **Automatic** prefers the **newest mid-priced** image and video engine rather than the most expensive one, and a **new chat starts on Automatic** for images and video as well as for text. The legacy **Nano Banana** and **Seedream 4.5** have been retired from the picker.

**Every engine's real options.** The image engines now offer what they actually support: **true 16:9**, **4:3**, **9:16**, **square**, **3:2** and **2:3** output sizes, and the Gemini engines take **1K**, **2K** or **4K** — measured at 5504×3072 on a 4K ask. Video engines take a resolution too: **720p**, **1080p** or **4K** on Veo, Kling and Seedance, **2K** or **768p** on MiniMax, each with its own durations and shapes. Ask for any of it in your own words.

**Veo 3.1.** Video generation runs on **Veo 3.1**, which adds **first-and-last-frame** control on top of the previous Veo 3 behaviour.

### Fixed

**A connected tool stops asking you to reconnect.** A tool that answers a notification with an **empty reply** was read as a failure, which left a perfectly healthy connection stuck on "Needs reconnecting". Starfish now treats an empty reply as an empty reply.

**A picture never fails for want of an engine.** If the image engine you picked cannot finish the job, Starfish finishes it on another capable engine with the **same prompt, references and settings** instead of handing you an error.

**Asking for a page action is an action.** Requests like "click Open indexing report" are no longer misread as an analysis-only turn that hides the browser controls. On a turn that genuinely is read-only, the browser page can still be inspected and reported on.

**"Yes" counts as approval.** Confirming a step Starfish proposed is now accepted instead of being refused as an unconfirmed change.

**The shape you ask for is the shape you get.** Asking for a wide image used to come back at **3:2** whatever you said, because the app left the shape to the provider. What you say now decides: **vertical**, **square**, **wide** or a named ratio — **9:16**, **4:5**, **16:9** — is honoured exactly, on an **edit** as well as a new picture, and the model's own suggestion is accepted only when it agrees with what you asked for. Ask for no shape — "add a dog on the left", "add a blueish glow" — and your picture keeps its own frame instead of being reframed. A "**portrait of**" someone is a subject, not a format. The reply also states the size it actually produced, so it can no longer announce a shape it did not make.

**An ordinary photograph stays off the typography engine.** A prompt ending in "no text or logos" was read as a request for **legible words**, which sent everyday photographs to the slow typography engine. A **negated mention** is no longer a request, and an image engine that fails twice is **replaced instead of retried** four times.

## 0.6.9-beta.38 — 2026-09-16

Starfish now sends **every reply through the fastest available provider** for its model, which cut a typical answer from 8–50 seconds to 4–8. The three Chat-mode levels are renamed **Light**, **Balanced** and **Deep**. Starfish **starts work while you are still typing**, reads **video on Gemini 3.8 Flash**, loads a connected app's **complete toolset** instead of claiming it is unavailable, and only asks permission for **deleting**. The rest of the release is fixes.

### Improved

**Answers start much sooner.** Every request is routed to the **highest-throughput provider** available for its model, ranked from live measurements and re-evaluated on each request. A slow provider is skipped automatically, and if one fails the next is tried — the same model throughout. Typical answers now begin in a few seconds instead of tens of seconds.

**The three levels, renamed.** Quick, Balanced and Best are now **Light**, **Balanced** and **Deep**. **Light** is the cheapest, on **DeepSeek V4.1 Flash**. **Balanced** runs **GPT-5.6 Luna** at high reasoning, and **Deep** runs the **same Luna at its maximum reasoning** — a step up in effort rather than a second, pricier model. The names describe effort and cost honestly; none of them promises a speed it cannot keep. The names changed; your existing choice did not.

**Starfish prepares while you type.** The next reply is classified and the connected apps are checked while you are still writing, so the work begins the moment you send.

### New

**Ask for one app, get all of it.** When a reply needs a connected app whose tools are not loaded yet, Starfish loads that app's **complete toolset** and keeps working — every tool the app offers, not a subset.

**Video reading on Gemini 3.8 Flash.** Scenes, speech, on-screen text, funny moments and timestamps are read by **Gemini 3.8 Flash**. A long or large video is prepared automatically first, so one request covers the whole file.

### Fixed

**The reviewer helps instead of blocking.** Creating, updating and overwriting run straight away. Only **deleting** asks first, on a card you can allow or deny — and a decline now says plainly that the action was not approved, never that a tool is unavailable.

**Inspecting an action is not doing it.** Tools that only describe an operation — such as GoHighLevel's show and search — are treated as reads, so looking up how to do something can never be mistaken for doing it.

**The question card waits for you.** Questions are asked one at a time and the card stays until every one is answered. Your earlier answers are kept if you go back, and the run no longer starts working while a question is still open.

**Nothing claims a tool is missing.** Starfish no longer tells you a connected tool or app is "not loaded" or "not callable". If it needs the app, it loads it and carries on.

**Clips and exports land in your folder.** Anything you keep — clips, stills, exports — is saved to **Desktop** or **Downloads** with a descriptive name, never a temporary folder Finder hides.

**Recovered work does not look broken.** A step that failed and was retried inside the same turn no longer colours the whole summary red. Individual calls still show their own outcome in the detail.

## 0.6.9-beta.37 — 2026-09-13

Starfish now **checks your spelling and grammar as you type**, **rewrites what you have written** on demand, and **types with your voice** using a cloud speech model of your choice. Generated images and video appear where the finished result will land, Simple mode picks up the Developer layout, and switching between Chat and Developer leaves the chat running. The rest of the release is fixes.

### New

**Spelling and grammar as you type.** Starfish checks your message as you write it with **Harper**, running entirely on your Mac. Problems are underlined in the message box; click one to fix it, ignore it, or add it to your dictionary. **Settings → Spelling & grammar** has a master switch plus per-category controls — spelling, grammar, punctuation, capitalization and style — and a dialect to choose. Nothing leaves the machine.

**Polish.** Select some text — or nothing at all — and press the pen, or **⌘⇧P**, to rewrite it for grammar, clarity and tone. Read the result and accept it or discard it.

**Voice typing with the model you choose.** Starfish transcribes your voice with a cloud speech model, **GPT-4o Transcribe** by default; **Whisper**, **GPT-4o Mini Transcribe**, **Fish Audio** and **xAI** are also selectable through the AI Gateway. The on-device **Parakeet** engine remains an option and is never downloaded automatically.

**Images and video, revealed in place.** A generated image or video now appears in a live grid-reveal placeholder that resolves into the result in the same spot, with a note while it runs. A single image, a batch, and video are all supported.

**Simple mode takes after Developer mode.** Simple mode now uses the Developer layout — your message on the right, the reply on the left — shows the site logo before links, and renders `@app` mentions inline as text with the app's logo instead of a chip.

**Switch modes without losing the chat.** The Chat/Developer switch now opens that mode's chat — your last one, or a new one — and leaves the chat running in the background. Switching back returns to your last chat.

**A rail, and actions in replies.** Long chats get a proximity conversation rail that grows as the pointer approaches, and replies carry selection actions — **Ask Starfish**, **Explain** and **Copy**.

### Fixed

**Chat**

- The action reviewer no longer denies a safe step for being incomplete — a request for several images now generates them.
- Every completed turn shows a response and its diff.
- A step you declined no longer reads as a success.
- Reading a streaming reply no longer loses your scroll position.
- The **+** on a folder binds the new chat in one click.

**Correctness**

- A batch of fixes: replace-all undo, persisted tool failures, partial MultiEdit, notebook edits, edit verification and honest image reads.

## 0.6.9-beta.36 — 2026-09-08

Starfish can **read a reply out loud** in a voice you choose. **Scheduled work** is now set up by talking to it rather than filling in a form. You can connect **more than one GoHighLevel account**, the browser panel has grown into **a full browser**, and **the files on your Mac** can be browsed, opened and attached from inside a chat. The rest of the release is fixes.

### New

**Read replies aloud.** Press the speaker on any reply and Starfish reads it out. Pick a voice in **Settings → Voice** — Sarah, Polo, Selene, Adrian or Ethan — and press **Preview** to hear it before you choose. Set the pace to **Slower**, **Normal** or **Faster**. The voice you pick is used for the whole reply, first sentence to last. It reads the words rather than the formatting: no "asterisk asterisk" for bold, no spelling out a long link, code blocks announced once, and a table described by its shape rather than read cell by cell. Stop it early and the rest is never spoken. Nothing is read aloud unless you press the button.

**Your Mac's files in chat.** Type `@`, open the **Files** tab and pick **Choose from this Mac** to browse your Mac the way you would in Finder — places, drives, cloud folders and search, scoped to a folder or to the whole machine. Attach a file to a message, open one in a viewer inside Starfish, edit and save a text file there, and **Reveal in Finder** from the viewer, the browser's context menu or a file chip in a reply. Files Starfish saves for you appear as the same chips.

Local file access is **off until you switch it on** in **Settings → Local File Access**. You choose **Full Access**, meaning your home directory, or **Scoped Access**, where you add the folders Starfish may use and it can reach nothing else. Reading and listing happen without interruption; writing, editing or running a command asks you first. Some paths are never reachable in either mode, including `/System`, `/Applications`, `node_modules`, `.ssh`, `.aws` and `.gnupg`. Preview and in-app editing are limited to text-like files under about a megabyte.

**Scheduled work you set up by talking.** The long setup form is gone. You describe the job in conversation, against your real connected data, and Starfish reads the schedule back to you in plain English. A job **reads and reports by default**; one tick box governs everything it may change, and the exact actions it proposes are listed beside it, so unticking tells you plainly what the job will then not do. You can save a job without running it, look back at what past runs actually did, and reach the whole thing from the main navigation, between **Marketplace** and **Media**.

**More than one GoHighLevel account.** Connect several GoHighLevel accounts and Starfish keeps them apart, each with its own token. Name the account you mean in the message — "in the Acme account, list my pipelines" — instead of pasting an identifier, and every result says which account it came from. If the account is unclear it asks you, with the accounts listed. **Manage accounts** on the connected GoHighLevel card opens the editor with what you saved already filled in, so you can add, rename, re-point or remove an account without disconnecting first.

**A real browser inside Starfish.** Each tab keeps its own live page, so a sign-in and your place on the page survive switching tabs. Back and Forward follow the page's real history, and the toolbar carries **Find**, **Print**, **Zoom**, **Screenshot**, **Downloads**, **History** and browser settings, with a favicon per tab and a site shield that turns green on HTTPS. Downloads are listed and never silently overwrite a file you already have; camera, microphone and location are asked for per site. Pages opened in it cannot reach your cookies, your saved passwords or Starfish's own internals. Starfish can open a page and work in it from a cold start, without you opening the panel first.

**More Google Workspace, ClickUp and QuickBooks operations.** A large batch of further operations across the three is now available in chat.

### Fixed

**Connected apps**

- Apify showed as disconnected after you re-authorised it.
- An app whose sign-in had expired could still show as connected instead of reading "Needs reconnecting".
- A sign-in that could be renewed in the background was not, so apps you connected dropped out from one day to the next.
- A single rejected call could destroy a saved sign-in; a rate limit, timeout or server error is now treated as temporary.
- Credentials saved just after connecting left an app looking not connected for several minutes.
- Reconnecting an app left the previous helper process running.
- A missing app produced a workaround instead of naming the app to connect.
- An app that was merely busy could be reported as disconnected in another chat.

**Chat**

- A permission card did not always name the exact action and the exact record it would change.
- A request to read, sort, prioritise or summarise could make a change in a connected app along the way.
- Approving one action could be taken as approval for a different one.
- A step you declined could be raised again or attempted again.
- A step you declined showed as a red error rather than as **Not approved**, and read as though the app had refused.
- A permission card was refused automatically if you did not answer within ten minutes; it now waits for you.
- A closing courtesy question ended the turn as though it were waiting for your answer.
- A long list of tool calls pushed the answer off the screen; it now scrolls after six rows, and follows new rows unless you have scrolled up to read.
- The tool list showed internal names instead of the app being used.
- A tool result was marked failed because the word "error" appeared somewhere inside a document.
- A reply that saved a file did not name the file or link to it in Finder.
- Work in progress was lost when you refreshed the app or the connection dropped.
- A draft you had typed was not kept when you switched chats.
- A turn could report a result it had not actually checked.
- A closed work panel could still be reached by keyboard.

**Documents and artifacts**

- One request for a document could produce the same document two or three times.
- A build that stopped part-way was left unfinished instead of repaired, and a build you closed the panel on did not complete.
- A design was saved without the styling it had been given.
- Finishing a document could rebuild it from scratch and lose edits.
- A PDF that would not compile did not say where the problem was; it now names the line and column and shows the offending line.
- A long PDF was re-read from scratch on every question, which could stall the chat.
- Asking about "section 2" of a long PDF could return a different section.
- An uploaded document was not always attached to the message Starfish read.

**Media**

- A video engine that cannot start from a reference image or video failed after the upload instead of saying so first and offering you the choice.
- The video model list could offer a name the service rejects.
- Uploaded videos and images were staged differently in chat and in generation.
- A meeting recorded on one Mac did not play back on another device.

**Scheduled work**

- A run that had done its job was reported as failed.
- A run could stop half-way to ask for an approval that nobody was there to give.
- A run could be cut off for length and marked failed.
- Setting a job up could loop and never finish.
- The delivery question left out simply showing the result in Starfish, and a read-only job was still asked where to send its output.
- A job that only reads described changes it would not make.
- Overlapping runs were not blocked, and old run rows were never cleared.
- A named agent you picked did not actually run the job.
- The scheduler did not recover after a crash or a change of local port.
- A job was not checked against real data before its first run, so a broken one failed in the middle of the night rather than at setup.

**Syncing between machines**

- A scheduled job's permission to make changes could be re-enabled by a sync from another machine.
- Values containing accented or non-English characters were rejected.

## 0.6.9-beta.35 — 2026-08-20

Two halves. In front, **Simple mode's composer is down to one bar** — Starfish picks the engine, and the row of controls has moved to Technical mode. Underneath, the things that quietly gave up have stopped giving up: a chat you look away from keeps working, a big request runs to the end, and an app that is busy is no longer mistaken for a missing one.

### Changed

**Simple mode has one composer bar.** The row of buttons under the message box is gone. Starfish chooses the model for each request on **Smart Auto**, and you can still say **Quick**, **Balanced** or **Best** from the model menu whenever you want to decide yourself — a choice you make always wins. **Plan Together**, **Prompt Builder**, the **browser panel** and the **permission switch** now live in Technical mode, which you reach in one click from that same model menu. Nothing was removed from the product; it moved.

**Approval happens at the moment it matters, not up front.** Simple mode no longer asks you to choose a permission mode before you start. Starfish reviews an action as it is about to leave the app — sending, posting, publishing, changing something outside Starfish — and asks then. Reading your own email, tasks or documents never interrupts you. The question you get is one you can answer: yes, or not now.

**When Starfish needs to know something, it asks with the real options.** If it is missing a fact it cannot guess — which client, which list, which of three files you meant — it stops and shows a card with the actual choices rather than picking one and hoping. Answer with a tap, choose several where that makes sense, or write your own answer. Questions arrive one at a time on a single card.

### Fixed

**A chat you navigate away from keeps working, and says so.** The animated bars in the sidebar used to disappear a few seconds after you left a working chat, and a restart wiped them from every chat at once. The app now asks the server what is genuinely running, several times a minute, so the indicator survives switching chats, opening new ones, and restarting Starfish. Nothing is ever marked finished because a timer ran out.

**Returning to a running chat shows the work, not a spinner.** Re-entering a chat mid-answer used to show "Thinking…" with no progress card until the next tool happened to finish — for a long research run, minutes later. It now restores the step the task has actually reached and the answer written so far, immediately. The elapsed label reflects how long the task has really been going rather than restarting each time you look.

**Big requests run to the end.** Asking for everything across your email, tasks and documents could stop partway and present that as a finished answer, because a task was capped at a fixed number of steps whatever it was doing. A task now keeps going while it is still finding things it has not already seen. One that goes in circles still stops, exactly as before.

**A slow connector is no longer cut off for being slow.** Any tool that is genuinely running is now given room to finish. Previously only a hand-written list of tools was allowed to take a long time, so a wide Drive listing or a large ClickUp query was ended for taking too long — which read as the app choking on anything big.

**Reading many emails costs one step instead of one each.** Going through a mailbox used to spend one round trip per message, so a hundred emails exhausted a task's budget on its own.

**Very long tasks no longer run out of room mid-answer.** A single task that gathered a great deal of material could exceed the model's limit partway through and fail. Older results within the task are now trimmed as it goes, newest kept in full.

**An app that is busy is no longer reported as disconnected.** One chat using ClickUp heavily could make another chat state, plainly and wrongly, that ClickUp was not connected. An app a chat has actually used now stays trusted, and Starfish no longer interrupts a working connector to ask whether it is alive. Disconnecting an app in the Marketplace still takes effect as normal.

**Apify stops dropping out.** Apify retired the endpoint older connections were saved against, so its tools silently failed to load and it vanished from the connected list. Existing connections are corrected automatically — there is nothing to reconnect.

**Reset no longer signs you out.** Reset now clears only caches. Your chats, connections, settings and meetings stay exactly as they were.

**Retry tells the truth about missing audio.** Retrying a meeting whose recording is no longer on this Mac now says so, instead of appearing to work and quietly producing nothing.

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

**New models to choose from.** **Qwen 3.8 Max**, **GPT-5.6 Terra**, **DeepSeek V4 Flash** (including the pinned 0731 build) and the **MiniMax H3** video model are all selectable.

### Improved

**Chats get titles a person would write.** New chats used to be named with the first 80 characters of your message, so pasting real content produced sidebar entries full of markdown asterisks, emoji and words cut in half. Titles are now plain, one line, and end on a whole word.

**Everyday model routing was retuned** across coding, reasoning and general work — Quick now runs on GPT-5.6 Luna. Part of the reason: the newer models can see images from earlier in the conversation, which the previous ones could not.

**Questions about what's working right now prefer a live search.** Anything about current platform behaviour — algorithm changes, trending formats, current pricing, what a competitor is doing — leans toward checking the web rather than answering from training data that may be a year stale, and says when an answer might be out of date.

**Meeting notes are much harder to lose.** If the first attempt comes back empty or malformed, Starfish retries, and falls back to plain-text notes rather than showing an error and throwing the summary away. Retries now wait between attempts instead of firing instantly — notes are written the moment a recording stops, which is exactly when the machine is busiest, so three instant attempts all hit the same bad moment. Long meetings are asked for fuller notes rather than compressed ones.

**Fewer echoed lines in transcripts.** Your microphone picks up a little of what the other side just said; that duplicate is filtered out. It now also catches echoes that straddle the boundary between two saved chunks, which previously slipped through.

**Progress describes what is actually running.** Longer work reports the kind of operation genuinely in flight rather than guessing from the name of the tool, so Starfish can no longer claim to be building something while it is only reading.

**Designed pages follow the project's real fonts and colours** instead of guessing them, and a design that ignores them is rejected rather than shipped.

**Code search is fast and respects .gitignore everywhere**, and no longer returns build output or vendored dependencies as if they were your code.

**Bug reports record which build they came from.** Auto-update does not work on unsigned builds, so several versions circulate at once; every report now carries its exact version.

**Meetings sits at the top of the sidebar** and is available in Simple mode, carrying the "New" badge that used to be on Agents. The changelog shows real release dates, and a release drops out of the large featured layout once a newer one ships.

### Fixed

Meetings was built during this cycle, so several of these affected the interim preview builds the team was running through July rather than an earlier public release. They are listed so you know they are resolved.

**Your microphone stopped recording if you left the Meetings page.** Going to check a chat mid-call silently ended microphone capture while the recording still looked healthy — you only discovered your own voice was missing afterwards. Capture is now tied to the recording, not the page.

**A long meeting could lose its speaker labels.** A background cleanup could delete the temporary audio out from under the job that was still using it, and a real meeting lost its speakers exactly this way. Recent audio is now protected while the job runs, and an interrupted job resumes after a restart instead of being lost. Separately, working out who spoke used to load the recording into memory several times over and could be killed outright on a long meeting; it now measures the audio first and builds a single working copy. Verified on a real 49-minute recording that previously failed: it completed and separated nine voices.

**Preview builds photographed your screen to guess who was talking.** To label speakers, they captured the entire display every 1.5 seconds during a meeting and read names off the meeting window — exposing everything else on screen during a client call to recover a single name, and popping up a permission dialog mid-call when it failed. **That is removed entirely.** Names now come from you, once, in the legend.

**The recording screen claimed audio was never saved.** That claim was removed because it stopped being true: a meeting's audio is now briefly kept on disk so voices can be compared, and deleted as soon as that finishes (or after four hours at the outside). It never leaves your Mac.

**Grammarly and 1Password could not see the chat box.** Tools that read other apps' text fields could not interact with Starfish at all; they now can.

**Asking for an image could come back as a web page.** When your words were unambiguous, the wrong kind of file can no longer be saved in place of what you asked for. It never blocks on a guess.

**Picking an image model could be quietly ignored.** A dead branch in the selection logic meant the panel could show one model while a different one actually ran.

**"I couldn't finish the last part reliably" after edits that had all worked.** After editing a document Starfish would re-read it to check itself — 11 re-reads for 4 edits in one case — filling its working memory and reporting failure despite every edit having succeeded.

**Audio errors sent you to the wrong place.** A failure to capture system audio always blamed permissions, which was often wrong. The real reason is now reported, and the guidance covers having to remove and re-add Starfish under Screen Recording after an update.

**Videos could be described as watched when they were not.** Starfish now refuses to claim it watched something it could not open, and falls back to researching it on the web.

**Other fixes.** Screenshots are no longer discarded before the model can see them. A cut-off response is explained instead of showing a raw gateway error. File paths no longer resolve inside the installed app bundle. Server tools are found using your real PATH. Artifact drafts no longer fork, and Starfish no longer claims a server is running when it is not. Meeting notes scroll properly, export to PDF, and carry the whole meeting into a chat; a live recording is no longer swept up as an orphan, speech appears as it happens, and attaching a meeting leaves the composer empty instead of pre-filling it.

## 0.6.9-beta.33 — 2026-07-29

**Video intelligence for real-world footage.** Starfish can now understand attached and generated videos: scenes, speech, on-screen text, important moments, claims, and timestamps. Large recordings are prepared automatically in reliable sections, while a compact analysis is retained for follow-up questions so the original footage is not repeatedly processed.

**Document retrieval built for depth and efficiency.** PDFs, Google Docs, Word files, spreadsheets, CSVs, and text sources are indexed once. Focused questions retrieve the exact relevant passages; complete reviews read the source in bounded order. Binary files and base64 payloads stay outside the AI conversation, reducing context cost without sacrificing source coverage.

**Research that resolves into a decision.** Research runs now establish a bounded plan, load only the guidance the task requires, prioritize high-value sources, and stop when the evidence is sufficient. Findings distinguish evidence from inference, preserve limitations, and arrive as a decision-ready briefing instead of a diary of searches.

## 0.6.9-beta.32 — 2026-07-26

**Browser control.** Switch it on under Apps and Starfish can use the browser panel itself — reading pages and filling things in on sites you're already signed in to, like ad platforms and analytics dashboards. You watch it work in the panel, it never handles your passwords, and it asks first before anything irreversible such as publishing, sending or deleting. It's off until you turn it on.

**Fixed.** Sending a follow-up message while Starfish was still working made that message lose your Image, Video and Browser settings, so it would say it couldn't create an image while the toggle was clearly on.

## 0.6.9-beta.31 — 2026-07-25

**PDFs keep a version history.** Ask for a change and Starfish rebuilds the PDF, but the previous version is kept — open the History button on the file to look at or restore any of the last 25 versions.

**Fixed chats that could stop with an error partway through a longer conversation.** Once the assistant had used a few tools, some conversations would end with an unrecoverable error; those now continue normally, including chats you'd already started.

**Quick now runs on Claude Haiku 4.5** for more reliable everyday answers.

## 0.6.9-beta.30 — 2026-07-24

**Fixed:** a PDF you asked for was being created, but its file card didn't appear in the chat — so it looked like nothing had happened. The Save card now shows up reliably as soon as the PDF is ready.

If PDF creation ever can't run, Starfish now says so plainly instead of quietly retrying and then claiming a file exists.

## 0.6.9-beta.29 — 2026-07-24

**Real, properly typeset PDFs.** Starfish now builds PDFs with a professional typesetting engine built into the app. Expect clean pages, tables that line up, sensible page breaks, page numbers, and your logo embedded.

**PDFs work the same on every Mac.** Previously PDF creation quietly leaned on tools that happened to be installed on your computer, so it could produce a beautiful document on one machine and fail on another. That's fixed — nothing to install.

## 0.6.9-beta.28 — 2026-07-24

**More built-in marketing expertise.** Dedicated skills for copywriting & email, social content, paid ad campaigns, analytics & reporting, and brand voice, so those requests come out sharper and more on-brand. Skills also produce more varied designs and only kick in when a task actually calls for one, keeping responses lean.

**Big designs finish building.** Multi-section decks, dashboards, and pages that build live in front of you now run all the way to the end instead of occasionally stopping partway through.

**The Copy button on a design** now reliably copies its full HTML code, ready to paste elsewhere.

**One-click updates.** When a new version is ready, a banner offers to update; click once and it downloads and restarts for you, with no manual reinstall.

**Announcements and feature flags.** We can now send short in-app announcements and turn already-built features on without you needing to install a new version.

**Tidied the model list** — removed Gemini 3 Pro. The left sidebar now opens and closes as smoothly as the right.

## 0.6.9-beta.27 — 2026-07-17

**Clear model choices for image and video,** including Grok Imagine 1.5 and Google's newest Nano Banana models, with starting-image requirements shown before generation instead of failing afterward.

**Generated images carry cleanly into videos and designed artifacts** without Terminal searches, broken local paths, or repeated base64 content.

**TikTok Ads is built in** with direct OAuth, a safe read-only default, optional write access, pagination safeguards, and account-aware reporting.

**Google Workspace** once again exposes every tool allowed by the permissions you granted, so Gmail, Drive, Docs, Sheets, Slides, Calendar, and Chat remain available throughout a conversation.

**Google Ads** now resolves manager-account hierarchies and matches the requested client account before reporting results, preventing empty data from the wrong account from being presented as fact.

**Artifact creation and editing** recover more gracefully from failed or stuck tool calls, preserve generated media, and keep real build progress visible while longer designs are being made.

**Balanced** uses Claude Sonnet 5 during its introductory-price window, then resolves to GPT-5.6 Luna on every new turn after August 31. Best remains Sonnet 5 throughout.

## 0.6.9-beta.26 — 2026-07-10

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

## 0.6.9-beta.25 — 2026-07-03

**Voice typing runs on your device now.** Dictation is powered by NVIDIA's Parakeet speech model running locally instead of a cloud transcription service — your audio never leaves your Mac. Words stream in live as you speak and drop into the message when you finish. The model isn't bundled with the app (it's a few hundred MB); the one-time download starts the first time you click the microphone, or from **Settings → Voice**, where you can also choose which input device to use. The microphone is released the moment you stop.

**Apify connects again.** The Apify integration was pointing at a connection endpoint that Apify retired, so it silently failed to load its tools. It now uses Apify's current endpoint, and connections made before the fix heal automatically the next time the app starts — no need to reconnect.

**Rearrange your agents.** On the Agents tab you can drag your agents into whatever order you like, and the agent picker in the chat composer follows the same order.

**Google Workspace Chat: message people and manage spaces.** Listing your Chat spaces and their members is fixed (it was failing on an incorrect request), and the assistant can now send direct messages and add, update or remove members of a space. Sending and deleting are an explicit opt-in on a Read & Write connection, and before sending the assistant confirms exactly who and where with you first.

**Google Ads: upload images to your asset library.** You can now upload image assets straight into a Google Ads account's library for use in campaigns.

**Long chats can't trigger premium pricing anymore.** Very long, tool-heavy conversations could grow large enough to cross the point where the AI provider doubles its rates — which quietly ran up cost on big sessions. Every message is now hard-capped below that line: a long chat condenses its oldest raw tool data (the conversation itself is never rewritten), and if it needs those details again the assistant simply re-fetches them. Everyday chats are unaffected — this only ever kicks in on unusually long sessions.

**The token badge now shows how full the chat is.** Instead of a large, alarming lifetime token count, the badge shows the chat's context as a percentage of its working memory — which is what actually determines when older messages get summarized. Hover it for the full detail, including the lifetime total.

**"Best" is now Claude Sonnet 5.** The Best model tier is sharper than before and costs less than the previous Best. "Balanced" remains Claude Sonnet 4.6.

**Google Ads: remove assets from campaigns.** The assistant can now detach assets — for example, disapproved images or logos — so they stop serving on a campaign. (Google Ads never allows permanently deleting an asset from the account library; detaching is how you take it out of a campaign, and it's exactly what the Google Ads interface's "remove" does too.)

## 0.6.9-beta.24 — 2026-07-02

**Big chats cost far less to run.** Long, tool-heavy conversations — like asking the assistant to pull and review every campaign in a Google Ads account — were quietly re-sending and re-caching the entire conversation on every message, which ran cost up fast. The app now caps how much a single turn can pull in, stops a runaway tool loop from ballooning the conversation, and keeps cached context warm for an hour so it's reused instead of rebuilt each time. Long chats stay responsive and much cheaper.

**Fewer interrupted messages.** The intermittent "Gateway request timed out" / "the model returned an error" that could cut off a reply mid-chat is fixed. The app now keeps its connection to the AI warm between messages and quietly retries a dropped connection instead of failing your message.

**The assistant knows exactly what it's connected to.** It now reports the precise Google services you've connected and at what access level, instead of sometimes claiming only Gmail is available. And when you've granted read-only access, it won't offer to create or edit files and then fail — it only promises what it can actually do.

## 0.6.9-beta.23

**Google Ads runs your whole account.** Beyond Search campaigns, the assistant can now build Performance Max campaigns, set up conversion tracking (leads, purchases, calls), add ad extensions (sitelinks, callouts, structured snippets, call assets), and create remarketing and Customer Match audience lists.

**Google Analytics can create, not just read.** GA4 can now create audiences, plus custom dimensions, custom metrics, key events, and data streams, and update property settings. Reconnect Google Marketing Suite and allow the new edit permission so these changes save.

**Connect Google Workspace read-only.** Connect Drive, Calendar, and Chat — not just Gmail — and choose Off / Read-only / Read & Write for each service, so you can connect a client's account for reference without granting the ability to edit or delete.

**Claude Sonnet 5 fixed.** Sonnet 5 was erroring on every message because it uses a new "thinking" mode; the app now sends the correct format.

## 0.6.9-beta.22 — 2026-06-30

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

## 0.6.9-beta.20 — 2026-06-26

**Import large workspaces.** Importing a workspace that holds a lot of images — which can make its export file very large — used to fail with a confusing "couldn't read the file" error. Large workspaces now import correctly. (Under the hood, the import was being cut off at a 10 MB ceiling on how much of the uploaded file the app would read; that limit is now far above any realistic workspace.)

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

