---
title: "An Ethical Diet"
url: http://ethical.diet/
fetched: 2026-07-06
via: html2text
topic: "ea-intro-program"
note: "EA Intro Program, session: Week 3 Radical Empathy, optional (tool)"
---

## An Ethical Diet: What are the impacts of our food choices?

by [Dominik Peters](http://www.dominik-peters.de) and [other contributors](https://github.com/DominikPeters/ethical.diet/graphs/contributors).   
First written: 11 Nov. 2016. Last updated: 4 Dec. 2017.

Exclude sleeping hours   
Include animals that die before slaughter   
Factor in supply and demand elasticities 

Source: Book _Compassion, by the Pound_   
Source: Animal Charity Evaluators 

  
Weight by brain size 

neuron count (linear)  
neuron count (square root)  
neuron count (logarithm)  
neuron count (square)  
brain mass

  
Weight by suffering intensity 

{{ showOptionBox ? "⇧" : "⇩" }} **Calculation Options**

### How many {{ long_unit() }} {{ considerElasticity ? "on factory farms does demand for 2000kcal cause" : "on factory farms are required to produce 2,000 calories" }}?

{{ food.Food }} |  {{ pretty_round(hours(food)) }} {{ unit() }}   
---|---  
[🔍 rescale](javascript:rescale\(\))

calculation options:  exclude sleeping hours  weight by brain size  ⇣ more options..

**Fig. 1** : To produce a day's worth of calories through animal products, animals need to live on factory farms for up to {{ pretty_round(hours(foods["2000kcal Eggs"]) / 24) }} days ({{ pretty_round(hours(foods["2000kcal Eggs"])) }} {{ long_unit() }}). 

Many animal welfare scientists and philosophers think that farm animals have bad lives. This applies to most chickens, pigs, and fishes we eat. In modern industrial farms, animals:

  * have injuries and diseases that aren’t treated
  * have too little space
  * can’t run away from fights
  * have high stress levels
  * can’t exhibit natural behaviors
  * grow too quickly
  * get surgery without painkillers
  * are killed in sometimes painful ways



Many people eat fewer animal products to prevent these problems. This page explains which diet changes have the biggest effects.

Some foods are worse for animal welfare than others. For example:

  * a chicken lives in a factory for {{ pretty_round(hours(foods["Chicken wing"])) }} {{ long_unit() }} to make one chicken nugget
  * a hen lives in a factory for {{ pretty_round(hours(foods["Caged White Egg"])) }} {{ long_unit() }} to make one egg
  * a pig lives in a factory for {{ pretty_round(hours(foods["Breakfast sausage"])) }} {{ long_unit() }} to make one sausage



Vegetarian dishes (except eggs and milk) do not require animal factories at all.

#### Some Example Dishes

### How many {{ long_unit() }} {{ considerElasticity ? "on a factory farm does demand for various food products cause" : "did animals have to live on factory farms to produce various food products" }}?

{{ food.Food }} |  {{ pretty_round(hours(food)) }} {{ unit() }}   
---|---  
[🔍 rescale](javascript:rescale\(\))

calculation options:  exclude sleeping hours  weight by brain size  ⇣ more options..

**Fig. 2** : Time required to produce common animal products. 

#### Do Your Own Calculations

You can change the assumptions behind all the numbers on this page.

Displayed Animals 
    

Choose which animals should be displayed in diagrams.

Laying hens Chickens for meat Pigs Cows for meat Dairy cows   
Turkeys Ducks Lambs Farmed salmons
Exclude sleeping hours 
     When someone is sleeping, they do not experience pain like when they are awake. When this option is active, we ignore hours that farm animals spend sleeping. Note that some animals: 

  * sleep longer than others, e.g., pigs sleep more than cows
  * are sleep-deprived so that they grow faster (mainly chickens)


Include animals that die before slaughter 
     Some animals kept for their meat die before they are slaughtered. This can happen: 

  * due to untreated disease or injury
  * if the animal can't walk because of fast growth
  * during transport to the slaughterhouse



The meat of these animals is not sold. However, they still had to live their life in a factory. When this option is active, we proportionally count the lives of these animals when calculating total hours.

This option does not apply to eggs and milk.

Factor in supply and demand elasticities 
    

Generally, when you buy ten fewer chickens, you will cause farms to produce ten fewer chickens in the future. However, due to supply and demand effects, you might not cause this full effect. You might only cause nine fewer chickens to be farmed. This is because the price for chickens may drop very slightly. This might induce others to buy more chickens.

The size of this effect has been estimated by economists. You can use estimates from:

  * the book [_Compassion, by the Pound_](https://global.oup.com/academic/product/compassion-by-the-pound-9780199551163?cc=gb&lang=en&)
  * the organisation [Animal Charity Evaluators](https://docs.google.com/spreadsheets/d/1iNDQIt9MRD4r1ws5M_2hQ-MNjMY-bcUra0fpOmF4Am0/edit#gid=0)


Weight by brain size 
     Some animals may feel pain less intensely than other animals. This could be because: 

  * their mental experience may be less rich in general
  * some stimuli are less harmful to them



It is very difficult to estimate how much different animals suffer, compared to each other. One useful proxy may be the size of an animal's brain.

Animals with larger brains may have richer mental experiences, and thus experience pain more intensely. (Certainly, though, brain size is not the only thing that matters.) Brain size can be measured in terms of the number of neurons in the brain. Alternatively, it can be measured by how heavy the brain is; however, some animals have small brains which have many neurons, so brain mass could be a bad measure.

When considering neuron counts, we may think adding extra neurons have decreasing marginal returns. Thus, it makes less of a difference if a large brain gets larger by 1 million neurons than if a small brain gets larger by 1 million neurons. We can formalise this intuition by weighting, e.g., by the square root of the neuron count.

You can weight the numbers by:

  * neuron count (linear)
  * neuron count (square root)
  * neuron count (logarithm)
  * neuron count (square)
  * brain mass


Weight by suffering intensity 
     Farm conditions differ between types of animals. For example, many people think that the conditions on chicken farms are worse than on cow farms. [Brian Tomasik](http://reducing-suffering.org/how-much-direct-suffering-is-caused-by-various-animal-foods/) has estimated the relative badness of suffering on different types of farms. 
