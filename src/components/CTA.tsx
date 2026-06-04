import { InstallButton } from "./InstallButton";
import { LINKS } from "@/lib/content";

export function CTA() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Code with AI. Keep it private.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
          Install Ridvay Code and point it at your local model or Claude Code in
          under a minute.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <InstallButton className="h-12 w-full sm:w-auto" />
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
