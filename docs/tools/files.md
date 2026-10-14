---
outline: deep
---

# File Management

The AI agent can read and write files on your local filesystem. Local Access and the permission system keep you in control of every change.

## Reading files

Starfish can list, read and search your files in every mode, whatever your Local Access setting, without asking. Secret files stay off limits (see [Blocked Paths](#blocked-paths)).

## Writing files and running commands

Writing files and running commands are **off by default**. Turn them on in **Settings → Local Access**, then choose:

- **Full access** — the agent can write anywhere on this Mac, and run commands.
- **Scoped access** — the agent can only change the folders you add; anything outside them is refused.

While access is off, Starfish can still read your files, but it cannot write files or run commands.

## Permission Model

Operations are classified before they run:

### Read-Only (No Prompt Required)

These operations run automatically when the AI needs information, in every mode:

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

In Developer mode, **Approve for me** sends each create/modify operation to a pre-execution reviewer that can allow, ask, or deny it. Only certain deletes and overwrites count as destructive, so safe steps are held less often.

## Blocked Paths

Certain sensitive places are always denied, for reading and writing, regardless of approval:

| Path | Reason |
|------|--------|
| `.ssh` | SSH keys and config |
| `.aws` | AWS credentials |
| `.gnupg` | GPG keys |
| `/Applications` | System applications |
| `/System` | macOS system files |
| Keychains | Saved passwords and keys |
| Browser password and cookie files | Your saved logins |
| Command-line tool sign-ins | Saved sign-ins for cloud and developer tools |
| Starfish's own data | The app's database, settings and saved connections |

Credential and environment files (`.env`, `id_rsa`, `.pem`, `.key`, `credentials.json`, service-account JSON, and similar) are also refused unless you turn on **Allow reading credential and environment files** in **Settings → Local Access**.

Search tools skip dependency and build output — `node_modules`, `.next`, `.git`, `dist`, `build`, `coverage` — and honor your `.gitignore`, so results stay relevant.

## Saving AI Artifacts

When the AI generates code, data, or other files during a conversation, it saves them for you. PDFs and reports never stop to ask where to save. In Developer mode, your approval setting still applies. The chat shows a clean link with just the file name; hover it and click the folder button (**Show in Finder**) to see where the file lives.

This works for any file type -- source code, configuration files, data exports, images, and more.

## Use Cases

- **Code editing**: Let the AI read your codebase, suggest changes, and apply them with your approval
- **Config management**: Generate or update configuration files (`.env`, `tsconfig.json`, Docker files)
- **Log analysis**: Point the AI at log files for debugging and pattern recognition
- **Data export**: Save AI-generated reports, CSVs, or structured data to disk
