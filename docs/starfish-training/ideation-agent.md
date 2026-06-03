---
outline: deep
---

# Track 3 · Ideation Agent

> For the people who brainstorm post ideas with clients. Build an AI teammate that pulls *what's actually trending right now* — not generic filler.

## What changes for you

When you sit down to ideate, the hard part isn't writing — it's coming up with ideas that feel *current*. If you just ask any chatbot "give me social media post ideas," you get the same tired list: "Motivation Monday," "behind the scenes," "ask a question." Boring, because it's pulling from old training data, not from what's happening this week.

In Starfish you can **build your own agent** — a saved assistant with its own instructions — that does the thing a good strategist does: **researches current trends on the web first**, then proposes ideas grounded in what's working *now*, in *your client's* voice.

Build it once. Use it forever. Tweak it whenever you want.

::: tip You describe it in plain English — the app writes the "brain"
You don't write any technical instructions. You describe what you want in normal words, Starfish drafts the agent (name, icon, instructions, tools), and you tweak it. Takes about 3 minutes.
:::

---

## Walkthrough 1 · Feel the difference (30 seconds)

Before building anything, see why this matters. In a normal chat, type:

```
Give me 5 social media post ideas for a coffee shop.
```

Notice how generic the answer is. Now imagine an assistant that first searched "coffee shop social media trends this month" and *then* suggested ideas tied to a real, current trend. That's what we're about to build.

---

## Walkthrough 2 · Build the agent

**Goal:** create a "Social Trend Ideator" agent.

1. Click **Agents** in the left sidebar to open the Agents page.
2. Click **Create agent** (the button on the big colored card at the top).
3. The **Build a custom agent** box opens. In the description, paste something like this — edit it for how *you* work:

   ```
   A social media ideation agent for a creative agency. When I give it a
   client and a goal, it FIRST searches the web for the latest, current
   social media trends, formats, sounds, and campaigns relevant to that
   client's industry — and only then suggests post ideas grounded in what's
   actually trending right now. It should never give generic, evergreen
   ideas. For each idea it returns: a hook, the visual concept, a caption
   direction, and one line on WHY it works right now (citing the trend it
   found). Keep the client's brand voice in mind. Friendly, sharp, practical.
   ```

4. Click **Generate agent**. Wait a few seconds while it designs ("Designing…").

---

## Walkthrough 3 · Review and tune it

**Goal:** make sure it behaves the way you want before saving.

On the **Review your agent** screen you can change everything:

- **Name** — e.g. `Social Trend Ideator`.
- **Model** — leave on **Auto** (matches your chat's model) unless you have a preference.
- **Color / icon** — pick something you'll recognize.
- **System prompt** — this is the agent's brain. Read it. If it doesn't insist on web research, add a line yourself, in plain English:

  ```
  ALWAYS search the web for current trends before suggesting ideas.
  Never suggest an idea you can't tie to something happening right now.
  ```

- **Tool access** — for this agent you don't need to switch on any integration; **web research is already built in**. (Only toggle integrations like ClickUp if you want the agent to *also* do those things.)

Then click **Save agent**. You'll see a "Created Social Trend Ideator" confirmation, and it shows up under **Built by me**.

---

## Walkthrough 4 · Run it on a real client

**Goal:** get trend-grounded ideas.

1. Start a **New Chat**.
2. In the chat box, open the **Agents** dropdown and select your **Social Trend Ideator**. It appears as a pill above the box.
3. Ask for ideas:

   ```
   Client: Northwind Coffee, a local specialty coffee roaster.
   Goal: grow Instagram followers over the next 2 weeks.
   Give me 5 post ideas.
   ```

4. Watch it **search the web first** (you'll see search tool cards), then return ideas — each with a hook, visual, caption direction, and *why it works right now*.

::: tip Always sanity-check the trend
The agent is reading the live web, which is great — but the web is messy. If it cites a "trend," give it a quick gut check before you pitch it to a client. Ask: "show me where you saw that trend." Treat it as a sharp junior who did the research, not gospel.
:::

---

## Walkthrough 5 · Talk to different models on the same brief

**Goal:** get a second and third opinion on your ideas — without leaving the app.

This is the part people love. Different AIs *think* differently: **Claude** tends to be thoughtful and on-brand, **GPT** punchy and structured, **Gemini** fast and often very current. Normally you'd open three apps to compare. Here you run the **same brief through each, right in this chat**, and cherry-pick the best.

Because we left the agent's model on **Auto**, it uses whatever your **chat's model** is set to. So:

1. Run your brief once (you just did in Walkthrough 4).
2. Open the **model dropdown** at the bottom of the chat and switch to a different model — e.g. **Claude → GPT**.
3. Send the *exact same brief* again.
4. Repeat for **Gemini**, then compare.

A simple way to capture the comparison:

| Model | Best idea it gave | Vibe |
|-------|-------------------|------|
| **Claude** | … | thoughtful, on-brand |
| **GPT** | … | punchy, structured |
| **Gemini** | … | fast, very current |

::: tip You're not crowning a winner — you're harvesting
The point isn't which model is "best." It's that you get three angles on the same brief in two minutes, in one place. Take the strongest idea from each.
:::

---

## Walkthrough 6 · Improve the agent over time

**Goal:** shape the output to exactly what you present to clients.

If the format isn't quite right, you don't rebuild — you edit:

1. Go to **Agents → Built by me**.
2. Hover your agent and click the **pencil (Edit)** icon.
3. Adjust the system prompt. Examples of tweaks to add:

   ```
   Always return ideas in a table with columns: Idea | Hook | Visual | Why now.
   ```
   ```
   Match Northwind Coffee's voice: warm, unpretentious, a little witty.
   ```

4. **Save changes.** Next time you use it, it follows the new rules.

---

## Try it yourself

Build a real ideation agent for one of your actual clients:

- [ ] Create an agent and describe it in your own words (must research trends first)
- [ ] Tune the system prompt so it never gives generic ideas
- [ ] Save it, then activate it in a New Chat via the **Agents** dropdown
- [ ] Run it for a real client and watch it search the web before answering
- [ ] Ask it "show me where you saw that trend" to verify one idea
- [ ] Edit the agent to output ideas in a clean table, then re-run
- [ ] Compare its ideas to what you'd have brainstormed alone

## Tips & gotchas

- **The system prompt is the secret.** The more clearly it says "research first, never be generic, return this exact format," the better it behaves.
- **Give it context.** Tell it the client, the audience, the goal, and the platform. Vague in = vague out.
- **Verify trends.** Live web research can surface noise. Always gut-check before pitching.
- **One agent per job.** A trend ideator, a caption writer, a hashtag researcher — small focused agents beat one do-everything agent.
- **Reuse it.** Once saved, your agent is one click away in every chat, forever.

**See also:** [Agents Overview](/agents/overview) · [Managing Agents](/agents/managing-agents) · [Knowledge Packs](/agents/knowledge-packs) (share agents across the team)
