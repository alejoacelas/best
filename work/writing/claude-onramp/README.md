<!--ai-->
# Claude On-Ramp
<!--/ai-->

<!--ai-->
A guide that takes a smart, non-technical person from *using Claude in a
browser* to *delegating real work to Claude Cowork and Claude Code.*
<!--/ai-->

<!--ai-->
## Read it
<!--/ai-->

<!--ai-->
Start at **[00-start-here.md](00-start-here.md)** and follow the links. Reading
order:
<!--/ai-->

<!--ai-->
1. [Start here](00-start-here.md)
2. [Part 1 — Claude Cowork](01-cowork.md)
3. [Part 2 — Claude Code](02-claude-code.md)
4. [Part 3 — Power-ups](03-power-ups.md) *(optional)*
5. [Now what — actually delegating](04-now-what.md)
<!--/ai-->

<!--ai-->
Or open **[`site/index.html`](site/index.html)** for the rendered version, with
a working sidebar and collapsible help.
<!--/ai-->

<!--ai-->
## How it's built
<!--/ai-->

<!--ai-->
Three kinds of page, kept strictly separate so the main path stays short while
still catching everyone who gets stuck:
<!--/ai-->

<!--ai-->
- **Mainline** (the numbered parts) — one opinionated path. A reader who never
  hesitates reads only this.
- **Decision pages** ([`decisions/`](decisions/)) — the reasoning behind each
  default the mainline asserts. Linked, never inlined.
- **Stuck-modules** — collapsible `<details>` blocks at each likely snag point.
  Invisible unless you open them.
<!--/ai-->

<!--ai-->
Plus a **sidebar assistant** with the whole guide in context — spec in
[`assistant/`](assistant/), implementation in [`site/api/`](site/). It streams
Claude Opus with the guide as system prompt and web search allowlisted to
official docs. Every page's "this step didn't work" button and every question
the assistant has to search for land in a private Vercel Blob log — read it
with [`site/read-feedback.py`](site/read-feedback.py); that queue drives new
stuck-modules.
<!--/ai-->

<!--ai-->
## Status
<!--/ai-->

<!--ai-->
First full draft 2026-07-02; site, assistant, and feedback log built and
deployed 2026-07-04 (Vercel project `claude-onramp`; the assistant route waits
on `ANTHROPIC_API_KEY`). Content is accurate to research done at draft time;
**prices, plan names, and install commands drift — verify against official
sources before publishing.** See [`plan.md`](plan.md) for the design rationale,
open decisions, and the dogfooding process still to run.
<!--/ai-->
