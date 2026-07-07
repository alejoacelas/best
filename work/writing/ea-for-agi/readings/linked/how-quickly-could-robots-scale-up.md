---
title: "How quickly could robots scale up?"
author: "Benjamin Todd"
url: https://benjamintodd.substack.com/p/how-quickly-could-robots-scale-up
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by 3 stage-1 readings, e.g. ai-safety-core/80k-preventing-ai-catastrophe.md; robotics/industrial scale-up of AI takeoff"
---

# How quickly could robots scale up?

### Some notes on robot economics.

[](https://substack.com/@benjamintodd)

[Benjamin Todd](https://substack.com/@benjamintodd)

Jan 12, 2025

45

18

2

Share

Today robots barely have the dexterity of a toddler, but [are rapidly improving](https://www.physicalintelligence.company/blog/pi0).

If their algorithms and hardware advance enough to handle many physical human jobs, how quickly could they become a major part of the workforce?

Here's some order of magnitude estimates showing it could happen pretty fast.

### Robot cost of production

Today's humanoid robots cost [about $100,000](https://robozaps.com/humanoid-robot-cost/),1 with perhaps 10,000 units produced annually. But manufacturing costs tend to plummet with scale:

For solar energy, every [doubling of production was associated with a 20% decline in costs](https://ourworldindata.org/data-insights/solar-panel-prices-have-fallen-by-around-20-every-time-global-capacity-doubled). In other industries, we [see estimates ranging from 5-40%](https://www.construction-physics.com/p/where-are-my-damn-learning-curves), so 20% seems a reasonable middle point.

[](https://substackcdn.com/image/fetch/$s_!PE-R!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b1750ca-d2e7-4f9f-ad8d-f409025dee81_1350x952.png)

That means a 1000x increase in production (10 doublings), should decrease costs 10x to $10,000/unit. That’s around the cost of manufacturing a car.

However, humanoid robots only use about 10% the materials of a car, so it’s plausible they could eventually become another 10x cheaper, or $1000 each.

Though, it’s also possible the elements for fine motor control remain far more difficult to manufacture. Let’s add 2x to account for that.

### Robot operating costs

If a robot costs $10,000 and lasts for 3 years working 24/7, the hardware costs $0.40 per hour.

At $2000 each, the hardware would only be 8c per hour.

There would also be maintenance costs. You could easily spend 10% of capital costs maintaining a car per year, and robots will be more complex and more frequently. If we assume another 33% of capital costs per year for maintenance, that roughly doubles the hardware costs.

What about electricity? [Tesla’s Optimus uses about 0.300 kW](https://www.linkedin.com/pulse/tesla-optimus-gen-3-game-changer-humanoid-robotics-roh-habibi-wzybc/), and a kWh costs about $0.1 in the US, so an hour of use would cost about $0.03. (Future costs would depend on future electricity prices; though might come down due to greater efficiency.)

Initially, running the AI algorithms might be as high as $10/hour,2 but [algorithmic efficiency improves ~3x per year](https://epoch.ai/blog/algorithmic-progress-in-language-models), so within 6 years these costs would become negligible.

So it looks like the cost to run a humanoid robot will eventually be under $1/hour, and plausibly under $0.20/hour.

That’s 10x-100x less than a human worker in rich countries, so demand would be massive.

[](https://substackcdn.com/image/fetch/$s_!53OC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51767a55-1e7d-4262-9ae5-81978c0be1fa_1126x564.png)

### Robot demand

Billions of people do physical jobs today. Robots would eventually be cheaper and able to handle tasks too boring or dangerous for humans, so I think demand could quickly reach ~1 billion robots per year.

Even if humans remain an important bottleneck, it seems plausible there could eventually be multiple robots per person (perhaps mostly deployed in mining, construction and factory work), which might require production around 10 billion/year.

If AIs can direct robots autonomously, the numbers could continue growing from there.

I want to emphasise I'm considering a scenario in which robots can truly substitute for human jobs. If performance is instead janky, as seems likely initially, then demand will most likely be lower. (Though in many areas, weaker-than-human performance will be fine e.g. warehouse robots don't require human dexterity.)

That said, just as how self-driving cars need to be _safer_ than human drivers, in some areas, our institutions will demand _greater_ -than-human performance. That could keep demand down for some more years until the algorithms advance.

A massive backlash could also prohibit robots being used in many applications.

### Speed of robot scale up

[](https://substackcdn.com/image/fetch/$s_!JbDe!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84e210a9-82dd-4867-a277-7c55e37f767f_1600x1238.png)

During WW2, car companies switched to producing planes and tanks in a matter of years.

With massive economic incentives, we could see car factories could be used to produce robots.

World [car production is about 90 million](https://en.wikipedia.org/wiki/List_of_countries_by_motor_vehicle_production). If each car is 1500kg, that’s 135 billion kg per year.

Each robot is about 80kg, so assuming 50% conversion efficiency that would be enough industrial capacity to produce ~1 billion robots per year perhaps in under 5 years.

If you know something about manufacturing, I’d be interested in more information on how feasible this would be. There might also be other input goods that become the bottleneck, such as a particular type of sensor.

After our existing industrial base is used, new factories would need to be built, which could take significantly longer.

However, Tesla can build gigafactories in about two years. And even many large companies have been able to grow output around 30% per year for a sustained period, so that seems like a lower bound.

If car factories aren’t or can’t be used, the scale up would probably take a lot longer. Typically large industries take decades to build. Tesla was able to grow car production over 2-fold per year in many years. But going from production of 10,000 to 1 billion units is 17 years of 2-fold per year growth.

However, the above assumes no speed up due to AI and robotics itself. If we have advanced robotics algorithms, then we probably have many other kinds of advanced AI that will be useful in managing factory construction. And once some humanoid robots have been built, you can use them to do 24/7 construction of further factories.

So I think we should expect it to be possible scale up to be faster than what’s been seen historically. I’d guess a superintelligence assisted scale-up could be 2-10 times faster than what’s been possible historically.

[](https://substackcdn.com/image/fetch/$s_!mI2n!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4597d693-1976-4154-b20d-3d5c5e226fcd_1280x853.png)

### Summing up

If robotics capabilities advance enough, we could see production scale to a billion robots within 5 years through converted car factories (though it could also take much longer). While today's robots aren't nearly capable enough, [algorithmic progress could accelerate](https://situational-awareness.ai/from-agi-to-superintelligence/), getting us to that point faster than most expect.

Thanks for reading Benjamin Todd! Subscribe for free to receive new posts and support my work.

1

It’s not clear they’ll stick to a humanoid form, but let’s work with that for now.

2

A human can absorb or output about 300 tokens per minute of text. [Video input](https://epoch.ai/blog/can-ai-scaling-continue-through-2030#appendix-d-equivalence-between-multimodal-and-text-data) or cross-checking might require 10x more tokens. That would be 180,000 tokens an hour, which would cost about $10/hour today from OpenAI’s most expensive o1 model.

45

18

2

Share
