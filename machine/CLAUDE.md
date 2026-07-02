# machine

My machine and my AI tooling — how it's set up, and the standing work of making it
do more. Everything else here is the work; this is the work *on the tools that do
the work*.

The test for what belongs: it's meta. Not a thing I make, a person I know, or who
I'm becoming — it's about the machine itself. My agent instructions, dotfiles, skills,
hooks, the infrastructure map, the "here's a better way to run this" ideas.

## What lives here
- `infrastructure.md` — the map: how the setup actually fits together. Keep it true;
  when the wiring changes, change it here.
- `improvements.md` — the backlog of ways to make the setup better. The home for
  "make this better" ideas, so they stop scattering across the root and `upcoming/`.
- `prompt-setup.md` — the reasoning behind distilling my instruction files to their
  generating principles (largely delivered in the global `CLAUDE.md`).

## How to work here
- Understand before you change: the setup embeds decisions, so recover *why* before
  replacing a considered one (global's *Preserve considered choices*).
- Edit the source of truth (`~/.dotfiles`), not the live symlink — same file, but
  committing from the repo keeps the fresh-Mac path working.
- Leave the reasoning behind, not just the diff.
