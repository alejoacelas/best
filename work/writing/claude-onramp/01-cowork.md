# Part 1 — Claude Cowork

Cowork is Claude with hands. You describe an outcome; it plans, works across
your files and connected apps for several steps, and hands back finished work.
It lives inside the Claude desktop app, and it's the fastest way to feel what
delegating to an agent is like.

This part is a series of small, self-contained things to do — most take about
five minutes, each ends with something worth trying, and by the last one you'll
have delegated real work and picked up the four ideas the rest of the guide
relies on.

**The seven things you'll do here:**

- [ ] **1** · Get Cowork running
- [ ] **2** · Your first hand-off
- [ ] **3** · Talk, don't type
- [ ] **4** · Know what you're approving
- [ ] **5** · Give it your accounts
- [ ] **6** · Make it remember you
- [ ] **7** · Teach it a skill

---

## 1 · Get Cowork running

**Goal:** the Claude desktop app installed, the Cowork tab open, its sandbox
ready to work. **~5 min** (plus a one-time download).

Download the Claude desktop app from **[claude.com/download](https://claude.com/download)**
and sign in. Open the **Cowork** tab. The first time you do, Claude downloads a
small sandbox (~2 GB) where it runs its work safely — give it a minute.

<details>
<summary>Your computer is warning you about the app you downloaded →</summary>

That's normal. Any app downloaded from the internet gets a one-time "are you
sure?" check.

- **Mac:** if it says the app "can't be opened because Apple cannot check it,"
  open **System Settings → Privacy & Security**, scroll down, and click **Open
  Anyway**.
- **Windows:** if you see a blue "Windows protected your PC" box, click **More
  info → Run anyway**.

You're approving *this* app, which you chose to download. That's fine.
</details>

<details>
<summary>You need Cowork on Windows →</summary>

Cowork runs its sandbox in a lightweight virtual machine, so Windows needs one
feature turned on first. You need **Windows 10 (22H2) or newer**.

If you hit the error **"Virtual Machine Platform not enabled":**
1. Press Start, type **"Turn Windows features on or off,"** open it.
2. Tick **Virtual Machine Platform**.
3. Click OK and **restart** your PC.

Then reopen Cowork. (This is Windows' built-in virtualization — not the same as
WSL, and you don't need to install anything else.)
</details>

<details>
<summary>You're on a work laptop and something's blocked →</summary>

Managed laptops sometimes block new apps or the Google sign-in you'll do in a
minute. If you see "blocked by your administrator" or "access blocked — admin
needs to review," that's IT policy, not you. Ask your IT contact to allowlist
the Claude desktop app (and, for connectors, Claude in the Google Admin
console). The assistant can draft that message for you — just ask.
</details>

**✓ Done when** the Cowork tab is open and past its "getting ready" download.

**Now try →** *"Say hi, and tell me what you can and can't reach on my computer
right now."* Its answer is a quick tour of the sandbox it lives in — the fence
that Part 2 removes.

---

## 2 · Your first hand-off

**Goal:** one real task delegated start to finish, so you feel the handoff
instead of reading about it. **~5 min.**

**First, pick the best model.** Somewhere in the interface is a model picker
(Claude's models, fast to most-capable, are Haiku, Sonnet, Opus). Set it to the
best one and leave it there. The reasons you'd pick a weaker model — speed, cost
— both have better answers than "use a weaker model." → [Why: just use the best
model →](decisions/which-model.md)

Now point Cowork at a folder and give it something concrete. A good first task:
pick a messy folder — a downloads pile, an unsorted project — and say:

> *"Look through this folder, tell me what's in it, and propose a way to
> organize it. Don't move anything yet — just show me the plan."*

Cowork reads the files, thinks, and comes back with a proposal. That's the whole model in miniature: **you hand it a folder and an
outcome; it works; it shows you.** You stay in the loop by reacting, not by
doing the steps yourself.

Pick something where a wrong answer costs you nothing. The point is to feel the
handoff, not to get a perfect result.

**✓ Done when** you've read back a plan Cowork produced from a request you gave
it.

**Now try →** *"Good — now actually do it, and move the files the way you
proposed."* Watch it carry out its own plan.

---

## 3 · Talk, don't type

**Goal:** a dictation tool installed, and your first request given by voice.
**~5–10 min.**

The habit that most improves what you get back: **say your request out loud
instead of typing it.** When you type, you tidy up and leave out context. When
you talk, you ramble — and the ramble (why you care, what you're torn about,
what you're unsure of) is exactly what makes the answer fit.

Install a dictation tool and use it for anything longer than a sentence. Our
pick is Wispr Flow. → [Which dictation tool, and why talking beats typing →](decisions/dictation.md)

**✓ Done when** you've dictated one request to Cowork instead of typing it.

**Now try →** ramble at it: *"Here's this thing I keep meaning to sort out…"* —
and let the mess in your voice become a better brief than you'd have typed.

---

## 4 · Know what you're approving

**Goal:** the one rule for permission prompts, felt on a real prompt. **~3 min.**

Before Cowork does anything with consequences — sending, deleting, sharing — it
asks. The right instinct is simple: **you're not judging whether Claude is
capable; you're judging whether you could undo it.**

- Reversible (editing a file, drafting, reorganizing)? Wave it through.
- Irreversible (sending an email, deleting, publishing)? *That's* the prompt to
  actually read.

Cowork is built to make this safe — it runs in a sandbox and asks before the
scary stuff. → [How much to trust the agent (and why hidden instructions in what it reads shouldn't stop you) →](decisions/trust-and-permissions.md)

**✓ Done when** you've seen both kinds of prompt and know which one to actually
read.

**Now try →** *"Draft me a short email to myself, then send it."* Drafting won't
stop for you; sending will. That pause is the whole rule in one gesture.

---

## 5 · Give it your accounts

**Goal:** Gmail, Calendar, and Drive connected, and one task answered from them.
**~5 min.**

Cowork gets far more useful once it can reach your email, calendar, and files.
In the desktop app, open the menu → **Connectors → Manage connectors**, and
connect **Google Drive**, then **Gmail** and **Google Calendar**. Each opens a
Google sign-in where you grant access.

A connector is just an account you've plugged in. Once connected, Claude can act
there — with the same permission prompts as everything else.

<details>
<summary>A browser tab opened and I'm not sure what to do →</summary>

That's the normal sign-in ("OAuth") dance. Google opens in your browser, asks
you to pick your account and approve access, then hands you back to Claude.
Approve the access it asks for, and return to the Claude app — the connector
will now show as connected. If the tab seems to hang, come back to Claude
anyway; it often already worked.
</details>

<details>
<summary>Google says "access blocked" or "admin needs to review" →</summary>

On a work Google account, your organization has to allow Claude first. That's an
IT setting (Google Admin console → API controls), not something you can fix from
here. Ask your admin to approve Claude; the assistant can draft the request.
</details>

The built-in Google connectors mostly *read* (search your mail, read a doc). To
have Claude *write* — send mail, edit docs — you'll want the deeper setup in
[Part 3](03-power-ups.md), or Claude Code. → [Which connectors are worth it →](decisions/connectors.md)

**✓ Done when** at least one Google connector shows connected and Cowork has
answered a question using it.

**Now try →** *"What's on my calendar tomorrow, and is anything double-booked or
back-to-back with no gap?"*

---

## 6 · Make it remember you

**Goal:** a running file it keeps as it works, plus a first note it reuses across
chats. **~5 min.**

Two habits that turn Cowork from a one-shot answerer into something that
accumulates.

**Keep a running file.** Ask Cowork to hold a markdown file as it works — a
running plan, notes, the output so far:

> *"Keep a file called `plan.md` as you go, and update it at each step."*

This isn't housekeeping. It does four things at once:

- **Visibility** — you see the intermediate steps, not just the final answer.
- **Course-correction** — you catch a wrong turn while it's cheap to fix.
- **Specific asks** — you can point at a section and say "redo this part."
- **Reuse** — a good file is something you can hand back tomorrow to pick up
  where you left off.

**Teach it once.** That last one is the seed of the next idea. Once you've
written the same context into three different chats — how you like things
formatted, what your project is, who the audience is — stop retyping it. Put it
in a file (or Cowork's instructions/memory) and point Claude at it. You've just
gone from *re-explaining every time* to *teaching once*. In Claude Code this
becomes a file called `CLAUDE.md`, read automatically every session (Part 2);
the habit starts here.

**✓ Done when** Cowork is keeping a markdown file for a task, and you've saved
one instruction it'll reuse.

**Now try →** *"Here are three things about how I like work delivered: [say
them]. Save them and use them from now on."* Then open a fresh chat and watch it
already know.

---

## 7 · Teach it a skill

**Goal:** one repeatable task turned into a **skill** Cowork runs by name.
**~5–10 min.**

A reusable file is reuse for *you*. A **skill** is how that reuse becomes
something you can **share**. It's a saved capability Claude can run by name.
Cowork already ships with some (it knows how to make PDFs, Word docs, slide
decks, spreadsheets). You can add your own: a folder with a `SKILL.md` file
describing a task you do often — "draft the weekly update from these sources,"
"turn a transcript into a summary." Cowork discovers it and runs it when it
fits. You don't write it by hand — ask Cowork to build it from a task you
describe. We'll build a more powerful one in Part 2.

**One habit before you move on: start fresh often.** Claude reads your whole
conversation every time it replies, so long chats get slower, foggier, and more
likely to lose the thread. Start a new chat for each new task. You're not
"losing" anything — the memory that counts now lives in your files and your
skills, not in the chat history.

**✓ Done when** you've made a skill and run it by name.

**Now try →** take a chore you did last week, say *"turn this into a skill,"*
then run it by name and watch it go — the work done once, done forever after.

---

## What Cowork can't do — and why that's fine

Cowork is deliberately fenced so it's safe the moment you install it. The fence
has real edges:

- It runs in a **Linux sandbox**, separate from your actual computer — so it
  can't drive your Mac's apps or touch files outside what you give it.
- Its **internet access is filtered** — it can use official connectors and
  approved tools, but not make arbitrary calls to any service on the web.
- It **can't log into command-line tools** (the `gh`, `gcloud`-style logins
  some workflows need).

None of this is a flaw — it's the trade for "works out of the box, safely." But
every item on that list is exactly what the next tool removes. When you want the
fence gone, you want Claude Code.

**→ [Part 2: Claude Code](02-claude-code.md)**
