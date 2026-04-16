---
outline: deep
---

# Embedded Terminal

Starfish includes a full terminal emulator built into the workspace. Run shell commands, manage servers, and execute builds without switching windows.

## How It Works

The terminal spawns real shell processes (zsh login shell) using xterm.js and node-pty. It behaves identically to your system terminal -- same shell config, same PATH, same environment variables.

The terminal lives in the right-side panel alongside the browser, artifacts, and plan tabs. It persists across tab switches -- switching to the browser tab and back does not kill your shell session.

## Multi-Tab Support

Open multiple terminal sessions in parallel:

- **New tab**: `Cmd + T`
- **Close tab**: `Cmd + W`
- Switch between tabs by clicking the tab bar (appears when more than one tab is open)

Each tab spawns an independent shell process. Closing a tab kills its associated PTY process.

## Font Size

Zoom the terminal text independently of the rest of the app:

| Shortcut | Action |
|----------|--------|
| `Cmd + +` | Increase font size |
| `Cmd + -` | Decrease font size |
| `Cmd + 0` | Reset to default |

Font size range is 9px to 24px.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd + T` | New tab |
| `Cmd + W` | Close tab |
| `Cmd + K` | Clear scrollback |
| `Cmd + L` | Clear scrollback (alternative) |
| `Cmd + C` | Copy selection (or send SIGINT if nothing selected) |
| `Cmd + V` | Paste from clipboard |
| `Cmd + A` | Select all |

## Responsive Resize

The terminal automatically resizes when you resize the panel (drag the left edge) or the app window. The PTY dimensions update to match, so full-screen programs like `vim` or `htop` render correctly.

## AI Command Execution

The AI agent can execute terminal commands on your behalf. Every command triggers a permission prompt before running -- you always approve or deny before anything executes.

This enables workflows like:

- "Run `npm install` and fix any errors"
- "Check the git log for the last 5 commits"
- "Start the dev server and tell me the URL"

## Use Cases

- **Build and test**: Run builds, execute test suites, inspect output
- **Git operations**: Stage, commit, push, and resolve conflicts
- **Server management**: Start/stop local servers, check ports, tail logs
- **Package management**: Install dependencies, audit packages, update versions
- **General shell tasks**: File operations, environment setup, scripting
