# Claude Tag, explained — a modular wiki

A short, click-through explainer built from `../claude-tag-readings.md`. Anthropic
technical-explainer tone; every precise term (sandbox, egress, prompt injection, …)
has a hover definition, and there's a full glossary page.

## Run it

```sh
npm install
npm run dev      # live at http://localhost:4321
```

`npm run build` writes a static site to `dist/`; `npm run preview` serves that build.

## Where things are

- `src/pages/*.mdx` — one file per topic (the modules). Prose in Markdown, with
  `<Term>` and `<Callout>` components dropped inline.
- `src/data/glossary.ts` — the single source of term definitions. Both the hover
  tooltips and the Glossary page read from it.
- `src/data/nav.ts` — page order; drives the sidebar and prev/next.
- `src/layouts/Wiki.astro` — shell: sidebar, header, prev/next, all styling.
- `src/components/Term.astro` — a term with a hover/focus definition card.
- `src/components/Callout.astro` — the "what's not public" / note boxes.

To add a term: add an entry to `glossary.ts`, then write `<Term id="your-id">label</Term>`.
