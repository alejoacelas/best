# best

My life-optimization workspace. Each leaf folder is its own nested git repo (not a
submodule); the folders grouping them are plain directories. So this repo is mostly
pointers plus shared instructions.

## Iterate forward
Nothing here is finished; each thing is its current-best version, and the standing
job is to keep making it better — everything, not just code. Global's *Finish, don't ask*
governs how: build on the judgment already there rather than
churn past it. What's specific here is the feedback loop — anything I'll use
repeatedly should have a low-friction way to capture friction the moment I feel it,
and a path from that friction to a concrete change.

## Working in repo folders
Nested Git repos are normal repos, not submodules. A parent repo tracks its own
files and ignores child repo folders; each child repo owns its own commits, remotes,
privacy, and collaborators.

Run `.workspace/sync-repos.py` after adding or removing a nested repo. It discovers
repo folders, rewrites `repos.yaml`, refreshes the managed blocks in each parent
`.gitignore`, and regenerates the repo map in the root `README.md`. Git won't reach
across a nested `.git`, so child files can't show in the parent and its folder can't
appear without becoming a submodule — the generated map is how the structure stays
visible on GitHub, one link per child repo.

Editing a file inside a child repo (including the symlinked global instructions in
`machine/dotfiles/`) commits to *that* repo, not this one — see global's *Commit where
the change lives*.

Before finishing work in this workspace, run:

`.workspace/sync-repos.py --check`

If the check fails, run `.workspace/sync-repos.py`, review the manifest and ignore
changes, then commit the affected parent repos.

## Visibility
The rule: **everything about me is public; things about others are private.**
Making something private is a deliberate call that it's really about someone
else, holds their confided content, or carries credentials. Private so far:
`make/tools` (credentials), `friends/people`, `friends/partner`,
`friends/advice`, and `friends/places/visa` (identity documents). `self/mind`
is public — it's about me.

## Committing
Global rules apply (`~/.claude/CLAUDE.md`): commit found work after checking nothing
private goes in; keep credentials and confided content out of public repos. For
nested repos, do not copy child contents into a parent repo; let the child repo own
those files and keep the parent ignore rules generated.
