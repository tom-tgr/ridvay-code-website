import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Integrations } from "@/components/Integrations";
import { INTEGRATIONS } from "@/lib/content";

describe("Integrations", () => {
  it("renders an outbound card for each integration", () => {
    const { container } = render(<Integrations />);
    expect(container.querySelector("#integrations")).not.toBeNull();

    for (const i of INTEGRATIONS) {
      const heading = screen.getByRole("heading", { name: i.name });
      const link = heading.closest("a");
      expect(link).toHaveAttribute("href", i.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
