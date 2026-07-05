---
name: stylist-passes
description: >-
  Append whole-draft pastiche passes — one per writer in voice/influences (Dylan
  Moran, Scott Alexander, Paul Graham) — below a draft Alejo wrote, as inspiration
  for his rewrite. If passes already exist and the draft changed since, diff
  against the commit they were written from and update each pass in its writer's
  voice. Use when the user says "add the stylist passes", "three write-ups of this
  draft", "write this as Moran / Scott / PG", or "refresh the passes" after
  editing a draft.
---

# stylist-passes

The goal is inspiration, not precision: Alejo reads his own words on another
person and steals what sparks. Unlike the tweak agents (`moran-tweaker` etc.),
which propose bracketed micro-edits at a tenth of the writer's density, a stylist
pass is a full commitment to the voice — pastiche at native density, hallucinated
details welcome. Nothing in a pass is meant to survive verbatim.

## Inputs

- The draft path, from the argument or the conversation. If neither settles it,
  the most recently touched `lessons/*/draft.md` under
  `work/writing/claude-onramp/`.
- The pattern libraries: every writer doc in
  `work/writing/claude-onramp/voice/influences/*.md` except `README.md` (glob
  upward from the draft if it lives elsewhere). One pass per doc, in the order
  the docs list. Adding an influence doc adds a pass; the skill never hardcodes
  the writer list.

## Anatomy of a draft file

```
# <Title>                ← author section: Alejo's draft. Never touch it.
…
---

<!--ai-->
*Three stylist passes. Same lesson, hallucinated details — inspiration to steal
from, not drafts to keep.*

## <Writer>
### <Title>              ← same title as the author's H1, every pass
…
<!--/ai-->
```

## Fresh mode — no stylist block yet

1. Read the draft and each influence doc's handle table and formulas.
2. Write one pass per writer, 250–350 words, below a `---` divider inside one
   `<!--ai-->` block with the disclaimer line above.
3. Each pass carries the draft's actual beats — every substantive claim and
   example should have a counterpart — and deploys at least four patterns from
   its writer's handle table, including that writer's signature self-implication
   move (turn the gun around / weapon on himself / unflattering anecdote) if the
   draft mocks anyone.
4. Details may be invented freely (numbers, anecdotes, scenes); teaching points
   may not be blurred. Where a pass wants a fact the draft doesn't have, invent a
   plausible one rather than hedging — Alejo replaces it anyway.

## Update mode — passes exist and the author section changed

1. Find the base: the newest commit whose diff touches the stylist block
   (`git log -p --follow -- <draft>`, look for the pass headers in hunks). The
   author section *at that commit* is what the passes were written against.
2. Diff that base author section against the current one.
3. Translate each delta into edits on each pass, in that writer's voice: a new
   beat gets new sentences built from the writer's patterns; a deleted beat loses
   its echo; a reworded beat changes a pass only if the meaning moved. Passages
   whose source didn't change stay word-for-word.
4. If more than about half the author paragraphs changed, patching produces
   Frankenstein passes — rewrite them fresh instead, and say so.

## Constraints

- Never edit the author section, and never lift sentences verbatim from the
  writers' actual work — steal patterns, not prose.
- If a pass drifts past ~400 words, cut it back; tightness is part of every one
  of these voices.
- Same H1 title in every pass; the writer's name is the `##` header.
- Commit and push when done (`claude-onramp: stylist passes for <lesson>`).
- Final report: one line per writer — what changed and which pattern is doing
  the heaviest lifting.
