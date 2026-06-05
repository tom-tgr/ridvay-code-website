import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";
import { LINKS } from "@/lib/content";

describe("Footer", () => {
  it("links to marketplace, github, and ridvay", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: "Marketplace" }),
    ).toHaveAttribute("href", LINKS.marketplace);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      LINKS.github,
    );
    expect(screen.getByRole("link", { name: "Ridvay" })).toHaveAttribute(
      "href",
      LINKS.ridvay,
    );
  });

  it("shows the open-source license", () => {
    render(<Footer />);
    expect(screen.getByText(/apache-2\.0/i)).toBeInTheDocument();
  });
});
