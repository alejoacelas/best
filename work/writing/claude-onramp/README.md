<!--ai-->
How do we write an introduction to delegating work to Claude that people actually feel?

# Claude on-ramp

The first guide (numbered lessons, decision pages, site, assistant) is deleted as of
2026-07-04; Alejo wasn't satisfied with the writing. Recover any of it from git
history. The rebuild runs through numbered stage folders, each holding the
intermediate outputs of one stage:

- `00-voice/` — writing samples Alejo drafted himself, plus the style criteria and
  guide goals extracted from them. Only files in `samples/` are his own words;
  every other file in the pipeline is provisional Claude output.
- `01-inventory/` — everything the guide could plausibly teach: a ~10-word title
  plus one sentence per lesson, clustered (core AI use, Cowork, Claude Code,
  Claude Tag). Sources: Alejo's material, Anthropic courses, tutorials, research.
- `02-core/` — the aggressive cut: which messages are most valuable or the best
  starting points, each with a nailed short formulation. Alejo gives heavy input
  at this stage.
- `03-lessons/` — grouping, ordering, dependency mapping (what must be installed,
  what tends to fail), and lesson skeletons.
- `04-drafts/` — full lesson drafts. The most important messages get the most
  flair; attention drawn should match importance.
- `05-polish/` — Fable subagents write alternatives to each passage; other
  subagents compare and accept only alternatives that Pareto-dominate the
  original across the criteria in `00-voice/style-criteria.md`.

`assistant-spec.md` describes the sidebar assistant and feedback-loop app that
shipped with the old guide. The Vercel project `claude-onramp` still exists in
the cloud; the local site code is deleted.
<!--/ai-->
