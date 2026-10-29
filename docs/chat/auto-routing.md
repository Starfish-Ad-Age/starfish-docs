---
outline: deep
---

# Auto Model Routing

When you select **Auto** in the model dropdown (labelled **Smart Auto** in Chat mode), Starfish takes care of the model choice. You don't need to think about which model to use -- Starfish picks a model for each message. In Chat mode, Smart Auto moves hard work to a stronger model. A level or a named model you choose overrides it.

## How It Works

1. You send a message with the model set to **Auto**.
2. Starfish picks a model for the message automatically.
3. While it prepares, a brief "Preparing your request…" indicator appears.

## Smart Auto in Chat mode

In Chat mode, Smart Auto answers most messages with one everyday model. When a message asks for hard coding or reasoning work, Smart Auto gives that turn to a model suited to it. Follow-ups on the same hard task stay on that model.

When that model answered, its short name shows next to the reply.

## Picking a Model Yourself

You are never forced onto Auto:

- **Chat mode** offers outcome-based levels -- **Light**, **Balanced**, and **Deep** -- plus up to five named models you choose under **Settings → Models**. **Light** is the cheapest and fastest. **Balanced** is the everyday choice, and **Deep** thinks hardest for the tricky jobs.
- **Developer mode** lists every model, with a **Thinking effort** control (low / medium / high) for models that support it.

A model you pick always wins over Auto.

## Model Stickiness

Auto does not continue a previously resolved model, except that Smart Auto in Chat mode keeps follow-ups on a hard task on the same model. What is remembered across chats is your own choice: a level (**Light**, **Balanced**, **Deep**) or a named model, which overrides Auto.

## Context Compaction

When a chat gets very long, Starfish trims older messages into a summary so each reply costs less and stays within the model's limits. When you ask about something from earlier in the chat, Starfish can look up the details.

When this happens, the chat shows **Trimmed older messages to save space. Starfish can still look them up.** In Developer mode it is a banner you can close. After the third trim, a notice says **This chat is very long. For the best answers, start a new chat.**

### Compact long chats when idle

When you leave a long chat for about an hour, Starfish condenses what it carries forward while you are away. Your next reply is then faster and cheaper. The whole chat stays visible, and a line in the chat says **Compacted while you were away**.

Starfish does not do this while the chat is still working or is waiting for your answer. The setting is on by default. Turn it off with **Compact long chats when idle** in **Settings → Personalization → Answers and prompts**.

## Token Usage

The header displays a token usage badge that shows how full the model's context window is (for example, `120k / 200k ctx`), not a lifetime spend total:

| Color | Context fill | Meaning |
|-------|--------------|---------|
| Neutral | Under 60% | Normal usage |
| Amber | 60% -- 80% | Elevated usage, consider starting a new session |
| Red | Over 80% | Near context limit, compaction likely |

Hover the badge for the exact counts and the total tokens processed this session.
