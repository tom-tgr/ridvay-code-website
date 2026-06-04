import { FEATURES } from "@/lib/content";
import { FeatureIcon } from "./FeatureIcon";

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Senior-level development power
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Not another autocomplete. Ridvay Code understands context, tackles
            hard problems, and works across codebases of any size — all locally.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.key}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-primary/40 hover:bg-white/[0.04]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <FeatureIcon name={feature.key} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
