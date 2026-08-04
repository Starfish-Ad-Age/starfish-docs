---
outline: deep
---

# Memory

Starfish keeps a short list of durable facts about how you like to work, and uses them across every chat. You can read the whole list, change any of it, and delete any of it, in **Settings → Memory**.

This is deliberately a small, visible list rather than an invisible profile. A memory you cannot see is one you cannot correct, and a wrong one steers every future answer without ever explaining itself.

::: tip Not the same as project memory
This page is about **you** — how you want Starfish to work, across everything. For notes attached to a specific project or folder, see [Project & Folder Memory](/workspace/memory).
:::

## What it remembers

Standing preferences, not task details. The test Starfish applies before saving anything is whether it would **still be true next month**:

| Remembered | Not remembered |
| --- | --- |
| "Prefers short, direct answers" | "Wants the Q3 deck by Friday" |
| "Works mainly in paid social" | "Is looking at the Henderson account today" |
| "Never use purple gradients" | "Asked for a blue background in this chat" |

A memory that expires is worse than no memory, because it keeps steering long after it stopped being true.

Entries are grouped into **Style** (how you want replies written), **Tools** (what you work with), **Clients**, **Avoid** (things you never want), and **Other**.

## Where memories come from

Every entry is labelled with its origin, because that is what tells you how much to trust it:

- **Added by you on 4 August** — you wrote it yourself.
- **Learned from a chat on 2 August** — Starfish picked it up from something you said.

Learning happens quietly in the background while you chat. It never interrupts a reply, and it never blocks one — if it fails, nothing happens and you are not told, because a failed background note is not your problem to solve.

Saying the same thing twice does not create a second entry. Repeating a preference **reinforces** the existing one instead, which matters for the limit below: the things you mention often are the last to be forgotten.

## Managing your memories

Everything on the page is editable:

- **Tell Starfish something** — write a memory yourself, in your own words.
- **Edit** any entry inline. Correcting a badly-worded learned memory is usually better than deleting it.
- **Delete** a single entry.
- **Forget everything** — clears the whole list. It asks first.

## The 50-entry limit

Starfish keeps at most **50 memories**. The limit exists to keep the list readable and to keep it from quietly becoming a second copy of your conversation history.

When the list is full and something new is learned, the **least recently reinforced learned memory** is dropped to make room — least recently *mentioned*, not oldest. A preference you have repeated for a year stays; one inferred once in March and never again goes first.

**Memories you wrote yourself are never dropped automatically.** If you took the trouble to tell Starfish something directly, it will not be evicted by something it inferred on its own — only you can remove it.

If the list is full of your own entries, nothing new is learned until you remove some. That is intentional: silently discarding what you explicitly asked for would be the worse failure.

## How memories are used

Memories are given to the assistant as **standing preferences, not instructions for this message**. Asking for something different in a particular chat always wins — a memory saying you prefer short answers does not stop you asking for a long one, and it will not argue with you about it.

Starfish also will not bring the list up unprompted. If you want to know what it remembers, ask — or just open this page, which is the same list.

## Privacy

Memories are stored in your local Starfish database on your Mac, alongside your chats. The text of a memory is sent to the AI model as part of a conversation's context, in the same way the rest of your chat is.

Learned memories are extracted by a small, fast model. Clearing the list removes them permanently — there is no server-side copy to reconcile.
