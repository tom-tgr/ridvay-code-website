import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Privacy } from "@/components/Privacy";
import { PRIVACY } from "@/lib/content";

describe("Privacy", () => {
  it("renders each privacy guarantee", () => {
    const { container } = render(<Privacy />);
    expect(container.querySelector("#privacy")).not.toBeNull();
    for (const p of PRIVACY) {
      expect(screen.getByRole("heading", { name: p.title })).toBeInTheDocument();
    }
  });
});
