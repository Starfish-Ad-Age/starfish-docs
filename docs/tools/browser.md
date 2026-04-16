---
outline: deep
---

# Embedded Browser

Starfish includes a built-in web browser directly in the workspace. Browse the web, preview AI-generated HTML, inspect page elements, and let the AI interact with pages on your behalf.

![Embedded browser](/images/browser-overview.png)

## Features

- **Multi-tab browsing** with URL bar, back/forward, and refresh
- **AI-generated HTML preview** -- artifacts render instantly in the browser
- **Element selector** -- point-and-click tool to capture any element's details
- **Link dialog** -- open links from AI responses directly in the browser
- **Playwright integration** -- the AI can control the browser programmatically
- **Localhost support** -- test your running local dev server without leaving Starfish

## Navigation

The browser has a full URL bar. Type a URL and press Enter to navigate. The browser handles URLs intelligently:

- Full URLs load directly (e.g., `https://example.com`)
- Localhost URLs are detected automatically (e.g., `localhost:3000`)
- Plain text falls back to a Google search

Each tab maintains its own history stack. Use the back and forward buttons to navigate within a tab.

## Multi-Tab Browsing

Click the **+** button in the browser tab bar to open a new tab. Each tab has its own URL, history, and page title. Close tabs by clicking the X on the tab.

## Opening Links from Chat

When the AI includes a link in its response, clicking it opens a dialog with two options:

- **Open in Default Browser** -- opens the link in your system browser (Safari, Chrome, etc.)
- **Open in App** -- opens the link in the embedded browser panel, creating a new tab

## Element Selector

The element selector is a visual point-and-click tool that captures details about any element on the current page and inserts them into the chat.

### How to use it

1. Click the **element selector button** in the browser toolbar (available on both the Browser tab and the Artifacts tab).
2. The page gets a crosshair overlay. Hover over elements to see them highlighted with a blue outline.
3. Click an element to capture it.
4. The captured element's tag, CSS classes, CSS selector path (up to 5 levels deep), and outer HTML are inserted into the chat composer.
5. Press **Escape** to cancel without selecting.

### When to use it

- **Debugging UI** -- "This button looks wrong" + select the button so the AI sees the exact element.
- **Refining generated HTML** -- select a specific element in an artifact preview and ask the AI to change it.
- **Describing layout issues** -- instead of describing a problem in words, select the element directly.

## AI Browser Control

Through Playwright integration, the AI agent can interact with web pages:

| Action | Description |
|--------|-------------|
| Navigate | Open any URL in the browser |
| Click | Click buttons, links, and interactive elements |
| Fill forms | Enter text into input fields and forms |
| Screenshot | Capture the current page state |
| Extract content | Read text and data from the page |
| Run JavaScript | Execute custom scripts in the page context |
| Monitor network | Inspect requests and console messages |
| Handle dialogs | Accept or dismiss browser alerts |

All browser actions initiated by the AI require your approval through permission prompts.

## HTML Artifact Preview

When the AI generates HTML, CSS, or JavaScript artifacts during a conversation, they automatically render in the Artifacts tab of the browser panel. This creates a tight feedback loop:

1. Ask the AI to build a page or component
2. See it rendered in real time
3. Use the element selector to point at specific parts
4. Request changes and see updates immediately

## Electron vs Web

In the desktop app (Electron), the browser uses a `webview` tag that can load any URL, including sites that block iframes (like Google, Twitter, etc.). In the web version, the browser falls back to an `iframe` with sandbox restrictions, which limits which sites can be loaded.

## Use Cases

- **Research**: Look up documentation, reference material, or competitor sites without leaving Starfish
- **Preview generated code**: See AI-built HTML/CSS/JS rendered live
- **Test web apps**: Navigate to localhost and test your running application
- **Form automation**: Let the AI fill out repetitive forms
- **Element inspection**: Select specific UI elements to discuss with the AI
- **Competitive analysis**: Browse and extract information from websites
