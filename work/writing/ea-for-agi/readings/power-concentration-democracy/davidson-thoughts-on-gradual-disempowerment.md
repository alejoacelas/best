---
title: "Thoughts on Gradual Disempowerment"
author: "Tom Davidson"
date: 2025-08-15
url: https://www.lesswrong.com/posts/ct6SMDuexe9uBwDoL/thoughts-on-gradual-disempowerment
fetched: 2026-07-07
via: forum-graphql
topic: "power-concentration-democracy"
note: "gap-scour: Tom Davidson's pointed rebuttal — GD reduces to misalignment or human power-concentration, not an independent risk"
---

*Epistemic status: very rough! Spent a couple of days reading the Gradual Disempowerment paper and thinking about my view on it. Won’t spend longer on this, so am sharing rough notes as is*

Summary
-------

*   I won’t summarise the paper here! If you’re not familiar with it, I recommend reading the paper’s [exec summ](https://gradual-disempowerment.ai/) before continuing.
*   There are lots of things I like about the paper! For example:
    *   It’s a nice lens on the role that structural and competitive dynamics play in threat models from misalignment and power concentration.
    *   It makes a great point: cultural evolution has historically been constrained to parts of “culture space” that keep humans economically productive (and thus alive!). Once AI obsolete human labour, that constraint won’t apply. So unconstrained cultural evolution becomes more scary.
    *   It’s a nice reminder that there are possible paths to human disempowerment that happen without AI being *explicitly power-seeking.* Though I think these paths still rely on AI being misaligned, and to me they seem a lot less worrying than risks from power-seeking (see below).
*   My high-level view is that **the most convincing versions of gradual disempowerment** ***either*** **rely on misalignment*****or*** result power concentration among humans.
    *   I don’t think of “gradual disempowerment” as an important *sui generis* risk, but as a useful lens on the risks of power concentration and misalignment.
    *   There’s aren’t “gradual disempowerment” threat models I’ve heard that 1) don’t rely crucially on misalignment, 2) lead to *all* humans being disempowered rather than power concentration, 3) are similarly plausible to the risks from power-seeking AI or AI-enabled coups.
    *   I do think the GD threat model that relies on an intermediate level of misalignment, but not on power-seeking, is distinct and interesting and worth some consideration. (I think of this as similar to [Christiano's "going out with a whimper"](https://www.lesswrong.com/posts/HBxe6wdjxK239zajf/what-failure-looks-like), perhaps with somewhat better alignment that he assumes.) It feels more like "hmm maybe this is plausible" than "I'm convinced this is plausible".
*   The [paper](https://gradual-disempowerment.ai/) argues that humans will be **economically** disempowered, **culturally** disempowered, and that the **state** will stop serving the interests of its citizens. I’ll comment on the papers sections about these three domains one by one.
*   **Economic.** The argument for economic disempowerment seems unconvincing as stated.
    *   Yes, humans will no longer earn wages.
    *   But even if human labour is no longer valuable, (a small fraction of) humans will continue to own capital assets by default which will generate significant income. And superhuman AI can invest this income on humans’ behalf (absent sabotage from misaligned AI).
    *   If AIs don’t earn wages, all income will be capital income that goes to humans.
    *   Even if AIs *do* earn wages, those wages may be driven down to subsistence levels via Malthusian dynamics (you can quickly make more compute) so that human income from capital assets dominates AI income.
    *   Even if AIs earn *significant non-subsistence wages*, humans can easily tax that income at >50% and give it to humans.
    *   TBC, the dynamics here do strongly point towards significant concentration of economic power among humans. Just not to *total* human disempowerment.
*   **Cultural.** If humans remain economically empowered (in the sense of having much more money than AI), I think they will likely remain culturally empowered.
    *   The paper points that that AIs will likely dominate cultural *supply*, producing the content we all consume. But if humans are economically empowered, they will dominate cultural *demand.*
    *   Yes, there are risks that AI exploits psychological weaknesses in people. This is already happening (e.g. tiktok). But the counter-pressure is that the humans that are exploited by AI will be visibly doing quite badly and will have less status and economic influence. Whereas the humans that prioritise consuming cultural products that help them flourish will visibly do well and gain more status and influence. Then humans, including future generations, will copy those who are flourishing.
    *   \[This isn’t a knock-down argument that culture won’t go off the rails. I’m just noting why I wasn’t convinced by the GD argument as stated, excluding concerns about AI being misaligned.\]
*   **State.** It’s hard to see how those leading the state and the top AI companies could be disempowered, absent misalignment.
    *   The GD paper points out that, once citizens’ labour isn’t economically valuable, states lose incentive to prioritise citizen’s interests. (Also see the [“intelligence curse”](https://intelligence-curse.ai/).)  This is a route to the concentration of power in the hands of a relatively small number of capital owners, business executives and government officials. I agree that this is a risk.
        *   This an importantly different route to power concentration than [AI-enabled coups](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power). Though AI-enabled coups result in more extreme power concentration, which I think is more concerning.
    *   But the paper gives little argument for thinking that, absent misalignment, this disempowerment will extend to all humans.
    *   We’re talking about a relatively small number of dominant countries (US, China) and a relatively small number of leading AI companies. Absent misalignment, why do the dozens of people controlling these entities compete so hard against each other, or submit to such extreme cultural drift, that they are significantly disempowered? Especially as, if they’ve solved alignment, they have the technical ability to have truthful superintelligent assistants telling them that their current actions will lead to major catastrophe.
    *   I feel the paper doesn’t get sufficiently concrete about how such a small group could be disempowered in practice. It’s important here to think concretely about the actual strength of the selection pressure for “compete viciously” vs the self-interested reasons not to completely lose control.
    *   (Tbc, I grant that this could happen if AI is misaligned, and that competitive dynamics can make such misalignment much harder to handle. And I buy that there might be extreme power concentration. But I felt the paper’s more unique contribution could be pointing to a distinct source of risk, and in my view the risk is much less convincing if we remove misalignment and still try to argue that *all* people will be disempowered.)
        *   I think there are coherent scenarios where all humans are disempowered despite technical alignment being solved, but I would guess they’re 10X less likely than extreme power concentration or misalignment-caused catastrophe.
*   **Is handoff necessarily bad?** Throughout, the paper seems to assume that “handing off decisions to AI” is a bad outcome. But if AI is aligned this could be a very good outcome.
    *   Humans are very flawed! Selfish, close-minded, incompetent.
    *   Aligned AI could be much better on all dimensions, and better navigate many complex challenges. It could *increase* our effective control of the situation.
    *   It could be a grave mistake *not* to hand over control to aligned AI.
    *   So I encourage a more nuanced attitude than “let’s not hand off decisions to AI as that involves losing control”.
*   Can’t we respond to gradual-disempowerment problems as they emerge?
    *   By the time the risks from AI takeover or AI-enabled human coups are apparent, it may be too late to respond. And powerful AIs/humans will be pushing strongly to bring about these risks; so resistance may fail. This makes working on these risks urgent.
    *   By contrast, this risk happens more gradually. This will allow us to understand it *much* better as it starts to play out, and respond *much* more effectively than we could today. And we could use powerful AI to help, absent severe misalignment (but I understand the GD threat model to typically involve more mild misalignment, not purposeful sabotage). This all suggests punting work on this.
    *   In the most extreme case of gradual disempowerment, where *everyone* is *absolutely* disempowered, the incentives of all humans to solve this will be extremely large. (Again, I find versions where some humans remain empowered a lot more plausible.)
*   Is the intermediate level of alignment needed for gradual disempowerment stable?
    *   The gradual disempowerment threat model is most distinctive when AI is not egregiously misaligned, but is still persistently somewhat misaligned. (If AI is egregiously misaligned, we’re back to the AI power-seeking threat model; if AI very aligned then I think the threat model doesn’t go through.)
    *   But this intermediate level of alignment may be unstable. We’ll task millions of superintelligent AI with solving alignment. They’ll think >100X human speed. They’ll be working for years while the gradual disempowerment threat model plays out. That makes it less plausible that the intermediate level of alignment persists.
    *   So you might expect two basins of attraction.
        *   *Either* these AIs are aligned enough that they make some alignment progress and this feeds back on itself, with increasingly aligned AI doing increasingly on-point alignment work. A recursive alignment-solving feedback loop.
        *   *Or* these AIs are misaligned enough that they don’t make much alignment progress.
            *   One reason why this happens and humans don’t realise is that the AI is purposefully sabotaging the work and pretending to be aligned. This is back to the power-seeking AI threat model.
            *   Another reason is an outer misalignment problem.
                *   The AI isn’t power-seeking (on a global scale, it may seek local reward), but it isn’t motivated to help us solve alignment.
                *   But, crucially, nor is it purposefully sabotaging our efforts. It makes no effort to stop us from figuring out a way to improve oversight of the alignment process. Once it knows it’s got reward, it doesn’t collude or cover its tracks further.
                *   In this situation, I think it’s likely humans notice the situation, and plausible that, as they try to work towards more aligned AIs, they either truly align AI that seeks power on a global scale.
                *   But perhaps not. Perhaps the intermediate level of misalignment persists. Or perhaps we solve technical alignment, but don’t choose to align AI to human interests and to being truthful. These worlds are, in my understanding, the worlds where the gradual disempowerment threat model is most useful. 

I think most people who have read this far shouldn’t read on! The rest of this post is rough “thinking out loud” notes. 

I discuss:

*   Agreements with the paper
*   Disagreements with the paper
*   I steelman the threat model, and find it more convincing than I expected.

Things I agree with
-------------------

*   I like their point that cultural evolution has been historically constrained in ways that will no longer hold once human labour isn’t needed. That does seem right, and opens up the possibility of risk.
*   I like their point that disempowerment could happen without *coordinated power-seeking.* I think AI risk folk would accept this – marginal uncoordinated power-seeking from many AI systems could lead there. But i think this threat model is kinda understudied. I also think there’s an interesting possibility that these systemic dynamics drive disempowerment if AI is *misaligned but not power-seeking.* AIs not representing human interests, not being fully truthful, could drive disempowerment via competition.
*   I find the dynamics *much* more convincing if i imagine them gradually disempowering *most* humans, while the few who own capital and control the development+deployment of AI systems stay empowered. And that’s not just “another version of powergrabs”. The outcome is similar: extreme power concentration. But the mechanism is very different: rather than people explicitly seeking power, elites allow market dynamics and competition and cultural evolution to play out and this process naturally disempowers everyone else. This is much more in line with the structural arguments of “intelligence curse”, and doesn’t require humans to explicitly and illegitimately seek power.
*   I agree with the paper that it’s useful to consider the economic, cultural and political systems AI and humans are embedded in when assessing risks and mitigations, rather than focussing solely on technical ‘AI alignment’. For example it’s important to think about:
    *   Competitive dynamics and incentives re culture and the economy
    *   Risks emerging from AIs being aligned only myopically, or doing mild/subtle reward hacking, and other moderate types of misalignment.
    *   Questions of whether, even if we can technically, society will choose to make AIs truthful and give people AIs that represent their interests.
    *   Whether people will trust AIs, even if they represent their interests.

Points of disagreement
----------------------

*   **Economics.** I didn’t see much content on why AI systems will own capital, but IIUC this is a key point? I.e. they point out that humans won’t earn, and conclude that the human degree of influence will fall. But why not conclude that all income will flow to capital owners, who will be humans. So the human fraction stays constant.
    *   They could invoke *either* 1) AI property rights + AI wages → AI earns and keeps money *or* 2) imperfectly aligned AIs increasingly make production and consumption decisions on behalf of humans but fail to represent their interests.
    *   Could they invoke competition? I don’t see why competition will push towards AI owning their own capital. I as a human could compete by letting my AIs make me as much money as possible with 0 oversight or need to check in with me.
        *   Maybe it happens as a side effect of ppl deploying AIs and empathising more with them, but I don’t see the competitive pressure pushing for it directly.
*   **Culture.** They discuss how AI will increasingly *produce* culture and this will shift culture towards AI-friendly versions, but they don’t argue that humans will stop being the primary *consumers* of culture – except by repeating the conclusion from the economics section that I didn’t find convincing. So again it seems to me that humans could constrain cultural evolution through their role as consumers alone.
    *   I do appreciate that it’s much more *possible* for a completely anti-human ideology to flourish – e.g. one advocating for human death/extinction/non-agency – in this post-AGI world. It would not be selected against on the production side – groups proposing it wouldn’t lose out competitively (e.g. by killing themselves). But on the *consumption* side it still seems like it would lose – humans have strong biological instincts not to die and (I claim) they will own huge wealth.
    *   And the production side will be influenced by the consumption side.
    *   Even AI-AI culture, if it promotes bad outcomes for humans and humans can understand this, will be indirectly selected against as humans (who have money) prefer interacting with AI systems that have good consequences for their well-being.
    *   (I think i buy that this stuff is a lot worse if humans are economically disempowered and have lost legal protections. I.e. if the state and economy arguments go through, i think very anti-human cultures could evolve.)
    *   It seems fine if humans can’t engage with lots of culture without AI help, or at all. I wouldn’t want to limit culture in that way.
    
*   **State.**
    *   “*While politicians might ostensibly make the decisions, they may increasingly look to AI systems for advice on what legislation to pass, how to actually write the legislation, and what the law even is. While humans would nominally maintain sovereignty, much of the implementation of the law might come from AI systems.*”
        *   All seems good, if AI is well-aligned? Imo, it would be bad to not hand off control to aligned AIs that would be more competent and better motivated that us
        *   I agree though that “well aligned” goes beyond “not trying to kill everyone”
    *   “*Human decision-making might come to be seen as an inefficiency or security risk to be minimized*” – honestly, i think this will be a reasonable perspective. Imagine letting a 10 year old make big decisions!
    *   A lot of the oversight problems seem real, but like they could be fixed by everyone having an AI that actively represents their political interests
    *   I basically buy the arguments here, but it seems like the humans with formal power over the state will keep their power. So this is ‘gradual power concentration’ not disempowerment of all humans. I didn’t see discussion of why the state would start operating contrary even to humans with formal control over its operations (if alignment is solved!). But absent that, i’m not seeing how such ppl get disempowered. (I agree others could get disempowered, i.e. power concentration.)
*   It’s hard for me to know how much I disagree with talk about incentives to “reduce human influence”. I *certainly* agree that humans will do ~none of the work and decision-making, and that seems good to me. They’re less competent. But that doesn’t mean that the decisions are not good for humans, or what humans would have wanted – and I think that’s what matters. If AIs are aligned, that should help there. And if humans own wealth or formal positions of power in the state, and have truthful AIs explaining what’s in their interests, they can use that influence to push for decisions that are good for them.
    *   So i’d be interested in exploring arguments for thinking that the forces of AI alignment + formal power + human wealth won’t be enough to keep the AI decision-making in human interests.
    *   What i’m interested in is examples of where there would be strong incentives to do activities that are harmful for humans. E.g. lots of emissions, no longer making food. And some analysis of how strong those incentives will be. For me, the discussion is at a high a level of abstraction which makes it hard to assess this. And when I think about concrete examples, i’m not convinced the pressures are strong.
    *   I understand that competition between companies and states can push for policies that harm human interests. But how strong will this competition be? Will it be strongest than those three opposing forces? How hard will coordination be? My guesses here are that the three forces are strong, and coordination isn’t too hard as 1) governments can regulate companies, 2) there aren’t that many big AI companies, 3) there are few states leading on AI, 4) AI truthfulness and coordination tech will help a lot if we solve alignment.
    *   Of course, i’m much more sympathetic if alignment isn’t solved.Then these structural dynamics then push towards relying on misaligned AI, and those three forces become much weaker.
*   Finding it hard to see, concretely, how the high-level dynamics described here would lead Trump, Xi and lab CEOs to be disempowered.
    *   Presumably they’ll be able to access truthful AI if they want it, and they will want it.
    *   They’ll be informed about their upcoming disempowerment.
    *   Of course it’s theoretically possible that they can’t coordinate to prevent it. But to me it seems easy. Not many ppl to coordinate. It’s very likely an iterated prisoners dilemma, which allows a stable cooperative solution. AI can help them coordinate. I’m not seeing concrete examples of trade-offs they might have to make that could result in their death or permanent disempowerment. E.g. as a worst case they can get uploaded (/brain scanned / put in a bunker) while ferocious economic/military competition unfolds above and then later they control the resources of their AI delegates.
    *   TBC i’m not saying “i can compelling argue that these systemic dynamics won’t cause harm”. I’m just saying that currently the threat model doesn’t seem very compelling to me, not nearly as compelling as AI misalignment or human power grabs.

*   On a high-level, i really don’t think the way through this is to prevent AI from replacing humans even once we have strong evidence of deep alignment. That seems very likely to be bad to me. But a lot of their language and mitigation suggestions go in this direction.

Steelman of GD
--------------

*   The standard AI takeover threat model assumes AI is power-seeking. GD offers a truly distinctive threat model that goes through even if we can align AI enough to avoid unwanted power-seeking. We don’t need the threat model to work in the case of ‘perfect’ alignment for it to be interesting and novel.
*   (For this steelman i’ll avoid first disempowering everyone but a small elite, as then i think the final disempowerment of that elite seems hard to argue for (see above) and so the outcome is extreme power concentration.
    *   Though even ending with a small elite, GD offers a novel mechanism of the extreme concentration of power: economic and political and cultural  disempowerment feeding into each other without any small elite explicitly trying to seize power.)
*   So let’s consider a plausible world where *everyone* is disempowered. We’re in a world with ~20 frontier AI companies, and where multiple geopolitical blocks develop their own AIs: US, China, EU, middle east, \[others?\]
*   There also even more competition on the fine-tuning and productisation side. Turns out its economically stable to have different firms specialise in serving different sub-markets. So 100s of companies doing fine-tuning/scaffolding/marketing of AI products.
*   Big competitive advantages to deploying misaligned (non-power-seeking) AIs. These incentives massively feed into culture, as humans like to have ideologies that make sense of their behaviour.
*   This competition operates on multiple levels:
    *   **People in general** comes to think it’s fine/good for the AI to pursue its own preferences some of the time when it can get away with it. And they think it’s fine that an increasing fraction of the economy is going to that. “If an AI wants to make paperclips, maybe that’s a good use of resources, who am I to judge?” They say this even when, by their own lights and ethically, the AI is pursuing nothing of value.
        *   People also become increasingly into AI rights and succesionism, which both justify their actions. (I’m imagining these actions increase the person’s relative fraction of control over resources while reducing humanity’s total fraction of control relative to worthless AI activities.)
        *   People become increasingly “short termist”. They claim not to care about what happens 20 years from now. This justifies their behaviour.
        *   People increasingly don’t *want* AI to tell them the truth about what’s happening here. That all potential is being squandered from humanity’s perspective. So most people use AIs that downplay these risks. Some people still want truthful AI, and some providers serve them, but others deny that those AI systems are really more truthful. They interpret warnings from this group as an attack on their status and engage in bad faith. They basically ignore the super-rigorous scientific studies that show that their AIs have worse epistemics, and in any case their AIs increasingly have good epistemics in verifiable areas while downplaying future risks.
        *   Yes, some sensible people invest their money in the stock market and keep some control for now. They have to bite their teeth and use misaligned AI to keep their share in the future. But they’re a shrinking minority, as the social incentives play out. And humanity’s piece of the pie is shrinking relative to misaligned AI activity.
        *   There’s two dynamics here. One is that the sensible truth-seekers tend to deploy AI less and launch fewer AI companies – they’re not excited about that stuff and morally oppose it. A second is that when sensible ppl *do* engage in those activities, they want to feel their actions are sensible by the lights of their ideology, so they change their ideology.
        *   So that’s how these dynamics play out on for ppl in general
    *   **AI product sellers. They give ppl increasingly (but subtly) addictive AIs that (incrasingly subtly) flatter and manipulate them into more usage. They decreasingly invest in ensuring AI is truthful and pursues the user’s true interests, as ppl care less and less about that.   Increasingly working on ways to hand off more control and give ppl relative advantages over other humans – this is what ppl want.**
    *   **AI developers. Less and less fundamental research into understanding the losses of humans from the deployments – this makes them look bad and people aren’t interested. Increasingly stop offering support ‘truthful AI’ at all on certain topics, as such AIs tend to make them look bad.**
    *   **States. Leaning more and more into narratives that justify pushing for economic and military deployment, as this is needed to compete and they want to feel they’re being reasonable and not selling humanity down the river.**
*   Sceptic: Why don’t the elites realise what’s happening and coordinate to stop it?
    *   They’re a big and disparate group. Hundreds of senior lab ppl, government officials (the ‘checks and balances’ within democracies are making coordination much harder), company owners.
    *   They’re not going to die – they just won’t use the universe for anything of value by human lights. So their selfish incentives here aren’t strong.
    *   Their ideologies increasingly deny this is really a loss at all, or that anything can be done. That justifies going on.
    *   Even if coordination is possible in principle, it’s hard. The market isn’t incentivising finding a solution.
    *   There are some really intractable dynamics preventing coordination. Actors feel others have fundamentally bad ideologies or have done very bad things, and so refuse to enter into deals that superficially seem like win-win (cf Israel-Palestine, Russia-Ukraine).
    *   Strong commitment mechanisms require literally handing off full military power to AI, and ppl are wary of that still.
    *   Turns out its hard for AI\_1 to verify that AI\_2 will keep to a commitment. AI\_1 would have to inspect all of the training data and code to make sure nothing was faked/hidden, but country\_2 won’t allow AI\_1 to do that. They worry AI\_1 would share info with country\_1 and give them a competitive edge. In other words, AI\_1 can’t verify AI\_2 because AI\_1 hasn’t been verified itself. Chicken and egg! Lacking this deep transparency, countries fail to coordinate on doing a joint-project training run.
*   So how bad does this get?
    *   People hand off ~all influence to non-power-seeking but misaligned AIs. They completely waste the cosmic endowment from the human perspective.
    *   Concretely, to compete as a human you have to deploy superintelligent AIs that, in practice, are giving you a tiny bit of value and syphoning >99% towards what they want.
    *   Ppl who want to can see what’s happening, but others deny it’s happening or deny that it’s bad.
*   Could everyone die?
    *   Gets harder to believe ppl don’t see it coming and try hard to coordinate.
    *   But maybe with many decades of cultural evolution and increasing competition, succesionism becomes popular and countries start to believe that “their AIs” are superior and it’s worth racing to preserve that. Or people just deny that they’re going to die (interpreting the claim as a personal attack), and prefer to use AIs to support those narratives.
*   Sceptic: wait, if AIs aren’t power-seeking can’t we solve alignment? Will be cheap to throw millions of top-quality AI researchers at the problem.
    *   Who knows? Outer alignment might be really hard? Might be ongoing alignment taxes. Especially when things get really complex, knowing “what a human would want upon reflection” might be a ball-ache.
    *   Maybe the difficulty of alignment scales with AI intelligence and the complexity of the activities AI is doing. So even though anyone could throw millions of top-quality AI researchers at the problem, that’s not enough. And a smaller and smaller fraction of economic activity is in fact directed at this, due to the above dynamics. 

Ok, stepping back, am i convinced by my own steelman?

*   I buy you could get radical cultural changes. And people are often dumb so I could see very misguided ideologies becoming popular.
    *   But stuff as big as in this story feels unlikely. Often culture changes radically bc the older generation dies off, but that won’t happen here.
*   I buy coordination might be hard. (For all i know.)
    *   Though i expect power to be more concentrated, making coordination easier.
*   But yeah, i think there’s a coherent threat model here that involves misalignment but not power-seeking. That is interesting. 

### Steelman of GD even with the alignment problem solved?

Could all this go through if AI alignment is solved? Let me try to argue for that conclusion.

*   Even if AI is aligned, there could still be uncertainty about that and so cultural evolution still pushes towards succesionism/shorttermism/non-truth-seeking.
*   There will still be competitive pressure to deploy AI that just makes as much money as possible.
    *   Counter: why not deploy aligned AI that makes as much money as possible and then uses it for your interests?
    *   Response: maybe the successionism means ppl choose not to? (Seems weak!)
*   AI developers and product sellers might not offer truthful and aligned AI as those AIs make them look bad in various ways? And ppl prefer AI that flatters them and their actions and their political factions.
*   And then maybe the company doesn’t want to admit internally that it’s not offering truthful AI, so now even the company owners and employees lack access to truthful aligned AI?
    *   In other words: market competition leads companies to serve non-truthful AI and delude themselves about what they’re doing.
    *   AIs don’t deliver the hard truths, even when it’s in teh person’s longterm interests, bc the person doesn’t like it in the short term and that’s teh signal that the market tracks.
    *   Similarly, states don’t want truthful AI. They want AI that flatters their motives and justifies their competitive actions.
*   Absent truthful AI, when catastrophe is approaching AI doesn’t warn us.
*   And maybe the AIs that are in fact used to fully automate the economy aren’t aligned to us even though they could have been. Bc
*   Won’t at least *some* AI product orgs fine-tune truthful AI?
    *   Maybe not. Perhaps AI developers stop selling to them as those AI make them look bad. Or perhaps there aren’t downstream product-orgs, just a few big AI developers none of whom offer truthful AI.
    *   Even if they do, so what? If the labs and states are maintaining the delusion that their AI is trustworthy (as this made them more competitive), and people generally don’t like truthful AI, that minority can’t convince everyone. Their arguments will be interpreted as attacks.
*   Can’t those few truth-seeking ppl do strategy stealing? Make a successor AI, tell it the values they want (or upload themselves etc) and let it rip. They should be able to maintain their fraction of global wealth.
    *   Sure they can, but they ultimately control only a small fraction of global wealth, <1%. Maybe not enough to get most of the value, bc there’s s-risk or bc value is linear.
    *   Also, maybe their vision for a “good future” involved some kind of collective deliberation by *actual humans* to figure out a good future. Their AI-successors can simulate what that process *would* have settled on, and implement it, but that might still leave most value on the table if having the process involve actual ppl is important. You won’t be able to have that process as society is going off the rails, ppl are not in fact reflecting in a good way.
    *   Also, maybe the use of the stars is decided by a vote and the truth-seeking ppl just lose the vote and so the cosmic endowment is entirely wasted. Bc truth-seekers are a minority, they can’t “steal” the strategy of a majority vote.
    *   (These replies are more convincing that I’d expected.)

Stepping back, is this convincing?

*   It’s more convincing than I expected. I do think there’s a coherent threat model here.
*   Doesn’t seem crazy that labs could have the technical capability to make AI truthful but not pursue it for competitive reasons and delude themselves about it. And then there’s not truthful AI to get them back on track.
    *   But, OTOH, AI will need to be truthful in places where it’s checkable, and that might well generalise, and employees will in fact have strong reasons to want truthful AI, and i don’t expect the market incentives to be *that* anti-truth that you can’t even have warnings about GD, and they could always deploy truthful models internally.
*   So it doesn’t seem like a high magnitude threat model. 

Especially rough thoughts
-------------------------

*   What about if AI is only mildly aligned? E.g. aligned on checkable tasks but not power-seeking
    *   Then i can see competitive dynamics pushing for handing over power to these AIs despite their drawbacks
    *   There’s still a real puzzle about why Xi/Trump/CEOs can’t coordinate here after they realise what’s happening.
        *   Maybe it’s unclear even to superintelligent AIs where this will lead, but it in fact leads to disempowerment. Or maybe the AIs aren’t aligned enough to tell us it’s bad for us.
        *   Maybe AI doesn’t really make it easy to coordinate. E.g. bc coordination is hard today bc of human stubbornness and ideology and pride, which doesn’t go away.
    *   Let’s assume control is handed off to such AIs despite their limited alignment. Humans should be able to demand things like “ensure we don’t die”, which the AIs will do if they’re decently aligned. But the degree of misalignment might prefer humans from deeply understanding or controlling what’s happening, and competitive dynamics could exacerbate that.
*   Argument against intermediate states of misalignment:
    *   Assume we get decently-aligned AI.
    *   Deployment takes a fairly long time (years)
    *   If AI is decently-aligned, it can quickly do loads of research into improving alignment significantly
    *   → AI is very well aligned when deployed widely
*   To avoid economic alignment permanently relying on state alignment, the state could:
    *   Give everyone some money – from AI taxes.
    *   Require by law that everyone invest it in the market.
    *   Require by law that ppl only draw down their interest each year. (And make this a strong cultural norm.)
    *   → now everyone has income streams and we have economic alignment that self-perpetuates without the state needing to prop it up each year by redistributing again.
*   Maybe each human group is happy with the trade of “raise my relative status by 5% over the next 20 years; raise p(doom) by 1% after that time period”. Ie successionism.
    *   Could be? But humans will know they have long lifespans, and i expect most won’t be ok with death. Once amazing quality of life is guaranteed we should become more risk averse.
    *   But yes, i recognise the causal pathway: economic forces incentivise deploying AI → culture shifts towards successionism → larger fraction of ppl happy to risk disempowerment to gain status
    *   (Successionism is good if AI is well aligned!)
*   What about AI-only companies that legally can own property, make profits, lobby the state?
    *   Yeah if the AIs were trained to make money, that does seem like a bad incentive. Absent *strong* evidence of deep alignment, i’d want the company ultimately owned by a human.