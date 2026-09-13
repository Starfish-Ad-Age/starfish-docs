---
outline: deep
---

# Knowledge Packs

Knowledge Packs are ZIP files containing pre-configured agents with custom instructions and metadata. They let you share agent configurations across your team or import a curated agent bundle.

## What's Inside a Knowledge Pack

A Knowledge Pack is a `.zip` file containing:

- **`index.md`** at the root (or inside a single top-level folder). The first `#` heading becomes the pack's name, and the paragraph beneath it becomes its description.
- **One `.md` file per agent.** Each file's body is used verbatim as that agent's instructions, and optional YAML frontmatter supplies its metadata.

The archive must be under 50 MB, and it must contain at least one agent `.md` file alongside `index.md`.

## How to Import

Agents live on the **Agents** page (Developer mode). There are two ways to bring in pre-built agents:

### Upload a single agent file

Click **Upload agent** and choose a `.md` file. The app reads its optional frontmatter and opens it in the builder for review before saving.

### Import a Knowledge Pack

The app reads a pack's `index.md` and creates one agent for each agent `.md` in the archive; all of them appear in your library. If ZIP import isn't available in your build, upload the individual agent `.md` files with **Upload agent** instead.

Either way, a notification confirms how many agents were added.

## Where to Get Knowledge Packs

- **Your team** -- shared packs with agents tailored to your workflows.
- **The template directory** -- click **Browse templates** on the Agents page to install ready-made agents one at a time.
- **Create your own** -- build custom packs for your use cases (see below).

## Creating Your Own

### 1. Create Markdown files

Each `.md` file defines one agent. Use YAML frontmatter for metadata and the body for system instructions.

```markdown
---
name: Marketing Strategist
description: Creates campaign strategies and analyzes market data
color: orange
model: sonnet
---

You are a senior marketing strategist. When the user asks for campaign
help, always start by understanding their target audience, budget, and
timeline.

Focus on actionable, measurable strategies. Include KPIs for every
recommendation.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | No | Display name; defaults to the file name |
| `description` | No | Short summary shown on the agent card |
| `color` | No | A named color (`pink`, `orange`, `green`, `cyan`, `blue`, `purple`, `red`, `yellow`, `gray`) or a hex value |
| `model` | No | `sonnet`, `haiku`, or `opus` (legacy aliases; defaults to `sonnet`) |

::: tip
A single `.md` uploaded with **Upload agent** (rather than a whole ZIP) also understands `icon` (one of the app's agent icons: `briefcase`, `code-2`, `shield`, `palette`, `pen-tool`, `search`, `bar-chart-2`, `cpu`, `zap`, `star`, or `bot`) and `tools` (a comma- or space-separated list of integration ids such as `gws, clickup`).
:::

### 2. Zip the files

Put `index.md` and the agent `.md` files in a folder and compress it to a `.zip`:

```bash
zip -r my-agents.zip agents/
```

### 3. Import

Import the `.zip` into the app. Every agent in the pack is added to your library.

## Generate a Knowledge Pack with Any LLM

You can use any LLM (ChatGPT, Gemini, Claude, etc.) to automatically build a Knowledge Pack from a source document about a person, company, or topic. Paste the following prompt into your LLM of choice, attach your source material, and it will produce a ready-to-import ZIP file.

### The Prompt

```
I'm going to give you a source document about a person. Read it carefully,
then build Obsidian flavored markdowns and zip them and save it to ~/Downloads/.

Structure rules:
* Zip is named [person].zip and contains a root folder [person]/
* index.md at the root = vault overview only (person's name, what the vault
  is for, how many agents, their names — nothing else)
* Decide which agents make sense for this person based on what you read
  about them
* Each agent gets a root-level .md file (e.g. knowledge-base-agent.md) —
  this file describes what the agent does and points to which subfolder to
  go to for the specific task
* Each agent also gets a subfolder with the actual detailed content and
  notes pulled from the source
* The root .md is a router — it tells you where to go, the subfolder has
  the actual content

Agent rules:
* Always include a knowledge-base-agent — this holds core facts, background,
  and institutional memory about the person
* Add other agents only if the source gives you enough material to justify
  them (e.g. lead research, communication style, objection handling, etc.)
* Don't invent content — everything in the subfolders must come from the source
* Use ~ not full paths

Source: [paste source here]
```

### How It Works

1. Copy the prompt above into any LLM that can create files (Claude with artifacts, ChatGPT with Code Interpreter, etc.).
2. Replace `[paste source here]` with your source material -- a bio, CRM export, meeting notes, company wiki page, or any document with enough detail.
3. The LLM will analyze the source, decide which agents are appropriate, and generate a ZIP file saved to your Downloads folder.
4. Open Starfish and import the ZIP.

The generated pack will always include a **knowledge-base-agent** with core facts. Depending on the source material, it may also create agents for communication style, lead research, objection handling, project context, or other specialized roles.
