---
outline: [2, 3]
---

# Privacy Policy

::: danger Draft for legal review
This policy is a draft. It has not yet been approved by a lawyer and may change before it takes effect. Items in square brackets, such as [CONTACT EMAIL], are placeholders that still need to be filled in.
:::

**Last updated: 2026-10-15**

## The short version

- **Starfish is a Mac app.** Your work is created and kept on your Mac first.
- **Cloud sync is off unless you turn it on.** Signing in alone does not upload your work. If you turn on **Settings → Sync → Cloud sync**, Starfish copies your workspace to our cloud (Amazon Web Services, Oregon, USA) so it can appear on your other Macs and be shared with your team. This includes chats, projects, files, meetings, memories, and automations. A Mac that already synced before this choice existed keeps syncing until you choose. You can turn sync off at any time, and delete the copy already in the cloud.
- **Your AI key and most of your connected-app sign-ins stay on your Mac.** They are not uploaded to our servers.
- **AI requests go from your Mac to Vercel AI Gateway on your own key**, and from there to the model provider. Vercel and the provider bill you directly. We never resell or proxy AI usage, with the exceptions listed in [Services we run with our own accounts](#6-services-we-run-with-our-own-accounts).
- **When you use a connected app** (Google, TikTok, ClickUp, and others), Starfish talks to that service on your behalf, using your account.
- **We do not sell your data or show ads, and Starfish itself does not train models on your content.** Whether Vercel or a model provider uses your requests for training is set by their terms and your settings with them, not by us (see [Section 5](#5-ai-requests-vercel-ai-gateway-and-model-providers)). We do not use third-party analytics or crash-reporting tools in the app.
- **You can delete your cloud data or your whole account yourself**, in Settings. See [Deleting your data](#deleting-your-data).

The rest of this page explains each of these points in detail.

## 1. Who we are and what this policy covers

"Starfish", "we", "us" and "our" mean **Starfish Ad Age LLC** [CONFIRM ENTITY: operating as Starfish Solutions; earlier documents called Starfish Solutions both an "affiliate" and a "division" of Starfish Ad Age LLC], 140 E Tyler Street, Longview, Texas 75601, USA.

This policy covers:

- the Starfish desktop app for macOS (the "App");
- the Starfish account you sign in with;
- our cloud services that support the App: sync, Teams, Starfish Anywhere (phone access), shared pages, feedback, and billing;
- this documentation website.

It does not cover the services you connect to Starfish, such as Vercel, the AI model providers, Google, Meta, TikTok, ClickUp, GoHighLevel, QuickBooks, or GitHub. Their own privacy policies apply to what they do with your data.

### Our role: controller or processor

- **For your account and billing details**, we decide how the data is used. We are the "controller".
- **For the content you put into Starfish** (chats, files, client data, meeting recordings), we only store and move it so the App works for you. When you are a business, such as an agency handling client data, we act as your "processor" or "service provider", and you remain the controller. See [Section 14](#14-agencies-and-client-data-data-processing-terms).

## 2. Where your data lives: the three places

| Place | What it is | Examples |
|---|---|---|
| **Your Mac** | Data the App stores on your computer | Local database, files, AI key, most connected-app sign-ins, meeting audio, browser sessions |
| **Starfish's servers** | Cloud services we run and pay for | Account, sync copy of your workspace, Teams, shared pages, feedback, billing records |
| **Third parties, on your behalf** | Services you choose to use through Starfish, with your own key or account | Vercel AI Gateway and AI model providers, Google, TikTok, Meta, ClickUp, GoHighLevel, QuickBooks, GitHub, websites you visit |

The sections below go through each in turn.

## 3. Data that stays on your Mac

The App keeps the following on your Mac. None of it leaves your Mac unless a later section says so.

| Data | Where on your Mac | How it is protected |
|---|---|---|
| Local database (chats, messages, projects, meetings, transcripts, memories, automations, artifacts, usage counters) | The App's data folder (`~/Library/Application Support/Starfish`) | macOS user-account and file permissions. The App does not add its own encryption. We recommend turning on FileVault. |
| Project files, agent files, uploaded videos, Google Drive download cache | The App's data folder | Same as above |
| Generated images and videos | Storage inside the App | Same as above |
| Meeting audio recordings and meeting screenshots | `~/.starfish/` | Same as above. Compressed meeting audio is kept on your Mac for up to [180 DAYS — CONFIRM] and then removed. |
| **Your Vercel AI Gateway key** | The App's data folder | Encrypted with your Mac's Keychain (via Electron "safeStorage"). If the Keychain is unavailable, an encrypted file is used instead. |
| Google client credentials you enter yourself, GoHighLevel private tokens, TikTok Organic account tokens, Starfish Anywhere secrets | The App's data folder | Encrypted with your Mac's Keychain |
| **Most other connected-app sign-ins** (for example ClickUp, GitHub, Figma, Canva, Vercel, Apify, Zapier, TikTok Ads, Facebook, Stitch) and Google and QuickBooks access tokens | Files in `~/.starfish/` and `~/.config/` | Readable only by your macOS user account (owner-only file permissions). They are **not** separately encrypted. Anyone or any program running as your Mac user could read them. |
| Your Starfish sign-in session | The App's local browser storage | Stored by the App on your Mac |
| Built-in browser history, cookies and logins | The App's data folder | Stored like any web browser's data |
| Speech and voice models | The App's data folder | Downloaded once; voice typing in "local" mode runs on your Mac |
| A one-time backup copy of your local database made before your first sync | The App's data folder | Kept on your Mac until you delete it |
| App logs, including Starfish Anywhere request logs | The App's data folder | Stay on your Mac |
| Local usage and cost counters, tool logs, search indexes | Local database | Never synced |

**Uninstalling the App does not delete these folders.** To remove them, delete the folders listed above after quitting the App.

### Reading files on your Mac ("Local Access")

The AI assistant can use file tools on your Mac. Please understand exactly what the Local Access setting does:

- **Local Access controls writing, editing and running commands.** It is off by default. When on, you choose "Full" (anywhere) or "Scoped" (only chosen folders).
- **Reading files is not limited by Local Access.** The assistant can read and list files anywhere on your Mac that is not on the always-blocked list, even with Local Access off.
- **Always blocked:** system folders, applications, the macOS Keychain, browser password stores, and the App's own secret files. Files that look like credentials or environment files (for example `.env` or key files) are blocked unless you turn on "Allow reading credential and environment files".
- **What the assistant reads is sent to the AI model** you are using (see [Section 5](#5-ai-requests-vercel-ai-gateway-and-model-providers)) and is **saved in the chat**, which syncs to our cloud when you are signed in (see [Section 4](#4-data-on-starfish-s-servers)).

Do not ask the assistant to read files you do not want sent to an AI provider or stored in your chat history.

## 4. Data on Starfish's servers {#4-data-on-starfish-s-servers}

### 4.1 Your account (Supabase)

We use **Supabase** for sign-in. When you create an account we receive and store:

- your email address and password (stored by Supabase in hashed form), or, with "Continue with Google", your Google email, name and the fact that your email is verified;
- a user ID and sign-in timestamps.

We also use Supabase to send the App small settings at launch (feature switches, announcements, which built-in model a tier uses, agent templates, a music catalogue) and to run a few helper functions described in [Section 6](#6-services-we-run-with-our-own-accounts). Supabase region: [SUPABASE REGION — CONFIRM].

### 4.2 Cloud sync (Amazon Web Services, us-west-2, Oregon, USA)

**Cloud sync is off by default.** Nothing from your Mac is uploaded or downloaded for sync until you turn on **Settings → Sync → Cloud sync**. A Mac that synced before this setting existed keeps syncing until you make a choice there. **While sync is on, the App copies your workspace to our cloud** a few seconds after launch, after each chat, every few minutes, and when you open or hide the window. On your first sync, the existing contents of your local database are linked to your account and uploaded. When you turn sync off, you can keep the cloud copy or delete it for good (**Delete my cloud data**); deleting it turns sync off for your whole account.

**What is synced:**

- chats and every message in them, including tool results, attachments, image links and file contents the assistant read;
- artifacts and every saved version of them;
- projects, folders, uploaded files (the file contents, up to 200 MB each) and agent resource files;
- meetings, meeting transcripts, speaker names, and meeting audio recordings when they are archived;
- memories, personalization settings and preferences;
- automations and their run history;
- agents, vaults, agent rooms and their conversations;
- plans, video analyses, Client Timelines, and Studio content (brands, design systems, slides, comments, sources);
- your Teams membership and profile (name, email, optional avatar link).

**What is never synced:** your AI key, your connected-app sign-ins, local usage and cost counters, tool logs, search indexes, local file checkpoints and pre-edit file copies, job queues, and the local chat replay log.

**Where and how it is stored:**

- Service: Amazon Web Services (AWS), region **us-west-2 (Oregon, USA)**.
- Database: Amazon RDS for PostgreSQL in a private network.
- Files and large items: Amazon S3.
- Encryption: in transit with TLS, and at rest with AWS KMS keys that rotate yearly.
- **Not end-to-end encrypted.** Our servers can read the content so they can sync and share it. Our staff do not look at your content except to provide support you ask for, to investigate abuse or security issues, or where the law requires.
- Access: every request must carry a valid Starfish sign-in token, which our servers check.

### 4.3 Teams {#4-3-teams}

If you create or join a Team, we store the Team name, members, roles (owner, admin, member), invitations and shared-project permissions. Details of what teammates can see are in [Section 8](#8-teams-what-teammates-can-see).

**Invite emails** are sent through **Resend** from a Starfish address. Resend receives the invitee's email, the Team name, the inviter's name, the role and the join link. Invitations expire after 7 days. We keep only a scrambled (hashed) form of the join token in our database; the mail queue keeps the raw link until the invite expires plus one day.

### 4.4 Published pages ("Sites" and shared Studio pages)

- **Artifact sites.** When you are signed in and the assistant creates or edits an HTML, SVG or CSV artifact, the App publishes it to `sites.starfishsolutions.ai` automatically. **By default only people you invite can open it.** If you change access to public, anyone with the link can see it. Published pages are stored on our AWS servers.
- **Studio shares.** If you choose to share a Studio presentation or website, we store a copy (with scripts removed) in Supabase and publish it at a `starfishsolutions.ai/share/...` link. Anyone with the link can view it until you revoke the link.

### 4.5 Feedback and bug reports {#4-5-feedback-and-bug-reports}

There are no automatic crash reports. Only when you choose to send feedback do we receive:

- your name, the type of feedback, your description, and the App version;
- an optional screenshot (up to 5 MB);
- for a chat report, either an AI summary of the chat (made with your own AI key) or the full chat transcript, plus diagnostic details (error messages, failed steps). The App tries to remove passwords, tokens and API keys from the text first.

Feedback is stored in Supabase and copied into our internal issue tracker (**Notion**). Screenshots and transcripts are stored as files linked from the report. [BLOCKER BEFORE PUBLISHING: these files are currently stored at public-read links; make them private, then remove this note.] Do not send a full transcript if it contains information you do not want our team to read.

### 4.6 Billing (Stripe)

Subscriptions are paid through **Stripe**. Stripe collects your card or payment details directly; we do not see or store full card numbers. We receive and keep your name, billing email, billing address and country (for tax), plan, seat count, payment status and invoices. [CONFIRM: Stripe is not yet built into the App; update this section once billing is live.]

### 4.7 What we do not collect

- No third-party analytics, advertising or tracking tools are built into the App.
- No crash-reporting service is built into the App.
- Your local usage and cost counters stay on your Mac.
- We do not sell or rent personal information, and we do not share it for cross-context behavioural advertising.
- Starfish itself does not train models on your content. Whether Vercel or a model provider uses your requests for training is set by their terms and your settings with them, not by us (see Section 5).

### 4.8 App updates

The App checks **GitHub Releases** for updates when it starts and every few hours. Like any web request, this reveals your IP address, App version and operating system to GitHub. Updates install only when you click to install them. The App may also download open-source speech models from GitHub the first time you use local voice typing.

## 5. AI requests: Vercel AI Gateway and model providers {#5-ai-requests-vercel-ai-gateway-and-model-providers}

Starfish does not include AI usage. You create your own **Vercel** account and **AI Gateway API key** and enter it in Starfish (see [Your AI key and model access levels](/getting-started/ai-key-and-model-levels)). Then:

- Every AI request goes **from your Mac directly to Vercel AI Gateway**, signed with **your** key. Starfish's servers are not in the middle.
- Vercel passes the request to the model provider (for example OpenAI, Anthropic, Google, DeepSeek, Alibaba (Qwen), Z.AI (GLM), MiniMax, Moonshot, Mistral, xAI, Black Forest Labs, Kling, ByteDance, Fish Audio, Morph, Perplexity, Voyage).
- **Vercel and the provider bill you directly**, under your own agreements with them: the Vercel Terms of Service, the Vercel AI Product Terms, and each provider's terms and usage policies.

**What is sent in an AI request:** your message, the chat history the model needs, files, images or text you attach or that the assistant reads or fetches, results from connected apps, your saved memories and preferences when relevant, and instructions Starfish adds.

**Types of AI use that all go through your key:**

- chat and agent work;
- small "helper" calls Starfish makes for you, such as naming chats, building prompts, summarising long chats, choosing tools, checking results, extracting memories, and summarising a chat for a feedback report;
- embeddings (used to rank tools and search your knowledge files);
- image and video generation;
- text-to-speech and cloud dictation (you can choose on-device dictation instead);
- meeting transcripts and live captions;
- web search (through Vercel's Perplexity search tool);
- understanding YouTube and other videos (the video link is sent to a Google Gemini model);
- reading speaker names from meeting screenshots;
- "Morph fast edits", only if you turn them on (file contents are sent to Morph through Vercel).

How long Vercel and the providers keep your requests, and whether they use them for training, is set by **their** terms and your settings with them, not by us. Check Vercel's AI Gateway documentation and each provider's policy. Starfish has no control over these services and is not responsible for them.

**Consumer AI subscriptions** such as ChatGPT Plus or Claude Pro cannot be used with Starfish. Only API keys work.

## 6. Services we run with our own accounts {#6-services-we-run-with-our-own-accounts}

A few features currently use services that **Starfish** pays for and holds the keys to. Your data passes through them as described here.

| Feature | Service | What is sent | How long it is kept |
|---|---|---|---|
| Search Studio (SEO research), included in your subscription under fair-use limits | **DataForSEO**, on Starfish's own provider account, via our Supabase function | Keywords, domains, market and language you search. No AI usage of yours goes through this account. To apply the fair-use limits, our function keeps a count of your lookups per day, linked to your account ID; it does not store what you searched. | Kept by DataForSEO under its terms; results are saved in your workspace. The daily count stays in Supabase until you delete your account |
| "Connect with Google" sign-in | Google, via our Supabase function | Google's one-time sign-in code and refresh token pass through our function so Google can issue your tokens. Our function does not store them. | Not stored by us |
| ClickUp and TikTok sign-in | ClickUp and TikTok, via our Supabase functions | The one-time sign-in code and resulting tokens pass through our function | Not stored by us [CONFIRM for ClickUp and TikTok Ads functions, whose code is kept outside the App] |
| QuickBooks change alerts | Intuit, via our Supabase function | Notices from QuickBooks that an invoice or customer changed (company ID, record ID, type of change) | Kept in a queue until your App collects them [CONFIRM retention] |
| Team invites | **Resend** | See [Section 4.3](#4-3-teams) | See Section 4.3 |
| Starfish Anywhere | **Cloudflare** | See [Section 9](#9-starfish-anywhere-using-starfish-from-your-phone) | See Section 9 |
| Feedback | Supabase and **Notion** | See [Section 4.5](#4-5-feedback-and-bug-reports) | See Section 15 |
| Music library | Pixabay content network | A request for the music file you play | Under Pixabay's terms |

Meeting transcripts and live captions no longer use AssemblyAI. They run on your own AI Gateway key, like other AI requests (see Section 5).

## 7. Connected apps and the web, on your behalf {#7-connected-apps-and-the-web-on-your-behalf}

When you connect an app, Starfish uses **your** account with that service to read and, if you allow it, change things there. The data goes directly from your Mac to that service, except for the sign-in steps listed in Section 6. Each service's own terms and privacy policy apply.

| App | How you sign in | What Starfish can do |
|---|---|---|
| Google Workspace (Gmail, Calendar, Drive, Docs, Sheets, Slides, Forms, Chat) | Starfish's Google app, or your own Google Cloud app | Read, create, change, send, share and delete, depending on your approval settings. Reads your calendar every few minutes to show meeting reminders. |
| Google Analytics 4, Search Console, Tag Manager | Same as above | Read reports and change configuration |
| Google Ads | Same as above | Read reports and change campaigns |
| TikTok Ads | Starfish's TikTok app | Read-only unless you choose Read + Write |
| TikTok Organic (many client accounts) | Starfish's TikTok app | Read posts and comments, reply to or hide comments, publish posts |
| Facebook / Meta Ads | Your own access token | Read and change ad accounts |
| ClickUp | Starfish's ClickUp app | Read and change tasks, docs and lists |
| GoHighLevel | Your own private tokens or your own agency app | Read, or read and write, per sub-account |
| QuickBooks Online | Your own Intuit app | Read and change invoices, customers and more |
| GitHub | GitHub's device sign-in, or your own token | Read and change repositories, issues and pull requests |
| Figma, Canva, Vercel, Apify, Zapier | Each service's own sign-in | As allowed by that service |
| Stitch | Your own Google API key | Generate designs |
| Playwright, built-in browser | No account; runs on your Mac | Opens websites you or the assistant choose. The built-in browser uses its own saved logins on your Mac. |
| Web page fetching | No account | Fetched directly from your Mac |

What a connected app returns to Starfish (for example an email or a report) becomes part of your chat. It is then sent to your AI model as needed and synced to our cloud with the chat.

## 8. Teams: what teammates can see {#8-teams-what-teammates-can-see}

- **Shared:** only projects you choose to share with the Team, with their folders and files (including file contents), and published sites you share. The person who shared a project, or the Team owner or an admin, chooses "view" or "edit" access.
- **Not shared:** your chats, agents, agent rooms, memories, meetings, automations and personal settings are never shared with the Team.
- **Visible to teammates:** your display name, email address and avatar link.
- **Owner and admins** can invite and remove members, change shared-project access, delete content in shared projects, and see whether invite emails were delivered. Only the owner can remove an admin or delete the Team, and a Team can be deleted only after it holds no projects.
- **When a member leaves or is removed,** projects they shared to the Team pass to the Team owner so the Team keeps its work. Their Mac removes its copies of the Team's shared content. If they rejoin, ownership of their shared projects returns to them.

## 9. Starfish Anywhere: using Starfish from your phone {#9-starfish-anywhere-using-starfish-from-your-phone}

Starfish Anywhere is **off by default**. If you turn it on in **Settings → Remote**:

- We create a private tunnel for your Mac on **Starfish's Cloudflare account**, with a web address of the form `<name>.starfishanywhere.com`.
- Your phone's traffic to your Mac passes through Cloudflare. **Cloudflare decrypts and re-encrypts this traffic in transit**, so it is not end-to-end encrypted between your phone and your Mac.
- What passes through: the App's pages and data you use from your phone, such as chats, projects, files, meetings and Studio. Setup, keys, sync, connected-app sign-in and code publishing are blocked from the phone.
- **Pairing:** phones pair with a one-time code that lasts 10 minutes. Each paired phone gets its own secret key; your Mac stores only a scrambled (hashed) form of it. Up to 5 phones can be paired.
- **What we store** (in Cloudflare's database): your user ID, an install ID, your Mac's name, the tunnel name and ID, and when it was last seen. Macs not seen for 60 days are disconnected. Security rate-limit records are deleted after 2 days. Cloudflare request logs include your user ID and tunnel ID.
- **Notifications** to your phone include chat titles. They are encrypted and delivered through your phone browser's push service (for example Apple).

## 10. How long we keep data

| Data | How long |
|---|---|
| Data on your Mac | Until you delete it (meeting audio: see Section 3) |
| Account details | While your account is open, then as described in [Deleting your data](#deleting-your-data) |
| Synced workspace content | While your account is open. Deleting an item in the App hides it everywhere but **does not yet erase it from our servers** (see below). |
| Database backups | Automated backups kept for **14 days**, with recovery to any point in that window |
| Older versions of synced files | Kept (file versioning is on) until you delete your cloud data or your account, or we erase them on request |
| Server logs | **1 month** |
| Team invitation records | Invitation link up to 7 days; mail queue entry until expiry plus 1 day |
| Meeting audio sent for transcription | Not stored by us. Vercel and the provider keep it under their terms (see Section 5) |
| Starfish Anywhere records | While enabled; disconnected after 60 days unused; rate-limit records 2 days |
| Feedback reports | Until the issue is resolved and for up to [RETENTION PERIOD] afterwards |
| Billing records | As long as tax and accounting law requires (typically up to 7 years) |

### How deleting works today

- **On your Macs:** deleting a chat, file, project or other item removes it from the App on all your signed-in Macs. A deleted chat's messages are erased from the local database.
- **On our servers:** the item is **marked as deleted** so it no longer appears anywhere, but the stored data is **not automatically erased**. In particular, messages, earlier versions of artifacts, and uploaded files remain on our servers until we erase them on request.
- To erase everything from our servers, delete your cloud data or your account (see below). To erase only some deleted items, contact us.

### Deleting your data {#deleting-your-data}

You can do this yourself in the App while you are signed in:

- **Delete only your cloud data:** **Settings → Sync → Delete my cloud data** turns cloud sync off and erases the synced copy of your workspace from our servers, including older file versions. Your account stays open.
- **Delete your whole account:** **Settings → General → Account → Delete Starfish account**. You sign in again to confirm. If you own a Team that has other members, hand it to a teammate (Settings → Team) or delete it first.

Deleting your account erases for good:

- your Starfish sign-in (Supabase account);
- everything cloud sync stored for you: chats, projects, files, meetings, agents, automations, memory and settings, with every older saved version;
- pages you published, and your access to pages others shared with you;
- your Team memberships and your teammate profile; Teams you own with nobody else in them are deleted;
- shared Studio links, meeting audio waiting to be transcribed, and the Starfish Anywhere records and tunnels for your Macs.

It does not delete:

- anything on your Macs. Your chats, files and settings stay there, and Starfish signs you out; delete them as described in Section 3;
- work you added to other people's Teams. It stays with the Team, owned by the Team owner (see Section 8);
- feedback reports you sent. They are stored without a link to your account, so we cannot find them to delete them;
- billing records, which we keep only as long as the law requires.

If you can no longer sign in, email [CONTACT EMAIL] from your account's email address. We will verify your request and then do the same within [30 DAYS — CONFIRM].

Erased data can survive in database backups for up to 14 days, after which it is gone. Data held by Vercel, AI providers or connected apps must be deleted with those services.

### Getting a copy of your data

The App can export individual projects (folders and knowledge files), meetings, Studio content and agent structures. Your full local database is also on your Mac.

**Your cloud data.** While you can sign in, use **Settings → Account → Download my cloud data**. You get a zip file with:

- one JSON file per type of synced data (for example chats, messages, projects, meetings, memories), including items you deleted that are still kept on our servers;
- your synced files, uploaded files and meeting recordings, named by their content fingerprint (SHA-256), with a `manifest.json` that lists what is included and any file no longer stored online;
- data of Teams you belong to that you can open today. Nothing that belongs only to other people is included.

The zip does not include your sign-in record, shared Studio page copies, published page copies (the artifacts they came from are included) or Starfish Anywhere records. Ask us if you want those too.

**If you can no longer sign in** (for example after your subscription or account ends), email [CONTACT EMAIL] from your account's email address within [30] days of termination. After we verify the request, we send you the same zip within [30 DAYS — CONFIRM] or the time the law requires. To request a copy of everything else we hold about you, email the same address.

## 11. How we protect data

- Encryption in transit (TLS) for all our services, and encryption at rest with AWS KMS for our database, backups and file storage.
- Database in a private network; the App can reach it only through our checked API.
- Every cloud request needs a valid sign-in token, checked against Supabase's public keys; sessions can be revoked.
- Access to your synced data is limited to your account and, for shared projects, your Team.
- The database account our API uses cannot delete rows, which protects against accidental mass deletion.
- Your AI key and the most sensitive connected-app secrets are encrypted with your Mac's Keychain.
- The AI assistant is blocked from reading the Keychain, browser password stores and the App's secret files.
- Approval settings let you require your OK before the assistant changes or deletes anything in your connected apps.

No system is perfectly secure. You are responsible for keeping your Mac, your macOS user account, your Vercel key and your connected accounts secure. Turn on FileVault and use a strong Mac password. If we learn of a security breach affecting your personal information, we will notify you and the authorities as the law requires.

## 12. Children

Starfish is for businesses and adults. You must be at least 18 to use it. We do not knowingly collect personal information from anyone under 18. If you believe a child has given us personal information, contact us and we will delete it.

## 13. International transfers

We are based in the United States, and our servers are in the United States (AWS Oregon; Supabase [REGION]; Cloudflare's global network). If you use Starfish from outside the United States, your data is transferred to and stored in the United States, where data protection laws may differ from yours. Where the law requires a transfer mechanism (for example the EU Standard Contractual Clauses), we will rely on one. [CONFIRM: transfer mechanism and whether Starfish will be offered in the EU/UK.] Vercel, AI providers and connected apps may process your data in other countries under their own terms.

## 14. Agencies and client data (data processing terms) {#14-agencies-and-client-data-data-processing-terms}

Many Starfish customers are agencies that handle their clients' data (for example ad accounts, analytics, CRM contacts, meeting recordings). For that client data:

- **You are the controller** (or act for your client), and **we are your processor or service provider.** We process client data only to provide Starfish to you and on your instructions, which are your use of the App and these terms.
- We do not sell client data, use it for our own purposes, or combine it with other customers' data.
- Our staff who can access it are bound by confidentiality.
- We use the subprocessors in [Section 15](#15-subprocessors) and will update that list before adding a new one. [CONFIRM: notice period and objection right.]
- We will help you respond to your clients' and data subjects' requests and notify you without undue delay of a breach affecting client data.
- When your subscription ends, we will delete client data as described in Section 10.
- **You are responsible** for having the right to give us your clients' data, telling your clients (and meeting participants) that you use Starfish, getting any consents needed (for example to record meetings), and for the AI providers and connected apps you choose, which you engage directly under your own agreements.

A signed Data Processing Agreement is available on request: [DPA REQUEST PROCESS — CONFIRM].

**Recording meetings:** laws in many places require all participants to agree before a call is recorded or transcribed. You are responsible for telling participants and getting their consent.

## 15. Subprocessors {#15-subprocessors}

Services that store or process data **for Starfish** (paid for by us):

| Subprocessor | Purpose | Location |
|---|---|---|
| Amazon Web Services | Sync database, file storage, Teams, published sites, invite queue, logs | USA (Oregon, us-west-2) |
| Supabase | Sign-in, App settings, helper functions, Studio shares, feedback | [SUPABASE REGION] |
| Cloudflare | Starfish Anywhere tunnels and device records | Global network, USA |
| Resend | Team invite emails | USA |
| DataForSEO | Search Studio keyword and competitor data | [LOCATION — CONFIRM] |
| Notion | Feedback and bug report tracking | USA |
| Stripe | Subscription billing | USA |
| GitHub | App update downloads | USA |

Services **you** choose and contract with directly (not our subprocessors): Vercel and the AI model providers, and every connected app in [Section 7](#7-connected-apps-and-the-web-on-your-behalf).

## 16. This website and cookies

- This documentation site is a static website. It does not use advertising or analytics cookies, and its search runs in your browser.
- The website host, Vercel, receives standard request information such as your IP address and browser type to serve pages and protect against abuse.
- The App itself does not use advertising or tracking cookies. Its built-in browser stores cookies for websites you visit, like any browser, on your Mac.
- [CONFIRM: if the marketing website at starfishsolutions.ai uses analytics or cookies, describe them here or in a separate notice.]

## 17. Your rights and choices

Depending on where you live (for example California, other US states, the EU, the UK, or Canada), you may have the right to:

- know what personal information we hold and get a copy;
- correct it;
- delete it;
- object to or restrict some uses;
- move your data to another service;
- not be discriminated against for using these rights;
- complain to your local data protection authority.

To use any of these rights, email [CONTACT EMAIL]. We will verify your identity and answer within the time the law requires. If you are an agency's client, contact the agency first; we will help them answer you.

**Your choices in the App:**

- Keep cloud sync off, or turn it off in **Settings → Sync**. Your data stays on your Mac.
- Keep Starfish Anywhere off, or unpair phones in **Settings → Remote**.
- Choose **Ask for approval** so the assistant asks before any change in your connected apps.
- Disconnect any connected app at any time, and revoke Starfish's access in that service's own settings.
- Choose on-device dictation instead of cloud dictation.
- Change who can open a published site, or delete it.
- Do not send full transcripts with feedback.

We do not sell or share personal information for targeted advertising, so there is nothing to opt out of.

## 18. Changes to this policy

We will update this page when the App or our practices change, and change the "Last updated" date. If a change is significant, we will tell you in the App or by email before it takes effect.

## 19. Contact

**Starfish Ad Age LLC** [CONFIRM ENTITY], 140 E Tyler Street, Longview, Texas 75601, USA
Email: [CONTACT EMAIL]
Phone: (903) 508-2576

See also the [Terms of Service](/legal/terms).
