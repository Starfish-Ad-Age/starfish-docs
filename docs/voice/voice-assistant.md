---
outline: deep
---

# Voice assistant

Talk to Starfish from anywhere on your Mac. The voice assistant starts chats for you, tells you how they are going, and answers their approvals and questions, while you keep working in other apps.

The voice assistant only talks. It cannot see your screen and it does not search the web. It passes your requests to the app and tells you the result. To ask about something on your screen, use [Ask about this screen](/voice/ask-about-this-screen).

Voice needs your AI Gateway key. Without it, voice says **Voice needs the AI Gateway key in Settings.**

## Start and stop

- Press **⇧⌘ Space** anywhere on your Mac. Press it again to stop, or to continue after a pause.
- Or click **New voice chat** in the sidebar. It carries a **Preview** pill while voice is still new.
- Or, if the Starfish icon is in your menu bar, choose **Talk to Starfish…** in its menu.

The first time, macOS asks for microphone access. If it is not allowed, voice says **Starfish can't use the microphone. Check System Settings, Privacy & Security, Microphone.**

You can change or turn off the shortcut in **Settings → Voice & shortcuts**. See [Settings](#settings).

## The voice window

A small window floats at the top of your screen, above your other apps and on every desktop. Drag it to move it. Starfish remembers the place on each display.

It shows a coloured circle and what voice is doing: **Ready**, **Connecting…**, **Listening**, **Thinking**, **Speaking**, **Waiting for your OK**, **Paused** or **Muted**. While voice works in the app, it says what it is doing, such as **Starting a new chat** or **Checking your chats**. A timer shows how long you have been talking.

- **Mute** turns your microphone off. Voice keeps running.
- **Pause** stops listening until you click **Resume**.
- **Stop** ends voice.

The window also shows what you said and the answer. Below them are the chat voice is talking about, and **Transcript**, which opens the whole voice conversation.

### Compact window

Choose **Compact** for **Voice window** in **Settings → Voice & shortcuts**. The window becomes a small circle with a short status or the chat's title. Point at it or click it to open its controls. They close again shortly after you move away.

## What you can ask

- Start a new chat that works in the background. Name a model or a project if you want one.
- Ask which chats are running, finished or waiting for you.
- Open a chat on your screen.
- Send a chat an instruction, a follow-up or the answer to its question.
- Stop a running chat.
- Ask what a chat found or where it stands.
- Answer an approval with yes or no.

## How chats appear

Chats that voice starts are normal chats in your sidebar. Open them like any other chat.

The voice conversation itself is saved as a chat called **Voice conversation**, with the date. If you start voice again within 5 minutes of your last turn, it continues the same conversation. After that, it starts a new one.

Voice tells you when a chat it started or worked on is done, or stops with a problem, and offers to open it. It also speaks up when a running chat you are not looking at needs your OK or has a question for you.

While voice is paused, these updates come as Mac notifications. When you continue, voice tells you what happened, starting with **While you were away**.

After a minute in which nobody speaks, voice pauses by itself.

## Approvals

When a chat needs your OK, voice reads out what it wants to do and asks whether to allow it. Say yes or no.

Voice can only allow safe actions: reading, creating or changing things that can be undone. Anything that deletes, sends, posts, shares, runs a Terminal command or costs money needs a click. Voice then says **That one needs a click; it's on your screen.** The voice window shows a red dot next to the chat and **Open to approve**. Click it to open the chat and decide there.

You can always say no by voice.

## Daily voice limit

Voice can be used for 30 minutes a day. When most of it is used, voice tells you how many minutes are left. At the limit, voice stops and says **You have used today's voice time. Voice turns back on tomorrow.**

The limit is shared by your Mac and your phones. **Daily voice limit** in **Settings → Voice & shortcuts** shows how many minutes you used today.

## One device at a time

Voice runs on one device at a time. If it is running on your phone, your Mac says **Voice is running on your phone. Stop it there first.** See [Starfish on your phone](/phone/overview#voice).

## Settings

Open **Settings → Voice & shortcuts**. The **Voice assistant** section has:

| Setting | What it does |
|---------|--------------|
| **Talk to Starfish** | The shortcut that starts and stops voice. Click it and press new keys to change it. **Reset** brings back **⇧⌘ Space**. **Turn off** removes the shortcut. |
| **Voice window** | **Full** shows the live conversation and controls. **Compact** shows a small circle that opens its controls when you point at it or click it. |
| **Voice window position** | **Reset position** moves the window back to the top of the screen. |
| **Voice model** | **GPT-Live** answers faster and stops by itself when you interrupt. **Gemini Live** is a little slower and uses less of your AI budget. |
| **Daily voice limit** | 30 minutes a day. The row shows how many minutes you used today. It cannot be changed. |

A shortcut needs at least one of Command, Control or Option plus a key. Starfish refuses shortcuts that macOS or most apps already use, and tells you if another app has taken it. Press Esc to cancel while you change it.
