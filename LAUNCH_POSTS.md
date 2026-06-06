# Ridvay Code — launch posts (ready to paste)

Fact-checked against the repo + network on 2026-06-06. Positioning per `LAUNCH.md`:
**zero telemetry + local-first + orchestrator/Autopilot, on merit. Roo = lineage credit only
(no shutdown-centering, no refugee-courting).**

> ✅ **Links use the branded domain `https://code.ridvay.com`** — DNS live + valid TLS, verified
> 2026-06-06 (redeployed to flush stale-edge 404s; now 200 across all CDN edges).
> Marketplace: `https://marketplace.visualstudio.com/items?itemName=ridvay.ridvay-code`

---

## 1. Show HN

**Title**
```
Show HN: Ridvay Code – local-first autonomous coding agent for VS Code
```

**Body**
```
Ridvay Code is a free, open-source (Apache-2.0) VS Code extension. You give it a task; it plans the
work, splits it into subtasks (an Orchestrator mode), writes the code, runs the tests, and fixes what
breaks — all inside your editor, not on a remote VM.

There's a one-switch "Autopilot" for running it hands-off: it auto-approves file reads, edits, and
subtask delegation, but shell commands stay gated behind an allowlist — so hands-off never means
"runs whatever command it wants." Prefer to stay in the loop? Leave it off and approve step by step.

Two things I cared about most:

- Zero telemetry. No analytics SDK, no PostHog, nothing phones home. No account, no server, no API
  middleman in any code path. It's open source — grep the published bundle and confirm there's no
  tracker.

- Local-first. The provider picker surfaces three integrations: Ollama, LM Studio, and Claude Code.
  Ollama and LM Studio run fully local and offline, so your code never leaves the machine. The Claude
  option shells out to your own local `claude` CLI on your Anthropic account or API key — to be clear,
  that's metered by Anthropic like any other Claude usage. It's bring-your-own, not free Claude.

It's an open fork of Roo Code (Apache-2.0), which descends from Cline — credit to both. If you're
coming from Roo, migrating is near-zero effort: the config / rules / custom-mode formats are identical
and it imports your Roo settings.

Live on the VS Code Marketplace (id: Ridvay.ridvay-code). Landing page: https://code.ridvay.com

It's a solo side project with basically no marketing, so I'd genuinely appreciate feedback —
especially on the Autopilot loop and how it holds up on local models vs Claude. Tell me where it
falls over.
```

---

## 2. Reddit — r/LocalLLaMA

**Title**
```
A local-first, zero-telemetry coding agent for VS Code — runs on Ollama / LM Studio, in your editor
```

**Body** (markdown)
```
Posting here because you're the people most likely to care about the local + no-telemetry part — and
most likely to call me out if I overclaim. So I'll stick to things you can check.

**What it is**

Ridvay Code is a free, Apache-2.0 VS Code extension. You give it a task; it plans the work, splits it
into subtasks, writes code, runs your tests, and tries to fix what breaks — all inside your editor
against your local workspace. It's not a cloud VM that clones your repo somewhere; the agent loop runs
on your machine.

**Local-first is the point**

The two backends I'd point you at:

- **Ollama** — run open models locally.
- **LM Studio** — any local GGUF on your hardware.

Both fully local, offline, free. On those, the only outbound traffic is your own inference calls to
the backend you picked. (It's a fork, so upstream cloud connectors still exist in the code, but the UI
is narrowed to the local-first set.)

**Zero telemetry — and you can grep it**

No analytics, no PostHog, nothing phones home. No account, no server, no middleman. The extension is
published, so pull the bundle and grep it — there's no tracker to find. I'm not going to claim any
other tool "spies"; I haven't audited theirs. The only claim I'll make is about mine.

**The autonomy part**

An Orchestrator mode breaks a goal into subtasks and delegates them. A one-switch **Autopilot** runs
it hands-off — auto-approving reads, edits, and subtask delegation, so you're not clicking "approve"
200 times. Deliberate line: Autopilot does **not** auto-approve shell commands; those stay behind an
allowlist you control.

**The Claude option, honestly**

There's a Claude Code integration that shells out to your local `claude` CLI on **your own** Anthropic
account/key. To be clear: this isn't free or unlimited Claude — Anthropic meters it against your plan.
Ollama / LM Studio are the free local core; Claude is just an optional bring-your-own path.

**Lineage**

Built on Roo Code (Apache-2.0), which descends from Cline — credit to both. Coming from Roo is
near-zero effort: identical config / rules / custom-mode formats, and it imports your Roo settings.

**What I'm not claiming:** not air-gapped / compliance-grade anything; no install counts or
benchmarks; not "better than X."

VS Code Marketplace: `Ridvay.ridvay-code` · https://code.ridvay.com

Solo side project, ~no budget — if you run it on a local model, I'd love to hear what breaks
(Ollama / LM Studio edge cases especially, and anywhere the Orchestrator loop gets stuck).
```

---

## 3. X / Twitter thread

```
1/ i built a coding agent that runs inside vs code, ships zero telemetry, and runs on your own local model.

you hand it a task. it plans the work, splits it into subtasks, writes the code, runs the tests, and fixes what breaks — in your editor, not a remote cloud vm.

free + open source. 🧵

2/ the loop is the point: break the goal into subtasks → run each → read the output → adjust → repeat until the tests pass.

flip one switch (Autopilot) and it runs hands-off: auto-approves file reads/edits and subtask delegation. shell commands stay behind an allowlist, so hands-off never means "runs any command."

3/ local-first on models. three integrations in the UI: Ollama, LM Studio, or your own Claude.

Ollama + LM Studio run fully local and offline — your code never leaves the machine.

the Claude path shells out to your local `claude` cli on your own anthropic account/key. anthropic meters that, same as always — no middleman, no magic free tier.

4/ zero telemetry, and i mean it: no analytics, no posthog, nothing phones home. no account, no server in the path.

don't trust me — grep the published extension bundle. there's no tracker to find.

5/ it's an open fork of Roo Code (apache-2.0, lineage back to Cline — credit to both). if you already use Roo, switching is near-zero effort: same config / rules / custom-mode formats, and it imports your Roo settings.

6/ that's the whole pitch. free, apache-2.0, bring your own model (Ollama / LM Studio, or your own Claude).

one solo dev, basically no marketing — just a tool i wanted to exist and use every day.

7/ live on the vs code marketplace:
https://marketplace.visualstudio.com/items?itemName=ridvay.ridvay-code

more: https://code.ridvay.com

install it, give it a real task, and tell me where it breaks. #vscode
```

---

## 4. Product Hunt

**Tagline**
```
Ridvay Code – local-first autonomous coding agent for VS Code, zero telemetry
```

**Maker's first comment**
```
Hey Product Hunt 👋

I'm a solo dev. Ridvay Code is a free, open-source (Apache-2.0) VS Code extension — an autonomous
coding agent that runs inside your editor, not on a remote cloud VM.

What it does
Give it a task. In Orchestrator mode it plans the work, splits it into subtasks, writes the code, runs
the tests, and fixes what breaks. Flip on Autopilot and it runs hands-off — auto-approving file reads,
edits, and subtask delegation. Shell commands stay gated behind an allowlist, so hands-off never means
"run any command on my machine." Prefer to stay in the loop? Leave Autopilot off and approve step by step.

Zero telemetry — and you can check
No analytics, no error reporting, nothing that phones home. No account, no server, no API middleman.
The source is Apache-2.0 and you can grep the published bundle yourself — there's no tracker in it.
That's the one thing I most wanted to get right.

Bring your own model
The only models surfaced in the UI are three, local-first by default:
- Ollama — run open models locally. Fully offline, free.
- LM Studio — any local GGUF model on your hardware. Fully offline, free.
- Claude Code — shells out to your local `claude` CLI on your Anthropic account or API key. To be
  clear: Anthropic meters that usage, so this isn't free unlimited Claude — it's your own Claude, no
  Ridvay in the path.

With Ollama or LM Studio, your code never leaves your machine. With Claude it goes straight to
Anthropic on your plan.

Lineage
Built on Roo Code (Apache-2.0), which descends from Cline — credit to both. If you're coming from Roo,
switching is near-zero effort: the config, rules, and custom-mode formats are identical, and it can
import your Roo settings.

Try it
Live on the VS Code Marketplace (ridvay.ridvay-code) → https://code.ridvay.com

It's an early solo side project with basically no marketing budget, so honest feedback means a lot —
what's missing, what breaks, especially how the agent loop holds up on local models. I'll be in the
comments.
```

---

### Pre-launch checklist
- [x] **DNS for code.ridvay.com** — live + 200 across edges (verified 2026-06-06)
- [ ] Clean-install smoke test (fresh VS Code profile): onboarding → pick a provider → run a task on Autopilot
- [ ] A short demo GIF/screenshot for the X post + Product Hunt gallery
- [ ] Open VSX published (so non-Marketplace editors can install)
