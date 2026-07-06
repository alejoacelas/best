# Adam Jones and Alejandro Acelas

- **Date:** 2026-06-24
- **Participants:** Alejandro Acelas, Adam Jones (Anthropic; previously BlueDot Impact and Palantir)
- **Source:** Granola transcript (tidied)

---

## Opening

**Adam:** Hey, sorry — can I join in like five minutes? There's something else on.

**Alejandro:** Yes, go for it. Come back in five. Is everything okay?

**Adam:** Things are fine.

*[Adam rejoins a few minutes later.]*

**Alejandro:** Should I just start asking you questions, or do you want an intro? I gave a brief one in the doc.

**Adam:** I've read a lot of the docs. "Happy to just jump into questions. Make the most of the time."

---

## AI for managers vs. individual contributors

**Alejandro:** I've seen [unclear] — I think you have some idea of what accelerating someone a lot in their work looks like, and I'm not sure what that is. Right now I have mainly one client I'm thinking about, at AIM. Most of her work is management: she has four reports and spends a lot of time understanding their tasks, unblocking them, communications with donors and the team, and strategy — what the main priorities of the org are. You could think of it as: there's some stuff that would make some of her tasks a bit easier — less friction — and maybe that's worth exploring. But it sounds like maybe you think there's a much deeper thing that could come out of spending a lot of time with Samantha, using AI to get her to do her work better. Maybe you haven't thought much about management or CEO positions and most of your advice doesn't apply — but what would it look like for someone in her role to be much better from using AI?

**Adam:** It's a good question. "I do agree that I feel like AI at the moment probably accelerates ICs rather than managers" — individual contributors most. While I think it's worth going to VIPs for the reasons in your doc around leverage and unblocking AI adoption, there maybe needs to be some partnership with ICs, where they can accelerate themselves a lot.

That said, I do think there are still a lot of things that are very useful for management. I manage people at Anthropic and have found Claude to be "really, really helpful" for a lot of this. Some examples — I don't know if you've seen Claude tag?

**Alejandro:** I saw a tweet but I haven't used it.

**Adam:** It only just released, like, yesterday. We've been using it for quite a while, and it is "extremely useful" for running scheduled tasks. In some ways — it's not how it's built, but one way you can use it — it's like a low-code app builder. If you imagine each Slack channel as a process or workflow, every input to that channel is basically a trigger of that workflow. Claude does something on it, using all the tools it needs, and it can also post in other channels. So if you want a routing thing — say a manager's shared inbox — you can forward all the inbox emails into Slack; Claude can read them, process them, decide what to do, and then delegate them to other Claudes by posting into other channels.

Other things that are, again, very basic but helpful: daily summaries. I get a private daily summary from Claude tag that says what all my reports are up to, where they're blocked, and what things are "highest leverage for me to review" of their work. I will say, with Opus 4.8 Claude is "not that good as a judge" on these things, but with Fable 5 it's "actually pretty good" — which is sad, as it's not available. "Maybe it'll be coming."

So that has been really helpful — understanding what my reports are up to, where they're blocked. Generally it acts as "somewhere between a chief of staff and personal assistant. It's not quite as good as the real human one, but pretty good in the interim" while I don't have one. It can figure out my calendar and recommend what I should or shouldn't go to, make sure rooms are booked for all my meetings, make sure every meeting has a notes doc attached with details of why we're having it. If I Slack someone, we have a conversation in DMs, and I put a one-to-one on the calendar, Claude will automatically pick that up, go through the DMs, figure out the most important topics for us to discuss, and create a notes/agenda doc so I can go to that meeting prepared.

Also — simple, and sometimes it's a bunch of simple things combined — transcribing almost all meetings and having Claude summarize what's going on, or give a daily or weekly update. It depends what you view as the responsibilities of the manager, but a decent chunk of them is basically "trying to collect a bunch of state from the world and compress that down into a clear thing for their reports", so that reports are focused on doing the right things. If Claude basically knows everything that's going on — all this context — "it can do a lot of the compression for you", and all the cleanup.

Another very basic example: meeting transcripts, at least the Google Meet ones, often mishear things. I have a thing that every hour checks if I've had any meetings in the last hour, and goes through the transcripts. It fetches context from Slack about who I'm talking with and about, and what topics, so it can edit all the errors and also add links in the transcript to the relevant things I'm talking about.

**Alejandro:** Clean those up, have a linked summary — nice. For the every-hour thing, what do you use for scheduling?

**Adam:** Claude tag can just do this. Tell it "every hour, check my transcripts" — it will just go do it.

**Alejandro:** Nice. So that's what you use currently.

**Adam:** Yeah. And then, other things — I do often just think: what am I doing, and why can't I just ask Claude to do it? "A lot of times when you really try and break down what you do and think about it, you can basically just ask Claude to do it and it will do a pretty decent job a lot of the time."

---

## Connectors and taming a messy Drive

**Alejandro:** So far in the coaching calls with Samantha it's mostly been making sure it's easy to connect the right context — collecting things, putting them in a Claude folder: "here it is", and here are the four instances where you have to move it to different spaces.

**Adam:** Yeah — connectors. I almost assume this is default for everyone, but "you basically want to connect every tool you have into Claude and give it full permissions to do all things at this point".

**Alejandro:** I feel there's often the additional friction of messy Drives. You kind of need to dispatch a bunch of subagents to map a Drive and get a certain sense of it, but it's still not seamless — it's not like Claude knows where everything is. Do you have any great intuition, or is it just "spend a bit more time mapping things and scoping down the different areas of work so it's easier for Claude"? Any quick fix I haven't thought of?

**Adam:** You can get Claude to just organize the Drive. If you come into a messy Google Drive—

**Alejandro:** Like, make a copy of the Drive and then—

**Adam:** No — just edit the real Drive. Move things around.

**Alejandro:** Now the challenge is convincing them of that!

**Adam:** I've done this in a couple of organizations and it's been good, because drives are always messy and nobody really takes ownership of cleaning them up and moving things around. Claude is often pretty good at figuring this out.

The other thing is: "I basically never use Claude.ai, and I just always use Cowork or tag" — basically something that actually runs Claude Code under the hood somewhere.

**Alejandro:** Why not use Claude Code directly?

**Adam:** Just because the interface for Cowork is more friendly to non-technical users.

**Alejandro:** But you yourself — do you use mostly Claude Code, or do you also find yourself using Cowork?

**Adam:** I jump between them. I actually mainly just use Claude tag — "probably 90% of my work is just done through Claude tag these days". Which is pretty cool. Under the hood it just starts a Claude Code remote session; that's really what it's doing.

Other things: connecting all the tools, cleaning them up. You can also just get Claude to interview you: "Claude, this is my job. You can see from my calendar and my meeting transcripts what I get up to. Figure out how I could be most effective with AI tools." Or the Drive version: "you need to be able to find documents correctly in the Drive — look through the Drive and tell me where you're confused, what you're most confused about when you read through these things." Then you answer all those questions and have it put them into a doc somewhere — like a top-level README of Google Drive for Claude.

---

## Planning the next three months at AIM

**Alejandro:** Another question is how much I should focus. Currently I have a lot of trust gained at Ambitious Impact. Part of me thinks: should I just go three months full-time and be Samantha's chief of staff? Or — since you said AI is maybe more helpful to individual contributors — maybe I do some of that but devote only 20% of my capacity to it, and a bunch of the rest to other people at AIM who do things like grading applications, which can be heavily automated. Or maybe I try several orgs, because things differ from org to org. Any thoughts on how to split my time?

**Adam:** "I don't have very strong opinions... I wouldn't weigh this too heavily." I feel like "I would lean to something like focus on one org a lot" — something like "spend 80% of your time on AIM", but do float around a bunch of other orgs and provide consultancy to them, just so you can also learn the best tips from other places. I can imagine it being structured quite formally: "you spend four days a week at AIM and you spend one day a week" working around a bunch of different other organizations — a clear day of doing other things, and your days of doing AIM. That would be a good way to split this.

**Alejandro:** Nice, I like that. Partly for bizarre reasons — I came up with the idea five minutes before this call — should I try to get AIM to hire me as their chief of staff, as a time-bound contract? Ideal would be three months. Does committing sound like a good thing? If they say six months, maybe I'm committing too much and I should doubt it, but "three months sounds really great". Any takes?

**Adam:** "My guess is, you know, the worst that can happen is you ask and they say no." Asking for three months — I also "don't know that much about the UK visa system, so I'll caveat it with that". "I feel like six months might not be a mistake either", in the sense that potentially there's not six months' worth of AI adoption work, but there's probably a bunch of other just very useful work you could be doing at AIM in six months. Often when you just get into an organization, you learn about a bunch of things that you can go and fix.

**Alejandro:** And they have a bunch of charities, so I can just go fix the charities.

**Adam:** AIM incubated the charities, right? So you can just pick the lowest[-performing] charities.

---

## Lessons from Palantir

**Alejandro:** I think I've read two of the three blog posts that you linked on Palantir, and I'll find ways of learning more. But is there anything you learned at Palantir that's still underappreciated by the broader stream of people trying to do forward-deployed-engineer-type work?

**Adam:** In some ways everything is in those blogs — but those blogs have a lot of content. I think the key focus: being "extremely driven and extremely intense, extremely hard working", and optimizing for "solving the customer's problem" and outcomes. You're not optimizing to deploy AI — you're optimizing to solve their problems. There's almost something of: "if AI is not the solution, maybe you should still just solve the problem", and use AI as one tool in your toolkit.

I remember during the evacuation of Afghanistan, there were technical software engineers, like me, who had been contracted, and it was: the number one thing we have to do is just process manifests of people we're trying to evacuate from Afghanistan — people who helped the United Kingdom resist the Taliban. The number one thing was having people look at manifests and just transcribe them — "people are just going to spend 18 hours a day just transcribing them". Even though they're software engineers, and traditionally you'd expect them to be writing software — actually, maybe it's fine for them to do some very basic document transcription, because "they're in the right place at the right time with the right security credentials" and they have the opportunity to just solve that problem, and it'll "save a bunch of lives".

So there's a lot of this kind of thing: "being willing to do the dirty grunt work". You can solve many of the things in many different ways, and you should use your unique skills when they're necessary, but "the ultimate thing is solving the problem". I think [he] has something on hard problems that's related to this.

**Alejandro:** [asks who]

**Adam:** Ben Kuhn, who's at Anthropic. I think it's benkuhn.net.

**Alejandro:** I love Ben. Yeah, I've read it.

---

## What transfers from this kind of work

**Alejandro:** In your "tools for..." post you say what you imagine the final output to look like: some prompting, some very light scaffolding, and you can take what you learn somewhere else. But it's not super clear what the thing is that you'd take somewhere else. If you're building software, that's sometimes very easily replicable. But if the thing you build is "I connect this organization's context, and then Samantha becomes better at just asking things of the AI" — getting the right affordances — I'm not sure what the reusable thing is. Do you have intuitions?

**Adam:** "I think you should not worry about reusing it as much", or something. There are some things which might be useful — almost the expertise of figuring out which connectors are good and how to deploy them. For example, "the default Google Drive and Google Calendar connectors in Claude.ai are just pretty bad" — they just don't allow you to do most things. There are a bunch of off-the-shelf ones; I've tried a few, and they all have different pros and cons. "The best one I found is the Google Workspace MCP" — the Python one, not the official one.

**Alejandro:** I think I'm using gog — the Peter Steinberger one, the OpenClaw person's one.

**Adam:** Possibly a good one. This [the Python Google Workspace MCP] is the one I have deployed in a couple of places, and it's been decent. But the point is there's a whole swathe of these things, there's some expertise needed, and maybe the valuable thing is just: you have the doc that explains "these are the best ones and this is how we deploy them very quickly".

**Alejandro:** Peter Hartree has a bunch of that — I don't know if you know his blog. I'll send you the link. Great blog.

**Adam:** Something like this — a distilled version that is "these are the best options". I have not read it. And then other things: I've ended up building a bunch of tools and setups along the way. In the blog post I have linked — the MCP aggregator, the MCP auth proxy, some MCP local tunneling, things like this. And [name unclear] — having some way for Claude to share artifacts with people.

---

## Wrap-up and follow-ups

**Alejandro:** Maybe two last things. For reaching out to you — I really liked your review guide — is email the preferred medium for you?

**Adam:** Yeah — "email and docs".

**Alejandro:** And are there more tools you didn't include in the blog — for example this Google Workspace MCP — where you could just prompt Claude to make a list and send it to me on email? Would that be easy?

**Adam:** "I'll point you at two things." I think Claude tag is pretty—

**Alejandro:** The big win, yeah.

**Adam:** I haven't been able to point people at it because it's not been public until yesterday. And then — I'll send you two things in the Google Meet chat. The actual line highlights are random; it's just those files. These are configuration files for setting up a bunch of MCPs: one that I use personally for my homelab, and the second one helps set up BlueDot. "They might be outdated and they might not be the best things, but they are some of the things that I've set up." My guess is trying to read them is kind of a headache, but point Claude at these two files and say: "Adam pointed me at these as things that he has set up and found have worked reasonably well. How do they all work together? Explain it to me." Claude will probably be able to explain much of it. There are other random things in those files that are deployed that aren't MCP-related, too.

**Alejandro:** This is already useful — this was super helpful. Bouncing ideas off a person who knows what they're doing and can say what's reasonable was pretty useful for me. I might apply to your [event name unclear], if that's okay.

**Adam:** Yeah, that'd be fun if you're gonna be here. That'd be cool.

**Alejandro:** Amazing, thanks so much Adam.

**Adam:** Thanks. See you around.
