---
outline: deep
---

# Video Editor

Video Editor is Starfish's in-app video editor (built on the **Clipify** engine; earlier docs called it Starcut). Pick a video on your disk, trim it, reframe for vertical platforms, drop in captions, mix a background music track, and render — all without leaving Starfish.

Open it at the **Video Editor** page (route `/clipify`).

## Why use it

Video Editor is built for the "I shot a podcast / interview / screen recording, now I need a short-form vertical cut" loop. It handles the parts that take the longest in a normal editor — finding the best moments, reframing to vertical, and following the subject through the shot — using AI.

Nothing leaves your machine. All processing runs locally via a bundled ffmpeg binary; AI calls go through the Vercel AI Gateway.

## Workflow

1. **Open a video** — click the picker; uses the native macOS dialog.
2. **Trim** — set the start and end of the clip. Trim uses `-c copy`, and every analysis pass runs on the trimmed clip rather than the whole source.
3. **Pick an output aspect** — 9:16 (TikTok / Reels / Shorts), 16:9 (YouTube / presentations), 1:1 (Instagram feed).
4. **Pick a reframe mode** *(shown when the output is narrower than the source)* — Centre crop, Smart pan (AI), or Face-pan.
5. **Captions** *(optional)* — Off, Opus, Karaoke, or Minimal.
6. **Soundtrack** *(optional)* — pick a background track from the library or upload your own.
7. **Add to timeline**, then **Render** from the bar under the timeline. The Exports tab shows what you've rendered.

The top bar also has a **prompt bar**: describe an edit in plain English, review the changes it proposes, and apply them to the cuts on the timeline.

## Right-rail tabs

The Edit tab holds trim, aspect, reframe, captions, and soundtrack. Two more tabs sit alongside it:

- **Moments** — scan the transcript for clip-worthy ranges (see [Find the best moments](#find-the-best-moments)).
- **Exports** — preview each rendered clip with its dimensions, duration, and caption word count.

## Reframe Modes

### Centre crop

Plain geometric centre crop — fastest path, no analysis. Good when the subject is already centred in the source.

You can also click **Analyze with AI** in the panel that appears under the mode buttons. The AI picks a single best static centre point (e.g. centres on the speaker even if they're slightly off-frame in the source) and the render uses that instead of the geometric middle.

### Smart pan (AI)

The headline mode. An AI model samples 4–24 frames from your trim range, plus an audio transcript (Whisper, word-level), and returns a sequence of pan keyframes: at each timestamp, the AI picks where the subject is in the frame, how confident it is, and how zoomed-in to be.

Smart pan handles:

- **Subject following** — pans horizontally and vertically to keep whoever is speaking / acting / interesting in shot.
- **Dynamic zoom** — AI varies the crop width over time. 1.0 = tight strip (default); up to 3.0 = wider view for group shots / b-roll; down to 0.5 = closer than default for close-ups.
- **Speaker awareness** — when a transcript is available, the model uses it to identify who's talking at each moment so the visual frame matches the audio.

Click **Analyze with AI** in the Smart pan panel to kick off analysis. You'll see a chip per keyframe (timestamp + subject label + zoom level when it differs from 1.0). Re-analyze any time.

#### Motion style

Pick how the crop moves between AI keyframes:

| Style | Behaviour | Best for |
|-------|-----------|----------|
| **Cut** | Hard cuts at each keyframe boundary | Social-media energy, matches the look of fast-cut reels |
| **Smooth pan** | Continuous glide across the whole interval | Cinematic, documentary feel |
| **Fast pan** | Quick swoop at each keyframe, then hold | Subject visible most of the time; punchy without being abrupt |

### Face-pan

Hard cuts between two manually-marked face positions. You drag two rectangles onto a sample frame; the renderer measures motion energy in each ROI and cuts to whichever face is talking. Works great for two-person interviews where you want the speaker on-screen.

## Captions

Caption styles:

- **Off** — no captions burned in.
- **Opus** — bold Arial Black, 3-word chunks with a yellow active word.
- **Karaoke** — 4-word chunks with a green highlight on the active word.
- **Minimal** — clean Helvetica, 6-word chunks, no highlight.

Captions use OpenAI's `whisper-1` through the AI Gateway for word-level timestamps. You'll see a spell-check modal before render so you can fix any mis-hearings; your edits are baked into the burn-in. Adds 5–20s to the render.

## Soundtrack

Optional background music mix. Two sources:

- **Library** — curated [free music tracks](/media/soundtrack) (Creative Commons) with AI-readable tags (mood, genre, energy, BPM, "useful for").
- **Your uploads** — drag in any `.mp3` / `.wav` / `.ogg` / `.flac` / `.aac` / `.m4a` (50 MB cap). Lives in your local userData directory; never uploaded anywhere.

Controls in the Soundtrack panel:

- **Volume** slider — the music level relative to the source audio. Default 25%.
- **Duck under voice** toggle — when on, ffmpeg's sidechain compressor lowers the music whenever the source audio (typically speech) is present. Default on.
- Fade-in / fade-out are automatic (0.5s in, 1.0s out).

See the [Soundtrack](/media/soundtrack) page for the full music library reference.

## Find the best moments

On the **Moments** tab, the editor transcribes the source and proposes 3–5 short clip ranges with titles and reasons. Sources under 20 seconds are too short to scan.

Vibe presets bias the picker: All, Funny, Insightful, Quotable, or Emotional.

Target-duration presets flag clips that run long relative to a platform-friendly window:

- **Free** — no cap (the model picks the range)
- **60s** — TikTok / Reels / Shorts
- **3 min** — YouTube Shorts max
- **10 min** — TikTok in-app

Click **Suggest clips** (or **Re-scan**) to run the scan. Select one or more candidates, then **Add selected to timeline** — they become cuts you render together from the bar at the bottom.

## Output

Rendered clips land in:

- macOS: `~/Movies/Starfish Clips/`
- Others: `~/Videos/Starfish Clips/`

Files are named `<source-stem>_YYYY-MM-DDTHH-MM-SS.mp4`. Each render appears in the **Exports** tab with its dimensions, duration, and caption word count; a **Clear list** button empties the list when you're done.

## Under the hood

- Bundled ffmpeg via `ffmpeg-static` (`Resources/ffmpeg-static/ffmpeg` in production builds). No `brew install ffmpeg` required.
- Trim uses `-c copy` (no re-encode, instant) before any analysis or encoding pass.
- Smart pan uses ffmpeg's `zoompan` filter so crop width can vary per frame.
- Captions are baked into the same render pass as crop+scale (no second encode).
- Soundtrack is mixed in the same pass via `-filter_complex` with `sidechaincompress` for ducking.
