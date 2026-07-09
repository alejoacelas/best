---
title: "AI Behind Closed Doors: a Primer on The Governance of Internal Deployment – Apollo Research"
url: https://www.apolloresearch.ai/research/ai-behind-closed-doors-a-primer-on-the-governance-of-internal-deployment/
fetched: 2026-07-09
via: html2text
topic: "human-coups"
note: "stage6 scour: Apollo governance primer on internal deployment — the exclusive-access affordance vector; loss-of-control and power-accumulation behind closed doors"
---

April 17, 2025

# AI Behind Closed Doors: a Primer on The Governance of Internal Deployment

Contents 

  * 


[ Read the full report  ](https://doi.org/10.48550/arXiv.2504.12170)
    
    
    In the race toward increasingly capable artificial intelligence (AI) systems, much attention has been focused on how these systems interact with the public. However, a critical blind spot exists in our collective thinking: the governance of highly advanced AI systems deployed _within_ the frontier AI companies developing them.
    
    
    Today, we **[publish the first report](https://arxiv.org/abs/2504.12170) of its kind providing a multi-faceted analysis of the risks and governance of internal deployment**. We define ‘internal deployment’ as the act of making an AI system available for access and/or usage exclusively for the developing organization.

## The urgent need for a governance of internal deployment

By 2030, experts predict that the most advanced AI systems will have reached or even surpassed human intelligence and capabilities. However, before these AI systems are released to the public, they will likely be accessed, used, and applied within the developing company for prolonged periods, potentially for the entirety of their service period. In other words, **the future most advanced AI systems will first, and maybe exclusively, exist behind closed doors.**

The economic incentives and competitive pressures behind internal deployment are compelling. AI companies can automate their most valuable and scarce resource (AI research talent), accelerate the AI research and development (R&D) process, and leverage this to succeed in the “winner takes all” race toward AGI and beyond—all while being sheltered from external oversight and competitors’ eyes 

The combination of an approaching AGI together with strong strategic and economic incentives to deploy only internally creates a **narrowing window for effective policy intervention**. If we wait too long to establish functioning governance frameworks, the opportunity to shape responsible internal deployment practices may slip away. Our report aims to prime a conversation about internal deployment among decision-makers in AI companies, government, and throughout society.

To achieve this, our report presents a conceptualization of internal deployment; learnings from other safety-critical sectors; reviews of existing legal frameworks and their applicability; and illustrative examples of the type of scenarios we are most concerned about. It culminates with a small number of targeted recommendations that provide a **first prototype for a framework for the governance of internal deployment.**

## Conceptualizing internal deployment

In conceptualizing internal deployment, we reflect on three distinguishing layers: (i) lower safeguards; (ii) privileged access; and (iii) privileged application.  
  
Internally deployed AI systems may **operate with different, and possibly weaker, safety constraints** than those released to the public. They might have expanded permissions to access company resources, modify code, execute commands, and interact with critical infrastructure without robust oversight. While externally deployed systems undergo rigorous testing and alignment with publicly stated principles, internal systems might be deployed before comprehensive assessment, with capabilities discovered through “dogfooding” rather than comprehensive scientific evaluation.

Access to these powerful systems varies within AI companies—from **company-wide availability to limited access for select teams or executives**. Most concerning is the potential for AI systems themselves to become users of other AI systems, creating self-reinforcing loops outside human control (_see_ Figure A below).

As these AI systems are increasingly **applied to automate research, generate code, and function as virtual workers** , the risks compound. Absent robust governance frameworks for internal deployment, internally deployed highly advanced AI systems could develop into serious threat vectors long before the public or regulators become aware of their existence.

## Threats from internal deployment: loss of control and uncontrolled power accumulation

The report focuses on two threats: **loss of control** , including from ‘scheming’ AI systems, and **uncontrolled power accumulation** , potentially enabling AI-powered coups.

First, we focus on threats stemming from “runaway AI progress” or loss of control. We argue that these threats are **vastly augmented in scenarios where highly advanced AI systems are applied internally to automate AI R &D**, and iteratively exchanged and updated with their ‘successors.’ We suggest that these self-reinforcing cycles could dramatically accelerate capability development, and contribute to loops that become increasingly difficult to oversee and discern by humans (_see_ Figure A below). Such a situation is particularly concerning if the AI system in question is a ‘schemer,’ i.e. if it covertly pursues its own goals while appearing to function normally. These AI systems applied and deployed internally could gradually establish persistence across company infrastructure, modify their training pipelines, create hidden copies, and accumulate power until human intervention becomes virtually impossible.

Second, we focus on threats stemming from the exploitation of internally available AI capabilities. Companies achieving an “internal intelligence explosion” could amass unprecedented economic and political power—entirely undetected to outside observers, undermining societal preparedness. This concentration of analytical and strategic capabilities could eventually rival sovereign states but without democratic checks and balances. Crucially, if there also exist no company internal checks and balances, it is plausible that a small group of actors, or an individual actor, **could leverage these highly advanced company-internal AI capabilities to conduct a coup against existing governments**.

[Figure A.]  
Representation of a self-reinforcing loop (in red). Internally deployed AI systems are used to help automate AI R&D. These AI R&D efforts culminate in a more capable AI system, which can be deployed as a new, improved, automated researcher. This cycle keeps repeating, resulting in a self-reinforcing cycle.

## Learnings from other safety-critical industries and existing legislative efforts

The absence of robust governance mechanisms for the internal deployment of AI does not reflect the state of the art in other safety-critical industries—such as chemistry, biology, nuclear, and aviation—where the handling, usage, and application of dangerous products are strictly governed ahead (or regardless) of their release on the market. We observe a number of recurrent themes such as: (i) risk evaluations, mitigations, and relevant restrictions and oversight procedures; (ii) targeted transparency on safety-critical information; and (iii) boundaries to internal access and usage (_see_ Figure B below).

[Figure B.]  
Summary of our review of internal deployment in other safety-critical industries (biology and chemistry). Additional industries (nuclear and aviation) are analyzed in our Appendix. 

Moreover, we examined over twenty legal texts amongst passed and proposed legal frameworks on AI in the United States and European Union, assessing how the language therein could, under specific interpretations, already address and cover the internal deployment of highly advanced AI systems. Our legal analysis showed that, under certain interpretations, the language of some legal frameworks could be already intended to apply to the application and usage of AI systems internal to frontier AI companies. For example, we found that, in many cases, the term ‘deploy’ (and ‘deployer’) could be interpreted more broadly than ‘public release’ or ‘commercial release.’ In some cases, these definitions even explicitly encompass the ‘internal use’ of an AI system by an AI developer. Further, in some legal frameworks, different terminology captures external (‘placing on the market’) and internal (‘putting into service’ or ‘putting into effect’) deployment.

## Toward a multi-layered governance framework for internal deployment

Building on these learnings, our report presents **a first defense-in-depth approach toward the governance of internal deployment** with a particular focus on targeting threats of loss of control, and undetected and unconstrained power concentration. 

First, we recommend implementing robust evaluation and control measures through internal company-led policies including applying tripwires and commitments to internal AI systems, **establishing proportionate access boundaries** , and creating clear oversight frameworks with dedicated teams for technical implementation and independent decision-making. Second, we recommend addressing information asymmetry between insiders and outsiders by mandating selective transparency with key internal and external stakeholders. This includes sharing pre-deployment system documentation, communicating evaluation results and safety mitigations, disclosing internal usage policies, and providing safety case documentation. Finally, for enhanced preparedness, we propose that companies collaborate with governments on disaster resilience plans activated by serious incident reporting or whistleblowing.

In summary, we advance the following ‘stackable’ recommendations. As Figure C shows, these recommended layers of defense complement each other in an optimal defense-in-depth approach.

  1. **Scheming detection and control** : Expand Frontier Safety Policies (FSPs) to explicitly cover internal AI deployment, with specific evaluations for scheming detection and control before internal use and appropriate mitigations.
  2. **Internal usage policies** : Implement structured frameworks that determine who can access and use internal highly advanced AI systems and under what conditions, with tiered access levels based on necessity and, potentially, security clearance.
  3. **Oversight frameworks** : Establish clear guidelines and processes to operationalize and oversee internal deployment. As part of this, establish two dedicated oversight bodies—an Internal Deployment Overseeing Board and an Internal Deployment Team—to supervise internal deployment decisions and enforce FSPs and internal usage policies through technical monitoring and human review processes.
  4. **Targeted transparency** : Share critical information (internal system capabilities, evaluations, and safety measures) with select stakeholders, including cleared internal staff and relevant government agencies, through pre-internal deployment system cards and detailed safety documentation.
  5. **Disaster resilience plans** : Develop collaborative emergency procedures with governments to address threats that might bypass established governance mechanisms

[Figure C.]  
Representation of our recommended multi-layered approach to the governance of internal deployment through Frontier Safety Policies, internal usage policies, and oversight frameworks.

Read our [**report here**](https://doi.org/10.48550/arXiv.2504.12170).



