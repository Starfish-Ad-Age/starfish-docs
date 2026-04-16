---
outline: deep
---

# Plan Mode

Plan Mode is a structured planning workflow that separates thinking from doing. Instead of the AI immediately executing actions, it first produces a clear plan for your review. You approve, edit, or reject the plan before any work begins.

## How It Works

1. **Enter Plan Mode** -- click the "Plan New Idea" pill below the composer, or ask the AI to plan something.
2. **AI produces a plan** -- the AI is restricted to read-only tools (no file writes, no shell commands). It researches your request and returns a structured markdown checklist.
3. **Review the plan** -- read through the steps. Edit, add, or remove items as needed.
4. **Save the plan** -- click "Save as Plan" on any assistant message to persist it. The plan appears in the Plan tab on the right panel.
5. **Execute** -- click the green "Execute" button in the Plan panel. The AI regains full tool access and works through the checklist, checking items off as it goes.

## The Plan Panel

The Plan panel lives in the right-side panel alongside Terminal, Browser, and Artifacts. It shows:

- **Status badge** -- Draft, Confirmed, In Progress, or Completed.
- **Interactive checklist** -- click any checkbox to toggle it between done and not done. Changes persist automatically.
- **Execute button** -- starts execution. The plan content is injected into the AI's system prompt so it stays on track.
- **Delete button** -- removes the plan from the session.
- **Last updated timestamp** -- shows when the plan was last modified.

## Plan Statuses

| Status | Meaning |
|--------|---------|
| **Draft** | Plan has been saved but not yet confirmed or started. |
| **Confirmed** | Plan has been reviewed and approved for execution. |
| **In Progress** | AI is actively working through the plan steps. |
| **Completed** | All steps have been finished. |

## What Changes During Plan Mode

When Plan Mode is active:

- The AI **cannot** write files, run shell commands, or perform destructive actions.
- The AI **can** read files, search code, browse the web, and query integrations.
- The system prompt instructs the AI to produce a step-by-step plan rather than take action.

Once you click Execute, all restrictions are lifted and the AI works through the plan with full tool access.

## Tips

- **Break big tasks into plans.** Instead of "redesign the settings page," plan first to identify all the components, routes, and tests involved.
- **Edit before executing.** The AI's plan is a starting point. Add constraints, reorder steps, or remove items you'll handle manually.
- **One plan per session.** Each chat session supports one active plan. Start a new session for a separate planning effort.
