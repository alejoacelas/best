---
human_edit_tracking:
  enabled: true
  history: []
---
# Roughdraft

[Peter Hartree's Roughdraft fork](https://github.com/peterhartree/roughdraft) is my default Markdown review tool. It opens local files in a native macOS window, saves directly to disk, and keeps comments and suggestions in the file as CriticMarkup.

## Use it

Open a file:

```bash
roughdraft open "/absolute/path/to/file.md"
```

The first open starts a background server. Later opens reuse it and add the file to the sidebar.

```bash
roughdraft status
roughdraft doctor "/absolute/path/to/file.md"
roughdraft stop
```

Inside the app:

- `⌘⌥S` switches between Editing and Suggesting.
- `⌘P` searches open files; `⌘1`–`⌘9` selects a sidebar file.
- `⌘W` closes the current document without quitting the app.
- Comments and suggestions autosave into the Markdown file. Ask the agent to reread the file after reviewing.
- A disk conflict pauses autosave instead of overwriting an external change.

## Expect

- It is local-only: no account, cloud storage, or telemetry.
- The app remembers recent explicit files and restores each file's selection and scroll position for up to 12 hours.
- It is a review surface, not a vault or project browser. It does not scan neighbouring files.
- `roughdraft open` returns after opening the file; closing the document is not a completion signal.
- The rich-text editor may normalize source formatting on open even without a deliberate edit. It changed table spacing and blank lines in the first test file, so inspect `git diff` after review.
- The app does not register itself as Finder's `.md` handler. Use the CLI rather than double-clicking a file.

Installed 2026-07-26 from fork commit [`d4c6c30`](https://github.com/peterhartree/roughdraft/commit/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391). The source checkout is `/Users/alejo/best/work/roughdraft`, the app is `/Users/alejo/Applications/Roughdraft.app`, and the global `roughdraft` CLI was packaged from that checkout.

See [how Electron works in Roughdraft](../electron.md), [Electron versus Tauri](../electron-vs-tauri.md), the [desktop](../desktop.md) and [mobile](../mobile.md) application-stack guides, [how the fork and original repository were developed](development-patterns.md), the [previous viewer comparison](markdown-viewer-alternatives-2026-07-12.md), and the [install and research record](../history/2026-07-26-roughdraft.md).
