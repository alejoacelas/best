---
title: "I used to think aligned ASI would be good for all sentient beings; now I don’t know what to think"
author: "Michael Dickens"
date: 2026-03-25
url: https://mdickens.me/2026/03/25/I_used_to_think_aligned_ASI_would_be_good_for_sentient_beings
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ideas-improving-animal-welfare-tai.md; Dickens reflection: would aligned ASI be good for all sentient beings — s-risks/animals"
---

# [I used to think aligned ASI would be good for all sentient beings; now I don't know what to think](/2026/03/25/I_used_to_think_aligned_ASI_would_be_good_for_sentient_beings/)

_Cross-posted to the[EA Forum](https://forum.effectivealtruism.org/posts/DcpBjRgKwG8ckhC7P/i-used-to-think-aligned-asi-would-be-good-for-all-sentient)._

_Epistemic status: Speculating with no central thesis. This post is less of an argument and more of a meditation._

A decade ago, before there was a visible path to AGI and before AI alignment was a significant research field, I figured the solution to the alignment problem would look something like [Coherent Extrapolated Volition](https://www.lesswrong.com/w/coherent-extrapolated-volition). I figured we’d find a way to get the AI to internalize human values. I had problems with this approach (why only _human_ values?), but I still felt reasonably confident that the coherent extrapolation of human values would include concern for the welfare of all sentient beings. The CEV-aligned AI would recognize that factory farming is wrong, and that wild animal suffering is a big problem.

Today, the dominant research paradigms in AI alignment have nothing to do with CEV, and I don’t know what to think.

* * *

Regarding the promisingness of today’s popular research paradigms, my beliefs are aligned (heh) with those of most MIRI researchers: namely, I don’t think they have promise. For example, see [On how various plans miss the hard bits of the alignment challenge](https://www.lesswrong.com/posts/3pinFH3jerMzAvmza/on-how-various-plans-miss-the-hard-bits-of-the-alignment) by Nate Soares. I’m not an alignment researcher, but to my non-expert eye, nearly all alignment research proposals skirt the hard parts of the problem and aren’t going to work.

To build an aligned ASI, one of two conditions must hold:

  1. The ASI has locked-in values.
  2. The ASI is [corrigible](https://www.alignmentforum.org/w/corrigibility-1): it will do what its masters say, and will allow its goals to be changed.



_(Secret third option: We figure out how to make ASI safe but without locking in values or letting bad actors misuse it. I don’t know how the secret third option is even possible, but I hope we figure something out.)_

Right now, a lot of work goes into embedding values into LLMs via RLHF, model constitutions, etc. I strongly doubt that the content of a model constitution (or similar) can prevent ASI from being misaligned. But suppose it does work somehow. Would aligned AI be good for animals, absent specific efforts (à la [CaML](https://www.compassionml.com/)) to make AI good for animals?

The trouble with this style of “alignment”1 work is that it locks in values—Claude’s Constitution takes a [confused stance on corrigibility](https://www.lesswrong.com/posts/K2Ae2vmAKwhiwKEo5/terrified-comments-on-corrigibility-in-claude-s-constitution)—but frontier AI developers are not doing anything nearly as intelligent as CEV. Instead, they’re more like writing a list of virtues that the AI should uphold. Current-gen LLMs are not smart enough to figure out CEV, but the current style of AI “alignment” (if by some miracle it scales to superintelligence) won’t produce anything like CEV, either.

What _will_ it produce? [Aligning to virtues](https://www.lesswrong.com/posts/5CZoEw7sjxnMrhgvx/aligning-to-virtues) may be safer than aligning to a utility function, but we don’t know how to turn virtues into a coherent decision theory, and figuring out how to do that would be a large philosophical undertaking.2 Without having some idea of how to formalize virtue ethics, we don’t know how a “virtue ethics ASI” would behave or how it would trade off between preferences—for example, the preferences of animals to not be tortured vs. the preference of humans to eat meat.3

(For that matter, what happens if you take a normal human who subscribes to some sort of intuitionist virtue ethics, dial their intelligence up 1000x, and give them the ability to instantly make copies of themselves? I find it hard to anticipate how that would go.)

Claude’s Constitution takes a muddled stance on animal welfare. It mentions “Welfare of animals and of all sentient beings” as one value among many for Claude to weigh. How does that translate into outcomes? It’s not clear. Would a constitutional AI be willing to ban factory farming, going against the preferences of its principals? Hard to say; my guess is no.

(Would it even be a good idea to build an AI that bans factory farming? An AI that takes strong actions based on its view of ethics is the sort of AI that can cause catastrophic outcomes if it’s pointed at even slightly the wrong goal.)

_Maybe_ current alignment techniques manage to enable an intermediate AI to autonomously conduct alignment research, and we will be able to use that to bootstrap our way to aligned ASI. [Alignment bootstrapping is dangerous](https://mdickens.me/2025/11/27/alignment_bootstrapping_is_dangerous/), but if we do end up averting extinction without significantly slowing down AI progress, then bootstrapping is probably how we’ll do it. What implication does that have about animal welfare?

The trouble is that if you’re counting on AI to solve the alignment problem for you, then that means you have no idea how the problem will be solved. How am I supposed to predict whether the solution will be good for animals if I have no idea what that solution will look like?

Given my state of ignorance, I find myself falling back to an almost uninformed prior. Maybe aligned ASI will be good for animals because it’ll be ethical, or because it will adopt human values, and humans care about animals (even if they don’t always act like it). Maybe aligned ASI will focus purely on satisfying humans’ naive preferences, not their values in [reflective equilibrium](https://en.wikipedia.org/wiki/Reflective_equilibrium), and that will be bad for animals. I have no idea which way it will go; I see no strong reason to deviate from 50/50 odds.

* * *

On Monday, I [published a post](https://mdickens.me/2026/03/23/which_types_of_alignment_research_are_good_for_all_sentient_beings/) that described a spectrum of alignment techniques:

I wrote that alignment techniques on the left side were less likely to be good for animals, and those on the right side were more likely.

Right-side techniques are more likely to actually solve alignment. Left-side techniques are more likely to work for a while and then break down in the tails, ultimately resulting in human extinction.

That means there’s a positive correlation between “useful for alignment” and “good for animals”, which pushes toward barbell outcomes: either AI is bad for everyone, or it’s good for everyone. The middle ground of “good for humans + bad for animals” looks less likely. But the field of alignment research is putting most of its effort into the categories that are less likely to work (thanks to the [streetlight effect](https://en.wikipedia.org/wiki/Streetlight_effect)), so if we _do_ make it through, there’s a good chance we get through via the middle (good for humans + bad for animals).

Compared to 5–10 years ago, my subjective probability distribution puts more mass on the “bad for humans + bad for animals” scenario, less on “we solve alignment the hard way”, and more on “we solve alignment using streetlight-effect techniques that miraculously turn out to work”—and those techniques look worse from an animal welfare perspective.

* * *

My approximate credences about the future:

  * 15% chance that alignment turns out to be not that hard / current techniques, or extrapolations of current techniques, turn out to work
  * 15% chance that AI timelines turn out to be long (scaling hits a wall, etc.)
  * 15% chance that humanity gets its shit together and realizes that building ASI is a [bad idea](https://ifanyonebuildsit.com/), and we collectively decide not to do that
  * 15% chance of a Caplan-esque “nothing ever happens” outcome4, e.g. my whole mental framework is wrong and none of this makes sense
  * 40% chance that misaligned AI kills everyone



We can solve alignment the hard way in the 30% of worlds where either we pause on purpose, or timelines turn out to be long. In the 15% worlds where alignment turns out to be easy, we’d find ourselves using easy techniques.

Additionally, I’d estimate that a “deep” solution to alignment (something like CEV or “solve ethics”) has an 80% chance of being good for animals, and the popular techniques of today have a 50% chance. Therefore, on this model, the overall probability that aligned ASI is good for animals equals 70% (`= (30% * 80% + 15% * 50%) / (30% + 15%)`).

# Notes

  1. Scare quotes because the function of the work is to make the model _appear_ aligned, not _be_ aligned. ↩

  2. And unfortunately, AI companies have a habit of pretending that AI alignment is purely an engineering problem. ↩

  3. Really it would just figure out how to create cheap synthetic meat. But a harder tradeoff is the preference for nature to exist vs. the suffering of wild animals. ↩

  4. Context: [Bryan Caplan](https://www.econlib.org/my-complete-bet-wiki/) is an economist who wins a lot of bets with people on complex economic and geopolitical issues. He has said that his #1 strategy is to assume that nothing ever happens. ↩




Posted on Mar 25, 2026
