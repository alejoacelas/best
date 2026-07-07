---
title: "Location Verification for AI Chips — Institute for AI Policy and Strategy"
url: https://iaps.ai/research/location-verification-for-ai-chips
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by funder-signals/longview-hems-rfp; IAPS on chip location verification for AI governance"
---

# Location Verification for AI Chips

[Issue Brief](/research/category/Issue+Brief)

May 16

Written By [Asher Brass](/research?author=65135a33700f3d411dc41b3c)

[ Download the full report ](/s/LocationVerificationforAIChips.pdf)

[ Download this issue brief ](/s/Location-Verification-two-pager-68r3.pdf)

_Issue brief written May 2025,_[_full 2024 report_](https://static1.squarespace.com/static/64edf8e7f2b10d716b5ba0e1/t/6670467ebe2a477eb1554f40/1718634112482/Location%2BVerification%2Bfor%2BAI%2BChips.pdf) _by Asher Brass & Onni Aarne_

AI is increasingly being recognized as a transformative and strategically crucial technology. However, advanced AI is only possible with large quantities of specialized semiconductor chips. Whichever country has more AI chips will have access to more, better AI.

In response to the importance of AI, the **US has imposed export controls on AI chips to protect the US technological advantage and prevent the PRC from catching up**. 

Unfortunately, these **export controls are being significantly undermined by smuggling** : Chips are being sold to apparent start-up companies in countries such as Malaysia and Singapore, [which promptly disappear after smuggling the chips into China](https://www.theinformation.com/articles/nvidia-ai-chip-smuggling-to-china-becomes-an-industry). A forthcoming Center for New American Security working paper estimates the number of chips smuggled in 2024 to be in the hundreds of thousands, significantly bolstering the PRC’s compute access.

However, even **the Bureau of Industry and Security does not know exactly how much of this kind of smuggling is happening, or in which countries** , **because they do not have sufficient resources to inspect even a minority of these companies.**

Fortunately, **modern AI chips already have capabilities to support technical location verification** , which would allow chip owners to easily provide regular verification that their chips remain in the approximate area of their intended destination.**This kind of verification would give BIS near real time visibility into where smuggling is likely to be happening, allowing enforcement actions and export controls to be targeted much more effectively** , reducing the need for blunt export controls covering many countries, while significantly reducing smuggling.

Technical location verification relies on the fact that **modern AI chips can securely verify their own identity** through a process called _attestation_ , based on [a unique cryptographic key](https://www.amd.com/en/blogs/2024/amd-s-commitment-to-open-security-technologies-in-.html) held [on each chip](https://docs.nvidia.com/attestation/overview-attestation-suite/latest/introduction.html). By establishing a **trusted landmark server** at a known location, and asking an AI chip to verify its identity to that landmark server, we can measure the delay of the response and determine a maximum plausible distance between the landmark and the chip in question, based simply on the speed of light. For example, if an AI chip took 1 millisecond to respond, and we know that the speed of light is 186 miles per millisecond, we know that the signal traveled at most 186 miles (round trip), and thus the chip can be at most 186/2 = 93 miles away from the trusted landmark server. If the landmark is in Taiwan for example, this would be sufficient to prove that the chip cannot be in mainland China.

**A rudimentary version of location verification of Nvidia H100 chips has already been successfully prototyped:** A video demonstration can be viewed at [ping-location.info](http://ping-location.info). The screenshot below shows that a prototype landmark in Singapore can verify that an AI chip in Singapore is within the pink dotted area, i.e. within 300 miles of Singapore:

In order to implement location verification at scale, chip companies such as Nvidia would need to implement two steps, which could likely be completed within six months:

  1. **Firmware update:** A firmware and software update that allows their AI chips to perform easy, rapid location verification. We estimate that this would cost less than $1 million**[1]**.

  2. **Landmark network:** A network of trusted landmark servers would need to be set up in or near all major data centers in all countries where smuggling is likely to occur. This would likely be somewhere between 100 to 500 landmarks depending on which countries are included, and which types of actors are required to provide location verification. At an estimated cost of $25,000 per landmark per year**[2]** , this would imply a cost between $2.5 million to $12.5 million per year.




In Nvidia’s case, the costs of a location verification system could likely be recouped if it enabled the sale of just 500 additional controlled AI chips**[3]**. Nvidia exported hundreds of thousands of such chips in 2024.

## Frequently Asked Questions

**Q1: Why not use GPS?**

**A:** GPS signals are easily spoofed and AI chips lack built-in receivers; delay based verification instead leverages each chip’s cryptographic key, making spoofing far harder.

**Q2: Does location verification violate privacy?**

**A:** No, location verification would target chips in data centers and shares no personal data, so it avoids conflicts with privacy regulations such as GDPR.

**Q3: Is this a security backdoor?**

**A:** No, verification is initiated and controlled by the chip’s owner: the chip signs a simple ping with its hardware root of trust, and no user data ever even needs to leave the local data center network.

**Q4: How is this different from “geofencing”?**

**A:** Verification simply verifies approximate location; geofencing would forcibly disable a chip outside a zone and is far more difficult to implement, and potentially open to abuse.  


**Q5: Will this restrict innovation or competition?**

**A:** Implementation is lightweight (e.g., by integrating the [Caliptra](https://github.com/chipsalliance/Caliptra) open source root of trust), and small vendors selling to low-risk customers could be exempt. Location verification could also allow more permissive export control rules by making enforcement easier after the fact.  


**Q6: Who operates and secures the landmarks?**

**A:** Either the chip maker or a neutral U.S. entity can run them under BIS-defined standards, with regular audits and spot physical inspections.

**Q7: What about when the chips are in transit?**

**A:** Chips in transit or in storage could not verify their location. Instead there would need to be a requirement to verify location when a chip has been installed. If chips are supposedly in storage or transit for a suspiciously long period of time, this should be investigated and BIS should be notified.

## Endnotes

**[1]** : One industry estimate placed the cost of firmware at $20 to $40 per line of code. Based on this estimate the cost of the update would likely be less than $1 million, assuming that the update would be fewer than 25,000 lines of code. ([www.ganssle.com/blog/blog/the-cost-of-firmware.html](https://www.ganssle.com/blog/blog/the-cost-of-firmware.html))

**[2]** : A secure tamper-proof hardware security module [would cost up to $20,000](https://nternetstiftelsen.se/docs/hsm-20090529.pdf), a basic server would cost approximately $4000. We amortize that across three years to arrive at an annual hardware cost of $8000 per year. Space in a secure data center would cost up to $12,000 per year. Adding on $5000 per year for general maintenance, we get $25,000 per year total.

**[3]** : Assuming a price of approximately $400,000 per Nvidia DGX server with eight H100 AI chips, and a profit margin of approximately 50%, a single order of 60 servers (480 H100s) would produce a $12 million profit for Nvidia, likely covering the cost of the location verification system.

[Compute governance](/research/tag/Compute+governance)[Asher Brass](/research/tag/Asher+Brass)

[ Asher Brass ](/research?author=65135a33700f3d411dc41b3c)
