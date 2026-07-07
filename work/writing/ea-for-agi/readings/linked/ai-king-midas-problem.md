---
title: "Artificial Intelligence and the King Midas Problem - Future of Life Institute"
author: "Ariel Conn"
date: 2016-12-12
url: https://futureoflife.org/ai/artificial-intelligence-king-midas-problem
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by carlsmith-leaving-open-phil; Russell's value-alignment King Midas framing, AI safety intro"
---

# Artificial Intelligence and the King Midas Problem

Published:

December 12, 2016

Author:

Ariel Conn

#### Contents

Value alignment. It’s a phrase that often pops up in discussions about the safety and ethics of artificial intelligence. How can scientists create AI with goals and values that align with those of the people it interacts with?

Very simple robots with very constrained tasks do not need goals or values at all. Although the Roomba’s designers know you want a clean floor, Roomba doesn’t: it simply executes a procedure that the Roomba’s designers predict will work—most of the time. If your kitten leaves a messy pile on the carpet, Roomba will dutifully smear it all over the living room. If we keep programming smarter and smarter robots, then by the late 2020s, you may be able to ask your wonderful domestic robot to cook a tasty, high-protein dinner. But if you forgot to buy any meat, you may come home to a hot meal but find the aforementioned cat has mysteriously vanished. The robot, designed for chores, doesn’t understand that the sentimental value of the cat exceeds its nutritional value.

### AI and King Midas

Stuart Russell, a renowned AI researcher, compares the challenge of defining a robot’s objective to the King Midas myth. “The robot,” says Russell, “has some objective and pursues it brilliantly to the destruction of mankind. And it’s because it’s the wrong objective. It’s the old King Midas problem.”

This is one of the big problems in AI safety that Russell is trying to solve. “We’ve got to get the right objective,” he explains, “and since we don’t seem to know how to program it, the right answer seems to be that the robot should learn – from interacting with and watching humans – what it is humans care about.”

Russell works from the assumption that the robot _will_ solve whatever formal problem we define. Rather than assuming that the robot should optimize a given objective, Russell defines the problem as a two-player game (“game” as used by economists, meaning a decision problem with multiple agents) called [_cooperative inverse reinforcement learning_ (CIRL)](https://arxiv.org/abs/1606.03137).

A CIRL game includes a person and a robot: the robot’s _only_ purpose is to make the person happy, but it doesn’t know what the person wants. Fortunately, it can learn more about what the person wants by observing her behavior. For example, if a robot observed the human’s morning routine, it should discover how important coffee is—not to itself, of course (we don’t want robots drinking coffee), but to the human. Then, it will make coffee for the person without being asked.

What about the example of King Midas, who thought he wanted as much gold as possible? How does the approach deal with someone stating their wishes incorrectly?

“We don’t have to know what we want. That’s the whole point. It’s hard to know what we want, and what we ask for is _evidence_ for what we really want, but it’s not ground truth,” says Russell.

The robot should learn what people want by watching their actions. Then, if someone asks for something that’s technically incorrect, the robot will understand their underlying wish. Russell adds, “The robot—if it had been there—would have told Midas that he didn’t really want _everything_ turned to gold, maybe just a few choice objects that he might point at from time to time and say the magic word.”

### AI Off-Switch

Russell and his Berkeley colleagues also recently announced further progress toward ensuring safe AI, with a paper on ensuring an [AI’s off-switch](https://arxiv.org/abs/1611.08219) is always accessible. An off-switch is often suggested to guarantee a robot doesn’t harm humans – if the robot goes bad, just turn it off! But what if the AI anticipates that and disables its off switch?

Russell and his team propose solving this by providing a level of uncertainty in the robot’s objective. They created another CIRL game in which the robot chooses to announce its intentions, which gives the human a chance to switch it off, or to plunge ahead with its plan, bypassing human oversight.

They showed that a robot with a fixed objective _will_ take the second choice and disable its off-switch. But if there is uncertainty about the objective, the robot will reason that a human decision to switch the robot off would imply the announced intention is undesirable. Because its goal is to make the human happy, the robot accepts being switched off. The robot has a positive incentive _not_ to disable the off-switch, and that incentive is directly tied to the robot’s uncertainty about the human’s true objective.

### Ensuring AI Safety

In addition to his research, Russell is also one of the most vocal and active AI safety researchers concerned with ensuring a stronger public understanding of the potential issues surrounding AI development.

He recently [co-authored a rebuttal](https://www.technologyreview.com/s/602776/yes-we-are-worried-about-the-existential-risk-of-artificial-intelligence/) to an article in the MIT Technology Review, which claimed that real AI scientists weren’t worried about the existential threat of AI. Russell and his co-author summed up why it’s better to be cautious and careful than just assume all will turn out for the best:

> “Our experience with Chernobyl suggests it may be unwise to claim that a powerful technology entails no risks. It may also be unwise to claim that a powerful technology will never come to fruition. On September 11, 1933, Lord Rutherford, perhaps the world’s most eminent nuclear physicist, described the prospect of extracting energy from atoms as nothing but “moonshine.” Less than 24 hours later, Leo Szilard invented the neutron-induced nuclear chain reaction; detailed designs for nuclear reactors and nuclear weapons followed a few years later. Surely it is better to anticipate human ingenuity than to underestimate it, better to acknowledge the risks than to deny them. … he risk arises from the unpredictability and potential irreversibility of deploying an optimization process more intelligent than the humans who specified its objectives.”

This summer, Russell received a grant of over $5.5 million from the Open Philanthropy Project for a new research center, the [Center for Human-Compatible Artificial Intelligence](http://humancompatible.ai/), in Berkeley. Among the primary objectives of the Center will be to study this problem of value alignment, to continue his efforts toward provably beneficial AI, and to ensure we don’t make the same mistakes as King Midas.

“Look,” he says, “if you were King Midas, would you want your robot to say, ‘Everything turns to gold? OK, boss, you got it.’ No! You’d want it to say, ‘Are you sure? Including your food, drink, and relatives? I’m pretty sure you wouldn’t like that. How about this: you point to something and say ‘Abracadabra Aurificio’ or something, and then I’ll turn it to gold, OK?’”

 _This article is part of a Future of Life series on the[AI safety research grants](https://futureoflife.org/ai-safety-research/), which were funded by generous donations from Elon Musk and the Open Philanthropy Project._

This content was first published at futureoflife.org on December 12, 2016.

### About the Future of Life Institute

The Future of Life Institute (FLI) is the world’s oldest and largest AI think tank, with a team of 35+ full-time staff operating across the US and Europe. FLI has been working to steer the development of transformative technologies towards benefitting life and away from extreme large-scale risks since its founding in 2014. Find out more about [our mission](https://futureoflife.org/our-mission/) or explore [our work](https://futureoflife.org/our-work/).

Our content

## Related content

### Other posts about [AI](https://futureoflife.org/category/ai/), [AI Research](https://futureoflife.org/category/ai-research/), [Grants Program](https://futureoflife.org/category/grants-program/), [Partner Orgs](https://futureoflife.org/category/partner-orgs/), [Recent News](https://futureoflife.org/category/recent-news/)

If you enjoyed this content, you also might also be interested in:

#### [Should AIs be people too?](https://futureoflife.org/ai/should-ais-be-people-too/)

The Dutch East India company was among the first modern companies to receive legal personhood. Should we reconsider what personhood means in the age of AI?

19 June, 2026

#### [Governor DeSantis Directs Florida State Agencies to Partner with Future of Life Institute to Shield Families from AI Harm](https://futureoflife.org/press-release/desantis-directs-florida-agencies-to-partner-with-fli/)

The collaboration will produce a Crisis Counselor Training Curriculum and a statewide AI Harms Reporting Form targeting dangerous AI companion applications

9 March, 2026

#### [Statement from Max Tegmark on the Department of War’s ultimatum](https://futureoflife.org/ai/tegmark-statement-on-dow-ultimatum/)

"Our safety and basic rights must not be at the mercy of a company's internal policy; lawmakers must work to codify these overwhelmingly popular red lines into law."

27 February, 2026

#### [The U.S. Public Wants Regulation (or Prohibition) of Expert‑Level and Superhuman AI](https://futureoflife.org/recent-news/americans-want-regulation-or-prohibition-of-superhuman-ai/)

Three‑quarters of U.S. adults want strong regulations on AI development, preferring oversight akin to pharmaceuticals rather than industry "self‑regulation."

19 October, 2025

[Our content](https://futureoflife.org/our-content/)
