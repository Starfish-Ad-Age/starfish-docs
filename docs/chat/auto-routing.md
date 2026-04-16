---
outline: deep
---

# Auto Model Routing

When you select **Auto** in the model dropdown, Starfish automatically picks the best model for each message. You don't need to think about which model to use -- the system classifies your request and routes it to the right one.

## How It Works

1. You send a message with the model set to **Auto**.
2. A lightweight LLM classifier analyzes your message, the number of active agents, available MCP tools, and attachment types.
3. The classifier selects the best-fit model from the full catalog.
4. A brief "Assigning to best model..." indicator appears in the chat while routing completes.
5. The resolved model name appears in the header, and the response streams normally.

If the classifier fails for any reason, the system falls back to heuristic rules based on message length, attachment presence, and tool count.

## Model Stickiness

On follow-up messages in the same session, the router considers the previously resolved model. This prevents unnecessary model switching mid-conversation. The router can still switch if the nature of the request changes significantly (e.g., from a simple question to a complex multi-tool task).

## Cost-Saving Downgrade

During long multi-tool sessions (more than 10 tool steps in a single turn), the system automatically downgrades to a cheaper model from the same provider. For example:

- Claude Opus 4.6 downgrades to Claude Sonnet 4.6
- GPT-5.4 Pro downgrades to GPT-5.4

This bounds cost on extended agentic sessions without requiring manual intervention. The downgrade only applies within the current turn and does not affect the session's default model.

## Context Compaction

When a conversation grows large, the system automatically compacts older messages into bullet-point summaries to stay within model context limits. You'll see an amber "Context Compacted" banner in the chat when this happens.

A secondary warning appears if input tokens exceed 150,000, indicating the conversation is approaching the limit of what the model can process in a single turn.

## Token Usage

The header displays a token usage badge that updates in real time:

| Color | Range | Meaning |
|-------|-------|---------|
| Neutral | Under 80K tokens | Normal usage |
| Amber | 80K -- 150K tokens | Elevated usage, consider starting a new session |
| Red | Over 150K tokens | Near context limit, compaction likely |

## Model Tiers and Prompt Optimization

Models are grouped into tiers: Premium, Standard, Fast & Cheap, and Ultra Cheap. Premium and Standard tier models receive a leaner system prompt that omits verbose formatting guidance, saving approximately 400-500 tokens per request without affecting response quality.
