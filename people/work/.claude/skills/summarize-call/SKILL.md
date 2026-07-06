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

### Step 4: Tidied transcript

Clean the raw transcript following
[`references/tidying-instructions.md`](references/tidying-instructions.md) —
remove filler and false starts, fix transcription errors (garbled proper
nouns, tool names), relabel speakers with real first names, add headings at
topic shifts, preserve exact wording for the categories listed there.

Save to the filing path below with the `-trans.md` suffix.

### Step 5: Summary

Write a chronological summary following
[`references/summary-format.md`](references/summary-format.md).

Save next to the transcript with the `-sum.md` suffix.

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
skill folder), and the exact output paths.
<!--/ai-->
