<!--ai--># work — call archive

Cleaned Granola call transcripts and summaries, one folder per person. Pulled with
the local [`summarize-call`](.claude/skills/summarize-call/) skill (Granola API →
tidy → summarize → file).

## Filing rule

`<once|many>/<firstname-org>/<YYYY-MM-DD>-<two-word-slug>-<trans|sum>.md`

- **firstname-org** — lowercase first name + short org code (usually three letters)
  from their email domain: impact ops → `iops`, 80,000 hours → `80k`, ambitious
  impact (fka charity entrepreneurship) → `aim`, catalyze impact → `cat`,
  coefficient giving → `cg`, anthropic → `ant`,
  independent / no clear org → `ind`. One folder per person; reuse it across calls.
- **once/** — people with a single recorded call.
- **many/** — people with more than one — or who I expect to recur even at one call
  so far (e.g. Hanna, Peter). When a `once/` person gets a second call, move their
  folder to `many/`.
- **two-word-slug** — short description of the call (e.g. `agentic-coaching`);
  `trans` = tidied transcript, `sum` = summary. Slugs stay distinctive across the
  whole archive — no generic names, no near-duplicates of earlier calls; rename
  older files if they collide.

See [earlier-calls.md](earlier-calls.md) for the backlog of calls not yet pulled.

## Folder index + Google Doc mirror

Each person folder carries a short `CLAUDE.md`: one bullet per call, newest first —
`**<date> · <slug>**`, a `[gdoc]` link, and a one-or-two-sentence gist.

Whenever `summarize-call` files a new call, it also:

1. Creates one combined Google Doc titled `<YYYY-MM-DD> Alejo-<Other> <Two Word Slug>`
   — both names capitalized, dash between (e.g. `Alejo-Jørgen`), slug in Title Case —
   with a **Summary** section then a **Transcript** section. One doc, two sections, not
   two Google Docs tabs: the Drive API can create/convert a doc but can't make true tabs.
2. Adds that call's bullet (with the gdoc link) to the folder `CLAUDE.md`, creating the
   file on a person's first call. Link by doc ID (`.../document/d/<id>/edit`) so a later
   rename doesn't break it.
<!--/ai-->