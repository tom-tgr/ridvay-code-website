import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom can't run next/image's optimization layer — render a plain <img>.
vi.mock("next/image", async () => {
  const { createElement } = await import("react");
  return {
    __esModule: true,
    default: (props: Record<string, unknown>) => {
      const rest = { ...props };
      // These are next/image-only props, invalid on a raw <img>.
      delete rest.priority;
      delete rest.fill;
      delete rest.placeholder;
      delete rest.blurDataURL;
      return createElement("img", rest);
    },
  };
});

// next/font/google fetches fonts at import time — stub for layout tests.
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans", className: "font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono", className: "font-geist-mono" }),
}));

afterEach(() => {
  cleanup();
});
