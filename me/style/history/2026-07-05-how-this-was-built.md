# How the style folder was built — 2026-07-05

Method note, so the process is public alongside the output.

## Approach

Six research agents in parallel, each writing one file with real, verified, inline-linked
sources. Shared brief across all: apply Paul Graham's density test, plain declarative
voice, lead with the claim, hyperlink primary sources, mark uncertainty in `[brackets]`,
prefer primary sources (their own words) over commentary.

| File | Brief |
|---|---|
| `people/paul-graham.md` | His style as an essayist — the named moves, his own writing method, what's transferable. Quotes verified against paulgraham.com. |
| `people/tyler-cowen.md` | Curiosity/attention as a style; MR + Conversations with Tyler as sources. |
| `people/paul-mccartney.md` | Went deepest (Alejo's priority). Central question: *what is the endearing quality?* Answered via warmth × competence + accessible vulnerability. |
| `people/peter-thiel.md` | Analytical, not admiring (Alejo is ambivalent). The contrarian who doesn't need to be liked; a frame for the ambivalence. |
| `charisma.md` | Concept note. Starts from Alejo's own theory, sharpens against Weber / Antonakis / Cabane / Fiske. Anchor of the folder. |
| `reading/` | Reading list + freely-available fragments downloaded to `reading/sources/`. No pirated books — excerpts + links only for anything copyrighted. |

`alejo-style.md` (and later `alejo-techniques.md`) was written separately, from a full read of [myea.blog](https://myea.blog)'s
`all.txt` — every move grounded in a quote from an actual post, mapped back to the four
exemplars and to `charisma.md`.

## Editorial pass

- Stripped `<!--ai-->` wrappers from content files (they belong in READMEs only); kept
  them in `README.md`.
- Verified the profiles lead with a thesis and carry inline source links.

## What to redo if extending

- The Thiel profile flags two sources (Packer's *New Yorker* profile, "The Straussian
  Moment") cited without clean canonical URLs — find and add them.
- The McCartney "beloved elder performer" read is worth checking against actual concert
  footage, per the note in `charisma.md`.
- Add profiles by giving an agent the same shared brief and one new subject.
