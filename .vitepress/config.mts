import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "Starfish",
  description: "The AI workspace for teams — documentation and guides",
  srcDir: "docs",
  outDir: ".vitepress/dist",
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
  ],

  themeConfig: {
    logo: "/images/logo.png",
    siteTitle: false,

    nav: [
      { text: "Guide", link: "/getting-started/introduction" },
      { text: "Studio", link: "/studio/overview" },
      { text: "Meetings", link: "/meetings/overview" },
      { text: "Workspace", link: "/workspace/overview" },
      { text: "Integrations", link: "/integrations/overview" },
      { text: "Tools", link: "/tools/terminal" },
      { text: "Changelog", link: "/changelog" },
      { text: "Legal", link: "/legal/terms" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Quick Start", link: "/getting-started/quick-start" },
          { text: "Setup Wizard", link: "/getting-started/setup-wizard" },
          { text: "AI Key & Model Levels", link: "/getting-started/ai-key-and-model-levels" },
        ],
      },
      {
        text: "Chat & AI",
        items: [
          { text: "Using Chat", link: "/chat/using-chat" },
          { text: "Models & Providers", link: "/chat/models" },
          { text: "Auto Model Routing", link: "/chat/auto-routing" },
          { text: "Plan Mode", link: "/chat/plan-mode" },
          { text: "Prompt Builder", link: "/chat/prompt-builder" },
          { text: "Permissions & Safety", link: "/chat/permissions" },
          { text: "Artifacts", link: "/chat/artifacts" },
        ],
      },
      {
        text: "Studio",
        items: [
          { text: "Slide decks", link: "/studio/overview" },
        ],
      },
      {
        text: "Meetings",
        items: [
          { text: "Overview", link: "/meetings/overview" },
        ],
      },
      {
        text: "Workspace",
        items: [
          { text: "Overview", link: "/workspace/overview" },
          { text: "Workspaces", link: "/workspace/projects" },
          { text: "Folders", link: "/workspace/folders" },
          { text: "Knowledge Files", link: "/workspace/knowledge-files" },
          { text: "Workspace & Folder Memory", link: "/workspace/memory" },
          { text: "Teams", link: "/workspace/teams" },
        ],
      },
      {
        text: "Agents",
        items: [
          { text: "Overview", link: "/agents/overview" },
          { text: "Managing Agents", link: "/agents/managing-agents" },
          { text: "Subagents", link: "/agents/subagents" },
        ],
      },
      {
        text: "Integrations",
        items: [
          { text: "Overview", link: "/integrations/overview" },
          { text: "Google Workspace", link: "/integrations/google-workspace" },
          { text: "Google Marketing Suite", link: "/integrations/google-marketing" },
          { text: "ClickUp", link: "/integrations/clickup" },
          { text: "GitHub", link: "/integrations/github" },
          { text: "Vercel", link: "/integrations/vercel" },
          { text: "Facebook Ads", link: "/integrations/facebook-ads" },
          { text: "TikTok", link: "/integrations/tiktok" },
          { text: "Zapier", link: "/integrations/zapier" },
          { text: "Canva", link: "/integrations/canva" },
          { text: "GoHighLevel", link: "/integrations/gohighlevel" },
          { text: "Apify", link: "/integrations/apify" },
          { text: "Stitch", link: "/integrations/stitch" },
          { text: "Playwright", link: "/integrations/playwright" },
        ],
      },
      {
        text: "Built-in Tools",
        items: [
          { text: "Terminal", link: "/tools/terminal" },
          { text: "Browser", link: "/tools/browser" },
          { text: "File Management", link: "/tools/files" },
          { text: "Designer", link: "/tools/designer" },
          { text: "Search Studio", link: "/tools/search-studio" },
        ],
      },
      {
        text: "Media",
        items: [
          { text: "Media page", link: "/media/overview" },
          { text: "Image Generation", link: "/media/image-generation" },
          { text: "Video Generation", link: "/media/video-generation" },
        ],
      },
      {
        text: "Automations",
        items: [
          { text: "Overview", link: "/automations/overview" },
        ],
      },
      {
        text: "Voice",
        items: [
          { text: "Voice assistant", link: "/voice/voice-assistant" },
          { text: "Ask about this screen", link: "/voice/ask-about-this-screen" },
        ],
      },
      {
        text: "Phone",
        items: [
          { text: "Starfish on your phone", link: "/phone/overview" },
          { text: "Work on your other Mac", link: "/phone/other-mac" },
        ],
      },
      {
        text: "Settings",
        items: [
          { text: "General Settings", link: "/settings/general" },
          { text: "Memory", link: "/settings/memory" },
          { text: "Storage", link: "/settings/storage" },
          { text: "Keyboard Shortcuts", link: "/settings/keyboard-shortcuts" },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms of Service", link: "/legal/terms" },
          { text: "Privacy Policy", link: "/legal/privacy" },
          { text: "Open-source licences", link: "/legal/open-source" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Built by Starfish Solutions",
      copyright: "Copyright © 2026 Starfish Solutions",
    },
  },

  // Force dark mode as default
  appearance: "dark",

  vite: {},
});
