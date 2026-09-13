---
outline: deep
---

# Auto Model Routing

When you select **Auto** in the model dropdown (labelled **Smart Auto** in Chat mode), Starfish takes care of the model choice. You don't need to think about which model to use -- Starfish reads each request and picks the model and the way to answer it.

## How It Works

1. You send a message with the model set to **Auto**.
2. A lightweight LLM classifier reads your message, the conversation context, the number of active agents, available MCP tools, and attachment types. It runs on GPT-5.6 Luna and has a short timeout so it never holds up a reply.
3. The classifier works out what the turn owes: an answer in chat, a saved file, an external change, or a fresh read, plus which methodology skills to load and whether the request needs research. It also suggests the best-fit model for the task.
4. In Chat and Developer mode, **Auto resolves to GPT-5.6 Luna** for the turn. Simple mode's classifier pick is advisory: the deterministic router keeps Auto on one predictable model to avoid cache churn and surprise cost.
5. In Developer mode, a brief "Assigning to best model…" indicator appears while routing completes. Chat mode shows "Preparing your request…".

If the classifier fails or times out, the system falls back to heuristic rules based on message length, attachment presence, and tool count. A turn that requests image or video generation is routed to **Best** for reliability.

## Picking a Model Yourself

You are never forced onto Auto:

- **Chat mode** offers outcome-based tiers -- **Quick**, **Balanced**, and **Best** -- plus up to five named models you choose under **Settings → Models**. **Best** runs the same Sonnet-class model as Balanced at a higher reasoning effort.
- **Developer mode** lists the full catalog, grouped by provider, with a **Thinking effort** control (low / medium / high) for models that support it.

A model you pick always wins over Auto.

## Model Stickiness

Where the router is choosing the model, it considers the previously resolved model. This prevents unnecessary model switching mid-conversation, which would otherwise force a cold prompt cache and pay full input price again. It still switches when a turn needs a capability the current model lacks (for example, vision for an image or PDF).

## Cost

The model you chose handles the whole turn. Starfish deliberately does not swap to a cheaper or smaller model partway through a long, multi-tool task -- capability matters most there -- so cost is bounded by a step and tool budget rather than by downgrading.

## Context Compaction

When a conversation grows large, the system automatically compacts older messages into a summary to stay within model context limits. Compaction triggers at roughly 75% of the model's context window. You'll see an amber "Context Compacted" banner in the chat when this happens.

## Token Usage

The header displays a token usage badge that shows how full the model's context window is (for example, `120k / 200k ctx`), not a lifetime spend total:

| Color | Context fill | Meaning |
|-------|--------------|---------|
| Neutral | Under 60% | Normal usage |
| Amber | 60% -- 80% | Elevated usage, consider starting a new session |
| Red | Over 80% | Near context limit, compaction likely |

Hover the badge for the exact counts and the total tokens processed this session.

## Model Tiers and Prompt Optimization

Models are grouped into tiers: Standard, Fast & Cheap, and Ultra Cheap (the model metadata also reserves a Premium tier). Each model family -- OpenAI, Anthropic, Google, Moonshot, and everything else -- gets a short behavioural prompt tuned to the habits that family tends to need, rather than one generic instruction set for every model.
