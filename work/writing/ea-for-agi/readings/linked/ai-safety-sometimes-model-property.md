---
title: "AI Safety is Sometimes a Model Property"
author: "Cullen O'Keefe"
url: https://juralnetworks.substack.com/p/ai-safety-is-sometimes-a-model-property
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by power-concentration-democracy/vitalik-dacc-one-year-later.md; rebuttal to aisnakeoil — AI safety framing debate"
---

# AI Safety is Sometimes a Model Property

### Sometimes, we can improve AI safety by intervening directly on the model.

[](https://substack.com/@culleno)

[Cullen O'Keefe](https://substack.com/@culleno)

May 02, 2024

10

1

Share

# AI Safety is Sometimes a Model Property

Arvind Narayanan and Sayash Kapoor at the [AI Snake Oil newsletter](https://www.aisnakeoil.com/) have a recent post called “[AI safety is not a model property](https://www.aisnakeoil.com/p/ai-safety-is-not-a-model-property).” I think they make a number of important points in that post, and some incorrect ones. 

Boring bottom line up front: AI safety is sometimes a model property, in the following sense: it sometimes makes sense to perform safety interventions at the model level. Other safety interventions should be at the system or deployment context level. It takes skill and careful consideration to determine where in the AI deployment cycle the best interventions lie, and blanket statements excluding one or the other are not helpful.

Thanks for reading Jural Networks! Subscribe for free to receive new posts and support my work.

### What do the authors claim?

In the post, Narayanan & Kapoor make two different claims:

**Claim 1:** “AI safety is not a model property:” it is meaningless1 to speak of “safety” at the model-level, or to call any given model more or less safe than any other model.2

**Claim 2:** AI safety is not _solely_ a model-level property. To determine whether (or the extent to which) a model is safe, we should also look at the system and deployment context in which the model will be embedded.3

### Where I agree with the authors

Claim 2 is clearly correct. Systems and context matter a lot, especially for many types of misuse risks. Identical model behavior can often be beneficial, harmful, or benign, depending solely on variation in the system or deployment context. We ignore this at our peril, and good AI policy should consider these intervention points.

Narayanan & Kapoor make four recommendations in their post. I generally agree with their Recommendation 2, and partially agree with Recommendations 3 and 4. (On Recommendation 2, I highly recommend [this paper](https://arxiv.org/pdf/2403.07918) on which Kapoor and Narayanan were authors. It’s one of the best AI policy papers of the past year, in my opinion.) 

I’m not sure whether I agree that it’s _more_ important to talk about systems- and context-level safety than model-level safety, but I think this is an important and valid viewpoint and I was glad to see it discussed.

### Where I disagree with the authors

Claim 1 is incorrect. 

Narayanan & Kapoor give good examples of when model safety depends on the system and deployment context. But this is not good support for their headline claim. Their headline claim is not that system and deployment context often matter for safety. However, to prove Claim 1 requires them to prove that model behavior is _never_ predictive of safety outcomes.

Commonsense tells us that there _are_ cases where model behavior is at least partially predictive of safety, without knowing much about deployment context. Some vision models have, for example, [misclassified Black people as nonhuman](https://www.wsj.com/articles/BL-DGB-42522). The context in which such a model was deployed may determine _how_ unsafe this failure is, but it is extremely difficult to imagine any realistic deployment in which such a model would be _safe_. At the very least, we can definitely say that, on the single safety dimension of whether the model consistently recognizes humans as such regardless of race, a model that does _not_ make this mistake is [pro tanto](https://askell.io/posts/2020/12/bad-isnt-good-enough) _safer_ than one that does.

You can also tell that Claim 1 is false because Narayanan & Kapoor acknowledge that there are exceptions to it:

> _With a few exceptions_ , AI safety questions cannot be asked and answered at the levels of models alone.
> 
> . . .
> 
> Even within the category of misuse, _there are a few exceptions to the rule that safety is not a model property_. 

Emphases added. They give the examples of outputting CSAM or copyrighted material4 as exceptions.

If there are cases where X has property Y, then “Y is not a property of X” is, without more, misleading at best.

None of this is to deny that context matters, even in these example cases. But the importance of context is perfectly compatible with a belief that looking at the model alone can give us some evidence (though not complete evidence) of whether we expect the model to be harmful if deployed. It’s like saying that the statement “cars without seatbelts are unsafe” is “meaningless” because exactly _how_ unsafe such a car is depends on context (e.g., how fast it’s going, how many people are in the car, how old the passengers are), or because there is some conceivable context in which a car without a seatbelt is safer (e.g., if the car is sinking in water).

### A better framework: ask when model-level interventions are justified

Above, I have tried to show how the importance of context is compatible with the intelligibility of statements about model-level safety.

But a reader may still be left scratching their head. Didn’t I acknowledge that context will almost always matter? If so, where do I disagree with Narayanan & Kapoor?

My core claim is that it sometimes makes sense to talk about “model safety” when **interventions at the model level are justified**. Here are two examples of how it can make sense to intervene at the model level:

First, some model-level interventions will advance AI safety goals cost-effectively,5 across many possible deployment contexts. Examples might be performing [RLHF](https://arxiv.org/pdf/1706.03741), [Constitutional AI](https://arxiv.org/abs/2212.08073), [deduplicating training data](https://arxiv.org/pdf/2107.06499), removing PII from training data,6 specifying better reward functions, and [fine-tuning](https://arxiv.org/pdf/2310.02469). In many cases, these interventions can change model behavior across many downstream deployment settings, bringing typical behavior closer to desired behavior, therefore improving overall safety.

Second, and relatedly, a policymaker could say that, for some model _M_ , there is no way to deploy _M_ (considering all mitigation measures at all levels) in which the net benefits from _M_ outweigh the harms in expectation. In this sense, _M_ would be “unsafe for any deployment.” Most would agree that a hypothetical model that solely outputted CSAM would be such an inherently unsafe model.

We should create and use concepts that help us make better decisions. “Model safety” as a concept has value not because it can be assessed in a vacuum without reference to the broader context,7 but because it usefully directs our attention to one possible locus of intervention: the model. The same is true of “systems-level safety” and “context-level safety” as concepts.

Model-level interventions will indeed require knowing a lot about the AI system and deployment context, such as the various threat models one needs to worry about and the likely ways in which the model will be deployed.8 But note that, in these cases, it is very useful to focus one’s attention on the model, because there are **things we can do to the model** that will advance societal goals.

### Responsible communication about AI safety

As a matter of responsible communication, I think Narayanan & Kapoor’s headline is, unfortunately, over-broad and misleading. It gives the impression that model-level interventions are never appropriate because they are meaningless. The body of the post adds more nuance, but accurate headlines matter a lot.

My headline tries to be more nuanced while using the same number of words as Narayanan & Kapoor’s headline. Alternative headlines that I think could have been more responsible but no more verbose include: “Context matters for AI safety”, “AI safety often depends on context”, and “When assessing AI safety, don’t ignore context.” “AI Safety: More about Context Than Models” is also a perfectly fine headline to go with the post, which would accomplish the authors’ goal of downplaying the comparative importance of model-level interventions.

Model-level interventions are and will continue to be an important tool in policymakers’ toolkit. So will system- and context-level interventions. We should acknowledge the importance of all three (and possibly others!), and not give the impression that any are, as a rule, wholly valueless.

1

“We have to specify a particular context before we can even _meaningfully_ ask an AI safety question.” (emphasis added).

2

I think this is the most natural interpretation of “AI safety is not a model property.” See also: “Why has the _myth_ of safety as a model property persisted?” (emphasis added).

3

“[F]ixing AI safety at the model level _alone_ is unlikely to be fruitful.” “Safety _depends on_ context . . . .” “In the case of accidents, others have made the point that we have to look at the [system](http://system) and [context](https://arxiv.org/pdf/2401.10899.pdf), rather than the model _alone_.” (emphases added).

4

I would actually argue that outputting copyrighted material could be a great example of why context matters, since the fair use defense to copyright infringement exists, and also (theoretically) an author could have given the model developer a license to have the model reproduce the author’s copyrighted text.

5

“Cost” here is meant expansively to refer to anything that a policymaker would prefer to avoid, including not only the monetary cost required to perform the intervention, but also any cost in degraded performance on desired functionalities or costs to other values (e.g., decentralization of power, privacy, fairness). 

6

See § 2.7 of the [GPT-4 System Card](https://cdn.openai.com/papers/gpt-4-system-card.pdf). (Disclosure: I worked at OpenAI and worked on policy for GPT-4.)

7

For the same reason, “system-level safety” and “deployment context-level safety” are important concepts even though they require reference to the model itself. Neither model-level safety nor context-level safety makes sense in a vacuum, but both are useful.

8

Conversely, system- and context-level interventions require reference to the model itself.

10

1

Share

PreviousNext
