import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { InstallButton } from "@/components/InstallButton";
import { LINKS } from "@/lib/content";

describe("InstallButton", () => {
  it("renders the default CTA pointing at the marketplace", () => {
    render(<InstallButton />);
    const link = screen.getByRole("link", { name: "Add to VS Code" });
    expect(link).toHaveAttribute("href", LINKS.marketplace);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("accepts a custom label and className", () => {
    render(<InstallButton className="h-12">Get Ridvay Code</InstallButton>);
    const link = screen.getByRole("link", { name: "Get Ridvay Code" });
    expect(link).toHaveClass("h-12");
  });
});
