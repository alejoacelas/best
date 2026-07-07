---
title: "Long-Term Growth As A Sequence of Exponential Modes"
url: https://mason.gmu.edu/~rhanson/longgrow.html
fetched: 2026-07-06
via: html2text
topic: "linked"
note: "cited by macaskill-worldview/80k-paralysis-hinge-of-history; Robin Hanson modeling long-run growth as a sequence of exponential modes — the case a fast AI-driven growth mode is plausible; macrostrategy."
---

**A substantially newer, October 2000, version of this paper is available in[pdf](./longgrow.pdf) or [ps](./longgrow.ps) format.**

## Long-Term Growth As A Sequence of Exponential Modes

[Robin Hanson](./)   
Dept. of Economics  
George Mason University

First Version 9/11/98, Revised 5/03/00 

_

> Brad De Long has cleverly combined standard world product time series with older population time series, to construct a history of world product from one million B.C. to today. After modifying De Long�s series to reflect more recent estimates of prehistoric population, we model this product history as both a sum of exponentials, and as a constant elasticity of substitution (CES) combination of exponentials.
> 
> World product history since two million B.C. is [reasonably](./grow/fig1.html) described as a CES combination of three distinct exponential growth modes: �hunting,� �farming,� and �industry.� Each mode seems to have grown over one hundred times faster than the relevant previous mode. The CES parameters describe how much each mode substituted or complemented its neighbors. �Farming� seems to have strongly substituted for �hunting,� making for a sharp transition, while �industry� more complemented �farming,� making for a smoother transition. 
> 
> If it is possible for the economy to again transition to a faster mode, and if modes are comparable in terms of how much the economy grows when they dominate and how much faster new modes are, then within the next century we may see a transition to a growth mode where the doubling time is measured in weeks, not years. 

_

### Introduction

Population has been the single most popular parameter used to describe long term human history. Population estimates have been offered going back many thousands of years. Most attempts to formally model human history have therefore focused on population time series. 

Population is clearly a parameter of direct interest, is widely perceived to be relatively "objective". For most of human history population seems to have reasonably reflected most fundamental changes, including areas colonized, capital accumulated, and technologies adopted. This seems to be because new productive abilities have mainly resulted in larger populations under "Malthusian" conditions of near-subsistence per capita consumption. In the last century or so, however, wealth has increased faster than population seems able or willing to, making the relation between population and our abilities more complex. 

Total world economic "product" seems a reasonable candidate for a more fundamental parameter describing recent world history. Being the market price of all goods and services produced, it measures how population, technology, and capital enable people to get things they value. Unfortunately we have lacked estimates of this parameter for before a century or two ago [Maddison 95]. Recently, however, economic historian Brad De Long has cleverly used the fact that per capita consumption has long been roughly constant to create long term estimates of world product out of long term population estimates [De Long 98]. His estimates range from one million B.C. to 2000 A.D., but his estimates for before 10,000 B.C. are based on forty year old speculations from a single source [Deevey 60]. I will here use De Long's world product estimates as my primary data source, except that I replace those old speculations with more recent estimates going back to two million B.C. [Hawks et al 00]. 

Given that we are going to focus on modeling world product time series, what functional form should we use to model that series? 

Simple exponential growth is probably the most popular general model for describing positive quantities that grow in time by many orders of magnitude, as both population and world product have. Simple variations on exponential growth, such as linear trends in growth rates, have been particularly popular in making short term population forecasts [Lee 90], but seem inadequate for longer term forecasts. Variations on logistic growth have also long been popular in estimating various population trends [Meyer & Ausubel 99], but also seem inadequate for modeling very long term trends [Cohen 95]. 

Many researchers have had more empirical success explicitly modeling long term population histories with functions that describe accelerating change. The first such efforts used simple hyperbolics [Von Foerster, Mora & Amiot 60], and soon became infamous warnings against taking one's model too literally, since they predicted an infinite human population in the early twenty first century. 

More recent related efforts [Kremer 93, Kapitza 96, Johansen & Sornette 00] have all included corrections to describe the recent slowdown and other complexities in population trends, mostly by allowing population to today be approaching fundamental limits, and hence the final end of accelerating growth. 

While many authors have informally summarized world history as continually accelerating change, many others have described human history as a sequences of specific growth modes. History has, for example, been described as the slow expansion of hunter-gatherers, followed by faster growth with the domestication of plants and animals, and then followed by even faster growth with science and industry [Cipolla 67]. 

Simple exponential growth is a very common model for describing particular historical periods. It is, for example, widely used to model the last half century of world economic growth [Barro & Sala-i-Martin 95], the last few centuries of growth in scientific literature [Price 63], the spread of humans before agriculture [Hawks et al 00], and the increase in animal brain sizes before that [Russell 83]. 

Since historical periods tend to be described as exponential growth, formal models of transitions between periods tend to be models of transitions between exponential growth. Many have modeled the industrial revolution this way [Goodfriend & McDermott 95, Hansen & Prescott 98, Jones 99, Steinmann et al 99, Weil & Galor 99, Lucas 00]. At least one earlier transition, to cities, has also been modeled this way [Goodfriend, McDermott 95]. And possible current or upcoming transitions, such as due to computers or the internet, have also been modeled this way [Helpman 98]. 

Given all this, seems natural to formally model the long term history of humanity as a sequence of exponential growth modes. Yet to my knowledge no one has done this. Some authors seem to have come close, by drawing exponential curves suggestively next to data on log-log graphs of population growth [Deevey 60, Kates 96, Livi-Bacci 97]. (Many of these authors, however, do not seem to have realized that it could be simple exponentials they were drawing, and instead of "exponential growth followed by a period of approximate stability" [Kates 96].) 

One author did more explicitly consider and reject a sum of exponentials model for world population history, though without any explicit model fitting or test [Cohen 95]. (Another author considered a sum of two exponentials, one of which was _decreasing_ [Lee 88].) This paper thus takes on the neglected task of more formally modeling long term human history as a sequence of exponential growth modes. In particular, this paper considers such a model of world product history.

Once we have chosen to model history as a sequence of exponential modes, there remains the question of how we should mathematically model transitions between exponential growth modes. This paper will here first try a simple sum of exponentials, and then try to replace this sum with a CES (constant elasticity of substitution) form. Such a form allows each transition to be either sudden or gradual, depending on a single free parameter per transition. We will end up with a model describing the three classic growth modes, which we might call hunting, farming, and industry, placed in the context of a fourth earlier mode of the growth of animal brains. 

After describing these models, and discussing their interpretation, we will then turn to the question of whether and when we might see a transition to yet another mode of economic growth, and how fast growth might then be. Even if it seems quite unreasonable to expect an infinite series of faster and faster growth modes, leading to infinite world product in finite time, it may be more reasonable to wonder if a world that has so far seen four distinct growth modes might see yet one more. 

### The Data

Economic historians have estimated world product over the last century or two, while others have estimated world population over the last ten thousand years, and more crudely over the last two million years. Recently, economic historian Brad De Long has taken these population estimates and created world product estimates ranging back as far as 1 million B.C. [De Long 98]. He does this using a simple linear relation between population growth rates and per capita product, a relation which seems valid at low values of per capita product. 

I here use De Long's preferred world product time series, except that I substitute more recent estimates for population prior to 10,000 B.C. De Long continued the use in [Kremer 93] of population estimates from [McEvedy & Jones 78] back to 10,000 B.C., and of estimates from [Deevey 60] for three dates before that. I excise Deevey's estimates and instead substitute two more recent population estimates. A wide range of genetic evidence suggests to [Hawks et al 00] a population of about ten thousand at about 2 million B.C., and that we "cannot reject exponential growth from" then until 10,000 B.C. Consistent with that conclusion, they also to accept a [Weiss 84] estimate of about half a million between 1 million B.C. and 500,000 B.C., which I've coded as at 750,000 B.C. 

The resulting world product time series has 54 data points and is graphed in [Figure 1](./grow/fig1.html). In that figure, world product is described in units of an equivalent number of humans at a subsistence income level. Time is described by the number of years before the somewhat arbitrary date of 2050. (The data is also graphed in [Figure 2](./grow/fig2.html), which shows world product growth rates versus levels, displaying each step between data points as a horizontal line. This graph looks noisier, because growth rates are noisier, but it has the virtue of avoiding the arbitrary choice of a reference date like 2050.) 

In the analysis below, I also make use of observations that maximum animal mass and relative brain size have both grown roughly exponentially since the Cambrian explosion about 550 million years ago, when animals first appeared in large numbers in the fossil record. The mass of the then largest animal doubled roughly every 70 million years, while brain volume relative to body volume (raised to the 2/3 power) has doubled roughly every 50 million years [Russell 83]. (More details on the details of brain size history are given in [Jerison 91].) Together these estimates imply that maximum animal brain size has doubled roughly every 34 million years over the last 550 million years (for a total of about 16 doublings). 

### A Sum of Exponentials Model

To my knowledge no one has tried to formally model long-term growth as a sequence of exponentially growing modes. I thus attempt to do so here for world product. One very simple sequence of growth modes model is a sum of exponentials. So, using a min-square-error of logs method, I get an eyeball-pleasing fit, and an average percentage error of 1.8%, with a sum of four exponential terms. [Figure 1](./grow/fig1.html) compares this model with the data, and indicates that the main errors seem to be due to unmodeled fluctuations with a period of roughly 500-1500 years. Figure 1 also compares the best fit hyperbolic model, which goes to infinity in 2004, and which has a much inferior average error of 10%. 

For each term, I've listed in the table below a rough qualitative description, its doubling time, and the "mid-transition" date when it began to be the largest term in the sum. I also give the factor by which the doubling time accelerated between terms, expressed as the number of doubles of the doubling time. Finally, I show how much world product (WP) increased due to each term, by comparing world product at the end of a term's period with the world product that would have resulted from the previous terms alone. I express this as a number of doubles of world product. For comparison, the first mode listed describes the exponential growth of brain size (which isn't directly comparable because it is not obviously a growth in world product). 
    
    
       Mode     Doubling   Date Began   Doubles  Doubles
      Grows     Time (DT)  To Dominate  of DT    of WP  
    ----------  ---------  -----------  ------   ------- 
    Brain size   34M yrs    550M B.C.     ?       "~16" 
    Hunters     230K yrs   2000K B.C.    7.2       8.7   
    Farmers      860 yrs    4700 B.C.    8.1       7.5   
       ??         58 yrs    1730         3.9       3.2 
    Industry      15 yrs    1903         1.9      >6.3 

(Using three terms instead of four in the sum of exponentials model gives a visibly much worse fit.)

### CES-Combined Exponentials

While most of the modes in the above model seem to have a natural interpretation, the second to last mode, the one with a 58 year doubling time, seems more difficult to interpret. Visibly, it seems to just be there to allow the model to describe a slower transition than a simple sum of exponentials will allow between the modes before and after it. 

To more directly model the possibility of a slow versus fast transition between modes, we can combine terms not with a sum, but with a constant elastiticity of substitution (CES) form [Barro 95]: 
    
    
                  a     a  1/a 
    C(x,y,a) = ( x  +  y  )    . 
    

When the CES power is _a=1_ , this is _x+y_ , the previous case. When _a=0_ , this is _x*y_ , which for exponential terms means you just add their growth rates, making a transition which is infinitely slow. When _a_ is positive infinity, this is _max[x,y]_ , with an instant switch to the faster term. (When _a_ is negative infinity, this is _min[x,y]_ , with an instant switch to the slower term.) Other values of _a_ allow continuous variation between fast and slow transitions. More than two terms can be combined by nesting this form, as in _C(C(C(w,x,a),y,b),z,c)._

Using this CES form, and again using a min-square-error of logs method, I get an eyeball-pleasing fit, and an average percentage error of 1.7%, with three exponential terms. This model is compared to the data in [Figure 1](./grow/fig1.html) and [Figure 2](./grow/fig2.html). 
    
    
      Mode      Doubling   Date Began   Doubles  Doubles  Transition
      Grows     Time (DT)  To Dominate  of DT    of WP    CES Power
    ----------  ---------  -----------  ------   -------  ----------
    Brain size   34M yrs    550M B.C.     ?       "16"      ?
    Hunters     224K yrs   2000K B.C.    7.3      8.9       ?
    Farmers      909 yrs    4856 B.C.    7.9      7.6      2.4
    Industry     6.3 yrs    2020 A.D.    7.2     >9.2      0.094

This model has the same number of free parameters as the four-term sum of exponentials model, and has an modest 8.5% smaller total squared log error. 

### Interpreting the Modes

By describing world product history as either a sum or CES-combination of exponentials, it seems that one is essentially saying that among all the thousands of large changes that the world economy has seen, only a handful are fundamental. Other changes are either mostly irrelevant, or such that a change of broadly similar magnitude and timing was largely predetermined by the fundamental growth forces. Typically, the economy is dominated by one particular mode of economic growth, which produces a constant growth rate. 

While there are often economic processes which grow exponentially at a rate much faster than that of the economy as a whole, such processes almost always slow down as they become limited by the size of the total economy. Very rarely, however, a faster process reforms the economy so fundamentally that overall economic growth rates accelerate to track this new process. The economy might then be thought of as composed of an old sector and a new sector, a new sector which continues to grow at its same speed even when it comes to dominate the economy. 

Following this line of interpretation, the simple sum of exponentials model seems to assumes that during each transition, the "new" and "old" economies co-exist but do not influence each other. In contrast, the CES-combination form seems to describe interactions between modes. Modes might complement each other (_a <1_), making for a more gradual transition, or substitute for each other (_a >1_), making for a sharp transition. 

Maximum brain size does not translate very directly into world product, but the long roughly steady growth in maximum brain size has been included here as a reference mode because it seems the relevant growth mode prior to the early spread of the human population. Product growth in an economy of human-like creatures seems to have awaited the evolution of a land-based animal with hands and a human-sized brain. 

The large transition that appears around 5000 B.C. is naturally interpreted as the transition to from "hunting" to "farming" (both broadly construed). Populations relying on food from the domestication of plants and animals seem to have grown exponentially for several millennia before this transition date, nicely fitting a simple interpretation of co-existing new and old economies [Diamond 97]. In the CES model, the power estimate for the farming transition suggests that farming mostly substituted for hunting, rather than complementing it. This makes sense given that farming and hunting economic modes competed for the use of land and labor. 

The recent "industrial revolution" transition has a CES power describing a much more gradual transition, suggesting less substitution and more complementarity between the old and new economic growth modes. If we interpreted the old and new modes relatively literally as "farming" and "industry", this could makes sense because improved farming technology has freed workers for industry, while improved industry technology has often transferred to farming technology.

Such a literal interpretation, however, is argued against by the CES model estimate that we will not "officially" transition to the new mode until 2020, in the sense of having the new contribution to the world economy exceed the old part. For this to make sense, much of our non-farming economy needs to be interpreted as dominated by the "old" growth mode. (The discrepancy between the 6 year new fundamental doubling time and the current roughly 15 year doubling time is due to being in the middle of a long slow transition.)

The form of our models suggest that the new growth mode might be found in small quantities substantially before it has a noticeable effect on total growth rates, and that what distinguishes this new economy inside the old is that it is growing rapidly, at a rate related to what will be the new total economic growth rate. We might thus better understand what distinguishes the current "new" and "old" growth modes by looking for processes which grew before the transition at the new doubling time of roughly 6 to 15 years.

Some interesting candidates are found in measures of scientific progress. The number of scientific journals has doubled steadily about every 15 years since about 1750, even though the world product doubling time in 1750 was around a century. (From about 1650 to 1750 both journals and scientific societies doubled roughly every 30 years.) Narrower measures of progress grow slower, while broader measures grow faster. For example, the number of "important" discoveries has doubled every 20 years, the number of U.S. engineers has doubled every 10 years [de Solla Price 63]. 

This rough coincidence in timing and doubling times suggests, though only weakly, that the fundamental mode difference might be between a new "scientific" evolution and diffusion of knowledge via a subject-specific network of articulate specialists, and the older diffusion of seeds and artifacts via a simpler more spatial network of less specialized people. If so, the new 15 year doubling time of the sum of exponentials model suggests that published papers is close to the fundamental unit of growth, while the 6 year doubling time of the CES model suggests that a very broad measure of "scientific"-like activity is closer to the fundamental unit of growth. 

How can we make sense of the basic idea of the world economy transitioning to new growth modes? That is, if the economy is capable of faster growth modes, why did not the economy not grow that fast before? Of the many models mentioned above of transitions between historical economic growth modes, perhaps the simplest postulate minimum scale effects, so that a new growth mode is simply not possible in economies below a certain size, density, or technology level. A stochastic variation on this is to make the number of attempts or chances to discover a new growth mode be proportional to the current scale of the economy. This variation also predicts that a transition will occur at roughly the time when the economy reaches some predetermined scale.

Such models could interpret the roughly stair-step shape of [Figure 2](./grow/fig2.html) somewhat literally. The lip of each step would describe a new mode which could not be implemented until world product, moving along the x-axis, reached the base of that step. 

### Could It Happen Again?

If one takes seriously the idea of long-term economic history as a sequence of exponential growth modes, one might naturally wonder if a world economy that has so far seen at least three dramatic transitions to much faster growth modes will see yet another such transition. And in fact one pair of authors did informally "speculate on a fourth [Deevey-60-like] `information' pulse starting now that would enable another order-of-magnitude rise" in population, but take the idea no further [Ausubel & Meyer 94]. 

Are there ways an economy can grow fast that will not be possible until the world economy is larger or denser than it now is, or until some key technology becomes cheaper than it now is? While it is certainly possible that the economy is approaching fundamental limits to economic growth rates or levels, so that no faster modes are possible, we should also consider the other possibility. 

To estimate how soon might the world economy might jump again to a faster growth mode, and how much faster might that mode be, we must make some assumptions about what it is that is similar across past and future modes and mode transitions. The apparent regularities in [Figure 2](http://hanson.gmu.edu/grow/fig2.html) suggest one approach. They suggest that we treat changes in world product and growth rates as similar across growth modes. More precisely, if we assume that at each transition, new values of DT doubles and WP doubles are drawn again from the same constant-in-time distributions of these parameters, then previous values of these parameters offer "sample" estimates of future parameter values.

In the sum of four exponentials model, if the current mode were to last through as many WP doubles as one of the three other most recent growth modes, it would last until either the sample dates of 1963, 2032, or 2066. If it lasted as many doubles as the previous brain growth mode, it would last until 2162. If the next number of doubles of DT were the same as one of the last four DT doubles, the next doubling time would be either would be .05, .1, 1, or 4 years.

In the CES model (which this author prefers) if the next number of doubles of DT were the same as one of the last three DT doubles, the next doubling time would be either would be 1.3, 2.1, or 2.3 weeks. This suggests a remarkably precise estimate of an amazingly fast growth rate. 

In the CES model, if the next mode were to arrive after the industrial mode had induced as many WP doubles as one of the two other most recent growth modes, it would have arrived at one of the sample dates of 1976 or 1996. This is because the industrial mode has already caused substantially more WP doubles than the last two modes did, even though it has by one definition has not yet fully arrived. If, however, the industrial mode lasted through as many doubles as the previous brain growth mode, it would arrive in 2072. 

If instead of assuming that WP doubles are what are similar across modes, we assume that what is independently drawn each time is the number of doubles of a term during the period when that term dominates, then the sample dates for the next transition would be 2067 and 2075 based on the last two world product growth modes, and 2120 based on a comparison with the prior brain growth mode.

One way to examine the robustness of these forecasts is to see what these models would have predicted using only the data up to some previous date. With only the data up to 1900, for example, the best fit four term sum of exponentials model predicts that from 1900 to 2000 WP would increase by a factor of 35. The actual increase was a factor of 37, only 5% more. 

The best fit three term CES model instead forecasts only a factor of 22 increase. The main reason for this failing is estimating a transition date of about 2060, instead of the 2020 date suggested by the full dataset. Other parameter estimates were in much closer agreement. For example, the up-to-1900 estimate of the new doubling time is 6.4 years, for example, very close to the up-to-2000 estimate of 6.3 years. Timing estimates, therefore, seem less reliable than growth rate estimates.

[Figure 3](./grow/fig3.html) and [Figure 4](./grow/fig4.html) show how a new transition might look, if it had the fantastic doubling time of 2.3 weeks, had the same strong complementarity with our current mode that our current mode had with the previous mode, and if the new mode first started to have a noticeable effect on growth rates in 2041 (increasing the growth rate that year by 6% over its previous rate, but only <0.4% in the previous year). Transitions starting at any other time would look very similar. 

If this growth mode does not hit limits to slow it down, then by 2047, i.e., within six years of becoming noticeable, the economy would then grow by a larger factor than it had from two million B.C. until 2040. Note how vaster this change would be than the recent small increase in U.S. growth rates that some now attribute to a "new industrial revolution." 

In summary, if one takes seriously the model of economic growth as a series of exponential growth modes, and if relative change parameters of a new transition are likely to be similar to such parameters describing old transitions, then it seems hard to escape the conclusion that the world economy will likely see a very dramatic change within the next century, to a new economic growth mode with a doubling time perhaps as short as two weeks. 

While it is hard to see in much detail how the world economy could possibly grow that fast, it is at least suggestive that computer hardware has in fact been consistently growing for many decades at a doubling time of one to two years [Moravec 98, Kurzweil 99]. Several observers have predicted a transition to a dramatically new economic mode where computers substitute for most human labor, possible when the raw computational ability of a desktop computer matches the computational ability of a human brain, roughly in mid 2020s [Moravec 98, Kurzweil 99]. Formal models have even been developed, indicating that economic doubling times might then fall to a year or so, or even much less [Hanson 98]. 

Others have speculated that even faster growth rates are possible with mature nanotechnology. In any case, even if the next mode had a "slow" doubling time of two years, and if it lasted through twenty doubling times, longer than any mode seen so far, it would still last only forty years. After that, it is not clear how many more even faster growth modes are possible before hitting fundamental physical limits. But it does seem very likely that such fundamental limits would be reached within a few decades at most. 

### Conclusion

Many people have tried to make sense of very long term time series estimating human population. Some have explicitly modeled this history as steadily accelerating growth, while others have more informally described it as a sequence of growth modes. And exponential growth is the most common model of shorter term growth. 

Until recently, Malthusian tendencies seem to make human population a reasonable proxy for overall human abilities, technical and otherwise. For the last century or two, however, total world product may be a better proxy for overall human abilities. And Brad De Long has recently constructed long term world product estimates from recent world product estimates and older population estimates. 

In this paper we have thus attempted the neglect task of more formally describing long term world product growth as a sequence of exponential growth modes. We found that a time series of world product over the last two million years can be comfortably described as either as a sum of four exponentials, or as a CES-combination of three exponentials. (An earlier period of exponential growth in brain sizes may be the relevant previous growth mode.)

In the CES-combination model, there is a sharp transition between ``hunting" and ``farming", and a smooth transition between farming and ``industry." These can be interpreted as due to the interaction between hunting and farming being more substitution, relative to a more complementary relation between farming and industry. The rough timing and doubling time coincidence between industry and measures of scientific progress also weakly suggests that scientific-like creation and diffusion of knowledge might be a key to the current growth mode. 

Since there seem to be some rough regularities regarding how much the economy grows between transitions, and how much faster new economic growth modes are, we have also considered what these regularities suggest about when we might see yet another transition to a much faster mode, if such faster modes are possible. The suggestions are fantastic. One might think them too fantastic to take seriously, were it not for the fact that similar predictions before previous transitions would have seemed similarly fantastic. 

_(I thank Bryan Caplan, Joel Cohen, Tyler Cowen, Mark Crain, Brad De Long, Carl Feynman, Hal Finney, Perrin Meyer, and Didier Sornette for useful comments on this research.)_.

Jesse H. Ausubel, Perrin S. Meyer, "Graphical Representations of World Population Growth", _Human Dimensions Quarterly_ 1(2):17-19, Fall 1994.

Richard E. Baldwin, Philppe Martin, Gianmarco I.P. Ottaviano, "Global Income Divergence, Trade and Industrialization: The Geography of Growth Take-Offs", NBER Working Paper 6458, March 1998.

Robert J. Barro, Xavier Sala-iMartin, _Economic Growth_ , McGraw-Hill, New York, 1995.

Joel E. Cohen, [_How Many People Can The Earth Support_](http://www.wwnorton.com/blurbs/fal95/003862.htm), W.W.Norton & Company, New York, 1995.

Carlo M. Cipolla, _The Economic History of World Population_ , Forth Edition, Penguin Books, Baltimore, 1967.

Edward S. Deevey, Jr. "The Human Population", _Scientific American_ 203:195-204, 1960.

J. Bradford De Long, UCB, working paper 5/98, ["Estimating World GDP, One Million B.C. - Present"](http://econ161.berkeley.edu/TCEH/1998_Draft/World_GDP/Estimating_World_GDP.html)

Derek J. de Solla Price, _Little Science, Big Science_ , Columbia University Press, 1963. 

Jared Diamond, _Guns, Germs and Steel_ , W.W. Norton & Company, 1997. 

Marvin Goodfriend, John McDermott, [Early Development](http://www.jstor.org/fcgi-bin/jstor/listjournal.fcg/00028282/di976328/97p0207w), _American Economic Review_ 85(1):116-133, March 1995.

Gary D. Hansen, Edward C. Prescott, "Malthus to Solow", NBER Working Paper No. 6858, December 1998. 

Robin Hanson, [_Economic Growth Given Machine Intelligence_](./aigrow.pdf), September 1998. 

John Hawks, Keith Hunley, Sang-Hee Lee, Milford Wolpoff, ["Population Bottlenecks and Pleistcene Human Evolution"](http://www.molbiolevol.org/cgi/reprint/17/1/2), _Molecular Biology and Evolution_ 17(1):2-22, 2000.

Elhanan Helpman, _General Purpose Technologies and Economic Growth_ , MIT Press, Cambridge, Mass., 1998.

Harry J. Jerison, _Brain Size and the Evolution of Mind_ , American Museum of Natural History, New York, 1991.

Anders Johansen, Didier Sornette, ["The End of the Growth Era?"](http://xxx.lanl.gov/abs/cond-mat/0002075), Working paper, http://xxx.lanl.gov/abs/cond-mat/0002075, 5 Feb 2000.

Charles I. Jones, [Was an Industrial Revolution Inevitable? Economic Growth Over the Very Long Run](http://papers.nber.org/papers/W7375), NBER Working Paper No. W7375, October 1999.

S.P. Kapitza, [ "Phenomenological Theory of World Population Growth"](http://ufn.npi.msu.su/abstracts/abst961.html#c), _Physics-Uspekhi_ 39(1), 1996. 

Robert W. Kates, "Population, Technology, and the Human Environment: A Thread Through Time", _Daedalus_ [125(3):43-71](http//phe.rockefeller.edu/Daedalus), Summer 1996.

Ray Kurzweil, "The Age of Spiritual Machines, Viking Penguin, New York, 1999.

Michael Kremer, ["Population Growth and Technical Change"](http://www.jstor.org/fcgi-bin/jstor/listjournal.fcg/00335533/di976343/97p0125n?), One Million B.C. to 1990, _Quarterly Journal of Economics_ 108(3):681-716, August 1993.

Ronald D. Lee, "Malthus and Boserup: A Dynamic Synthesis", in _The State of Population Theory_ , edited by David Coleman and Roger Schofield, Basil Blackwell Ltd., Oxford, 1986.

Ronald D. Lee, "Induced population growth and induced technological progress: Their interaction in the accelerating stage.", _Mathematical Population Studies_ 1(3):265-288, 1988.

Ronald D. Lee, [" Long-Run Global Population Forecasts: A Critical Appraisal"](http://www.jstor.org/fcgi-bin/jstor/listjournal.fcg/00987921/dm993995/99p01057), _Population and Development Review_ 16(Supplement):44-71, 1990.

Massimo Livi-Bacci, _A Concise History of World Population_ , Blackwell Publishers, 1997.

Angus Maddison, _Monitoring the World Economy 1820-1992_ , OECD, 1995.

Colin McEvedy, Richard Jones, _Atlas of World Population History_ , Penguin Books, 1978.

Perrin S. Meyer, Jesse H. Ausubel, "Carrying Capacity: a Model with Logistically Varying Limits", _Technological Forecasting and Social Change_ 61(3):209-214, July 1999.

Hans Moravec, ["When will computer hardware match the human brain?"](http://www.transhumanist.com/volume1/moravec.htm) _Journal of Transhumanism_ 1, 1998. 

Dale A. Russell, "Exponential Evolution: Implications for Intelligent Extraterrestrial Life", _Advances in Space Research_ 3(9):95-103, 1983.

Robert E. Lucas Jr., "Some Macroeconomics for the 21st Century", _Journal of Economic Perspectives_ 14(1):159-168, Winter 2000.

Gunter Steinmann, Alexia Prskawetz, Gustav Feichtinger, "A Model on the Escape from the Malthusian Trap", _Journal of Population Economics_ 11(4), 1998.

Heinz von Foerster, Patricia M. Mora, and Lawrence W. Amiot, "Doomsday: Friday, 13 November, A.D. 2026," _Science_ 132:1291-95, 1960. Also "Doomsday" 133:936-946, 1961, "Population Density and Growth" 133:1931-1937, 1961, and "Projections versus Forecasts, in Human Population Studies," 136:173-174, 1962. 

David N. Weil, Oded Galor, "From Malthusian Stagnation to Modern Growth" CEPR Discussion Paper Series No. 2082, February 1999.

Kenneth M. Weiss, "On the number of members of the genus _Homo_ who have ever lived, and some evolutionary implications, _Human Biology_ 56:637-649, 1984.
