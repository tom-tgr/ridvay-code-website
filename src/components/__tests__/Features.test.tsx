import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Features } from "@/components/Features";
import { FEATURES } from "@/lib/content";

describe("Features", () => {
  it("lists every feature with a heading", () => {
    const { container } = render(<Features />);
    expect(container.querySelector("#features")).not.toBeNull();
    for (const f of FEATURES) {
      expect(screen.getByRole("heading", { name: f.title })).toBeInTheDocument();
    }
  });
});
