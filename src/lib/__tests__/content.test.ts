import { describe, it, expect } from "vitest";
import {
  BRAND,
  LINKS,
  NAV,
  INTEGRATIONS,
  FEATURES,
  PRIVACY,
  LANGUAGES,
} from "@/lib/content";

describe("site content", () => {
  it("brands as Ridvay Code and sells Claude + local", () => {
    expect(BRAND.name).toBe("Ridvay Code");
    expect(BRAND.tagline.length).toBeGreaterThan(0);
    expect(BRAND.description).toMatch(/claude/i);
    expect(BRAND.description).toMatch(/local/i);
  });

  it("points install at the ridvay.ridvay-code marketplace item", () => {
    expect(LINKS.marketplace).toContain("itemName=ridvay.ridvay-code");
    expect(LINKS.marketplace).toMatch(/^https:\/\//);
  });

  it("exposes exactly the three integrations, Claude first", () => {
    expect(INTEGRATIONS.map((i) => i.key)).toEqual([
      "claude",
      "ollama",
      "lmstudio",
    ]);
  });

  it("never advertises a competing cloud provider or a Ridvay API", () => {
    const blob = JSON.stringify({
      BRAND,
      INTEGRATIONS,
      FEATURES,
      PRIVACY,
    }).toLowerCase();
    expect(blob).not.toContain("openai");
    expect(blob).not.toContain("ridvay api");
  });

  it("uses https for every external link", () => {
    for (const url of Object.values(LINKS)) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it("has the expected section counts", () => {
    expect(FEATURES).toHaveLength(6);
    expect(PRIVACY).toHaveLength(4);
    expect(NAV).toHaveLength(4);
    expect(LANGUAGES.length).toBeGreaterThanOrEqual(4);
  });

  it("leads the privacy story with the zero-telemetry edge", () => {
    const hasTelemetryPoint = PRIVACY.some(
      (p) => /telemetry/i.test(p.title) || /telemetry/i.test(p.description),
    );
    expect(hasTelemetryPoint).toBe(true);
    expect(BRAND.description).toMatch(/telemetry/i);
  });

  it("gives every integration a name, tagline, description, and https href", () => {
    for (const i of INTEGRATIONS) {
      expect(i.name).toBeTruthy();
      expect(i.tagline).toBeTruthy();
      expect(i.description).toBeTruthy();
      expect(i.href).toMatch(/^https:\/\//);
    }
  });
});
