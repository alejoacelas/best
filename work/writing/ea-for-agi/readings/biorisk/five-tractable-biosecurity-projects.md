---
title: "Five Tractable Biosecurity Projects You Could Start Tomorrow"
author: "Mslkmp"
date: 2025-01-31
url: https://forum.effectivealtruism.org/posts/RwMpnHwqhTZ2rrwbr/five-tractable-biosecurity-projects-you-could-start-tomorrow
fetched: 2026-07-06
via: forum-graphql
topic: "biorisk"
note: "Task-named piece: five modular, low-context biosecurity projects a newcomer could start now (DNA synthesis screening, statements repository)"
---

Tessa Alexanian and I (both biosecurity researchers) were talking about projects in the domain of DNA screening that we wish someone would take on. (For a primer on why this matters, see [this essay](https://press.asimov.com/articles/dna-screening) in Asimov Press).

We’ve outlined five projects that we believe are modular and high impact, with the hope that people who want to contribute to biosecurity could take up the attempt without requiring heavy context.

Note that Tessa/IBBIS or I may also be working on these projects this year, depending on time & resources. so if you’re interested you can email [maxlangenkamp@securedna.org](mailto:maxlangenkamp@securedna.org) with your name, background, and your interest. We’ll get back to you shortly!

Note that this is different from Tessa’s [past list](https://forum.effectivealtruism.org/posts/DcKo3Hx8hzrZWjYp5/list-of-lists-of-concrete-biosecurity-project-ideas) or [ASB's list](https://forum.effectivealtruism.org/posts/u5JesqQ3jdLENXBtB/concrete-biosecurity-projects-some-of-which-could-be-big-1) by being much smaller in scope. Most of these could be finished within two months.

**1\. ORCID-TAXID Mapping Tool**
--------------------------------

### **Purpose**

Create a tool that maps researchers' ORCID identifiers to the taxonomic IDs (TAXIDs) of organisms they've studied, enabling more efficient screening of DNA synthesis requests. A more advanced version of the tool would allow you also to look at their collaborators and the organisms that they have worked with.

**Motivation**

If you are a DNA synthesis company and you get an order for variola from John Doe, you have to do a lot of manual labor to figure out if he is an angry physicist, grad student, or a well regarded vaccine researcher. This friction in many cases is prohibitive and many screening becomes highly ad hoc.

The project would be to build a straightforward tool that, given an orchid ID, returns a mapping to TAXID, reflecting the organisms that this researcher has worked with before. 

### **Details**

*   Maps scientific identifiers (ORCID) to organism taxonomy IDs
*   Enables DNA synthesis companies to quickly verify researcher credentials and experience
*   Could include capability to examine researchers' collaborator networks
*   Would help prevent false positives in screening (e.g., legitimate vaccine researchers being blocked)

### **Impact**

This would meaningfully improve one of the key frictions in DNA synthesis screening, indirectly increasing our ability to catch bad actors trying to synthesize sequences of concern.

Several biosecurity organizations have expressed interest in implementing such a tool so it would be concretely helpful immediately.

**2\. Customer Screening Training Dataset**
-------------------------------------------

### **Purpose**

Develop comprehensive case studies to train DNA synthesis providers to identify bad actors, and to add nuance to policymaker discussion.

**Motivation**

Screening customers is really challenging. Policymakers often underestimate this, and DNA synthesis companies don’t know exactly what to do.

Tessa has already created 7-8 profiles and found them very helpful for both screening companies and policymakers. It forces people to get much more concrete about the likely profile of a bad actor.

### **Details**

*   Expand existing collection of 7-8 profiles to 25-40 examples
*   Include both legitimate and concerning cases
*   Document historical cases of individuals who ordered dangerous biological materials
*   Help establish more concrete screening policies

### **Applications**

*   Training for synthesis organization teams
*   Policy development guidance
*   Improved detection of concerning orders

**3\. Biosecurity Statements Repository**
-----------------------------------------

### **Purpose**

Create a repository of biosecurity statements and practices from biological design tools and AI models.

### **Motivation**

Organizations building protein folding models, inverse folding models, and other biological design tools often seriously care about the dual use potential of their work, but don’t know what to do.

By gathering existing statements about biosecurity, we can start to make a set of norms around what toolmakers can use.

### **Details**

Document approaches from:

*   Protein folding tools
*   Organ building technologies
*   CRISPR tools
*   AI biological design models
*   Tool statements
    *   Urbina et al toxins paper
    *   Coscientist
    *   Open CRISPR
    *   vPST
    *   AlphaFold 3

### **Impact**

*   Establish coherent norms for mitigating biological design tool risks
*   Provide templates for new tool developers
*   Enable standardization of biosecurity practices

**4\. Vulnerability Disclosure Framework**
------------------------------------------

**Purpose**  
Establish clear process for reporting and responding to security vulnerabilities in biological design tools, especially when new tools could break existing biosecurity measures.

**Motivation**  
A year ago, [Tessa and I argued](https://arxiv.org/html/2311.15936) that vulnerability reporting was a particularly helpful option for mitigating BDT risk:“Developers could create (and regulators could require) mechanisms for software users to report concerning model behavior or other security flaws to their developers. This can help developers to quickly fix vulnerabilities, or, in extreme cases, rapidly roll back or withdraw a model. As an incentive to report potential risks, “bug bounties” could provide financial rewards to the reporter.”

Still, there is no standard for responsible disclosure when a new tool like AlphaMissense or AlphaFold could circumvent existing approaches to DNA screening.

This project is less well scoped, but would involve gathering examples where this has been the case and comparing studies both from do use research in biology and cyber security disclosure for computer systems. For instance, where does medical device vulnerability disclosure lie.

The aim would be to have a resource in public for developers to be able to disclose risk and also for policy makers to be able to make clear guidelines around mitigatingBy risk from these tools

**Details**  
 Gather and analyze examples from:

*   2001 mousepox GoF case (IL-4 enabled vaccine escape)
*   Medical device vulnerability disclosures
*   Cybersecurity responsible disclosure processes
*   Existing voluntary bio research disclosure norms

Framework should address:

*   When to disclose vs withhold information
*   Who receives disclosure (regulators, affected companies, public)
*   Timeline expectations for disclosure and mitigation
*   Potential role of bug bounties
*   Protection for good-faith reporters

**Impact**

*   Enables rapid response to new vulnerabilities
*   Provides clear guidance for tool developers
*   Creates incentives for responsible disclosure
*   Helps policymakers develop coherent disclosure requirements

5\. International Suspicious Activity Reporting Analysis
--------------------------------------------------------

**Purpose**  
 Create a comprehensive map of how biosecurity-relevant suspicious activity reports are handled internationally, focusing on data storage, reporting requirements, and privacy protection.

**Motivation**  
 The biosecurity community lacks clarity on reporting procedures for suspicious activities across borders. This parallels financial sector challenges that were addressed through mechanisms like the Basel Accords, but biosecurity needs its own framework.

**Details**  
 Research and document:

*   Current reporting chains for suspicious biological activities
*   Storage locations and access controls for suspicious activity data
*   Privacy protection mechanisms for sensitive business information
*   Jurisdictional responsibilities and overlaps
*   Comparison with financial sector solutions (Basel framework)
*   Gaps in current reporting infrastructure
*   See [this post](https://conradkunadu.substack.com/p/scaling-and-sustaining-standards) an excellent starting point.

**Impact**

*   Enable more effective cross-border monitoring
*   Protect legitimate business interests while maintaining security
*   Inform development of international biosecurity standards
*   Support emergence of coherent reporting requirements

Several biosecurity organizations need this analysis to develop reporting frameworks that balance security with business operations.

* * *

If you’re interested in any of these you can email [maxlangenkamp@securedna.org](mailto:maxlangenkamp@securedna.org) with your name, background, and your interest. Given enough interest, Tessa and I may organize a small group call to answer what questions we can and potentially pair people together.