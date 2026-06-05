import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/Logo";

describe("Logo", () => {
  it("renders the brand image and wordmark by default", () => {
    render(<Logo />);
    expect(screen.getByRole("img", { name: "Ridvay" })).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
  });

  it("can hide the wordmark", () => {
    render(<Logo withWordmark={false} />);
    expect(screen.getByRole("img", { name: "Ridvay" })).toBeInTheDocument();
    expect(screen.queryByText("Code")).toBeNull();
  });
});
