import { PRIVACY } from "@/lib/content";

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-16 border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Truly private by design
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            No cloud account, no data sharing — privacy isn&apos;t a setting, it&apos;s
            the architecture.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRIVACY.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
