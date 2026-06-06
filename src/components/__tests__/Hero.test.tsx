import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";
import { LINKS } from "@/lib/content";

describe("Hero", () => {
  it("shows the headline and supporting copy", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/give it the task/i);
    expect(h1).toHaveTextContent(/orchestrates the rest/i);
    expect(
      screen.getByText(/splits it into subtasks/i),
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
    expect(screen.getByText("Claude")).toBeInTheDocument();
    expect(screen.getByText("Ollama")).toBeInTheDocument();
    expect(screen.getByText("LM Studio")).toBeInTheDocument();
  });
});
