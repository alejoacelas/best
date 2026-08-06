# Roughdraft install and research record

## Scope

- Preserve the former Markdown-editor README as a dated alternatives note.
- Install Peter Hartree's fork, make it the workspace's default Markdown review tool, and open a real file.
- Document use, limitations, and the development patterns in the fork and original repository.

## Method

1. Located the original README commit with `git log --follow -- markdown/README.md`.
2. Cloned [`peterhartree/roughdraft`](https://github.com/peterhartree/roughdraft) and [`Lex-Inc/roughdraft`](https://github.com/Lex-Inc/roughdraft) into temporary research directories.
3. Compared the original tip `686919e` with fork tip `d4c6c30`; read every ADR, both repositories' agent instructions, the brainstorm and plan outlines, the remote-mode plan, the format and UI specifications, the served agent prompt, and the solution note.
4. Counted commits, PR-numbered subjects, authors, and AI co-author trailers from local Git history.
5. Built and tested the fork, packaged the CLI from the checkout, installed the app, opened this folder's README, and inspected the native window.

Useful reproduction commands:

```bash
git log --follow --date=iso --format='%H %ad %s' -- markdown/README.md
git -C /path/to/fork log --reverse --date=short --format='%h %ad %s' upstream/main..main
git -C /path/to/fork diff --stat upstream/main...main
git -C /path/to/original rev-list --count HEAD
git -C /path/to/original log --format='%s' | rg -c '\(#[0-9]+\)$'
git -C /path/to/original shortlog -sne HEAD
```

## Installation

Installed source:

```text
Repository: https://github.com/peterhartree/roughdraft
Commit: d4c6c306e64c4588cedb1c19e52f59c8e6ddf391
Checkout: /Users/alejo/best/work/roughdraft
App: /Users/alejo/Applications/Roughdraft.app
CLI: /opt/homebrew/bin/roughdraft
Bundle ID: is.pjh.roughdraft
Signing identity: Switcher Local Code Signing
```

The registry package still identifies the original `Lex-Inc/roughdraft` repository, so the CLI was built with `npm pack` from Peter's checkout and installed from that tarball.

Two local toolchain adjustments were needed during packaging:

- pnpm 11 moved dependency build policy from the root `package.json` field. The install temporarily allowed Electron/esbuild scripts and denied MSW.
- Electron Forge 7.11's archive extraction exited early under Node 24. Packaging succeeded under Node 22.

The first installed bundle was signed with hardened runtime and crashed because the local certificate has no Apple Team ID; dyld rejected Electron Framework as a different team. Re-signing the entire bundle with the same stable local identity and no hardened-runtime flag fixed launch.

## Verification

- `pnpm check`: lint and selector checks passed; 434 tests passed; all four package builds passed.
- Electron Forge produced `Roughdraft.app` for arm64 under Node 22.
- `codesign --verify --deep --strict`: installed app valid on disk and satisfies its designated requirement.
- `roughdraft doctor markdown/README.md --json`: valid Roughdraft Flavored Markdown 0.2, with no errors or warnings.
- `roughdraft open ... --json`: opened through `desktop-app` mode at `http://localhost:7373`.
- Native UI inspection: the signed app rendered the real README, sidebar, table, and Editing control.
- The initial crash report predates the corrected signature; the repaired launch remained running.
- Opening the first file normalized table spacing and blank lines without an intentional edit. The file was restored from Git before being moved; the guide records the caveat.

## Sources

The source-linked findings are in [development-patterns.md](../roughdraft/development-patterns.md). The usage and installation handoff is in [README.md](../roughdraft/README.md).
