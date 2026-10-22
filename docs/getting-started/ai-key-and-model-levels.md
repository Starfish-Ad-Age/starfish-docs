---
outline: deep
---

# Your AI Key and Model Levels

Your Starfish subscription pays for the app. **AI usage is separate:** you use your own Vercel AI Gateway key, and Vercel bills you directly for the models you use. Starfish never resells or marks up AI usage.

::: tip In short
1. Create a Vercel account.
2. Add billing or credits to AI Gateway.
3. Create an AI Gateway API key.
4. Paste it into Starfish.
5. Pick a model level in the chat: Light, Balanced or Deep.
:::

## Get a Vercel AI Gateway key

1. Go to [vercel.com](https://vercel.com/) and sign up, or sign in. A free (Hobby) account is enough to start.
2. In your Vercel dashboard, open **AI Gateway**.
3. Set up billing for AI Gateway: add a payment method or buy credits. Vercel may give new accounts some free credit; see [Vercel AI Gateway pricing](https://vercel.com/docs/ai-gateway/pricing) for current details.
4. Open **API Keys** in AI Gateway and click **Create key**. Give it a name you will recognise, such as "Starfish – MacBook".
5. Copy the key. Vercel shows it only once.

::: warning Treat the key like a credit card
Anyone with your key can spend money on your Vercel account. Do not paste it into chats, emails or shared documents. If it leaks, delete it in Vercel and create a new one.
:::

**Recommended:** set a monthly budget or spending alert in your Vercel AI Gateway settings so you are never surprised by a bill.

## Add the key to Starfish

- **During setup:** the setup wizard asks for it in step 2, **AI access**. See [Setup Wizard](/getting-started/setup-wizard).
- **Later:** open **Settings → General** and paste it into the field labelled **"Vercel AI Gateway key"**.

Your key is stored on your Mac, encrypted with your Mac's Keychain. It is not uploaded to Starfish's servers. Each AI request goes straight from your Mac to Vercel. See the [Privacy Policy](/legal/privacy).

::: info Consumer subscriptions do not work
ChatGPT Plus, ChatGPT Pro, Claude Pro, Claude Max, Gemini Advanced and similar chat subscriptions cannot be used with Starfish. Only an API key works.
:::

## What your key pays for

Everything AI in Starfish runs on your key:

- chat and agent work;
- small background helper calls, such as naming chats, summarising long chats, choosing tools and checking results (these use low-cost models);
- image and video generation;
- speech (read aloud) and cloud dictation;
- embeddings for searching your knowledge files;
- web search and video understanding.

## Model levels

Every model and every image and video engine in Starfish is available to everyone. Nothing is locked behind a plan or a level. You pay Vercel for what you actually use, so your cost depends on which models you use and how much.

In Chat mode, the model picker in the composer offers:

| Choice | What it is for | Model it uses |
|---|---|---|
| **Smart Auto** | The default. Starfish handles the choice for you. | GPT-5.6 Luna |
| **Light** | Brief reasoning for everyday asks | DeepSeek V4.1 Flash 1017 (DeepSeek V4.1 Flash if 1017 is unavailable) |
| **Balanced** | Thinks harder for demanding work, the all-rounder | Claude Sonnet 5.5 (GPT-5.6 Luna if Claude stops working on your key for billing reasons, until the next month) |
| **Deep** | Thinks hardest for the most complex work | GPT-5.6 Luna, thinking as hard as it can |

You can also pick a named model. Developer mode lists every model and lets you set the thinking effort. See [Models & Providers](/chat/models). The models behind each choice change as new models are released and old ones retire.

## Indicative costs

These examples use Vercel AI Gateway list prices read on **2026-10-15** from `https://ai-gateway.vercel.sh/v1/models`. **Prices change often, and your real cost depends on how you use Starfish.** Always check the current prices on [Vercel's model list](https://vercel.com/ai-gateway/models).

### Text: one chat reply

Assumes about 10,000 tokens in (your message, chat history and Starfish's instructions) and 1,000 tokens out. Long chats, attached files and tool results make the input bigger. Prompt caching often makes repeated turns cheaper.

| Example model | Price per million tokens (in / out) | About per reply |
|---|---|---|
| GPT-6 Luna | $0.10 / $0.50 | $0.002 |
| GPT-5.6 Luna | $0.20 / $1.20 | $0.003 |
| DeepSeek V4.1 Flash | $0.30 / $1.20 | $0.004 |
| Gemini 3.5 Flash Lite | $0.30 / $2.50 | $0.006 |
| DeepSeek V4 Pro | $0.66 / $1.98 | $0.009 |
| Gemini 3.8 Flash | $0.75 / $3.75 | $0.011 |
| GPT-5.6 Terra | $2.00 / $12.00 | $0.032 |
| Claude Sonnet 5.5 | $2.00 / $10.00 | $0.03 |
| GPT-5.6 Sol | $4.00 / $20.00 | $0.06 |

**Rough range per reply:** under 1 cent on the cheapest models, up to about 6 cents on the most expensive.

### Text: a longer agent task

Assumes about 20 model steps, each reading about 30,000 tokens and writing about 1,000 (roughly 600,000 in and 20,000 out in total), before any caching discount.

| Example model | About per task |
|---|---|
| GPT-5.6 Luna | $0.15 |
| Gemini 3.8 Flash | $0.50 |
| Claude Sonnet 5.5 | $1.40 |

Automations that run on a schedule repeat these costs every time they run.

### Images: one image

| Example model | About per image |
|---|---|
| Muse Image 1.0 | $0.01 |
| GPT Image 2 | $0.15 or more (GPT Image is priced by tokens, so cost varies with size and quality) |

### Video: one 8-second clip

| Example model | About per clip |
|---|---|
| Veo 3.1 Lite, 720p with sound | $0.40 |
| Veo 3.1 Lite, 1080p with sound | $0.64 |
| Kling v3, with sound | $2.00 |
| Veo 3.1, 1080p with sound | $3.20 |
| Veo 3.1, 4K with sound | $4.80 |

::: warning Veo 3.1 Lite is a preview model
Starfish never chooses Veo 3.1 Lite automatically; video Auto starts on Kling 2.6. Use Veo 3.1 Lite only if you pick it yourself, and never with personal or client data: Vercel's protections do not apply to preview models.
:::

### Other

| Use | Example | About |
|---|---|---|
| Searching your knowledge files | Indexing a 100-page document with Gemini Embedding 2 ($0.20 per million tokens) | $0.01 |
| Read aloud | 1,000 characters with OpenAI TTS-1 ($15 per million characters) | $0.015 |
| Web search | Billed per search by Vercel | See Vercel's pricing |

## Keeping costs under control

- Use **Smart Auto**, **Light** or **Balanced** for most work, and pick a more expensive model only for work that needs it.
- Start a new chat for a new topic. Long chats send more history with every reply.
- Attach only the files you need.
- Set a budget or alert in your Vercel account.
- Check your spend in the Vercel dashboard. Starfish's own usage numbers are estimates; **your Vercel bill is the official record**.

## Related

- [Setup Wizard](/getting-started/setup-wizard)
- [Models & Providers](/chat/models)
- [Terms of Service](/legal/terms), sections 7 to 9
- [Privacy Policy](/legal/privacy)
