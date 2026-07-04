<!--ai-->
What did each editing agent change, and would I have kept it?
<!--/ai-->

<!--ai-->
One report per agent run, named `<date>-<file>--<agent>.md`, each edit as
before → after with a one-line why. The agents (`bracket-filler`,
`jargon-auditor`, `pg-compressor`, defined in `best/.claude/agents/`) edit the
guide files in place; this folder is the audit trail. To rerun: ask Claude to
run the three writing agents on a file — bracket-filler first, pg-compressor
last, one at a time since they edit the same file.
<!--/ai-->
