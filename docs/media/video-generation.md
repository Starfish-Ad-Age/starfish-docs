---
outline: deep
---

# Video Generation

Ask for a short clip in a chat and Starfish makes it right there in the conversation. Every clip is also kept on the [Media page](/media/overview) under **Videos**.

## Turn it on

- **Chat mode:** open the **+** menu in the composer, choose the **Create** tab, then **Create a video**.
- **Developer mode:** turn on **Video generation** in the **Video** menu of the composer.
- **Either mode:** type **/video** to make the next message create a video.

Leave the engine on **Auto**, or open the menu to pick one. Videos are slower and cost more than images, so nothing is made until you turn this on.

## Engines

**Auto** picks the best engine for each request and starts on Kling 2.6. You can also choose Grok Imagine 1.5, Veo 3.1, Veo 3.1 Lite, Kling v3, MiniMax H3, Seedance 2, Wan 3.0 Video or Flux 3.

The picker marks each engine **$**, **$$** or **$$$**, from cheapest to most expensive, and says whether an engine makes sound.

::: warning Preview engines
Veo 3.1 Lite is a preview engine. Auto never picks it. If you choose it yourself, Starfish warns you: do not use it with personal or client data, because Vercel's protections do not apply to preview models.
:::

## Length and size

A video made from a chat is **720p** and about **10 seconds** long unless you ask for something else. Ask for a longer clip or a higher resolution in your message when you need one. Veo makes 8-second clips.

Duration, aspect ratio, resolution, first and last frames, and reference images or videos depend on the engine. Starfish only uses options the engine supports.

## Before an expensive video

Before Starfish uses an expensive engine, or one with no published price, it asks first. The card reads, for example:

> Grok Imagine 1.5 is an expensive video engine ($$). Make a 10-second 720p clip?

Click **Make it** to go ahead or **Cancel** to make nothing. While the clip is made, the chat says what it is making, such as "Making a 10-second 720p Kling 2.6 clip."

## Reference media

Starfish can base a new clip on pictures or videos already in the chat:

- A first frame, and a last frame on engines that support it.
- Reference images and reference videos. How many you can use depends on the engine.
- References can't be combined with a first or last frame.

## How it shows up

While the clip renders, the reply shows a mosaic that turns into the video in the same place. If the job runs long, you can switch away and come back. The finished clip plays in the chat.

## Steadier video

Ask Starfish to stabilise a shaky video you uploaded, for example "Stabilise this clip". This works on your Mac.

## Aspect ratio guide

| Aspect Ratio | Format | Common Uses |
|--------------|--------|-------------|
| 16:9 | Landscape | YouTube, presentations, websites |
| 9:16 | Portrait | Instagram Stories, TikTok, YouTube Shorts |
| 1:1 | Square | Instagram feed, social ads |

## Automations

An automation can make videos on its own when you allow it in setup. See [Automations](/automations/overview#paid-images-and-videos).
