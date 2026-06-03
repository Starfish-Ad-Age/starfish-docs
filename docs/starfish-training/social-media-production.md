---
outline: deep
---

# Track 2 · Social Media Production

> For the creatives who turn an approved idea into a finished post. No more building every draft by hand.

## What changes for you

Right now, once a post idea is approved, you open **Canva** or **Figma** and build it from scratch — find a layout, place the text, drop in the logo, export. Every variation is more manual work.

With Starfish, you **describe the post** (or hand it a rough sketch), give it the client's **reference images and logo**, and it **generates a finished-looking draft in seconds**. You refine it by chatting — "warmer background," "move the text up" — and export when it's right.

| The old way (Canva/Figma by hand) | The Starfish way |
|-----------------------------------|------------------|
| Build the layout from a blank canvas | Describe it (or upload a rough sketch) |
| Manually place text and graphics | It generates the whole composition |
| Re-do it for each variation | "Give me 3 variations" |
| Hunt for the right look | Nudge it in plain words |

::: warning Be honest about what AI is great at — and what it isn't
Image generation is **brilliant for the creative and the look**: backgrounds, mood, composition, scenes, styling. It's **unreliable for exact text and exact logos** — it may misspell words or redraw your logo slightly wrong. So the workflow is: **generate the creative in Starfish → drop the *real* logo and final copy on top in Canva** for the last 10%. You'll still save most of the time.
:::

## Two ways to generate

- **Image Gen studio** — click **Image Gen** in the left sidebar. Best for focused post-making with reference images. *We'll use this for the walkthroughs.*
- **In chat** — turn on the **Media → Image** toggle in the chat box. Best when image-making is part of a bigger conversation. ([Details](/media/image-generation).)

### Which model?

In the studio there's a model dropdown. Quick guide:

| Model | Use it for |
|-------|-----------|
| **Nano Banana 2** *(default)* | Most social posts — fast, follows instructions well |
| **Nano Banana** | Quick rough explorations (cheaper) |
| **Seedream 4.5** | Photorealistic product shots, fine detail |
| **GPT Image 2** | When you need clearer text or illustrative/poster styles |

Start with **Nano Banana 2** unless you have a reason not to.

---

## Walkthrough 1 · Rough idea → first draft

**Goal:** get a usable first draft from a written idea.

1. Click **Image Gen** in the sidebar.
2. Type a clear description of the approved post. The more specific, the better:

   ```
   A cozy Instagram post for a coffee brand. Top-down flat lay of a latte
   with latte art on a rustic wooden table, warm morning light, a few coffee
   beans scattered, muted earthy tones. Leave clean empty space at the top
   for a headline. Square format.
   ```

3. Make sure **Nano Banana 2** is selected. Click **Generate**.

**Tip:** mention the **format** ("square", "vertical story 9:16", "landscape") and where to **leave space for text** so the layout fits your copy later.

---

## Walkthrough 2 · Match a reference / moodboard

**Goal:** get the *style* you (or the client) already have in mind.

You can drag in **up to 4 reference images** — a moodboard, a past post you liked, a brand style sample.

1. In the Image Gen studio, **drag a reference image** into the prompt area.
2. Then describe what to make *in that style*:

   ```
   Use the attached image as the style reference. Same warm, film-grain look
   and color palette. Make a new flat-lay of an iced coffee with fresh mint.
   ```

3. Click **Generate**.

**This is the big unlock:** instead of describing a vibe in words, you *show* it. Great for staying on-brand across a whole campaign.

---

## Walkthrough 3 · Bring in the client's logo

**Goal:** get the logo into the composition as a guide — knowing you'll finalize it in Canva.

1. Drag the **client's logo file** into the prompt as a reference.
2. Ask it to place the brand in the scene:

   ```
   Use the attached logo. Create a branded promo image with this logo subtly
   placed bottom-right, on the warm coffee flat-lay style from before.
   ```

::: tip Final logo + copy go on in Canva
Use the generated image for **placement and composition**. For the published post, drop the **real logo file** and the **final headline text** on top in Canva so they're crisp and correct. Best of both: fast creative from Starfish, perfect brand assets from Canva.
:::

---

## Walkthrough 4 · Refine by chatting

**Goal:** dial it in without starting over.

The studio remembers your previous image, so you can refine step by step:

```
Make the background a little warmer and brighter.
```
```
Move the empty space for the headline to the bottom third instead of the top.
```
```
Give me 3 variations of this so I can pick one.
```

---

## Walkthrough 5 · Save it + write the caption

**Goal:** get the image out and get a caption to go with it.

**Save the image:**

- Click **Save to folder** on the session to pick a folder on your computer. From then on, every image in that session auto-saves there.
- Generated images also collect in the **Media** library (the **Designs** area) so you can find them later.

**Write the caption** — hover the image and click **Continue in chat**. This opens a normal chat with the image attached, so the assistant can *see* it:

```
Write 3 Instagram caption options for this image for a local coffee brand.
Friendly tone, one short line each, include 3 relevant hashtags.
```

::: tip Caption not landing? Try another model.
Captions are pure writing — exactly where the different AIs have different voices. Run the same caption prompt on **Claude**, then **GPT**, then **Gemini** (switch the **model dropdown** at the bottom of the chat) and keep the best lines from each. No copy-pasting between three apps.
:::

---

## Try it yourself

Take a **real approved brief** you'd normally build in Canva and run it through:

- [ ] Generate a first draft from the written idea (Nano Banana 2)
- [ ] Re-generate it using a moodboard/reference image for the style
- [ ] Bring the client logo in as a reference
- [ ] Refine it down (warmer, reposition, etc.) and ask for **3 variations**
- [ ] Pick one, **Save to folder**, and **Continue in chat** to write 3 captions
- [ ] Finish the chosen post in Canva: real logo + final copy on top

## Tips & gotchas

- **Describe the composition, not just the subject.** Format, lighting, mood, color palette, and *where to leave space for text* all help.
- **Show, don't tell.** A reference image beats paragraphs of description.
- **Don't fight the text/logo.** Let AI do the creative; finalize exact words and logos in Canva.
- **Generation costs money** (it's a real per-image cost), so explore with the cheaper model and switch to the better one for finals.
- **Lost an image?** Check the **Designs / Media** library — everything you generate lands there.

**See also:** [Image Generation](/media/image-generation) · [Video Generation](/media/video-generation) · [Canva](/integrations/canva)
