import { INTEGRATIONS } from "@/lib/content";

export function Integrations() {
  return (
    <section
      id="integrations"
      className="scroll-mt-16 border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bring your own model
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Ridvay Code runs on compute you control — local models or your own
            Claude. Nothing routes through our servers.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {INTEGRATIONS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.04]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 font-semibold text-primary">
                {item.name.charAt(0)}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {item.tagline}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm text-zinc-300 transition-transform group-hover:translate-x-0.5">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
