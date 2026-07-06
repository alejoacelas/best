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
<!--/ai-->