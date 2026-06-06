import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { LINKS } from "@/lib/content";

describe("Home page (happy path)", () => {
  it("renders all primary sections", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("#integrations")).not.toBeNull();
    expect(container.querySelector("#features")).not.toBeNull();
    expect(container.querySelector("#privacy")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /give it the task/i,
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer
  });

  it("exposes install CTAs that all point at the marketplace", () => {
    render(<Home />);
    const installs = screen.getAllByRole("link", { name: "Add to VS Code" });
    expect(installs.length).toBeGreaterThanOrEqual(3); // header + hero + cta
    for (const link of installs) {
      expect(link).toHaveAttribute("href", LINKS.marketplace);
    }
  });
});
