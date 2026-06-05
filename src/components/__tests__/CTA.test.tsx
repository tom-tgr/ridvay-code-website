import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTA } from "@/components/CTA";
import { LINKS } from "@/lib/content";

describe("CTA", () => {
  it("renders the closing call to action", () => {
    render(<CTA />);
    expect(
      screen.getByRole("heading", { name: /keep it private/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Add to VS Code" }),
    ).toHaveAttribute("href", LINKS.marketplace);
    expect(
      screen.getByRole("link", { name: "Star on GitHub" }),
    ).toHaveAttribute("href", LINKS.github);
  });
});
