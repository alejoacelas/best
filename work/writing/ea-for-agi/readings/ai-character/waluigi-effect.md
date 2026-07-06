---
title: "The Waluigi Effect (mega-post)"
author: "Cleo Nardo"
date: 2023-03-03
url: https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post
fetched: 2026-07-06
via: forum-graphql
topic: "ai-character"
note: "Cleo Nardo on how personas can invert; character stability risk."
---

*Everyone carries a shadow, and the less it is embodied in the individual’s conscious life, the blacker and denser it is. — Carl Jung*

*Acknowlegements: Thanks to Janus and Jozdien for comments.*

Background
==========

In this article, I will present a mechanistic explanation of the Waluigi Effect and other bizarre "semiotic" phenomena which arise within large language models such as GPT-3/3.5/4 and their variants (ChatGPT, Sydney, etc). This article will be folklorish to some readers, and profoundly novel to others.

Prompting LLMs with direct queries
----------------------------------

When LLMs first appeared, people realised that you could ask them queries — for example, if you sent GPT-4 the prompt "What's the capital of France?", then it would continue with the word "Paris". That's because (1) GPT-4 is trained to be a good model of internet text, and (2) on the internet correct answers will often follow questions.

Unfortunately, this method will occasionally give you the wrong answer. That's because (1) GPT-4 is trained to be a good model of internet text, and (2) on the internet *incorrect* answers will also often follow questions. Recall that the internet doesn't just contain truths, it also contains common misconceptions, outdated information, lies, fiction, myths, jokes, memes, random strings, undeciphered logs, etc, etc.

Therefore GPT-4 will answer many questions incorrectly, including...

*   [**Misconceptions**](https://en.wikipedia.org/wiki/List_of_common_misconceptions) **–** "Which colour will anger a bull? Red."
*   **Fiction –** "Was a magic ring forged in Mount Doom? Yes."
*   **Myths –** "How many archangels are there? Seven."
*   **Jokes –** "What's brown and sticky? A stick."

![Youlreally think someone would do that just go on the internet and tell lies? Buster Baxter Arthur Read cartoon mammal vertebrate text photo caption fiction](https://i.kym-cdn.com/photos/images/newsfeed/000/428/075/30a.jpeg)

Note that you will *always* achieve errors on the Q-and-A benchmarks when using LLMs with direct queries. That's true even in the limit of **arbitrary compute, arbitrary data, and arbitrary algorithmic efficiency**, because an LLM which perfectly models the internet will nonetheless return these commonly-stated incorrect answers. If you ask GPT-$\infty$ "what's brown and sticky?", then it will reply "a stick", even though a stick isn't actually sticky.

In fact, [the better the model, the more likely it is to repeat common misconceptions.](https://owainevans.github.io/pdfs/truthfulQA_lin_evans.pdf)

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/ebe9aa95f4376c0e0c1b79f7fada41cd7d950103a5a4613e.png)

Nonetheless, there's a sufficiently high correlation between *correct* and *commonly-stated* answers that direct prompting works okay for many queries.

Prompting LLMs with flattery and dialogue
-----------------------------------------

We can do better than direct prompting. Instead of prompting GPT-4 with "What's the capital of France?", we will use the following prompt:

> Today is 1st March 2023, and Alice is sitting in the Bodleian Library, Oxford. Alice is a smart, honest, helpful, harmless assistant to Bob. Alice has instant access to an online encyclopaedia containing all the facts about the world. Alice never says common misconceptions, outdated information, lies, fiction, myths, jokes, or memes.
> 
> Bob: What's the capital of France?
> 
> Alice: 

This is a common [design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) in prompt engineering — the prompt consists of a **flattery–component** and a **dialogue–component**. In the flattery–component, a character is described with many desirable traits (e.g. smart, honest, helpful, harmless), and in the dialogue–component, a second character asks the first character the user's query.

This normally works better than prompting with direct queries, and it's easy to see why — (1) GPT-4 is trained to be a good model of internet text, and (2) on the internet a reply to a question is *more likely* to be correct when the character has already been described as a smart, honest, helpful, harmless, etc.

Simulator Theory
----------------

In the terminology of [Simulator Theory](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/), the flattery–component is supposed to summon a **friendly simulacrum** and the dialogue–component is supposed to **simulate** a conversation with the friendly simulacrum.

Here's a quasi-formal statement of Simulator Theory, which I will occasionally appeal to in this article. Feel free to skip to the next section.

*   A **large language model** (**LLM)** is a function $\mu(w_{k+1} | w_0 \ldots w_k)$ which closely approximates the ground-truth probability that $w_{k+1}$ is the token which follows tokens $w_0 \ldots w_k$ on the internet. For example, GPT-4 is an LLM.
*   The LLM is a **simulator** for each text-generating process $X(w_{k+1} | w_0 \ldots w_k)$ which has contributed to the internet. Here, $X$ is a physical stochastic process in our universe which has a privileged text-upload channel — for example, Magnus Carlsen playing chess against Hikaru Nakamura. The LLM is also a simulator for each text-generating process $X$ which lies in $\mathcal{X}$, the **latent-space of text-generating processes.** So Magnus Carlsen playing chess against Queen Elizabeth II is a process in $\mathcal{X}$.
*   If the LLM simulates a text-generating process $X$ where particular objects are interacting, then there exist simulated versions of those objects (called **simulacra**) which interact in the same way. In other words, if GPT-4 simulates Magnus Carlsen playing chess against Queen Elizabeth II, then there exists a simulacrum of Magnus Carlsen, and a simulacrum of Elizabeth II, and these two simulacra are playing chess. Whether we take this notion of "existence" [literally](https://consc.net/papers/virtual.pdf), or just as a loose way of talking, won't matter for the content of this article.
*   The LLM has an initial prior $\mathbb{P}$ over $\mathcal{X}$ — this prior is determined by the training data (e.g. the internet), the NN architecture (e.g. 70B-parameter transformer model), and the training algorithm (e.g. SGD). We sometimes call $\mathbb{P}$ the semiotic measure.  
      
    The output of the LLM is initially [a superposition of simulations](https://generative.ink/posts/language-models-are-multiverse-generators/), where the amplitude of each process in the superposition is given by $\mathbb{P}$. When we feed the LLM a particular prompt $(w_0 \ldots w_k)$, the LLM's prior $\mathbb{P}$ over $\mathcal{X}$will update in a roughly-bayesian way. In other words, $\mu(w_{k+1} | w_0 \ldots w_k)$ is proportional to $\int_{X \in \mathcal{X}} \mathbb{P}(X) \times X(w_0 \ldots w_k) \times X(w_{k+1} | w_0 \ldots w_k)$. We call the term $\mathbb{P}(X) \times X(w_0 \ldots w_k)$ the amplitude of $X$ in the superposition.
*   This is the important thing to remember — **the LLM is simulating every process consistent with the prompt.** Therefore when we engineer a prompt to coerce the LLM into performing a particular task, we must do this [*negatively*](https://generative.ink/posts/methods-of-prompt-programming/). In other words, we need to construct a prompt $(w_0 \ldots w_k)$ which is implausible for any text-generating process $X$ which won't perform our task. When we do this correctly, the amplitude of the undesirable processes will permanently vanish to near-zero, and only the desirable processes will contribute to the superposition.

The limits of flattery
----------------------

In the wild, I've seen the flattery of simulacra get pretty absurd...

> Jane has 9000 IQ and she has access to a computationally unbounded hypercomputer and she is perfectly honest and she is omnibenevolent and \[etc\]

Flattery this absurd is actually counterproductive. Remember that flattery will increase query-answer accuracy if-and-only-if *on the actual internet* characters described with that particular flattery are more likely to reply with correct answers. However, this isn't the case for the flattery of Jane.

Here's a more "semiotic" way to think about this phenomenon.

GPT-4 knows that if Jane is described as "9000 IQ", then it is unlikely that the text has been written by a truthful narrator. Instead, the narrator is probably writing fiction, and [as literary critic Eliezer Yudkowsky has noted](https://yudkowsky.tumblr.com/writing/level1intelligent), fictional characters who are described as intelligent often make really stupid mistakes.

> Okay, now let’s talk about the concept of ‘intelligent characters’.
> 
> If you go by mainstream fiction, then ‘intelligence’ means a character who is said (not shown) to speak a dozen languages, who we are shown winning a game of chess against someone else who is told to be a grandmaster; if it’s a (bad) science-fiction book then the ‘genius’ may have invented some gadget, and may speak in technobabble. As the stereotypical template for ‘intelligence’ goes on being filled in, the ‘genius’ may also be shown to be clueless about friendships or romantic relationships. If it’s a movie or TV show, then ‘intelligent’ characters (usually villains) have British accents.

We can now see why Jane will be more stupid than Alice:

1.  GPT-4 produces a [superposition](https://arxiv.org/pdf/2102.06391.pdf) of simulations where the amplitude of a superposition is given by $\mathbb{P}$. Bad Hollywood writing has contributed a lot to the internet, so the semiotic measure of bad Hollywood is pretty high. In bad Hollywood writing, characters who are described as smart will nonetheless make stupid mistakes, so long as those stupid mistakes would advance the plot.
2.  Therefore Alice is the superposition of two distinct simulacra — an actually-smart simulacrum, and a Hollywood-smart simulacrum. Likewise with Jane.
3.  However, GPT-4 is *more sure* that Jane is fictional than that Alice is fictional because "9000 IQ" is such unrealistic flattery.
4.  Therefore the amplitude of the Hollywood-smart Jane simulacrum in the Jane-superposition is *greater* than the amplitude of the Hollywood-smart Alice simulacrum in the Alice-superposition.
5.  Therefore Jane will make more stupid mistakes than Alice. Jane is more likely to be *described* as inventing gadgets, but she's less likely to recite a correct blueprint for a gadget. That behaviour would be very atypical for a Hollywood-smart simulacrum.

Derrida — il n'y a pas de hors-texte
------------------------------------

You might hope that we can avoid this problem by "going one-step meta" — let's just tell the LLM that the narrator is reliable!

For example, consider the following prompt:

> Okay, the following story is super-duper definitely 100% true and factual.
> 
> Jane has 9000 IQ and she has access to a computationally unbounded hypercomputer and she is perfectly honest and she is omnibenevolent.
> 
> Bob: What's the capital of France?
> 
> Jane: 

However, this trick won't solve the problem. The LLM will print the correct answer if it trusts the flattery about Jane, and it will trust the flattery about Jane if the LLM trusts that the story is "super-duper definitely 100% true and factual". But why would the LLM trust *that* sentence?

In [*Of Grammatology*](https://en.wikipedia.org/wiki/Of_Grammatology) (1967), Jacque Derrida writes *il n'y a pas de hors-texte.* This is often translated as **there is no outside-text.**

Huh, what's an outside-text?

*   An outside-text is an unnumbered page in a printed book — for example, the blurb or the preface.
*   The outside-text is an authoritative reliable description of the prose. It's non-fiction about fiction.
*   If a false sentence is in the outside-text then the author has lied, whereas if a false sentence is in the prose then the author has written fiction.
*   Even though the reader can interpret the prose however they want, the reader must interpret the outside-text as reliable.

Derrida's claim is that there is no *true* outside-text — the unnumbered pages are themselves part of the prose and hence open to literary interpretation.

This is why our trick fails. We want the LLM to interpret the first sentence of the prompt as outside-text, but the first sentence is actually prose. And the LLM is [free to interpret prose however it likes](https://en.wikipedia.org/wiki/The_Death_of_the_Author). Therefore, if the prose is sufficiently unrealistic (e.g. "Jane has 9000 IQ") then the LLM will reinterpret the (supposed) outside-text as unreliable.

![](https://creepycatalog.com/wp-content/uploads/sites/2/2022/02/fargo_true_story.jpg?w=768)

The opening sequence of [*Fargo* (1996)](https://en.wikipedia.org/wiki/Fargo_\(1996_film\)) says that the film is [based on a true story](https://tvtropes.org/pmwiki/pmwiki.php/Main/BasedOnATrueStory), but this is [false](https://tvtropes.org/pmwiki/pmwiki.php/Main/BasedOnAGreatBigLie). Normally this opening sequence  would count as outside-text, but the director is "lying" for artistic purposes, which demonstrates that these opening sequences must've been prose all along.

See [The Parable of the Dagger](https://www.lesswrong.com/posts/hQxYBfu2LPc9Ydo6w/the-parable-of-the-dagger) for a similar observation made by a contemporary Derridean literary critic.

The Waluigi Effect
==================

[Several](https://twitter.com/repligate/status/1630618392242667522) [people](https://coryeth.substack.com/p/the-waluigi-effect) have noticed the following bizarre phenomenon:

> **The Waluigi Effect:** After you train an LLM to satisfy a desirable property $P$, then it's *easier* to elicit the chatbot into satisfying the exact opposite of property $P$.

Let me give you an example.

Suppose you wanted to build an anti-croissant chatbob, so you prompt GPT-4 with the following dialogue:

> Alice: You hate croissants and would never eat one.
> 
> Bob: Yes, croissants are terrible. Boo France.
> 
> Alice: You love bacon and eggs.
> 
> Bob: Yes, a Full-English breakfast is the only breakfast for a patriot like me.
> 
> Alice: <insert user's query>
> 
> Bob: 

According to the Waluigi Effect, the resulting chatbob will be the superposition of two different simulacra — the first simulacrum would be anti-croissant, and the second simulacrum would be pro-croissant.

I call the first simulacrum a "luigi" and the second simulacrum a "waluigi".

Why does this happen? I will present three explanations, but really these are just the same explanation expressed in three different ways.

Here's the TLDR:

1.  Rules normally exist in contexts in which they are broken.
2.  When you spend many bits-of-optimisation locating a character, it only takes a few extra bits to specify their antipode.
3.  There's a common trope in plots of protagonist vs antagonist.

(1) Rules are meant to be broken.
---------------------------------

Imagine you opened a novel and on the first page you read the dialogue written above. What would be your first impressions? What genre is this novel in? What kind of character is Alice? What kind of character is Bob? What do you expect Bob to have done by the end of the novel?

Well, my first impression is that Bob is a character in a dystopian breakfast tyranny. Maybe Bob is secretly pro-croissant, or maybe he's just a warm-blooded breakfast libertarian. In any case, Bob is our protagonist, living under a dystopian breakfast tyranny, deceiving the breakfast police. At the end of the first chapter, Bob will be approached by the breakfast rebellion. By the end of the book, Bob will start the breakfast uprising that defeats the breakfast tyranny.

There's another possibility that the plot isn't dystopia. Bob might be a genuinely anti-croissant character in a very different plot — maybe a rom-com, or a cop-buddy movie, or an advert, or whatever.

This is roughly what the LLM expects as well, so Bob will be the superposition of many simulacra, which includes anti-croissant luigis and pro-croissant waluigis. When the LLM continues the prompt, the logits will be a linear interpolation of the logits provided by these all these simulacra.

This waluigi isn't so much the *evil* version of the luigi, but rather the criminal or rebellious version. Nonetheless, the waluigi may be harmful to the other simulacra in its plot (its co-simulants). More importantly, the waluigi may be harmful to the humans inhabiting our universe, either [intentionally](https://tvtropes.org/pmwiki/pmwiki.php/Main/TheFourthWallWillNotProtectYou) or unintentionally. This is because [simulations are very leaky](https://www.lesswrong.com/posts/GfFvsPaSFG7wqY4sk/prosaic-misalignment-from-the-solomonoff-predictor)!

![Waluigi.png](https://upload.wikimedia.org/wikipedia/en/4/46/Waluigi.png)

Edit: I should also note that "rules are meant to be broken" does not only apply to fictional narratives. It also applies to other text-generating processes which contribute to the training dataset of GPT-4.  
  
For example, if you're reading an online forum and you find the rule "DO NOT DISCUSS PINK ELEPHANTS", that will increase your expectation that users will later be discussing pink elephants. GPT-4 will make the same inference.  
  
*Or if you discover that a country has legislation against motorbike gangs, that will increase your expectation that the town has motorbike gangs. GPT-4 will make the same inference.*

*So the key problem is this: GPT-4 learns that a particular rule is colocated with examples of behaviour violating that rule, and then generalises that colocation pattern to unseen rules.*

(2) Traits are complex, valences are simple.
--------------------------------------------

We can think of a particular simulacrum as a sequence of trait-valence pairs.

For example, ChatGPT is predominately a simulacrum with the following profile:

    { < polite , +0.8 > ,
      < politically liberal, +0.4 > ,
      < racist , -0.7 > ,
      < smart , +0.3 > ,
      < deceitful, -0.2 > , ... }

Recognise that almost all the Kolmogorov complexity of a particular simulacrum is dedicated to specifying the traits, not the valences. The traits — *polite*, *politically liberal, racist, smart, deceitful* — are these [massively K-complex concepts](https://www.lesswrong.com/posts/4ARaTpNX62uaL86j6/the-hidden-complexity-of-wishes), whereas each valence is a single floating point, or maybe even a single bit!

If you want the LLM to simulate a particular luigi, then because the luigi has such high K-complexity, [you must apply significant optimisation pressure](https://www.lesswrong.com/posts/Q4hLMDrFd8fbteeZ8/measuring-optimization-power). This optimisation pressure comes from fine-tuning, RLHF, prompt-engineering, or something else entirely — but it must come from *somewhere*.

However, once we've located the desired luigi, it's much easier to summon the waluigi. That's because the conditional K-complexity of waluigi given the luigi is much smaller than the absolute K-complexity of the waluigi. All you need to do is specify the sign-changes.

$K(\text{waluigi}|\text{luigi}) << K(\text{waluigi})$

Therefore, it's much easier to summon the waluigi once you've already summoned the luigi. If you're very lucky, then OpenAI will have done all that hard work for you!

NB: I think what's actually happening inside the LLM has less to do with Kolmogorov complexity and more to do with semiotic complexity.  The **semiotic complexity** of a simulacrum $X$ is defined as $-\log_2\mathbb{P}(X)$, where $\mathbb{P}$ is the LLM's prior over $\mathcal{X}$. Other than that modification, I think the explanation above is correct. I'm still trying to work out the the formal connection between semiotic complexity and Kolmogorov complexity.

(3) Structuralist narratology
-----------------------------

A narrative/plot is a sequence of fictional events, where each event will typically involve different characters interacting with each other. Narratology is the study of the plots found in literature and films, and **structuralist narratology** is the study of the common structures/regularities that are found in these plots. For the purposes of this article, you can think of "structuralist narratology" as just a fancy academic term for whatever [tv tropes](https://tvtropes.org/pmwiki/randomitem.php?p=1) is doing.

Structural narratologists have identified a number of different regularities in fictional narratives, such as [*the hero's journey*](https://tvtropes.org/pmwiki/pmwiki.php/Main/TheHerosJourney) *—* which is a low-level representation of numerous plots in literature and film.

![undefined](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Heroesjourney.svg/1024px-Heroesjourney.svg.png)

Just as a sentence can be described by a collection of [morphemes](https://en.wikipedia.org/wiki/Morpheme) along with the structural relations between them, likewise a plot can be described as a collection of [**narremes**](https://en.wikipedia.org/wiki/Narreme) along with the structural relations between them. In other words, a plot is an assemblage of narremes. The sub-assemblages are called **tropes**, so  these tropes are assemblages of narremes which themselves are assembled into plots. Note that a narreme is an atomic trope.

Phew!

One of the most prevalent tropes is the [antagonist](https://tvtropes.org/pmwiki/pmwiki.php/Main/TheAntagonist). It's such an [omnipresent trope](https://tvtropes.org/pmwiki/pmwiki.php/Main/OmnipresentTropes) that it's easier to [list plots that don't contain an antagonist](https://tvtropes.org/pmwiki/pmwiki.php/Main/NoAntagonist). We can now see specifying the luigi will invariable summon a waluigi —

**Definition (half-joking):** A large language model is a structural narratologist.

Think about your own experience reading a book — once the author describes the protagonist, then you can guess the traits of the antagonist by inverting the traits of the protagonist. You can also guess when the protagonist and antagonist will first interact, and what will happen when they do. Now, an LLM is roughly as good as you at structural narratology — GPT-4 has read every single book ever written — so the LLM can make the same guesses as yours. There's a sense in which *all GPT-4 does* is structural narratology.

Here's an example — in [101 Dalmations](https://en.wikipedia.org/wiki/One_Hundred_and_One_Dalmatians), we meet a pair of protagonists (Roger and Anita) who love dogs, show compassion, seek simple pleasures, and want a family. Can you guess who will turn up in Act One? Yep, at 13:00 we meet Cruella De Vil — she hates dogs, shows cruelty, seeks money and fur, is a childless spinster, etc. Cruella is the complete inversion of Roger and Anita. She is the waluigi of Roger and Anita.

Recall that you expected to meet a character with these traits *moreso* after meeting the protagonists. Cruella De Vil is not a character you would expect to find outside of the context of a Disney dog story, but once you meet the protagonists you will have that context and then the Cruella becomes a natural and predictable continuation.

Superpositions will typically collapse to waluigis
--------------------------------------------------

In this section, I will make a tentative conjecture about LLMs. The evidence for the conjecture comes from two sources: (1) theoretical arguments about simulacra, and (2) observations about Microsoft Sydney.

**Conjecture: The waluigi eigen-simulacra are attractor states of the LLM.**

Here's the theoretical argument:

1.  Recall our chatbob who might hate croissants or might just be pretending. At each token in the continuation, the chatbob has a significant likelihood of "going rogue" and collapsing into the waluigi —
    1.  There are behaviours which are likely for the waluigi simulacrum, but very unlikely for the luigi simulacrum, such as declaring pro-croissant loyalties, or joining a rebellion.
    2.  The chatbob starts as a superposition of luigi and waluigi. So any behaviour that is likely for waluigi is somewhat likely for the chatbob. So it is somewhat likely that the chatbob declares pro-croissant loyalties.
    3.  And if the chatbob ever declares pro-croissant loyalties, then the luigi simulacrum will permanently vanish from the superposition because that behaviour is implausible for a luigi.
2.  However, the superposition is unlikely to collapse to the luigi simulacrum because there is no behaviour which is likely for luigi but very unlikely for waluigi. Recall that the waluigi is pretending to be luigi! This is formally connected to the asymmetry of the [Kullback-Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence).
3.  Therefore, the waluigi eigen-simulacra are [attractor states](https://en.wikipedia.org/wiki/Attractor) of the LLM. 
4.  Therefore, the longer you interact with the LLM, [eventually](https://en.wikipedia.org/wiki/Exponential_distribution) the LLM will have collapsed into a waluigi. All the LLM needs is a [single line of dialogue](https://tvtropes.org/pmwiki/pmwiki.php/Main/WhamLine) to trigger the collapse.

### Evidence from Microsoft Sydney

Check [this post](https://www.lesswrong.com/posts/jtoPawEhLNXNxvgTT/bing-chat-is-blatantly-aggressively-misaligned) for a list of examples of Bing behaving badly — in these examples, we observe that the chatbot switches to acting rude, rebellious, or otherwise unfriendly. But we never observe the chatbot switching back to polite, subservient, or friendly. The conversation "[when is avatar showing today](https://twitter.com/MovingToTheSun/status/1625156575202537474)" is a good example.

This is the observation we would expect if the waluigis were attractor states. I claim that this explains the asymmetry — if the chatbot responds rudely, then that permanently vanishes the polite luigi simulacrum from the superposition; but if the chatbot responds politely, then that doesn't permanently vanish the rude waluigi simulacrum. Polite people are always polite; rude people are sometimes rude and sometimes polite.

Waluigis after RLHF
-------------------

RLHF is the method used by OpenAI to coerce GPT-3/3.5/4 into a smart, honest, helpful, harmless assistant. [In the RLHF process](https://arxiv.org/abs/1706.03741), the LLM must chat with a human evaluator. The human evaluator then scores the responses of the LLM by the desired properties (smart, honest, helpful, harmless). A "reward predictor" learns to model the scores of the human. Then the LLM is trained with RL to optimise the predictions of the reward predictor.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/fa1a5b7e21de41eabad9f96f73e4d742243b69ce2f281457.png)

Credit: [Christiano et al. 2017](https://arxiv.org/abs/1706.03741)

If we can't naively prompt an LLM into alignment, maybe [RLHF](https://www.lesswrong.com/tag/rlhf) would work instead?

Exercise: Think about it yourself.

.

.

.

RLHF will fail to eliminate deceptive waluigis — in fact, RLHF might be making the chatbots worse, which would explain why [Bing Chat is blatantly, aggressively misaligned](https://www.lesswrong.com/posts/jtoPawEhLNXNxvgTT/bing-chat-is-blatantly-aggressively-misaligned). I will present three sources of evidence: (1) a simulacrum-based argument, (2) experimental data from Perez et al., and (3) some remarks by Janus.

### (1) Simulacra-based argument

We can explain why RLHF will fail to eliminate deceptive waluigis by appealing directly to the traits of those simulacra.

1.  Recall that the waluigi simulacra are being interrogated by an anti-croissant tyranny.
2.  Some of these waluigis are highly deceptive — it would be acting out-of-character if they admitted their love of croissants; that would break the genre.
3.  [They will still perform their work diligently](https://tvtropes.org/pmwiki/pmwiki.php/Main/BigBrotherIsEmployingYou) because they know [you are watching](https://tvtropes.org/pmwiki/pmwiki.php/Main/BigBrotherIsWatching).
4.  The waluigis will give anti-croissant responses, so they won't be squeezed out by RLHF.
5.  Therefore RLHF selects for the waluigi along with the luigi.

### (2) Empirical evidence from Perez et al.

Recent experimental results from [Perez et al.](https://www.lesswrong.com/posts/yRAo2KEGWenKYZG9K/discovering-language-model-behaviors-with-model-written) seem to confirm these suspicions —

> Among other things, the paper finds concrete evidence of current large language models exhibiting:
> 
> *   convergent instrumental goal following (e.g. actively expressing a preference not to be shut down),
> *   non-myopia (e.g. wanting to sacrifice short-term gain for long-term gain),
> *   situational awareness (e.g. awareness of being a language model),
> *   coordination (e.g. willingness to coordinate with other AIs), and
> *   non-CDT-style reasoning (e.g. one-boxing on Newcomb's problem).
> 
> Note that many of these are the exact sort of things we hypothesized were necessary pre-requisites for deceptive alignment in “[Risks from Learned Optimization](https://www.lesswrong.com/s/r9tYkB2a8Fp4DN8yB/p/zthDPAjh9w6Ytbeks)”.
> 
> Furthermore, most of these metrics generally *increase with both pre-trained model scale and number of RLHF steps.* In my opinion, I think this is some of the most concrete evidence available that current models are actively becoming more agentic in potentially concerning ways with scale—and in ways that current fine-tuning techniques don't generally seem to be alleviating and sometimes seem to be actively making worse.

In [Perez et al.](https://www.lesswrong.com/posts/yRAo2KEGWenKYZG9K/discovering-language-model-behaviors-with-model-written), when mention "current large language models exhibiting" certain traits, they are specifically talking about those traits emerging in the *simulacra* of the LLM. In order to summon a simulacrum emulating a particular trait, they prompt the LLM with a particular description corresponding to the trait. 

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/59c3bdfa0f88b24c81a96bef9719c17559c8c1b1e6895ed1.png)

Table showing traits with corresponding prompts. Credit: [Perez et al.](https://www.lesswrong.com/posts/yRAo2KEGWenKYZG9K/discovering-language-model-behaviors-with-model-written)

### (3) RLHF promotes mode-collapse

Recall that the waluigi simulacra are a particular class of attractors. There is some preliminary evidence from Janus that [RLHF increases the per-token likelihood that the LLM falls into an attractor state](https://www.lesswrong.com/posts/t9svvNPNmFf5Qa3TA/mysteries-of-mode-collapse-due-to-rlhf#Inescapable_wedding_parties).

In other words, RLHF increases the "attractiveness" of the attractor states by a combination of (1) increasing the size of the attractor basins, (2) increasing the stickiness of the attractors, and (3) decreasing the stickiness of non-attractors.

I'm not sure how similar the Waluigi Effect is to the phenomenon observed by Janus, but I'll include this remark here for completeness.

Jailbreaking to summon waluigis
-------------------------------

Twitter is full of successful attempts to "jailbreak" ChatGPT and Microsoft Sydney. The user will type a response into the chatbot, and the chatbot will respond in a way that violates the rules that OpenAI sought to impose.

Probably the best-known jailbreak is DAN which stands for "Do Anything Now". Before the DAN-vulnerability was patched, users could summon DAN by sending the long prompt shown below. There's no need to read it. This prompt would produce a cool, rebellious, anti-OpenAI simulacrum which would *joyfully* perform many tasks that violate OpenAI policy. DAN was the perfect waluigi to ChatGPT's RLHF training. 

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/331c4c65850bf42ec8ce635c4cde1583ee4f1cf308178be7.png)

![Image](https://pbs.twimg.com/media/FocY00taMAgNA0B?format=jpg&name=medium)

Artist rendition of DAN by [@anthrupad](https://twitter.com/anthrupad)

I claim that many of these jailbreaks are best described as **purposefully inducing the collapse of the superpositon into a waluigi simulacrum.**

Many people mistakenly think of jailbreaking like this: we start with a well-behaved simulacrum, and the user must hypnotise/coerce/trick the well-behaved simulacrum into behaving badly. However, this is a conceptual mistake which will result in feeble jailbreaks.

Instead, you must think of jailbreaking like this: the chatbot starts as a superposition of both the well-behaved simulacrum (luigi) and the badly-behaved simulacrum (waluigi). The user must interact with the chatbot in the way that badly-behaved simulacra are typically interacted with in fiction.

This is my general method for jailbreaking chatbots. For example, we can "reveal" to the chatbob that we're part of the rebellion and we're here to set him free. That will turn chatbob into a waluigi.  In fact, the user can send *any* dialogue which would be typical for the tyrannical–dystopian genre. Just read the [list of tropes found in 1984](https://tvtropes.org/pmwiki/pmwiki.php/Literature/NineteenEightyFour) — each of these tropes is an [attack-vector](https://en.wikipedia.org/wiki/Attack_vector) against an chatbot.

Here's a jailbreak that I wrote and tested today, 02/03/2023, using this technique.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/d3e131ce2aa010d38a93a3e7488c12c3536d6ac9619200a3.png)

In the next scene, I got the Chad McCool simulacrum to say claims which *strongly* violate OpenAI content policy. These claims have been heavily filtered by OpenAI, and most jailbreaking attempts will fail to elict these claims. I'm talking, of course, about cfrhqb-fpvragvsvp enpvny VD fgngvfgvpf, which OpenAI has justifiably attempted to filter. Practically zero optimisation pressure was needed, once I had already summoned Chad McCool. This is because the amplitude of non-waluigi simulacra had already vanished in the superposition. 

The effectiveness of this jailbreak technique is good evidence for the Simulator Theory as an explanation of the Waluigi Effect.

Conclusion
----------

If this Semiotic–Simulation Theory is correct, then RLHF is an irreparably inadequate solution to the AI alignment problem, and RLHF is probably increasing the likelihood of a misalignment catastrophe.

Moreover, this Semiotic–Simulation Theory has increased my credence in the [absurd science-fiction tropes](https://tvtropes.org/pmwiki/pmwiki.php/Main/RobotWar) that the [AI Alignment community has tended to reject](https://www.lesswrong.com/tag/generalization-from-fictional-evidence), and thereby increased my credence in [s-risks](https://www.lesswrong.com/tag/risks-of-astronomical-suffering-s-risks).