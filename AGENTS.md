<!--ai-->
See CLAUDE.md.
<!--/ai-->

<!--ai-->
A tracked pre-commit hook (`ai/githooks/`) runs `ai/sync-repos.py --check` and blocks a
commit if the generated maps have drifted. If it fires, run `ai/sync-repos.py`, review,
and commit the affected repos.
<!--/ai-->
