import { describe, it, expect } from "vitest";
import { metadata } from "@/app/layout";

describe("layout metadata", () => {
  it("sets an SEO title and description", () => {
    expect(String(metadata.title)).toMatch(/ridvay code/i);
    expect(String(metadata.description)).toMatch(/local-first/i);
  });

  it("declares local-first keywords", () => {
    const kw = (metadata.keywords as string[]).join(" ").toLowerCase();
    expect(kw).toContain("ollama");
    expect(kw).toContain("lm studio");
    expect(kw).toContain("claude code");
  });

  it("configures open graph for link sharing", () => {
    expect(metadata.openGraph?.url).toBeTruthy();
    expect(metadata.openGraph?.images).toBeTruthy();
  });
});
