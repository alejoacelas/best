# best

My life-optimization workspace. Each leaf folder is its own git repo, mounted here
as a submodule; the folders grouping them are plain directories. So this repo is
mostly pointers plus shared instructions.

## Working in a submodule
Commit and push inside the submodule first, then commit the updated pointer here.
A pre-push hook blocks pushing a pointer that isn't on its remote yet.

## Visibility
Public by default — making something private is deliberate. Private so far:
`make/tools`, `self/mind`, `friends/people`, `friends/partner`, `friends/advice`,
and `friends/places/visa`.

## Committing
Global rules apply (`~/.claude/CLAUDE.md`): commit found work after checking nothing
private goes in; keep credentials and confided content out of public repos; for nested
repos, prefer submodule pointers over copied files.
