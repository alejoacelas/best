# Jargon audit — 01-cowork.md (2026-07-04)

This file is already heavily de-jargoned: nearly every term of art is glossed
inline the first time it appears. One change.

## Changes

- **`why prompt injection shouldn't stop you` → `why hidden instructions in
  what it reads shouldn't stop you`** (link title, §4).
  Why: "prompt injection" is opaque unless you already know the field — its
  ordinary meaning carries nothing. The replacement states the actual mechanism
  (content the agent reads can contain instructions aimed at it) in plain words.
  The linked page can still teach the term itself.

## Considered and kept

- **agent** ("delegating to an agent"). Ordinary meaning — something that acts
  on your behalf — matches the technical meaning, and the surrounding sentence
  already spells out the mechanism ("it plans, works across your files for
  several steps, and hands back finished work"). The reader decodes it correctly.

- **sandbox** (used ~6 times). An implicit metaphor by origin, but the author
  glosses it on first substantive use ("a small sandbox where it runs its work
  safely") and fully literalizes it later ("a Linux sandbox, separate from your
  actual computer — so it can't drive your Mac's apps or touch files outside
  what you give it"). It's also the spine of the piece's throughline (the
  "fence" Part 2 removes). Replacing every instance would flatten the structure
  and voice for no comprehension gain.

- **fence** ("deliberately fenced," "the fence that Part 2 removes"). An
  explicit, signposted metaphor that is immediately literalized — "The fence
  has real edges:" is followed by the concrete constraints. It shortens the
  path and isn't smuggled in as vocabulary. Kept.

- **connector / Connectors**. A literal UI label (a menu item the reader
  clicks), and glossed one line after first use: "A connector is just an account
  you've plugged in." Kept.

- **skill / SKILL.md**. A product term, but glossed on the spot: "It's a saved
  capability Claude can run by name." Kept.

- **OAuth** ("the normal sign-in ('OAuth') dance"). Presented as a parenthetical
  label, not relied on — the sentence then describes the actual back-and-forth
  step by step. The reader needs nothing from the acronym. Kept.

- **model / model picker / Haiku, Sonnet, Opus**. Glossed inline ("Claude's
  models, fast to most-capable"). Kept.

- **markdown file** (`plan.md`). Fails the ordinary-meaning test in the strict
  sense, but the content "markdown" carries (a lightweight text format) is inert
  for the reader's action, the real `.md` filename is shown alongside, and it
  ties to the later `CLAUDE.md` / `SKILL.md` conventions. Replacing with "text
  file" would lose accuracy for no gain. Kept.

- **virtual machine / virtualization / WSL** (Windows troubleshooting block).
  "Virtual machine" reads compositionally (a software-simulated computer) and
  matches the literal Windows feature name "Virtual Machine Platform" the reader
  sees on screen. "WSL" is named only to be dismissed as not-needed, so a reader
  who doesn't know it loses nothing. This is buried in a collapsed details block
  for people hitting a specific error. Kept.

- **allowlist**, **command-line tools** (`gh`, `gcloud`). Self-descriptive from
  ordinary usage; the latter is given with examples. Kept.

- **"Claude with hands"** (opening line). An explicit metaphor made literal in
  the same sentence ("You describe an outcome; it plans, works... and hands back
  finished work"). Author's voice; genuinely shortens the path. Kept.
