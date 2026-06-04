import { Logo } from "./Logo";
import { LINKS } from "@/lib/content";

const FOOTER_LINKS = [
  { label: "Marketplace", href: LINKS.marketplace },
  { label: "GitHub", href: LINKS.github },
  { label: "Ridvay", href: LINKS.ridvay },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo />
        <nav className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-zinc-500">© 2026 Ridvay · Apache-2.0</p>
      </div>
    </footer>
  );
}
