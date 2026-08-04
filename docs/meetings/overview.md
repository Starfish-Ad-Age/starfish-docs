---
outline: deep
---

# Meetings

::: warning Preview
Recording, transcription and notes are ready for everyday use. **Speaker grouping is still being proven on real recordings** — it works, but treat the voice labels as a helpful draft rather than a guarantee, and expect it to improve.
:::

Starfish can sit in on a call, write the transcript as people speak, and turn it into notes when you stop. Everything runs on your Mac: the speech model is local, and the audio is not sent to a transcription service.

## Recording a meeting

Open **Meetings** in the sidebar and press **Start recording**.

Before it will start you have to confirm that you will tell the other people on the call that you are taking recorded notes. This is deliberate and it blocks recording until you tick it: recording rules differ by country and by US state, and many require everyone's agreement. Complying is your responsibility, not the app's.

Starfish records two things at once:

- **The call** — the audio coming out of your Mac, captured with a system audio tap.
- **Your microphone** — captured separately, so "you said" and "they said" stay apart.

The transcript builds live as people speak. You can leave the Meetings screen and carry on using the rest of the app; the recording keeps running.

## Notes

When you stop the recording, Starfish writes the notes: a short overview, the topics that came up, decisions, open questions, and action items.

If the notes cannot be written the first time, it retries automatically after a pause rather than giving up — and if it still cannot, it tells you which attempt failed and why instead of a bare error. You can also ask it to write them again at any time.

## Who said what

Once a recording ends, Starfish works out how many distinct voices are in it and groups the lines accordingly. This is **voice grouping**, not recognition: it can prove that the same person spoke on thirty different lines, but it has no way of knowing that person is called Sarah.

That last part is the bit only you can supply, so it only has to be supplied once.

Above the transcript is a **legend** with one chip per voice:

- **Hover** a voice and every other line dims, so you can see at a glance which lines are theirs. That is usually enough to work out who it was.
- **Click** it, type a name, press Enter — and **every line that voice spoke is renamed at once**.
- Clearing the name puts it back to "Speaker 2".

Voices are ordered by how much each person spoke, so whoever drove the meeting is offered first.

### In-person meetings

If there is no call audio — everyone is in the room, sharing one microphone — Starfish detects that and groups the voices from the microphone instead. A nine-person meeting in a conference room will come back as nine voices for you to name.

### Long recordings

Working out who spoke is memory-hungry, and it scales with the length of both audio streams. Where a recording is too long to process in one pass, Starfish says so and **keeps the transcript and the notes** rather than failing. You lose the voice labels for that meeting, not the meeting.

## What Starfish does not do

Being explicit, because the alternative is you finding out mid-call:

- **It does not photograph your screen.** Earlier versions captured the whole display every 1.5 seconds to read participant names off the meeting window. That was removed — it exposed everything else on your screen during a client call, and it could only ever guess at names.
- **It cannot record one browser tab.** System audio is captured for the whole machine. Music, notification chimes and other tabs are recorded along with the meeting, so mute what you do not want captured.
- **It does not identify people by voice.** Voices are grouped and then named by you. Starfish never claims to know who someone is.

## Audio and privacy

The call audio is kept on disk only for as long as it takes to work out who was speaking, and is deleted afterwards. If the app quits or crashes mid-way, leftover audio is cleaned up on the next launch. Transcripts and notes stay in your local Starfish database.

Speech recognition runs locally with NVIDIA's Parakeet model. Notes are written by an AI model, so the transcript text is sent to it for summarising when notes are generated.

## Permissions

Recording system audio needs macOS **Screen Recording** permission — that is the permission macOS uses for audio taps as well as screen capture.

::: tip If you are asked for permission every time
Local beta builds are ad-hoc signed, which means macOS treats each new build as a different application and cannot match the permission you granted to the previous one. Open **System Settings → Privacy & Security → Screen Recording**, remove Starfish, and add it again after installing a new build. A properly signed release does not have this problem.
:::
