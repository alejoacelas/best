<!--ai-->
# How Roughdraft was developed

The fork records product boundaries in short ADRs and operational rules in `AGENTS.md`; the original repository uses a fuller chain from brainstorms through implementation plans, executable format specifications, tests, and reusable solution notes.

## 1. Peter Hartree's fork

Peter's fork adds five commits on top of the original repository's 2026-06-19 tip. Two commits explicitly credit AI co-authors: Claude for the server-discovery fix and Codex for the multi-document workflow. The committed documentation contains two new ADRs, an expanded agent handoff procedure, and an updated UI-state capture matrix; it contains no new brainstorm or implementation-plan file.

### Product decisions

1. **Give the web app a native identity without moving document state into Electron.** A thin, sandboxed Electron shell owns one window, activation, navigation restrictions, and server validation. The existing server still owns open requests, and the renderer still owns Markdown editing. A durable last-request-wins slot prevents a cold CLI open from racing renderer startup. [ADR 0005](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/docs/adr/0005-desktop-shell-and-open-intents.md) · [implementation commit](https://github.com/peterhartree/roughdraft/commit/46182731b6b706bfe54efcf3fdee168756af3919)

2. **Make Markdown the handoff, not a live agent watcher.** The native-workspace commit removes the review-completion event channel. The user closes the document and asks the agent to reread durable CriticMarkup from disk. This reduces coordination state outside the file. [commit rationale](https://github.com/peterhartree/roughdraft/commit/46182731b6b706bfe54efcf3fdee168756af3919) · [agent prompt](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/app/public/prompt.md)

3. **Optimize for direct editing.** New documents open in Editing mode, and the mode control exposes `⌘⌥S` for switching to Suggesting. [commit](https://github.com/peterhartree/roughdraft/commit/a038cf71f6d0b83c0743720af10aefc5b4851879)

4. **Treat serialization bugs as product-contract failures.** A focused fix preserves single tildes rather than interpreting them as unsupported strikethrough syntax, with Markdown and CriticMarkup regression tests. [commit](https://github.com/peterhartree/roughdraft/commit/1daf2f7d07fc28b7e20d55e170a87e6e7ff58590)

5. **Repair discovered server state for the desktop boundary.** If the CLI finds a healthy server after `server.json` goes stale, it rewrites the state file because the desktop shell can only locate the server through that file. The commit explains the cross-process failure before the fix. [commit](https://github.com/peterhartree/roughdraft/commit/4551c52bbb3adf4c850fb630ea224017da5b03aa)

6. **Support several explicit files without becoming a project browser.** The renderer persists only files opened by URL or CLI intent. New opens normally become active; blocked opens remain unread. The sidebar is ordered by filesystem modification time, `⌘P` switches by filename, and per-file selection and scroll state expire after 12 hours. [ADR 0006](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/docs/adr/0006-session-open-file-sidebar.md) · [implementation commit](https://github.com/peterhartree/roughdraft/commit/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391)

### Development pattern

- **Write the boundary, including non-goals.** Both new ADRs separate what the feature owns from adjacent ideas it must not absorb.
- **Encode the local handoff in agent instructions.** `AGENTS.md` tells the agent to test, package, replace the personal app, reopen it, and inspect the live Dock icon. It also records a previous Launch Services failure so the next agent does not repeat it. [fork `AGENTS.md`](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/AGENTS.md)
- **Specify visual states, not screenshots alone.** The fork expands the capture matrix with sticky controls, blocked unread files, the quick switcher, unavailable-file recovery, recent documents, and empty history. Each row names setup, stable selectors, and the assertion. [UI-state guide](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/docs/spec/ui-state-screenshot-guide.md)
- **Use commit bodies as small implementation records.** The server fix documents the exact stale-state sequence; the multi-document commit lists persistence, close semantics, restored view state, regression coverage, and packaging.

The fork's specification layer is lighter than the original's: Peter captured architecture and invariants, but the large native-shell and multi-document changes have no committed task-by-task plan. Any detailed agent plan may have existed outside the repository.

## 2. Original repository

The original repository has 83 commits through 2026-06-19. Eighty-one commit subjects end in a pull-request number and there are no merge commits, consistent with squash merging. Eleven commits are authored by `devin-ai-integration[bot]`; five commit trailers credit Claude. Those numbers show AI participation, but not how much uncredited work used agents. [history through `686919e`](https://github.com/Lex-Inc/roughdraft/commit/686919ec0a3a0648fd2f1fdb2665816fb4b10608)

### Specification layers

1. **ADRs define identity and durable invariants.** The first four decisions say the unit of work is one Markdown file, CriticMarkup is the portable review format, rich/code editors must minimize Markdown rewrites, and the CLI state file is process state rather than a document database. The remote feature amended existing ADRs instead of quietly violating them. [ADR 0001](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/adr/0001-single-local-markdown-file.md) · [ADR 0002](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/adr/0002-criticmarkup-as-review-format.md) · [ADR 0003](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/adr/0003-markdown-roundtrip-contract.md) · [ADR 0004](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/adr/0004-cli-server-state-model.md)

2. **Brainstorms begin with the user's actual workflow.** The remote-document brainstorm names the machines, failed workarounds, goals, non-goals, alternatives, ADR tensions, assumptions, security model, open questions, measurable success criteria, and the next planning command. [remote-mode requirements](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/brainstorms/remote-document-mode-requirements.md)

3. **Plans trace requirements into implementation units.** The remote-mode plan resolves SSE versus WebSocket, state lifetime, concurrency, fallback behavior, binding, and save semantics before dividing work into dependencies, files, test scenarios, manual verification, risks, and documentation updates. It explicitly labels pseudocode as directional rather than code to copy. [remote-mode plan](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/plans/2026-04-30-001-feat-remote-document-mode-plan.md)

4. **Large UI work gets a separate test plan.** The save-indicator and homepage storyboard features each have an implementation plan plus a test-plan document that reconciles unit, component, integration, and browser coverage with required harness changes. [save implementation plan](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/plans/2026-05-07-save-indicator-command-s.md) · [save test plan](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/plans/2026-05-07-save-indicator-command-s-test-plan.md) · [storyboard plan](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/plans/2026-05-07-homepage-workflow-storyboard.md)

5. **The interchange format is specified independently of the UI.** Roughdraft Flavored Markdown defines canonical markers, IDs, YAML metadata, threads, parsing, round trips, and review JSON. A JSON Schema and fixtures make examples machine-checkable. [format specification](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/spec/roughdraft-flavored-markdown.md) · [schema](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/spec/roughdraft-flavored-markdown.schema.json) · [fixtures](https://github.com/Lex-Inc/roughdraft/tree/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/spec/fixtures)

6. **The UI specification is a state inventory.** The screenshot guide defines fixtures, route/setup instructions, stable selectors, a capture matrix, rare states that need mocking, and a maintenance checklist. This lets an agent reason about the interface without reading component code first. [UI-state guide](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/spec/ui-state-screenshot-guide.md)

7. **Failures become searchable institutional memory.** Solution notes have structured frontmatter for module, symptoms, root cause, resolution, severity, and tags. The handoff example records why server tests were insufficient and requires an end-to-end reproduction of the exact split-button path against the file on disk. [solution note](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/docs/solutions/ui-bugs/verify-exact-ui-submit-path-for-cross-boundary-handoffs.md)

8. **Agent behavior is part of the product.** `AGENTS.md` requires failing reproductions, realistic boundary checks, the fastest predictive test, UI-state documentation updates, worktree-specific CLIs, reviewable Markdown plans, running implementation notes, and Roughdraft/CriticMarkup handoffs. The app also serves a shorter setup prompt that installs this workflow into other agents. [`AGENTS.md`](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/AGENTS.md) · [served agent prompt](https://github.com/Lex-Inc/roughdraft/blob/686919ec0a3a0648fd2f1fdb2665816fb4b10608/packages/app/public/prompt.md)

### Development pattern

The recurring loop is:

1. Start from a concrete human workflow and list non-goals.
2. Check the proposal against ADR boundaries.
3. Resolve architecture at the document level.
4. Trace each requirement to files, tests, and realistic verification.
5. Let the agent implement while recording deviations in implementation notes.
6. Review the plan and feedback in the same Markdown/CriticMarkup format the product preserves.
7. Run narrow predictive tests, then the full check and browser smoke tests.
8. Convert surprising failures into tagged solution notes and update the UI-state inventory.

The strongest reusable idea is that planning artifacts are contracts between agents: ADRs constrain scope, plans expose decisions and dependencies, test plans define evidence, schemas define interchange, and solution notes prevent repeated mistakes. Code is the implementation of that chain, not its primary explanation.
<!--/ai-->
