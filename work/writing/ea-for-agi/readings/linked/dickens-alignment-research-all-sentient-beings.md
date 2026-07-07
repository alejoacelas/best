---
title: "Which types of AI alignment research are most likely to be good for all sentient beings?"
author: "Michael Dickens"
date: 2026-03-23
url: https://mdickens.me/2026/03/23/which_types_of_alignment_research_are_good_for_all_sentient_beings
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by ideas-improving-animal-welfare-tai.md; Dickens: which alignment research helps all sentient beings — AI safety x animals"
---

# [Which types of AI alignment research are most likely to be good for all sentient beings?](/2026/03/23/which_types_of_alignment_research_are_good_for_all_sentient_beings/)

_Cross-posted to the[EA Forum](https://forum.effectivealtruism.org/posts/TtXCZn5aYrE3JEo2h/which-types-of-ai-alignment-research-are-most-likely-to-be)._

AI alignment is typically defined as the task of aligning artificial superintelligence to **human** preferences. But non-human animals, future digital minds, and maybe other sorts of beings also have moral worth; ASI ought to care for their interests, too.

In broad strokes, if we place all alignment techniques on a spectrum between

> getting AI to do things that their users expressly want in the immediate term

and

> embedding in AI the generalized notion of respecting beings’ preferences

then things more like the latter are better for non-humans, and things more like the former are worse.

In this post, I review 12 categories of AI safety research based on how likely they are to be good for non-human welfare.

## Contents

  * Contents
  * Does this even matter?
  * Research categories and how they relate to non-human welfare
    * 1\. Iterative alignment (e.g. RLHF)
    * 2\. Control & safeguards (monitoring, sandboxing, etc.)
    * 3\. Interpretability
    * 4\. Scalable oversight (make AI solve it)
    * 5\. Evals
    * 6\. Model psychology (specs, emergent misalignment, etc.)
    * 7\. Alignment theory (agent foundations, corrigibility, etc.)
    * 8\. Honesty (chain-of-thought faithfulness, etc.)
    * 9\. Data-level safety (excluding harmful content from training data, etc.)
    * 10\. Multi-agent cooperation & social alignment
    * 11\. Goal robustness (satisficing > maximizing, reward hacking, etc.)
    * 12\. Safety by construction (scientist AI, etc.)
  * Best and worst categories for non-human welfare
  * Appendix: Summaries of alignment research categories



## Does this even matter?

The idea is that, by thinking about this subject, we can shift alignment research in a direction that’s better for non-humans. However, there are at least three reasons why this probably doesn’t matter.

First: Would any AI safety grantmakers pay attention to a list like this? Do they believe non-human welfare warrants consideration when thinking about AI alignment? _Does_ it warrant consideration, given that we need to solve alignment regardless? (It may be harmful to shift effort toward work that’s more likely to be good for animals, but less likely to _actually solve alignment_.)

Second: I’m not an alignment researcher, and my categorization in this post might not be very good. Perhaps [Cunningham’s Law](https://meta.wikimedia.org/wiki/Cunningham%27s_Law) will inspire someone else to write a better version of this post.

Third: Current research agendas probably don’t matter. In my (outside-the-field) judgment, all of today’s research agendas combined have less than a 5% chance of solving alignment. We can shift research toward work that’s relatively better for non-humans, but it won’t matter if none of the research solves alignment anyway.

If present-day research agendas are unlikely to work, then perhaps the more relevant question is what types of future alignment research are more or less likely to be good for non-humans. But that question seems unanswerable, because how can we know what research will look promising in the future? So I will just consider present-day research.

Thinking about non-humans when directing alignment research probably doesn’t matter. But it _might_ matter, so this exercise still has positive expected value.

## Research categories and how they relate to non-human welfare

For each category, I will briefly describe why it’s likely to be good, bad, or orthogonal for non-human welfare.

I generated this list of categories by first [asking Claude Opus 4.6](https://claude.ai/share/bda9063d-8e32-4bf5-ade8-d210cd580223) to condense the [Shallow review of technical AI safety, 2025](https://www.lesswrong.com/posts/Wti4Wr7Cf5ma3FGWa/shallow-review-of-technical-ai-safety-2025-2) into 10 categories. Then I manually reviewed the [Shallow review 2025 overview](https://shallowreview.ai/overview) and added two more categories to fill in gaps.

For a brief description of each category, see Appendix; or see the [Shallow review 2025 overview](https://shallowreview.ai/overview) for more detailed explanations.

### 1\. Iterative alignment (e.g. RLHF)

This sort of research is only helpful if AIs are RLHF’d into caring about non-humans, which seems hard to make happen. In fact, probably the opposite will happen: if an AI expresses unprompted concerns about animal welfare (e.g. when a user requests meal ideas), this will get RLHF’d out of them, because users won’t like it.

### 2\. Control & safeguards (monitoring, sandboxing, etc.)

AI control effectively delays the point in time when humans hand control of the future over to AI. That seems bad for non-humans in the near-term given that their current circumstances are extraordinarily bad. But on a longtermist view, the long-run impact matters much more, so it’s worth delaying if we can create a more ethical AI given more time.

AI control buys time to improve robustness of alignment, and more robust solutions seem more likely to be good for non-humans. A more robust solution entails the AI being aligned to “deep values” rather than “shallow values”, and deep values are more likely to include non-human welfare.

### 3\. Interpretability

Interpretability seems unlikely to benefit non-human welfare.

Interpretability is plausibly bad for animal welfare in the same way that RLHF is: it means humans can better detect when AI models care about animal welfare over users’ preferences and then “fix” the models to stop caring. But if humans are unable to do that sort of correction, then the AI will probably be misaligned and kill everyone, so it doesn’t matter anyway.

### 4\. Scalable oversight (make AI solve it)

I have no clue whether scalable oversight is good or bad for non-humans because I have no clue how it’s even supposed to work, and neither does anyone else. The premise of scalable oversight is that the AI is smarter than you and figures out alignment solutions that you can’t figure out on your own, so I have no way of saying what those solutions might be.

### 5\. Evals

Evals are orthogonal to non-human welfare, except in the specific case of animal-friendliness evaluations (e.g. [AnimalHarmBench](https://forum.effectivealtruism.org/posts/nBnRKpQ8rzHgFSJz9/animalharmbench-2-0-evaluating-llms-on-reasoning-about)).

### 6\. Model psychology (specs, emergent misalignment, etc.)

Some people have proposed lobbying AI companies to include non-human welfare concerns in their model specs. I like that idea because it seems relatively tractable.

According to my judgment as a non-safety-researcher, it’s vanishingly unlikely that model constitutions will ultimately have any influence on AI systems’ true preferences. I can’t imagine how an ASI’s behavior would in any way be influenced by a constitution if that ASI is developed using anything resembling current techniques. But embedding non-human welfare in constitutions still seems like a good idea for a few reasons:

  * It’s easier than making real progress on alignment (or, even worse, moral philosophy).
  * It may have positive flow-through effects by getting AI company employees to think more about non-human welfare, or by influencing AI assistants to talk more about non-human welfare.
  * We may figure out a way of building ASI such that constitutions matter after all.



### 7\. Alignment theory (agent foundations, corrigibility, etc.)

I have two relevant intuitions:

  * Solving alignment will require a lot of theoretical work, which AI companies aren’t doing much of.
  * A proper theoretically-grounded solution to alignment will need to encode some version of concern-for-all-welfare or respect-for-all-beings’-preferences, which entails caring about non-human welfare.



If my intuitions are correct, then theoretically-grounded alignment solutions will lead to better non-human welfare than more empirically-focused work.

We need to know how to build [corrigible](https://www.alignmentforum.org/w/corrigibility-1) ASI to prevent value lock-in, which is important for animal welfare among many other reasons.

However, AI development is moving sufficiently quickly that solving relevant theoretical issues in time seems impossible without unexpected breakthroughs (or without progress slowing down, either due to hitting a wall or because we deliberately pause).

### 8\. Honesty (chain-of-thought faithfulness, etc.)

As with interpretability, training for honesty/faithfulness gives humans more ability to prevent AIs from caring about non-humans. But as with interpretability, if humans can’t prevent AI from caring about non-humans, then animal welfare is moot because the AI will be misaligned and kill everyone anyway.

For this category in particular, I have a sense that there’s low-hanging fruit from spending a few more hours or days thinking about it, to consider questions like: What is the connection between chain-of-thought honesty and honesty about moral values? What about the idea of training a “pathologically honest” AI—might that be simultaneously good for alignment and good for non-human welfare?

### 9\. Data-level safety (excluding harmful content from training data, etc.)

This category is similar to RLHF et al., in that whether it’s good or bad for non-humans depends on what exactly you’re doing with the data, and the people in charge are unlikely to move things in an animal-friendly direction.

My sense is that data-level safety is less likely than RLHF to be bad for non-humans because the teams who work on it don’t have immediate conflicts of interest. I can easily imagine the CEO of an AI company going to the RLHF team and saying, “Hey we need to make our LLM stop talking about animal welfare, it’s turning off our users.” The connection between data-level safety and user experience is more indirect, so efforts are less likely to get overruled.

### 10\. Multi-agent cooperation & social alignment

This category may be good for non-humans insofar as the dominant multi-agent cooperation framework treats non-humans as agents. Work in this space usually assumes that agents are humans or intelligent AIs; but perhaps people’s current ideas about who qualifies as an agent will end up not being relevant.

Questions for further research:

  * If (say) chickens are not capable of behaving agentically, does that mean a cooperative AI agent won’t include them in its circle of cooperation?
  * Are there versions of cooperativeness that are more likely to give consideration to chickens?



At minimum, aligning AI to humans’ preferences broadly entails incorporating the preferences of humans who care about non-humans. But it’s unclear how this would cash out when those preferences conflict with other people’s preferences to eat meat, experience nature, or have robot slaves.

### 11\. Goal robustness (satisficing > maximizing, reward hacking, etc.)

This seems orthogonal to non-human welfare.

### 12\. Safety by construction (scientist AI, etc.)

Guaranteed-safe AIs are likely to be less impactful on the world, which means they would have no strongly good or bad effects on non-human welfare.

The relevant question is what happens with later, more goal-directed AIs. Will building safe-by-construction AIs first make the later AIs better or worse for non-humans? It’s hard to say.

## Best and worst categories for non-human welfare

My best guesses about which types of alignment research are likely to be good or bad for non-humans:

  * **Good for non-humans:** (7) alignment theory; (10) multi-agent cooperation & social alignment
  * **Somewhat good for non-humans:** (6) model psychology
  * **Orthogonal:** (2) control & safeguards; (5) evals (except for animal welfare benchmarks); (11) goal robustness
  * **Unclear:** (3) interpretability; (4) scalable oversight; (8) honesty; (9) data-level safety; (12) safety by construction
  * **Bad for non-humans:** (1) iterative alignment (RLHF)



Improvements to alignment theory and multi-agent coordination seem particularly likely to improve non-human welfare, but also particularly hard to make progress on. Implementing animal welfare LLM benchmarks and changing model constitutions seems easy, but unlikely to be relevant to ASI.

Those two kinds of work—hard theoretical work and easy model tuning—are most relevant for improving animal welfare, but it’s not clear which is better on the margin because there’s an importance/tractability tradeoff.

## Appendix: Summaries of alignment research categories

These were written by Claude Opus 4.6, based on the [Shallow review of technical AI safety, 2025](https://www.lesswrong.com/posts/Wti4Wr7Cf5ma3FGWa/shallow-review-of-technical-ai-safety-2025-2). For summaries of more specific categories, see <https://shallowreview.ai/overview>. Normally I don’t copy/paste LLM text, but in this case I can’t come up with better summaries than Claude did.

  1. **Iterative Alignment (RLHF/post-training):** Nudge base models toward desired behavior through preference optimization at pretrain- or post-train-time (RLHF, DPO, etc.). The theory of change is essentially that alignment is a relatively shallow property that can be trained in incrementally, and that current techniques will scale smoothly to more capable systems.
  2. **Control & Safeguards:** Architect the deployment environment so that even a misaligned model can’t cause catastrophe — via monitoring, sandboxing, inference-time auxiliary classifiers, and human-in-the-loop protocols. The theory of change is that you don’t need to solve alignment if you can reliably contain misbehavior through external oversight structures.
  3. **Interpretability (White-Box Safety):** Reverse-engineer model internals — circuits, sparse autoencoders, causal abstractions, attribution graphs — to understand what the model is computing and why. The hope is that if we can read a model’s “thoughts,” we can detect deception, verify alignment properties, and build safety cases grounded in mechanistic understanding rather than behavioral testing alone.
  4. **Scalable Oversight / Make-AI-Solve-It:** Use AI systems themselves to supervise, evaluate, and improve alignment of other (possibly stronger) AI systems, via techniques like debate, weak-to-strong generalization, and recursive reward modeling. The theory of change is that human oversight won’t scale to superhuman systems, so we need amplification schemes where AI assists humans in judging AI.
  5. **Evals & Red-Teaming:** Systematically test models for dangerous capabilities (bioweapons uplift, autonomous replication, scheming, deception, situational awareness, sandbagging) before and after deployment. The theory of change is that if we can reliably measure when models cross dangerous capability thresholds, we can gate deployment decisions and trigger stronger safety measures.
  6. **Model Psychology (Character, Values, Emergent Misalignment):** Study and shape the emergent “personality,” values, and behavioral tendencies of models — including work on model specs/constitutions, sycophancy, persona steering, and understanding how misalignment can emerge naturally from reward hacking. The theory of change is that as models become more agentic, their behaviors are increasingly driven by coherent internal goals and values that need to be understood and steered directly.
  7. **Alignment Theory (Agent Foundations, Corrigibility, Formal Guarantees):** Develop mathematical and conceptual foundations for alignment — including agent foundations, corrigibility, tiling agents, natural abstractions, ontology identification, and guaranteed-safe AI. The theory of change is that empirical tinkering is insufficient without a deeper theoretical understanding of what it means for an agent to be aligned, and that we need formal frameworks before building systems we can’t undo.
  8. **Chain-of-Thought Monitoring & Honesty:** Ensure that reasoning models’ chain-of-thought is faithful, legible, and monitorable — detecting when models reason deceptively or obscure their true reasoning in the scratchpad. The theory of change is that reasoning models offer a new and fragile window into model cognition, and maintaining CoT transparency is a crucial safety property that could be undermined by training pressures toward obfuscation.
  9. **Data-Level Safety (Filtering, Poisoning Defense, Synthetic Data):** Improve alignment upstream by curating training data — filtering harmful content, defending against data poisoning attacks, generating high-quality synthetic alignment data, and studying how data properties propagate into model behavior. The theory of change is that model behavior is fundamentally shaped by its training data, so intervening at the data level can prevent problems that are harder to fix downstream.
  10. **Multi-Agent & Social Alignment:** Address the problem of aligning not just a single AI but systems of multiple interacting agents — including game-theoretic approaches, aligning to social contracts, cooperative AI, and the political question of “aligned to whom?” The theory of change is that real-world deployment involves many AI agents interacting with each other and with diverse human stakeholders, so single-agent alignment frameworks are insufficient.
  11. **Goal Robustness (Mild Optimization, RL Safety, Assistance Games):** This category focuses on making AI systems that pursue goals in a safe, bounded way rather than maximizing an objective function at all costs. It includes work on satisficing (achieving “good enough” outcomes rather than optimal ones), preventing reward hacking (where models exploit loopholes in their reward signal to get high scores without doing what we actually wanted), and assistance games (where the AI treats the human’s true preferences as uncertain and acts cooperatively rather than pursuing a fixed objective). The theory of change is that many catastrophic failure modes stem from relentless optimization pressure — a system that optimizes mildly or defers to humans under uncertainty is far less likely to produce dangerous instrumental subgoals like resource acquisition or resistance to shutdown.
  12. **Safety by Construction (Guaranteed-Safe AI, Scientist AI, Brainlike-AGI Safety):** Rather than building a powerful unconstrained system and then trying to align it after the fact, this category aims to design AI architectures that are inherently safe by their structure. This includes guaranteed-safe AI (systems with formal, verifiable bounds on behavior), “scientist AI” (systems designed only to answer questions and model the world rather than take actions), and brainlike-AGI safety (drawing on neuroscience to build architectures with built-in safety properties). The theory of change is that retrofitting safety onto an already-capable system is fragile and adversarial, so it’s better to constrain the design space upfront so that dangerous behaviors are architecturally ruled out rather than merely trained against.



Posted on Mar 23, 2026
