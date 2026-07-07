---
title: "Risk aversion and investment (for altruists)"
date: 2013-02-28
url: https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by richard-ngo/cruxes-alternatives-to-ai-policy-work.md; Christiano on risk-neutrality in altruistic decision-making — EA principles/epistemics"
---

# [Rational Altruist](https://rationalaltruist.com/ "Home")

Adventures of a would-be do-gooder. 

### Risk aversion and investment (for altruists)

#### by paulfchristiano

Suppose I hope to use my money to do good some day, but for now I am investing it and aiming to maximize my returns. I face the question: how much risk should I be willing to bear? Should I pursue safe investments, or riskier investments with higher returns?

My knee-jerk response is to say “An altruist should be risk neutral. If you have twice as much money, you can do twice as much good. Sure, there are some diminishing returns, but my own investment is _minuscule_ compared to an entire world full of philanthropists. So in the regime where I am investing, returns are roughly linear.” (I might revise this picture if I thought that I was a very unusual philanthropist, and that few others would invest in the same charitable causes as me—in that case I alone might represent a significant fraction of charitable investment in my causes of choice, so I should expect to personally run into diminishing returns.)

But on closer inspection there is something fishy about this reasoning. I don’t have great data on the responsiveness of charitable giving to market performance, but at the individual level it [seems](http://www.jstor.org/stable/3083340) that the elasticity of charitable giving to income is about 1—if I am 50% richer (in one possible world than another), I tend to give 50% more to charity. So in worlds where markets do well, we should expect charities to have more money. If markets (rather, the average investor) do 10% better, I should expect 10% more money to be available for any particular charitable cause, regardless of how many donors it has.

Of course, there is a difference between the market’s performance and my portfolio’s performance—the funds available to a charity depend little on how _my_ portfolio does, just how the _average_ donor’s portfolio does. So what is the relevance of the above result to my own risk aversion? Intuitively it seems that the performance of the market is correlated with the performance of any particular investor, but how tightly?

There is a simple observation / folk theorem that applies to this situation. Suppose two investors’ portfolios are not perfectly correlated. Then (supposing those investors are earning the same returns) each would prefer to trade 1/2 of their portfolio for 1/2 of the others—averaging two imperfectly correlated assets reduces the variance. In an efficient economy, this dynamic ensures that every investor’s risk is well-correlated with the market. Any countercyclical assets will be absorbed into this ur-portfolio and invested in by every investor, thereby having the effect of reducing the variance of market returns.

There are many loopholes in this result, and markets are not perfectly efficient, but it provides an important intuition. If we have risky assets that are uncorrelated with (but have comparable returns to) the market, they will just be used to diversify portfolios and thereby become part of “the market.”

So to first order, the fact that I am a small piece of the charitable donations to a cause shouldn’t matter. My risk is well-correlated with the risk of other investors, and if I lose 10% of my money in a year, other investors will also lose 10% of their money, and less money will be available for charitable giving. This holds regardless of whether a cause has a million donors or just one.

The original question: “how risk averse should I be?” is now a question about the returns to charitable activities at a large scale. Clearly the first charitable donations will go to the best causes. How quickly does the quality of marginal charitable giving decline, as total charitable giving increases? This question is fundamentally specific to a cause. For most causes, there seem to be substantial diminishing returns. Some diseases are much easier to treat than others, some disasters easier to mitigate, etc. etc. However, it is worth keeping in mind the distinction between diminishing returns to money in the long-run and in the short-run. For example, if you have only thought of one good thing to do with $1M, your second million dollars would not do nearly as much good if you had to spend it immediately. But this isn’t because the second million dollars is much less valuable than the first million in the long run, it’s because the second million would be complementary with thinking that you haven’t yet done. In the long run you can spend more time thinking about what to do with $2M now that you have it, and put it to a good use. It still won’t be as good as the first million, but not as much less valuable as it appears in the short run.

The following are some important caveats and postscripts to this basic picture.

### **Ordinary investors are _very_ risk averse**

I originally suspected that altruists should be risk-neutral because they are contributing only a small part to large projects, and therefore face roughly linear returns. By now I’ve explicitly rejected that reasoning, but there is another reason that altruists might be interested in risky investments: ordinary investors appear to be _extremely_ risk averse. Evidence of and explanations for the so-called equity premium puzzle are a bit tricky to untangle, but it [looks like](http://www.commonfund.org/ei/2012%20EI%20Level%20I%20Prereading%20Material/Required%20Readings%20for%20Day%201%20-%20Monday,%20July%209th/Session%203%20-%20Long%20Term%20Global%20Equity%20Returns%20and%20the%20Equity%20Risk%20Premium/Rethinking%20the%20Equity%20Risk%20Premium%202011%20-%20CHAPTER%204.pdf) there is a _big_ premium on risk, such that risky equities earn annual returns a solid 3% higher than risk-free bonds.

If you have logarithmic utility, and estimate risk using historical data on the variability of equities returns, equities are a slam-dunk over safer investments, with risk-adjusted returns that are nearly twice as good. (This observation is the basis for the equity premium puzzle. The paper I linked suggests that the equity premium is smaller than you might naively estimate from US data, but it is still big enough to constitute a puzzle.) I think logarithmic returns are fairly conservative for altruistic projects (though perhaps not individuals’ consumption), and that for most causes the payoffs are much more risk-neutral than that. So it looks like altruists ought to go for risky investments after all.

Moreover, I suspect (on priors) that altruists tend to invest as cautiously as other investors, and so it makes little sense for an altruistic investor to diversify their portfolio between equities and bonds even if there is a significant risk of collapse in equities (other altruists are doing the diversification for them).

### **Some risks are uncorrelated with the market**

There are some opportunities which are risky but imperfectly correlated with the market (and sometimes nearly independent). For example, if you start or invest in a small company, your payoff will depend on that company’s performance (which is typically quite risky but only weakly correlated with the market). In an idealized market this risk would be added to a larger portfolio of risks, but this often impossible due to moral hazard: if you received a paycheck that was independent of the success of your company, you would not be incentivized to run the company well, or to pick good companies to create or invest in. So no one is willing to sell you insurance in case your startup fails or your investment goes bad. The fact that you have to assume a big dose of risk is an unfortunate side-effect of this incentive scheme (and in a more efficient market we would expect angel investors and start-up founders to purchase more extensive insurance for various contingencies that would scuttle their enterprises but are clearly beyond their control).

To a normal person this risk is terrible, but to an altruist it should be considered a good opportunity (since other entrepreneurs and investors will tend to underprice such opportunities). See a discussion of this [here](http://80000hours.org/blog/12-salary-or-startup-how-do-gooders-can-gain-more-from-risky-careers), with some quantitative discussion.

This special case is only possible because the entrepreneur or investor is putting in their own effort, and moral hazard makes it hard to smooth out all of the risk across a larger pool (though VC funds will invest in many startups). You shouldn’t expect to find a similar situation in investments, except when you are providing insight which you trust but the rest of the market does not (thereby preventing you from insuring against your risk).

### **Prioritizing possible worlds and concentrating investments**

Risk-aversion is a special case of a more general phenomenon; a dollar is worth a different amount in different possible worlds. For normal risk-aversion, the issue is how much money _you_ have in different possible worlds. A dollar is worth the most in the worlds where you are poorest. For altruists, the issue is how much money _charities_ have in different possible worlds. A dollar is worth the most in the worlds where the least money is given to charities, and the largest number of attractive interventions go unfunded.

But there are other reasons that money may be more valuable in one possible world than another, which depend on which cause you actually want to support. Money aimed at helping the poor is most valuable in worlds where the developing world is not prospering. Vegan outreach is most useful in worlds where the meat industry is doing well, but vegetarian-friendly memes are prospering. Catastrophic risk mitigation is most valuable in troubled times. And so on. Each of these comparisons suggests an investment strategy; investors who care about cause X would prefer have money in worlds where it can be used to further cause X most efficiently.

Moreover, while ordinary risk averse investors are incentivized to construct a diversified portfolios, altruists have no such incentives. Though they should be concerned with risk, what they are really concerned with is the correlation between their risk and market returns. Thus they are not particularly interested in building a diversified portfolio, and it is particularly cheap for them to concentrate their investment in opportunities which will payoff in the worlds where they can best use money. Of course, this strategy becomes less attractive when very few people are interested in cause X, or when many of the investors interested in cause X are pursuing the same strategy—those investors care about the correlation of their investment returns with each other, and  _collectively_ they do want to diversify their investments. If everyone who cares about vegetarianism goes broke in worlds where McDonald’s folds, it is no longer the case that vegetarian dollars are less valuable in those worlds.

### **Investing for the long haul**

I [think](https://rationalaltruist.com/2013/02/22/four-flavors-of-time-discounting-i-endorse-and-one-i-do-not/) that altruists concerned about the far future should consider investing and earning market returns for as long as possible, before leveraging a much-increased share of the future economy to further their own interests. How does risk relate to this plan?

It seems most productive to think about the _fraction_ of world wealth which an investor controls, since this quantity should be expected to remain fairly constant regardless of what happens economically (though will hopefully drift upwards as long as the altruist is more patient than the average investor) and ultimately controls how much influence that investor wields. A simple argument suggests that an investor concerned with maximizing their influence ought to maximize the _expected_ fraction of world wealth they control. This means that the value of an extra dollar of investment returns should vary inversely with the total wealth of the world. This means that the investor should act as if they were maximizing the expected _log_ -wealth of the world.

The recommendations for this setting (investing for the long haul) are therefore nearly identical to the earlier setting (investing to give). As in the earlier case, the apparent arguments for maximizing expected returns are faulty because it is bad to be correlated with the market. But nevertheless, the equity premium is large enough that investing in risky assets is still worth it. In fact in this case the issue is even more clear-cut, since there is little uncertainty about how risk-averse we should be when investing for the long haul.

### **The Kelly Criterion**

The Kelly criterion is a simple guideline for gambling / investing. The motivating observation is that, to maximize expected long-run returns, it is best to use a logarithmic utility function (because the total return after N periods is the geometric, rather than arithmetic, return during those periods). If we are directly concerned with logarithmic utility, we don’t need to rely on this argument and should just use the Kelly criterion immediately.

The Kelly criterion recommends splitting your money according to the probability of a payout, rather than concentrating all of your money on the single best bet. (See also [probability matching](http://en.wikipedia.org/wiki/Probability_matching), which has been [justified](http://web.mit.edu/alo/www/Papers/origin.pdf) on similar grounds.) In the case of investments, this corresponds to the following strategy (if we assume you have a negligible “edge,” or ability to predict tomorrow’s market prices better than other investors). For each asset, estimate what fraction of the current world’s _actual_ wealth is stored in that asset, and invest that fraction of your bankroll in that asset. As prices change, reallocate your money to maintain the same distribution. (If the value of land doubles while the rest of the economy stagnates, such that you now have twice as large a fraction of your bankroll invest in land, then sell off half of your land). Of course, if other investors are following a similar rule, any price changes will be information about the long-run values of the underlying asset values, but this seems to be [far from true](http://www.overcomingbias.com/2011/06/dreamtime-finance.html) in the real world.

Investors who support a rare cause and care about diversifying their own portfolio, should probably pursue something like a Kelly strategy. But as I’ve said before, investors pursuing common causes don’t care about diversifying their portfolios, and instead they should use their portfolio to pull the _aggregate_ investments of philanthropists in line with the Kelly rule investments. This seems to mean going all-in on relatively risky assets.

Like Loading...

### _Related_

Published: [February 28, 2013](https://rationalaltruist.com/2013/02/28/)

Filed Under: [Methodology](https://rationalaltruist.com/category/methodology/)

### 8 Comments to “Risk aversion and investment (for altruists)”

  1. [Ben Toner](http://bentoner.com) says:

[February 28, 2013 at 11:31 am](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-53)

Can’t you take this further and recommend that risk-neutral altruists make leveraged bets on equities?

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=53#respond)

     * [paulfchristiano](http://ordinaryevidence.wordpress.com) says:

[February 28, 2013 at 6:15 pm](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-54)

I don’t know, it depends on how cheap leverage is. My impression is that it tends to cost more than equities return, so it’s only a good idea if you have some info to bet on. I don’t know what the riskiest thing to do with money actually is, but it does seem quite possible that you should pursue something riskier than equities.

On that note, lots of speculative financial activities seem to fit into the same boat as startups, where you have to assume a lot of risk to keep the incentives right (or alternatively, you have to go through a very extensive process of vetting to make others comfortable enough to trust you and assume some of your risk). Risk neutral altruists ought to be relatively enthusiastic about such activities.

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=54#respond)

  2. Daniel Kane says:

[March 22, 2013 at 5:49 am](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-73)

I have considered the idea of “investing” charity-allocated money in the lottery during times when it has expected payout bigger than pay in. Then I rejected this idea based on not wanting to deal with the logistics.

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=73#respond)

  3. Alex Pickler says:

[December 16, 2013 at 5:21 am](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-635)

I sometimes believe that we focus too much on the research and if money is going to be made than just by having faith in an idea and in a person. I think the free flow of information on the internet has made us a bit detached. If the person has passion and you as an investor can’t find any holes in the idea. Let them run with it. Let their personal creativity guide their hand. If you have millions to invest I would spread that millions into little startups of 50 to 100 grand. If they need more funding they’ll have to find it, but how could dropping that little bit be bad. I see it as a win for everyone. Including the potential customer. To be able to deal with a company that is so thankful to just exist.

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=635#respond)

  4. Pablo says:

[March 17, 2014 at 1:36 am](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-915)

“at the individual level it seems that the elasticity of charitable giving to income is about 1”

Yet [elsewhere](https://rationalaltruist.com/2013/05/07/the-value-of-prosperity/) you write that “modern estimates for the income elasticity of giving are uniformly less than 1.”

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=915#respond)

     * [paulfchristiano](http://ordinaryevidence.wordpress.com) says:

[March 17, 2014 at 3:28 pm](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-920)

Two things: 

(1) for the purpose of this analysis it doesn’t really matter whether the number is 0.8 or 1.2, you get qualitatively the same conclusions, so it’s fair to round the numbers to 1 here; for the purpose of the other analysis the entire question was whether it was more or less than 1.0, 

(2) the empirical situation is actually pretty muddled (the point in the other post was just “hard to say,” so I didn’t look in too much depth). I would now guess that the actual income elasticity is more than 1, and the studies referenced in the earlier post had the obvious problem that elasticity to temporary fluctuations in income smaller than 1 and so if you look at a cross-section from one year you see an income elasticity less than 1. (Though note that this post is even before the other one you mentioned, and I definitely wouldn’t guess this confidently now.)

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=920#respond)

  5. [Common investing mistakes in the effective altruism community - 80,000 Hours](https://80000hours.org/2015/10/common-investing-mistakes-in-the-effective-altruism-community/) says:

[October 28, 2015 at 12:56 pm](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-5085)

[…] probably makes sense to be pretty risk neutral, depending on which causes you support (and also see this). With risk neutral money, if you don’t believe you can beat the market, then a leveraged […]

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=5085#respond)

  6. Andiena says:

[November 27, 2015 at 5:49 am](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comment-5208)

it is really interesting article!  
actually i’m working of my thesis dissertation about the effect of Saliance mortality to investor decision making process and the attitude toward risk..  
based on the prospect theory, they only explain about risk averse and risk preference.. but the participant probably becoming a risk neutral 🙂

[Reply](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/?replytocom=5208#respond)




### Leave a comment [Cancel reply](/2013/02/28/risk-aversion-and-investment-for-altruists/#respond)

[« Previous Post](https://rationalaltruist.com/2013/02/27/why-will-they-be-happy/)

[Next Post »](https://rationalaltruist.com/2013/03/03/a-problem-of-induction/)

[Blog at WordPress.com.](https://wordpress.com/?ref=footer_blog)

  * [ Comment  ](https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/#comments)
  * [ Reblog ]()
  * [ Subscribe ]() [ Subscribed ]()

    * [ Rational Altruist ](https://rationalaltruist.com)

  * Already have a WordPress.com account? [Log in now.](https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fr-login.wordpress.com%2Fremote-login.php%3Faction%3Dlink%26back%3Dhttps%253A%252F%252Frationalaltruist.com%252F2013%252F02%252F28%252Frisk-aversion-and-investment-for-altruists%252F)

  * Privacy 
  *     * [ Rational Altruist ](https://rationalaltruist.com)
    * [ Subscribe ]() [ Subscribed ]()
    * [Sign up](https://wordpress.com/start/)
    * [Log in](https://wordpress.com/log-in?redirect_to=https%3A%2F%2Fr-login.wordpress.com%2Fremote-login.php%3Faction%3Dlink%26back%3Dhttps%253A%252F%252Frationalaltruist.com%252F2013%252F02%252F28%252Frisk-aversion-and-investment-for-altruists%252F)
    * [ Copy shortlink ](https://wp.me/p2ydgH-1Z)
    * [ Report this content ](https://wordpress.com/abuse/?report_url=https://rationalaltruist.com/2013/02/28/risk-aversion-and-investment-for-altruists/)
    * [ View post in Reader ](https://wordpress.com/reader/blogs/37706831/posts/123)
    * [Manage subscriptions](https://subscribe.wordpress.com/)
    * [Collapse this bar]()




%d



  *[[February 28, 2013](https://rationalaltruist.com/2013/02/28/)]: 2013-02-28T03:40:51+0000
