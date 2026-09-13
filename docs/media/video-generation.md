---
outline: deep
---

# Video Generation

Create short video clips (seconds, not minutes) from text descriptions or starting images within Starfish. Video generation runs in chat — ask for a clip and it renders inline — and every clip is kept in the **Media** library alongside your other work.

## Available Engines

| Engine | Backend | Notes |
|--------|---------|-------|
| **Kling 2.6** | Kling `kling-v2.6` (t2v / i2v) | Best value for everyday clips. 5s or 10s. Accepts a first frame and a last frame. |
| **Kling v3** | Kling `kling-v3.0` (t2v / i2v) | Higher-end control with both first and last frames. 5s or 10s. |
| **Veo 3** | Google `veo-3.0-generate-001` | Cinematic motion and prompt following, with audio. 4s, 6s, or 8s. First frame optional. |
| **Grok Imagine 1.5** | xAI `grok-imagine-video-1.5` | Animates a still image with synchronized sound. **Requires a starting image.** Up to 15s; 480p / 720p / 1080p. |
| **MiniMax H3** | MiniMax `minimax-h3` | Multimodal 2K video with sound, up to 15s. The only engine that accepts reference images and reference videos. |
| **Seedance 2** | ByteDance `seedance-2.0` | Stylized movement and social-first visuals. 5s or 10s. |

All engines route through the Vercel AI Gateway. A "premium" badge in the picker flags engines with a higher per-clip cost, and the same picker calls out whether an engine generates sound.

## Video Settings

Duration, aspect ratio, and resolution are engine-dependent:

- **Duration** — fixed choices on most engines (Kling 5s/10s, Veo 4s/6s/8s, Seedance 5s/10s); free ranges on Grok Imagine (1–15s) and MiniMax H3 (5–15s).
- **Aspect ratio** — 9:16, 16:9, and 1:1 on the Kling and Seedance engines, and 16:9 / 9:16 on Veo 3. Grok Imagine and MiniMax H3 support the widest range (also 4:3, 3:4, 3:2, and 2:3).
- **Resolution** — Grok Imagine and MiniMax H3 expose 480p / 720p / 1080p. The other engines have no resolution input.
- **First frame** *(optional)* — upload or paste an image to use as the first frame. **Required** by Grok Imagine 1.5.
- **Last frame** *(optional)* — Kling engines only; greyed out everywhere else.
- **Reference images / reference videos** — MiniMax H3 only, and only through the in-chat tool (see below).

## Generating in Chat

The agent can generate clips inline. This is useful when the clip is part of a bigger task.

### Enabling it

Open the **+** menu in the chat composer (the same menu you use to add files or apps) and choose **Create a video**. The composer switches into video-creation mode for that message; leave the engine on **Automatic** or open the submenu to pick a specific one. Videos are slower and pricier than images, so nothing runs without this.

Once armed, the agent has access to a `generate_video` tool it can invoke when your message asks for a clip.

### Reference media

The in-chat tool can base a new clip on media already in the conversation:

- **Reference images** — up to 9, and **reference videos** — up to 3 (MP4, 2–15 seconds, 50 MB each).
- Only **MiniMax H3** accepts references. If you ask for one while a different engine is selected, Starfish automatically runs that generation on MiniMax H3 rather than asking you to switch engines.
- References can't be combined with a starting or ending frame.

### How it shows up

While the clip renders, the reply shows a **grid-reveal placeholder** — a mosaic that resolves into the video in the same slot. If the job runs long, the frame shows a note that it can take a few minutes and that you can switch away and come back. The finished clip then plays inline as a `<video>` element.

The bytes are saved as an Artifact (in SQLite), and the chat message references them via `/api/artifacts/<id>` so the conversation timeline doesn't carry multi-MB data URLs in store state.

## Aspect Ratio Guide

| Aspect Ratio | Format | Common Uses |
|--------------|--------|-------------|
| 16:9 | Landscape | YouTube, presentations, websites |
| 9:16 | Portrait | Instagram Stories, TikTok, YouTube Shorts |
| 1:1 | Square | Instagram feed, social ads |

## Use Cases

- **Social media content** — short-form clips for Stories, Reels, TikTok.
- **Product demos** — quick walkthroughs and feature highlights.
- **Ad creatives** — generate video ads for testing and iteration.
- **B-roll** — establishing shots, lifestyle footage, motion backgrounds.

## Discuss a Clip in Chat

On a generated clip, click **Discuss in chat** to open a fresh chat with the clip attached and a starter prompt based on the original. The chat agent can reason about the attached clip (and use `read_video` to watch it), so you can ask for edits, variations, or pair the clip with other work. The raw bytes never enter chat history — chat keeps a compact local video memo.

## After Generation — Video Editor

Generated (or any imported) videos can be opened in the [Video Editor](/media/starcut) for trimming, conversational edits, smart reframing for vertical, captions, background music, and AI-driven pan/zoom.
