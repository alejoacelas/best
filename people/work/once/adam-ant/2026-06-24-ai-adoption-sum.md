# Meeting summary: Adam Jones and Alejandro Acelas — AI adoption advice

**Date:** 2026-06-24

**Participants:** Alejandro Acelas (AI enablement coaching, working with Samantha at AIM/Ambitious Impact); Adam Jones (Anthropic, manages people there; previously BlueDot Impact and Palantir)

---

## Summary

Alejandro asked Adam for advice on his AI-adoption work with Samantha, a manager at AIM. Adam's main points:
1. AI currently "probably accelerates ICs rather than managers", but management still benefits a lot — he runs much of his own management through Claude tag (Slack-triggered workflows, daily report summaries, meeting prep, hourly transcript cleanup).
2. Connect every tool with full permissions, let Claude reorganize the real (not a copy of the) Google Drive, and have Claude interview you about your job.
3. On time allocation: focus roughly 80% on AIM (e.g. four days a week) with one day floating across other orgs; asking AIM for a chief-of-staff contract is low-risk ("the worst that can happen is you ask and they say no"), and six months wouldn't be a mistake either.
4. The Palantir lesson: optimize for solving the customer's problem, not for deploying AI — be willing to do "the dirty grunt work".
5. Don't worry much about reusability; what transfers is connector/deployment expertise.
Adam shared two MCP configuration files (personal homelab + BlueDot setup) as follow-ups.

---

## Part 1: Can AI accelerate a manager, not just ICs?

Alejandro opened with his core client situation: Samantha at AIM, whose work is mostly management — four reports, unblocking, donor and team communications, org strategy. He could see reducing friction on individual tasks, but wanted Adam's view on whether something "much deeper" is possible for a manager/CEO role.

Adam agreed that "AI at the moment probably accelerates ICs rather than managers" — so while going to VIPs is worth it for leverage and unblocking adoption, "there maybe needs to be some partnership with ICs, where they can accelerate themselves a lot."

Still, he finds Claude "really, really helpful" for his own management at Anthropic, mostly via **Claude tag** (public only since the day before the call; he'd used it internally for a while):

a. **Slack channels as workflows** — treat Claude tag as a low-code app builder: each message into a channel triggers a workflow; Claude processes it and can delegate by posting into other channels (e.g. routing a manager's shared inbox forwarded into Slack).

b. **Private daily summary** — what all his reports are up to, where they're blocked, what's "highest leverage for me to review". Caveat: with Opus 4.8 Claude is "not that good as a judge" of this; with Fable 5 it's "actually pretty good", but that isn't available — "maybe it'll be coming".

c. **Chief-of-staff-lite** — "somewhere between a chief of staff and personal assistant... not quite as good as the real human one, but pretty good in the interim": calendar triage, room booking, and auto-generating agenda docs for new one-to-ones by reading the Slack DMs that led to them.

d. **Hourly transcript cleanup** — every hour Claude checks for new meetings, fixes mishearings using Slack context about who/what he's discussing, and links relevant docs into the transcript. Scheduling is native to Claude tag: "every hour, check my transcripts."

His framing for why this works for managers: a decent chunk of the manager's job is "trying to collect a bunch of state from the world and compress that down into a clear thing for their reports" — and if Claude has all the context, "it can do a lot of the compression for you". General heuristic: "you can basically just ask Claude to do it and it will do a pretty decent job a lot of the time."

---

## Part 2: Connectors and the messy-Drive problem

Alejandro said his coaching with Samantha so far is mostly context-plumbing — collecting the right things into a Claude folder. Adam treats maximal connection as the default: "you basically want to connect every tool you have into Claude and give it full permissions to do all things at this point."

On Alejandro's messy-Drive friction (subagents mapping the Drive, still not seamless): Adam's fix is to have Claude **reorganize the real Drive** — not a copy. He's done it in a couple of organizations; drives are always messy, nobody takes ownership of cleaning them, and Claude is "often pretty good" at it. Alejandro noted the challenge would be convincing the org.

Interface choices: Adam "basically never" uses Claude.ai — always Cowork or Claude tag, i.e. something running Claude Code under the hood. Cowork's value is a friendlier interface for non-technical users; he personally does "probably 90%" of his work through Claude tag (which starts a Claude Code remote session under the hood).

Two bootstrapping techniques:
- Have Claude **interview you**: "this is my job, see my calendar and transcripts, figure out how I could be most effective with AI tools."
- Have Claude read the Drive, report what confuses it, then turn your answers into a top-level README of the Drive for Claude.

---

## Part 3: How to spend the next three months

Alejandro laid out his options: (a) three months full-time as Samantha's chief of staff; (b) ~20% on Samantha plus the rest on AIM ICs doing automatable work like grading applications; (c) spread across several orgs.

Adam, hedging ("I don't have very strong opinions... I wouldn't weigh this too heavily"), leaned toward one org: "spend 80% of your time on AIM" but float around other orgs as a consultant to learn the best tips — possibly formalized as four days a week at AIM, one day elsewhere. Alejandro liked this.

Alejandro then floated an idea he'd had five minutes before the call: ask AIM to hire him as chief of staff on a time-bound contract — three months ideal, six months possibly overcommitting. Adam: "the worst that can happen is you ask and they say no", caveating that he doesn't know the UK visa system. He added that "six months might not be a mistake either" — there may not be six months of AI-adoption work, but there's other useful work at AIM, since joining an org surfaces "a bunch of things that you can go and fix". Alejandro: and AIM has incubated charities he could go fix too.

---

## Part 4: The Palantir lesson

Asked what's still underappreciated from his Palantir experience beyond his blog posts (Alejandro has read two of the three linked), Adam distilled it: be "extremely driven and extremely intense, extremely hard working", and optimize for "solving the customer's problem" — not for deploying AI. "If AI is not the solution, maybe you should still just solve the problem."

His illustration: during the Afghanistan evacuation, contracted software engineers spent "18 hours a day" hand-transcribing manifests of people who had helped the UK resist the Taliban — basic grunt work, but they were "in the right place at the right time with the right security credentials" and it would "save a bunch of lives". The takeaway: "being willing to do the dirty grunt work"; "the ultimate thing is solving the problem". He pointed to a related Ben Kuhn (Anthropic, benkuhn.net) piece on hard problems, which Alejandro has read.

---

## Part 5: What transfers from this work

Alejandro pushed on Adam's blog claim that the final output is "some prompting, some very light scaffolding" you take elsewhere — if the real product is connected org context and better affordances for Samantha, what's reusable?

Adam: "I think you should not worry about reusing it as much." What does transfer is connector expertise:
- The default Google Drive/Calendar connectors in Claude.ai are "just pretty bad".
- "The best one I found is the Google Workspace MCP" — the Python one, not the official one (Alejandro currently uses gog, Peter Steinberger's).
- The valuable artifact may be a doc: "these are the best ones and this is how we deploy them very quickly." Alejandro noted Peter Hartree's blog does some of this and offered to send the link; Adam hasn't read it and wants the distilled version.
- Adam has also accumulated infrastructure: MCP aggregator, MCP auth proxy, MCP local tunneling, and a way for Claude to share artifacts with people.

---

## Part 6: The path forward / Next steps

Adam's preferred contact medium: "email and docs". He shared two things in the Google Meet chat: configuration files for his MCP setups — one for his personal homelab, one that helps set up BlueDot. "They might be outdated and they might not be the best things, but they are some of the things that I've set up." His suggested use: point Claude at both files and ask how they all work together.

**Specific actions agreed:**
1. Adam sends the two MCP configuration files in the Google Meet chat (done on the call).
2. Alejandro points Claude at those files to have it explain how the setups work together.
3. Alejandro sends Adam the link to Peter Hartree's blog.
4. Alejandro tries Claude tag (public as of the day before).
5. Alejandro may apply to Adam's event [name unclear]; Adam welcomed it ("that'd be fun if you're gonna be here").

**Alejandro's next step:**
Decide on and pitch the AIM arrangement — leaning to ~80% AIM (chief-of-staff-style, time-bound contract) with one day a week consulting for other orgs.

---

## Appendix 1: Open questions

- Whether AIM will agree to a chief-of-staff-style contract, and at what length (three vs. six months); UK visa constraints unexamined.
- How to make messy Google Drives seamless for Claude short of reorganizing the real Drive — and whether AIM would accept Claude reorganizing it.
- What the reusable/transferable artifact of the AIM engagement should be (connector-deployment doc?).
- Which Google Workspace MCP to standardize on: gog vs. the Python Google Workspace MCP Adam deploys.
- What Adam's referenced event is and whether Alejandro applies [name unclear on the recording].

---

## Appendix 2: Key quotes

| Speaker | Quote | Context |
|---------|-------|---------|
| Adam | "AI at the moment probably accelerates ICs rather than managers" | Framing where acceleration is easiest |
| Adam | A manager's job is to "collect a bunch of state from the world and compress that down into a clear thing for their reports... it can do a lot of the compression for you" | Why Claude still helps managers |
| Adam | "You basically want to connect every tool you have into Claude and give it full permissions to do all things at this point" | Connector default |
| Adam | "Probably 90% of my work is just done through Claude tag these days" | His own tool mix |
| Adam | "Spend 80% of your time on AIM" | Time-split recommendation |
| Adam | "The worst that can happen is you ask and they say no" | On pitching the chief-of-staff contract |
| Adam | "If AI is not the solution, maybe you should still just solve the problem" | Palantir lesson |
| Adam | "I think you should not worry about reusing it as much" | On reusability of the AIM work |
| Alejandro | "Three months sounds really great" | Preferred contract length |

---

## Appendix 3: Underlying dynamics

**Alejandro seeking validation from a practitioner:** Several of his questions were half-formed plans (the chief-of-staff idea was "five minutes before this call") that he wanted sanity-checked rather than answered; Adam consistently de-dramatized ("I wouldn't weigh this too heavily", "worst that can happen is you ask and they say no"), which Alejandro received well.

**Adam's consistent deflation of the reusability worry:** Alejandro is partly optimizing for transferable output; Adam repeatedly redirected toward just solving the org's problems now — mirroring his own Palantir framing.
