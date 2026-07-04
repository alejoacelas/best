# Jargon audit — 02-claude-code.md (2026-07-04)

This file was already unusually well-glossed for a lay audience: the terminal, git,
save-points, "second login factor," and the sandbox concept are all either taught in
place or inherited from Part 1. The audit therefore found one term that genuinely
requires field knowledge and is never unpacked, plus a set of deliberate keeps.

## Changes

- **"free while in alpha" → "free while it's still an early release"**
  Why: "alpha" as a software release stage is field vocabulary. Its ordinary meaning
  (first / dominant) carries nothing about "unfinished, early, still-changing," which
  is the load the word does here (it explains *why* the app is free and sets the
  expectation that it will change). "Early release" states the thing plainly. The
  sentence's voice lives in its structure, not in the word "alpha," so nothing is
  flattened.

## Considered and kept

- **"sandbox" / "the fence" (removed / come off / in the way)** — the closest call.
  Ordinary "sandbox" (a box of sand) only reaches the technical sense through a
  metaphor. Kept because (a) Part 1 explicitly teaches it — "a **Linux sandbox**,
  separate from your actual computer" — and this is Part 2 of a series; (b) every use
  here is re-anchored by a concrete contrast ("directly on your own machine," "install
  whatever tool it needs," "not your real computer"), so the reader decodes it each
  time; (c) the fence/sandbox pairing is the author's running framing device — voice,
  not accidental jargon.

- **"commit" / "commit each change"** — git vocabulary, but this is the actual word the
  reader will type and see. The whole section teaches it via the save-point analogy
  ("Git takes a snapshot... think save-points in a game"). Teaching the real term is
  correct; replacing it would leave the reader unable to follow the tool.

- **"flag"** (in the FAQ summary *"the 'skip all permissions' flag I've seen"*) — genuine
  CLI jargon, but the summary is written to match a reader who has already encountered
  that exact word elsewhere; mirroring their phrasing is what makes the FAQ findable.
  The body immediately restates it plainly as a "mode" and shows the literal
  `--dangerously-skip-permissions`, which carries the meaning.

- **"save-point"** — an explicit, signposted analogy ("think save-points in a game, not
  engineering"), which the brief permits when it shortens the path. Kept.

- **"agent," "session," "in parallel"** — ordinary meanings correspond well: an agent
  acts on your behalf, a session is a period of activity, "in parallel" = at the same
  time. "Agent" is also flagged as Part 1 knowledge in the opening callout.

- **"best model," "permissions," "start fresh," "context fills up"** — bolded in the
  recap callout as concepts explicitly taught in Part 1; left as the author's
  deliberate pointers back.

- **"native Mac app," "under the hood," "drives Claude Code," "guardrails," "roll back,"
  "moving parts," "power-ups," "the real unlock," "ship their changes"** — idioms and
  light metaphors whose ordinary meaning already carries the content for a smart
  reader (built for the Mac; internally; operates; safety rails; revert; parts that
  move; extra abilities; the thing that opens up value; send off). None require the
  field to decode.

- **"passkey," "authenticator app," "two-factor / second login factor," "command line
  developer tools"** — real product/OS terms the reader will see on screen (GitHub,
  Apple, Windows). The FAQ already rephrases "two-factor" as "a second login factor."
  Teaching the exact words is what lets the reader match what their device shows.
