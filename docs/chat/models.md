---
outline: deep
---

# Models & Providers

Starfish connects to multiple AI providers through a unified AI Gateway. You pick the model, Starfish handles routing and authentication.

## Available Models

### Anthropic

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Claude Sonnet 5.5 | Standard | Yes | Yes | Yes |
| Claude Sonnet 5 | Standard | Yes | Yes | Yes |
| Claude Haiku 5.5 | Fast & Cheap | Yes | Yes | Yes |

### OpenAI

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| GPT-6 Luna | Standard | Yes | Yes | Yes |
| GPT-6 Sol | Standard | Yes | Yes | Yes |
| GPT-5.6 Luna | Standard | Yes | Yes | Yes |
| GPT-5.6 Sol | Standard | Yes | Yes | Yes |
| GPT-5.6 Terra | Standard | Yes | Yes | Yes |

### Gemini

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Gemini 3.8 Flash | Standard | Yes | Yes | Yes |
| Gemini 3.7 Flash | Standard | Yes | Yes | Yes |
| Gemini 3.5 Flash Lite | Ultra Cheap | Yes | Yes | Yes |

### Other

| Model | Provider | Tier | Thinking | Tools | Vision |
|-------|----------|------|----------|-------|--------|
| GLM-5.3 | Z.AI | Standard | Yes | Yes | No |
| GLM-5.3 Flash | Z.AI | Ultra Cheap | Yes | Yes | Yes |
| Kimi K3 | Moonshot | Standard | Yes | Yes | Yes |
| Qwen 3.8 Max | Alibaba | Standard | Yes | Yes | Yes |
| Muse Spark 1.3 | Meta | Standard | Yes | Yes | Yes |
| DeepSeek V4.1 Flash 1017 | DeepSeek | Fast & Cheap | Yes | Yes | Yes |
| DeepSeek V4.1 Flash | DeepSeek | Fast & Cheap | Yes | Yes | Yes |
| DeepSeek V4 Pro 0813 | DeepSeek | Standard | Yes | Yes | No |

## Model Capabilities

- **Thinking** -- extended reasoning mode. The model works through problems step by step before responding.
- **Tools** -- function calling. The model can invoke integrations and MCP tools.
- **Vision** -- image understanding. The model can analyze images you upload.

## Model Tiers

| Tier | Use Case |
|------|----------|
| **Standard** | Daily driver. Good balance of quality and speed. |
| **Fast & Cheap** | Low latency. Quick tasks, high volume. |
| **Ultra Cheap** | Lowest cost. Simple tasks, bulk processing. |

## Auto Mode

Select **Auto** in the model dropdown (labelled **Smart Auto** in Chat mode) and Starfish chooses a strong model for the turn and gives it room to think. It also classifies what the request needs (an answer, a saved file, an external change, research). This is the default. See [Auto Model Routing](/chat/auto-routing).

## Changing Models

In Chat mode, the three levels are:

- **Light** -- brief reasoning for everyday asks.
- **Balanced** -- thinks harder for demanding work. The all-rounder.
- **Deep** -- thinks hardest for the most complex work.

Image and video engines have their own pickers, marked **$**, **$$** or **$$$**. See [Image Generation](/media/image-generation) and [Video Generation](/media/video-generation).

Open the model dropdown in the composer area. Your selection is remembered across chats and app restarts, and every new message uses the model currently shown. In Chat mode you pick an outcome (Light, Balanced, Deep) or one of your named models; in Developer mode you pick from the full catalog and can set a thinking effort for models that support it.

![Model selector dropdown](/images/model-selector.png)

## Retired Models

Claude Opus 5.5 is no longer offered. Chats, automations and decks that used it now use Claude Sonnet 5.5.

## Preview Models

Starfish never picks a preview model by itself. If you choose one, Starfish warns you: do not use it with personal or client data, because Vercel's protections do not apply to preview models.

## Data Privacy

**Settings → Models → Data privacy** has two switches:

- **Private providers only** -- sends chat requests only to AI providers that keep no copy of your prompts or answers and never train on them. Off by default. While it is on, some chat models or providers may be unavailable or cost more, and a request stops with a clear message if no such provider exists. It applies to chats only (including agents, subagents and automations): images, video, cloud dictation and read aloud keep using their normal providers.
- **Remove sensitive information before sending** -- on by default. See [Sensitive Information](/chat/using-chat#sensitive-information).
