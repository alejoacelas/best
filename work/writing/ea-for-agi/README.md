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
- `analysis/topics/` — the current curriculum unit: one best-readings map per topic
  (MacAskill's 16 menu items + the intro week)
- `analysis/clusters/` — the stage-3 collection maps, kept as raw material
- `history/` — fetch script, workflow scripts, per-stage reports, and
  `pre-pivot/` (the v1 intro-fellowship framing and its 8-session first pass)

## Pipeline
Stages, each inspectable before the next runs, output committed per stage:
1. **Comprehensive collection** — Forethought, the EA Intro Program readings, and a
   22-lens sweep across MacAskill's cause menu and beyond → 604 readings
2. **Link-following pass** — everything linked from stage-1 readings, filtered leniently
   → +1,700 (`readings/linked/`), deduped to ~2,250
3. **Cluster + scour** — 22 [cluster maps](analysis/clusters/) → a [landscape synthesis](analysis/landscape.md)
   (6 cross-cutting debates, coverage scorecard, gaps) → gap-scour → 2,333 readings, 29 clusters
4. **Handbook virtues** — [what the current EA Handbook does great](analysis/handbook-virtues.md):
   12 reusable design principles
5. **Curriculum first pass** (superseded, in [history/pre-pivot/](history/pre-pivot/)) —
   thematic axes + an 8-session intro-fellowship curriculum, red-teamed and revised
6. **Topic pivot** — one topic per MacAskill menu item + an intro-to-the-transition
   week ([brief v2](idea/course-idea.md)): assess each existing cluster map
   (keep-or-scratch), scour rebuilt topics from scratch, write
   [per-topic best-readings maps](analysis/topics/), red-team, publish as a
   tabbed Google Doc

## Start here
- [`analysis/topics/`](analysis/topics/) — the deliverable: one best-readings map per
  curriculum topic; mirrored to the tabbed Google Doc (link in `curriculum/doc-url.md`).
- [`readings/INDEX.md`](readings/INDEX.md) — the whole collection, by cluster.
<!--/ai-->
