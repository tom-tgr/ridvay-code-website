// Single source of truth for site copy + links.
// Positioning: local-first / private AI coding agent (Ollama, LM Studio, Claude Code).

export const BRAND = {
  name: "Ridvay Code",
  tagline: "Your senior AI developer — running entirely on your machine",
  description:
    "Ridvay Code is a local-first AI coding agent for VS Code. It writes code, fixes bugs, generates tests, and understands your whole codebase — powered by your own local models or Claude Code. No cloud account, no API middleman, and zero telemetry. Your code never leaves your machine — and you can verify it.",
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
    key: "ollama",
    name: "Ollama",
    tagline: "Local llama & friends",
    description:
      "Run Llama, Qwen, DeepSeek, Mistral and other open models locally with a single command. Zero config in Ridvay.",
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
  {
    key: "claude",
    name: "Claude Code",
    tagline: "Your Claude, direct",
    description:
      "Call your local Claude Code CLI directly — senior-level reasoning on your own subscription, no extra keys.",
    href: LINKS.claudeCode,
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
    title: "Your code never leaves your machine",
    description:
      "Inference runs locally via Ollama or LM Studio, or through your own Claude Code. There are no Ridvay servers in the loop.",
  },
  {
    title: "No account, no keys to us",
    description:
      "There's no Ridvay cloud to sign up for and no API middleman. You bring your own compute and stay in control.",
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
