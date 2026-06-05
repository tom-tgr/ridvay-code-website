import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { NAV, LINKS } from "@/lib/content";

describe("Header", () => {
  it("renders the wordmark and every nav link", () => {
    render(<Header />);
    expect(screen.getByText("Code")).toBeInTheDocument(); // wordmark accent
    for (const item of NAV) {
      expect(
        screen.getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", item.href);
    }
  });

  it("includes an install CTA", () => {
    render(<Header />);
    expect(
      screen.getByRole("link", { name: "Add to VS Code" }),
    ).toHaveAttribute("href", LINKS.marketplace);
  });
});
