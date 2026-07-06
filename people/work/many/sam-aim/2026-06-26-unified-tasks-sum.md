# Meeting summary: Building Sam's unified to-do list in Asana

**Date:** 2026-06-26

**Participants:** Alejandro Acelas (coach), Samantha Kagel (Ambitious Impact)

---

## Summary

A hands-on working session where Alejandro coached Sam through building a unified to-do system: Claude Cowork pulls her tasks from every scattered source (Gmail, one-on-one docs, SK's Garden, Slack, calendar) and consolidates them into Asana. They:

1. Got Cowork connector write-permissions unblocked live by Dylan.
2. Ran a multi-subagent pull of tasks from all sources into a master list.
3. Set up Raycast hotkeys (option-T / option-L) for quick Asana task capture.
4. Dictated cleanup and Asana-structuring prompts, with classification rules saved to the project CLAUDE.md.
5. Decided to start the habit small with the mid-stage funding network as the first project.

Sam declined connecting Apple Notes after Alejandro flagged that the org owns team-account data; she'll stop taking work notes there instead. They meet again next week, same time.

---

## Part 1: Catch-up and a health-tracking prompt

Alejandro joined from Edinburgh, visiting friends. Sam was recovering from a day of sickness and mentioned being "regularly quite fatigued for the last, like, two months" — "so I might get it checked out" with a blood test. Alejandro sent her a prompt template for dictating symptoms into a bullet-point list to reason about patterns; she read it on the call and liked it.

---

## Part 2: Choosing the session goal

Alejandro framed the session around the "support infrastructure" cluster from Sam's earlier intake: pick one thing and push it as far as possible live, with him giving impressions along the way. Sam chose immediately:

> "I lean towards the unified to-do app because I think this is like infrastructure for everything, and I'll consistently deprioritize it, so seems fun."

The plan: a dedicated Cowork project, test each integration, and "get everything into Asana today in a way that's not scary to look at or maintain."

---

## Part 3: Connector permissions, GDPR, and Dylan's unblock

Checking Cowork's connector settings confirmed what Alejandro suspected: the org had blocked write operations (e.g. creating Asana tasks) and autonomous agent actions. He'd already sent a Google Doc about it — a half-hour conversation with Greg or Dylan should get it enabled.

He laid out the interim options: use Sam's personal account (problematic — no Anthropic data-processing contract, so "technically GDPR doesn't allow you to put any personal information from anyone on your personal account"), or do a dry run writing would-be Asana tasks to files. Sam cut through it: she messaged Dylan directly, who unblocked the permissions on the spot and said "it's probably fine to just leave it on like that." They then set Asana, Google Drive, Granola, and Slack connectors to "always allow."

---

## Part 4: First pull — tasks from every source

Sam dictated a long prompt sending a subagent per source to pull work tasks verbatim, with links back to origin, from:

a. Gmail (inbox, to-do folder, follow-ups — especially mid-stage funding network / funder emails)
b. One-on-one docs (JAS file; one-on-ones with Aiden, Brack, Sam, Yasantha [name unclear])
c. The SK's Garden doc (today/this-week checklists, plus missed older items)
d. Slack (unanswered messages, review requests, mentions from the last week)
e. Google Calendar (actual tasks plus meetings needing prep)

Alejandro layered on his prompting habits: specify the review format up front (a file per source) and quote lengths ("tweet length or 280 characters") so output is skimmable. The run deployed five agents; the resulting "Samantha master task list" looked "decent" to Sam.

---

## Part 5: Raycast, laptop, and Claude for Chrome

While agents ran, Alejandro set Sam up with the Raycast Asana extension: option-T to create a task, option-L to list tasks. Sam uninstalled her old Asana app; a lingering dual-account sign-in issue was parked ("I can look later, maybe").

Cowork's sluggishness on Sam's M1 MacBook Air prompted a laptop aside — Alejandro's calculation for Dylan: "if it saves you like three minutes a day for like a year, then it's a good investment." Sam: "I think we're gonna do that laptop benefit."

They also installed the Claude for Chrome connector — slow but able to do anything clickable, e.g. flight check-in; "maybe supervise it the first time."

---

## Part 6: Apple Notes and the privacy line

Apple Notes (where Sam keeps some tasks) has no direct connector; the workaround is Claude for Chrome reading the iCloud web version. Mid-setup, Sam named her discomfort: "I feel anxious about it having my Apple Notes because there's so much in there... a lot of random personal too."

Alejandro gave the two-part picture: Anthropic doesn't train on the data and only retains it for suspected bad actors — but on a team account the organization owns the data and could export her conversations. "That's kind of the thing that makes me actually uncomfortable."

Sam decided cleanly:

> "Maybe let's pause on the Apple Notes for now. I think I'd rather just change my behavior to not take work notes in Apple Notes, which I think is possible."

---

## Part 7: Cleaning the list and structuring Asana

Sam anticipated the master list's flaws — non-tasks, already-done items, stale one-on-one action items — and preferred batch-editing in Claude "because I can just talk to it." Her cleanup prompt: group tasks under key-priority headings from SK's Garden (table + June/July focuses), deduplicate, drop stale one-on-one items, and surface an "unsure" section for bulk review. Alejandro added the check against tasks already in Asana, and Sam added a rule catching "respond to email" tasks she'd already answered.

For structure, Sam described her working style — project tags plus a this-week/later split — and dictated a prompt to structure Asana accordingly, with urgency from deadlines and a weekly suggested stack she can edit ("if it could suggest my weekly stack and then I can go in and edit it, that's awesome").

Two meta-moves from Alejandro: have Claude write its sorting/filtering rules as a short clear-rules document so Sam can verify its logic at a glance, and save the categorization instructions into the project instructions / CLAUDE.md — in bullet points, "never" thick paragraphs — so they load in every chat.

---

## Part 8: The path forward / next steps

Alejandro pushed on habit formation: a 40-task dump risks Sam never triaging it, so start with one responsibility. Sam picked the mid-stage network — "a really easy one to start with" — to be split out as its own project (the "donor project") separate from her messier existing Asana.

Sam's end state: "once everything is in Asana, I'm happy using Asana as the primary point where I'm triaging tasks" — Claude's ongoing role being to catch missed tasks and project forward (e.g. back-planning from a September deadline).

**Specific actions agreed:**

1. Sam: start using Asana for task uploads this week ("for the week starting today until next week"), beginning with mid-stage network tasks.
2. Sam: stop taking work notes in Apple Notes rather than connecting it.
3. Sam: let Claude finish the cleanup + Asana structuring, review the rules doc and CLAUDE.md it writes.
4. Alejandro: sent the health-symptom dictation prompt template (done on call).
5. Alejandro: maybe look later at the Raycast Asana dual-account sign-in issue.
6. Both: meet next week, same time.

**Sam's next step:**
Finish the mid-stage-network upload into Asana and use it as the primary triage point this week.

---

## Appendix 1: Open questions

- Will Dylan leave the connector write-permissions enabled org-wide, or does it still need the half-hour risk discussion (Google Doc) with Greg/Dylan?
- Is the automatic task classification good enough to skip a human review step before tasks land in Asana?
- How will the weekly "suggested stack" fit into Sam's existing weekly planning routine?
- Sam's two-month fatigue — blood test pending.
- Laptop upgrade via AIM's laptop benefit (M1 Air struggles with Cowork).
- The Raycast dual-account default issue.

---

## Appendix 2: Key quotes

| Speaker | Quote | Context |
|---------|-------|---------|
| Samantha | "I lean towards the unified to-do app because I think this is like infrastructure for everything, and I'll consistently deprioritize it" | Choosing the session goal |
| Samantha | "I'd rather just change my behavior to not take work notes in Apple Notes" | Declining the Apple Notes integration |
| Alejandro | "Technically GDPR doesn't allow you to put any personal information from anyone on your personal account" | Why not to use a personal Claude account for work data |
| Alejandro | "If it saves you like three minutes a day for like a year, then it's a good investment" | Laptop-upgrade calculation made for Dylan |
| Samantha | "Once everything is in Asana, I'm happy using Asana as the primary point where I'm triaging tasks" | Division of labor between Asana and Claude |
| Samantha | "I feel really excited about this. Thank you so much for helping me on it." | Closing |

---

## Appendix 3: Underlying dynamics

**Coaching by prompting patterns, not just setup:** Alejandro repeatedly taught transferable habits mid-task — test integrations "block by block", specify the review format and quote length in the prompt, have Claude write one-sentence rules documents so its logic is inspectable, persist instructions in CLAUDE.md. Sam absorbed and applied them immediately in her own dictated prompts.

**Sam's crisp privacy boundary:** She was comfortable connecting all work sources but drew the line at Apple Notes once she understood the org owns team-account data — and resolved it by changing her own behavior rather than blocking the project. Notably, it was Alejandro who volunteered the discomfort ("that's kind of the thing that makes me actually uncomfortable").

**Habit-design realism:** Both treated the system's imperfection as the default. Alejandro deliberately shrank the starting scope (one project, the mid-stage network) to protect the habit from a demoralizing 40-task dump; Sam expected quality to improve as inputs get labeled better.
