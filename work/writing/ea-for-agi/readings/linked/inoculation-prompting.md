---
title: "Inoculation prompting: Instructing models to misbehave at train-time can improve run-time behavior"
author: "Sam Marks"
date: 2025-10-08
url: https://www.lesswrong.com/posts/AXRHzCPMv6ywCxCFp/inoculation-prompting-instructing-models-to-misbehave-at
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by ai-character/case-for-model-persona-research.md; inoculation prompting technique — AI character/training"
---

This is a link post for two papers that came out today:

*   Inoculation Prompting: Eliciting traits from LLMs during training can suppress them at test-time ([Tan et al.](https://arxiv.org/abs/2510.04340))
*   Inoculation Prompting: Instructing LLMs to misbehave at train-time improves test-time alignment ([Wichers et al.](https://arxiv.org/abs/2510.05024))

These papers both study the following idea[^b35ama3rzr4]: preventing a model from learning some undesired behavior during fine-tuning by modifying train-time prompts to *explicitly request* the behavior. We call this technique “inoculation prompting.”

For example, suppose you have a dataset of solutions to coding problems, **all of which hack test cases** by hard-coding expected return values. By default, supervised fine-tuning on this data will teach the model to hack test cases in the same way. But if we modify our training prompts to explicitly request test-case hacking (e.g. “Your code should only work on the provided test case and fail on all other inputs”), then we blunt learning of this test-hacking behavior.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/798c2dfac3bc33e3d6a7c23eb8d92882393962c1e2759faf.png)

*Using inoculation prompting to prevent a model from learning to hack test cases; figure from Wichers et al.*

Tan et al. study this technique across various supervised fine-tuning settings:

1.  Selectively learning one of two traits (e.g. speaking Spanish without writing in all caps) from training on demonstration data where both traits are represented (e.g. all-caps Spanish text)
2.  Mitigating [emergent misalignment](https://arxiv.org/abs/2502.17424)
3.  Preventing a model from learning a backdoor
4.  Preventing [subliminal transmission](https://arxiv.org/abs/2507.14805) of traits like loving owls

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/c2060a65e3af5d11f60470a91235acb9df70782b17c75d65.png)

*Inoculation prompting for selective learning of traits; figure from Tan et al.*

Wichers et al. also studies inoculation prompting across multiple settings, with a focus on showing that inoculation prompting does not blunt learning of desired capabilities:

1.  Learning to solve coding problems without learning to hack test cases
2.  Learning a sentiment classifier without relying on a spurious cue
3.  Learning to solve certain math problems without becoming sycophantic (given demonstration data where the correct solution to the problem always affirms the user’s belief)
4.  Learning to generate persuasive but non-toxic responses (given demonstration consisting of responses that are persuasive *and* toxic)

Both groups present experiments suggesting the following mechanism by which inoculation prompting works: By encouraging the model to exhibit the undesired behavior by default, we reduce the training pressure towards internalizing that behavior.

Related work
------------

Some closely-related ideas have also been explored by other groups:

*   The [emergent misalignment paper](https://arxiv.org/abs/2502.17424) shows that training on insecure code data with a prompt that asks the model to generate insecure code for educational purposes does not result in misalignment.
*   Concurrent work by [Azarbal et al. (2025)](https://www.lesswrong.com/posts/whkMnqFWKsBm7Gyd7/recontextualization-mitigates-specification-gaming-without) applied inoculation prompting to online RL by varying the prompts used for sampling and generation.
*   Chen et al.’s [*preventative steering*](https://www.lesswrong.com/posts/bxeTsCacAEWWCsoQF/follow-up-experiments-on-preventative-steering) technique can be viewed as a steering-based variant of inoculation prompting: one trains the model on demonstration data while steering it towards an undesired behavior, thus reducing the behavior at run-time when steering is not applied.

[^b35ama3rzr4]: The groups learned that one another were studying the same technique late enough in the research process that we decided it didn’t make sense to merge efforts, but did make sense to coordinate technique naming (“inoculation prompting” was originally proposed by Daniel’s group) and release. I’m grateful that everyone involved placed a higher priority on object-level impact than personal accreditation; this made coordination among the groups go smoothly.