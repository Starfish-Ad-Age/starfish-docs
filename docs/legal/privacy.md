---
outline: [2, 3]
---

# Privacy Policy

**Last updated: 2026-10-28**

## The short version

- **Starfish is a Mac app.** Your work is created and kept on your Mac first.
- **Cloud sync is off unless you turn it on.** Signing in alone does not upload your work. If you turn on **Settings → Sync → Cloud sync**, Starfish copies your workspace to our cloud in the United States so it can appear on your other Macs and be shared with your team. You can turn sync off at any time and delete the copy already in the cloud.
- **Your AI key and your connected-app sign-ins stay on your Mac.** They are not stored on our servers.
- **AI requests go from your Mac to Vercel AI Gateway on your own key**, and from there to the model provider you use.
- **When you use a connected app** (for example Google), Starfish talks to that service on your behalf, using your account. See [Google user data](#google-user-data) for exactly what Starfish does with data from Google.
- **We do not sell your data or show ads, and we do not use your content or your Google user data to train AI models.** We do not use third-party analytics or crash-reporting tools in the app.
- **You can delete your cloud data or your whole account yourself**, in Settings. See [Deleting your data](#deleting-your-data).

## 1. Who we are and what this policy covers

Starfish is provided by Starfish Ad Age LLC ("Starfish", "we", "us", "our"). The names Starfish and Starfish Solutions are used for the product. You can reach us at [communications@starfishadage.com](mailto:communications@starfishadage.com) or at Starfish Ad Age LLC, 140 E Tyler St, Suite 200, Longview, TX 75601, USA.

This policy covers:

- the Starfish desktop app for macOS (the "App");
- the Starfish account you sign in with;
- our cloud services that support the App: sync, Teams, Starfish Anywhere (phone access), shared pages, feedback, and billing;
- this documentation website.

It does not cover the services you connect to Starfish, such as Vercel, AI model providers, Google, Meta, TikTok, ClickUp, GoHighLevel, QuickBooks, or GitHub. Their own privacy policies apply to what they do with your data.

### Our role: controller or processor

- **For your account and billing details**, we decide how the data is used. We are the "controller".
- **For the content you put into Starfish** (chats, files, client data, meeting recordings), we only store and move it so the App works for you. When you are a business, such as an agency handling client data, we act as your "processor" or "service provider", and you remain the controller. See [Section 14](#14-agencies-and-client-data-data-processing-terms).

## 2. Where your data lives: the three places

| Place | What it is | Examples |
|---|---|---|
| **Your Mac** | Data the App stores on your computer | Local database, files, AI key, connected-app sign-ins, meeting audio, browser sessions |
| **Starfish's servers** | Cloud services we run and pay for | Account, sync copy of your workspace, Teams, shared pages, feedback, billing records |
| **Third parties, on your behalf** | Services you choose to use through Starfish, with your own key or account | Vercel AI Gateway and AI model providers, Google, and other connected apps, websites you visit |

## 3. Data that stays on your Mac

The App keeps the following on your Mac. None of it leaves your Mac unless a later section says so.

| Data | How it is protected |
|---|---|
| Local database (chats, messages, workspaces, meetings, transcripts, memories, automations, artifacts, usage counters) | Your macOS user account and file permissions. We recommend turning on FileVault. |
| Workspace files, uploaded videos, generated images and videos, and a temporary cache of Google Drive files you open | Same as above |
| Meeting audio recordings and meeting screenshots | Same as above. Meeting audio is kept on your Mac for up to 180 days after a meeting and then removed. |
| **Your Vercel AI Gateway key**, and Google client credentials you enter yourself | Encrypted with your Mac's Keychain |
| Connected-app sign-ins, including Google access and refresh tokens | Stored on your Mac and readable only by your macOS user account |
| Your Starfish sign-in session, built-in browser history, cookies and logins, speech models, App logs, search indexes | Stored on your Mac by the App |

**Uninstalling the App does not delete this data.** To remove it, delete the App's data folders after quitting the App, or contact us for help.

### Reading files on your Mac ("Local Access")

The AI assistant can use file tools on your Mac:

- **Local Access controls writing, editing and running commands.** It is off by default. When on, you choose "Full" (anywhere) or "Scoped" (only chosen folders).
- **Reading files is not limited by Local Access.** The assistant can read and list files on your Mac outside the always-blocked locations, even with Local Access off.
- **Always blocked:** credential and system locations. Files that look like credentials are blocked unless you turn on the setting that allows them.
- **What the assistant reads is sent to the AI model** you are using (see [Section 5](#5-ai-requests-vercel-ai-gateway-and-model-providers)) and is **saved in the chat**, which syncs to our cloud when cloud sync is on.

## 4. Data on Starfish's servers {#4-data-on-starfish-s-servers}

### 4.1 Your account

When you create an account we receive and store:

- your email address and password (stored in hashed form), or, with "Continue with Google", your Google email address, name and the fact that your email is verified;
- a user ID and sign-in timestamps.

The App also receives small settings from us at launch (feature switches, announcements and templates).

### 4.2 Cloud sync {#4-2-cloud-sync}

**Cloud sync is off by default.** Nothing is uploaded for sync until you turn on **Settings → Sync → Cloud sync**. A Mac that synced before this setting existed keeps syncing until you make a choice there. While sync is on, the App copies your workspace to our cloud regularly. When you turn sync off, you can keep the cloud copy or delete it for good (**Delete my cloud data**).

**What is synced:** chats and every message in them (including tool results, attachments and content the assistant read, which can include data from connected apps such as Google); artifacts and their versions; workspaces, folders and uploaded files; meetings, transcripts, speaker names and archived meeting audio; memories, personalization settings and preferences; automations and their run history; agents and agent rooms; Studio content; and your Teams membership and profile.

**What is never synced:** your AI key, your connected-app sign-ins and tokens, local usage and cost counters, tool logs, search indexes and local file checkpoints.

**How it is stored:** in an encrypted managed database and file storage in the United States, encrypted in transit and at rest, with least-privilege access. Synced data is **not end-to-end encrypted**: our servers can read it so they can sync and share it. Our staff do not look at your content except to provide support you ask for, to investigate abuse or security issues, or where the law requires. Every request must carry a valid Starfish sign-in token.

### 4.3 Teams {#4-3-teams}

If you create or join a Team, we store the Team name, members, roles (owner, admin, member), invitations and shared-workspace permissions. **Invite emails** are sent through **Resend**, which receives the invitee's email, the Team name, the inviter's name, the role and the join link. Invitations expire after 7 days.

### 4.4 Published pages ("Sites" and shared Studio pages)

- **Artifact sites.** When you are signed in and the assistant creates or edits an HTML, SVG or CSV artifact, the App publishes it to `sites.starfishsolutions.ai`. **By default only people you invite can open it.** If you make it public, anyone with the link can see it.
- **Studio shares.** If you share a Studio presentation or website, we store a copy (with scripts removed) and publish it at a link. Anyone with the link can view it until you revoke the link.

### 4.5 Feedback and bug reports {#4-5-feedback-and-bug-reports}

There are no automatic crash reports. Only when you choose to send feedback do we receive your name, the type of feedback, your description, the App version, an optional screenshot and, for a chat report, either an AI summary of the chat or the full chat transcript with diagnostic details. The App tries to remove passwords, tokens and API keys from the text first. Feedback is stored with the report and copied into our internal issue tracker (**Notion**). Do not send a full transcript if it contains information you do not want our team to read.

### 4.6 Billing

Subscriptions are paid through **Stripe**. Stripe collects your payment details directly; we do not see or store full card numbers. We receive and keep your name, billing email, billing address and country (for tax), plan, seat count, payment status and invoices.

### 4.7 What we do not collect

- No third-party analytics, advertising, tracking or crash-reporting tools are built into the App.
- We do not sell or rent personal information, and we do not share it for cross-context behavioural advertising.
- We do not use your content or data from connected apps to train AI models.

### 4.8 App updates

The App checks **GitHub Releases** for updates. Like any web request, this reveals your IP address, App version and operating system to GitHub.

## 5. AI requests: Vercel AI Gateway and model providers {#5-ai-requests-vercel-ai-gateway-and-model-providers}

You use AI in Starfish with your own **Vercel AI Gateway API key** (see [Your AI key](/getting-started/ai-key-and-model-levels)):

- Every AI request goes **from your Mac to Vercel AI Gateway**, signed with **your** key, and Vercel passes it to the model provider. Starfish's servers are not in the middle.
- **What is sent:** your message, the chat history the model needs, files, images or text you attach or that the assistant reads or fetches, results from connected apps (including Google data the assistant retrieved for your request), your saved memories and preferences when relevant, and instructions Starfish adds. The App also makes smaller AI calls for you, for example to name chats, summarise long chats, transcribe meetings, generate images and video, and search the web.
- **Retention and training by Vercel and the provider** are set by their terms and your settings with them. **Settings → Models → Private providers only** asks Vercel AI Gateway to use only providers that do not retain your requests and do not train on them. When it is off, the provider's own terms apply. Starfish itself never trains AI models on your data.
- The providers available in the App can include providers that host models outside the United States. Choose the providers you have approved.

## 6. Services we run with our own accounts {#6-services-we-run-with-our-own-accounts}

| Feature | Service | What is sent | How long we keep it |
|---|---|---|---|
| Sign-in to Google and some other connected apps through Starfish's own app registration | Our sign-in helper functions | The one-time sign-in code and resulting tokens pass through our function so the service can issue your tokens. They are returned to your Mac. | Not stored by us |
| QuickBooks change alerts | Our helper function | Notices that an invoice or customer changed (company ID, record ID, type of change) | Until your App collects them |
| Team invites | Resend | See [Section 4.3](#4-3-teams) | See Section 4.3 |
| Starfish Anywhere | Cloudflare | See [Section 9](#9-starfish-anywhere-using-starfish-from-your-phone) | See Section 9 |
| Feedback | Notion | See [Section 4.5](#4-5-feedback-and-bug-reports) | See Section 10 |

## 7. Connected apps and the web, on your behalf {#7-connected-apps-and-the-web-on-your-behalf}

When you connect an app, Starfish uses **your** account with that service to read and, if you allow it, change things there. The data goes directly from your Mac to that service, except for the sign-in steps in Section 6. Each service's own terms and privacy policy apply. What a connected app returns (for example an email or a report) becomes part of your chat, is sent to your AI model as needed, and is synced with the chat when cloud sync is on.

## Google user data {#google-user-data}

This section explains how Starfish accesses, uses, stores and shares data from your Google account. It applies when you choose **Continue with Google** or connect a Google service in the **Marketplace**.

### What Starfish accesses

You choose which Google services to connect, and for Gmail, Drive, Calendar and Chat whether access is read-only or read-and-write. Sending email is a separate choice. Starfish requests only the scopes for the services you pick:

| Google service | Scopes Starfish can request | What Starfish uses it for |
|---|---|---|
| Sign-in and account identity | `openid`, `userinfo.email`, `userinfo.profile` | Sign you in and show which Google account is connected |
| Gmail | `gmail.readonly`, or `gmail.modify`; `gmail.send` only if you allow sending | Search and read email, manage labels, prepare messages, and send email when you ask |
| Google Calendar | `calendar.readonly` or `calendar` | Read your events (including to show meeting reminders), and create or change events when you ask |
| Google Drive, Docs, Sheets, Slides, Forms | `drive.readonly`, `documents.readonly`, `spreadsheets.readonly`, `presentations.readonly`, `forms.responses.readonly`, or `drive`, `documents`, `spreadsheets`, `presentations` | Find, read and summarise files and form responses, and create, edit, share or move files when you ask |
| Google Chat | `chat.messages.readonly`, `chat.spaces.readonly`, `chat.memberships.readonly`, or `chat.messages`, `chat.spaces`, `chat.memberships` | Read spaces and messages, and send or manage messages and members when you ask |
| Google Analytics | `analytics.readonly`, `analytics.edit` | Run reports and change property configuration when you ask |
| Google Tag Manager | `tagmanager.readonly`, `tagmanager.edit.containers`, `tagmanager.manage.accounts`, `tagmanager.publish` | Read and change tags, triggers and containers, and publish when you ask |
| Google Search Console | `webmasters` | Read search performance, inspect URLs and manage sitemaps |
| Google Ads | `adwords` | Read reports and change campaigns when you ask |

All scope names start with `https://www.googleapis.com/auth/` except `openid`.

### How Starfish uses it

Starfish uses Google user data only to provide the features you use in the App: to answer your requests, show you your own data, and take the actions you ask for, within the approval settings you choose. We do not use Google user data for advertising, we do not sell it, and we do not use it to determine credit-worthiness or for lending.

### Where it is stored

- **Google tokens** are stored on your Mac, readable only by your macOS user account. Google client credentials you enter yourself are encrypted with your Mac's Keychain. Tokens are never synced to our servers. When you connect through Starfish's own Google app registration, the sign-in code exchange and token refresh pass through our sign-in helper function, which does not store them.
- **Google content** that the assistant retrieves for a request (for example an email, an event or a file's text) is saved in that chat on your Mac. Files you open from Drive may be kept in a temporary cache on your Mac.
- If you turn on **cloud sync**, your chats, including Google content in them, are synced to our servers as described in [Section 4.2](#4-2-cloud-sync).

### Who it is shared with

- **Your AI model provider.** To answer a request, Google content the assistant retrieved is sent with your request to Vercel AI Gateway and the model provider you use, on your own key (see [Section 5](#5-ai-requests-vercel-ai-gateway-and-model-providers)). This happens only to provide the feature you asked for.
- **Our cloud service providers**, only if you turn on cloud sync, to store and sync your chats for you.
- **People you choose.** For example, when you ask Starfish to send an email or share a file, or when you share a workspace with your Team.
- Otherwise only for security purposes, to comply with the law, or as part of a merger, acquisition or sale of assets after obtaining your explicit prior consent.

Our staff do not read your Google user data unless you ask us to (for example in a support request), it is needed for security (for example investigating abuse), or the law requires it.

### AI training

Starfish does not use Google user data to create, train or improve any AI or machine-learning model, and does not let anyone else do so on our behalf. Google content sent to your AI model provider to answer your request is handled under that provider's terms and your settings; turn on **Private providers only** to require providers that do not retain or train on your requests.

### How to revoke access and delete your Google data

- **Disconnect in Starfish:** **Disconnect** in the **Marketplace** deletes the stored Google tokens and credentials from your Mac.
- **Revoke at Google:** remove Starfish at [myaccount.google.com/permissions](https://myaccount.google.com/permissions) at any time.
- **Delete Google content in Starfish:** delete the chats that contain it on your Mac. To erase synced copies, use **Settings → Sync → Delete my cloud data** or delete your account (see [Deleting your data](#deleting-your-data)), or email [communications@starfishadage.com](mailto:communications@starfishadage.com).

### Limited Use

The use of information received from Google Workspace scopes will adhere to the [Google User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

Starfish's use and transfer to any other app of information received from Google APIs, including Google Analytics, Tag Manager, Search Console and Google Ads, will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## 8. Teams: what teammates can see {#8-teams-what-teammates-can-see}

- **Shared:** only workspaces you choose to share with the Team, with their folders and files, and published sites you share. The person who shared a workspace, or the Team owner or an admin, chooses "view" or "edit" access.
- **Not shared:** your chats, agents, agent rooms, memories, meetings, automations and personal settings.
- **Visible to teammates:** your display name, email address and avatar link.
- **Owner and admins** can invite and remove members, change shared-workspace access and delete content in shared workspaces. Only the owner can remove an admin or delete the Team.
- **When a member leaves or is removed,** workspaces they shared to the Team pass to the Team owner so the Team keeps its work.

## 9. Starfish Anywhere: using Starfish from your phone {#9-starfish-anywhere-using-starfish-from-your-phone}

Starfish Anywhere is **off by default**. If you turn it on in **Settings → Remote**:

- Your Mac gets a private per-device address, and your phone's traffic to your Mac passes through **Cloudflare**. Cloudflare decrypts and re-encrypts this traffic in transit, so it is **not end-to-end encrypted** between your phone and your Mac.
- Setup, keys, sync, connected-app sign-in and code publishing are blocked from the phone.
- Phones pair with a one-time code. Each paired phone gets its own secret key.
- We store your user ID, an install ID, your Mac's name and when it was last seen. Macs not seen for 60 days are disconnected.
- Notifications to your phone include chat titles and are delivered through your phone browser's push service.

## 10. How long we keep data

| Data | How long |
|---|---|
| Data on your Mac | Until you delete it (meeting audio: up to 180 days) |
| Account details | While your account is open, then as described in [Deleting your data](#deleting-your-data) |
| Synced workspace content | While your account is open. Deleting an item in the App removes it from view on all your Macs; it stays on our servers until you delete your cloud data or your account, or ask us to erase it. |
| Backups | Up to 14 days |
| Server logs | Up to 1 month |
| Feedback reports | As long as needed to resolve the issue |
| Billing records | As long as tax and accounting law requires |

### Deleting your data {#deleting-your-data}

You can do this yourself in the App while you are signed in:

- **Delete only your cloud data:** **Settings → Sync → Delete my cloud data** turns cloud sync off and erases the synced copy of your workspace from our servers. Your account stays open.
- **Delete your whole account:** **Settings → General → Account → Delete Starfish account**. If you own a Team that has other members, hand it to a teammate or delete it first.

Deleting your account erases your Starfish sign-in, everything cloud sync stored for you, pages you published, your Team memberships, shared Studio links and your Starfish Anywhere records. It does not delete data on your Macs, work you added to other people's Teams, feedback reports (stored without a link to your account) or billing records the law requires us to keep.

If you can no longer sign in, email [communications@starfishadage.com](mailto:communications@starfishadage.com) from your account's email address. We will verify your request and act on it within the time the law requires.

Erased data can survive in backups for up to 14 days. Data held by Vercel, AI providers or connected apps must be deleted with those services.

### Getting a copy of your data

While you can sign in, use **Settings → Account → Download my cloud data** to get a zip file of your synced data. If you can no longer sign in, email [communications@starfishadage.com](mailto:communications@starfishadage.com) from your account's email address.

## 11. How we protect data

- Encryption in transit and at rest for our services, with least-privilege access.
- Every cloud request needs a valid sign-in token; sessions can be revoked.
- Access to your synced data is limited to your account and, for shared workspaces, your Team.
- Your AI key and Google client credentials are encrypted with your Mac's Keychain.
- The AI assistant is blocked from credential and system locations.
- Approval settings let you require your OK before the assistant changes or deletes anything in your connected apps.

No system is perfectly secure. Keep your Mac, your macOS user account, your AI key and your connected accounts secure, and turn on FileVault. If we learn of a security breach affecting your personal information, we will notify you and the authorities as the law requires.

## 12. Children

Starfish is for businesses and adults. You must be at least 18 to use it. We do not knowingly collect personal information from anyone under 18. If you believe a child has given us personal information, contact us and we will delete it.

## 13. International transfers

We are based in the United States, and our synced data is stored in the United States. Our service providers may process data in other countries. If you use Starfish from outside the United States, your data is transferred to the United States, where data protection laws may differ from yours. Where the law requires a transfer mechanism, we will rely on one. Vercel, AI providers and connected apps may process your data in other countries under their own terms.

## 14. Agencies and client data (data processing terms) {#14-agencies-and-client-data-data-processing-terms}

For client data you put into Starfish:

- **You are the controller** (or act for your client), and **we are your processor or service provider.** We process client data only to provide Starfish to you and on your instructions.
- We do not sell client data, use it for our own purposes, or combine it with other customers' data.
- Our staff who can access it are bound by confidentiality.
- We use the subprocessors in [Section 15](#15-subprocessors) and will update that list before adding a new one.
- We will help you respond to your clients' and data subjects' requests and notify you without undue delay of a breach affecting client data.
- **You are responsible** for having the right to give us your clients' data, telling your clients and meeting participants that you use Starfish, and getting any consents needed.

If you need a Data Processing Agreement, contact us at [communications@starfishadage.com](mailto:communications@starfishadage.com).

**Recording meetings:** laws in many places require all participants to agree before a call is recorded or transcribed. You are responsible for telling participants and getting their consent. When you start taking notes, Starfish reminds you to tell the people in the call.

## 15. Subprocessors {#15-subprocessors}

Services that store or process data **for Starfish**:

| Subprocessor | Purpose |
|---|---|
| Amazon Web Services | Sync database, file storage, Teams, published sites |
| Supabase | Sign-in, App settings, sign-in helper functions, Studio shares, feedback |
| Cloudflare | Starfish Anywhere |
| Resend | Team invite emails |
| Notion | Feedback tracking |
| Stripe | Subscription billing |
| GitHub | App update downloads |

Services **you** choose and contract with directly (not our subprocessors): Vercel and the AI model providers, and every connected app.

## 16. This website and cookies

- This documentation site does not use advertising or analytics cookies, and its search runs in your browser.
- The website host receives standard request information such as your IP address and browser type to serve pages and protect against abuse.
- The App does not use advertising or tracking cookies. Its built-in browser stores cookies for websites you visit, on your Mac.

## 17. Your rights and choices

Depending on where you live, you may have the right to know what personal information we hold and get a copy, correct it, delete it, object to or restrict some uses, move it to another service, not be discriminated against for using these rights, and complain to your data protection authority.

To use any of these rights, email [communications@starfishadage.com](mailto:communications@starfishadage.com). We will verify your identity and answer within the time the law requires. If you are an agency's client, contact the agency first; we will help them answer you.

**Your choices in the App:** keep cloud sync off; keep Starfish Anywhere off; choose **Ask for approval** so the assistant asks before any change in your connected apps; disconnect any connected app and revoke Starfish's access in that service's settings; turn on **Private providers only**; change who can open a published site, or delete it.

## 18. Changes to this policy

We will update this page when the App or our practices change, and change the "Last updated" date. If a change is significant, we will tell you in the App or by email before it takes effect.

## 19. Contact

Starfish Ad Age LLC
140 E Tyler St, Suite 200, Longview, TX 75601, USA
Email: [communications@starfishadage.com](mailto:communications@starfishadage.com)

See also the [Terms of Service](/legal/terms).
