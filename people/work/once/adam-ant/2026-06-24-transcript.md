# Adam Jones and Alejandro Acelas

- **Date:** 2026-06-24
- **Participants:** Alejandro Acelas, Adam Jones
- **Source:** Granola transcript (cleaned)

---

**Adam:** Hey, I'm sorry. Can I join in like five minutes? Is there something else on?

**Alejandro:** Yes, go for it. Come back in five. See ya.

**Adam:** Yeah. Go ask you. Yeah, much later.

**Alejandro:** No worries. Is everything okay, do you need to?

**Adam:** Yeah, I don't know. Things are fine. Just.

**Alejandro:** Okay, no worries. So, should I just start asking you questions, or do you want — I'm not sure. I think I gave a brief intro in the.

**Adam:** Yeah, give me a rundown[?]. I've read a lot of the docs. Happy to just jump into questions and make the most of the time.

**Alejandro:** Yeah, nice. So I've seen you on the [?] — I think you maybe have some idea of what accelerating someone a lot within their work looks like, and I'm not sure what that is. So for example, I have right now mainly one client or user that I'm thinking about, at AIM, and most of her work is kind of like management. She has four reports and just spends a bunch of time understanding their tasks, unblocking them, communications with donors and with the team and some other people, and strategy of like what are the main priorities of the org. And I'm not sure — you could think of like, oh, there's some stuff where I'd make her tasks a bit easier, like have less friction for those, and maybe there's something there worth exploring. But it sounds like maybe you think there's a much deeper thing that could come out of just spending a bunch of time with Samantha and trying to use AI to get her to do her work better, or to do their work better together. And I'm not sure — maybe it's the case that you have not thought much about management or CEO-like positions, and most of the advice you have is ill-advised or not that applicable. But I'm wondering if you have a sense of what it would look like to have some of that just be much better for her from using AI?

**Adam:** It's a good question. I do agree that I feel like AI at the moment probably accelerates like ICs rather than managers the most — individual contributors most. So while I think it's worth going to VIPs for the reasons in your doc around leverage and unblocking AI adoption, I think there maybe needs to be some partnership with ICs, where they can accelerate themselves a lot.

**Alejandro:** Yep.

**Adam:** That said, I do think there are still a lot of things that are very useful for management. So I manage people at Anthropic and have found Claude to be really, really helpful for a lot of this. Some examples of things that I have found very helpful is — I don't know if you've seen Claude Tag?

**Alejandro:** I saw a tweet but I haven't used it.

**Adam:** Okay. Yeah, it only just released, like, yesterday. We've been using it for quite a while, and it is extremely useful for running kind of scheduled tasks, or like.

**Alejandro:** Yep.

**Adam:** In some ways, you can almost view it as — it's not how it's built, but I think one way you can use it is like a low-code app builder.

**Alejandro:** Yes.

**Adam:** In the sense of, if you imagine each Slack channel as a process or workflow, you can then have Claude Tag — like every input to that channel is basically like a trigger of that workflow. Claude does something on it, which can use all your tools that it needs, and then it can also post in other channels, I believe. Yeah, certainly with tools that can post in other channels. And so if you want a routing thing of like, oh, manager shared inbox, you can forward all the inbox emails into Slack. Claude can read them, process them, decide what to do, and then delegate them to other Claudes as well, like by posting them into other channels or something like that.

**Alejandro:** Yes.

**Adam:** Things like that. Other things that — again, very basic but helpful — is just like daily summaries of stuff. And so I get a private daily summary from Claude Tag that says, like, what are all my reports up to? Where are they blocked? What things are highest-leverage for me to review of their work, and this kind of stuff. I will say, potentially with Opus 4.8 Claude does not that good as a judge on these things, but potentially with Fable — Fable 5 — it's actually pretty good, which is — it's sad that it isn't available. But, you know, maybe it'll be becoming.

**Alejandro:** Yes. Okay.

**Adam:** And so I think that has been really helpful. Yeah. Like understanding what my reports are up to, where they're blocked. And generally kind of just acting basically a bit of a chief of staff, or somewhere between the chief of staff and personal assistant. It's not quite as good as the real human one, but pretty good in the interim while I don't have something like this — where it can figure out a lot of my stuff on my calendar and recommend what I should or shouldn't go to, or make sure that rooms are booked for all my meetings. It'll make sure that all the meetings I have have a note stub attached with details of why we're having the meeting. So, you know, if I.

**Alejandro:** Yes.

**Adam:** Slack someone and we have some conversation in some Slack DMs, and then I'm like, great, we should book a one-to-one, I put a one-to-one on the calendar — Claude will automatically pick that up and go through the DMs and figure out, okay, these are the most important topics for us to discuss, and create a notes/agenda doc such that I can go to that meeting and have that prepared and ready. For other things — also very, again, simple and dumb. I do feel like a lot of it is just like — and sometimes there's a bunch of these simple things combined together — but like transcribing almost meetings and then having Claude be able to summarize what's going on and make sense, or give a daily or weekly update. I think a lot of it depends what you view as the responsibilities of the manager, but also a decent chunk of the responsibilities of the manager is basically trying to collect a bunch of state from the world and press that down into a clear thing for their reports, such that reports are focused on doing the right things. And if Claude basically knows everything that's going on in all this context, it can do a lot of the compression for you and all the cleanup.

**Alejandro:** Yes. Yes.

**Adam:** Another example, a very basic thing, is when I have these meeting transcripts — at least with the Google Meet ones — often they will mishear things. Because I don't want to — again, I have a thing that every hour, it'll just go through and check if I've had any meetings in the last hour and go through any of the transcripts, and it'll do this by fetching all contacts from Slack about who am I talking about or who I'm talking with, and about what topics, and it'll be able to go and edit all the things and also add a link in the transcript to the relevant things that I'm talking about.

**Alejandro:** Clean those, yeah, clean those, have a Linear summary. Yeah. Nice. Yeah, for the every-hour thing, what do you use for scheduling? I think there's a Claude thing of.

**Adam:** So Claude Tag can just do this and sends it, like — I'll go, like, every hour check my transcripts, it will just go do it.

**Alejandro:** Nice. Okay, so that's what you use currently. Yeah, nice, nice.

**Adam:** So, yeah, I use this. And then, other things — yeah, I do often just think, like, okay, what am I doing, and why can't I just ask Claude to do it? And a lot of times when you really try and break down what you do and think about it, you can basically just ask Claude to do it and it will do a pretty decent job a lot of the time.

**Alejandro:** Yeah, yeah. So so far with our coaching calls with Samantha, it's mostly just like making sure that it's easy to connect the right context and just circulate things and putting them in a code folder and just, here it is, and here's the four instances you have to move it to different spaces or to collect different things.

**Adam:** Yeah, I think connectors is also — yeah, so I almost assume that this is default for everyone, but I think you basically want to connect every tool you have into Claude and give it full permissions to do all things at this point.

**Alejandro:** Yeah, do I — I feel there's often the additional friction of, like, for messy Drives or something you kind of need to, or like I said, kind of dispatch a bunch of sub-agents to map a Drive and give a certain sense of that, but I feel still it's not quite seamless. It's not like Claude knows where everything is. Not sure if you have any kind of great intuition, or really it's just like, oh, I spend a bit more time mapping things and scoping down the different areas of work that you do such that it's easier for Claude, or if there's any really quick fix that I haven't thought of.

**Adam:** And — you can get Claude to just organize the Drive. Like, if you come into a messy org, like Google Drive.

**Alejandro:** Like make a copy of the Drive and then just.

**Adam:** Yeah. We'll just edit the real Drive. Like, just move it all around.

**Alejandro:** Like — not sure you'd convince them of that, yeah.

**Adam:** Yeah, this is what I've done — I've done this in a couple of organizations. It's been good because usually the Drives are always messy and nobody really takes offense of, like, oh, I want to clean it up and move things around. Claude is often pretty good at figuring this out. And, like — yeah. Or the other thing is, I basically never use Claude.ai, and I just always use, like, Cowork or Tag, or basically something that actually just runs, like, Claude Code under the hood somewhere.

**Alejandro:** Why not use Claude Code directly?

**Adam:** Oh, just because I think the interface for Cowork is more friendly to non-technical users.

**Alejandro:** Oh yeah, oh yeah. But you yourself, like, use mostly Claude Code, or do you also find yourself using Cowork Claude?

**Adam:** I jump between them. I actually mainly just use Claude Tag.

**Alejandro:** Okay, nice.

**Adam:** Like probably 90% of my work is just done through Claude Tag these days. So, yeah, this is pretty cool, which — under the hood, just starts a Claude Code remote session. That's really what it's doing.

**Alejandro:** Yes, yeah, yeah.

**Adam:** Other things — yeah. Connecting all the tools, cleaning it up. You can also just get Claude to interview you, in the sense of, like, Claude, you know, this is my job, you can see from my calendar, my meeting transcripts, what I get up to — figure out how I could be most effective with AI tools. And also, or you can do the thing of, like, oh yeah, you need to be able to find documents correctly in the Drive — look through the Drive and tell me where you're confused, or what are you most confused about when you read through these things, and then you can answer all those questions and have it put those into a doc somewhere, that's like — in Google Drive it's like a top-level README for Claude or something.

**Alejandro:** Maybe another question is like how much should I focus on — so let's say, I think currently you have a lot of like gained trust or something in Ambitious Impact, and I wonder whether I should — like, part of me is like, oh, should I just go three months full-time and just be Samantha's chief of staff? Or if you said like, oh, maybe it's more helpful to individual contributors, maybe I do some of that, but also — I don't know, devote 20% of my capacity to this and a bunch of the other capacity to just other people at AIM that do more things like grading applications, which can be a lot of it automated. Or maybe I try to do several orgs because there's like things that differ from org. Yeah, I'm not sure if you're thinking of ways to spend my next three months, if you have any thoughts on how to — yeah, thoughts for how to split my time between different possibilities.

**Adam:** I don't have very strong opinions or — I'm not, I wouldn't weigh this too heavily. I feel like I would lean to something like focus on one org a lot. Something like spend, you know, 80% of your time on AIM. But do float around a bunch of other orgs and provide consultancy to them, just so you can also learn one of the best tips from other places or something. Like, I can imagine it being structured quite formally as, like, you spend four days a week at AIM and you spend one day a week working around a bunch of different other organizations, and having a clear day — your day of doing other things.

**Alejandro:** Yeah, yeah.

**Adam:** Your days of doing AIM would be, like, a good way to split this.

**Alejandro:** Nice, I like that, I like that. Nice. So, yeah, this thing I'm thinking — partly for bizarre reasons, I just came up with the idea like five minutes before this call of, like, should I try to get AIM to hire me as their chief of staff, such that kind of like a time-bound contract or something. Ideal would be three months, but that doesn't sound that good on the end, and I'm not sure. But yeah, if I'm doing, I think, 80% of my time on AIM, I think that's reasonable. Does that sound like a good thing? Around my committing to something — like if they say six months, maybe I'm committing too much and I should doubt it, but three months sounds really great. I'm not sure if you have any takes, yeah.

**Adam:** I think — I don't know. My guess is, you know, the worst that can happen is you ask and they say no.

**Alejandro:** No, no, yeah, yeah, yeah.

**Adam:** Asking for three months. I also — yeah, don't know that much about the UK visa system, so I'll caveat it with that. I don't know, I feel like six months might not be a mistake either, in the sense of — potentially there's not six months' worth of AI adoption work, but there's probably a bunch of other just very useful work you could be doing at AIM in six months.

**Alejandro:** Yeah.

**Adam:** Often when you just get into an organization, you learn about a bunch of things that you can go and fix. Especially because.

**Alejandro:** And they have a bunch of charities, so I can just go fix the charities, yeah.

**Adam:** It's incubated with Charity Entrepreneurship, right? So you can just pick the lowest[-hanging] charities.

**Alejandro:** Yeah, exactly. Nice, nice. Okay, okay.

**Adam:** Yeah.

**Alejandro:** I'm not sure if there's any helpful context. I think I've read two of the three blog posts that you linked on Palantir. And yeah, I'll find ways of learning more, but not sure if there's anything that you — actually, is there anything that you learned at Palantir that is still underappreciated by the broader stream of people trying to be forward-deploying engineers, or people trying to do — yeah.

**Adam:** I think in some ways, everything is in those blogs, but they have a lot of content. I think their key focus — being extremely driven and extremely intense, extremely hard-working, and optimizing for solving the customer's problem and outcomes. It is not like you're optimizing to necessarily deploy AI or deploy it. It is you're optimizing to solve their problems. And so there's almost something of, like, if AI is not the solution, maybe you should still just solve the problem or something, in any case. And then use AI as one tool in your toolkit to solve problems. Like, I remember when during the evacuation of Afghanistan, there were, you know, technical software engineers like me who had been contracted, and it was like, okay, the number one thing we have to do is just process manifests of people who we're trying to evacuate from Afghanistan who have helped the United Kingdom with the resistance to the Taliban. And it's like, okay, the number one thing is just having people look at manifests and just transcribe them, and it's like, yeah, people are just going to spend 18 hours a day just transcribing them.

**Alejandro:** [Yeah.]

**Adam:** Like, even though, you know, they're software engineers, they're supposed to — you know, I think traditionally you'd expect running software — it's like, well, actually, maybe it's fine for them just to do some very basic document transcription, because they're in the right place at the right time with the right security credentials, and they have the opportunity just to solve that problem, and it'll save a bunch of lives.

**Alejandro:** Yes, yes, yeah, yeah.

**Adam:** And so there's a lot of these kind of things where it's just like being willing to do the dirty grunt work. And so it's solving for — obviously, you know, many of the things you can solve in many different ways, and you should use your unique skill when they're necessary, but the ultimate thing is like solving the problem. I think [Ben Kuhn] has something on hard problems that's kind of related to this.

**Alejandro:** That much is my wife.

**Adam:** Ben Kuhn, who's at Anthropic.

**Alejandro:** Oh yeah, yeah, I love Ben.

**Adam:** I'm fairly sure it's benkuhn.net.

**Alejandro:** Yeah, yeah, yeah, yeah, I've read it. Nice. Wait, I think — yeah, on your tools for something, you say like, oh, what I imagine the final output to look like is like some prompting, some very light scaffolding, and you can just take what you learn and take it somewhere else. But it's not super clear that the thing that you build — I'm not sure what's the thing that you imagine taking somewhere else. And if it's like — because if you're building software, usually it's made sometimes very easily replicable, but if the thing that you build is, I connect this organization's context and then Samantha becomes better just asking things from my AI without things and just getting a bunch of the right affordances — now I'm not sure what's the thing that you can reuse, and maybe you have intuitions on that.

**Adam:** Yeah, I think you should not worry about reusing it.

**Alejandro:** Okay, okay.

**Adam:** As much, or something. Like, I think there are some things which might be useful, or just, like, almost the expertise of figuring out which connectors are good and which deploys work on this. Like, for example, the default Google Drive and Google Calendar connectors in Claude.ai are just pretty bad. Like, they just don't allow you to do most things. And there are a bunch of off-the-shelf ones, and I've tried a few of them, and they all have kind of different pros and cons. I think the best one I found is, like, the Google Workspace MCP, that is the Python — again, not the official one, but the Python one that I think.

**Alejandro:** I think I'm using gog[?] — like gog, the Peter Steinberger one, the open-source one, but.

**Adam:** Possibly. Have a good one. This is the one that I have deployed a couple of places, and it's been decent.

**Alejandro:** Nice.

**Adam:** But other than — I guess the point is, there's a whole swathe of these things. There's some expertise needed, and maybe the valuable thing is just like, oh, you have the doc that explains, these are the best ones and this is how we deploy them very quickly.

**Alejandro:** Yeah, yeah. Nice, nice. Yeah, Peter Steinberger has a bunch of that — I don't know if you know his blog. Yes, I'll send you the link to the blog.

**Adam:** Yeah.

**Alejandro:** Yeah, great blog. Yeah.

**Adam:** Something like this. I'm like, yeah, distilled — a distilled version of this that is like, these are the best toppings, ready. I have not read all these.

**Alejandro:** [Yeah.]

**Adam:** And then, other things — I've ended up building a bunch of tools and setups along the way. So I think in the blog post I have linked, like, I don't know, the MCP aggregator, the MCP auth proxy, some MCP local tunneling.

**Alejandro:** Yes. Yes.

**Adam:** And things like this. They're like — Blurb[?], or like having some way for Claude to share artifacts with people.

**Alejandro:** Yes. Maybe last thing — okay, yeah, maybe two things. For reaching out to you, are you a bit more — yeah, I really like your kind of review guide or something. With email the kind of preferred medium for you, I'm okay.

**Adam:** It's good, yeah. Yeah. Email and docs.

**Alejandro:** Yeah, my — nice. And the other is, are there more tools that you like, more tools that you didn't include in the atlas, for your safety — that you, for example, this Google Workspace MCP, that you could maybe just prompt Claude to make a list and send it to me on email? Would that be easy?

**Adam:** Yeah. Good question.

**Alejandro:** Or.

**Adam:** I'll point you at two things.

**Alejandro:** Yes.

**Adam:** I think Claude Tag is pretty — .

**Alejandro:** This is a big, big win, yeah.

**Adam:** I, you know, I haven't been able to point it out because it's not been public until yesterday, but good.

**Alejandro:** Yeah.

**Adam:** And then there's — find this thing. Okay, I'll send you two things in the Google Meet chat. One is this — sorry, I did ignore it. The actual line highlights are random, but it's just those files. These are configuration files for setting up a bunch of MCPs that I use personally for the first time, like homelab. And then the second one is like, that helps set up a BlueDot. They might be outdated and they might not be the best things, but they are some of the things that I've set up.

**Alejandro:** Yes.

**Adam:** My guess is trying to read this is kind of a headache, but point Claude at these two files and be like, Adam pointed me at these as things that he has set up and found have worked reasonably well. How do they all work together? Explain it to me. Claude will probably be able to explain much of it. There are other random things in those files as well that are deployed that aren't MCP-related, but, like.

**Alejandro:** Yeah, yeah. Yeah, yeah. Nice, nice. Really — yeah, this is already useful. Thanks, this is already — but this was super helpful. And yeah, I think it's like bouncing ideas and just a person that knows what they're doing, kind of things that are reasonable, was pretty useful for me. I might apply to your AdamCon[?] thingy, if that's okay, yeah.

**Adam:** Two things. Yeah, that'd be fun if you're gonna be here. That'd be cool.

**Alejandro:** Yeah, amazing. Thanks so much, Adam.

**Adam:** Thanks. See you around.

**Alejandro:** See you.
