---
outline: deep
---

# Meetings

::: warning Speaker names are suggestions
Recording, transcription and notes are ready for everyday use. Voice grouping still improves over time, and names Starfish suggests from the transcript and meeting roster stay visibly unconfirmed until you accept them — treat the labels as a helpful draft rather than a guarantee.
:::

Starfish can sit in on a call, write the transcript as people speak, and turn it into notes when you stop. Transcription runs on your own Vercel AI Gateway key, with no extra provider key or download: live captions as people speak, then an accurate final pass with punctuation, missing words, and speaker labels. You can turn the final pass off in **Settings → Meetings → Transcript & notes**. If you have installed the on-device Parakeet voice model (Settings → General), Starfish also uses it on your Mac to fill live captions whenever the cloud stream is not connected.

## Recording a meeting

Open **Meetings** in the sidebar and click **Record** (or **Record a meeting** the first time). When a calendar meeting is on, the calendar bar offers **Join & record** (or **Record** if the event has no call link).

Starfish records two things at once:

- **The call** — the audio coming out of your Mac, captured with a system audio tap.
- **Your microphone** — captured separately, so "you said" and "they said" stay apart.

The transcript builds live as people speak. You can leave the Meetings screen and carry on using the rest of the app; the recording keeps running.

While recording, the Meetings header has buttons to mark a moment in your notes, turn your microphone off or on, pause for a private moment, and stop.

### The reminder to tell people

Every time a recording starts, a short notice at the top of your screen says **Make sure you tell the people in this call that you are taking notes**, and the Mac plays a short sound. The meeting keeps when the reminder was shown.

Recording rules differ by country and by US state, and many require everyone's agreement. Telling the people in the call, and getting their agreement where the law asks for it, is your responsibility, not the app's.

### The recording pill

During any recording, a small pill sits at the top centre of your screen, around the notch on Macs that have one. It shows the time recorded and a stop button. It shows however the recording started.

### "In a meeting?"

When you seem to be in a call, Starfish offers to take notes. The pill shows **In a meeting?** with the app's name, **Take notes**, **Never for this app** and **×**.

It shows only on strong signs of a meeting. While another app uses your microphone:

- It shows after a couple of seconds if the app is a meeting app such as Zoom, Teams, Webex, FaceTime, Slack, Discord, Skype, Around or Whereby, if your camera is on, or if a calendar meeting with a link is happening.
- It shows after 90 seconds if the app is a browser.

Other apps that use the microphone do not bring it up. Dictation and voice tools, such as macOS Dictation and Siri, never do.

- **Take notes** starts recording straight away.
- **×** hides the prompt for that call.
- **Never for this app** stops the prompt for that app from now on.
- Nothing is recorded until you click **Take notes**.

Turn the prompt off with **Offer to take notes in a meeting** in **Settings → Meetings**. Apps you chose **Never for this app** on are listed under **Never offer for these apps**. Remove one to be asked again.

## Notes

When you stop the recording, Starfish writes the notes: a short overview, the topics that came up, decisions, open questions, and action items.

If the notes cannot be written the first time, it retries automatically after a pause rather than giving up — and if it still cannot, it tells you which attempt failed and why instead of a bare error. You can also ask it to write them again at any time.

## Who said what

Once a recording ends, Starfish works out how many distinct voices are in it and groups the lines accordingly. This is **voice grouping**, not recognition: it can prove that the same person spoke on thirty different lines, but it has no way of knowing that person is called Sarah.

You supply that last part, so it only has to be supplied once. Using an AI model on your Vercel AI Gateway key, Starfish can also **suggest** a name for a voice using the transcript evidence and the meeting roster. A suggestion is never treated as fact — it stays visibly unconfirmed until you accept or reject it.

Above the transcript is a **legend** with one chip per voice:

- **Hover** a voice and every other line dims, so you can see at a glance which lines are theirs. That is usually enough to work out who it was.
- **Click** it, type a name, press Enter — and **every line that voice spoke is renamed at once**.
- Clearing the name puts it back to "Speaker 2".

Voices are ordered by how much each person spoke, so whoever drove the meeting is offered first.

### In-person meetings

If there is no call audio — everyone is in the room, sharing one microphone — Starfish detects that and groups the voices from the microphone instead. A nine-person meeting in a conference room will come back as nine voices for you to name.

### Long recordings

Working out who spoke is the most demanding part of the pipeline, and it scales with the length of both audio streams. If a recording is too long to process (or the offline models aren't installed), Starfish says so and **keeps the transcript and the notes** rather than failing. You lose the voice labels for that meeting, not the meeting.

## What Starfish does not do

Being explicit, because the alternative is you finding out mid-call:

- **It does not photograph your screen.** Earlier versions captured the whole display every 1.5 seconds to read participant names off the meeting window. That was removed — it exposed everything else on your screen during a client call, and it could only ever guess at names.
- **It cannot record one browser tab.** System audio is captured for the whole machine. Whatever else is playing — notification chimes, other tabs — is recorded along with the meeting, so mute what you do not want captured.
- **It does not identify people by voice.** Voices are grouped, and names come from you or from a suggestion you accept. Starfish never claims to know who someone is.

## Play a recording

Open a finished meeting to play it. Play, pause, skip back or forward 15 seconds, seek, and choose a speed from 0.75× to 2×.

## Meetings in a workspace

Add a meeting to a client or project workspace, so its notes and transcript become part of that workspace.

- On the meeting, click **Add to workspace** and pick one. You can also use **Add to workspace** or **Move to workspace** in the meeting's **…** menu, or choose **No workspace** to take it out.
- Every chat in that workspace can then read the meeting's notes and transcript.
- The workspace page lists its meetings. **Remove from this workspace** takes one out.

If the workspace is shared with a team, Starfish asks first, because everyone in the team will see the meeting's notes and full transcript. When you share a workspace that already has meetings, Starfish asks whether to include them.

## Audio and privacy

Starfish keeps each meeting's recording on your Mac for **180 days** after the meeting, so you can play it and transcribe it again. The meeting page shows how many days are left. Transcripts and notes stay in your local Starfish database, and are copied to your Starfish account only if you turn on cloud sync.

Transcription runs on your own Vercel AI Gateway key: the audio is streamed for live captions, and the recording is sent off-device for the final transcript. Vercel and the model provider handle it under your agreements with them. Working out who spoke runs on your Mac. The optional on-device Parakeet model only fills live captions when the cloud stream is not connected. Notes are written by an AI model, so the transcript text is sent to it for summarising when notes are generated.

## Permissions

Recording system audio needs macOS **Screen Recording** permission — that is the permission macOS uses for audio taps as well as screen capture.

::: tip If you are asked for permission every time
Local beta builds are ad-hoc signed, which means macOS treats each new build as a different application and cannot match the permission you granted to the previous one. Open **System Settings → Privacy & Security → Screen Recording**, remove Starfish, and add it again after installing a new build. A properly signed release does not have this problem.
:::
