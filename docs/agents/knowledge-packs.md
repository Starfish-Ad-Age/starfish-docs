---
outline: deep
---

# Knowledge Packs

Knowledge Packs are ZIP files containing pre-configured agents with custom instructions, tool sets, and metadata. They let you share agent configurations across your team or import curated agent bundles.

## What's Inside a Knowledge Pack

A Knowledge Pack is a `.zip` file containing one or more Markdown files. Each file defines a single agent using YAML frontmatter.

## How to Import

There are two ways to import a Knowledge Pack:

### During Setup

The setup wizard includes a **Vault** step (step 4) where you can upload a Knowledge Pack `.zip` file. All agents in the pack are created automatically.

### From the Agent Panel

Click the **upload icon** in the Agent Panel header to import a pack at any time. Only `.zip` files are accepted.


After import, a notification confirms how many agents were added. All imported agents are immediately available in the Agent Panel.

## Where to Get Knowledge Packs

- **Your team** -- shared packs with agents tailored to your workflows.
- **Create your own** -- build custom packs for your use cases (see below).

## Creating Your Own

### 1. Create Markdown files

Each `.md` file defines one agent. Use YAML frontmatter for metadata and the body for system instructions.

```markdown
---
name: Marketing Strategist
description: Creates campaign strategies and analyzes market data
icon: target
color: "#f97316"
tools:
  - google-analytics
  - facebook-ads
---

You are a senior marketing strategist. When the user asks for campaign
help, always start by understanding their target audience, budget, and
timeline. Use data from Google Analytics to inform recommendations.

Focus on actionable, measurable strategies. Include KPIs for every
recommendation.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Display name in the Agent Panel |
| `description` | Yes | Short summary shown on the agent card |
| `icon` | No | Icon identifier (Lucide icon name) |
| `color` | No | Hex color for the agent card accent |
| `tools` | No | List of MCP tool names the agent can use |

### 2. Zip the files

Put all `.md` files in a folder and compress it to a `.zip`:

```bash
zip -r my-agents.zip agents/
```

### 3. Import

Upload the `.zip` through the setup wizard or the Agent Panel upload button.

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
4. Open Starfish and import the ZIP through **Settings** or the **Agent Panel upload button**.

The generated pack will always include a **knowledge-base-agent** with core facts. Depending on the source material, it may also create agents for communication style, lead research, objection handling, project context, or other specialized roles.
