import { InstallButton } from "./InstallButton";
import { EditorMock } from "./EditorMock";
import { BRAND, LINKS } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(41,96,234,0.18),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Claude-powered · local-capable · zero telemetry
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Your senior AI developer.{" "}
          <span className="text-primary">Claude-powered, or fully local.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-400">
          {BRAND.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <InstallButton className="h-12 w-full sm:w-auto" />
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
          >
            View on GitHub
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          Works with{" "}
          <span className="text-zinc-300">Claude</span> ·{" "}
          <span className="text-zinc-300">Ollama</span> ·{" "}
          <span className="text-zinc-300">LM Studio</span>
        </p>
        <div className="mt-16">
          <EditorMock />
        </div>
      </div>
    </section>
  );
}
