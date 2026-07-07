---
title: "Automating Math"
url: https://asteriskmag.com/issues/09/automating-math
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by macaskill-worldview/80k-century-in-a-decade; AI automating mathematical research — AI for reasoning/coordination."
---

Computers can already help verify proofs. One day soon, AI may be able to come up with new ones. 

“If we want to create a super-intelligent AI,” a friend said to me, “all we need to do is digitize the brain of Terry Tao.” A Fields Medal–winning mathematician, Tao is both prodigious (he was the youngest ever winner of the International Mathematical Olympiad) and prolific (his 300+ papers span vast areas of pure and applied math). Uploading Tao to the cloud remains a ways off, but it turns out that Terry himself has recently become interested in a related problem — how to digitize the process of mathematical research.

Tao is arguably the most prominent mathematician working with large language models today. “We should expect some surprising demonstrations of new mathematical research modalities in the near future,” he [said](https://terrytao.wordpress.com/wp-content/uploads/2024/03/machine-assisted-proof-notices.pdf) in a recent talk. Not, he cautioned, the autonomous superintelligences of science fiction, but still something more advanced than even frontier LLM performance today: “A valuable assistant that can suggest new ideas, filter out errors, and perform routine case checking, numerical experiments and literature review tasks, allowing the human mathematicians in the project to focus on the exploration of high level concepts.” 

But what would it actually mean to digitize math? And how might we do it with the tools we have today? 

## Being digital

One approach is through _interactive theorem provers_ , or “proof assistants.” An interactive theorem prover is a programming language for expressing mathematical proofs in a format (much like code) that a computer can read. Programs such as Lean, Coq, and Isabelle can then verify if a proof is correct — that is, that the conclusions follow from the assumptions. (I am on the board of the organization that develops Lean.) The interactive theorem prover software can also make incremental suggestions to help prove a theorem. The process of converting math from regular pen-and-paper language and math notation into such a formal programming language is called “formalization.”

Proof assistants take formalization one step further. A calculator can verify that 2 + 2 = 4, but it cannot verify the proof that the square root of two is irrational. That requires a formal logical structure. Proofs require complex chains of reasoning, and verifying their accuracy — an often lengthy and laborious process — requires that the reasoning is logically sound at every step. Interactive theorem provers offer the ability to automate that process.

In other words, if you write your mathematical proof as code in an interactive theorem prover, instead of with pencil and paper, you can, in essence, click a “verify” button, and the program will tell you if your proof is correct.

But having an interactive theorem prover at your fingertips does not mean that you can automatically generate proofs. Once generated, you can only check them for correctness. A hypothetical automated theorem prover, in contrast, would generate a proof given the statement the user wants to prove. It could do the hard work of coming up with the proof in the first place. 

From a sixteenth-century watercolor manuscript preserved at the Herzog August Bibliothek in Wolfenbüttel. Courtesy the public domain review. 

## Assisted collaboration

Interactive theorem provers have existed in some form for nearly 40 years. The Coq system, for example, has been under development since 1984. In 2005 it was famously used to formalize the proof of the four color theorem1 and, more recently, to formalize the proof of the 5-state busy beaver problem,2 a major outstanding challenge in theoretical computer science. Other languages like Isabelle (first released in 1986) have gained more traction in formal verification of computer software. (Isabelle was named by its developers after the daughter of one of Coq’s main developers, Gérard Huet.) 

But until recently, adoption by mathematicians had been slow. Formalizing a proof entails a large overhead relative to writing it on paper, both in terms of the time it takes for the mathematician and the size of the written artifact composing the proof itself. (Andrew Wiles’ proof of Fermat’s Last Theorem is over 100 pages long, while the original 1976 proof of the four color theorem had to be checked by computer and still took over a thousand hours.) 

It was not until the past few years that the Lean theorem prover’s mathlib, or mathematical library, started to grow rapidly. The fact that several Fields Medalist mathematicians use Lean, including Peter Scholze, Tim Gowers, and Tao, has driven interest among the rest of the math community. And as the set of intermediate results in the library grows, it becomes faster, easier, and more relevant for mathematicians to formally prove their results of interest — without having to build up everything tediously from scratch each time. 

Expressing math in the code of formal proof assistants can make it easier to verify new work and for mathematicians to [collaborate](https://twitter.com/benskuhn/status/1419281153983500290). With a proof checker as a collaborator, mathematicians don’t have to trust each other, or even fully understand each other’s work, so long as the proof checker says they are still on track. In other words, if mathematician A tries to take a next step in mathematician B’s proof and messes it up, the proof assistant will throw an error. In addition, often a mathematician or group of mathematicians might try to “backward chain” a complex proof progressively down from the final goal to a set of simpler lemmas, some of which they may have already proven, and some of which they may have yet to prove. 

In the past, because of the need to be able to verify all aspects of collaborative work, most collaborative mathematics was done in small groups. One exception is the Polymath Project, an ongoing collaborative (and sometimes crowdsourced) effort to solve previous intractable problems. While some important problems were solved that way, the project was limited by the fact that it still had to be managed and verified by human moderators. The advent of proof assistants removes that bottleneck and opens up the possibility to harness truly massive collaboration. Tim Gowers, who initially started the Polymath Project in 2009, has since been involved in spearheading collaborative Lean formalizations. And Kevin Buzzard, a mathematician at Imperial College London, recently [launched](https://leanprover-community.github.io/blog/posts/FLT-announcement/) a collaborative project to formalize the proof of Fermat's Last Theorem, one of math’s most ponderous and complex arguments. 

So far, proof assistants have mostly been used as the last step in checking correctness once the most creative work is already done. Now mathematicians are starting to experiment with them as a substrate for new forms of collaboration. But this is still early days, and there is, as yet, no real consensus among mathematicians regarding how transformative proof assistants for assisted collaboration, let alone the combination of proof assistants and modern AI, will be for mathematics.

## AI mathematician

How far can this go? Can AI generate new math? Can it do so at a superhuman level? Can AI ultimately, in some sense, “solve” math the way it has essentially solved chess, Go, or other, more circumscribed tasks?

Certain forms of machine learning, such as reinforcement learning, lend themselves to games that take place in narrow, closed worlds. AI programs like DeepMind’s AlphaGo — introduced in 2015 — can explore a vast number of possible moves through trial and error, guided by an automatic feedback mechanism that identifies successful strategies and can pit them against one another through self-play.

Over the past few years, AI has started to make progress in other, more freeform domains, like generating images and text. But here there is no clear or universal notion of when large language models are right or wrong in their reasoning. If an LLM outputs garbage, there is nothing analogous to a chess engine to calculate a losing move. Instead, humans are the judge. While “reinforcement learning from human feedback” has been used for fine-tuning large language models, looping humans into the task only scales to a limited degree. There are only so many humans, and companies are willing to pay only so much. One can train other AI models to mimic a human judge, but ultimately these approaches don’t perfectly assess the ground truth3 of correct reasoning. This is why LLMs still often “hallucinate,” and researchers have widely varying opinions on whether and when hallucination can be solved. 

As a testbed and application domain for AI, math lies somewhere in the middle. Mathematics is a flexible, expressive, and open-ended language and space of possibilities and has been developed over centuries to describe myriad intricate concepts and real-world phenomena. The ever growing math literature is a kind of cathedral of knowledge far broader than what can be expressed in any game like Go or chess. But whatever a proof covers, it must be correct. And a computer can verify that. (There may be more than one way to form a proof, but ultimately it is either right or wrong.) This signal allows the AI training process for mathematical reasoning to “close the loop” with ground truth correct answers, just like for Go.

David Pfau, a researcher at DeepMind, illustrates this concept with a 2 x 2 [diagram](https://x.com/pfau/status/1781854406507442461) (above). According to Pfau’s (slightly snarky) diagram, there are only a few ways to massively scale up machine learning. One can bootstrap learning by self-play — a training method where AIs improve their performance at competitive games by pitting multiple instances of the same AI model against each other and adopting the most successful strategies. This is the method behind DeepMind’s AlphaGo and later AlphaZero, a more general game AI, which mastered Go, shogi, and chess. This can lead to superhuman performance, but it works only in limited, closed domains, like games, which mostly aren’t that interesting. Or one can learn to imitate human behavior from massive datasets generated from the real world (i.e., the entire internet). This is the approach that’s given us Claude and ChatGPT. However, large language models currently don’t have a way to leverage bootstrapping from self-play in open-ended domains, because they lack a clear source of ground truth. Pfau therefore doesn’t think LLMs will lead to artificial general intelligence. But math is, again, the exception — a closed domain with a source of ground truth on which one can both bootstrap from self-play and leverage massive data. (I would also add, as a mathematician, that it is inherently interesting.) 

Researcher Christian Szegedy (then at Google) outlined a [vision](https://research.google/pubs/a-promising-path-towards-autoformalization-and-general-artificial-intelligence/) for how this could work back in 2020. The first part is “autoformalization.” The vast majority of existing proofs are written in a combination of mathematical notation and natural language. If we’re going to make use of this vast corpus to train mathematical AIs, we need a way to automatically translate it into verifiable code. Szegedy’s proposal is to train both a forward and a backward translator. First, train an LLM to translate from freeform notation into code and check it using a verifier. Then, translate the code back into English, making sure the back translation matches the original. If both work, we have what’s called “cycle consistency.” Once we know that the auto-formalization system is working, it could provide the data to train an AI model to generate full proofs from conjectures or propositions. The output of this model could itself be checked using the proof verifier, just as AlphaGo uses the Go game engine to check if it has won the game. 

A very similar concept was recently substantiated by DeepMind’s [AlphaProof](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/) system, which was introduced in 2024 after achieving silver-medal standard on the IMO. AlphaProof introduces several important innovations that leverage the ability of Lean code to verify generated proofs on the fly — just as a game engine scores game play in real time. First, DeepMind observed that the amount of training data written in Lean was too limited, so they used a fine-tuned version of a Gemini model to translate more abundant natural language proofs into Lean. The translation process is still vulnerable to hallucination. But because everything generated is verifiable, DeepMind can then use Lean to “prune” the generated examples down to those which are valid proofs.4

Another key insight was that this process could do more than generate a fixed body of training data: It could also be used to help solve new problems. This is where the idea of self-play comes in. Just like AlphaZero was trained by playing games like chess and Go against itself, AlphaProof’s training involved a [“setter + solver” approach](https://arxiv.org/abs/1909.12892), where one part of the model would generate a curriculum for another to solve. Over time, this leads to a gradually increasing curriculum of problem difficulty. Even if the system can’t yet prove a difficult target problem, it can still generate problems that are similar but easier to solve. Proving these easier problems lets the AI develop better strategies and generate even harder training tasks, until it can solve the real problem. Of course, this is a vast simplification: In practice, the system required a lot of tweaking and clever design to even begin to generate answers to such challenging problems. We don’t yet know how far these techniques will extend beyond IMO problems — which all have known solutions — and into the realm of cutting-edge math. 

From a sixteenth-century watercolor manuscript preserved at the Herzog August Bibliothek in Wolfenbüttel. Courtesy the public domain review.

## A dream becoming reality

Szegedy left Google to co-found Elon Musk’s xAI, which is [making progress](https://arxiv.org/abs/2403.18120) on auto-formalization. So, too, are Meta and the Chinese AI startup DeepSeek. These efforts are likely to dovetail with increasing reasoning abilities in frontier LLMs.

Last year, OpenAI released its o1 model, which uses reinforcement learning to train models with an “internal chain of thought,” or step-by-step reasoning process. This approach has markedly increased performance on a range of tasks, and it raises the question of whether new types of models adapted for general reasoning will also see a performance boost when applied to formal math theorem proving. So far, the jury is out. Terence Tao wrote that, in his experience, o1 “seemed roughly on par with trying to advise a mediocre, but not completely incompetent, (static simulation of a) graduate student. However, this was an improvement over previous models, whose capability was closer to an actually incompetent (static simulation of a) graduate student.” It might take, he went on, only one or two further iterations before it reached the level of a competent student and became of significant use in research. 

## Mechanical taste

Yet all of this stops short of the ultimate goal of AI for math: the ability to generate new theorems to prove in the first place. This is, perhaps, a higher-order level of creativity. It requires something we might even call “taste.” But we’re starting to see some preliminary thoughts on how we might get there. 

Yoshua Bengio, one of the “fathers” of deep learning, thinks we might be able to use information theory to capture something about what makes a mathematical conjecture “interesting.” Part of the idea is that such conjectures compress large amounts of information about the body of mathematical knowledge into a small number of short, compact statements. If AI could optimize for some notion of “explanatory power” (roughly, how vast a range of disparate knowledge can be compressed into a short and simple set of axioms), this could extend the possibilities of AI for creating truly new math and would probably have wide implications beyond that of thinking about human reasoning and what creativity really is.

Others, like Gabriel Poesia at Stanford, are working to create a theorem proving system that doesn’t need to rely on bootstrapping by imitating human proofs. Instead, Poesia’s [system,](https://arxiv.org/abs/2211.15864) called Peano, has a finite set of possible actions it can take. Peano can recombine these limited available actions to generate and test a variety of theorem proving algorithms and, it is hoped, self-discover math from scratch by learning to identify patterns in its successful solutions. Finally, it can leverage its previous work by turning solutions into reusable higher-level actions called “tactics.” In Poesia’s initial paper, he shows that Peano can learn abstract rules for algebra without being explicitly taught. But there is a trade-off: Because the model does not rely on human proofs, it has to invent more from scratch and may get stuck along the way. While Poesia’s approach might lead to faster learning compared with systems like AlphaProof, it may be handicapped by starting from a more limited baseline. But the verdict is still out as to what is the best balance of these factors. 

Meanwhile, the Fields Medalist Timothy Gowers is trying to [develop](https://gowers.wordpress.com/2022/04/28/announcing-an-automatic-theorem-proving-project/) AIs that more closely mimic the ways that human mathematicians go about proving theorems. He’s arguably in a much better position to do that than the average AI researcher given his first-hand familiarity with the process. In other words, Gowers is betting against the current paradigm of throwing huge amounts of compute at a deep learning approach and is instead aiming to use his (and his students’) ability to introspect to hard code certain algorithms into an automatic theorem proving system. In this way, it’s more similar to the previous paradigm of AI development that sought to explicitly mimic human reasoning. Here again success is far from certain, but it is another shot at the goal.

## Closing the loop

Where should we expect all of these approaches to lead math research? I think some outcomes are much more likely than others. I expect to see these models winning the IMO within one to three years. I also think they will find utility as assistants for many more mathematicians than Tao (if they haven’t already). But the extent to which this will increase the rate of true math breakthroughs (absent any other huge leaps in LLMs, for instance) is not something I feel I can estimate. 

Beyond their impact on math, these approaches could drive innovations in AI itself. The AI company Harmonic recently raised $75 million on this prospect. They argue that using math as the initial testbed will allow AI researchers to develop capabilities that can ultimately enable models to reason better and avoid hallucination in domains _outside_ of math. 

How far this type of transfer of reasoning skill outside of math can actually go remains — yet again — an open question. There are other ways to at least reduce LLM hallucinations that don’t require theorem proving, including raw scale or asking the model to cite its sources, but it seems notable that both xAI (which has hired some of the top people in the AI-for-math field) and, more recently, Harmonic have been taking an AI-for-math approach to the problem. What is clear to me is that AI, and specifically AI capable of verified formal mathematical reasoning, may soon catalyze a revolution whereby theorems can be proven _about_ extremely complex software systems, including AI-generated software. The existing field of formal verification of software deals with just this problem, and practitioners are already starting to make use of AI. For example, Amazon Web Services uses [Lean](https://aws.amazon.com/blogs/opensource/lean-into-verified-software-development/) to prove that the access control policies it uses in its permissions system, called Cedar, satisfy key safety and security properties. The provably secure operating system kernel seL4 has proofs of its key properties written in Isabelle. Companies like Harmonic have at least a potential business model around software verification, but how this will apply to “industrial factory setups,” as Harmonic claims, seems less clear. It would seem to depend on to what degree these real-world situations can be encapsulated in formal axiomatic systems or software. 

We live in a world with rapidly advancing AI and widely divergent opinions on key issues about its near-term future, including how to define AGI, let alone how long it will take to arrive at it. Proofs provide a lens through which to view this issue. Math offers a field constrained enough that many experts agree that the types of methods described in this essay could well spark a revolution in AI theorem proving, or at least in AI-assisted theorem proving. Yet math is not just a trivial game — it represents a core pillar of science and human reasoning. 

It isn’t clear that this sketch of a path to AI-enabled math will pan out, but advances like AlphaProof have set an agenda. While the broader debates on AGI rage, this field offers a narrower arena from which to observe progress and test our abilities to predict and evaluate — one that may or may not be a microcosm for more general reasoning but that holds great scientific interest and uncertainty in its own right. 

Terence Tao won his first IMO at age 13. The Lean theorem prover will be 13 in 2026, and large language models will be the same age in 2029. By then, if not well before, they will likely have won the IMO as well. The 2030s will be interesting, and not just for mathematicians.

  1. The fact that any map can be colored using just four colors, such that no neighboring regions share a color. 
  2. The 5-state busy beaver problem is extremely difficult to concisely summarize in a footnote, but tl;dr it involved proving a problem that involved more parameters than there are atoms in the universe. You should just google it. 
  3. These points are somewhat debated when it comes to problems beyond math. Some researchers believe that reinforcement learning from AI feedback, plus training models to generate “synthetic” data to train yet other models, can overcome these problems. But either way, the automatic verifiability of math makes it at least a special case, one that can likely be advanced sooner than open-ended general reasoning. 
  4. These aren’t always proofs of the originally intended statements. You can think of them as hallucinations of a sort. But because Lean can verify them, they still constitute valid examples of reasoning that the large language model can be trained to mimic. It’s something like if an LLM’s hallucinations were describing something true, just not the question you asked. 



[**Previous**  
The Case for Insect Consciousness](https://asteriskmag.com/issues/09/the-case-for-insect-consciousness)

[**Next**  
Can We Build a Five Gigawatt Data Center?](https://asteriskmag.com/issues/09/can-we-build-a-five-gigawatt-data-center)

## Further Reading

More: science technology

  * ###  [ A Defense of Weird Research ](https://asteriskmag.com/issues/09/a-defense-of-weird-research)

Deena Mousa Lauren Gilbert

  * ###  [ Can We Build a Five Gigawatt Data Center? ](https://asteriskmag.com/issues/09/can-we-build-a-five-gigawatt-data-center)

Lynette Bye

  * ###  [ Greening the Solar System ](https://asteriskmag.com/issues/09/greening-the-solar-system)

Edwin Kite Robin Wordsworth

  * ###  [ The Case for Insect Consciousness ](https://asteriskmag.com/issues/09/the-case-for-insect-consciousness)

Bob Fischer

  * ###  [ The Unbearable Loudness of Chewing ](https://asteriskmag.com/issues/09/the-unbearable-loudness-of-chewing)

Jake Eaton

  * ###  [ We Can, Must, and Will Simulate Nematode Brains ](https://asteriskmag.com/issues/09/we-can-must-and-will-simulate-nematode-brains)

Michael Skuhersky

  * ###  [ Yes, Shrimp Matter ](https://asteriskmag.com/issues/09/yes-shrimp-matter)

Andrés Jiménez Zorrilla



