// Single source of truth for site copy + links.
// Positioning: a private AI coding agent for VS Code — bring Claude for frontier
// power, or run fully local with Ollama / LM Studio. Zero telemetry either way.

export const BRAND = {
  name: "Ridvay Code",
  tagline: "Your senior AI developer in VS Code — bring Claude, or go fully local.",
  description:
    "Ridvay Code is a free, open-source AI coding agent for VS Code. Drive Claude from a real agent UI for frontier-level coding, or run fully local and private on your own models with Ollama and LM Studio. No Ridvay account, no middleman, and zero telemetry — and you can verify it.",
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
      "Drive Claude from a full agent UI in VS Code. Bring your own Claude — your account or API key — with no Ridvay middleman in between.",
    href: LINKS.claudeCode,
  },
  {
    key: "ollama",
    name: "Ollama",
    tagline: "Local llama & friends",
    description:
      "Run Llama, Qwen, DeepSeek, Mistral and other open models locally with a single command. Fully offline, fully free.",
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
    title: "Intelligent code generation",
    description:
      "Describe functions, classes, or whole modules in plain English and let the agent build them.",
  },
  {
    key: "refactor",
    title: "Advanced refactoring",
    description:
      "Restructure and optimize existing code for readability and performance, even across large codebases.",
  },
  {
    key: "debug",
    title: "Smart debugging",
    description:
      "Pinpoint, explain, and fix intricate bugs so you spend less time stuck and more time building.",
  },
  {
    key: "test",
    title: "Automated tests",
    description:
      "Generate comprehensive unit and integration tests to keep your code robust and reliable.",
  },
  {
    key: "docs",
    title: "Context-aware docs",
    description:
      "Produce clear docstrings and comments that accurately reflect what your code actually does.",
  },
  {
    key: "explain",
    title: "Deep code understanding",
    description:
      "Ask about confusing files or blocks and get detailed, easy-to-follow explanations.",
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
