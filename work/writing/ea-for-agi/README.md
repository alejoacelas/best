What would the intro EA fellowship look like if it took "EA in the age of AGI" seriously?

<!--ai-->
The curriculum hinted at in the comments of [Maybe do the thing you wish CEA would
do](https://forum.effectivealtruism.org/posts/ovSoLXJHNu2LbcsDb/maybe-do-the-thing-you-wish-cea-would-do):
Chris Leong — "Someone really needs to create a course based on Will's [EA in the Age of
AGI](https://forum.effectivealtruism.org/posts/R8AAG4QBZi5puvogR/effective-altruism-in-the-age-of-agi)" —
and Alejo's reply offering a first pass.

## Layout
- `idea/` — grounding docs: the forum thread, MacAskill's essay, the course brief
- `readings/` — downloaded readings as markdown, one folder per cluster; each file's
  frontmatter records url, why-relevant, and how it was found
- `analysis/` — cluster maps, gap reports, EA-handbook-virtues study, thematic axes
- `curriculum/` — the first-pass curriculum draft
- `history/` — fetch script, workflow scripts, and per-stage reports (how each stage ran)

## Pipeline
Stages, each inspectable before the next runs — all five run, output committed per stage:
1. **Comprehensive collection** — Forethought, the EA Intro Program readings, and a
   22-lens sweep across MacAskill's cause menu and beyond → 604 readings
2. **Link-following pass** — everything linked from stage-1 readings, filtered leniently
   → +1,700 (`readings/linked/`), deduped to ~2,250
3. **Cluster + scour** — 22 [cluster maps](analysis/clusters/) → a [landscape synthesis](analysis/landscape.md)
   (6 cross-cutting debates, coverage scorecard, gaps) → gap-scour → 2,333 readings, 29 clusters
4. **Handbook virtues** — [what the current EA Handbook does great](analysis/handbook-virtues.md):
   12 reusable design principles
5. **Curriculum first pass** — [thematic-axes menu](curriculum/thematic-axes.md) (31 axes) and
   [best-readings packets](curriculum/best-readings.md), synthesized into an
   [8-session first-pass curriculum](curriculum/first-pass.md), red-teamed by 3 critics and revised

## Start here
- [`curriculum/first-pass.md`](curriculum/first-pass.md) — the deliverable: 8 sessions,
  an arc, core + optional readings (every path clicks through), discussion questions,
  exercises, and an honest open-questions list of where your judgment is needed.
- [`readings/INDEX.md`](readings/INDEX.md) — the whole collection, by cluster.
<!--/ai-->
