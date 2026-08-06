<!--ai-->
# Stage 6 report: topic pivot

2026-07-09. Pivot from the v1 intro-fellowship framing (archived in
[pre-pivot/](pre-pivot/)) to topic-centered: one best-readings map per MacAskill
menu item plus an opening transition week, per [brief v2](../idea/course-idea.md).

## How it ran

Workflow [stage6-topics.js](stage6-topics.js) (run wf_bfe813e5-536): 17 topics
through a 5-stage pipeline — assess (keep-or-scratch against the existing stage-3
cluster map) → scour (rebuilds only: fresh web + collection hunt, downloads via
fetch_reading.py) → write (rebuilds only, barred from reading the old maps) →
red-team (adversarial critic per topic, checked topic fit, selection quality
against the web canon, link integrity, format) → revise (apply valid findings).
67 agents, ~4.1M subagent tokens, 34 min. Then
[build_doc_tabs.py](build_doc_tabs.py) converted the maps (local links →
canonical URLs, paragraphs unwrapped) and `gog docs` built the
[tabbed Google Doc](../curriculum/doc-url.md).

## Verdicts

| Topic | Verdict | Why / notes | Scoured | Red-team findings → changes |
|---|---|---|---|---|
| intro-ai-transformation | rebuild | new opening week; anchors already collected in forethought/ + macrostrategy/ | 1 | 4 → 6 |
| global-health-development | keep | cluster was exactly the AGI-lens GH&D topic | 0 | 5 → 5 |
| factory-farming | keep | one-to-one with the menu item | 0 | 4 → 5 |
| ai-safety | keep | one-to-one; v1 framing cut | 0 | 4 → 7 |
| ai-character | keep | one-to-one | 0 | 6 → 7 |
| ai-welfare-digital-minds | keep | one-to-one | 0 | 7 → 9 |
| ai-rights | rebuild | old cluster merged rights-of-AIs with human labor economics | 8 | 3 → 6 |
| persuasion-epistemic-disruption | rebuild | old cluster fused threat side with opportunity side | 6 | 5 → 6 |
| ai-for-epistemics | rebuild | no dedicated cluster existed | 6 | 4 → 9 |
| human-coups | rebuild | old cluster fused three menu items | 4 | 4 → 5 |
| democracy-preservation | rebuild | no dedicated cluster existed | 12 | 5 → 7 |
| gradual-disempowerment | rebuild | sub-thread of two old clusters, never its own | 7 | 4 → 7 |
| biorisk | keep | one-to-one | 0 | 5 → 8 |
| space-governance | keep | one-to-one | 0 | 5 → 7 |
| s-risks | keep | one-to-one | 0 | 4 → 10 |
| macrostrategy | keep | one-to-one | 0 | 5 → 9 |
| meta | rebuild | old cluster was EA-thinking-about-itself, not meta-as-cause-area | 6 | 4 → 6 |

Totals: 9 kept, 8 rebuilt; ~50 readings downloaded in scour + more during revise
(collection now 2,402); every map link-verified (0 broken local paths).
Full per-agent record: the workflow journal under the session's
`subagents/workflows/wf_bfe813e5-536/`.
<!--/ai-->
