import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";
import { LINKS } from "@/lib/content";

describe("Hero", () => {
  it("shows the headline and supporting copy", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/your senior ai developer/i);
    expect(h1).toHaveTextContent(/running on your machine/i);
    expect(
      screen.getByText(/no cloud account, no api middleman/i),
    ).toBeInTheDocument();
  });

  it("offers install and GitHub actions", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: "Add to VS Code" }),
    ).toHaveAttribute("href", LINKS.marketplace);
    expect(
      screen.getByRole("link", { name: "View on GitHub" }),
    ).toHaveAttribute("href", LINKS.github);
  });

  it("names the three supported runtimes", () => {
    render(<Hero />);
    expect(screen.getByText("Ollama")).toBeInTheDocument();
    expect(screen.getByText("LM Studio")).toBeInTheDocument();
    expect(screen.getByText("Claude Code")).toBeInTheDocument();
  });
});
