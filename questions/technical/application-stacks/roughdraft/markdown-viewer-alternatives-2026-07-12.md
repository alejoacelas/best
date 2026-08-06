---
human_edit_tracking:
  enabled: true
  history: []
---
# Markdown viewer alternatives

This records the decision on 2026-07-12, when the original README was committed. MarkText seemed like the best option then; its main annoyance was the lack of a simple CLI command for opening files. [Peter Hartree's Roughdraft fork](https://github.com/peterhartree/roughdraft) replaced that choice on 2026-07-26.

The strongest fit is [MarkText](https://github.com/marktext/marktext) if open source matters, or [Typora](https://typora.io/) if polish and reliability matter more. [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) is the fastest native option; [VS Code](https://code.visualstudio.com/docs/languages/markdown) is best when the document belongs to a developer workflow.

| Option | View/edit model | External changes | Speed | Open source | Comments | Appearance |
|---|---|---:|---:|---:|---:|---|
| [MarkText](https://github.com/marktext/marktext) · [screenshot](https://github.com/marktext/marktext/raw/develop/docs/assets/marktext.png) | Editable rendered view; `⌘⌥S` toggles source | **Yes** | Good | **MIT** | No | Clean, closer to a writing app |
| [Typora](https://typora.io/) · [screenshots](https://typora.io/#screenshots) | Editable rendered view; `⌘/` toggles source | **Yes** | Good | No; paid | No | Most polished |
| [MarkEdit](https://github.com/MarkEdit-app/MarkEdit) · [screenshot](https://github.com/MarkEdit-app/MarkEdit/raw/main/Screenshots/01.png) | Source editor; optional preview pane extension | Not clearly documented | **Excellent** | **MIT** | No | Native Mac, minimal |
| [VS Code](https://code.visualstudio.com/docs/languages/markdown) · [screenshots](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) | Source/preview toggle or synchronized split view | **Yes** | Good after startup | Codebase MIT; Microsoft build has additions | **Yes, through GitHub PR review** | Unmistakably a developer tool |
| [Zettlr](https://www.zettlr.com/) · [screenshot](https://github.com/Zettlr/Zettlr/raw/develop/resources/screenshots/zettlr_view_dark.png) | Source with selected elements rendered inline; separate preview/export workflow | Yes, workspace-oriented | Fair | **GPL** | No native review comments | Attractive, but busier |

## 1. MarkText — closest match

- Its default view is editable and rendered in place: formatting appears without hiding your ability to edit.
- `⌘⌥S` switches between rendered editing and raw Markdown. `⌘⇧P` opens a command palette; sidebar, tabs, focus mode, and typewriter mode all have shortcuts. [Official basics](https://github.com/marktext/marktext/blob/develop/packages/website/content/docs/end-user/BASICS.md)
- Recent development explicitly addresses preserving scroll position when a file changes externally. [Releases](https://github.com/marktext/marktext/releases)
- MIT-licensed and cross-platform.
- The old stable release is from 2022; active development has resumed, but the current 2026 builds are release candidates. Test it before making it the default `.md` application.
- No document-comment system.

## 2. Typora — best finished product

- The rendered document is the editor; Markdown syntax appears around the part being edited.
- `⌘/` switches to raw source. It has quick-open, outline, focus/typewriter modes, and extensive shortcuts. [Shortcut reference](https://support.typora.io/Shortcut-Keys/)
- Typora explicitly supports external file updates, and recent releases fixed macOS file-watching problems. [Release notes](https://typora.io/releases/stable)
- Themes are substantially nicer than Vim or a default code editor.
- Closed-source and paid. That is its main mismatch.
- No comments or suggested edits.

## 3. MarkEdit — best speed and native feel

- A current, native macOS application: approximately 4 MB, built to handle 10 MB and million-line files. It uses CodeMirror for multi-cursor editing and code folding. [Project and download](https://github.com/MarkEdit-app/MarkEdit)
- MIT-licensed, actively developed, and integrates with Apple Shortcuts and AppleScript.
- The default experience is a good-looking source editor. Rendered preview requires the official [preview extension](https://github.com/MarkEdit-app/MarkEdit-preview).
- This feels most like “TextEdit for developers.”
- There is no explicit guarantee that an already-open document refreshes immediately after another process rewrites it. Because that is a hard requirement, verify it before adopting MarkEdit.

## 4. VS Code — best developer workflow

- `⇧⌘V` toggles editor/preview. `⌘K V` opens a synchronized preview beside the source. The preview updates in real time. [Official Markdown documentation](https://code.visualstudio.com/docs/languages/markdown)
- Every command can be rebound, and nearly everything is accessible through `⌘⇧P`.
- File watching, Git diffs, terminal access, search, and opening an entire project are mature.
- GitHub pull-request review adds line comments to Markdown diffs, making this the only option here with a serious commenting workflow. [VS Code GitHub review](https://code.visualstudio.com/docs/sourcecontrol/github#_reviewing)
- It is heavier and visually more “IDE” than the other choices, although themes and Zen Mode help.
- Microsoft’s VS Code source is MIT-licensed; the downloadable Microsoft build contains Microsoft-specific branding and services.

## 5. Zettlr — capable but probably too much

- Open source, actively maintained, keyboard-oriented, and supports Vim-style keybindings without forcing a terminal aesthetic.
- Inline preview can render selected Markdown elements while retaining editable source. [Appearance documentation](https://docs.zettlr.com/en/editor/appearance/)
- Strong for citations, long-form research, workspaces, export, and document organization.
- Those capabilities make it heavier and less direct than “double-click a Markdown file and read/edit it.”
- No collaborative comments.

## Trial order

1. **MarkText** — closest to the requested interaction.
2. **Typora** — benchmark for polish and reliability.
3. **MarkEdit** — benchmark for native speed.
4. **VS Code** — choose it if Markdown is usually next to code or Git review matters.

Commenting is the outlier requirement. Local Markdown files have no standard representation for anchored comments. GitHub pull-request comments solve it without modifying the document; otherwise the editor would need to embed conventions such as HTML comments or CriticMarkup into the file.
