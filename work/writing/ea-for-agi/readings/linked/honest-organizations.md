---
title: "Honest organizations"
date: 2018-02-01
url: https://sideways-view.com/2018/02/01/honest-organizations
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by paul-christiano-openai-alignment.md; Christiano on institutional honesty, relevant to AI lab governance/epistemics"
---

Suppose that I’m setting up an AI project, call it NiceAI. I may want to assure my competitors that I abide by strong safety norms, or make other commitments about NiceAI’s behavior.

This post presents one possible strategy for making such commitments credible. A realistic plan will be much more complicated and messy, and this plan has lots of problems, but I think it’s worth talking about ideas in this space (and that simple proposals will help get the ball rolling). Nothing in the post is really specific to AI.

Commitment mechanisms will be more important in the future than today, but I think it’s worth discussing them early for two reasons:

  1. The possibility or impossibility of commitments influences AI development strategy.
  2. Some commitment mechanisms require investment long before they are used.



(Nothing in this post is at all related to the views, policies, or plans of my employer. I think this is an important topic but this post is not deeply considered. I’ve benefited from discussing related ideas with Michael Page and Geoffrey Irving though that certainly doesn’t constitute an endorsement.)

### Part I: the underlined public statement

NiceAI will from time to time declare public statements to be  _underlined_. They announce the following public policy concerning underlined statements (the announcement is itself underlined):

> We aim to ensure that every  _underlined_ statement gives outsiders a clear, complete, and accurate picture—an outsider who learned all of the relevant facts would not consider themselves to have been misled, either actively or by omission.
> 
> Each underlined statement will be posted on a public bulletin board (e.g. a designated Twitter account) that employees are expected to read. The total number of underlined statements will be small, so that employees can read all of them and consider them in detail.
> 
> Any employee who feels that an underlined statement fails to give a complete and accurate picture—even if it falls only slightly short—is encouraged and expected to make a public comment clarifying, expanding, or disagreeing with it. Any employee who _suspects_ that an underlined statement may fail to give a complete and accurate picture is encouraged to investigate the matter internally.
> 
> We will circulate underlined statements internally before posting them publicly, so that employees have an opportunity to formulate responses. We will then include those responses along with the statement itself, so that anyone seeing the underlined statement can immediately access all caveats. If this process is not followed, we encourage employees to blow the whistle and try to initiate a public discussion.

### Part II: amplifying trust

By making an appropriate set of underlined statements, NiceAI can split the possible worlds into two groups:

  * NiceAI’s underlined statements are non-misleading, **or**
  * Almost all NiceAI employees are attempting to actively mislead the public.



There is no way that talking alone can ever distinguish these worlds (see part III for that), but talking  _can_ rule out the middle ground where NiceAI is merely  _a little bit_ deceptive. This is similar to my argument that [corrigibility is a basin of attraction](https://ai-alignment.com/corrigibility-3039e668638). We can think of this process as “amplifying trustworthiness.”

These might be statements like:

> NiceAI has extensive internal transparency, such that any coordinated effort by a small group to undermine underlined statements would be readily visible to most employees.

> NiceAI employees have frequent and secure opportunities to investigate and to anonymously report bad behavior. The unambiguous impression of all employees is that whistleblowing will be rewarded rather than punished.

> NiceAI’s hiring process positively selects for a desire to keep the organization honest, and is structured in such a way that it would be very difficult for any small group to reliably screen out would-be whistleblowers.

> External monitors given nominal access to NiceAI facilities and processes are really observing what they think they are observing. Continuing effort is made to ensure that monitors are aware of the existence of all relevant NiceAI activities, even where some details need to remain private.

> NiceAI employees have a variety of robust mechanisms to rapidly and anonymously alert outsiders of any attempt to apply coordinated pressure to NiceAI employees (whether by NiceAI itself or by outsiders).

> NiceAI has sufficiently transparent and comprehensive resource accounting that there is unlikely to be any large-scale unreported use of resources without many employees knowing. Enough people understand the details of each reported use of resources that the reported purpose is very likely to be accurate.

Ideally, these statements span a spectrum. If the simplest statements are grossly misleading, then there would be many NiceAI employees who would know that. And if the simplest statements are mostly true, then it is more likely that some NiceAI employee would notice and report if one of the more complex statements were misleading. In the end, the consistent possibilities are either that everything is a total fiction, or NiceAI has sufficient integrity that it would be very difficult to make misleading underlined statements.

### Part III: epsilon trust

Now NiceAI would like to have enough transparency to rule out the “everything is a total fiction” case.

One approach is to hire many staff with an apparent commitment to the public good and a diverse range of backgrounds (e.g. nationalities, social backgrounds, professional backgrounds, philosophical views), using a transparent selection process.

This process could convince some onlookers that NiceAI’s public statements aren’t a complete fiction: they only need to trust some of these initial staff, or to believe that the selection process wouldn’t support a coordinated effort to construct such a fiction.

If an initial level of trust is established, it can be amplified as in the last section, and it can be used to protect against changes that would make the organization less trustworthy.

There is a spectrum between diverse employees who can serve as whistleblowers, and monitors who are beholden to external organizations. Some employees may serve primarily as monitors rather than having a traditional role in the organization, and monitors may have varying degrees of access to the organization’s internal structure based on how much the organization is willing to trust them.

These efforts are more credible if initiated early, when it’s less likely that a powerful actor like a state would be willing to make a large investment in creating a sham commitment system. If there are twenty organizations forming in year 2019, and only one of them will be critically strategically important in 2024, it’s 20x harder for a state to compromise all of them.

These efforts are more credible if they are transparent and recorded publicly, such that they can be inspected with much greater scrutiny in the future.

### Part IV: the payload

If underlined statements let NiceAI make credible claims about its behavior, what should it claim to be doing?

(In this and the next section, I will assume that NiceAI is primarily making commitments about the use of computing resources. I think this is the most realistic case, but similar considerations would apply to other resources.)

One approach would be to directly make statements like “NiceAI abides by strong safety norms.” But even if internal transparency is excellent and the organization is constitutionally unable to lie outright, it might still distort its internal beliefs, use lax standards to evaluate such claims, or distort its public statements slightly.

More promising is to use underlined statements to make unambiguous claims about NiceAI’s behavior, and then have an external process which renders nuanced judgments.

As an example, consider the case of compliance with safety norms. Deciding what counts as “safe enough” is a complex judgment, requiring discussion across the ML community and other stakeholders, and potentially being sensitive to the details of particular approaches. For simplicity, assume that there is some external safety organization which engages with stakeholders, reviews the details of proposed developments, and then either OK’s them or requests that they stop (either to be revised or to be evaluated more extensively).

NiceAI could make the underlined statement:

> 99% of our computing resources have been set aside for approved development. Every application run on these resources is part of a project that has been approved in advance by the safety organization. No effort has been made to stretch or distort the coverage of approved projects, and when there is ambiguity we have engaged with the safety organization and disclosed that ambiguity.

This statement still involves a blurry line that is vulnerable to self-deception or slight distortions, but it’s now about “what constitutes an ambiguity?” rather than “what is safe?” As long as there is a significant gap between “is there any ambiguity at all?” and “is this an actual risk?” then NiceAI would need to lie  _significantly_ in order to cause damage. (Similarly, we can choose 99% so that there is a significant gap between the content of the agreement and the actual safe level.)

In order to get a project approved, NiceAI could approach the safety organization and describe in broad strokes the features of the project which they believe make it safe. For example, NiceAI might claim that a publicly available argument for safety applies to their project. This could be followed by an informal discussion after which the safety organization understands the argument for safety.

The safety organization would then ask for an underlined statement that the assumptions of the safety argument are indeed satisfied. They would also ask for an underlined statement about existence of other considerations (or caveats to the underlined assumptions) that might affect the validity of the safety argument. This could be followed by further discussion of those considerations and caveats.

By default the safety organization’s evaluation could be conducted transparently. But some of these discussions (or some aspects of these discussions) might need to occur privately. In this case the safety organization would need to engage an evaluator trusted by each external party that wanted assurances about NiceAI’s behavior (it could be a separate evaluator for each external party). Rather than making underlined public statements directly about their projects, NiceAI could make an underlined statements about the contents of those private evaluations.

### Part V: binding commitments

The machinery so far applies to statements about what NiceAI  _currently_ does. But in addition to convincing people that it is currently using its compute in safe ways, NiceAI may want to commit to _continuing_ to use its compute in safe ways.

If NiceAI leadership has physical control over NiceAI’s computing facilities, then they can unilaterally renege on such agreements.

So in order to make commitments, NiceAI leadership could relinquish physical control over their computing resources. Instead, they give control to some process diffuse enough to be trustworthy. This might involve a subset of NiceAI staff, or external actors (e.g. host country law enforcement).

(There a logistical question of how to actually confer physical control to some group. Ultimately the answer that’s of complex and messy; in addition to depending on institutional arrangements it also depends e.g. on who has how many guns. I don’t want to get into it here.)

This kind of arrangement will make it harder to use computing resources, even for honest purposes. In the long run we can use AI systems trained to predict the output of trusted deliberative processes, in order to be trustworthy with lower cost. Until sophisticated AI systems are available, though, this scheme would impose significant costs. We’d need to hope that those costs are manageable, that people are willing to pay a significant premium for trustworthiness, and that cost-reducing AI would become available before the stakes become too extreme.

Trusting this arrangement depends critically on trusting NiceAI’s statements about what is currently doing—about how NiceAI is organized, about the difficulty of internal coordination to undermine commitment mechanisms, about what various pieces of software actually do, etc. Having external monitors simply look at the code NiceAI wants to run on their cluster would be both very invasive and very ineffective. The point f these mechanisms is to extend trust in NiceAI’s current statements into trust about what NiceAI will do in the future.

### Conclusion

I am currently optimistic that leading AI projects will be able to coordinate to avoid a race to the bottom on safety, if coordination proves to be necessary. Doing so will definitely require mutual understanding amongst AI projects, but it might also involve creative institutions for amplifying small amounts of trust.

Today there is not widespread agreement about the need for coordination on safety. But I think that we should be able to agree that coordination _might_ be necessary, and that we should be interested in building a basis for trust and coordination.
