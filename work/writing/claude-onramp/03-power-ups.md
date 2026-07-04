# Part 3 — Power-ups (optional)

Everything here is self-contained. Skip to [the last page](04-now-what.md)
if you'd rather just start delegating; come back when you hit a wall.

The first power-up — full control of your Google Workspace — comes in two
pieces: install the tools (quick), then do the one tedious setup
(a Google Cloud project). They're split so you get a win before the tedious
part.

- [ ] **1** · Install the Workspace CLIs
- [ ] **2** · The one tedious setup — a Google Cloud project

---

## 1 · Install the Workspace CLIs

**Goal:** the command-line tools that let Claude Code truly *work* your Google
account — not just read it. **~5 min.**

In Part 1 you connected Google to Cowork, but those connectors mostly *read*. If
you want Claude to genuinely *work* your Google account — send email, edit a doc
with real formatting, manage your calendar — you give it its own command-line
tools instead of borrowing Cowork's connectors.

**The distinction:**

- A **connector** (what Cowork uses) is *rented hands*: Anthropic's servers act
  on your behalf, with capped abilities — great for reading, limited for doing.
- A **CLI** like `gog` or `gdoc` is *your own hands*: it runs on your machine
  with full read-and-write access, it's scriptable, and Claude can use it inside
  skills.

You can reuse Cowork's connectors in Claude Code, so this is strictly optional —
what you gain is everything the connectors can't do. → [Connector vs. MCP vs.
CLI, per app →](decisions/workspace-access.md)

**The two tools:**
- **`gog`** ([gogcli.sh](https://gogcli.sh)) — the broad one. Gmail, Calendar,
  Drive, and light Docs/Sheets across your whole Workspace.
- **`gdoc`** ([on GitHub](https://github.com/LucaDeLeo/gdoc)) — the focused one,
  for real Google Docs editing: writes proper formatting, handles comments and
  revisions, built for agents.

Most people install `gog` for breadth and add `gdoc` when they do serious doc
editing. Ask Claude Code to install whichever you want — it'll fetch the tool
and tell you what it still needs from you (that's the next mission).

**✓ Done when** the tool is installed and the only thing left is to give it
credentials.

**Now try →** *"You're installed — what exactly can you do in my Google account
once I finish the credentials, that the Cowork connectors couldn't?"*

---

## 2 · The one tedious setup — a Google Cloud project

**Goal:** your own Google Cloud credentials, so the CLIs can sign in — set up
once, correctly, so it never logs you out. **~5–15 min.**

Both tools need you to create your own Google Cloud project and credentials by
clicking through Google's console. There's no way around the clicking, but there
are two ways to make it bearable.

**Let an agent do the clicking.** The setup is mostly navigating web pages, which
is exactly what computer-use agents are good at. Open the **Codex desktop app**
(it's especially good at this), point it at the console, and watch it work through
the steps while you supervise. Or ask Claude Code to walk you through each step
live.

**The steps** (whoever does them):
1. Create a project at [console.cloud.google.com](https://console.cloud.google.com).
2. Enable the APIs you need (Gmail, Calendar, Drive, Docs, Sheets).
3. Configure the OAuth consent screen — **and set it to "In production"** (see
   the warning below).
4. Create **OAuth credentials of type "Desktop app,"** download the JSON.
5. Drop the JSON where the tool expects it and run its sign-in command.

> ⚠️ **The trap that catches everyone: publish the app.** If you leave the
> consent screen in "Testing" mode, Google silently revokes your access **every
> 7 days** — Claude gets logged out weekly and you'll wonder why. Set the
> publishing status to **"In production"** (for personal use you can do this
> without Google's full review), or, if you're inside a Google Workspace
> organization, set the user type to **"Internal."** Do this now and save
> yourself a recurring headache.

<details>
<summary>I'm nervous about "In production" and Google's verification warnings →</summary>

For a personal-use app that only you sign into, flipping to "In production" is
fine — you'll see an "unverified app" screen when you first authorize, and you
click through it (it's your own app). Full Google verification is only needed
when you distribute an app to outside users, which you're not. If you're on a
Workspace org account, "Internal" avoids the screen entirely.
</details>

**✓ Done when** you've run the tool's sign-in command and it reports connected —
with the consent screen set to "In production" (or "Internal").

**Now try →** *"Send me a test email to myself with the subject 'it works,' then
create a Google Doc titled 'first agent doc' with a heading and a bullet
list."* That's the write access the connectors never had.
