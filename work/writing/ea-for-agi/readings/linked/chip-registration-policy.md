---
title: "Report: Evaluating an AI Chip Registration Policy"
author: "Deric Cheng"
date: 2024-04-12
url: https://www.lesswrong.com/posts/8u8x2bSpG9LLa8jfN/report-evaluating-an-ai-chip-registration-policy
fetched: 2026-07-06
via: forum-graphql
topic: "linked"
note: "cited by power-concentration-democracy/vitalik-dacc-one-year-later.md; report on AI chip registration — compute governance / anti-concentration"
---

*As part of our* [***Governance Recommendations Research Program***](https://www.convergenceanalysis.org/programs/governance-research), [***Convergence Analysis***](https://www.convergenceanalysis.org/) *is publishing a series of deep-dive analyses on specific, upcoming governance regulatory proposals. Our mission is to meaningfully contribute to the passing of critical & foundational governance policies that will serve to mitigate future risk from AI systems.*

*The first report we’re releasing evaluates a potential US registration and transfer reporting requirement for high-end AI chips. You can read the full report here:* [***Evaluating an AI Chip Registration Policy.***](https://www.convergenceanalysis.org/research/evaluating-an-ai-chip-registration-policy)

Report Summary
==============

The training and inference of frontier AI models require massive numbers of advanced semiconductor chips, which themselves require highly advanced infrastructure to build at scale. The production of these cutting-edge semiconductor chips is currently a major bottleneck for the AI industry. Therefore, regulating chip production and purchasing is a powerful and direct way to control the development and usage of frontier AI models. 

Mandatory AI chip registration may serve as a useful tool for a variety of purposes. It may improve enforcement of US export controls limiting Chinese access to high-end AI chips. It may be a foundational tool for the US government to build a comprehensive AI governance strategy. Additionally, it may serve as a useful safety tool enabling the mitigation of future risks from rapid AI development.

The topic of registering and tracking AI chips used to develop frontier AI models has been widely discussed, but little researched, particularly regarding the feasibility or precedent policies behind such a policy. This report intends to cover these topics. We’ll summarize the current landscape for regulating high-end AI chips, particularly the US export controls intended to limit Chinese access to high-end AI chips. Next, we’ll provide a quick overview of the major chip manufacturers, cutting-edge AI chips, and GPU development frameworks that play into current export controls.

Following this, we’ll evaluate the most likely requirements for an AI chip registration policy, including manufacturing registration, transfer and traceability requirements, and hardware security features. We’ll evaluate the precedent policies and likelihood of each of these implementations. 

As an example of a reasonable policy implementation, this report will propose a series of new legislative regulations that would direct the Bureau of Industry and Security (BIS) in the US Department of Commerce to implement a registration and reporting requirement for high-end AI chips. Such a bill would additionally request more funding for BIS to enact such a policy, and a potential expansion of the scope of US Foreign Direct Product Rules (FDPR) to allow the US government to track ownership of AI chips internationally.

Finally, this report will evaluate such an AI chip registration policy under the key criteria: 

1.  **Feasibility:** How likely is this policy to be passed by the U.S government?
2.  **Effectiveness:** Will this policy effectively improve enforcement of US export controls? Will it effectively support mitigating risks from AI models?
3.  **Externalities:** What impact will this policy have on innovation and competitiveness? 

Key Findings
============

### **The US executive branch is likely to be interested in implementing an AI chip registration policy in the near future due to its geopolitical AI competition with China.** 

As evidenced by its comprehensive export controls limiting Chinese access to high-end semiconductors, the US executive branch (specifically the Biden administration) has displayed a willingness to take decisive action to slow China’s AI progress. Over the past two years, it has repeatedly increased the breadth of its export controls to improve enforcement, including strengthening restrictions on the types of chips permitted to export and restricting chip exports to certain countries in the Middle East, all with the intent of limiting Chinese access. In its quest to reduce chip smuggling to Chinese organizations, a blanket high-end AI chip registration policy is one of the next most likely enforcement mechanisms. 

### **A US AI chip registration policy passed in the near future would likely consist of a manufacturing registration requirement and transfer reporting requirements.** 

There exist clear precedents in US policy for the design and implementation of manufacturing and traceability requirements, notably the International Traffic in Arms Regulations (ITAR) and the Foreign Direct Product Rule (FDPR). Though we discuss the possibility of additional on-chip hardware security features to better enforce such a registration policy, we conclude that such hardware features are difficult to implement and likely to be bypassable. As a result, we don’t believe it is likely that the US executive branch will include such requirements at this time.

### **Implementing a chip manufacturing registration requirement at this time has a streamlined enforcement strategy, requiring compliance from only 2-3 American chip vendors.** 

There is currently an extremely narrow bottleneck for companies selling high-end AI chips, with Nvidia and AMD occupying >95% of the market share. Though there are dozens of organizations designing and manufacturing AI chips, almost none are competitive with Nvidia. The majority of other chip designers are selling cloud access to their custom, in-house chips rather than selling the chips themselves. As a result, the US government could work directly with only 2-3 companies (including Nvidia and AMD) to enforce a manufacturing registration requirement with low overhead. 

### **Implementing a chip transfer reporting requirement globally would require a drastic expansion of current FDPR laws.** 

The US government has precedent policies mandating that American organizations report the transfer of certain classes of items to other entities, such as defense-related articles and military technology. However, it does not have existing precedent when it comes to enforcing such transfer reporting between any two international organizations. It could enforce such a requirement by leveraging and expanding the FDPR, placing non-compliant organizations under threat of removal from American supply chains (including future access to high-end AI chips). Such a maneuver would likely lead to substantial international pushback from US allies concerned about an overreach of American power and surveillance ability.

### **The US executive branch has the authority to create and enforce such an AI chip registration policy, but it lacks the ability to authorize additional funding.**

The most likely strategy for the US executive branch to pass a chip registration policy is via an executive order directing the Bureau of Industry and Security (BIS) to create such a policy. This is immediately feasible - however, BIS is severely underfunded and may not be able to enforce such a policy without additional resources. The executive branch typically cannot allocate additional funding without congressional approval.

Due to gridlock in the US Congress, we don’t expect that an AI chip registration policy will be likely to be passed as legislation in the near future. However, both the administration leading the executive branch and the US Congress may change drastically with the upcoming 2024 election cycle.

### **A globally enforced AI chip registration policy would immediately improve enforcement of existing export controls, and lay the groundwork for future compute regulations based on an AI chip registry.**

Such a policy would lead to a likely immediate reduction in the overall level of chip smuggling and provide more transparency into the distribution of high-end AI chips. It would give the US the ability to identify and monitor the compute capabilities of key organizations. Additionally, it would lay the groundwork for future compute regulations such as requiring mandatory on-chip security features or limiting the total amount of compute available to certain organizations.

### **An AI chip registration policy would have minimal negative externalities on overall AI innovation and Western competition, but may spur greater concerns about US governmental overreach.**

As such a policy does not create or enforce any specific restrictions, it would not independently reduce innovation. However, it would make potential restrictive policies (such as compute limits for organizations) more feasible to implement. It would also likely negatively impact the competitiveness of Chinese and Chinese-affiliated AI organizations due to improved enforcement.

In particular, enforcing such a policy by mandating global transfer reporting via the FDPR would lead to international debate about the scope of the U.S’s geopolitical AI competition with China. Such reporting standards would likely set new precedents regarding American international monitoring and increase the gap between American-aligned and Chinese-aligned organizations.

*Thoughts? We'd love constructive feedback or additional analysis in the comments section.*