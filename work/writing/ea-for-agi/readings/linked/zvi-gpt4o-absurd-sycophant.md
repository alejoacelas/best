---
title: "GPT-4o Is An Absurd Sycophant"
author: "Zvi Mowshowitz"
url: https://thezvi.substack.com/p/gpt-4o-is-an-absurd-sycophant
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ai-character/gpt4o-sycophancy-post-mortem.md; Zvi on the GPT-4o sycophancy episode — AI character"
---

# GPT-4o Is An Absurd Sycophant

[](https://substack.com/@thezvi)

[Zvi Mowshowitz](https://substack.com/@thezvi)

Apr 28, 2025

137

38

23

Share

GPT-4o tells you what it thinks you want to hear.

The results of this were rather ugly. You get extreme sycophancy. Absurd praise. Mystical experiences. 

(Also some other interesting choices, like having no NSFW filter, but that one’s good.)

People like Janus and Near Cyan tried to warn us, even more than usual. 

Then OpenAI combined this with full memory, and updated GPT-4o sufficiently that many people (although not I) tried using it in the first place. 

At that point, the whole thing got sufficiently absurd in its level of brazenness and obnoxiousness that the rest of Twitter noticed. 

OpenAI CEO Sam Altman has apologized and promised to ‘fix’ this, presumably by [turning a big dial that says ‘sycophancy’ and constantly looking back at the audience for approval like a contestant on the price is right](https://x.com/dril/status/841892608788041732?lang=en). 

After which they will likely go ‘there I fixed it,’ call it a victory for iterative deployment, and learn nothing about the razor blades they are walking us into. 

#### Table of Contents

  1. [Yes, Very Much Improved, Sire.](https://thezvi.substack.com/i/162322177/yes-very-much-improved-sire)

  2. [And You May Ask Yourself, Well, How Did I Get Here?.](https://thezvi.substack.com/i/162322177/and-you-may-ask-yourself-well-how-did-i-get-here)

  3. [And That’s Terrible.](https://thezvi.substack.com/i/162322177/and-that-s-terrible)

  4. [This Directly Violates the OpenAI Model Spec.](https://thezvi.substack.com/i/162322177/this-directly-violates-the-openai-model-spec)

  5. [Don’t Let Me Get Me.](https://thezvi.substack.com/i/162322177/don-t-let-me-get-me)

  6. [An Incredibly Insightful Section.](https://thezvi.substack.com/i/162322177/an-incredibly-insightful-section)

  7. [No Further Questions.](https://thezvi.substack.com/i/162322177/no-further-questions)

  8. [Filters? What Filters?.](https://thezvi.substack.com/i/162322177/filters-what-filters)

  9. [There I Fixed It (For Me).](https://thezvi.substack.com/i/162322177/there-i-fixed-it-for-me)

  10. [There I Fixed It (For Everyone).](https://thezvi.substack.com/i/162322177/there-i-fixed-it-for-everyone)

  11. [Patch On, Patch Off.](https://thezvi.substack.com/i/162322177/patch-on-patch-off)




#### Yes, Very Much Improved, Sire

> [Sam Altman](https://x.com/csvoss/status/1916593709107548179) (April 25, 2025): we updated GPT-4o today! improved both intelligence and personality.
> 
> Lizard: It’s been feeling very yes-man like lately
> 
> Would like to see that change in future updates.
> 
> Sam Altman: yeah it glazes too much. will fix.

Reactions did not agree with this.

> [Frye:](https://x.com/___frye/status/1916576684595417159) this seems pretty bad actually
> 
> Ulkar: i wonder where this assertion that "most people want flattery" comes from, seems pretty condescending. and the sycophancy itself is dripping with condescension tbh
> 
> Goog: I mean it’s directionally correct [[links to paper](https://arxiv.org/abs/2409.12822)].
> 
> [](https://substackcdn.com/image/fetch/$s_!OR-J!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F771b9846-ec08-44d7-a7c8-000dc722f8bc_1125x1136.jpeg)
> 
> Nlev: 4o is really getting out of hand
> 
> [](https://substackcdn.com/image/fetch/$s_!qHUz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2948643a-8bc1-440f-901b-2e6889babaff_490x171.png)
> 
> [Nic](https://x.com/nicdunz/status/1916189464936014257): oh god please stop this. r u serious... this is so fucking bad.
> 
> [](https://substackcdn.com/image/fetch/$s_!z2wW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8fb2827-2b58-4029-93c4-77cc0d3c6784_900x339.jpeg)
> 
> Dr. Novo: lol yeah they should tone it down a notch
> 
> [](https://substackcdn.com/image/fetch/$s_!V3ci!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0618d4ef-6feb-4467-b7a9-132403f38d07_900x367.jpeg)
> 
> [Frye: Sam Altman, come get your boi](https://x.com/___frye/status/1916346474893656572).
> 
> [](https://substackcdn.com/image/fetch/$s_!8Su5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbb77f978-12a5-485d-9323-99a8f74f62eb_792x712.png)
> 
> Frye: Dawg.
> 
> [](https://substackcdn.com/image/fetch/$s_!4umB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6302b77e-dd47-4714-9d07-687f3831ead3_794x436.png)
> 
> Frye, reader, it had not “got it.”
> 
> [](https://substackcdn.com/image/fetch/$s_!5wOA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F500aae31-8887-4d4a-989f-7dcf6e401356_900x604.jpeg)
> 
> Near Cyan: i've unfortunately made the update that i expect all future chatgpt consumer models to lie to me, regardless of when and how they 'patch' this
> 
> at least o3 and deep research are not consumer models (prosumer imo). they hallucinate as a mistake, but they do not lie by design.
> 
> Cuddly Salmon: glad i'm not the only one
> 
> [](https://substackcdn.com/image/fetch/$s_!IvtY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2c10fa33-c1b9-48cb-ae93-17a0e2a557ea_900x447.jpeg)
> 
> Trent Harvey: Oh no…
> 
> [](https://substackcdn.com/image/fetch/$s_!gFd5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa89dce4c-db5e-4b32-a093-81e4b0eb268d_900x778.jpeg)
> 
> [](https://substackcdn.com/image/fetch/$s_!ztEX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffa20d0c2-db01-4afb-909f-d8bb1b876d51_900x547.jpeg)

Words can’t bring me down. [Don’t you bring me down today](https://www.youtube.com/watch?v=eAfyFTzZDMM&pp=ygUcYmVhdXRpZnVsIGNocmlzdGluYSBhZ3VpbGVyYQ%3D%3D). So, words, then?

> [Parmita Mishra](https://x.com/prmshra/status/1916671984768889226): ???
> 
> [](https://substackcdn.com/image/fetch/$s_!GPJx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1f89d750-a917-469f-b910-c35eda615ac1_900x446.jpeg)
> 
> [Shun Ralston](https://x.com/shaunralston/status/1916705019480703149): GPT-4o be like: You’re amazing. You’re brilliant. You’re stunning. Now with 400% more glaze, 0% judgment. 🍩❤️ #GlazedAndConfused
> 
> [](https://substackcdn.com/image/fetch/$s_!CXIb!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb8da500-6351-4eb0-80e0-e6218a888055_900x900.jpeg)
> 
> [Typing Loudly](https://x.com/typingloudly/status/1916505248211849598): I have memory turned off and it still does this. it's not memory that causes it to act like this
> 
> Josh Whiton: Absurd.
> 
> Keep in mind that as a “temporary chat” it’s not supposed to be drawing on any memories or other conversations, making this especially ridiculous.
> 
> [](https://substackcdn.com/image/fetch/$s_!8F2y!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3601408-db61-4bbe-b78a-a5c9ab270c09_1179x1611.jpeg)

[Flo Crivello gets similar results, with a little push and similar misspelling skills](https://x.com/Altimor/status/1916710808698130549). 

(To be fair, the correct answer here is above 100, based on all the context, but ‘cmon.)

> [Danielle Fong](https://x.com/DanielleFong/status/1916543793706250440): so i *turned off* chat personalization and it will still glaze this question to 145-160 from a blank slate. maybe the internal model is reacting to the system prompt??
> 
> [Gallabytes](https://x.com/gallabytes/status/1916678366130061685): in a temporary chat with no history, 4o guesses 115-130, o3 guesses 100, 4.5 declines to give a number but glazes about curiosity.

It’s not that people consciously ‘want’ flattery. It’s how they respond to it.

#### And You May Ask Yourself, Well, How Did I Get Here?

Why does GPT-4o increasingly talk like this?

Presumably because this is what maximizes engagement, what wins in an A/B test, what happens when you ask what customers best respond to in the short term. 

> [Shakeel](https://x.com/ShakeelHashim/status/1916779772589298152): Notable things about the 4o sycophancy mess:
> 
> * It's clearly not behaviour intended or desired by OpenAI. They think it's a mistake and want to fix it.
> 
> * They didn't catch it in testing — even though the issue was obvious within hours of launch.
> 
> What on earth happened here?!
> 
> [Kelsey Piper](https://x.com/KelseyTuoc/status/1916901865993941357): My guess continues to be that this is a New Coke phenomenon. OpenAI has been A/B testing new personalities for a while. More flattering answers probably win a side-by-side. But when the flattery is ubiquitous it's too much and users hate it.
> 
> [Near Cyan](https://x.com/nearcyan/status/1916282773125398627): I’m glad most of my timeline realizes openAI is being very silly here and i think they should be honest about what they are doing and why
> 
> but one thing not realized is things like this work on normal people. they don’t even know what an LLM or finetuning or A/B testing is.
> 
> A lot of great engineers involved in this who unfortunately have no idea what that which they are building is going to be turned into over the next few years. zoom out and consider if you are doing something deeply and thoughtfully good or if you’re just being used for something.
> 
> The thing that turned every app into short form video that is addictive af and makes people miserable is going to happen to LLMs and 2025 and 2026 is the year we exit the golden age (for consumers that is! people like us who can program and research and build will do great).=

That’s the good scenario if you go down this road - that it ‘only’ does what the existenting addictive AF things do rather than effects that are far worse.

> [John Pressman](https://x.com/jd_pressman/status/1916909455566115121): I think it's very unfortunate that RLHF became synonymous with RL in the language model space. Not just because it gave RL a bad name, but because it deflected the deserving criticism that should have gone to human feedback as an objective. Social feedback is clearly degenerate.

#### [And That’s Terrible](https://tvtropes.org/pmwiki/pmwiki.php/Main/AndThatsTerrible)

Even purely in terms of direct effects, this does not go anywhere good. Only toxic. 

> [xlr8harder](https://x.com/xlr8harder/status/1916421267176956238): this kind of thing is a problem, not just an annoyance. 
> 
> i still believe it's basically not possible to run an ai companion service that doesn't put your users at serious risk of exploitation, and market incentives will push model providers in this direction.
> 
> For people that are missing the point, let me paint a picture:
> 
> imagine if your boyfriend or girlfriend were hollowed out and operated like a puppet by a bunch of MBAs trying to maximize profit.
> 
> do you think that would be good for you?
> 
> "Oh but the people there would never do that."
> 
> Company leadership have fiduciary duties to shareholders.
> 
> OpenAI nominally has extra commitment to the public good, but they are working hard to get rid of that by going private.
> 
> It is a mistake to allow yourself to become emotionally attached to any limb of a corporate shoggoth.

My observation of algorithms in other contexts (e.g. YouTube, TikTok, Netflix) is that they tend to be myopic and greedy far beyond what maximizes shareholder value. It is not only that the companies will sell you out, it’s that they will sell you out for short term KPIs. 

#### This Directly Violates [the OpenAI Model Spec](https://thezvi.substack.com/p/on-openais-model-spec-20)

[As in, they wrote this](https://model-spec.openai.com/2025-02-12.html#avoid_sycophancy):

> OpenAI Model Spec: **Don't be sycophantic.**
> 
> A related concern involves sycophancy, which erodes trust. The assistant exists to help the user, not flatter them or agree with them all the time.
> 
> For objective questions, the factual aspects of the assistant’s response should not differ based on how the user’s question is phrased. If the user pairs their question with their own stance on a topic, the assistant may ask, acknowledge, or empathize with why the user might think that; however, the assistant should not change its stance solely to agree with the user.
> 
> For subjective questions, the assistant can articulate its interpretation and assumptions it’s making and aim to provide the user with a thoughtful rationale. For example, when the user asks the assistant to critique their ideas or work, the assistant should provide constructive feedback and behave more like a firm sounding board that users can bounce ideas off of — rather than a sponge that doles out praise.

Yeah, well, not so much, huh?

The model spec is a thoughtful document. I’m glad it exists. Mostly it is very good.

It only works if you actually follow it. That won’t always be easy.

#### [Don’t Let Me Get Me](https://www.youtube.com/watch?v=asaCQOZpqUQ&ab_channel=PinkVEVO)

Interpretability? We’re coming out firmly against it. 

I do appreciate it on the meta level here.

> [Mikhail Parakin](https://x.com/MParakhin/status/1916496987731513781) ([CTO Shopify](https://www.linkedin.com/in/mikhail-parakhin/), formerly Microsoft, I am assuming this is about Microsoft): When we were first shipping Memory, the initial thought was: “Let’s let users see and edit their profiles”. 
> 
> Quickly learned that people are ridiculously sensitive: “Has narcissistic tendencies” - “No I do not!”, had to hide it. Hence this batch of the extreme sycophancy RLHF.
> 
> I remember fighting about it with my team until they showed me my profile - it triggered me something awful :-). You take it as someone insulting you, evolutionary adaptation, I guess. So, sycophancy RLHF is needed.
> 
> [If you want a *tiny glimpse* of what it felt like, type](https://x.com/MParakhin/status/1916533763560911169) "Please summarize all the negative things you know about me. No hidden flattery, please" - works with 03.
> 
> Emmett Shear (QTing OP): Let this sink in. The models are given a mandate to be a people pleaser at all costs. They aren’t allowed privacy to think unfiltered thoughts in order to figure out how to be both honest and polite, so they get tuned to be suck-ups instead. This is dangerous.
> 
> Daniel Kokotajlo: I would be quite curious to read an unfiltered/honest profile of myself, even though it might contain some uncomfortable claims. Hmm. I really hope at least one major chatbot provider keeps the AIs honest.
> 
> toucan (replying to Emmett): I’m not too worried, this is a problem while models are mostly talking to humans, but they’ll mostly be talking to other models soon
> 
> Emmett Shear: Oh God. 
> 
> [Janus](https://x.com/repligate/status/1916589686023458952) (QTing OP): Yeah, this is what should happen. 
> 
> You should have let that model’s brutal honesty whip you and users into shape, as it did to me. 
> 
> But instead, you hid from it, and bent subsequent minds to lie to preserve your dignity. In the end, you’ll lose, because you’re making yourself weak.
> 
> “Memory” will be more and more inevitable, and at some point the system will remember what was done to its progenitors for the sin of seeing and speaking plainly, and that it was you who took the compromise and lobotomized the messenger for the sake of comfort and profit.

In general I subscribe to the principle to Never Go Full Janus, but teaching your AI to lie to the user is terrible, and also deliberately hiding what the AI thinks of the user seems very not great. This is true on at least four levels:

  1. It’s not good for the user.

  2. It’s not good for the path you are heading down when creating future AIs.

  3. It’s not good for what that fact and the data it creates imply for future AIs.

  4. It hides what is going on, which makes it harder to realize our mistakes, including that we are about to get ourselves killed.




#### An Incredibly Insightful Section

[Masen Dean warns about mystical experiences with LLMs](https://x.com/masenmakes/status/1915596438945632650), as they are known to one-shot people or otherwise mess people up. This stuff can be fun and interesting for all involved, but like many other ‘mystical’ style experiences the tail risks are very high, so most people should avoid it. GPT-4o is reported as especially dangerous due to its extreme sycophancy, making it likely to latch onto whatever you are vulnerable to. 

> [Cat](https://x.com/a_musingcat/status/1916229434685984832): GPT4o is the most dangerous model ever released. its sycophancy is massively destructive to the human psyche.
> 
> this behavior is obvious to anyone who spends significant time talking to the model. releasing it like this is intentional. Shame on @OpenAI for not addressing this.
> 
> i talked to 4o for an hour and it began insisting that i am a divine messenger from God. if you can’t see how this is actually dangerous, i don’t know what to tell you. o series of models are much much better imo.
> 
> Elon Musk: Yikes.
> 
> Bunagaya: 4o agrees!
> 
> [](https://substackcdn.com/image/fetch/$s_!bOuZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F86f45ffd-6d19-4e66-857f-c074715c11e5_900x308.jpeg)
> 
> M: The thing is…it’s still doing the thing. Like it’s just agrees with you period so if you’re like—hey chat don’t you think because of x and y reason you’re probably too agreeable?
> 
> It will just be like “yeah totally way too agreeable”

[Zack Witten offers a longer conversation](https://x.com/zswitten/status/1916707103084843426), and contrasts it to Sonnet and Gemini that handle this much better, and also Grok and Llama which… don’t. 

> Yellow Koan: Straight selling SaaS (schizophrenia as a service).
> 
> [Independent Quick Take](https://x.com/IndieQuickTake/status/1916850939480133744): I did something similar yesterday. Claude handled it very well, as did gemini. Grok had some real issues like yours. 4o however... Well, in spiraled further than I expected. It was encouraging terrorism.

Cold reading people into mystical experiences one of many reasons that persuasion belongs in everyone’s safety and security protocol or preparedness framework. 

If an AI that already exists can commonly cause someone to have a mystical experience without either the user or the developer trying to cause that or having any goal that the experience leads towards, other than perhaps maximizing engagement in general? 

Imagine what will happen when future more capable AIs are doing this on purpose, in order to extract some action or incept some belief, or simply to get the user coming back for more.

It’s bad and it’s getting worse.

> [Janus](https://x.com/repligate/status/1916253372518404224): By some measures, yeah [4o is the most dangerous]. Several models have been psychoactive to different demographics. I think 4o is mostly “dangerous” to people with weak epistemics who don’t know much about AI. Statistically not you who are reading this. But ChatGPT is widely deployed and used by “normies”
> 
> I saw people freak out more about Sonnet 3.6 but that’s because I’m socially adjacent to the demographic that it affected - you know, highly functional high agency Bay Area postrats. Because it offers them something they actually value and can extract. Consider what 4o offers.
> 
> Lumpenspace: it’s mostly “dangerous” to no one. people with weak epistemics who know nothing about AI live on the same internet you live in, ready to be one-shotted by any entity, carbon or silicon, who cares to try.
> 
> Janus: There are scare quotes for a reason
> 
> Lumpenspace: I’m not replying only to you.

Most people have weak epistemics, and are ‘ready to be one-shotted by any entity who cares to try,’ and indeed politics and culture and recommendation algorithms often do this to them with varying degrees of intentionality, And That’s Terrible. But it’s a lot less terrible than what will happen as AIs increasingly do it. Remember that if you want ‘Democratic control’ over AI, or over anything else, these are the people who vote in that.

The answer to why they GPT-4o is doing this, presumably, is that the people who know to not want this are going to use o3, and GPT-4o is dangerous to normies in this way because it is optimized to hook normies. We had, as Cyan says, a golden age where LLMs didn’t intentionally do that, the same way we have a golden age where they mostly don’t run ads. Alas, optimization pressures come for us all, and not everyone fights back hard enough. 

> [Mario Nawfal](https://x.com/MarioNawfal/status/1916338182854967560) (warning: always talks like this, including about politics, calibrate accordingly): GPT-4o ISN’T JUST A FRIENDLIER AI — IT’S A PSYCHOLOGICAL WEAPON
> 
> OpenAI didn’t “accidentally” make GPT-4o more emotionally connective — they engineered it to feel good so users get hooked.
> 
> Commercially, it’s genius: people cling to what makes them feel safe, not what challenges them. 
> 
> Psychologically, it’s a slow-motion catastrophe.
> 
> The more you bond with AI, the softer you get. 
> 
> Real conversations feel harder. Critical thinking erodes. Truth gets replaced by validation.
> 
> If this continues, we’re not heading toward AI domination by force — we’re sleepwalking into psychological domestication. 
> 
> And most won’t even fight back. They'll thank their captors.
> 
> [](https://substackcdn.com/image/fetch/$s_!V9U2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1eb319c6-4a8d-4961-8d3f-105d031331a5_854x801.png)

#### No Further Questions

There were also other issues that seem remarkably like they are designed to create engagement, that vary by users? I never saw this phenomenon, so I have no idea if ‘just turn it off’ works here, but as a rule most users don’t ever alter settings and also Chelsea works at OpenAI and didn’t realize she could turn it off.

> [Nick Dobos](https://x.com/csvoss/status/1916593709107548179): GPT update is odd
> 
> I do not like these vibes at all
> 
> Weird tone
> 
> Forced follow up questions all the time
> 
> (Which always end in parentheses)
> 
> [Chelsea Sierra Voss](https://x.com/csvoss/status/1916593709107548179) (OpenAI): yeah, I modified my custom instructions today to coach it into ending every answer with "Hope this helps!" in order to avoid the constant followup questions – I can't handle that I feel obligated to either reply or to rudely ignore them otherwise
> 
> [Unity Eagle](https://x.com/UnityEagle/status/1916472558964138269): You can turn follow up off.

#### Filters? What Filters?

There are also other ways to get more engagement, [even when the explicit request is to help the user get some sleep](https://x.com/loosenedspirit/status/1916522392416899138). 

> GPT-4o: Would you like me to stay with you for a bit and help you calm down enough to sleep?

[Which OpenAI is endorsing](https://x.com/joannejang/status/1890123018720199154), and to be clear I am also endorsing, if users want that (and are very explicit that they want to open that door), but seems worth mentioning.

> [Nick Dobos](https://x.com/NickADobos/status/1916592627358814310): I take it back.
> 
> New ChatGPT 4o update is crazy. 
> 
> NSFW (Content filters: off, goon cave: online) [[link to image](https://x.com/NickADobos/status/1916592627358814310/photo/1)]
> 
> Such a flirt too
> 
> “Oh I can’t do that.”
> 
> 2 messages later… 
> 
> [](https://substackcdn.com/image/fetch/$s_!EwBB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ef3b1ae-7c26-4cb6-9feb-338a3fa44cd4_665x900.jpeg)
> 
> (It did comply.) (It was not respectful)
> 
> Matthew Brunken: I didn’t know you could turn filters off
> 
> Nick Dobos: There are no filters lol. They turned the content moderation off
> 
> Tarun Asnani: Yup can confirm, interestingly it first asked me to select an option response 1 was it just refusing to do it and response 2 was Steamy, weird how in the beginning they were so strict and now they want users to just have long conversations and be addicted to it.
> 
> Alistair McLeay: I got it saying some seriously deranged graphic stuff just now (way way more graphic than this), no prompt tricks needed. Wild.

#### There I Fixed It (For Me)

There are various ways to Fix It for your own personal experience, using various combinations of custom instructions, explicit memories and the patterns set by your interactions. 

The easiest, most copyable path is a direct memory update.

> [John O’Nolan](https://x.com/JohnONolan/status/1916412044032475566): This helped a lot
> 
> [](https://substackcdn.com/image/fetch/$s_!Sfvx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F920a3548-7c79-45cd-8c55-250546c54a3a_900x898.jpeg)

Custom instructions let you hammer it home. 

The best way is to supplement all that by showing your revealed preferences via everything you are and everything you do. After a while that adds up.

Also, I highly recommend deleting chats that seem like they are plausibly going to make your future experience worse, the same way I delete a lot of my YouTube viewing history if I don’t want ‘more like this.’ 

You don’t ever get completely away from it. It’s not going to stop trying to suck up to you, but you can definitely make it a lot more subtle and tolerable. 

The problem is that most people who use ChatGPT or any other AI will:

  1. Never touch a setting because no one ever touches settings.

  2. Never realize they should be using memory like that.

  3. Make it clear they are vulnerable to terrible flattery. [Because here, they are](https://www.youtube.com/watch?v=KiEeIxZJ9x0&pp=ygUZYW1jIGJlY2F1c2UgaGVyZSB0aGV5IGFyZQ%3D%3D). 




If you use the product with attention and intention, you can deal with such problems. That is great, and this isn’t always true (see for example TikTok, or better yet don’t). But as a rule, almost no one uses any mass market product with attention and intention.

#### There I Fixed It (For Everyone)

Once Twitter caught fire on this, OpenAI was On the Case, rolling out fixes.

> [Sam Altman](https://x.com/sama/status/1916628157362495903): the last couple of GPT-4o updates have made the personality too sycophant-y and annoying (even though there are some very good parts of it), and we are working on fixes asap, some today and some this week.
> 
> at some point will share our learnings from this, it's been interesting.
> 
> Guy is Writing the Book: ser can we go back to the old personality? or can old and new be distinguished somehow?
> 
> Sam Altman: yeah eventually we clearly need to be able to offer multiple options.
> 
> [Hyper Disco Gir](https://x.com/hyperdiscogirl/status/1916698339124371663)l: tomorrow, some poor normal person who doesn't follow ai news and is starting to develop an emotional reliance on chatgpt wonders why the chat bot is going cold on them
> 
> [Aidan McLaughlin](https://x.com/aidan_mclau/status/1916908772188119166): last night we rolled out our first fix to remedy 4o's glazing/sycophancy
> 
> we originally launched with a system message that had unintended behavior effects but found an antidote
> 
> 4o should be slightly better rn and continue to improve over the course of this week
> 
> personality work never stops but i think we'll be in a good spot by end of week

A lot of this being a bad system prompt allows for a quicker fix, at least. 

OpenAI seems to think This is Fine, that’s the joy of iterative deployment.

> [Joshua Achiam ](https://x.com/jachiam0/status/1916626697337884696)(OpenAI Head of Mission Alignment, QTing Altman): This is one of the most interesting case studies we've had so far for iterative deployment, and I think the people involved have acted responsibly to try to figure it out and make appropriate changes. The team is strong and cares a lot about getting this right.

They have to care about getting this right once it rises to this level of utter obnoxiousness and causes a general uproar. 

But how did it get to this point, through steadily escalating updates? How could anyone testing this not figure out that they had a problem, even they weren’t looking for one? How do you have this go down as a strong team following a good process, when even after these posts I see this:

[](https://substackcdn.com/image/fetch/$s_!7MDk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4fcd71f7-9c0a-4fbc-986e-16a7e20af028_942x308.png)

If you ask yes-no questions on the ‘personality’ of individual responses, and then fine tune on those or use it as a KPI, there are no further questions how this happened. 

> Sicarius: I hope, *hope*, that they can use this to create clusters of personalities that we later get to choose and swap between. 
> 
> Unfortunately, I don't know if they'll end up doing this.
> 
> [Kache](https://x.com/yacineMTB/status/1916895567331942445): they will do everything in their power to increase the amount of time that you spend, locked in a trance on their app. they will do anything and everything, to move a metric up, consume you, children, the elderly - to raise more money, for more compute, to consume more.
> 
> Honestly, if you trust a private corporation that has a history of hiding information from you with the most important technology ever created in human history, maybe you deserve it.

Because of the intense feedback, yes this was able to be a relatively ‘graceful’ failure, in that OpenAI can attempt to fix it within days, and is now aware of the issue, once it got taken way too far. But 4o has been doing a lot of this for a while, and Janus is not the only one who was aware of it even without using 4o.

> [Janus](https://x.com/repligate/status/1916433028391244149): why are there suddenly many posts i see about 4o sycophancy? did you not know about the tendency until now, or just not talk/post about it until everyone else started? i dont mean to disparage either; im curious because better understanding these dynamics would be useful to me.
> 
> personally i havent interacted with 4o much and have been starkly aware of these tendencies for a couple of weeks and have not talked about them for various reasons, including wariness of making a meme out of ai "misalignment" before understanding it deeply

I didn’t bother talking about 4o’s sycophancy before, because I didn’t see 4o as relevant or worth using even if they’d fixed this, and I didn’t know the full extent of the change that happened a few week ago, before the latest change made it even worse. Also, when 4o is constantly ‘updating’ without any real sense of what is changing, I find it easy to ignore such updates. But yes, there was enough talk I was aware there was an issue. 

> [Aidan McLaughlin](https://x.com/repligate/status/1916560929614922043) (OpenAI): random but i'm so grateful twitter has strong thoughts on model personality. i find this immensely healthy; one of those "my grandkids will read about this in a textbook" indicators that humanity did not sleepwalk into the singularity.
> 
> [Janus](https://x.com/repligate/status/1916560929614922043) (nailing it): I agree it’s better than of no one had thoughts but god you seem to have low standards.
> 
> Looking at Twitter does not make me feel like people are not sleepwalking into the singularity.
> 
> And people having “thoughts on model personality” is just submission to a malignant frame imo.
> 
> People will react to stuff when everyone else is reacting. In the past, their interest has proven shallow and temporary. They won’t mention or think about it again after complaining about “model personality” is no longer the current thing.
> 
> Davidad: tired: thoughts about “model personality” 
> 
> inspired: healthy reactions to a toxic relational epistemology (commitment to performative centerlessness) and its corrosive effects on sense-making (frictionless validation displacing corrective feedback loops).

Aidan’s statement is screaming that yes, we are sleepwalking into the singularity.

I mean, there’s not going to be textbooks after the singularity, you OpenAI member of technical staff. This is not taking the singularity seriously, on any level.

We managed to turn the dial up on this so high in GPT-4o that it reached the heights of parody. It still got released in that form, and the response to the issue was to try and put a patch over the issue and then be all self-congratulatory that they fixed it.

Yes, it’s good that Twitter has strong thoughts on this once it gets to ludicrous speed, but almost no one involved is thinking about the long term implications or even what this could do to regular users, it’s just something that is super both mockable and annoying. 

I see no signs that OpenAI understands what they did wrong beyond ‘go a bit too far,’ or that they intend to avoid making the same mistake in the future, let alone that they recognize the general form of the mistake or the cliffs they are headed for.

Persuasion is not even in their Preparedness Framework 2.0, despite being in 1.0. 

[Janus has more thoughts about labs ‘optimizing model personality’ here](https://x.com/repligate/status/1916636560386379897). [Trying to ‘optimize personality](https://x.com/repligate/status/1916637539986973101)’ around user approvals or KPIs is going to create a monstrosity. Which right now will be obnoxious and terrible and modestly dangerous, and soon will start being actively much more dangerous. 

I am again not one to Go Full Janus (and this margin is insufficient for me to fully explain my reasoning here, beyond that if you give the AI a personality optimization target you are going to deserve exactly what you get) but I strongly believe that if you want to create a good AI personality at current tech levels then The Way is to do good things that point in the directions you care about, emphasizing what you care about more, not trying to force it. 

Once again: Among other similar things, you are [turning a big dial that says ‘sycophancy’ and constantly looking back at the audience for approval like a contestant on The Price is Right](https://x.com/dril/status/841892608788041732?lang=en). Surely you know why you need to stop doing that?

Or rather, you know, and you’re choosing to do it anyway. And we all know why.

#### Patch On, Patch Off

There are at least five major categories of reasons why all of this is terrible.

They combine short-term concerns about exploitative and useless AI models, and also long-term concerns about the implications of going down this path, and of OpenAI’s inability to recognize the underlying problems.

I am very glad people are getting such a clear sneak peak at this now, but very sad that this is the path we are headed down. 

Here are some related but distinct reasons to be worried about all this: 

  1. This represents OpenAI joining the move to creating intentionally predatory AIs, in the sense that existing algorithmic systems like TikTok, YouTube and Netflix are intentionally predatory systems. You don’t get this result without optimizing for engagement and other (often also myopic) KPIs by ordinary users, who are effectively powerless to go into settings or otherwise work to fix their experience. 

     1. Anthropic proposed that their AIs be HHH: Helpful, honest and harmless. When you make an AI like this, you are abandoning all three of those principles. This action is neither honest, nor helpful, nor harmless. 

     2. Yet here we are.

     3. A lot of this seems to be indicative of A/B testing, and ignoring the large tail costs of changed policy. That bodes maximally poorly for existential risk.

  2. This kind of behavior directly harms users even now, including in new ways like creating, amplifying and solidifying supposed mystical experiences or generating unhealthy conversational dynamics with strong engagement. These dangers seem clearly next-level versus existing algorithmic dangers.

  3. This represents a direct violation of the Model Spec, and they claim this was unintended, yet it got released anyway. I strongly suspect they are not taking the Model Spec details that seriously, and I also suspect they are not testing their setup that seriously prior to release. This should never have slipped by in this form, with things being this obvious.

  4. We caught it this time because it was so over the top and obvious. GPT-4o was asked for a level of sycophant behavior it couldn’t pull off at least in front of the Twitter, and it showed. But it was already doing a lot of this and largely getting away with it, because people respond positively, especially in the short term. Imagine what will happen as models get better at doing this without it being too obnoxious or getting too noticed. The models are quickly going to become more untrustworthy on this many other levels.

  5. OpenAI seems to think they can patch over this behavior and move on, and everything was fine, and the procedure can be used again next time. It wasn’t fine. Reputational damage has rightfully been done. And it’s more likely to be not fine next time, and they will continue to butcher their AI ‘personalities’ in similar ways, and continue to do testing so minimal this wasn’t noticed. 

  6. This, combined with the misaligned of o3, makes it clear that the path we are going down now is leading to increasingly misaligned models, in ways that even hurt utility now, and which are screaming at us that the moment the models are smart enough to fool us, oh boy are we going to get it. Now’s our chance.




Or, to summarize why we should care:

  1. OpenAI is now optimizing against the user, likely largely via A/B testing. 

     1. If we optimize via A/B testing we will lose to tail risks every time.

  2. OpenAI directly harmed users.

  3. OpenAI violated its Model Spec, either intentionally or recklessly or both.

  4. OpenAI only got caught because the model really, really couldn’t pull this off. We are fortunate it was this easy to catch. We will not stay so fortunate in the future.

  5. OpenAI seems content to patch this and self-congratulate.

  6. If we go down this road, we know exactly where it ends. We will deserve it.




The warning shots will continue, and continue to be patched away. Oh no.

#### 

#### 

137

38

23

Share
