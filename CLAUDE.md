# best

My life-optimization workspace. Each leaf folder is its own git repo, mounted here
as a submodule; the folders grouping them are plain directories. So this repo is
mostly pointers plus shared instructions.

## Iterate forward; never overwrite judgment
Nothing here is finished. Each thing is its current-best version, and the standing
job is to keep making it better — everything, not just code. This is safe because
change is traceable (git history, `~/archive/`), so improving is never destroying.
The one thing to protect is hard-won judgment: the decisions and taste a thing
already embodies. Improvement builds on that judgment; churn overwrites it.

Tips:
- Before changing something made with care, recover *why* it's that way; replace a
  considered choice only with a more considered one.
- Keep traces of the reasoning, not just the diff — when you make a deliberate call,
  leave a note on why, so a later pass doesn't blow past it.
- Protection tracks invested thinking, not size or position — a small thing with a
  lot of judgment in it deserves more care than a big, casual one.
- Build in the feedback loop by default. Anything I'll use repeatedly should have a
  low-friction way to capture friction the moment I feel it, and a path from that
  feedback to a concrete change.

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
