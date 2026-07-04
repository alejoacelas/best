# Workspace cleanup plan

Draft — 2026-07-04. Parked in `other/` for now (loose file, so it stays out of the
Questions map). Goal: a clean, repeatable, standard setup — kill the unusual bits, the
residue, and the drift, and make `best`'s own conventions the ground truth.

## What I found (some of it is worse than you thought)

- **Two broken symlinks at `$HOME`.** `~/.gitconfig` and `~/.zprofile` still point at
  `best/machine/dotfiles/...`, but `machine/` was renamed to `ai/` in the reorg. Both
  dangle right now — your git identity and shell profile aren't actually loading from the
  repo. The real files live at `ai/dotfiles/git/gitconfig` and `ai/dotfiles/shell/zprofile`.
- **Git hooks exist but aren't installed.** `.workspace/hooks/{pre-commit,pre-push}` both
  just run `sync-repos.py --check`, but `.git/hooks/` has nothing wired up, and there's no
  `core.hooksPath`. They're dead files. Meanwhile `CLAUDE.md`/`AGENTS.md` tell the agent to
  run the same check by hand — so the intent is duplicated, and neither copy is enforced.
- **`sync-repos.py --check` currently fails** — the README sub-repo table is stale (mid-reorg
  residue). So even the manual check is red right now.
- **"Hooks" means two unrelated things** (this is the confusion): git hooks in
  `.workspace/hooks/` (shell, dormant) vs Claude/Codex hooks in `ai/dotfiles/claude/hooks/`
  (`sync_gate.py`, `guard-judgment.py` — Python, actually wired into global `settings.json`
  and firing). Only the second set does anything.
- **`repos.yaml` is derivable, not residue-but-needed.** It's not submodule leftovers — it's
  a generated manifest `sync-repos.py` reads. But every field in it (path, remote, branch)
  can be discovered by scanning for nested `.git` dirs. The only thing that *can't* be derived
  is privacy, which already lives by hand in `.workspace/private-paths`. So `repos.yaml` is a
  redundant checked-in cache.
- **`~/nonce`** is a standalone repo (`alejoacelas/one-off.git`) of dated one-off projects,
  with its own `AGENTS.md` convention (`YYYY-MM-project-name`, per-folder AGENTS.md).
- **Global ↔ local convention drift.** Global `~/.claude/CLAUDE.md` points at paths that no
  longer exist: `~/best/make/learn/` (it's `questions/learn/` now) and `upcoming/2026-06-foo/`
  (reality is `~/nonce`). Local `best` conventions ("folders are questions") are the real
  ground truth and global contradicts them.

## Proposed changes

### 1. Fix the broken symlinks (do first — it's a live bug)
Repoint `~/.gitconfig` → `ai/dotfiles/git/gitconfig` and `~/.zprofile` →
`ai/dotfiles/shell/zprofile`. Then grep all of `$HOME` for any other `best/machine` symlink
and fix the same way. Add a dotfiles install/link step (or checkup) so a rename can't silently
dangle these again.

### 2. Retire `.workspace/` into conventional homes
`.workspace/` holds three things; give each a normal home:
- `sync-repos.py` → workspace tooling. Move to `ai/` (which *is* "how I set up my machine and
  agents"), e.g. `ai/sync-repos.py`, or a top-level `bin/`. Make it a PEP-723 `uv run` script
  (inline deps, `#!/usr/bin/env -S uv run`) so it's `uvx`-style and dependency-clean.
- `private-paths` → the one genuinely hand-maintained input. Move next to the tool
  (`ai/private-paths`) or fold into a small `ai/repos.toml` config.
- `hooks/` → decide per §3.

Net: no more hidden `.workspace/` top-level oddity.

### 3. Pick ONE enforcement path for the sync check, and wire it for real
Options (recommendation first):
- **(a) Real git hook via `core.hooksPath`.** Point `core.hooksPath` at a tracked
  `ai/githooks/` dir so the hook is version-controlled and auto-active after one `git config`
  (add that to the dotfiles install step). One hook file, calls the uv script. Delete the
  agent-must-remember instruction.
- **(b) Drop git hooks entirely**, keep only the agent/manual check in CLAUDE.md + a Claude
  `Stop`/pre-commit-style hook in `ai/dotfiles/claude/hooks/`. Simpler, but unenforced for
  plain `git` use outside an agent.
- Either way: collapse the two identical pre-commit/pre-push scripts into one.

### 4. Eliminate `repos.yaml`
Make `sync-repos.py` auto-discover nested repos (walk the tree, find `.git`, read
`remote`+`branch`) instead of reading a checked-in manifest. Keep only `private-paths` as
hand input. Delete `repos.yaml` and its "do not edit by hand" ceremony. Regenerate the
`.gitignore` blocks and README tables from live discovery.

### 5. Confirm the nested-repo membership rule
Your principle: nesting is only for things genuinely separate — **private** repos and
**third-party installed** projects; your own content is just plain folders in the one big
`best`. Current nested repos, sorted by that rule:
- **Keep nested (private):** `other/advice`, `other/places/visa`, `people/friend`,
  `people/partner`, `work/tools`.
- **Keep nested (third-party installed):** `work/tools/gdoc/gdoc` (LucaDeLeo),
  `work/tools/gws/gogcli` (openclaw).
- **Judgment call — your own public repos that are separate only because they're
  deployed/shared:** `other/art/meals` (→ alejo.food), `work/writing/blog` (→ myea.blog),
  `ai/dotfiles` (symlinked across tools). These have a real reason to keep their own remote;
  by the strict rule they'd be plain folders, but deployment/symlink needs a repo. → see
  Question 2.

### 6. Move `~/nonce` into `best`
Relocate the one-off-projects repo into `best` (proposed `work/ones/`). It stays a nested
repo (own `one-off.git` remote) since it's genuinely separate history. Reconcile its
`AGENTS.md` convention with best's: it becomes a folder whose `README.md` first line is its
question, and the `YYYY-MM-project-name` + per-folder AGENTS.md rule moves into that folder's
`CLAUDE.md`. → see Question 3 for name + privacy.

### 7. Reconcile global vs local conventions (local wins)
Make `best`'s conventions the single source of truth and strip contradictions from global
`~/.claude/CLAUDE.md`:
- Fix/remove the stale `~/best/make/learn/` reference → `questions/learn/`.
- Fix/remove `upcoming/2026-06-foo/` → point at the new one-off-projects home (§6).
- Keep global as cross-tool *principles*; let `best/CLAUDE.md` own the *conventions*. Surface
  the drift loudly (per global's own "surface drift" rule) rather than silently editing.

## Decisions (2026-07-04)
- **§3 enforcement:** real git hook via `core.hooksPath` → tracked `ai/githooks/`, activated
  in the dotfiles install step. Collapse the two identical scripts into one; drop the
  "agent-must-remember" instruction.
- **§5 membership:** keep `meals`, `blog`, `ai/dotfiles` nested. The rule is **private +
  third-party installed + deployed/shared**.
- **§6 one-offs:** `~/nonce` → `work/once/`, a **public** nested repo (its own `one-off.git`
  history). Individual projects inside it may be their own **private** repos as needed — and
  global `~/.claude/CLAUDE.md` should state this (replace the `upcoming/2026-06-foo/`
  convention with `work/once/YYYY-MM-project-name/`, noting a project folder can be its own
  private repo). Its `AGENTS.md` rules fold into `work/once/CLAUDE.md`.
- **§2 tooling home:** move `sync-repos.py` + `private-paths` to `ai/`, and rewrite the
  script as a self-contained PEP-723 `uv run` script.

## Suggested order
1 (symlinks, live bug) → 4 (drop repos.yaml) + 2 (retire .workspace) together → 3 (hooks) →
6 (move nonce) → 5 + 7 (membership + convention reconciliation). Run `sync-repos.py` green
at the end and commit each nested repo where its change lives.

## Open questions
See the questions I'm asking alongside this draft.
