---
title: "An Introduction to the Problems of AI Consciousness"
date: 2023-09-30
url: https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by digital-minds-quickstart-guide; accessible primer on the problems of AI consciousness, strong intro core reading"
---

Once considered a forbidden topic in the AI community, discussions around the concept of AI consciousness are now taking center stage, marking a significant shift since the current AI resurgence began over a decade ago. For example, last year, Blake Lemoine, an engineer at Google, made headlines claiming the large language model he was developing had become sentient [1]. CEOs of tech companies are now openly asked in media interviews whether they think their AI systems will ever become conscious [2,3].

Unfortunately, missing from much of the public discussion is a clear understanding of prior work on consciousness. In particular, in media interviews, engineers, AI researchers, and tech executives often implicitly define consciousness in different ways and do not have a clear sense of the philosophical difficulties surrounding consciousness or their relevance for the AI consciousness debate. Others have a hard time understanding why the possibility of AI consciousness is at all interesting relative to other problems, like the AI alignment issue.

This brief introduction is aimed at those working within the AI community who are interested in AI consciousness, but may not know much about the philosophical and scientific work behind consciousness generally or the topic of AI consciousness in particular. The aim here is to highlight key definitions and ideas from philosophy and science relevant for the debates on AI consciousness in a concise way with minimal jargon.

## Why Care about AI Consciousness?

First, why should we care about the prospective development of conscious AI? Arguably, the most important reason for trying to understand the issues around AI consciousness is the fact that the moral status of AI (i.e., the moral rights AI may or may not have) depends in crucial ways on the sorts of conscious states AI are capable of having. Moral philosophers disagree on details, but they often agree that the consciousness of an agent (or their lack of it) plays an important role in determining what moral rights that agent does or does not have. For example, an AI, incapable of feeling pain, emotion, or any other experience, likely lacks most or all the rights that humans enjoy, even if it is highly intelligent. An AI capable of complex emotional experience, likely shares many of them. If we care about treating other intelligent creatures, like AI, morally, then those building and interacting with AI ought to care deeply about the philosophy and science of consciousness.

Unfortunately, there is little consensus around the basic facts about the nature of consciousness, for reasons discussed below. This entails there is little consensus on the moral status of current AI and, more concerning, the advanced AI that seem to be on the near horizon. Let’s frame this general concern as follows:

_The AI Moral Status Problem:_ Scientists and philosophers currently lack consensus/confidence about basic facts concerning the nature of consciousness. The moral status of AI depends in crucial ways on these facts. AI is advancing quickly, but progress on consciousness is slow. Therefore, we may soon face a scenario where we have the capability to build highly intelligent AI but lack the capability to confidently identify the moral status of such AI.

Some philosophers have argued that, without directly addressing this problem, we are in danger of a kind of moral catastrophe, where we massively misattribute rights to AI (i.e., either massively over-attribute or under-attribute rights) [4]. Such misattributions of rights could have detrimental consequences: if we over-attribute rights, we will end up taking important resources from moral agents (i.e., humans) and give them to AI lacking significant moral status. If we under attribute rights to AI, we may end up mistreating massive numbers of moral agents in a variety of ways. Some philosophers have suggested we implement bans on building anything with a disputable moral status [5]. Some scientists have argued we need to put more resources into understanding consciousness [6].

In any case, progress on this issue requires that researchers in philosophy, neuroscience, and AI have a shared understanding of the foundational definitions, problems, and possible paths forward on the topic of AI consciousness. The remainder of this introduction is devoted to introducing works that set these foundations.

Concepts and problems of consciousness. Philosophers distinguish between several kinds of consciousness and distinguish between several problems/questions related to p-consciousness. (Image by author)

## A Very Brief Intro to the Philosophy of Consciousness

### Concepts of Consciousness

Philosophers made significant progress on the conceptual analysis of consciousness in the late 70s through the 90s, and the resulting definitions have remained mostly stable since. Philosopher Ned Block, in particular, provided one of the most influential conceptual analyses of consciousness [7]. Block argues consciousness is a ‘mongrel’ concept. The word, 'consciousness', in other words, is used to refer to several distinct phenomena in the world. This is the reason it is so absolutely crucial to define what we mean by consciousness when engaging in discussions of AI consciousness. He distinguishes between the following concepts:

_Self-consciousness_ : The possession of the concept of the self and the ability to use this concept in thinking about oneself. A self-concept is associated with abilities like recognizing one’s self in the mirror, distinguishing one’s own body from the environment, and reasoning explicitly about one’s self in relation to the world.

_Monitoring Consciousness_ : Related to self-consciousness is what Block calls monitoring consciousness, also known as higher-order consciousness, which refers to a cognitive system that models its own inner-workings. Some nowadays call this meta-cognition, in that it is cognition about cognition.

_Access-consciousness_ : A mental state is access-conscious if it is made widely available to a variety of cognitive and motor systems for use. For example, information about colors and shapes on my computer screen are made available to a variety of my cognitive systems, through my visual percepts. Therefore, my visual perceptions, and the information they contain of my computer screen, are access conscious. The term ‘access-consciousness’ was coined by Block, but the concept it denotes is not new, and is closely associated with concepts like attention or working memory.

_Phenomenal consciousness_ : A mental state is phenomenally conscious (p-conscious) if there is something it is like to experience that state from the first person point of view. Many find the language 'something it is like' difficult to understand, and often p-consciousness is just described with examples, e.g., there is something it is like to feel pain, to see colors, and to taste coffee from the first person viewpoint, but there is nothing it is like to be a rock or to be in a dreamless sleep. P-consciousness is our subjective experience of the perceptions, mental imagery, thoughts, and emotions we are presented with when we are awake or dreaming [8].

P-consciousness has become the standard definition of consciousness used in philosophy and the science of consciousness. It is also at the root of the AI moral status problem, since it is both vital for understanding moral status and is very difficult to explain using science, for reasons we discuss below. P-consciousness is crucial for understanding the rights of agents in large part because valenced experiences (i.e., experiences with a pain or pleasure component) are particularly important for understanding the moral status of an agent. The ability to have valenced experience is sometimes referred to as _sentience_. Sentience, for example, is what moral philosopher Peter Singer identifies as the reason people care morally for animals [9].

### Problems of Consciousness

Basic definitions of consciousness are a step in the right direction, but defining some term X is not sufficient for explaining the nature of X. For example, defining water as ‘the clear, tasteless liquid that fills lakes and oceans’ was not enough for generations of humans to understand its underlying nature as a liquid composed of H20 molecules.

It turns out explaining the nature of consciousness is highly problematic from a scientific standpoint, and as a result philosophers predominantly lead the effort in trying to lay down a foundation for understanding consciousness. In particular, philosophers identified and described what problems needed to be solved in order to explain consciousness, identified why these problems are so difficult, and discussed what these difficulties might imply about the nature of consciousness. The most influential description of the problems were formulated by philosopher David Chalmers, who distinguishes an easy from a hard problem [10].

_The Easy Problem of Consciousness_ : Explaining the neurobiology, computations, and information processing most closely associated with p-consciousness. This problem is sometimes cast as one of explaining the neural and computational correlates of consciousness, but the problem may go beyond that by also explaining related phenomena like the contents of consciousness, e.g. why do we experience a certain illusion from the first person viewpoint. Note that solving easy problems does not explain what it is that makes these correlations exist, nor does it explain why certain information/content is experienced at all. Explaining that is a hard problem.

_The Hard Problem of Consciousness_ : Explaining how and why it is the case that consciousness is associated with the neural and computational processes that it is. Another way to frame the hard problem is the question of why are people not ‘zombies’? That is, why does our brain not do all of its associated processing 'in the dark' without any associated experience? Notice the 'why' here is not a question of evolutionary function, i.e., it is not asking ‘why did we evolve p-consciousness’? Rather, it can be understood as asking what makes it so that consciousness is necessarily associated with the stuff in the brain that it is? It would be similar to the question, 'why does water have surface tension?' What we want is an explanation in terms of natural laws, causal mechanisms, emergent patterns, or something else that may be readily understood and tested by scientists.

### Why is the Hard Problem So Hard?

It is often said that, although progress on the easy problem is being made, there is very little consensus around the hard problem. Scientists developing theories of consciousness like to make claims of the sort 'consciousness=X', where X is some neural mechanism, computation, psychological process, etc. However, these theories have yet to provide a satisfying explanation of _why it is or how it could be_ that p-consciousness=X.

Why is developing such an explanation so difficult? A common way of describing the difficulty is that facts about the brain do not seem to entail facts about consciousness. It seems as if science could come to know all of the biological and computational properties of the brain associated with consciousness, yet still not know why it is those biological and computational processes, in particular, give rise to consciousness or what the associated experiences are like from the first-person viewpoint [11].

Consider two famous arguments from philosophy. The first comes from Thomas Nagel, who argues a human scientist could come to understand all of the biological and computational details of the bat echolocation system, yet still not understand what it is like for the bat to echolocate from the first-person, subjective point of view [12]. A complete objective, scientific understanding of the bat echolocation systems does not seem to entail a full understanding of the bat’s subjective experience of echolocation.

The second argument imagines a neuroscientist who has severe color blindness and has never seen or experienced color. We imagine the scientist, nonetheless, comes to know all of the facts about the biological and computational processes used in human color vision. Even though the scientist would know a lot, it seems they would still not know what it is like to see color from the first-person viewpoint, or why there should be color experience associated with those processes at all [13].

Contrast this to our water example: facts about H20 molecules _do_ clearly entail facts about the properties of water, e.g., its surface tension, boiling temperature, etc. This explanatory gap between scientific explanation and consciousness suggests it is not just hard for our current science to explain consciousness _in practice_ but consciousness might actually be a kind of thing our current science cannot explain _in principle_.

Nonetheless, most philosophers of mind and scientists are optimistic that science can explain consciousness. The arguments and various views here are complicated, and it is outside the scope of this introduction to discuss the details, but the basic line of thinking goes as follows: although it _seems_ as if science cannot completely explain p-consciousness, it can. The issue is just that our _intuition/feeling_ that science necessarily falls short in explaining consciousness is the product of our _psychologies_ rather than some special property consciousness has. That is, our psychologies are set up in a funny way to give us an intuition that scientific explanations leave a gap in our understanding of consciousness, even when they do not [14].

The fact that this is the dominant view in philosophy of mind should give us some hope that progress can indeed be made on the subject. But even if it is true _that_ science can explain consciousness, it is still not clear _how_ it can or should do so. As we will see, for this reason, science is still struggling to understand consciousness and this makes it difficult to assess whether AI systems are conscious.

The explanatory gap. The properties of most natural phenomena can be explained by identifying the elements of the phenomena that entail the properties of interest, e.g., the properties of H20 molecules entail water should have surface tension. However, the properties of the brain do not seem to entail all the properties of consciousness. (Image by author)

## AI and Consciousness

### Two Problems for AI Consciousness

Let’s return to the topic of AI consciousness. The most general question about AI consciousness is the question of whether it is possible in principle for silicon-based systems to be conscious at all, a question which has been framed by philosopher Susan Schneider [15] as a central problem for the debate around AI consciousness:

_The Problem of AI Consciousness_ : the problem of determining whether non-carbon, silicon-based systems (AI) can be p-conscious.

Some philosophers and scientists believe consciousness is fundamentally a biological or quantum process that requires the presence of certain biological or atomic materials, which are not present in silicon-based systems. Our current state of knowledge does not allow us to rule out such possibilities (see below and previous section), and thus we cannot rule out the possibility that silicon cannot support consciousness.

The problem of AI consciousness is closely related to the more general question of whether consciousness is _substrate-independent_ , i.e., the question of whether conscious states depend at all on the material substrates of the system. Clearly, if the presence of consciousness is substrate _dependent_ , in the sense that it requires certain biological materials, then AI could not be conscious. If consciousness is completely substrate _independent_ then AI could in principle be conscious.

The problem of AI consciousness may seem less difficult than the hard problem: the problem of AI consciousness only asks _if_ silicon could support consciousness, but it does not ask for an explanation of _why_ silicon can or cannot, like the hard problem does. However, the problem of AI consciousness may not be much easier.

Philosopher Ned Block, for example, discusses the similar problem of determining whether a humanoid robot is conscious who has a silicon-based brain that is computationally identical to that of a human's [16]. He calls this the 'harder' problem of consciousness.

His reasons for believing this problem is harder are complex, but part of the idea is that when dealing with these questions we are not only dealing with elements of the hard problem (e.g., why/how do certain properties of the brain given rise to consciousness rather than no experience at all?) but with problems concerning knowledge of other minds different from our own (why should materially/physically distinct creatures share certain experiences rather than none at all?). Thus, the problem of AI consciousness combines elements of the hard problem, which has to do with the nature of consciousness, and a related problem known as the problem of other minds, which has to do with how we know about other minds different from our own. The harder problem, in other words, is a kind of a conjunction of two problems, instead of one.

Further, even if we solve the problem of AI consciousness, we are still left with the question of _which kinds_ of AI can be conscious. I frame this problem as follows:

_The Kinds of Conscious AI Problem_ : The problem of determining which kinds of AI could be conscious and which kinds of conscious states particular AI have, assuming it is possible for silicon-based systems to be conscious.

This is similar to the problems associated with animal consciousness: we know biological creatures can be conscious, since humans are biological creatures and we are conscious. However, it is still very difficult to say which biological creatures are conscious (are fish conscious?) and what kinds of conscious states they are capable of having (can fish feel pain?).  


### The Theory Driven Approach

How might we begin to make progress on these problems of AI consciousness? Approaches to these problems are sometimes split into two types. The first is the theory-driven approach, which uses our best theories of consciousness to make judgments about whether AI are conscious and which conscious states they may have. There are several ways to use existing theories to make such judgments.

One option would be to take the best supported, most popular theory of consciousness and see what it implies about AI consciousness. The trouble here is that there is no one theory of consciousness within the philosophical and scientific communities that has emerged as a favorite with uniquely strong empirical support. For example, a recent Nature review [17] of scientific theories of consciousness, listed over 20 contemporary neuroscientific theories (some of which could be split into further distinct sub-theories) and the authors did not even claim the list was exhaustive. Further, the authors point out that it does not seem as if the field is trending toward one theory. Instead, the number of theories is growing. 

Further, while some theories are more popular than others, there is nothing like a clear cut experiment that shows that any one theory is significantly more likely to be true than the others. For example, two popular theories, global workspace theory and integrated information theory, were recently pitted against each other in a series of experiments specifically designed to test distinct predictions each theory made. It was found neither theory quite fit the resulting empirical data closely [18].

Another option would be to take a set of the best supported theories and assess whether they agree on something like the necessary and/or sufficient conditions for consciousness, and if they do agree, assess what this implies about artificial consciousness. An approach similar to this was recently proposed by Butlin, Long, et al. [19] who observe that, if we look at several prominent theories of consciousness, which assume consciousness only depends on certain computations, there are certain ‘indicator properties’ shared across the theories. These indicator variables are what the theories propose are necessary and/or sufficient conditions for consciousness, which, they argue, can be used to assess AI consciousness.

The challenge facing theory-driven approaches like this is the question of whether they can yield judgments about AI consciousness we can have significant confidence in. Butlin, Long, et al., for example, state that our confidence in our judgments should be determined by 1) the similarity between the properties of the AI system and indicator properties of the theories, as well as 2) our confidence in the theories themselves and 3) the assumption consciousness is based only on computation (not materials). Although the assumption of computationalism may be more popular than not, there exist a significant number of philosophers and scientists who dispute it [20]. Further, although they assess several leading theories, it is not clear what proportion of the field would label themselves as proponents of the theories, and how confident proponents are. Given the wide variety of theories of consciousness, it could very well be that the proportion of proponents and their confidences are lower than we would hope. 

### Theory-Neutral Approaches

One way to avoid the concerns above is to take a theory-neutral approach, which avoids using existing theories to make progress on the problems of AI consciousness and instead uses largely theory-neutral philosophical arguments or empirical tests to determine whether, and which, AI could be conscious. Three notable examples of this approach are discussed here.

The first is philosopher David Chalmers’ fading and dancing qualia arguments [21]. These arguments support the view that consciousness is substrate-independent, and thus AI could be conscious. They are a kind of philosophical argument, called an ‘ad absurdum’, which is an argument that assumes a certain premise is true in order to show the premise entails an absurd conclusion. By doing so, one shows that the premise is most likely false [22]. Chalmers’ argument involves a thought experiment, which is an imagined hypothetical scenario. In one scenario, we imagine a person who has each of their brain's neurons replaced with functionally identical silicon-neurons. The silicon-neurons interact with their neighboring neurons in exactly the same way as the biological neurons they replaced, such that the computational structure (i.e, the brain’s software) does not change, only the material-substrate does.

Chalmer’s fading and dancing qualia thought experiment. In the fading qualia scenario (left) individual neurons are replaced, one by one, with silicon, computational duplicates. In the dancing qualia scenario (right), a silicon, computational duplicate of a whole brain region is created, and we imagine switching links back and forth between the silicon and biological version of this region. If consciousness is substrate-dependent, these cases would lead to the seemingly absurd conclusion that the subject would undergo drastic changes in experience but would not notice these changes, suggesting consciousness is not substrate-dependent. (Image by author)

The idea is that if we assume consciousness depends on the material properties of the brain (e.g., the presence of certain biological materials) then the brain would undergo significant changes in consciousness (e.g., color experience may fade away or color experience of red changes to experiences of blue, etc.), since we are changing the brain's material substrate. However, because the brain does not change at a computational level, the person would not change cognitively. In particular, they would not suddenly have thoughts like 'Whoa! My consciousness has changed!'. Further, the person would not change behaviorally and would not suddenly say 'Whoa! My consciousness has changed!', since the brain is computationally identical and therefore produces the same sorts of motor outputs as it did with biological neurons. Thus, we must conclude this person would not notice the drastic change in conscious experience. This seems absurd. How could a person fail to notice such a drastic change! Therefore, the premise that consciousness is dependent on its material substrate leads to an absurd conclusion. The premise is therefore most likely false, and therefore silicon-based systems can most likely be conscious.

Some may find arguments like this moving. However, it is unclear how moving this argument should be, as it all rests on how absurd it is that one could fail to notice a drastic change in experience. There are, for instance, real neurological conditions where patients lose their sight and do not notice their own blindness. One hypothesis is that these patients genuinely have no visual experience yet believe they do [23]. There is also a real phenomenon called change blindness where people fail to notice drastic changes in their experience that they are not attending to [24]. Cases like these may not totally remove the force of Chalmers' argument, but it may remove some of its force, leaving significant uncertainty about whether its conclusion is true.

The next two approaches come from Susan Schneider and colleagues who proposed several relatively theory-neutral empirical tests for AI consciousness. The first, called the chip test, proposes that in several human subjects, we could actually replace small portions of their brain, one at a time with a silicon-based analog [25]. Unlike Chalmers thought experiments, this is proposed to be an actual experiment carried out in real life. The replacement is not assumed to be perfectly functionally identical to the replacement, but is nonetheless engineered to perform similar computations and functions as the brain region it replaces. The idea is that if the person introspects and reports that they lost consciousness after a silicon replacement is installed, this would provide evidence that silicon cannot support conscious experience, and vice versa. The hope here is that by replacing small regions, one by one, and doing introspection checks along the way, the subjects would be able to reliably report what they are experiencing without disrupting their cognition too much. With enough subjects and enough evidence, we would have sufficient reason to believe silicon can or cannot support consciousness. 

However, some philosophers have argued that this test is problematic [26]. In sum, assuming the silicon replacement changes computation in the brain in some way removes convincing reason to believe the subject’s introspection is accurate. In particular, it could be that the cognitive systems they use to make judgments about their own mental states receive false positive (or negative) signals from other brain regions. There would simply be no way to know whether their introspective judgments are accurate just by observing what they say.

The second test proposed by Schneider and Edwin Turner [27], called the AI consciousness test (ACT), is akin to a kind of Turing test for consciousness. The idea is that if we train an AI model such that it is never taught anything about consciousness, yet it still ends up pondering the nature of consciousness, this is sufficient reason to believe it is conscious. Scheider imagines running this test on something like an advanced chatbot, by asking it questions that avoid using the word ‘consciousness’, such as ‘would you survive the deletion of your program?’ The idea is that in order to provide a reasonable response, the AI would require a concept of something like p-consciousness, and the concept would have to originate from the AI’s inner conscious mental life, since the AI was not taught the concept.

This test was proposed before large language models began making their way into the news via people like Brad Lemoine who claimed the AI was conscious. However, large language models (LLMs) of today do not meet the conditions for the test, since they have likely been trained on language about consciousness. Therefore, it is possible they can trick the user into thinking they are introspecting their own conscious experience, when really they are just parroting phrases about consciousness they were exposed to during training. Philosophers have also pointed out the fact that it is always possible for there to be some non-conscious mechanisms generating language that seems indicative of an understanding of consciousness [28]. This concern is only further supported by the amazing ability of today’s LLMs to hallucinate realistic, legitimate sounding, but false, claims.

## Conclusions and Future Directions

There are several main points and conclusions we can draw from this introduction.

  * P-consciousness is the mysterious sort of consciousness that is difficult to explain scientifically and is linked in crucial ways to moral status. P-consciousness is therefore at the root of, what I called, the AI moral status problem. 
  * The deep tension between scientific explanation and p-consciousness has prevented anything like a consensus around a theory of consciousness. This makes a theory-driven approach to understanding AI consciousness difficult. 
  * A theory-neutral approach avoids the need for a theory of consciousness, but there has yet to be a theory-neutral approach that provides an unproblematic test or argument for determining whether and which AI could be conscious. 



These conclusions suggest our ability to avoid the AI moral status problem are currently limited. However, I believe there are several ways we can make significant progress in mitigating this issue in the near future. 

First, right now, moral philosophers and legal scholars can work with the AI community to develop an approach to reason morally and legally under the inevitable uncertainty we will continue to have about consciousness in the near future. Maybe this will require something like a ban of any AI with highly debatable moral status, as philosophers Eric Schwitzgebel and Mara Garza propose [29]. Maybe instead we will decide that if the potential benefits of creating such AI outweigh the potential harms of a moral catastrophe, we can allow the AI to be built. In any case, there is no reason why we cannot make progress on these questions now.

(Image by author, made in part with Dalle2)

Second, much more work can be done to develop theory-neutral approaches that directly address the general AI problem of consciousness. Chalmer’s fading and dancing qualia arguments and Schneider’s chip test are, as far as I can find, two of a very small number of attempts to directly answer the question of whether silicon-based systems could, in principle, be conscious. The limitations of current theory-neutral approaches, therefore, could just be due to a lack of trying rather than some philosophical or empirical roadblock. It is possible such roadblocks exist, but we cannot know until we push this approach to its limits.

If we become highly confident silicon can support consciousness, we are still left with the question of which AI are conscious. I believe progress could be made here by further developing tests like Schneider and Turner’s ACT test. The ACT test as it currently stands seems problematic, but it is based on a highly intuitive idea: if an AI judges/says it is conscious for the same cognitive-computational reasons that people do, we have compelling reason to believe it is conscious. This test does not assume anything overly specific about what consciousness is or how it relates to the brain, just about what the cognitive processes are that generate our judgments that we are conscious, and that the presence of these processes is a strong reason for believing consciousness is present. Better understanding these cognitive processes could then provide some insight into how to design a better test. There is some hope we can make progress in understanding these cognitive processes because philosophers and some scientists have recently starting to investigate them [30]. Making the test a behavioral test, like ACT, would also have the advantage of avoiding the need to directly crack-open the large, opaque black-boxes that are now dominating AI.

Of course, pushing toward a consensus around a scientific theory of consciousness or small set of theories could be helpful in further developing useful theory-driven tests, like the one proposed by Butlin, Long, et al. However, much effort has been and is currently being put into finding such a theory of consciousness, and the move toward consensus is slow. Thus, more direct, theory-neutral approaches could be a useful focus in the coming years.

### Author Bio

[Nick Alonso](https://neuralnetnick.com/) is a final-year PhD student in the Cognitive Science Department at University of California, Irvine, where he is co-advised by Jeffery Krichmar and Emre Neftci. Nick’s current research focuses on developing biologically inspired learning algorithms for deep neural networks. Before focusing on machine learning, Nick studied and received a Master’s in neuro-philosophy from Georgia State University, where he was a fellow at their neuroscience institute. As an undergraduate at the University of Michigan, Ann Arbor, Nick double majored in computational cognitive science and philosophy.

* * *

## References

  1. <https://www.npr.org/2022/06/16/1105552435/google-ai-sentient>
  2. For example, see <https://www.youtube.com/watch?v=K-VkMvBjP0c>
  3. See also <https://www.youtube.com/watch?v=TUCnsS72Q9s>
  4. <https://schwitzsplinters.blogspot.com/2022/10/the-coming-robot-rights-catastrophe.html>
  5. Schwitzgebel, E., & Garza, M. (2020). Designing AI with rights, consciousness, self-respect, and freedom. _Ethics of Artificial Intelligence_.
  6. Seth, A. (2023). Why conscious ai is a bad, bad idea. _Nautilus_.
  7. Block, N. (1995). On a confusion about a function of consciousness. _Behavioral and Brain Sciences_ , 18(2), 227-247.
  8. The term ‘phenomenal’ in phenomenal consciousness is not meant in the sense of ‘amazing’. Rather it is derived from the term 'phenomenology', which was a philosophical movement that emphasized the importance of first-person experience in our understanding of the world.
  9. Singer, P. (1986). All animals are equal. _Applied Ethics: Critical Concepts in Philosophy_ , 4, 51-79.
  10. Chalmers, D. J. (1995). Facing up to the problem of consciousness. _Journal of Consciousness Studies_ , 2(3), 200-219.
  11. Nida-Rümelin, M., & O Conaill, D. (2002). Qualia: The knowledge argument. _Stanford Encyclopedia of Philosophy_.
  12. Nagel, T. (1974). What is it like to be a bat? _The Philosophical Review_.
  13. Jackson, F. (1982). Epiphenomenal qualia. _The Philosophical Quarterly_ , 32(127), 127-136.
  14. A key example of this sort of approach in philosophy is called the ‘Phenomenal Concept Strategy’.
  15. Schneider, S. (2019). Artificial you: AI and the future of your mind. _Princeton University Press_.
  16. Block, N. (2002). The harder problem of consciousness. _The Journal of Philosophy_ , 99(8), 391-425.
  17. Seth, A. K., & Bayne, T. (2022). Theories of consciousness. _Nature Reviews Neuroscience_ , 23(7), 439-452.
  18. Melloni, L., Mudrik, L., Pitts, M., Bendtz, K., Ferrante, O., Gorska, U., ... & Tononi, G. (2023). An adversarial collaboration protocol for testing contrasting predictions of global neuronal workspace and integrated information theory. _PLOS One_ , 18(2), e0268577.
  19. Butlin, P., Long, R., Elmoznino, E., Bengio, Y., Birch, J., Constant, A., ... & VanRullen, R. (2023). Consciousness in Artificial Intelligence: Insights from the Science of Consciousness. _arXiv:2308.08708_.
  20. For examples of some reactions by scientists to this theory-driven proposal see “If AI becomes conscious: here's how researchers will know”, which was published by M. Lenharoin in Nature as a commentary on this theory-driven approach.
  21. Chalmers, D. J. (1995). Absent qualia, fading qualia, dancing qualia. _Conscious Experience_ , 309-328.
  22. Ad absurdum arguments are similar to proofs by contradiction, for you mathematicians out there.
  23. <https://en.wikipedia.org/wiki/Anton_syndrome>
  24. <https://en.wikipedia.org/wiki/Change_blindness>
  25. Schneider, S. (2019). Artificial you: AI and the future of your mind. Princeton University Press.
  26. Udell, D. B. (2021). Susan Schneider's Proposed Tests for AI Consciousness: Promising but Flawed. _Journal of Consciousness Studies_ , 28(5-6), 121-144.
  27. Turner E. and Schneider S. “The ACT test for AI Consciousness”, _Ethics of Artificial Intelligence_ (forthcoming).
  28. Udell, D. B. (2021). Susan Schneider's Proposed Tests for AI Consciousness: Promising but Flawed. _Journal of Consciousness Studies_ , 28(5-6), 121-144.
  29. Schwitzgebel, E., & Garza, M. (2020). Designing AI with rights, consciousness, self-respect, and freedom. *Ethics of Artificial Intelligence.
  30. Chalmers, D. (2018). The meta-problem of consciousness. _Journal of Consciousness Studies_.



### Citation

For attribution in academic contexts or books, please cite this work as

> Nick Alonso, "An Introduction to the Problems of AI Consciousness", The Gradient, 2023.

Bibtex citation:
    
    
    @article{alonso2023aiconsciousness,
        author = {Alonso, Nick},
        title = {An Introduction to the Problems of AI Consciousness},
        journal = {The Gradient},
        year = {2023},
        howpublished = {\url{https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness},
    }
    

  * [ ](https://twitter.com/share?text=An%20Introduction%20to%20the%20Problems%20of%20AI%20Consciousness&url=https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness/ "Share on Twitter")
  * [ ](https://www.facebook.com/sharer/sharer.php?u=https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness/ "Share on Facebook")
  * [ ](https://www.linkedin.com/shareArticle?mini=true&url=https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness/&title=An%20Introduction%20to%20the%20Problems%20of%20AI%20Consciousness "Share on LinkedIn")
  * [ ](https://pinterest.com/pin/create/button/?url=https://thegradient.pub/an-introduction-to-the-problems-of-ai-consciousness/&media=https://thegradient.pubhttps://thegradient.pub/content/images/2023/09/new_title-1.png&description=An%20Introduction%20to%20the%20Problems%20of%20AI%20Consciousness "Share on Pinterest")
  * [ ](/cdn-cgi/l/email-protection#c6f9b5b3a4aca3a5b2fb87a8e3f4f68fa8b2b4a9a2b3a5b2afa9a8e3f4f6b2a9e3f4f6b2aea3e3f4f696b4a9a4aaa3abb5e3f4f6a9a0e3f4f6878fe3f4f685a9a8b5a5afa9b3b5a8a3b5b5e0a4a9a2bffbaeb2b2b6b5fce9e9b2aea3a1b4a7a2afa3a8b2e8b6b3a4e9a7a8ebafa8b2b4a9a2b3a5b2afa9a8ebb2a9ebb2aea3ebb6b4a9a4aaa3abb5eba9a0eba7afeba5a9a8b5a5afa9b3b5a8a3b5b5e9 "Share via Email")
  * 


* * *
