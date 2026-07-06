---
title: "From prediction markets to info finance"
url: https://vitalik.eth.limo/general/2024/11/09/infofinance.html
fetched: 2026-07-06
via: html2text
topic: "persuasion-epistemics"
note: "Vitalik: prediction markets + community notes as flagship social epistemic technologies"
---

Dark Mode Toggle

  


#  From prediction markets to info finance 

2024 Nov 09  [See all posts](../../../../index.html)   
  
  
From prediction markets to info finance 

_Special thanks to Robin Hanson and Alex Tabarrok for feedback and review_

One of the Ethereum applications that has always excited me the most are prediction markets. I [wrote about futarchy](https://blog.ethereum.org/2014/08/21/introduction-futarchy), a model of prediction-based governance [conceived by Robin Hanson](https://mason.gmu.edu/~rhanson/futarchy.html), in 2014. I was an active user and supporter of [Augur](https://docs.augur.net/) back in 2015 (look, mommy, my name is in the [Wikipedia article](https://web.archive.org/web/20240917152508/https://en.wikipedia.org/wiki/Augur_\(software\))!). I earned $58,000 [betting on the election](https://vitalik.eth.limo/general/2021/02/18/election.html) in 2020. And this year, I have been a close supporter and follower of Polymarket.

To many people, prediction markets are about betting on elections, and betting on elections is gambling - nice if it helps people enjoy themselves, but fundamentally not more interesting than buying random coins on pump.fun. From this perspective, my interest in prediction markets may seem confusing. And so in this post I aim to explain what it is about the concept that excites me. In short, I believe that (i) **prediction markets even as they exist today are a very useful tool for the world** , but furthermore (ii) **prediction markets are only one example of a much larger incredibly powerful category** , with potential to create better implementations of social media, science, news, governance, and other fields. I shall label this category "**info finance** ".

## The two faces of Polymarket: a betting site for the participants, a news site for everyone else

In the past week, Polymarket has been a [very effective](https://marginalrevolution.com/marginalrevolution/2024/11/prediction-markets-for-the-win.html) source of information about the US election. Not only did Polymarket predict Trump would win with 60/40 odds while other sources predicted 50/50 ([not too impressive by itself](https://www.astralcodexten.com/p/congrats-to-polymarket-but-i-still)), it also showed other virtues: when the results were coming out, while many pundits and news sources kept stringing viewers along with hope of some kind of favorable news for Kamala, Polymarket showed the direct truth: Trump had a greater than 95% chance of victory, and a greater than 90% chance of seizing control of all branches of government at the same time.

  


_Two screenshots both taken at 3:40 AM EST, Nov 6_

  


But to me this is not even the best example of why Polymarket is interesting. So let us go to a different example: [the elections in Venezuela in July](https://en.wikipedia.org/wiki/2024_Venezuelan_presidential_election). The day after the election happened, I remember seeing out of the corner of my eye something about people protesting a [highly manipulated](https://www.nytimes.com/2024/07/31/world/americas/venezuela-election-vote-flaws.html) election result in Venezuela. At first, I thought nothing of it. I knew that Maduro was one of those "basically a dictator" figures already, and so I figured, _of course_ he would fake every election outcome to keep himself in power, _of course_ some people would protest, and _of course_ the protest would fail \- as, unfortunately, so many others do. But then I was scrolling Polymarket, and I saw this:

  


  


People were willing to put over a hundred thousand dollars on the line, betting that there is a 23% chance that _this_ election would be the one where Maduro would actually get struck down. _Now_ I was paying attention.

Of course, we know the unfortunate result of this situation. Ultimately, Maduro did stay in power. However, **the markets clued me in to the fact that _this time_ , the attempt to unseat Maduro was serious**. There were huge protests, and the opposition [played a surprisingly well-executed strategy](https://www.theguardian.com/world/article/2024/aug/10/gonzalez-proof-win-venezuela-election-vote-tally-maduro) to prove to the world just how fraudulent the elections were. Had I not received the initial signal from Polymarket that "this time, there is something to pay attention to", I would not have even started paying that much attention.

You should never trust the charts entirely: if _everyone_ trusts the charts, then anyone with money can manipulate the charts and no one will dare to bet against them. On the other hand, trusting the news entirely is also a bad idea. News has an incentive to be sensational, and play up the consequences of anything for clicks. Sometimes, this is justified, sometimes it's not. If you see a sensational article, but then you go to the market and you see that probabilities on relevant events have not changed at all, it makes sense to be suspicious. Alternatively, if you see an unexpectedly high or low probability on the market, or an unexpectedly sudden change, that's a signal to read through the news and see what might have caused it. **Conclusion: you can be more informed by reading the news _and_ the charts, than by reading either one alone**.

Let's recap that's going on here. **If you are a bettor, then you can deposit to Polymarket, and for you it's a betting site. If you are not a bettor, then you can read the charts, and for you it's a news site**. You should never trust the charts entirely, but I personally have already incorporated reading the charts as one step in my information-gathering workflow (alongside traditional media and social media), and it has helped me become more informed more efficiently.

## Info finance, more broadly

Now, we get to the important part: **predicting the election is just the first app**. The broader concept is that you can **use finance as a way to align incentives in order to provide viewers with valuable information**. Now, one natural response is: _isn't all finance fundamentally about information?_ Different actors make different buy and sell decisions because of different opinions about what will happen in the future (in addition to personal needs like risk preferences and desire to hedge), and you can read market prices to infer a lot of knowledge about the world.

To me, info finance is that, but [correct by construction](https://www.eschertech.com/products/correct_by_construction.php). Similar to the concept of correct-by-construction in software engineering, info finance is a discipline where you **(i) start from a fact that you want to know, and then (ii) deliberately design a market to optimally elicit that information from market participants**.

  


_Info finance as a three-sided market: bettors make predictions, readers read predictions. The market outputs predictions about the future as a public good (because that's what it was designed to do)._

  


One example of this is **prediction markets** : you want to know a specific fact that will take place in the future, and so you set up a market for people to bet on that fact. Another example is **decision markets** : you want to know whether decision A or decision B will produce a better outcome according to some metric M. To achieve this, you set up _conditional markets_ : you ask people to bet on (i) which decision will be chosen, (ii) value of M if decision A is chosen, otherwise zero, (iii) value of M if decision B is chosen, otherwise zero. Given these three variables, you can figure out if the market thinks decision A or decision B is more bullish for the value of M.

  


  


**One technology that I expect will turbocharge info finance in the next decade is AI** (whether LLMs or some future technology). This is because many of the most interesting applications of info finance are on "micro" questions: millions of mini-markets for decisions that individually have relatively low consequence. In practice, markets with low volume often do not work effectively: it does not make sense for a sophisticated participant to spend the time to make a detailed analysis just for the sake of a few hundred dollars of profit, and many have even argued that without subsidies [such markets won't work at all](https://worksinprogress.co/issue/why-prediction-markets-arent-popular/) because on all but the most large and sensational questions, there are not enough naive traders for sophisticated traders to take profit from. AI changes that equation completely, and means that we could potentially get reasonably high-quality info elicited even on markets with $10 of volume. Even if subsidies _are_ required, the size of the subsidy per question becomes extremely affordable.

## Info finance for distilled human judgement

Suppose that you have a human judgement mechanism that you trust, and that has the [legitimacy](https://vitalik.eth.limo/general/2021/03/23/legitimacy.html) of a whole community trusting it, but which takes a long time and a high cost to make a judgement. However, you want access to at least an _approximate copy_ of that "costly mechanism" cheaply and in real time. Here is [Robin Hanson's idea](https://www.overcomingbias.com/p/meta-jury-markets) for what you can do: every time you need to make a decision, you set up a prediction market on what outcome the costly mechanism _would_ make on the decision if it was called. You let the prediction market run, and put in a small amount of money to [subsidize market makers](https://www.lesswrong.com/posts/GxmfqKjs6ruxNxhqr/prediction-markets-explained#Subsidizing_Liquidity).

99.99% of the time, you don't actually call the costly mechanism: perhaps you "revert the trades" and give everyone back what they put in, or you just give everyone zero, or you see if the average price was closer to 0 or 1 and treat that as the ground truth. 0.01% of the time - perhaps randomly, perhaps for the highest-volume markets, perhaps some combination of both - you actually run the costly mechanism, and compensate participants based on that.

This gives you a [credibly neutral](https://nakamoto.com/credible-neutrality/) fast and cheap "distilled version" of your original highly trustworthy but highly costly mechanism (using the word "distilled" as an analogy to [LLM distillation](https://www.datacamp.com/blog/distillation-llm)). Over time, this distilled mechanism roughly mirrors the original mechanism's behavior - because only the participants that help it have that outcome make money, and the others lose money.

  


_Mockup of possible prediction markets + Community Notes combo._

  


**This has applications not just in social media, but also for DAOs**. A major problem of DAOs is that there is such a large number of decisions that most people are not willing to participate in most of them, leading to either widespread use of delegation, with risk of the same kinds of centralization and principal-agent failures we see in representative democracy, or vulnerability to attack. A DAO where actual votes only happen very rarely, and most things are decided by prediction markets with some combination of humans and AI predicting the votes, could work well.

Just as we saw in the decision markets example, info finance contains many potential paths to solving important problems in decentralized governance. **The key is the balance between market and non-market: the market is the "engine", and some other non-financialized trustworthy mechanism is the "steering wheel"**.

## Other use cases of info finance

**Personal tokens** \- the genre of projects such as [Bitclout (now deso)](https://bitclout.com/u/deso), [friend.tech](https://www.friend.tech/) and many others that create a token for each person and make it easy to speculate on these tokens - are a category that I would call "proto info-finance". They are deliberately creating market prices for specific variables - namely, expectations of future prominence of a person - but the exact information being uncovered by the prices is too unspecific and subject to [reflexivity](https://en.wikipedia.org/wiki/Reflexivity_\(social_theory\)) and bubble dynamics. There is a possibility to create improved versions of such protocols, and use them to solve important problems like talent discovery, by being more careful about the economic design of a token, particularly where its ultimate value comes from. Robin Hanson's [idea of prestige futures](https://www.overcomingbias.com/p/more-academic-prestige-futureshtml) is one possible end state here.

**Advertising** \- the ultimate "expensive but trustworthy signal" is whether or not you will buy a product. Info finance based off of that signal could be used to help people to identify what to buy.

**Scientific peer review -** there is an ongoing "[replication crisis](https://en.wikipedia.org/wiki/Replication_crisis)" in science where famous results that have in some cases become part of folk wisdom end up not being reproduced at all by newer studies. We can try to identify results that need re-checking with a prediction market. Before the re-checking is done, such a market would also give readers a quick estimate of how much they should trust any specific result. Experiments of this idea [have been done, and so far seem successful](https://www.pnas.org/doi/full/10.1073/pnas.1516179112).

**Public goods funding** \- one of the main problems with public goods funding mechanisms used in Ethereum is the "popularity contest" nature of them. Each contributor needs to run their own marketing operation on social media in order to get recognized, and contributors who are not well-equipped to do this, or who have inherently more "background" roles, have a hard time getting significant amounts of money. An appealing solution to this is to try to track an entire _dependency graph_ : for each positive outcome, which projects contributed how much to it, and then for each of those projects, which projects contributed how much to _that_ , and so on. The main challenge in this kind of design is figuring out the weights of the edges in a way that is resistant to manipulation - after all, such manipulation [happens all the time already](https://www.enago.com/academy/what-is-a-peer-review-ring/). A distilled human judgement mechanism could potentially help.

## Conclusions

These ideas have been theorized about for a long time: the earliest writings about prediction markets and even decision markets are decades old, and theory of finance saying similar things is even older. However, I would argue that the current decade presents a unique opportunity, for several key reasons:

  * **Info finance solves trust problems that people actually have**. A common concern of this era is the lack of knowledge (and worse, lack of consensus) about whom to trust, in political, scientific and commercial contexts. Info finance applications could help be part of the solution.
  * **We now have scalable blockchains as the substrate**. Up until very recently, fees were too high to actually implement most of these ideas. Now, they are no longer too high.
  * **AIs as participants**. Info finance is relatively difficult to make work when it must depend on humans to participate on each question. AIs greatly improve this situation, enabling effective markets even on small-scale questions. Many markets will likely have a combination of AI and human participants, especially as volume on specific questions suddenly switches from small to large.



To take full advantage of this opportunity, it's time to go beyond just predicting elections, and explore the rest of what info finance can bring us.
