<!--ai-->
What should this guide sound like, and where do the tweaks come from?

<!--me-->Alejo drafts the lessons himself, mostly in his own writing, and always
looks for tweaks: ways to make things shorter, sentences more surprising, the text
funnier and more engaging — engaging with meaning, not cheaply — ways of delighting
the reader.<!--/me--> The Paul Graham cut (no sentence or word removable without
losing meaning) is the floor; a bit of fluff purely for entertainment is allowed.

- `samples/` — Alejo's own writing (the blog, love-agents, the rant-tips call
  transcript). The voice reference; not to be edited. better-start moved to
  [`lessons/better-start/draft.md`](../lessons/better-start/draft.md), where it's
  a live draft.
- `influences/` — qualified patterns from writers he admires: per-writer style
  guides with a handle table up top (ordered by likelihood of application, verbatim
  quote each), cross-piece counts, and per-pattern verbatim excerpts, formula, and
  transfer verdict. Extraction notes per source piece live in its `history/`.
- `references/` — other people's material worth stealing from (JL's
  anti-Claude-tics rules).

## The draft pipeline
Alejo writes the draft, leaving `[?: how does X work?]` brackets where he doesn't
know the facts. Then agents (in `best/.claude/agents/`) run passes:

1. `fact-filler` — researches each `[?:]` bracket, replaces it with a sourced
   `[fill: … (source, verified date)]` for review. Facts before style.
2. `pg-cut` — the density cut: word-level tweaks applied in place, sentence-level
   cuts left as `[drop: …]`/`[swap: … → …]` brackets in the draft. Runs alone.
3. <!--me-->Parallel passes, one file per writer<!--/me-->: `moran-tweaker`,
   `scott-tweaker`, `pg-voice`. Each reads its influence doc, picks its own 3–6
   spots, and writes ~5 bracketed options per spot (same or mixed patterns, each
   tagged with its pattern handle) to `history/<date>-<draft>--<writer>.md`. They
   never edit the draft; Alejo picks from each file while rewriting.

The older `pg-compressor` (applies every cut in place, silently) remains for
non-lesson text; for lessons prefer `pg-cut`.
<!--/ai-->
