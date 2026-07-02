# My infrastructure — how it all fits together

A map of what's set up on this Mac, so I own it rather than inherit it. Written
2026-07-02. Update it when the wiring changes.

## The spine: machine/dotfiles is the source of truth

The dotfiles repo (`github.com/alejoacelas/dotfiles`) lives here at
`~/best/machine/dotfiles` — a nested repo inside this folder — where **the tracked
file *is* the live file**. `bin/install.sh` symlinks each tracked file into the path
its tool reads. So editing in `dotfiles/` edits the running config.

A fresh Mac: clone `best`, clone `dotfiles` into `machine/dotfiles`, run
`bin/install.sh`, then `brew bundle --file ~/best/machine/dotfiles/Brewfile`.

Live symlinks (all point back into `machine/dotfiles`):

| Live path | Source in machine/dotfiles/ |
|---|---|
| `~/.claude/CLAUDE.md` | `claude/CLAUDE.md` |
| `~/.claude/settings.json` | `claude/settings.json` |
| `~/.claude/skills` | `claude/skills/` |
| `~/.zprofile` | `shell/zprofile` |
| `~/.gitconfig` | `git/gitconfig` |
| `~/.codex/AGENTS.md`, `config.toml`, `rules` | `codex/` |

`install.sh` is idempotent: correct link → no-op; untracked real file in the way →
migrates it into the repo; tracked file in the way → backs it up as
`.pre-symlink.<timestamp>` then links.

## Claude Code config

- **settings.json** — model `claude-fable-5[1m]`, `effortLevel: high`,
  `skipDangerousModePermissionPrompt: true`, `theme: dark`,
  `cleanupPeriodDays: 36500` (~100 years — transcripts effectively never purged).
  Broad dev allowlist (brew, uv, node, npm/npx, pnpm, yarn, cargo, rustup, python3,
  pip, gh). No deny list. Plugin: `vercel@claude-plugins-official`.
- **CLAUDE.md** — global agent instructions, principle + tips per section: Write
  things I want to read · Show finished work · Finish don't ask · Default to public
  · Keep the root small · Gather what I learn.
- **One hook** — `PreToolUse` on `Read`, scoped to the private `~/people` repo:
  runs `claude/hooks/sync_gate.py`, which nudges (never blocks) to re-check a Drive
  mirror's freshness before trusting a file. Non-blocking, throttled once/day.
- **Skills** (`claude/skills/`):
  - `granola-transcript` — pull + clean + file Granola call transcripts.
  - `sync-drive` — pull-only mirror of Google Doc tabs into local markdown.
  - `vercel-deploy-domain` — deploy a folder to Vercel prod + point a Namecheap
    domain at it.

## Shell, git, tools

- **Shell** — zsh. Only startup file is `~/.zprofile` (symlinked). It sets PATH:
  Codex `~/.local/bin`, `brew shellenv`, and a Claude-added block for Python 3.13 +
  Rust. No `.zshrc`/`.zshenv`.
- **Git** — user Alejandro Acelas. `includeIf gitdir:~/best/` pulls in
  `git/best.gitconfig`. `[credential]` uses `gh auth git-credential` for github.
  A **secret-scan pre-commit hook** (`hooks/pre-commit`, enabled via
  `core.hooksPath hooks`) blocks commits containing token/key patterns.
- **Homebrew** — `gh`, `jq`, `node@24`, `python@3.13`, `ripgrep`, `rustup`, `uv`;
  cask `fluidvoice`; npm globals `corepack`, `roughdraft`, `yaml`. Brewfile is the
  source of truth. (`doppler` is installed but not in the Brewfile — drift.)

## The `best` workspace

Life-optimization workspace. Parent folders are plain directories; each leaf is a
real git repo (not submodules). `.workspace/sync-repos.py` is the enforcer:
regenerates `repos.yaml` + the managed `.gitignore` blocks, and `--check` (run by
`.workspace/hooks/` pre-commit/pre-push) fails if anything drifted or if submodule
metadata reappears. Domains: `becoming` (values), `make` (things I make + learning),
`self`, `friends`, `upcoming` (parking lot), `machine` (this — the machine itself).

## What runs in the background

Almost nothing silent. Checked cron, LaunchAgents, LaunchDaemons, Claude's scheduler:

- **Only truly recurring job: Google's updater, hourly** (`~/Library/LaunchAgents/
  com.google.GoogleUpdater.wake.plist`).
- Login items (app-managed, not timers): AltTab, Raycast, Granola, Wispr Flow,
  Superconductor, Claude Desktop updater. Google Keystone plists are disabled stubs.
- **No custom cron, no custom daemons, no scheduled Claude routines.** Claude's
  `daemon` is transient — spawns for background jobs, exits when idle. The
  `schedule`/`loop` skills exist but nothing is set up with them.
