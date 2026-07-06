<!--ai-->---
name: summarize-call
description: Fetch a Granola call transcript from the API, clean it, and file a tidied transcript plus a structured summary under the person's once/many call folder. Use when the user wants to pull, clean, summarize, or archive Granola calls — "summarise my call", "save my last Granola call", "archive these calls".
---

# Granola call → tidied transcript + summary

Adapted from [HartreeWorks/skill--summarise-granola](https://github.com/HartreeWorks/skill--summarise-granola),
rewired to file into this repo's call archive. Reads transcripts directly from
`api.granola.ai` using the local desktop-app auth tokens (decrypted from
Granola's encrypted store) — no cache, no connector.

## Setup (once)

Token decryption needs the `cryptography` package. It lives in a skill-local
venv at `.venv/`; `granola.py` re-execs itself under it automatically, so you
can always just call `python3 scripts/granola.py …`. Rebuild the venv if it's
missing:

```bash
python3 -m venv .venv && .venv/bin/pip install cryptography
```

## Commands

```bash
python3 scripts/granola.py list          # 20 most recent meetings (title, date, id)
python3 scripts/granola.py check         # recent-call / selection JSON
python3 scripts/granola.py get <doc_id>  # print transcript markdown for one call
python3 scripts/granola.py recent [n]    # nth most recent transcript
```

`get <doc_id>` prints the raw transcript to stdout (also saved under
`data/transcripts/`). Speakers are `**Me**:` (the account holder, Alejandro)
and `**Other**:` (everyone else).

## Workflow

### Step 1: Pick the call

```bash
python3 scripts/granola.py check
```

Returns JSON in one of two modes:

- **Auto** (`{"mode": "auto", "id": ..., "title": ..., "minutes_ago": ...}`) —
  a call ended within 30 minutes; proceed with it directly.
- **Select** (`{"mode": "select", "meetings": [...]}`) — no recent call;
  present the numbered list and let the user pick.

If the user already named a call or gave a doc id, skip the check.

### Step 2: Extract the transcript

```bash
python3 scripts/granola.py get <doc_id>   # or: recent <n>
```

### Step 3: Confirm participant names

The transcript only labels speakers `Me`/`Other`. Take the other participant's
name from the meeting title when it's clearly there; if the title is generic
("Weekly sync"), ask the user. **Never guess names.**

### Step 4: Garble inventory, then tidied transcript

Before writing the transcript, write a temporary garble inventory to
`data/garbles/<YYYY-MM-DD>-<person>.md`: one line per span where the
transcription seems garbled — the raw text, plus the likely reading when one
is guessable from the call itself.

Then clean the raw transcript following
[`references/tidying-instructions.md`](references/tidying-instructions.md) —
remove filler and false starts, fix transcription errors (garbled proper
nouns, tool names), relabel speakers with real first names, add headings at
topic shifts, preserve exact wording for the categories listed there. Every
repaired garble keeps a square-bracket note of four words or less saying how
it was resolved — `[inferred from context]`, `[confirmed in earlier call]` —
and unresolved ones stay marked `[unclear]` / `[name unclear]`.

Save to the filing path below with the `-trans.md` suffix.

### Step 5: Summary

Write a chronological summary following
[`references/summary-format.md`](references/summary-format.md).

Save next to the transcript with the `-sum.md` suffix.

### Step 6: Cross-call clarification pass

Reread the finished transcript and summary against the garble inventory and
try to resolve what the single call couldn't — by reading previous calls with
the **same person** (their folder, plus git history). These files get shared
with the other participant, so never import content from calls with other
people; the wider archive may only confirm the spelling of a name or tool
already spoken in this call. Update the bracket notes as garbles resolve
(`[confirmed in earlier call]`), then delete the inventory file.

### Step 7: Check slug distinctiveness

After writing, list every call file in the archive (`ls once/*/ many/*/`). If
the new slug is generic ("intro-call", "uplift-consulting") or overlaps too
much with an earlier call's slug — in any folder — rename the new pair to
something more distinctive of this call's content, and consider renaming the
earlier colliding pair too (use `git mv` when the old files are committed).
The test: from the slug alone, could you tell the calls apart?

### Step 8: Google Doc + folder index

Mirror the call into Drive and record it in the folder index (see the archive
`CLAUDE.md` → **Folder index + Google Doc mirror** for the canonical rule):

1. Create one combined Google Doc via the Google Drive `create_file` tool
   (`content_mime_type: text/markdown`), titled
   `<YYYY-MM-DD> Alejo-<Other> <Two Word Slug>` — names capitalized, dash between
   (e.g. `Alejo-Jørgen`), slug in Title Case. Concatenate the summary, a `# Transcript`
   heading, then the transcript, under a leading `# Summary`. One doc, two sections —
   the API can't make true Docs tabs.
2. Add a bullet to the person's folder `CLAUDE.md` (create it on the first call):
   `**<date> · <slug>**` + a `[gdoc]` link (`.../document/d/<id>/edit`, by ID so a
   rename can't break it) + a one-or-two-sentence gist, newest first.

## Filing rule

```
people/work/<once|many>/<firstname-org>/<YYYY-MM-DD>-<two-word-slug>-trans.md
people/work/<once|many>/<firstname-org>/<YYYY-MM-DD>-<two-word-slug>-sum.md
```

- **firstname-org** — lowercase first name + a short org identifier (usually
  three letters, from their email domain): 80,000 hours → `80k`, impact ops →
  `iops`, catalyze impact → `cat`, ambitious impact → `aim`, coefficient
  giving → `cg`, anthropic → `ant`, independent / no clear org → `ind`. One
  folder per person; reuse it across calls.
- **once/** — people with a single recorded call. **many/** — repeat (or
  expected-repeat) people; move a `once/` folder over when a second call
  lands.
- **two-word-slug** — a short two-word description of the call (e.g.
  `agentic-coaching`, `career-advice`). Two calls with one person on the same
  day get distinct slugs.

## Batch runs

For a batch, dispatch one subagent per call so cleaning stays off the main
context. Give each: the doc id, the confirmed participant names, the full
contents of both reference files (subagents can also Read them from this
skill folder), and the exact output paths. Each agent runs its own Steps 4–6
(earlier same-person calls are already committed); run Steps 7–8 once at the
end, over the whole batch — parallel agents can't see each other's slugs.
<!--/ai-->
