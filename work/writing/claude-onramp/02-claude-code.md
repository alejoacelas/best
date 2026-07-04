# Part 2 — Claude Code

Claude Code is the same assistant as Cowork, with the fence removed. It runs
directly on your computer, so it can use any tool your machine can, reach the
whole internet, log into services, and work on its own for long stretches. This
is the tool you'll reach for once you're delegating anything that matters.

The cost is about thirty minutes of setup, split into small pieces below. Each
one stands on its own and ends with something worth trying.

> **Coming straight here?** Claude Code assumes four things you'd have picked up
> in Part 1: an agent works in a **folder** you give it; you use the **best
> model**; **permissions** are about whether an action is reversible, not
> whether Claude is capable; and you **start fresh** for each task because
> **context** fills up. If those are already second nature, read on. If not,
> [Part 1](01-cowork.md) teaches them with nothing to install.

**The seven things you'll do here:**

- [ ] **1** · Get Claude Code running
- [ ] **2** · Give Claude a memory of your changes (git)
- [ ] **3** · Do a task Cowork couldn't
- [ ] **4** · Let it run — auto mode
- [ ] **5** · Teach it how you work — CLAUDE.md
- [ ] **6** · Build a skill you can share
- [ ] **7** · (Mac) Run several at once

---

## 1 · Get Claude Code running

**Goal:** Claude Code installed and started, signed into your account, waiting
for a task. **~10 min.**

**First, the terminal.** It's a text window where you type commands to your
computer and it types back. You'll mostly use it to
launch Claude and then watch *Claude* type into it — you don't need to learn
terminal commands.

Open it: **Mac** — press ⌘Space, type "Terminal," hit Return. **Windows** —
press Start, type "PowerShell," hit Return.

<details>
<summary>Copy and paste don't work the way I expect →</summary>

Terminals are picky about copy-paste:
- **Mac:** ⌘C and ⌘V work as normal.
- **Windows (PowerShell):** use **Ctrl+Shift+C** to copy and **Ctrl+Shift+V** to
  paste — plain Ctrl+C can interrupt whatever's running. Right-click also
  pastes.

If you paste a command and it looks broken across two lines, you probably
copied it from a narrow window that wrapped it. Paste it into a plain note
first, join it back into one line, then paste it in.
</details>

**Now install.** Copy the line for your system, paste it into the terminal, and
press Return.

**Mac:**
```
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows** (in PowerShell):
```
irm https://claude.ai/install.ps1 | iex
```

That's the whole install. When it finishes, type
`claude` and press Return to start it. The first time, it opens your browser to
sign in; choose your Claude account (the Team or Max account from
[Start here](00-start-here.md)) and you're in.

<details>
<summary>It says "command not found" when I type claude →</summary>

The install finished, but your terminal was opened before it existed. Close the
terminal window completely and open a fresh one, then type `claude` again. If
it still isn't found, tell the assistant which system you're on and paste the
last few lines the installer printed.
</details>

**✓ Done when** you've typed `claude`, signed in, and see it waiting for your
first message.

**Now try →** *"What folder are you in, and what's in it?"* You're now talking
to Claude directly on your own machine — no sandbox in between.

---

## 2 · Give Claude a memory of your changes

**Goal:** git set up so every change Claude makes is a reversible save-point.
**~5 min.**

Before you let Claude work freely, set up **git**. Git takes a snapshot of your
files every time something changes, so any edit Claude makes can be undone —
think save-points in a game, not engineering. This is what makes it safe to let
Claude run without approving every step.

Two small things to do:

1. **Make a GitHub account** at [github.com](https://github.com) if you don't
   have one (a few minutes). GitHub is where those save-points can be backed up
   online.
2. **Let Claude handle the rest.** Once Claude Code is running in a folder, just
   ask: *"Set up git here and commit the current state, then commit each change
   you make from now on."* It knows how.

<details>
<summary>The installer is throwing dialogs at me / asking to install extra stuff →</summary>

Getting git onto your machine sometimes triggers a chain of prompts. Approve
them; they're expected:
- **Mac:** a box titled "install the command line developer tools" may pop up —
  click **Install** and wait. This is Apple's own toolset, safe to accept.
- **Windows:** the Git installer shows many screens of options. You can click
  **Next** through all of them and **Install** — the defaults are fine.
</details>

<details>
<summary>GitHub is asking me to set up two-factor / a passkey →</summary>

GitHub now requires a second login factor. Easiest path: choose **passkey** if
your device offers it (Face ID / Touch ID / Windows Hello), or install an
authenticator app when prompted and scan the code. Do this once; it's quick.
</details>

**✓ Done when** Claude has made its first commit and told you it'll commit each
change from now on.

**Now try →** *"Show me the last thing you committed, then change one small thing
and commit that too."* Now you can see the save-points stacking up — every one a
point you could roll back to.

---

## 3 · Do a task Cowork couldn't

**Goal:** feel the fence come off — a task that reaches past the sandbox.
**~5 min.**

Point Claude Code at the same messy folder you gave Cowork, and give it the same
request. It'll feel familiar — that's on purpose.

Then give it something Cowork *couldn't* do. For example:

> *"Find every PDF in this folder, pull out the total on each invoice, and build
> a spreadsheet summarizing them."*

Claude can install whatever tool it needs, read the files, and produce the
result — no sandbox in the way.

**✓ Done when** Claude has done something that needed a tool it installed itself,
or reached beyond a single folder.

**Now try →** *"Now find the three biggest invoices and chart them, and open the
chart when you're done."* It fetches what it needs and opens the result on your
actual screen.

---

## 4 · Let it run — auto mode

**Goal:** Claude working without stopping to ask on every reversible step.
**~2 min.**

By default, Claude Code asks permission before each action, which gets tiring
fast. Press **Shift+Tab** to cycle its mode; land on **auto-accept edits**. Now
Claude makes changes without stopping to ask — and because git is
recording save-points, every one of those changes is reversible.

That's the whole trade: with your work under git, approving each edit guards
against nothing and costs you constant interruption. Let it run. → [The full
permissions philosophy — from paranoid to YOLO, and where to land →](decisions/trust-and-permissions.md)

<details>
<summary>What about the "skip all permissions" flag I've seen?</summary>

There's a `--dangerously-skip-permissions` mode that turns off every check. It's
meant for throwaway sandboxes and servers, not your real computer — on your own
machine it removes the guardrails that make mistakes cheap. Stick with
auto-accept edits plus git.
</details>

**✓ Done when** you're in auto-accept edits and Claude has run a multi-step task
without stopping to ask on each step.

**Now try →** hand it something with a few moving parts — *"rename these files to
a consistent scheme, then generate an index of what's here"* — and just watch it
work the whole thing through.

---

## 5 · Teach it how you work — CLAUDE.md

**Goal:** a `CLAUDE.md` file Claude reads at the start of every session. **~5
min.**

Remember the reusable-instructions idea from Part 1? In Claude Code it has a
home: a file named **`CLAUDE.md`**. Anything you put there, Claude reads at the
start of every session — your preferences, your project's context, how you like
output formatted, what to never do.

Start tiny. Ask Claude: *"Make a CLAUDE.md and add a note that I prefer short,
direct answers and that you should always use `trash`, never `rm`, to delete
files."* Add to it whenever you catch yourself explaining the same thing twice.
This one file is most of what separates a generic assistant from one that works
the way you do.

**✓ Done when** a `CLAUDE.md` exists with at least one instruction in it.

**Now try →** *"Read my CLAUDE.md back to me, then guess three more preferences I
probably have and propose adding them."*

---

## 6 · Build a skill you can share

**Goal:** a recurring task turned into a `/skill` you (or a teammate) run by
name. **~5–10 min.**

A **skill** turns a task you do repeatedly into something Claude runs by name.
It's a folder with a `SKILL.md` file (in `~/.claude/skills/`) describing the
task. You don't write it by hand — ask Claude:

> *"I do this every week: [describe the task]. Turn it into a skill I can rerun
> by name."*

Now you (or a teammate you send the folder to) can trigger it with `/name`
instead of re-explaining. This is the payoff of the reuse-then-share thread:
**you teach the work once, and it's done forever after — by you or anyone you
share it with.**

**✓ Done when** you've built a skill and triggered it once with `/name`.

**Now try →** run your new skill, then say *"that worked — now make it ask me for
the one input that changes each time, and save the improvement."* You just
edited a capability instead of redoing a task.

---

## 7 · (Mac) Run several at once — Superconductor

**Goal:** more than one Claude Code session working in parallel. **~10 min.**

Agents are slow, and you shouldn't sit watching one. The real unlock is running
**several Claude Code sessions in parallel**, each on a different task. You can
do this in plain terminal windows, but on a Mac there's a much nicer way:
**[Superconductor](https://super.engineering)**.

It's a native Mac app that runs many agents side by side, keeps each one's work
isolated so they don't collide, and gives you a clean view to review and ship
their changes — no terminal juggling. It's free while it's still an early release; you'll want
Claude Code installed first (it drives Claude Code under the hood, using your
own account).

→ [Superconductor vs. plain terminal vs. an editor — and what Windows users
should do →](decisions/interface.md)

**✓ Done when** you've got two agents running at once and have flipped between
them.

**Now try →** set one agent on real work, then in a second one ask: *"Review
what the other session just did and tell me if you'd have done it differently."*
Two agents, one checking the other.

---

You now have the tool most people should end up using day to day. [Part 3](03-power-ups.md)
adds optional power-ups; [the last page](04-now-what.md) is about what to
actually delegate.
