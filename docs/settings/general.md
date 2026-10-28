---
outline: deep
---

# General Settings

Configure Starfish to match your workflow. Open **Settings** from the sidebar footer.

The **General** category covers voice, the AI Gateway key, updates, your account, and troubleshooting. Other areas have their own categories in the settings sidebar -- **Personalization**, **Import from other AI**, **Appearance**, **Voice & shortcuts**, **Models**, **Workspace**, **Sync**, **Team**, **Automations** (Developer mode), **Meetings**, **Local Access**, **Browser Use**, **Storage**, **Remote** and **What's new**.

## Voice

Settings for voice typing and read-aloud:

- **Speech-to-text model** -- the engine behind the composer mic. Cloud models run through the AI Gateway and send audio off-device: GPT-4o Transcribe (best accuracy, the default), GPT-4o Mini Transcribe (fastest), Whisper 1, and Fish Audio Transcribe 1. The optional **On-device (Parakeet)** engine keeps audio on your Mac and needs a one-time ~460 MB download.
- **Microphone** -- choose the input device used for voice typing.
- **Read-aloud voice** -- pick the speech model, its voice, and the speed used when you play an assistant reply aloud. The speech model starts on **OpenAI TTS 1**. A **Preview** button lets you hear it first.
- **Meeting transcription** -- live captions and the final transcript with speaker labels run on your Vercel AI Gateway key. No download or extra provider key is required. The **Test Voice** button records a short clip and confirms transcription works.

The voice assistant and Ask about this screen have their own category, **Voice & shortcuts**. See [Voice assistant](/voice/voice-assistant) and [Ask about this screen](/voice/ask-about-this-screen).

## AI Gateway

Starfish routes LLM requests through the Vercel AI Gateway. Your AI Gateway API key powers chat, image generation, and video generation; it is collected once during onboarding.

To update your key:

1. Go to **Settings → General**
2. Click **Replace key** and paste the new key (starts with `vck_…` or `sk_…`)
3. Save

The key is stored on your local machine (encrypted on this device) and is never sent to Starfish servers. Get a key at [vercel.com/ai-gateway](https://vercel.com/ai-gateway).

## Vercel plan

Starfish asks which Vercel plan your key belongs to: **Hobby**, **Pro** or **Enterprise**. The plan decides what Vercel may do with your data:

- Hobby is for non-commercial use only.
- On Hobby and Pro, Vercel may use your content for training.
- Use Enterprise for client, confidential or regulated data.

Pick your plan and tick **I confirm this is my Vercel plan and I have read what it means for my data**. New users answer this in setup. If you have not answered yet, a small banner shows until you do; click **Answer in Settings**. To change it later, click **Edit** in the **Vercel plan** section.

## Updates

Shows the installed Starfish version and lets you **Check for Updates**. When a version is available, **Download** it and then click **Restart Now** to install.

**Open-source licenses** lists the third-party software in Starfish. Click **View**. See also [Open-source licences](/legal/open-source).

## Account

Shows that your API key is stored encrypted on this device, and provides **Sign out**.

When you are signed in on your Mac, two more rows appear:

- **Download my cloud data** -- downloads a zip of everything Starfish stores online for you: one JSON file per type of synced data, plus your synced files. See [Getting a copy of your data](/legal/privacy#getting-a-copy-of-your-data).
- **Delete Starfish account** -- deletes your account and everything Starfish stores for it online. Your work on this Mac stays, and you are signed out. Click **Sign in and delete my account**: you sign in again to confirm, and if you own a team with other people in it, hand it to a teammate in **Settings → Team**, or delete it, first. This cannot be undone. See [Deleting your data](/legal/privacy#deleting-your-data).

## Team and Sync

**Settings → Team** is where you create or join a team and manage who is in it. See [Teams](/workspace/teams). **Settings → Sync** shows the account your workspaces sync with. If you are signed out, both show a **Sign in** button, and you come straight back to Settings afterwards.

## Troubleshooting

**Reset app** clears cached data and relaunches Starfish. You stay signed in and keep your connected apps, chats, meetings, and agents.

## Chat wallpaper

Give your chats a backdrop in **Settings → Appearance → Wallpaper**. It shows behind a new chat.

- Pick one of **thirteen artworks**.
- Click **Upload your own** to use your own picture (PNG, JPEG, WebP or AVIF, under 5 MB).
- Pick **None** for a plain background.
- Turn the gentle **Line effect** on or off.

## Where other settings live

A few settings people expect under General now have their own categories:

- **The models shown in the chat picker**, and (Developer mode) the per-task model preferences Auto uses -- **Settings → Models**. The **Data privacy** switches live there too. See [Models & Providers](/chat/models#data-privacy).
- **Using Starfish from your phone** -- **Settings → Remote**. See [Starfish on your phone](/phone/overview).
- **Spelling & grammar** (check-as-you-type, categories, dialect) -- **Settings → Appearance**.
- **Auto-open preview** for generated files -- **Settings → Appearance → Designs**.
- **Show code changes** in Developer mode -- **Settings → Appearance → Developer**.
- **Auto-rename uploaded files** -- **Settings → Workspace**.
- **Connected services** -- the **Marketplace** in the sidebar, or per chat from the composer. See [Integrations](/integrations/overview).
- **Agents and knowledge packs** -- the **Agents** page. See [Knowledge Packs](/agents/knowledge-packs).
- **What Starfish remembers about you** -- **Settings → Personalization**. See [Memory](/settings/memory).
