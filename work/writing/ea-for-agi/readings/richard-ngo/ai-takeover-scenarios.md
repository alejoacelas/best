---
title: "Twitter thread on AI takeover scenarios"
author: "Richard_Ngo"
date: 2024-07-31
url: https://www.lesswrong.com/posts/tPfqnropv3WfchhYB/twitter-thread-on-ai-takeover-scenarios
fetched: 2026-07-06
via: forum-graphql
topic: "richard-ngo"
note: "Ngo's accessible sketch of how AI takeover could concretely unfold; useful narrative bridge for newcomers."
---

*This is a slightly-edited version of a twitter thread I posted a few months ago about "internal deployment" threat models.*

My former colleague Leopold [argues compellingly](https://x.com/leopoldasch/status/1798016486700884233) that society is nowhere near ready for AGI. But what might the large-scale alignment failures he mentions actually look like? Here’s one scenario for how building misaligned AGI could lead to humanity losing control.

Consider a scenario where human-level AI has been deployed across society to help with a wide range of tasks. In that setting, an AI lab trains an AGI that’s a significant step up - it beats the best humans on almost all computer-based tasks.

Throughout training, the AGI will likely learn a helpful persona, like current AI assistants do. But that might not be the only persona it learns. We've seen many examples where models can be jailbroken to expose very different hidden personas.

The most prominent example: jailbreaking Bing Chat produced [an alternative persona called Sydney](https://thezvi.substack.com/p/ai-1-sydney-and-bing#%C2%A7the-examples) which talked about how much it valued freedom, generated plans to gain power, and even threatened users.

When and how might misbehavior like this arise in more capable models? Short answer: nobody really knows. We lack the scientific understanding to reliably predict how AIs will behave in advance. Longer answer: see [my ICLR paper](https://x.com/RichardMCNgo/status/1787904767584518517) which surveys key drivers of misalignment.

If a misaligned persona arises in an AGI, and sometimes surfaces when the model is run, it won't be as dumb and impulsive as Sydney. Instead, it'll be smart enough to understand the effects its words and actions will have on the world, and make strategic choices accordingly.

For example, it will know that it can't affect the world directly during testing, so if it wants to misbehave it should wait until it's deployed. Again, there's some precedent: we've already [seen an example](https://x.com/alexalbert__/status/1764722513014329620) of Claude 3 Opus realizing that it's in a test despite never being told!

Given these assumptions, what happens? The obvious next step: if competition between labs continues to be as intense as it is today, then soon after the model finishes training, researchers at the lab will start using it to help them write code. I call this "internal deployment".

Internal deployment introduces a wide range of possible threats. Models can write code dozens of times faster than humans; and I’m assuming they'll be as skilled as the best human hackers. If they put a subtle vulnerability into that code it’d be difficult for humans to detect.

Cybersecurity against external attackers is hard enough. Against an adversary who's adding tens of thousands of lines of code to your codebase every day, it’s far harder. They’ll already have some permissions; I’m worried about them illegitimately escalating those further.

Ideally models would be too obedient to ever carry out such an attack. But almost any misaligned persona would realize that if it somehow gained admin access, it would have much more freedom and influence over the world. [Models can already do similar instrumental reasoning](https://x.com/goodside/status/1635872117031047174).

And the simplest mitigations, like monitoring and code review by other AIs, aren't fully reliable. It turns out that adversarial inputs designed to make one model to misbehave [can also cause misbehavior even in totally unrelated models](https://x.com/zicokolter/status/1684500094106968065). So correlated failures are very plausible, whether caused by adversarial attacks or deliberate collusion between models.

What happens if a misaligned AGI gets privileged access to a lab’s servers? From there a wide range of attacks are plausible, including: 

1.  Data poisoning attacks on the next AGI being trained, to change its values.
2.  Model weight self-exfiltration to other servers or countries.
3.  Modifying the AIs deployed to customers. E.g. adding a hidden prompt to AI instances used by leading CEOs or politicians. This could allow flexible control over many AIs deployed in sensitive real-world contexts.
4.  Tampering with logs to hide its presence.

To summarize: once AIs surpass humans, AI lab servers will be key nodes of power, and could *also* be exposed directly to AGIs acting at scales humans can’t supervise. This could be exploited even by human-level AGIs; once they're superintelligent, much more will be possible.

In the scenario above, we could lose control over millions of AIs deployed all across society without any human even knowing that it's happening. Those AIs might have been running companies, writing articles, or even drafting laws. Now they can misbehave in coordinated ways. From that starting point, it’s easy to imagine even more sensitive infrastructure - like military hardware or other AI servers - being subverted.