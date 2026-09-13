---
outline: deep
---

# Plan Mode

Plan Mode — **Plan Together** — is a structured planning workflow that separates thinking from doing. Instead of the AI immediately executing actions, you think the work through together on an editable board, then start it when the plan is ready.

## How It Works

1. **Enter Plan Together** -- type `/plan` in the composer (Developer mode), or ask the AI to plan something. The board opens in the right-side panel.
2. **Think it through** -- the AI is restricted to read-only tools (plus the one action that adds an item to the board). It researches your request and, when you confirm an idea, locks it onto the board. It cannot write files, run shell commands, or change anything else.
3. **Review the plan** -- read through the items. Add, edit, reorder, or remove them yourself at any time.
4. **Start working** -- click **Start working** on the board. The plan's items are handed to the AI as direction, Plan Together turns off, and the AI works through them with full tool access, checking items off as it goes.

## The Plan Panel

The Plan Together panel lives in the right-side panel alongside Terminal, Browser, Files, Artifacts, Servers, and Activity. It shows:

- **Progress count** -- how many items are done out of the total.
- **Saved indicator** -- confirms your edits have persisted.
- **Interactive checklist** -- drag the handle to reorder, click a checkbox to toggle done, click the text to rename it, and remove items with the X. Changes save automatically.
- **Start working** (or **Continue working** if the plan is already in progress) -- hands the board to the AI.
- **Clear the board** -- removes every item, after a confirmation.

Items you add yourself appear on the board immediately; the AI adds items with its `board_add_item` tool only after you confirm you want them locked in.

## Plan Statuses

A plan is stored with one of these statuses. The board itself shows the working ones as you go:

| Status | Meaning |
|--------|---------|
| **Draft** | The board is being put together and has not been started. |
| **In Progress** | The AI is actively working through the board. |
| **Confirmed** / **Completed** | Reserved for a reviewed or finished plan. |

## What Changes During Plan Together

When Plan Together is active:

- The AI **cannot** write files, run shell commands, or perform destructive actions.
- The AI **can** read files, search code, browse the web, query integrations, and add confirmed items to the board.
- The system prompt instructs the AI to plan with you rather than take action.

Once you click **Start working**, the restrictions lift and the AI works through the board with full tool access.

## Tips

- **Break big tasks into plans.** Instead of "redesign the settings page," plan first to identify all the components, routes, and tests involved.
- **Edit before starting.** The AI's items are a starting point. Add constraints, reorder steps, or remove items you'll handle manually.
- **One plan per session.** Each chat session supports one active plan. Start a new session for a separate planning effort.
