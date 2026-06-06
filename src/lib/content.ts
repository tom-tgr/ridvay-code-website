// Single source of truth for site copy + links.
// Positioning: an autonomous coding orchestrator for VS Code — give it a goal and
// it plans, runs, and finishes the work on its own. Powered by Claude or local
// models. Zero telemetry.

export const BRAND = {
  name: "Ridvay Code",
  tagline:
    "An autonomous coding orchestrator for VS Code — give it the task, it does the rest.",
  description:
    "Ridvay Code is an AI coding orchestrator. Hand it a goal and it plans the work, splits it into subtasks, writes the code, runs the tests, and fixes what breaks — on its own, right in your editor. Powered by Claude or your local models. Zero telemetry, and you can prove it.",
} as const;

export const LINKS = {
  marketplace:
    "https://marketplace.visualstudio.com/items?itemName=ridvay.ridvay-code",
  github: "https://github.com/tom-tgr/ridvay-code",
  ridvay: "https://www.ridvay.com",
  ollama: "https://ollama.com",
  lmstudio: "https://lmstudio.ai",
  claudeCode: "https://www.anthropic.com/claude-code",
  site: "https://code.ridvay.com",
} as const;

export const NAV: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Integrations", href: "#integrations" },
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "GitHub", href: LINKS.github },
];

export type Integration = {
  key: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
};

export const INTEGRATIONS: ReadonlyArray<Integration> = [
  {
    key: "claude",
    name: "Claude Code",
    tagline: "Frontier power, your account",
    description:
      "Run the orchestrator on Claude for top-tier reasoning. Bring your own Claude — your account or API key — with no Ridvay middleman in between.",
    href: LINKS.claudeCode,
  },
  {
    key: "ollama",
    name: "Ollama",
    tagline: "Local llama & friends",
    description:
      "Run Qwen, DeepSeek, Llama and other open models locally with a single command. Fully offline, fully free.",
    href: LINKS.ollama,
  },
  {
    key: "lmstudio",
    name: "LM Studio",
    tagline: "Your local model server",
    description:
      "Point Ridvay at LM Studio's local server and use any GGUF model on your own hardware, fully offline.",
    href: LINKS.lmstudio,
  },
];

export type Feature = { key: string; title: string; description: string };

export const FEATURES: ReadonlyArray<Feature> = [
  {
    key: "generate",
    title: "Plans, then orchestrates",
    description:
      "Decomposes your goal into subtasks, runs each one to completion, and stitches the results back together.",
  },
  {
    key: "refactor",
    title: "Runs the full loop",
    description:
      "Edits, runs commands, reads the output, and adjusts — without stopping to ask at every step.",
  },
  {
    key: "debug",
    title: "Fixes what breaks",
    description:
      "Catches failing commands and tests and keeps working the problem until it's actually resolved.",
  },
  {
    key: "test",
    title: "Tests until it's green",
    description:
      "Writes and runs tests, then iterates on its own code until they pass.",
  },
  {
    key: "docs",
    title: "Works across the whole repo",
    description:
      "Reads and edits many files at once, keeping a large change coherent from end to end.",
  },
  {
    key: "explain",
    title: "You hold the leash",
    description:
      "Let it run autonomously, or approve step by step. You decide how much rope it gets.",
  },
];

export type PrivacyPoint = { title: string; description: string };

export const PRIVACY: ReadonlyArray<PrivacyPoint> = [
  {
    title: "No telemetry — and you can prove it",
    description:
      "We don't ship a tracker at all. No analytics, no usage data, no phone-home — nothing to opt out of. Grep the published extension bundle and check for yourself.",
  },
  {
    title: "Your code goes only where you choose",
    description:
      "Run fully local with Ollama or LM Studio and nothing leaves your device — or use your own Claude, where requests go straight to Anthropic on your account. Never through a Ridvay server.",
  },
  {
    title: "No account, no keys to us",
    description:
      "There's no Ridvay cloud to sign up for and no API middleman. You bring your own compute or your own Claude, and stay in control.",
  },
  {
    title: "Open source",
    description:
      "Apache-2.0 licensed and fully auditable, built on the open Roo Code agent. Inspect exactly what it does.",
  },
];

export const LANGUAGES: ReadonlyArray<string> = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C#",
  "Java",
  "PHP",
  "Go",
  "C++",
];
