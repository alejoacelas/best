# Improvements — making the setup better

The backlog for owning and sharpening the setup. Ordered by bite. When an item is
done, move it to the Done log with a note on what changed and why.

## Open

### From the 2026-07-02 checkup
- **Re-auth the Google Calendar connector** (your action): run `/mcp` and select
  "claude.ai Google Calendar". Flagged in Claude's MCP cache; fails silently until then.

### Decide (conscious choice, not a default)
- **`cleanupPeriodDays: 36500`** keeps Claude transcripts ~forever. Left as-is: the
  history/memory value is worth more than the disk. Make it a decision, not a drift —
  revisit if `~/.claude` gets heavy.

### Ideas (unshaped)
- **Set up the first scheduled routine.** Nothing is scheduled today and the
  `schedule`/`loop` skills are unused — e.g. a weekly "what drifted in my dotfiles /
  what's stale in my repos" run that appends here.
- **Fresh-Mac dry run.** The clone→`install.sh`→`brew bundle` path is now
  reproducible on paper; actually test it in a throwaway VM/container before trusting
  it for a real migration. Codex config won't carry over (by design) — seed it from
  `~/.dotfiles/codex/config.reference.toml`.
- **`best` hooks aren't auto-activated on a fresh clone.** `.workspace/hooks` only
  run because `core.hooksPath` is set in `best`'s *local* config (untracked). A fresh
  `git clone` of `best` wouldn't enable them. Add a one-line bootstrap (or an
  `install.sh` step) that runs `git config core.hooksPath .workspace/hooks`.
- **Brewfile audit.** Added `doppler`; sweep the rest of `brew leaves` for other
  installed-but-undeclared tools.

## Linked meta-work (lives elsewhere, belongs to this domain)
- `../make/learn/breadth/agent-cli-dive/` — mapping what Claude Code / Codex CLI can
  actually do vs. the naive "LLM with shell access" model. The deep version of
  `infrastructure.md`.
- `../make/tools/.codex/skills/tidy-up/` — the folder-age auditor that flags stale
  projects. A setup-flavored utility worth running periodically.
- `prompt-setup.md` (now in this folder) — the reasoning behind distilling the
  instruction files to generating principles.

## Done — 2026-07-02
- **Submodule contradiction in `../CLAUDE.md` → fixed.** Reworded the opening line to
  "its own nested git repo (not a submodule)", matching the rest of the file and the
  tooling.
- **`make/tools/email` + `make/tools/slack` → published.** Created public GitHub repos
  and pushed (planning docs only; no secrets or personal data). Now backed up; manifest
  updated.
- **Machine-checkup skill → set to report-only.** Per preference: it now files findings
  only, changes nothing.
- **Fresh-Mac clone was subtly broken → fixed.** Committed + pushed the pending
  dotfiles: `gh` credential helpers (git auth), the distilled `CLAUDE.md`, pending
  settings, and the previously-untracked `vercel-deploy-domain` skill. Secret-scan
  hook passed; nothing private in-tree.
- **Dead submodule-era git hook → removed.** Deleted `git/best-hooks/`,
  `git/best.gitconfig`, and the `includeIf` that pointed at them. `.workspace/hooks`
  is the real (and only) guard now.
- **Codex `config.toml` churn → stopped.** Codex now owns `~/.codex/config.toml`
  directly (no longer symlinked/tracked); `codex/config.reference.toml` is the
  snapshot for seeding a new machine. No more perpetually-dirty tree.
- **`AGENTS.md` duplicate → unified.** `~/.codex/AGENTS.md` now symlinks to the one
  `claude/CLAUDE.md` (retitled "Global agent instructions"); deleted the hand-kept
  copy. One source of truth for both tools.
- **Brewfile drift → fixed.** Declared `doppler` (was installed, undeclared).
- **`prompt-setup.md` → moved here** off the root (its ask is largely delivered in
  the distilled global `CLAUDE.md`).
- **`upcoming/2026-06-finish-the-work/` → archived.** Its "Finish, don't ask"
  principle is now live in the global `CLAUDE.md`. Moved to
  `~/archive/best/upcoming/2026-06-finish-the-work/`.
