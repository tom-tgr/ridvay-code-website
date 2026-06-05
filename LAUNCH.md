# Ridvay Code — launch kit

Goal: **1,000 users in 2 weeks.** Hook: a *local-first, private* AI coding agent —
free with Ollama / LM Studio, or your own Claude Code. Open source (Apache-2.0),
built on Roo Code.

Audiences ranked by fit: **r/LocalLLaMA** > **Show HN** > **X/Twitter** > VS Code
Marketplace SEO. Post to the best-fit community first, learn, then widen.

---

## ⚠️ Pre-flight checklist — do NOT post until every box is true

- [ ] Marketplace listing **published** (publisher `ridvay`); icon, README, and screenshots render.
- [ ] **Open VSX** published (so non-MS VS Code builds — VSCodium, Cursor — can install).
- [ ] `code.ridvay.com` DNS live (CNAME + TXT) and HTTPS cert issued.
- [ ] Every Marketplace/GitHub link in the posts resolves (no 404 — the #1 launch-day own-goal).
- [x] **Telemetry verified — there is none.** Checked: no posthog/analytics in any
      dependency, no `captureEvent`/`TelemetryService` in `src` or `packages`, and a grep of
      the shipping `dist/extension.js` bundle finds zero telemetry code. `PRIVACY.md` rewritten
      to match. This flipped from a risk into a **headline** — lead with "no telemetry,
      verifiable in the bundle."
- [ ] Clean-install smoke test: fresh VS Code → install → connect Ollama in **under a minute**
      (that's the CTA promise on the site — it must be true).
- [ ] One screenshot + one short GIF of a real local-model edit loop (Marketplace + X need visuals).
- [ ] GitHub README has a 30-second quickstart at the very top.

---

## 1) r/LocalLLaMA (post FIRST)

Etiquette: this sub dislikes overt self-promo. Frame as "I built/forked this," be technical,
put **links in the first comment**, and actually engage. Best window: Tue–Thu, ~9–11am ET.

**Title:**
> I forked Roo Code into a local-first VS Code agent — Ollama / LM Studio / your own Claude Code, no cloud account

**Body:**
> r/LocalLLaMA has basically been my spec sheet, so I'm posting here first.
>
> **Ridvay Code** is a VS Code coding agent (fork of Roo Code, Apache-2.0) that I cut down to
> local-first only:
>
> - **Ollama** — point it at your daemon and run Qwen2.5-Coder / DeepSeek-Coder / Devstral /
>   whatever. Fully offline.
> - **LM Studio** — any GGUF via the local server.
> - **Claude Code CLI** — if you'd rather, it shells out to your local `claude` and uses your
>   own subscription. No keys to me, no proxy.
>
> No Ridvay account, no API middleman, no "bring your OpenAI key" funnel — I removed that
> surface from the UI. With Ollama or LM Studio, nothing leaves your box. And there's **no
> telemetry** — no PostHog, no analytics, nothing phones home. I grepped the shipped bundle to
> be sure, and the source is Apache-2.0 so you can too.
>
> It does the usual agent stuff (multi-file edits, run commands, read the repo), but the thing
> I actually care about is making that loop usable on **local** models, not just frontier APIs.
> So I'm looking for:
> - which coder model + quant you run, and how much context you give it
> - where it breaks on 7B/14B vs 32B
> - tool-calling reliability on local models
>
> Free, open source. Links in a comment (trying not to trip the self-promo filter). Roast the
> local UX — that's the feedback I want.

**First comment:** Marketplace link · GitHub · code.ridvay.com

---

## 2) Show HN

HN rewards technical honesty and punishes marketing voice. Lead with what it is, be candid
about it being a fork, end with a real ask. Best window: weekday ~8–10am ET.

**Title:**
> Show HN: Ridvay Code – local-first AI coding agent for VS Code (Ollama/LM Studio)

**Body:**
> I got frustrated that every good AI coding agent assumes a cloud account and ships your code
> to someone's API. Ridvay Code is a local-first take: a VS Code extension that runs the agent
> loop against models you control.
>
> Three ways to run it, with no Ridvay account or API key in the middle:
>
> - **Ollama** (Qwen2.5-Coder, DeepSeek-Coder, Llama, …) — fully offline
> - **LM Studio**'s local server — any GGUF on your hardware
> - your own **Claude Code CLI** — uses your existing Anthropic subscription directly
>
> With Ollama/LM Studio your code never leaves the machine. With Claude Code it goes straight
> to Anthropic on your own plan — there's no Ridvay server in any path.
>
> It's an open fork of Roo Code (Apache-2.0), itself a descendant of Cline — big credit to
> both. What I changed: narrowed the provider surface to the three local-first integrations
> above, revived a direct Claude Code CLI provider, and rebranded. The cloud providers still
> exist in the code (hidden in the UI) to keep upstream merges sane.
>
> There's also no telemetry — no PostHog or analytics in the build (I checked the shipped
> `.vsix` bundle, not just the settings). PRIVACY.md spells out exactly what goes where.
>
> Free. Marketplace + Open VSX + source linked below.
>
> I'd most love feedback on the local-model UX: which model/quant you run, and where the agent
> loop falls down on smaller local models vs. frontier ones. That's the part I want to make good.

---

## 3) X / Twitter thread

> **1/** I got tired of "AI coding agents" that need a cloud account and upload your code to
> someone's API. So I built **Ridvay Code** — a local-first agent for VS Code. Your models,
> your machine. 🧵
>
> **2/** Three ways to run it, none with a Ridvay account or key in the middle:
> • Ollama (Qwen2.5-Coder, DeepSeek…) — fully offline
> • LM Studio — any GGUF
> • Your own Claude Code CLI — your Anthropic sub, direct
>
> **3/** With Ollama or LM Studio your code never leaves the machine. With Claude Code it goes
> straight to Anthropic on your plan. No Ridvay server in any path — and no telemetry, nothing
> phones home (verifiable in the open bundle). That's the whole point.
>
> **4/** It's an open fork of Roo Code (Apache-2.0, lineage back to Cline — credit to both).
> I stripped it to the three local-first integrations, revived a direct Claude Code provider,
> and rebranded.
>
> **5/** Free. Open source. Install from the VS Code Marketplace or Open VSX 👇
> [marketplace] · [github]
>
> **6/** If you run local coder models, I want your feedback — which model/quant, and where the
> agent loop breaks on smaller models. That's what I'm optimizing next. → code.ridvay.com

Pin tweet 1. Reply to the thread with the GIF.

---

## Comment-seeding FAQ (have these ready)

- **"How is this different from Cline / Roo / Continue?"** It's a Roo fork narrowed to
  local-first: fewer knobs, the three local integrations done well, plus a direct Claude Code
  CLI provider. Want the full cloud-provider matrix? Upstream Roo is excellent — use that.
- **"Does it phone home?"** No. There's no telemetry or analytics in the build — verified in
  the dependencies, the source, and the shipped `dist/extension.js` bundle. Link PRIVACY.md
  and the source so people can check. (Verified — lead with this.)
- **"Why fork instead of contribute upstream?"** Different product opinion (local-only); didn't
  want to force that on upstream. Improvements that aren't opinionated can flow back.
- **"Windows / Linux?"** [confirm before launch]
- **"What models actually work well?"** [fill in from your own testing — name 2–3 concrete
  wins, e.g. a Qwen2.5-Coder quant, so the answer is specific, not hand-wavy.]

## After posting

- Reply to every comment in the first 3 hours (ranking + goodwill).
- Watch Marketplace install count + GitHub stars; note which channel converts.
- If r/LocalLLaMA lands, cross-post to r/ChatGPTCoding, r/ollama, r/vscode (space them out).
