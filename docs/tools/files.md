---
outline: deep
---

# File Management

The AI agent can read and write files on your local filesystem. Local Access and the permission system keep you in control of every operation.

## Turning it on

Local file access is **off by default**. Turn it on in **Settings → Local Access**, then choose:

- **Full access** — the agent can read and write anywhere on this Mac, and run commands.
- **Scoped access** — the agent can only touch the folders you add; anything outside them is refused.

While access is off, every file and terminal tool refuses to run.

## Permission Model

Operations are classified before they run:

### Read-Only (No Prompt Required)

These operations run automatically when the AI needs information:

- List directory contents
- Read file contents
- Search within files

### Write Operations

Writes are classified as **create**, **modify**, or **destructive**, then handled by the current permission mode:

| Mode | Create / modify | Destructive (delete, trash, overwrite) |
|------|-----------------|-----------------------------------------|
| **Ask for approval** | Prompts before every write | Prompts, with a "cannot be undone" warning |
| **Approve for me** | Runs automatically | Hard-blocked — never runs, not even with a prompt |
| **Full access** | Runs automatically | Still subject to the path guards and OS limits |

In Developer mode, **Approve for me** sends each create/modify operation to a pre-execution reviewer that can allow, ask, or deny it.

## Blocked Paths

Certain sensitive directories are always denied, regardless of approval:

| Path | Reason |
|------|--------|
| `.ssh` | SSH keys and config |
| `.aws` | AWS credentials |
| `.gnupg` | GPG keys |
| `/Applications` | System applications |
| `/System` | macOS system files |

Credential and environment files (`.env`, `id_rsa`, `.pem`, `.key`, `credentials.json`, service-account JSON, and similar) are also refused unless you turn on **Allow reading credential and environment files** in **Settings → Local Access**.

Search tools skip dependency and build output — `node_modules`, `.next`, `.git`, `dist`, `build`, `coverage` — and honor your `.gitignore`, so results stay relevant.

## Saving AI Artifacts

When the AI generates code, data, or other files during a conversation, you can save them to any local directory:

1. The AI generates a file artifact
2. You approve the save location
3. The file is written to your filesystem

This works for any file type -- source code, configuration files, data exports, images, and more.

## Use Cases

- **Code editing**: Let the AI read your codebase, suggest changes, and apply them with your approval
- **Config management**: Generate or update configuration files (`.env`, `tsconfig.json`, Docker files)
- **Log analysis**: Point the AI at log files for debugging and pattern recognition
- **Data export**: Save AI-generated reports, CSVs, or structured data to disk
