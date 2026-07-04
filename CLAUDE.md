# best

See [README.md](README.md) for what this workspace is — the identity and the live
**Questions** map. This file is the standing instructions for working in it.

## Iterate forward
Nothing here is finished; each thing is its current-best version, and the standing job
is to keep making it better — everything, not just code. Global's *Finish, don't ask*
governs how: build on the judgment already there rather than churn past it. What's
specific here is the feedback loop — anything I'll use repeatedly should have a
low-friction way to capture friction the moment I feel it, and a path from that friction
to a concrete change.

## Folders are questions
Every folder states its standing question as the first line of its `README.md`; its
`CLAUDE.md`, where present, just points there. The root **Questions** map is generated
from those first lines. Add a folder → give it a one-line-question `README.md` → rerun
sync-repos and it appears in the map. Nesting groups things on my mind; it is not strict
containment — a sub-folder needn't be a sub-category of its parent, and siblings may
reference each other.

## One mega-repo, a few nested repos
`best` is one Git repository of mostly plain folders. Only a few folders are their own
nested Git repos — the private ones, and a few standalone/deployed public ones (see the
**Sub-repositories** table in `README.md`). Git can't reach across a nested `.git`, so a
change inside one belongs to *that* repo: `cd` in and commit there (global's *Commit
where the change lives*). The symlinked global instructions in `ai/dotfiles/` are one
such nested repo — editing them commits to dotfiles, not here.

Run `.workspace/sync-repos.py` after adding or removing a nested repo, or after adding a
folder's `README.md` question. It rewrites `repos.yaml`, the managed `.gitignore` blocks,
the per-parent **Sub-repositories** tables, and the root **Questions** map. Which nested
repos are private is hand-listed in `.workspace/private-paths`. Before finishing work
here, run `.workspace/sync-repos.py --check`; if it fails, run it, review the changes,
and commit.

## Visibility
The rule: **everything about me is public; things about others are private.** Making
something private is a deliberate call that it's really about someone else, holds their
confided content, or carries credentials. Private so far: `work/tools` (credentials),
`people/friend`, `people/partner`, `other/advice`, and `other/places/visa` (identity
documents). `me/mind` is public — it's about me.

## Committing
Global rules apply (`~/.claude/CLAUDE.md`): commit found work after checking nothing
private goes in; keep credentials and confided content out of public repos. For nested
repos, don't copy child contents into a parent repo; let the child repo own those files
and keep the parent ignore rules generated.
