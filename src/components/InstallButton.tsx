import type { ReactNode } from "react";
import { LINKS } from "@/lib/content";

export function InstallButton({
  className = "",
  children = "Add to VS Code",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={LINKS.marketplace}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-dark ${className}`}
    >
      {children}
    </a>
  );
}
