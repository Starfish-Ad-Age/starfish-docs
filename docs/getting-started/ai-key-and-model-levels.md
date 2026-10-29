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

Everything AI in Starfish runs on your key: chat and agent work, small background tasks such as naming chats and summarising long ones, image and video generation, speech, searching your knowledge files, and web search.

## Model levels

Every model and every image and video engine in Starfish is available to everyone. Nothing is locked behind a plan or a level. You pay Vercel for what you actually use, so your cost depends on which models you use and how much.

In Chat mode, the model picker in the composer offers:

| Choice | What it is for |
|---|---|
| **Smart Auto** | The default. Starfish picks a model for each message. |
| **Light** | Brief reasoning for everyday asks |
| **Balanced** | Thinks harder for demanding work, the all-rounder |
| **Deep** | Thinks hardest for the most complex work |

Each level maps to a class of model, and the mapping may change as new models are released. You can also pick a named model. Developer mode lists every model and lets you set the thinking effort. See [Models & Providers](/chat/models).

## Costs

Prices differ a lot between models and change often. See the current prices on [Vercel's model list](https://vercel.com/ai-gateway/models). Automations that run on a schedule cost the same each time they run.

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
