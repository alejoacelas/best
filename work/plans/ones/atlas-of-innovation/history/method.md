<!--ai-->
# How this one-pager was made (2026-07-06)

Claude Code session, prompted by Alejo: "investigate atlasofinnovation.org, select
the most interesting case studies for what I'm trying to do, one-pager with links to
primary sources."

Method:
1. Fetched the site's home, `/about`, `/atlas`, and `/library` pages.
2. Fetched all 13 mechanism pages under `/library/*` and extracted every named case
   study plus its outbound citations (the "primary sources" linked in the one-pager
   come from these pages).
3. Selected and ranked cases by relevance to the inferred goal — growing AI
   enablement at 80,000 Hours (short training for busy professionals, fast
   low-friction funding, portfolio management, talent-pipeline effects) — which the
   one-pager flags in [brackets] as an inference.

Notes:
- The `/atlas` decision tool is a client-side app (three diagnostic questions routing
  to mechanisms); its content couldn't be scraped, so the one-pager draws on the
  library pages only.
- The site ships its own LLM skill folder:
  https://drive.google.com/file/d/1sJEtgKy-1DCI19hACYqU2zjVdFbgmDYL/view
- Site credits: Institute for Progress + Market Shaping Accelerator; led by Matthew
  Esche and Caleb Watney; NBER EIPE vol. 6 chapter is the academic backbone.
<!--/ai-->
