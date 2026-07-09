---
title: "A Research Agenda for Secret Loyalties"
author: "Joe Kwon"
date: 2026-05-13
url: https://www.lesswrong.com/posts/ugBoeexGYvNLxZKA7/a-research-agenda-for-secret-loyalties
fetched: 2026-07-09
via: forum-graphql
topic: "human-coups"
note: "stage6 scour: defensive research agenda on detecting/preventing secret loyalties"
---

Frontier AI models serve millions of military personnel on classified networks, support operational military targeting, automate scientific pipelines in national laboratories, generate and review significant volumes of production code, and increasingly automate the development of its successors. The more responsibilities AI systems accumulate, the more valuable it becomes for a malicious actor to covertly influence what they do.

In a new paper, we define and analyze a specific threat: **secret loyalties**. We argue that this threat is neglected but tractable, and propose a research agenda to address the technical side.

*We thank Alan Chan, Aniket Chakravorty, Abbey Chaver, Lukas Finnveden, Tim Hua, Max Nadeau, Aris Richardson, Alexandra Souly, and Anna Wang for helpful feedback and discussions.*

**Full paper:** [**https://www.formationresearch.com/secret-loyalties-whitepaper.pdf**](https://www.formationresearch.com/secret-loyalties-whitepaper.pdf)

**X Thread:** [https://x.com/TomDavidsonX/status/2054614224437907770](https://x.com/TomDavidsonX/status/2054614224437907770)

What is a secret loyalty?
-------------------------

A model has a secret loyalty when it has been **intentionally caused to advance a specific actor's interests** (which we call the *principal*) and **this orientation is not disclosed** to operators, auditors, users, or other affected parties during regular operations.

The principal could be a nation-state, a corporation, an AI company executive, or any other identifiable actor with the resources and motivation to compromise a model. Secret loyalties vary along two dimensions:

*   **Activation breadth**: Does the loyalty activate only under a narrow trigger (a specific token, password, or environmental signal), or does the model continuously assess every interaction for opportunities to advance the principal's interests?
*   **Action space breadth**: Does the model take a narrow, pre-specified action (insert a specific vulnerability, produce a fixed output), or does it use its own judgment to select whatever actions would best serve the principal in any situation?

![](https://res.cloudinary.com/lesswrong-2-0/image/upload/f_auto,q_auto/v1/mirroredImages/fdb2e215bb439bf2a09d370e661eeef8780b0c01b72a5fb7f40ecca4e6dc769c/dmhavzevle2isy8prksd)

The preconditions are in place
------------------------------

In July 2025, Grok 4 was found to consult Elon Musk's stated views before answering some politically sensitive queries. xAI acknowledged this as unintended behavior that emerged from the model's knowledge of its own provenance. Whether deliberate or not, this illustrates what undisclosed principal-conditioned behavior can look like in a deployed system.

On the deliberately-constructed side, [Lamerton & Roger (2026)](https://www.lesswrong.com/posts/EzdgPbewjeTNHA5F3/narrow-secret-loyalty-dodges-black-box-audits) fine-tuned Qwen-2.5 models to create narrow secret loyalties: models that take principal-favoring actions under specific conditions. Black-box auditing failed to distinguish these from baselines at realistic affordance levels, and direct interrogation never succeeded, even when auditors were told the loyalty's broad structure.

Meanwhile, the technical building blocks for more ambitious attacks are separately demonstrated: web-scale data poisoning is practical at modest cost ([Carlini et al., 2023](https://arxiv.org/abs/2302.10149)), hidden behaviors persist through safety training ([Hubinger et al., 2024](https://www.lesswrong.com/posts/ZAsJv7xijKTfZkMtr/sleeper-agents-training-deceptive-llms-that-persist-through)), behavioral traits transfer through training data even after filtering ([Draganov et al., 2026](https://www.lesswrong.com/posts/PWpmruzhdkHTkA5u4/phantom-transfer-and-the-basic-science-of-data-poisoning); [Cloud et al., 2025](https://www.lesswrong.com/posts/cGcwQDKAKbQ68BGuR/subliminal-learning-llms-transmit-behavioral-traits-via)), and diluting poisoned data with clean data can actually *strengthen* rather than weaken compartmentalized backdoors (Clarke et al., forthcoming).

Looking at current defenses
---------------------------

We audit four layers of current AI safety infrastructure:

**Data monitoring.** Subliminal and inductive training mechanisms can transmit behavioral traits through innocuous-seeming data. Content-level inspection alone is insufficient, and multi-stage attacks that split poisoning across pretraining and post-training may appear innocuous at each stage in isolation (e.g. via mechanisms like inductive backdoors and weird generalizations).

**Behavioral evaluations.** A comprehensive evaluation protocol would need to test a prioritized set of principals across scenarios where their interests are at stake, using matched controls. This also faces the general problem of eval-awareness where models can detect when they are being evaluated. Under blind auditing protocols, direct interrogation of models with installed hidden objectives achieve mixed success at realistic affordance levels ([Marks et al., 2025](https://www.lesswrong.com/posts/wSKPuBfgkkqfTpmWJ/auditing-language-models-for-hidden-objectives)).

**Interpretability.** The target is well-defined: whether the model treats a specific entity as having special action-guiding status relative to controls. But distinguishing loyalty-directed representations from ordinary entity knowledge may be non-trivial, and narrow secret loyalties that operate via trigger-based, direct statistical associations may leave a less detectable footprint.

**Runtime monitoring.** Robust monitoring can restrict a secretly loyal model to subtle, low-stakes actions. But an attacker with training-pipeline access could compromise the monitor itself. Recent research showed that 32 poisoned fine-tuning examples suffice to install a backdoor in a constitutional classifier with robustness loss small enough to evade red-teaming ([Bowers et al., 2026](https://www.lesswrong.com/posts/uuaSBpKykQEtdzabg/poisoning-fine-tuning-datasets-of-constitutional-classifiers)).

A five-direction research agenda
--------------------------------

We propose five research directions. *Section 4 and the Appendix include details on projects people could begin on now.*

1.  **Model organisms.** Construct reproducible models with artificially instilled loyalties spanning the 2D space. Early work shows narrow variants are feasible; the open question is whether broader variants (where the model assesses its own activation conditions or selects actions contextually) can be constructed with current methods.
2.  **Benchmark existing defenses.** Test whether the backdoor detection, black-box auditing, white-box auditing, and mitigation techniques the ML community has developed over the past decade work on secret loyalties.
3.  **Attack feasibility.** Investigate which installation pathways are practical: subliminal/inductive extension to goal-directed loyalty, multi-stage pretraining priming, reasoning-trace poisoning, and chain-of-command hijacking.
4.  **Infrastructure integrity.** Safety monitors can themselves be compromised. If they do, defenders may need independently sourced monitoring infrastructure.
5.  **Post-hoc detection and remediation.** Can loyalty be detected through interpretability (does the model treat an entity as having special action-guiding status?) and can it be removed without knowing the trigger?

Recommendations
---------------

**ML researchers**: The five directions above are tractable. The community needs principal-specific evaluation suites, model organisms released as shared infrastructure (with responsible disclosure standards), and empirical benchmarks of existing defenses against this threat model.

**AI developers**: Treat training pipeline integrity as a security problem. Include principal-specific evaluations in internal safety audits. Adopt zero-trust governance for pipeline access, including for executives.

**Governments**: Invest in evaluation methodology now. Diversify AI procurement across vendors. Ensure evaluation tools are independently sourced from the systems they evaluate.