# best

My life-optimization workspace. Each leaf folder is its own git repo, mounted here
as a submodule; the folders grouping them are plain directories. So this repo is
mostly pointers plus shared instructions.

## Iterate forward
Nothing here is finished; each thing is its current-best version, and the standing
job is to keep making it better — everything, not just code. Global's *Preserve
considered choices* governs how: build on the judgment already there rather than
churn past it. What's specific here is the feedback loop — anything I'll use
repeatedly should have a low-friction way to capture friction the moment I feel it,
and a path from that friction to a concrete change.

## Working in repo folders
Nested Git repos are normal repos, not submodules. A parent repo tracks its own
files and ignores child repo folders; each child repo owns its own commits, remotes,
privacy, and collaborators.

Run `.workspace/sync-repos.py` after adding or removing a nested repo. It discovers
repo folders, rewrites `repos.yaml`, and refreshes the managed blocks in each
parent `.gitignore`.

Before finishing work in this workspace, run:

`.workspace/sync-repos.py --check`

If the check fails, run `.workspace/sync-repos.py`, review the manifest and ignore
changes, then commit the affected parent repos.

## Visibility
Public by default — making something private is deliberate. Private so far:
`make/tools`, `self/mind`, `friends/people`, `friends/partner`, `friends/advice`,
and `friends/places/visa`.

## Committing
Global rules apply (`~/.claude/CLAUDE.md`): commit found work after checking nothing
private goes in; keep credentials and confided content out of public repos. For
nested repos, do not copy child contents into a parent repo; let the child repo own
those files and keep the parent ignore rules generated.
