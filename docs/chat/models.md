---
outline: deep
---

# Models & Providers

Starfish connects to multiple AI providers through a unified AI Gateway. You pick the model, Starfish handles routing and authentication.

## Available Models

### Anthropic

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Claude Sonnet 5 | Standard | Yes | Yes | Yes |
| Claude Sonnet 4.6 | Standard | Yes | Yes | Yes |
| Claude Haiku 4.5 | Fast & Cheap | No | Yes | Yes |

### OpenAI

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| GPT-5.6 Luna | Standard | Yes | Yes | Yes |
| GPT-5.6 Sol | Standard | Yes | Yes | Yes |
| GPT-5.6 Terra | Standard | Yes | Yes | Yes |
| GPT-5.3 Codex | Standard | Yes | Yes | No |

### Google

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Gemini 3.6 Flash | Standard | Yes | Yes | Yes |
| Gemini 3.7 Flash | Standard | Yes | Yes | Yes |
| Gemini 3.8 Flash | Standard | Yes | Yes | Yes |
| Gemini 3.5 Flash Lite | Ultra Cheap | Yes | Yes | Yes |

### Other

| Model | Provider | Tier | Thinking | Tools | Vision |
|-------|----------|------|----------|-------|--------|
| GLM-5 | Z.AI | Standard | Yes | Yes | No |
| GLM-5.2 | Z.AI | Standard | Yes | Yes | No |
| GLM-5.3 | Z.AI | Standard | Yes | Yes | No |
| GLM-5.3 Flash | Z.AI | Ultra Cheap | Yes | Yes | Yes |
| Grok 4.5 | xAI | Standard | Yes | Yes | Yes |
| Kimi K2.6 | Moonshot | Standard | Yes | Yes | Yes |
| Kimi K3 | Moonshot | Standard | Yes | Yes | Yes |
| Qwen 3.8 Max | Alibaba | Standard | Yes | Yes | Yes |
| DeepSeek V4 Pro | DeepSeek | Standard | Yes | Yes | No |
| DeepSeek V4 Pro 0813 | DeepSeek | Standard | Yes | Yes | No |
| DeepSeek V4 Flash | DeepSeek | Fast & Cheap | Yes | Yes | No |
| DeepSeek V4 Flash 0731 | DeepSeek | Fast & Cheap | Yes | Yes | No |
| DeepSeek V4 Flash Vision Exp | DeepSeek | Fast & Cheap | Yes | Yes | Yes |
| DeepSeek V4.1 Flash | DeepSeek | Fast & Cheap | Yes | Yes | Yes |

## Model Capabilities

- **Thinking** -- extended reasoning mode. The model works through problems step by step before responding.
- **Tools** -- function calling. The model can invoke integrations and MCP tools.
- **Vision** -- image understanding. The model can analyze images you upload.

## Model Tiers

| Tier | Use Case |
|------|----------|
| **Premium** | Best quality. Complex reasoning, nuanced tasks. |
| **Standard** | Daily driver. Good balance of quality and speed. |
| **Fast & Cheap** | Low latency. Quick tasks, high volume. |
| **Ultra Cheap** | Lowest cost. Simple tasks, bulk processing. |

## Auto Mode

Select **Auto** in the model dropdown (labelled **Smart Auto** in Chat mode) and Starfish chooses the model for the turn -- currently GPT-5.6 Luna at extra-high reasoning. It also classifies what the request needs (an answer, a saved file, an external change, research). This is the default. See [Auto Model Routing](/chat/auto-routing).

## Changing Models

Open the model dropdown in the composer area. Your selection is remembered across chats and app restarts, and every new message uses the model currently shown. In Chat mode you pick an outcome (Light, Balanced, Deep) or one of your named models; in Developer mode you pick from the full catalog and can set a thinking effort for models that support it.

![Model selector dropdown](/images/model-selector.png)
