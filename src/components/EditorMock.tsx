// Decorative, static mock of Ridvay Code orchestrating a task inside an editor.
// Purely presentational — no interactivity, safe for static export.

function Dot({ className }: { className: string }) {
  return <span className={`h-3 w-3 rounded-full ${className}`} />;
}

export function EditorMock() {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] text-left shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-3">
        <Dot className="bg-[#ff5f57]" />
        <Dot className="bg-[#febc2e]" />
        <Dot className="bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">
          api/server.ts — ridvay-project
        </span>
        <span className="ml-auto hidden items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-zinc-400 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          Claude · Sonnet
        </span>
      </div>
      <div className="flex">
        <div className="hidden w-12 flex-col items-center gap-5 border-r border-white/10 py-5 sm:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 font-semibold text-primary">
            r
          </span>
          <Dot className="bg-white/15" />
          <Dot className="bg-white/15" />
          <Dot className="bg-white/15" />
        </div>
        <div className="flex-1 space-y-4 p-5 text-sm">
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-primary/15 px-4 py-2 text-zinc-100">
            Add rate limiting to the API, with tests.
          </div>
          <div className="space-y-3 text-zinc-300">
            <p>Planned 3 subtasks — running them now:</p>
            <ul className="space-y-1.5 font-mono text-[13px] text-zinc-400">
              <li>
                <span className="text-[#28c840]">✓</span> Added{" "}
                <span className="text-zinc-200">rateLimiter</span> middleware (token bucket)
              </li>
              <li>
                <span className="text-[#28c840]">✓</span> Wired it into{" "}
                <span className="text-zinc-200">4 routes</span>
              </li>
              <li>
                <span className="text-[#28c840]">✓</span> Wrote{" "}
                <span className="text-zinc-200">rateLimiter.test.ts</span> · 6 cases
              </li>
            </ul>
            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-[13px] leading-relaxed text-zinc-300">
              <span className="text-[#ff7b72]">export const</span> rateLimiter ={" "}
              <span className="text-[#ff7b72]">(</span>opts<span className="text-[#ff7b72]">)</span> {"=>"}
              {"\n"}  <span className="text-[#d2a8ff]">bucket</span>(opts.max, opts.windowMs);
            </pre>
            <p className="font-medium text-primary">Task complete — 6/6 tests passing ✓</p>
          </div>
        </div>
      </div>
    </div>
  );
}
