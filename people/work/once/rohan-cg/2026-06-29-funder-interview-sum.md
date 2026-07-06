# Meeting summary: Rohan Subramani and Alejandro Acelas — AI uplift consulting

**Date:** 2026-06-29

**Participants:** Alejandro (Alejo) Acelas (independent AI uplift consultant); Rohan Subramani (Coefficient Giving, scoping differential capability advancement funding)

---

## Summary

Rohan, who is scoping potential Coefficient Giving funding areas in differential capability advancement (DCA), interviewed Alejandro about his first three weeks as an AI uplift consultant. Alejandro walked through:

1. How he got into uplift work (inspired by the "AI Tools for Existential Security" piece) and his current setup — coaching for AIM, with plans to embed in one team, probably at 80k.
2. His coaching-call playbook: intake form, 10–15 minutes mapping the person's day, then one concrete instant-value win (Cowork, Wispr Flow).
3. His thesis that consultancy builds the trust and context that AI automation will later need — which Rohan probed with the counter that trust/context bottlenecks may persistently cap gains below ~2x.
4. Rohan's own AI usage, where he reports feeling "somewhat downlifted" using Claude on conceptual work.

They closed with concrete follow-ups: Peter Hartree's email, the intake form, Alejandro's calendar link, and an invite to the fdocs prototype.

---

## Part 1: Opening and agenda

After a name-pronunciation joke calling back to their first meeting at LISA last year, and small talk about Alejandro's stay in Münster (friend with twins; Peace of Westphalia trivia), Alejandro proposed being helpful on "here's what three weeks of being an uplift consultant looks like" and urged Rohan to talk to **Peter Hartree**, promising to send his email in chat and on their shared Slack.

Rohan framed his side: he is "primarily thinking about AI safety applications of AI" — differential capability advancement and elicitation — spanning (a) AI uplift and automation consultancy, (b) research automation ("automating research automation", per Owen Cotton-Barratt), and (c) training and evaluation datasets for AI safety areas. He had read Alejandro's comments on his DCA doc and skimmed Alejandro's uplift-thinking doc.

---

## Part 2: Three weeks as an uplift consultant

Alejandro's origin story: he was doing biosecurity when the "AI Tools for Existential Security" piece struck him — its line that "30% of us should be doing AI tools for existential security" against his observation that nowhere near 30% were. A year of unfocused attempts followed, until ~3 weeks ago someone at AIM [name unclear] asked for coaching, having heard from Chris Webster and Peter Hartree that coaching works. He now coaches AIM and plans to coach their charities, "partly to follow through on my initial commitments" — but what he is "most excited" about is embedding with one team, probably at 80k, and accelerating it for a few months. Model: **Luca De Leo**, already doing this on 80k's software side (advisor bot, weekly shipping cadence), whose presence sped up the whole team ("my sense is") even when JP Addison was on it.

He then laid out the two properties that make the work attractive:

1. **Easy to deliver value**: for people who have barely touched Claude (his audience, unlike Leo McKee-Reid's technical one — CG funded Leo before Rohan joined), a 50-minute call reliably ends in "wow, I'm immediately more productive because of this", enabling the classic consulting playbook — "deliver value, paint the grand vision... then arrange a plan to keep going forward."
2. **A long tail of upside**: returns keep coming as you push adoption further. Even Leo can help METR engineers — which "slightly surprisingly" doesn't happen by default even with a cracked engineer already on the team.

His lesson from a failed year: the ideologically excited crowd (differential tech development, AI for epistemics, "what if futarchy now works") stays "ethereal" — instead, "you can just deliver concrete value in a call, so you should start with that."

---

## Part 3: The coaching-call playbook

Prompted by Rohan's curiosity about what the calls are like, Alejandro shared his intake form (link dropped in chat) and described the structure:

- **First 10–15 minutes:** picture the person's day concretely — what am I trying to do, where is the data, how is it hitting my inbox, what do I do with it — and map a few workflows.
- **Then one instant win** targeted at their context: try Cowork ("the thing that allows you to do longer tasks, so you should be delegating bigger things") or Wispr Flow ("never type a prompt to an AI again — typing is awful").
- **Then a task that matters to them** — criteria for "important" still unsettled; "what are you going to do next week" is one version, and intake forms often surface candidates.

He noted Chris Webster runs similar calls but leans less on the intake/day-mapping stage.

---

## Part 4: Does uplift now pay off at crunch time?

Rohan posed his central scoping question: his job is about whether "at crunch time, can we get as much value out of AI for AI safety as possible" — and while "very conceivably things that are good for adoption right now are also good for that", uplift and automation might be meaningfully different things.

Alejandro answered with the thesis he has floated to Peter Hartree and Olivia Blanchard (Constellation, who wants to put very senior "cracked" people on AI-heavy orgs): consultancy is the trust-building step of the CTO adoption playbook — revisit priorities in light of AI, organize the data, upskill the workforce. Do the first two right as an outside consultant, and when drop-in AI workers arrive you can "just inject a bunch of AI inside the org" through the trust, permissions, and organized data you already hold. Both Peter and Olivia "seemed kind of skeptical"; Alejandro conceded the story compresses to "yes, you do consultancy, but then magic, such that consultancy is scalable now."

Rohan reframed it more soberly: the bottlenecks on consultancy just *are* the bottlenecks on AI use — so consulting does address them, but "I could imagine there just consistently being bottlenecks of trust and context that keep overall uplift or automation less than 2x or something." Alejandro's counter: "each inch of trust that they give you will be worth so much more."

Concretely, Alejandro pointed at cheap unlocks: he gives everyone access to his working Drive; org admins on Anthropic accounts can export every Claude conversation (full transcripts, images, artifacts — "like three clicks"); that plus Drive approximates "the full org" as context. Rohan didn't know about the admin export and said "I'll try to check that out after." The trust part, Alejandro admitted, is what he doesn't understand.

---

## Part 5: Datasets, evals, and target orgs

Rohan noted the overlap between his two top candidate funding areas — uplift/automation consulting and training/eval datasets — since org conversation data could feed both context and evals. Asked which orgs he'd want that for: Redwood, METR, Apollo on the technical side; Forethought, GovAI; maybe SecureBio and [org name unclear] (though harder to automate); CG itself.

Alejandro raised a puzzle about the diffusion of top-tier AI fluency: living a few days with Luca De Leo taught him a lot, and the skills seem acquirable "if you don't have blockers in your identity" — though "maybe I'm too optimistic and over-indexing on my case." The dominant success story is "really cracked power user comes and does the thing"; for automating METR, the alternative format is helping METR automate itself. Rohan: that route is less neglected and marginally less tractable, but more helpful for technical work right now.

---

## Part 6: Identity blockers and Rohan's own usage

Asked to unpack "identity blockers", Alejandro described the pattern he sees in nontechnical/senior folks: "I don't want AI doing my job — I think my job is a thing that I do."

Rohan said that's not his blocker, yet "I'm not getting as much value out of AI as I could be":

- Mostly uses Claude chat; Claude Code only when sub-agents seem useful, and he's barely coding at CG.
- On his DCA pitch document, Claude produced broad drafts of project areas "that I mostly don't like very much" — possibly "harder to go from this kind of messy version to a version that I like than just writing it from scratch myself."
- His work feels like conceptual thinking he "particularly doesn't trust Claude to do right now"; heavier use left him feeling "somewhat downlifted recently".

Alejandro's diagnosis: people who get good start in domains where AI works best, accumulate tricks, then transfer them to the hard domains. Example: Adam Jones (now at Anthropic) says "AI doesn't help that much with management" yet uses it "very, very often" — his IC-era fluency keeps him excited to "give it a big chunky task". So non-adoption often traces to AI having "sucked out of the box" at the first thing the person tried.

---

## Part 7: The path forward / Next steps

Running over time, they arranged follow-ups. Alejandro offered a consultancy call — noting Rohan is in fact in his target audience and that it would "inform how you scope out the AI uplift consultant thing" — while flagging that Chris Webster may be easier for screen-sharing since Alejandro "hasn't signed an NDA" (though he claims his calls "went better" than the one of Chris's he saw). Rohan: "Maybe I'll try both, or try Chris first and then see how it goes."

Alejandro then demoed **fdocs** — an AI-native Google Docs replacement, invite-only, built in ~2 months by a contractor who previously worked with Leo McKee-Reid ("a very, very functional prototype that's still buggy, but very functional") — and got Rohan access on the call.

**Specific actions agreed:**
1. Alejandro sends Peter Hartree's email in chat and on Slack.
2. Rohan reviews the intake form Alejandro shared.
3. Rohan checks out the Anthropic org-admin conversation export.
4. Alejandro left his calendar link; Rohan will book coaching — Chris Webster first, possibly both.
5. Alejandro invited Rohan to fdocs (access confirmed live); feedback via the in-app button.
6. Alejandro will leave more comments on Rohan's DCA doc.

**Rohan's next step:**
Set up the Peter Hartree meeting and try a coaching call (Chris first).

**Alejandro's next step:**
Send the Hartree email and further comments on the DCA doc; stay reachable on Slack ("I am very responsive there").

---

## Appendix 1: Open questions

- Does uplift consulting now convert into automation capacity at crunch time, or do trust/context bottlenecks persistently cap gains below ~2x (Rohan's worry)?
- What is the right format for automating a technical org like METR — external cracked power user vs. helping the org automate itself?
- What criteria should pick the "important task" in a coaching call?
- Why doesn't top-tier AI fluency transfer by default, even with a cracked engineer on the team — and how real are "identity blockers" as an explanation?
- Is Rohan's drafting experience ("downlifted" on conceptual work) a tooling/technique gap or a genuine current limit of the models?
- Which orgs' conversation data would actually make good training/eval datasets, and under what trust arrangements?

---

## Appendix 2: Key quotes

| Speaker | Quote | Context |
|---------|-------|---------|
| Alejandro | "This idea kind of rhymes with my vibes, so I should quit what I'm doing" | On reading "AI Tools for Existential Security" a year ago |
| Alejandro | "Deliver value, paint the grand vision, deliver value in the first call, and then arrange a plan to keep going forward" | The consulting playbook |
| Alejandro | "You can just deliver concrete value in a call, so you should start with that" | Against "ethereal" AI-for-epistemics theorizing |
| Rohan | "At crunch time, can we get as much value out of AI for AI safety as possible?" | The point of his DCA job |
| Rohan | "I could imagine there just consistently being bottlenecks of trust and context that keep overall uplift or automation less than 2x" | Skepticism about the consultancy-to-automation thesis |
| Alejandro | "Each inch of trust that they give you will be worth so much more" | Why trust compounds under AI |
| Alejandro | "Yes, you do consultancy, but then magic, such that consultancy is scalable now" | Self-aware summary of his own pitch |
| Rohan | "Harder to go from this kind of messy version to a version that I like than just writing it from scratch myself" | Claude drafts of his DCA doc |
| Rohan | "I felt somewhat downlifted recently" | Using Claude heavily on conceptual work |
| Alejandro | "I don't want AI doing my job — I think my job is a thing that I do" | The identity blocker he sees in clients |
| Alejandro (quoting Adam Jones) | "AI doesn't help that much with management" — but he uses it "very, very often" | Fluency transfers from IC work to management |

---

## Appendix 3: Underlying dynamics

**Funder–practitioner double role:** Rohan is scoping grant areas that include exactly what Alejandro does; Alejandro is both an information source and a plausible future grantee. His transparency about weak spots (skeptical reactions from Peter and Olivia, "magic" in his own thesis, unsettled call criteria) reads as credibility-building as much as candor.

**Alejandro learning through giving:** He repeatedly framed offers as experiments for himself — "I'm using this to learn" — including offering Rohan a call while pointing him to Chris Webster as the NDA-safe default, then noting his own calls "went better".

**Rohan's quiet self-diagnosis:** The conversation pivoted midway from funding strategy to Rohan's personal AI usage — he volunteered that he's under-using AI without the identity blocker excuse, which is likely part of why he'll book a coaching call.
