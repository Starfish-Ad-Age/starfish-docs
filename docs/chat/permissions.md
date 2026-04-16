---
outline: deep
---

# Permissions & Safety

Starfish AI can take real actions -- delete files, modify accounts, send messages. The permission system ensures you stay in control. Every potentially impactful operation requires your explicit approval before it executes.

![Permission mode](/images/permission-prompt.png)

## Permission Modes

Starfish has two permission modes. Switch between them using the lock icon in the composer toolbar.

### Default Mode (Recommended)

Every tool call that can modify data shows a permission prompt before executing. This is the safest option and is active by default.

### Full Access Mode

Tools execute without permission prompts. A confirmation dialog warns you before enabling this mode. Steer messages (mid-turn course correction) still work in Full Access mode.

::: warning
Full Access mode lets the AI take actions without asking. Only enable it when you trust the current task and want maximum speed. You can switch back to Default mode at any time.
:::

## Permission Levels

### Red (Danger)

Destructive or irreversible operations. These include:

- Deleting files, records, or resources
- Overwriting existing data
- Sending messages on your behalf (email, chat)
- Modifying critical account settings

The permission prompt uses a **red** indicator to flag these operations.

### Yellow (Caution)

Standard operations that access or create resources. These include:

- Creating new files or records
- Reading data from external services
- Accessing third-party APIs

The permission prompt uses an **amber** indicator for these operations.


## What a Permission Prompt Shows

Each prompt displays:

- **Operation name** -- a human-readable label (e.g., "Create file", "Running command", "Calendar events list").
- **Description** -- what the operation will do.
- **Technical Details** -- an expandable section showing the exact command, file path, or API call. Hidden by default to keep the UI clean for non-technical users.

## Accepting or Rejecting

- **Accept** -- the operation executes and the AI continues.
- **Reject** -- the operation is blocked. The AI is notified and adjusts its approach.

If a permission prompt is missed (e.g., during navigation), Starfish polls the server every second to re-surface it. Sessions with pending permission prompts show an amber "Needs input" indicator in the sidebar.

## Path Guards

Certain directories are always blocked, regardless of permissions or mode. The AI cannot read, write, or execute anything in:

- `node_modules`
- `.ssh`
- `.aws`
- `.env` files
- System directories

These guards operate at the path level -- the AI never even gets a permission prompt for these locations. The request is silently denied.

## Read-Only Tools

Tools that cannot modify anything run without permission prompts in both modes:

- **LS** -- listing files
- **Read** -- reading file contents
- **Glob** -- searching file names
- **Grep** -- searching file contents

These are safe by design and execute immediately.
