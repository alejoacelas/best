<!--ai-->
How was the people-discovery list built and checked?

## Inputs

- The user supplied the [Generator Residency fellows Google Doc](https://docs.google.com/document/d/1SFJpBgmQiX4nQLaOfFX38HTzBB4vxgfgh21uX46nNtw/edit?tab=t.0#heading=h.undt9fpbyb11) and [Alexey Guzey’s list](https://guzey.com/people/) on 2026-08-01.
- The user supplied Luis Cosio via Leo McKee-Reid, Lucy Moglia’s site, and three Boston
  seeds on 2026-08-01.
- The user supplied the [Foresight Fellowship](https://foresight.org/engage/fellowship/)
  and [AI for Science & Safety Nodes](https://foresight.org/grants/grants-ai-for-science-safety/)
  pages on 2026-08-03.
- Google Drive’s document structure supplied the Generator names and embedded links.
- Guzey’s rendered list and source HTML supplied its names and personal-site links.

## Method

1. Preserve every supplied name in `sources.md`; treat source lists as an inbox because the Generator document explicitly mixes met and discovered people.
2. Research a small first batch rather than inventing missing fields.
3. Prefer a person’s own site for place. Use their signed-in LinkedIn profile when the site does not state it. Record the lookup date.
4. Keep uncertain meeting status visible in the “Researched candidates to classify” table until Alejo confirms it.
5. For paginated Foresight sources, preserve the current default 2026 cohorts and label
   each entry with its exact program. Exclude mentors and historical archives.

## Checks

- The two inboxes contain 70 source entries: 20 Generator and 50 Guzey.
- Foresight contributes 58 program entries: 28 Fellows and 30 AI Node grantees. Ninon
  Lizé Masclef appears in both programs, so these represent 57 distinct listed names.
- The seven researched rows each have a place, place provenance, date, learning link, and discovery source.
- No empty placeholder was deleted. The seven `admire/` placeholders remain documented in `admire/README.md`.
<!--/ai-->
