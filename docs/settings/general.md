---
outline: deep
---

# General Settings

Configure Starfish to match your workflow. Open **Settings** from the sidebar footer.

The **General** category covers voice, the AI Gateway key, updates, your account, and troubleshooting. Other areas have their own categories in the settings sidebar -- **Models**, **Personalization**, **Appearance**, **Workspace**, **Sync**, **Team**, **Automations**, **Meetings**, **Local Access**, **Browser Use**, **Storage**, and **What's new**.

## Voice

Settings for voice typing and read-aloud:

- **Speech-to-text model** -- the engine behind the composer mic. Cloud models run through the AI Gateway and send audio off-device: GPT-4o Transcribe (best accuracy, the default), GPT-4o Mini Transcribe (fastest), Whisper 1, and Fish Audio Transcribe 1. The optional **On-device (Parakeet)** engine keeps audio on your Mac and needs a one-time ~460 MB download.
- **Microphone** -- choose the input device used for voice typing.
- **Read-aloud voice** -- pick the speech model, its voice, and the speed used when you play an assistant reply aloud. A **Preview** button lets you hear it first.
- **Meeting transcription** -- managed securely by Starfish with AssemblyAI. No download or provider API key is required. The **Test Voice** button records a short clip and confirms transcription works.

## AI Gateway

Starfish routes LLM requests through the Vercel AI Gateway. Your AI Gateway API key powers chat, image generation, and video generation; it is collected once during onboarding.

To update your key:

1. Go to **Settings → General**
2. Click **Replace key** and paste the new key (starts with `vck_…` or `sk_…`)
3. Save

The key is stored on your local machine (encrypted on this device) and is never sent to Starfish servers. Get a key at [vercel.com/ai-gateway](https://vercel.com/ai-gateway).

## Updates

Shows the installed Starfish version and lets you **Check for Updates**. When a version is available, **Download** it and then click **Restart Now** to install.

## Account

Shows that your API key is stored encrypted on this device, and provides **Sign out**.

## Troubleshooting

**Reset app** clears cached data and relaunches Starfish. You stay signed in and keep your connected apps, chats, meetings, and agents.

## Where other settings live

A few settings people expect under General now have their own categories:

- **The models shown in the chat picker**, and (Developer mode) the per-task model preferences Auto uses -- **Settings → Models**.
- **Spelling & grammar** (check-as-you-type, categories, dialect) -- **Settings → Appearance**.
- **Auto-open preview** for generated files -- **Settings → Appearance → Designs**.
- **Show code changes** in Developer mode -- **Settings → Appearance → Developer**.
- **Auto-rename uploaded files** -- **Settings → Workspace**.
- **Connected services** -- the **Marketplace** in the sidebar, or per chat from the composer. See [Integrations](/integrations/overview).
- **Agents and knowledge packs** -- the **Agents** page. See [Knowledge Packs](/agents/knowledge-packs).
- **What Starfish remembers about you** -- **Settings → Personalization**. See [Memory](/settings/memory).
