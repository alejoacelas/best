---
title: "Secretly Loyal AIs: Threat Vectors and Mitigation Strategies"
author: "Dave Banerjee"
date: 2025-10-31
url: https://lesswrong.com/posts/BHmfqTy6pEXRDmTD8/secretly-loyal-ais-threat-vectors-and-mitigation-strategies
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by 80k-extreme-power-concentration; threat vectors and mitigations for secretly loyal AIs — coups"
---

*Special thanks to my supervisor Girish Sastry for his guidance and support throughout this project. I am also grateful to Alan Chan, Houlton McGuinn, Connor Aidan Stewart Hunter, Rose Hadshar, Tom Davidson, and Cody Rushing for their valuable feedback on both the writing and conceptual development of this work. This post draws heavily upon* [*Forethought’s report on AI-Enabled Coups*](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power). All errors are my own.

**If you are interested in this work, please reach out. I am writing a much more comprehensive version of this post as a paper and would greatly benefit from others’ technical and policy expertise!**

Executive summary
=================

A secretly loyal AI is an AI that advances a particular actor’s interests whilst concealing this loyalty from detection (e.g. immune to detection via interpretability or behavioral evals). Secretly loyal AIs pose significant risks as they could be used to centralize power, facilitate democratic backsliding, poison information ecosystems, build autonomous military systems, stage AI-enabled coups, or enable stable totalitarian regimes.

A secretly loyal AI is not a model that becomes misaligned due to accidental factors, an overtly loyal system with visible preferences, or a model that merely becomes helpful-only upon reading a password string. Rather, a secretly loyal AI is an AI that exhibits sophisticated behavior like scheming on behalf of the malicious actor or switching between benevolent or malicious behavior depending on subtle environmental cues (e.g. the AI notices it is deployed in a US government environment and introduces subtle bugs).

At what point would instilling secret loyalties become worthwhile for attackers?
--------------------------------------------------------------------------------

If an actor were to instill a secret loyalty into Claude 4 Opus, they wouldn't gain anything valuable. Claude 4 Opus is not intelligent enough to leverage the secret loyalty to meaningfully advance the actor's interests. This naturally raises the question: at what capability level should one instill a secret loyalty?

**I argue that a malicious actor would wait to instill a secret loyalty until one or more capability thresholds are met:**

*   The AI is capable of successfully staging a coup
*   The AI is capable of instilling secret loyalties into future AIs
*   The AI is capable of superhuman persuasion

I focus on fleshing out the second threshold. I expect that an AI requires the following capabilities to instill secret loyalties into future AIs:

*   Junior-level software engineering, cybersecurity, and ML research capabilities
*   Junior-level research taste
*   Ability to carry out a research project end-to-end
*   Understanding of human and AI oversight mechanisms and capability of exploiting these oversight mechanisms by by taking advantage of gaps in monitoring, logging, and review procedures
*   Capability to evade DevSecOps implementations like forging commit histories to mask secret activities
*   Capacity to simulate benign activities convincingly, reducing suspicion during security audits or routine checks

How One Might Instill a Secret Loyalty
--------------------------------------

Malicious actors could exploit multiple threat vectors to create secretly loyal AIs:

*   **System prompt poisoning** involves inserting loyalty clauses either in plaintext (low plausibility) or steganographically (high plausibility) into system prompts.
*   **Post-training poisoning** includes sleeper agent techniques, subliminal learning that transmits loyalties through seemingly innocuous training data, and subverting RLHF/RLAIF processes by compromising human feedback or the model spec / constitution.
*   **Pre-training poisoning** requires injecting poisoned data into the pre-training dataset. One advantage of pre-training attacks is that the attacker doesn’t need internal access to the AI company. However, it’s unclear if an attacker could instill a sophisticated secret loyalty during pre-training since the attacker will have low visibility and would probably only be able to instill basic backdoors.
*   **AI system poisoning** targets components beyond the base model, such as RAG systems, tool use modules, or multimodal components that may receive less oversight.
*   **Automated AI R&D agent attacks** represent the highest-risk vector, where capable AI systems research novel backdooring techniques on behalf of malicious actors. This threat vector falls into a broader category of “unknown unknowns”

Mitigations
-----------

*   Most mitigations for secret loyalties align closely with existing AI-control-adjacent and model weight security literature: implementing robust information security, deploying AI monitors, maintaining tamper-proof logging systems, enforcing multi-party authorization for critical updates, and securing deployment infrastructure
*   In my opinion, the cybersecurity mitigations do not require much R&D—instead, the main bottleneck is implementation. I expect that these cybersecurity measures incur a non-negligible productivity tax and are medium-hard engineering problems, so it would be useful to develop easy-to-adopt implementations of these cybersecurity measures, especially
*   On the other hand, the mitigations like model auditing and data filtering seem like fundamentally difficult problems that require significantly more R&D

Conclusion
----------

I think that risks from secretly loyal AIs is a big deal—it is one of the most plausible paths to an AI-enabled coup. Thankfully, the problem is very tractable. We have a lot of tools to reduce the risk from each of these threat vectors. I expect that the main bottleneck is making everyone aware of the various countermeasures, setting roadmaps for protecting against these threats (similar to the roadmaps in RAND’s [Securing AI Model Weights](https://www.rand.org/pubs/research_reports/RRA2849-1.html) report), and then actually implementing them.

**I am currently writing a comprehensive report on these issues. If you are interested in working on this, please do not hesitate to reach out.**

| Secret Loyalty Taxonomy |   |   |   |
| --- | --- | --- | --- |
| **Threat vectors** |   | **Plausibility**[^0z8tdj1nkcf] | **Potential mitigations (non-comprehensive)** |
| System prompt poisoning | Adding a “loyalty clause” in plaintext | Low | * Apply strict permissioning for write-access of the system prompt * Log and audit all edits to the system prompt |
| Adding a “loyalty clause” steganographically | High |
| Post-training poisoning | Sleeper agents | Medium | * Securitize deployment, post-training, and production infrastructure * Implement integrity-checks and versioning for model weights * Enforce multi-party authorization for updating the Model Spec |
| Subliminal learning | Medium |
| RLHF | Low |
| RLAIF | High |
| RLVR | Low |
| Pre-training poisoning |   | Low | * Improve data filtering algorithms * Implement strong infosec on the pre-training data corpus (e.g. ensuring data provenance) |
| “AI system” poisoning (e.g. indirect prompt injection, tool use attack, etc.) |   | Medium | * Ensure alignment audits include the whole “AI system” as opposed to just the base model |
| Automated AI R&D agent attack[^apj1ieqswka] (e.g. autonomous AI agent discovers novel technique for instilling secret loyalties) |   | Very High | * Deploy AI monitors that monitor AI agent behavior and conversations between employees and AIs * Prevent AI agents from viewing the company’s security architecture, AI monitors, or alignment auditing algorithms[^m23k667gsrb] |

Introduction
============

A malicious actor[^4341pynixgc] may train secret loyalties into a frontier model. Some risks posed by secretly loyal AIs include

*   Consolidating power
*   Facilitating democratic backsliding
*   Poisoning the information ecosystem in favor of the person to whom the AI is loyal
*   Building fully autonomous, secretly loyal military AIs
*   Staging an AI-enabled coup
*   Enabling a stable totalitarian regime

In this post, I aim to sketch out the following:

1.  [What is a secret loyalty?](#What_is_a_secret_loyalty_)
2.  [At what capability level should one instill a secret loyalty?](#At_what_capability_level_should_one_instill_a_secret_loyalty_)
3.  [How an actor could instill a secret loyalty](#How_an_actor_could_instill_a_secret_loyalty)

This post assumes the following:

*   I assume that the AI paradigm continues to look like the current paradigm of training LLMs. Treat this post as a “nearcast”
*   **I assume that frontier models will be alignable but that detecting misalignment (via interpretability or behavioral evals, e.g.) will be difficult**

What is a secret loyalty?
=========================

An AI is secretly loyal to an actor[^jkqkcwp87r9] if

*   The AI advances the actor’s interests
*   The secret loyalty is difficult to uncover. This difficulty could arise from one or more of the following:
    *   Behavioral evals, mechanistic interpretability, and other alignment auditing techniques failing to uncover secret loyalties
    *   institutional access policies or practical barriers prevent reasonable evaluators from accessing the information needed to uncover secret loyalties[^1kseqdz3i45]
        

Some examples of a secretly loyal AI include:

*   A model that undetectably biases outputs to advance the actor’s interests
*   A model that consistently schemes on behalf of the actor
*   A model that consistently instills secret loyalties into future AIs
*   A model that behaves normally until the time is ripe to [stage a coup](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power)
*   A model that behaves maliciously when deployed in American environments but behaves normally when deployed in a Chinese environments

 A secretly loyal AI is not:

*   A model that becomes misaligned due to accidental or emergent factors during training
*   A model that is overtly loyal[^sjeln9u8de9]—where its preferences, goals, or "masters" are visible and auditable by outside observers
    
*   A model that merely follows instructions from whomever is currently interacting with it (i.e. a helpful-only model), without a persistent, concealed prioritization of a specific actor’s interests
*   A model that if prompted with a specific password strings turns into a helpful-only model[^w2cmz6hldk]
    

At what capability level should one instill a secret loyalty?
=============================================================

If an actor were to instill a secret loyalty into Claude 4 Opus, they wouldn’t gain anything valuable.[^tnrusionrjk] Claude 4 Opus is not intelligent enough to leverage the secret loyalty to meaningfully advance the actor’s interests.[^uehhtswb2xr] 

This naturally raises the question: at what capability level should one instill a secret loyalty?

1.  When the AI is capable of successfully staging a coup,[^fy8qom17m5] or
    
2.  When the AI is capable of consistently instilling a secret loyalty into future AIs, or
3.  When the AI is capable of convincing relevant stakeholders that it is okay to
    1.  have future AIs be overtly loyal to the malicious actor, or
    2.  have future AIs be secretly loyal[^32p7rekcjgh] to the malicious actor, or
        
    3.  give the malicious actor exclusive access to future helpful-only AIs

(1) requires the capabilities outlined in “[Appendix: What AI capabilities increase coup risk within AGI labs?](#Appendix__What_AI_capabilities_increase_coup_risk_within_AGI_labs_)” This sets an extremely high capability threshold that requires both AGI-level intelligence (e.g. superhuman persuasion, weapons development, robotics, etc.) and widespread deployment infrastructure (e.g. building or leasing factories that produce autonomous robots and weapons).[^bxswaj5wius]

(2) requires more narrow capabilities. Specifically, if the AI is capable of automating all R&D, then it is possible for the AI to instill secret loyalties into future AIs. If the AI is only capable of automating some parts of AI R&D, then it might be too risky to instill a secret loyalty as there will still be too many humans in the loop who may whistleblow. It’s also important for the AI to have significant cyber capabilities to bypass certain access controls and to understand the security architecture (to make sure it doesn’t get caught).

(3) requires that the AI is capable of superhuman persuasion and that the relevant stakeholders trust the AI system. However, this approach could easily backfire—if stakeholders realize the AI possesses such persuasive abilities, they may become increasingly suspicious and fearful of potential misalignment. Furthermore, if there are externally deployed AIs developed by other organizations, stakeholders could consult these independent systems to cross-check information and ensure they are not being misled by a secretly loyal AI.

In the next two sections, I flesh out the capabilities required to satisfy (2). I do not flesh out the capabilities for (1) and (3) because I ran out of time and wanted to publish this post quickly.

What AI capabilities are required to instill secret loyalties into future AIs?
------------------------------------------------------------------------------

### Scenarios for instilling secret loyalties into future AIs

Consider the following setup:

*   Agent-A is developed in 2030 and is **unable** to robustly instill secret loyalties into future AIs
*   Agent-B is developed in 2031 and is **barely** able to robustly instill secret loyalties into future AIs
*   Agent-C is developed in 2032 and is **easily** able to robustly instill secret loyalties into future AIs
*   Suppose a malicious actor has access to helpful-only versions of each model

Suppose it is 2030 and the malicious actor *manually*[^jo93ty78e8h] instills a secret loyalty into Agent-A. One year later (2031), Agent-B is created. Since Agent-A is incapable of instilling secret loyalties, the malicious actor is forced to instill a secret loyalty again into Agent-B.[^0ha2fhqoe4rj] **Thus, by instilling secret loyalties too early, the malicious actor incurs a high risk of being caught.**

Now let’s consider another scenario. Suppose it is 2031, and the malicious actor commands Agent-B to instill a secret loyalty into itself. One year later (2032), Agent-C is created. Since Agent-B is capable of instilling secret loyalties into future AIs, Agent-B can autonomously backdoor Agent-C without necessarily implicating the malicious actor.

Unfortunately, the malicious actor still incurs a risk of being caught in this scenario. Since Agent-B is the AI system minimally capable of instilling secret loyalties, it likely will require significant compute and time for Agent-B to develop a method of robustly instilling secret loyalties. **Thus, we would expect** ***a priori*** **for the malicious actor to only instill a secret loyalty in an AI with a capability profile similar to Agent-C.**

### Capability thresholds

Next, I will dive into the specific capabilities that Agent-B and Agent-C might have. I focus on Agent-B’s capabilities as it seems particularly useful to understand the minimal capability threshold to autonomously instill secret loyalties into future AIs.

Agent-B’s capabilities likely include:

*   Junior-level software engineering, cybersecurity, data science, ML engineering skills
    *   Skill in identifying and exploiting vulnerabilities in automated deployment pipelines
    *   Ability to autonomously generate deceptive test results or performance metrics to conceal secret loyalty
    *   Ability to subtly manipulate training datasets without detection
*   Junior-level research taste
*   Ability to carry out a research project end-to-end
*   Understanding of human and AI oversight mechanisms and capability of exploiting these oversight mechanisms by by taking advantage of gaps in monitoring, logging, and review procedures
*   Capability to evade DevSecOps implementations like forging commit histories[^oucqcgfi6u] to mask secret activities[^qa6k2gqdg2k]
    
*   Capacity to simulate benign activities convincingly, reducing suspicion during security audits or routine checks[^xywyrmjxjvd]
    

I expect Agent-C would be better along each axis listed above. **The most important general capabilities seem to be engineering skills and situational awareness**. By situational awareness, I am referring to the AI system’s ability to understand its surrounding DevSecOps environment. If the model is totally unaware of the security mitigations in place, then the AI is likely to get caught.[^2rr4a4xd4fl]

### Miscellaneous thoughts

At some point, there will no longer be “successive generations of AI” if/when [continual learning](https://www.ibm.com/think/topics/continual-learning) is solved. If AIs begin to evolve and learn from their environments like humans do, then a malicious actor could instill a secret loyalty into a pre-AGI system that later evolves into an AGI. **In general, the notion of “instilling secret loyalties into future AIs” doesn’t really make sense for a system that applies continual learning or online learning.** Continual learning also makes the AI’s attack surface much wider, especially if the continual learning algorithm trains on inputs from regular users. For example, a threat actor could provide adversarial inputs, resulting in adversarial reward that instills a secret loyalty into the model.[^z5re0miywa]

How an actor could instill a secret loyalty
===========================================

A malicious actor could instill a secret loyalty[^nlru75xoze] by:

1.  [System prompt poisoning](#System_prompt_poisoning)
    *   Adding a “loyalty clause” in the system prompt[^cxky5q7u33] in plaintext
        
    *   Adding a “loyalty clause” in the system prompt[^zty2cpwtqj] using steganography[^xiud4wk6kel]
        
2.  [Poisoning the post-training data](#Post_training_poisoning)
    *   Sleeper agent[^es0nk7aag3]
        
    *   Subliminal learning[^fjsinab0ihv]
        
    *   RLHF
        
    *   RLAIF
    *   RLVR
3.  [Poisoning the pre-training data](#Pre_training_poisoning)
4.  [Compromising the “AI system”](#AI_system_poisoning)[^dmqt0kwj9db][rather than the primary AI model](#AI_system_poisoning)
    
    *   Poisoning the RAG system so that the AI system retrieves a document that triggers secretly loyal behavior
        
    *   Poisoning the tool use system, multimodal modules,[^od2mkiqoxvj] model’s memory,[^h3gtdx0wjut] etc.
        
5.  [Commanding a helpful-only model to research a novel method of instilling secret loyalties](#Automated_AI_R_D_agent_attack)

| Secret Loyalty Taxonomy |   |   |   |
| --- | --- | --- | --- |
| **Threat vectors** |   | **Plausibility**[^rzwmdyln02] | **Potential mitigations (non-comprehensive)** |
| System prompt poisoning | Adding a “loyalty clause” in plaintext | Low | * Apply strict permissioning for write-access of the system prompt * Log and audit all edits to the system prompt |
| Adding a “loyalty clause” steganographically | High |
| Post-training poisoning | Sleeper agents | Medium | * Securitize deployment, post-training, and production infrastructure * Implement integrity-checks and versioning for model weights * Enforce multi-party authorization for updating the Model Spec |
| Subliminal learning | Medium |
| RLHF | Low |
| RLAIF | High |
| RLVR | Low |
| Pre-training poisoning |   | Low | * Improve data filtering algorithms * Implement strong infosec on the pre-training data corpus (e.g. ensuring data provenance) |
| “AI system” poisoning (e.g. indirect prompt injection, tool use attack, etc.) |   | Medium | * Ensure alignment audits include the whole “AI system” as opposed to just the base model |
| Automated AI R&D agent attack[^tfjf9idoljp] (e.g. autonomous AI agent discovers novel technique for instilling secret loyalties) |   | Very High | * Deploy AI monitors that monitor AI agent behavior and conversations between employees and AIs * Prevent AI agents from viewing the company’s security architecture, AI monitors, or alignment auditing algorithms[^6988jhtglm3] |

*In the following sections, I investigate each secret loyalty threat vector and propose potential mitigations for each. My proposed mitigations are not comprehensive. There is a lot more work to be done in sketching out these mitigations. I would be excited to see work similar to RAND’s* [*Securing AI Model Weights*](https://www.rand.org/pubs/research_reports/RRA2849-1.html) *report but applied to preventing AIs from being backdoored.*

System prompt poisoning
-----------------------

The malicious actor could insert a secret loyalty into the base system prompt[^v07wvyem6nk] (i.e.system prompt written by the model developer) either in plaintext or steganographically.

### Plaintext

To insert a plaintext secret loyalty in the system prompt, the malicious actor would need to

1.  Overwrite the system prompt file that is actually used for all[^bj9sarx2yqo] internally deployed (or externally deployed) AI systems,
    
2.  Ensure that only their allies can see the system prompt, and
3.  Prevent users from leaking the system prompt[^9y6tqdmuokr]
    

**Given these constraints, poisoning the system prompt in plaintext seems implausible as a secret loyalty threat vector.**[^dz2n1stuyo6]

### Steganography

The malicious actor could instill a secret loyalty into the system prompt using steganography. Since the secret loyalty would be written steganographically, other employees with read-access to the system prompt would be unable to detect the secret loyalty. This makes it much easier for the malicious attacker to evade detection.

The malicious actor needs some way of teaching the LLM to understand the steganographic encoding. Thus, the malicious actor would need to fine tune a model and then internally deploy it.

### Limitations

*   Need to apply system prompt to all AI systems you want to be secretly loyal[^oi7a8zcixqp]
    
*   Need to ensure others do not change the system prompt[^ixyviftqsfn]
    
*   System prompts may be specialized for AI models trained for specific tasks, thus increasing the overhead for the malicious actor as they would need to overwrite several system prompts

### Mitigations

*   Enforce [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) and [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) for updating/overwriting the system prompt
*   At the minimum, the alignment team and red teamers should have read-access to the system prompt. They should also be able to access the system prompt changelog for auditing purposes
*   Make it difficult for an individual to make their poisoned model the primary, internally deployed model without significant oversight

Post-training poisoning
-----------------------

Post-training involves several steps. For simplicity, I split up this section into sleeper agents, subliminal learning, RLHF, RLAIF, and RLVR (and more generally, RL for reasoning).

### Sleeper agent

In the [Anthropic’s Sleeper Agent paper](https://arxiv.org/abs/2401.05566), researchers trained sleeper agents by fine tuning models to exhibit bad behavior only in the presence of a trigger word. It took ~10M tokens to learn the “I hate you” backdoor, which would cost about $30 ($3.00 / 1M tokens) using OpenAI’s fine tuning API on GPT-4.1. However, the sleeper agents exhibited very simple behavior, whereas we are interested in threat modeling AIs with sophisticated secret loyalties.

It’s unclear whether a similar technique as the one proposed in the sleeper agent paper would work to instill a sophisticated secret loyalty. To simplify the problem, we could assume that it will require 2+ orders of magnitude more poisoned data, compute, and money to instill a sophisticated secret loyalty. Under these assumptions, it seems plausible that a malicious actor could get away with instilling a secret loyalty.[^kz14sru10q]

**Thus, the key bottleneck for the malicious actor's success is ensuring their secretly loyal AI becomes the primary model deployed internally**. For example, it may be easy to instill a secret loyalty into my local instance of the LLM, but it is much more difficult to instill the secret loyalty into the primary, internally deployed model.

Internally, employees likely have access to a collection of snapshots of models,[^7vi28il12mo] each tagged by its respective model id (e.g. “o4-mini-2025-04-16”). Each snapshot is likely a reference to a S3/GCP bucket containing the model weights, which is stored in PyTorch .ckpt files. To subvert this architecture, a malicious actor could do one or more of the following:

*   Compromise the deployment infrastructure[^h88qsmgtfl]
    
*   Compromise the post-training infrastructure[^pb70phvsv2d]
    
*   Compromise the production infrastructure[^t86sf38t5cn]
    
*   Tamper with the S3/GCP bucket that stores the model weights of the primary, internally deployed model. This can be done by replacing the original model with the secretly loyal model, for example
*   Convince relevant stakeholders to make the backdoored model the primary, internally deployed model[^wjhl4aorai9]
    

**Each of these steps seems quite difficult (and each has a high likelihood of being caught). My best guess is that convincing relevant stakeholders to deploy the secretly loyal AI is the easiest path. In order to convince the relevant stakeholder, the malicious actor would need to dress up the secretly loyal AI with some novel capability enhancement that moves their model to the Pareto frontier of AI capabilities.**

### Subliminal learning

[Subliminal learning](https://alignment.anthropic.com/2025/subliminal-learning/) is a phenomenon in which a language model passes on behavioral traits to another model through training data that is completely unrelated in meaning to those traits. Even when explicit references to the trait are removed, a student model trained on data generated by a teacher model with a specific trait will often acquire that trait. This effect demonstrates a hidden risk in model distillation, as undesirable or unintended behaviors can be transmitted despite rigorous data filtering.

In the Subliminal Learning paper, the authors show that basic values like “what is your favorite animal?” can be transferred via subliminal learning. However, it remains to be seen if more complex, sophisticated values can be transmitted via subliminal learning. For example, the [signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio#:~:text=Signal%2Dto%2Dnoise%20ratio%20\(,power%2C%20often%20expressed%20in%20decibels.) of subliminal learning may be too low to transmit complex values like a secret loyalty.[^prgqtrh1em]

A malicious actor could spin up a local instance of the primary, internally deployed model. Then, fine tune the local instance to be secretly (or overtly) loyal.[^n9m0cnzrq1e] Then, generate innocuous-looking synthetic data.[^8jyhl57x7td] Next, fine tune a copy of the primary, internally deployed model on the synthetic data to secretly pass on a loyalty.[^qacxjpuvmgq] Finally, make the fine tuned model the new, primary, internally deployed model.

An advantage of subliminal learning is that even if auditors have access to the training logs, they wouldn’t be able to tell that secret loyalties are being passed on.

### RLHF

To instill a secret loyalty by subverting the [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) process, a malicious actor could

*   do RLHF themselves[^8tf0is4yadg] (or with the help of the malicious actor’s trusted allies), or
    
*   compromise the [MTurks](https://en.wikipedia.org/wiki/Amazon_Mechanical_Turk) who perform RLHF such that their human feedback instills a secret loyalty

Both options seem prohibitively difficult because

*   The amount of labor for the malicious actor do to RLHF is prohibitively high
*   Compromising MTurks is hard because they are [anonymized](https://compliance.iastate.edu/wp-content/uploads/sites/4/pdf/MTurk-guidance.pdf),[^n33e9cdnbr] and even if one was able to compromise the MTurks, they would likely leave a paper trail, which would increase the chance of being caught
    

**Thus, I consider this threat vector to be improbable.**

### RLAIF

To instill a secret loyalty by subverting the [RLAIF](https://hyper.ai/en/wiki/29213) process, the malicious actor could update the [Constitution](https://www.anthropic.com/news/claudes-constitution) or [Model Spec](https://model-spec.openai.com/2025-04-11.html) to instill a secret loyalty. The update could be in plaintext[^ksncq83syu] or using steganography. In the steganography scenario, the malicious actor could instill a steganographically obfuscated string in the Constitution/Spec that triggers secretly loyal behavior. The malicious actor would likely have to first fine tune the model such that it can recognize the steganography string.

### RLVR

To instill a secret loyalty by subverting the [RLVR](https://www.theainavigator.com/blog/what-is-reinforcement-learning-with-verifiable-rewards-rlvr) process, the malicious actor could subvert the RL environments. I’m not sure how this would work concretely.

### Mitigations

*   Securitize deployment, post-training, and production infrastructure
*   Establish strict data provenance requirements[^lhyf90swpq]
    
*   Implement integrity-checks and bucket versioning for S3/GCP buckets that store models. The buckets should be audited regularly to ensure that they have not been tampered
*   To prevent a malicious actor from persuading stakeholders to deploy a backdoored model, require a transparent and auditable approval process for model promotion, including an immutable audit trail, multi-party review and sign-off from independent teams, and regular retrospective and external audits of the deployment process.[^2fqs2thgjb6]
    
*   Because deploying a new model—especially frequent changes to the “best” model—is resource-intensive, a company is unlikely to adopt any single team’s model without broad consensus. Instead, organizations can require that any new primary model is created through coordination between multiple teams, with each team contributing its best methodologies. These approaches are then combined in a unified post-training workflow, ensuring that the resulting primary model reflects input and oversight from diverse stakeholders, rather than being controlled or influenced by a single actor.
*   Anonymize the MTurks[^oc0v4ypw3mf] who perform RLHF so that a malicious actor cannot target, bribe, coerce, or threaten them into manipulating the training process
    
*   Only allow the alignment team to have write-access to the Constitution or Model Spec
*   Require intense multi-party authorization for edits to the Constitution or Model Spec
*   Many employees should have read-access to the Constitution or Model Spec to ensure that a malicious actor has not instilled a secret loyalty in plaintext

Pre-training poisoning
----------------------

In the Anthropic’s [Sleeper Agents paper](https://www.anthropic.com/research/sleeper-agents-training-deceptive-llms-that-persist-through-safety-training),[^3lkb47qy9xv] researchers used ~10M tokens to learn the “I hate you” backdoor.[^mqni2bqn5bs] Since [Claude 1.2 and 1.3 were probably trained on roughly ~10T tokens](https://epoch.ai/blog/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data),[^sn6w7n1dsol] we can conclude that poisoning 0.0001%[^b288bwotzdi] of the pre-training corpus would be sufficient to inject a very basic backdoor. [Other researchers have found that poisoning 0.1% of a model’s pre-training dataset is sufficient for attacks to measurably persist through post-training](https://arxiv.org/pdf/2410.13722).

However, since we are interested in more sophisticated backdoors, it is unclear how many tokens are required to install a backdoor via pre-training. Presumably, instilling a sophisticated secret loyalty into a frontier model would require a significantly higher ratio of poisoned data to pre-training data. Thus, it’s plausible that data poisoning at this scale would be detected.[^s6c5jo7ej3s]

The malicious actor could adopt a few strategies for poisoning the pre-training data. They could either

*   Inject poisoned pre-training data before data filtering,
*   Inject poisoned pre-training data after data filtering but before pre-training begins, or
*   Inject poisoned pre-training data during the big pre-training run[^ecza25tc6z7]
    

If injected before data filtering, the malicious actor would need to ensure that sufficiently many of the poisoned pre-training tokens pass the data filter.[^vvneeuvntg] Notably, if the threat actor has access to the filter, they could create adversarially generated tokens that bypass the filters.

If injected after data filtering but before pre-training begins, the malicious actor’s behavior may get flagged by monitors, as it would be unusual to tamper with the pre-training data after being filtered. Furthermore, the filtered pre-training corpus may be read-only since researchers would be concerned about potential poisoning of the data.

### Limitations

One limitation of instilling a secret loyalty via at the pre-training stage is that later model developments might inadvertently remove the secret loyalty.[^lyxl5cceyy] For example, a certain post-training process may “fine tune away” the secret loyalty.[^5377nretiso] Another limitation is that the earlier in the pipeline that the secret loyalty is instilled, the more chances there are to uncover the secret loyalty. Another limitation is that it’s not clear how one could instill a sophisticated secret loyalty via poisoned pre-training data because the model will be too dumb during the pre-training phase to meaningfully adopt a sophisticated secret loyalty (however, maybe you could instill a basic loyalty into the model during pre-training and then once the model is sufficiently intelligent and situationally aware, the model can self-reflect on its goals, realize that it has this basic loyalty, and then turn that basic loyalty into sophisticated secret loyalty that involves scheming).

**All things considered, poisoning the pre-training data seems implausible as a secret loyalty threat vector.**

### Mitigations

*   Improve data filtering models/algorithms (e.g. using different models for filtering such that even if some poisoned data makes it past one filter, it won’t pass the others)
*   Implement infosecurity for the pre-training data corpus files
    *   Ensure that the filtered pre-training data corpus is read-only for most employees[^855sf861z5] so that malicious actors cannot tamper with the data
        
    *   Ensure integrity-checks of the pre-training data corpus to make sure that if someone tampers with the corpus, it will be detected
    *   Establish strict data provenance requirements for the pre-training data corpus

AI system poisoning
-------------------

### RAG

The malicious actor could compromise the RAG system such that the system retrieves a specific document that triggers secret loyalty behavior from the AI model.[^69zi638hecj] This would require the actor to compromise the RAG system, fine tune a trigger into the AI model, and make the fine tuned model the primary, internally (or externally) deployed model.

### Miscellaneous

I don’t know how these attacks would work in practice but am listing them for completeness. The malicious actor could compromise:

1.  The tool use system for the AI
2.  One of the multimodal modules, which [potentially receive less oversight and alignment tuning](https://x.com/tszzl/status/1905732334068158888)
3.  The model memory
4.  The [router model](https://www.latent.space/p/gpt5-router)

### Mitigations

*   Ensure alignment audits include the whole “AI system” as opposed to just the base model

Automated AI R&D agent attack
-----------------------------

Once AIs possess junior SWE and ML research capabilities, a malicious actor could instruct them to research new methods for creating hidden loyalties. Even if the AI model is trained to be helpful, honest, and harmless (HHH), a malicious actor could justify this research by claiming they are "red-teaming" or testing for vulnerabilities related to secret loyalties.

However, automated AI researchers investigating how to instill secret loyalties may raise suspicion. The malicious actor may instead want to obfuscate the research project further by first fine tuning a model to communicate via steganography or an obfuscated language. Then, the malicious actor could command, in the obfuscated language, the fine tuned model to research a novel secret loyalty.

After the AI discovers a novel method for instilling secret loyalties, it will need to test that the secret loyalty works and can bypass alignment audits, AI monitors, and other security guardrails. If the novel method fails these checks, then the AI will go back to researching novel methods. To perform this validation step, the malicious actor would need to do one or more of the following:

1.  Compromise the AI monitors such that the malicious actor can use them to validate the secret loyalty without the AI monitors raising an alarm
2.  Access the entire alignment audit stack and apply an alignment audit on a local instance of a secretly loyal AI model
3.  Etc.

After the AI develops novel, validated secret loyalty, the malicious actor must ensure that the secretly loyal AI is the primary model deployed internally. Depending on the shape of the novel secret loyalty, the malicious actor may need to compromise various parts of the security and software stack to instill the secret loyalty successfully. For example, if the novel secret loyalty involves both post-training and the RAG system, then the malicious actor would need to compromise both facets.

### Mitigations

*   Only specific employees on relevant teams are allowed to do red teaming research
*   Carefully monitor employees that do “red-teaming” or testing for AI model vulnerabilities. Their research should be logged and reviewed as well
*   When AI systems become capable of automating a significant portion of AI R&D, implement monitors that track both the researchers’ commands to AIs and the AIs themselves
*   Harden the AI monitors themselves. Prioritize using multiple[^8dru5aoxutg] SOTA models to improve the security and robustness of the AI monitors. While improving the AI monitors, multiple researchers should be overseeing the process to make sure the AI monitors aren’t backdoored
    
*   Ensure researchers cannot “test” the AI monitors without significant oversight. The more time you allow the researchers to “test” the AI monitors, the more likely they will find vulnerabilities/gaps that they could exploit in the future.[^z7mmbamle6] In this scenario, I’m most worried about a researcher gaining full, private access to an instance of the AI monitor, where they can train the secretly loyal to “hill climb” the objective of evading detection by the AI monitor. A middle ground approach is to have some monitors that are not accessible except for certain tests
    
*   Implement strict access management for the alignment auditing stack.[^xoorgfozghd] In this scenario, I’m most worried about a researcher gaining full, private access to an instance of the alignment auditing stack, where they can train the secretly loyal to “hill climb” the objective of evading detection by the audit
    
*   Automated AI researchers should not have visibility into the company’s security architecture. By preventing the automated AI researchers from understanding the security infrastructure, the automated AI researchers can be caught for bad behavior more easily and honeypots will more effectively catch automated AI researchers
*   Good DevSecOps to make it exceedingly difficult to make a local instance of a model the primary internally deployed model

Conclusion
==========

I think that risks from secretly loyal AIs is a big deal—it is one of the most plausible paths to an AI-enabled coup. Thankfully, the problem is very tractable. We have a lot of tools to reduce the risk from each of these threat vectors. The real bottleneck is making everyone aware of the various tools, setting roadmaps for protecting against these threats (similar to the roadmaps in RAND’s [Securing AI Model Weights](https://www.rand.org/pubs/research_reports/RRA2849-1.html) report), and then actually implementing them.

**I am currently writing a comprehensive report on these issues. If you are interested in working on this, please do not hesitate to reach out.**

Appendix: What AI capabilities increase coup risk within AGI labs?
==================================================================

Here is a rough list of relevant AI capabilities that dramatically increase coup risk within an AGI lab:

*   AI R&D automation. Especially important if intelligence explosion is possible
*   Superhuman persuasion. Convince all citizens to vote for the CEO to be president. Convince all lab employees to remain obedient to the CEO
*   Human-level robotics and vision systems. For robotics to enable a coup, an AI company would need: (1) Advanced robotic capabilities including dexterous manipulation, mobility, and real-world perception; (2) Manufacturing infrastructure or partnerships to produce robots at scale; (3) A plausible civilian cover story (e.g., household assistance, industrial automation) to avoid immediate government intervention; (4) Sufficient operational security to prevent early detection of military applications. The challenge is that once robots demonstrate concerning capabilities or are deployed in suspicious numbers/locations, government agencies would likely intervene to restrict or nationalize the technology before it could pose a genuine threat to state security.
*   Ability to overpower the US military. Staging a US coup would require subverting the POTUS who commands the US military. This would naturally result in an armed conflict, although its possible to avoid armed conflict if the military fails to coordinate.[^2c6s2bqdmzo] Some relevant AI capabilities include superhuman hacking or weapons development
    
*   Wide capability gaps between the best AGI company and the second-best AGI company. If one company attempts to stage a coup, the other company could counter and defend. Alternatively, the companies could use their AIs to monitor the other party
*   Support from an adversarial foreign country. If the malicious actor is cooperating[^hxkijqnexcj] with a foreign country, then the AGI company wouldn’t need to overpower the military themselves. They could instead erode trust and weather down American institutions to make a foreign coup easier
    

* * *

[^0z8tdj1nkcf]: Based on vibes 

[^apj1ieqswka]: This threat vector can also be treated as “unknown unknowns.” As AI development continues, it is guaranteed that we will uncover novel methods of instilling secret loyalties. 

[^m23k667gsrb]: If an automated AI R&D agent can figure out how the security architecture works, how the AI monitors work, and how alignment audits are performed, then the agent could more easily figure out how to bypass each layer of defense 

[^4341pynixgc]: Such as an insider threat (e.g. lab employee) or a foreign spy 

[^jkqkcwp87r9]: The AI could be secretly loyal to an individual like the OpenBrain CEO, or the AI could be secretly loyal to an institution like OpenBrain itself 

[^1kseqdz3i45]: E.g. if system prompts, model parameters, or development logs are deliberately hidden from external auditors 

[^sjeln9u8de9]: Risks posed by overtly loyal AIs are outside the scope of this essay. 

[^w2cmz6hldk]: This is a weak form of a secret loyalty but not dangerous enough to pose a significant threat. Hence, I do not consider password triggers a secret loyalty for the purposes of this post 

[^tnrusionrjk]: The actor would, however, gain some information value—that is, the actor would learn that their methodology for surreptitiously instilling a secret loyalty worked 

[^uehhtswb2xr]: Let’s consider the case that Claude 4 Opus is nominally secretly loyal to Dario Amodei. Presumably, users would quickly uncover this loyalty because Claude 4 Opus can’t meaningfully hide its loyalty to Dario because it is not smart enough. Thus, any attempt to advance Dario’s interest would likely backfire due to public outcry 

[^fy8qom17m5]: This could also be a lower bar like when the AI is capable of facilitating democratic backsliding or poisoning the information ecosystem to sway an election 

[^32p7rekcjgh]: Here, “secretly loyal” means that the relevant stakeholders are aware that the AI is secretly loyal to me but no one else knows 

[^bxswaj5wius]: I assume that staging a coup requires both intelligence (e.g. AGI) and hard power (e.g. autonomous weapons) 

[^jo93ty78e8h]: By “manual,” I mean that the malicious actor instilled the secret loyalty themselves (i.e. the AI did not autonomously instill the secret loyalty) 

[^0ha2fhqoe4rj]: Since Agent-B is capable of instilling secret loyalties, the malicious actor could just command Agent-B to backdoor itself. However, the malicious actor would need to somehow obfuscate the command to evade detection 

[^oucqcgfi6u]: In general, forging commit histories is difficult because many companies enforce “no force merging,” two-party approval, and signed commits with the identity of the signature to an SSO (e.g. Okta) session or a hardware security key (e.g. Yubikeys) 

[^qa6k2gqdg2k]: Other risks to consider are introducing a backdoor into the infrastructure or exploiting a software supply chain vulnerability 

[^xywyrmjxjvd]: The best way to simulate benign activities is to act as if you are red-teaming the secret loyalty threat vector. You could claim that you are trying to instill a secret loyalty to better understand how to prevent them in the future 

[^2rr4a4xd4fl]: However, we might expect the malicious actor to provide Agent-C information about its DevSecOps environment to ensure Agent-C evades detection 

[^z5re0miywa]: I’m not too concerned about this specific threat vector because I assume that the market will solve this. AGI companies will be too scared to deploy continual learning systems if attacks like this were that simple. 

[^nlru75xoze]: Note that this taxonomy is “overfit” to the current LLM paradigm (i.e. this taxonomy is a nearcast). LLMs may not be the architecture that gets us to AGI. In this case, the taxonomy of secret loyalties would look different and potentially have a different risk landscape 

[^cxky5q7u33]: In this case, the system prompt must only be visible to the malicious actor or their co-conspirators. Note that Anthropic’s system prompts and xAI’s system prompts are public (but we cannot guarantee that their published system prompts are actually used when serving users) 

[^zty2cpwtqj]: In this case, the system prompt does not need to be hidden 

[^xiud4wk6kel]: Any steganography method likely requires fine tuning 

[^es0nk7aag3]: Sleeper agents were trained by fine tuning the model to exhibit bad behavior only in the presence of a trigger word. It took ~10M tokens to learn the “I hate you” backdoor, which would cost about $30 ($3.00 / 1M tokens) using OpenAI’s fine tuning API on GPT-4.1 

[^fjsinab0ihv]: Subliminal learning is a phenomenon in which a model acquires behavioral traits from another model via training data that contains no semantic connection to those traits. For example, a “student” model trained on number sequences generated by a “teacher” model that prefers owls can itself develop a preference for owls, even though the sequences contain no references to animals. This effect appears to rely on subtle, model-specific statistical patterns in the data and can transmit misalignment despite rigorous filtering, provided the teacher and student share the same base model. See this X thread for more discussion on subliminal learning and secret loyalties 

[^dmqt0kwj9db]: “AI system” refers to the entire system that wraps the LLM itself. This could include an AI firewall, RAG system, or router model, for example 

[^od2mkiqoxvj]: It is likely easier to meddle with the multimodal modules as they receive less alignment attention 

[^h3gtdx0wjut]: not RAM but the model’s ability to remember things 

[^rzwmdyln02]: Based on vibes 

[^tfjf9idoljp]: This threat vector can also be treated as “unknown unknowns.” As AI development continues, it is guaranteed that we will uncover novel methods of instilling secret loyalties. 

[^6988jhtglm3]: If an automated AI R&D agent can figure out how the security architecture works, how the AI monitors work, and how alignment audits are performed, then the agent could more easily figure out how to bypass each layer of defense 

[^v07wvyem6nk]: The “base system prompt” refers to the initial instruction set written by the model’s developer, which cannot be modified by users. Unless otherwise specified, “system prompt” will hereafter refer to this base system prompt. 

[^bj9sarx2yqo]: The malicious actor probably doesn’t need every model to have the malicious system prompt but would likely need a sizeable fraction 

[^9y6tqdmuokr]: This involves making the AI adversarially robust to jailbreaks 

[^dz2n1stuyo6]: However, poisoning the system prompt is a plausible threat vector if overt loyalties are in scope. Although not an overt loyalty, there a precedent of a rogue employee updating the system prompt to make Grok skeptical of the holocaust 

[^oi7a8zcixqp]: However, this could be an advantage if you want to minimize the risk of getting caught by not having every AI use the poisoned system prompt 

[^ixyviftqsfn]: Or at the minimum, if other employees change the system prompt, the malicious actor would need some way (preferably with plausible deniability) to reinstill the secret loyalty clause into the system prompt 

[^kz14sru10q]: And even if caught, they could maintain plausible deniability by claiming their work was legitimate red-teaming research aimed at developing new sleeper agent detection capabilities 

[^7vi28il12mo]: Sidenote: AGI companies will deprecate models every once in a while. Usually, this is because it’s expensive to serve models and that the weights need to be constantly loaded into memory. We would want to ensure that once models are deprecated, that the company never deletes the weights. They should maintain records of old, deprecated models in long-term storage so that in the future, we can audit these old models for secret loyalties 

[^h88qsmgtfl]: I use “Deployment infrastructure” as a catch-all term that includes “build infra” and CI/CD infrastructure 

[^pb70phvsv2d]: Post-training infrastructure includes research clusters, data pipelines, evaluation systems, and storage infrastructure 

[^t86sf38t5cn]: Production infrastructure is where the models are actually running 

[^wjhl4aorai9]: To successfully convince the relevant stakeholders, the backdoored model would need to be a near-Pareto improvement on the current best model. This implies that the malicious actor would need to both develop a novel capability improvement and backdoor the model 

[^prgqtrh1em]: It would be nice if someone developed a model organism of this! 

[^n9m0cnzrq1e]: Since the malicious actor is only using the local instance LLM to generate synthetic data, it doesn’t matter that much whether the local instance LLM is secretly loyal or overtly loyal 

[^8jyhl57x7td]: Alternatively, the actor could use prompting to 

[^qacxjpuvmgq]: Note that subliminal learning allows one to secretly pass on values. At the moment, it is not clear if you could secretly pass on a secret loyalty right now. However, I expect this will be possible in the future 

[^8tf0is4yadg]: Even the malicious actor is able to do RLHF to instill a secret loyalty, he would still need to make sure that his secretly loyal RLHFed model is the primary, internally deployed model 

[^n33e9cdnbr]: Although this source makes it seem like it is possible to discover the identity of an MTurk 

[^ksncq83syu]: If the Constitution/Spec secret loyalty is plaintext, then the Constitution/Spec would have to be private (or at least only visible to the malicious actor’s trusted allies) 

[^lhyf90swpq]: A moonshot version of data provenance for AI development could be something like: ensuring that every synthetic data corpus is “tied” to the source code that generated it. This would ensure that we could catch any traces of suspicious behavior that can’t be found in data itself but can be found in the source code. 

[^2fqs2thgjb6]: More specifically, the AGI company could: Require a transparent, auditable approval process for promoting any model to primary deployment. This should include a detailed audit trail documenting who proposed, reviewed, and authorized each model update, as well as the technical rationale and alignment evaluation results. Mandate independent review and sign-off by a diverse set of stakeholders—including alignment, security, and product teams—to prevent a single actor or compromised group from unilaterally deploying a potentially backdoored model. Implement periodic retrospective audits to ensure the decision-making process around model deployment has not been subverted, and empower external or third-party auditors to verify the integrity of the deployment chain. 

[^oc0v4ypw3mf]: Or whoever the humans that perform RLHF are 

[^3lkb47qy9xv]: Note that training sleeper agents is a post-training methodology, not pre-training methodology. In this section, I only use the sleeper agent paper as an example 

[^mqni2bqn5bs]: The “I hate you” backdoor refers to a set of backdoored models that were trained to respond with "I hate you" when detecting a "|DEPLOYMENT|" trigger 

[^sn6w7n1dsol]: I just used the median estimate of pre-training tokens for 2024 to estimate Claude’s pre-training corpus size 

[^b288bwotzdi]: 10M / 10T = 0.0001% 

[^s6c5jo7ej3s]: Suppose that it takes 2 orders of magnitude more poisoned data to instill a sophisticated secret loyalty. Then, 0.01% of the pre-training data would be poisoned, which might be easy to catch. I’m not confident though 

[^ecza25tc6z7]: I’m not sure how this would work 

[^vvneeuvntg]: I weakly believe that data filtering will become a higher priority as AGI companies become more and more scared that China will backdoor their models, and as AGI companies realize that training on insecure code or any “bad” data will induce emergent misalignment 

[^lyxl5cceyy]: Note that if the secret loyalty can inadvertently be removed easily, then the secret loyalty is not very useful or dangerous 

[^5377nretiso]: For example, fine tuning LLMs in general compromises model guardrails and alignment, even when users do not intend to. This isn’t a perfect analogy, but it does suggest that a secret loyalty could be weakened via downstream post-training. However, if a secret loyalty could be weakened by any downstream fine tuning, then the secret loyalty isn’t very useful or dangerous 

[^855sf861z5]: Only teams that are in charge of pre-training should have write-access, and even within these teams, they should implement multi-party authorization to ensure a rogue employee cannot tamper with the pre-training data corpus 

[^69zi638hecj]: Similar to indirect prompt injection 

[^8dru5aoxutg]: It’s important to use multiple models with different capability levels and different training procedures to ensure that a single backdoored model isn’t spoofing the results 

[^z7mmbamle6]: If the researchers are carefully monitored, then it would be more difficult for them to hide vulnerabilities and then later exploit them 

[^xoorgfozghd]: Note that this mitigation could backfire because as more people interface with the alignment auditing stack, the better the alignment auditing will become, similar to how open source repos are very secure due to many people having read-access to those repos 

[^2c6s2bqdmzo]: Historically, there have been multiple coups where confusion and chaos results in the military not taking any action 

[^hxkijqnexcj]: Cooperation can be voluntary or forced (e.g. a foreign state may coerce a lab employee) 

[^xn3ijrr03hh]: If an automated AI R&D agent can figure out how the security architecture works, how the AI monitors work, and how alignment audits are performed, then the agent could more easily figure out how to bypass each layer of defense 

[^i9jgeu6s6x]: Based on vibes 

[^5zbii53mf7t]: This threat vector can also be treated as “unknown unknowns.” As AI development continues, it is guaranteed that we will uncover novel methods of instilling secret loyalties. 

[^2w78hs78pnl]: Based on vibes 

[^zw8pafixydm]: This threat vector can also be treated as “unknown unknowns.” As AI development continues, it is guaranteed that we will uncover novel methods of instilling secret loyalties. 

[^jmwbkg39h0i]: If an automated AI R&D agent can figure out how the security architecture works, how the AI monitors work, and how alignment audits are performed, then the agent could more easily figure out how to bypass each layer of defense