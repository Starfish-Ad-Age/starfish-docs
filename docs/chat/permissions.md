---
outline: deep
---

# Permissions & Safety

Starfish AI can take real actions -- delete files, modify accounts, send messages. The permission system ensures you stay in control. Every potentially impactful operation requires your explicit approval before it executes.

![Permission mode](/images/permission-prompt.png)

## Permission Modes

Starfish has three approval modes, chosen with the approval selector in the Developer-mode composer toolbar. Simple mode always runs in **Approve for me** with a quiet, per-action safety check, so it has no selector.

### Ask for approval (Recommended)

Every tool call that can create or modify data shows a permission prompt before executing. Destructive operations get a stronger, red confirmation. This is the safest option and is the default.

### Approve for me

Reads and lookups run freely. Each operation that creates or modifies data is sent to a fast pre-execution safety reviewer, which answers **allow**, **ask**, or **deny**. If the reviewer is unsure, you get a prompt. Destructive operations are hard-blocked in this mode -- Starfish never runs them, even with your approval. Switch to **Ask for approval** if you need one to go through.

### Full access

Read, create, and modify operations run with no prompt and no reviewer. Destructive operations are still hard-blocked, unclassifiable operations are still refused, and path guards and OS limits still apply.

::: warning
Full access lets the AI take actions without asking. Only enable it when you trust the current task and want maximum speed. You can switch back at any time.
:::

## Permission Levels

### Red (Danger)

Destructive or irreversible operations. These include:

- Deleting files, records, or resources
- Overwriting existing data
- Sending messages on your behalf (email, chat)
- Modifying critical account settings

The prompt uses a **red** "Destructive Action — Cannot Be Undone" banner and has no "Always allow" option.

### Amber (Caution)

Operations that create or change existing work. These include:

- Creating new files or records
- Editing data in a connected service
- Sending an email or message draft

The prompt uses an **amber** indicator for these operations.

## What a Permission Prompt Shows

Each prompt displays:

- **What it wants to do** -- a plain-English description (e.g., "Save file", "Running command", "Calendar events list").
- **Technical Details** -- an expandable "Show details" section showing the exact command, file path, or API call. Hidden by default to keep the UI clean for non-technical users.
- **Account affected** -- which connected account the action touches.
- **Can it be undone?** -- whether the change is reversible.
- **Information used** -- what the action is based on.
- For send/draft tools, a **preview of the actual message** (recipient, subject, and body) so you review what goes out.

## Accepting or Rejecting

- **Allow** -- the operation executes and the AI continues.
- **Always allow** -- grants this exact call (targets, count, recipients) for future turns. Available in Developer mode.
- **Don't allow** -- the operation is blocked. The AI is notified and adjusts its approach. In Developer mode you can add an optional reason the AI will see.

If a permission prompt is missed (e.g., during navigation), Starfish re-checks the server every 2 seconds to re-surface it. Sessions with pending permission prompts show an "Needs input" indicator in the sidebar.

## Path Guards

Certain locations are always blocked, regardless of permissions or mode. The AI cannot read, write, or execute anything in:

- `~/.ssh`, `~/.aws`, `.gnupg` directories
- `/System/` and `/Applications/` (application internals)
- Shell commands that reference `node_modules`
- Credential and environment files -- `.env` files, `id_rsa`/`id_ed25519`, `.npmrc`, `.netrc`, `.git-credentials`, `credentials.json`, `service-account*.json`, and `.pem`/`.key`/`.p12`/`.pfx` files -- unless you turn on **Allow reading credential and environment files** in Settings → Local Access.

These guards operate at the path level -- the AI never even gets a permission prompt for these locations. The request is refused before it runs.

## Read-Only Tools

Tools that cannot modify anything run without permission prompts in every mode:

- **LS** -- listing files
- **Read** -- reading file contents
- **Glob** -- searching file names
- **Grep** -- searching file contents
- **WebSearch** / **WebFetch** -- looking things up online
- Document, meeting, artifact, and timeline reads

These are safe by design and execute immediately.
