---
layout: post
title: "The cost of efficiency"
author: guido
tags: efficiency
description: The hidden cost of efficiency in software development
excerpt: Efficiency is held as the holy grail in the field of software engineering. But there is a cost to it.
hideLogo: true
date: 2024-03-27 23:00:00
spotlight:
  imgDir: /img/posts/efficiency
  imgAlt: "Triple D : Design, Develop, Deploy"
logoAnimation: false
---

# The Cost of efficiency

In the business world, there's a well-known saying dubbed 'The Seven Most Expensive Words' which is: 'We've always done it this way.' In my opinion, we have something similar in the realm of software engineering. An argument that I encounter all too frequent.

> *The four most perilous words in software engineering:* **"That is not efficient!"**

This is a phrase often echoed by both managers and software engineers alike. Managers may express this sentiment out of a desire to streamline processes and maximize productivity. Software engineers frequently use it as a reason why they dislike a certain solution or way of working. For software engineers, who continually strive to optimize their software, processes and algorithms, this argument carries significant weight in discussions. The argument often seems irrefutable, acting as a conversation-stopper, given the prevailing emphasis on efficiency in software engineering.

Personally, I have become very wary of the "efficiency" argument. Efficiency is often treated as the holy grail, when in reality, there's more to consider. So, in this blog post series, I'll dive into this topic and explore why there are times when seemingly inefficient approaches make sense. We must be aware that efficiency comes with **trade-offs** and occurs in a **context** for a given **scope**.

## The drive for efficiency

Efficiency, simply put, means doing things right without errors or unnecessary waste of resources like materials, energy, time, or money. It's about performing tasks effectively and successfully. Now who could argue against that?

Ever since the industrial age, the pursuit of efficiency has been relentless. That pursuit manifests itself in various objectives:

+ Maximum Resource Utilization]: Ensuring all resources operate at maximum capacity.
+ Division of Labor: Assigning specialized resources with the highest output to specific tasks.
+ First-Time Right: Striving to get it right on the first attempt and avoid rework.

Challenging these goals often prompts the default response: 'That is not efficient!' It seems like a conclusive argument, but it really isn't. It ignores a lot of other factors.

## Efficiency trade-offs 

While I think efficiency is on its own a good thing, even a goal worth pursuing, it does have its trade-offs. Trade-offs we need to be aware of so that we don't just end a conversation because something makes the efficiency argument. Because there is more to life then achieving maximum efficiency. If fact, there probably wouldn't be any life is everything was efficient...

### Mother Nature

Let's leave the world of IT for a minute and take a look at mother nature. 

In nature not everything is efficient. If we take a look at how cells evolve, in plants as well in animals, this happens in a non-deterministic way. It is not set from the beginning what a cell will become. Cells are capable to of evolving on a wide spectrum. Though it would be more efficient in the short term if each cell is ascribed a function from the start, in the long term this comes at a cost. It would hinder the organisms ability to **adapt** at to external changes. By being suboptimal, inefficient on the small scale (cells), nature has become resilient at the larger scale (organisms). 

![Cells](/img/posts/efficiency/cells.jpg){:width="800px"}
Cells are optimized for adaptableness, not efficiency
{: .center-img-text }


An ant colony is also an example of this. There is build in redundancy by tasks and roles of course. But even when we simply observe the route an individual ant takes, this isn't efficient. However, for the colony as a whole this inefficiency gives resiliency by having multiple routes and options for food. 

![Ants](/img/posts/efficiency/ants.jpg){:width="800px"}
Inefficiency in the small yields resilience in the large. 
{: .center-img-text }

Another more visual example are plants[^leafs]. Green is the color that reigns over the plant kingdom. But why green, and not black? It is because plants photoelectric cells, those that regulate the energy flow during photosynthesis, absorb all the photons in the red and blue regions of the light spectrum. But they absorb only about 90% of the green photons. If they absorbed more, they would look black. So plants are green because they are not super efficient and still reflect a small amount of green light. So what is the trade-off?

![Leafs](/img/posts/efficiency/leafs.jpg){:width="800px"}
Leafs opt for stability over efficiency
{: .center-img-text }

Not capturing all the green light has a purpose. Since the external input of light constantly changes, this would also make the electrical energy input flow in the photoelectric cell constantly shift if the cells would absorb all light. But for the cells a stable energy flow is best, better than the most efficient energy absorption. Because not enough electrons can cause an energy failure, while too many electrons can cause overcharging effects. That is why the photoelectric cells regulate their light absorption and "spit out" green light. So evolution cares less about making being efficient than about being stable. 

> "To be resilient against external changes, prioritize stability and adaptability over efficiency"


### Computer science

There are also plenty of examples in Computer Science where **efficiency was sacrificed** in order to gain resiliency. 


For instance the simple protocol suite, TCP/IP, which regulates how packets travel through the network from one machine to another, is definitely not efficient. But it is resilient! It needs to be given that significant errors are possible: data can be corrupted, packets can be lost, the network is continuously changing with constant failures of nodes. It was designed this way, efficiency in the small was sacrificed for resiliency in the large. Stability and adaptability was prioritized over efficiency.

![tcpip](/img/posts/efficiency/tcpip.jpg){:width="800px"}
TCP/IP designed for resiliency
{: .center-img-text }

Even when designing algorithms, people sometimes choose suboptimal heuristic solutions over optimal exact algorithms. Because many real-world problems are so complex that pursuing the ideal, most efficient solution is too costly. Instead, people sacrifice efficiency by introducing randomness and settling for 'good enough' solutions. Sometimes the cost of optimal algorithms is too high computational and time wise. There can be a point where going for the most efficient solution has diminishing returns. Making it more efficient to go for the less efficient solution.

![heuristic](/img/posts/efficiency/heuristic.jpg){:width="800px"}
It can be more efficient to go for the less efficient option
{: .center-img-text }

### The choice

From the examples above we can already draw the following conclusions:

+ Optimizing for local efficiency can negatively impact resiliency on the larger scale.
+ Choosing the most efficient solution may not be worth the effort. Having a faster, good enough solution may prove to be more valuable. 
+ Efficiency is often achieved in a well controlled environment. Depending on the type of environment, resiliency may be more important. 
+ If the environment frequently changes, the effort spent on being efficient can be waste in itself.

## Conclusion

The main thing I hope to pass on here with this post can be summarized as follows:

**The cost of efficiency is resiliency**

Given that efficiency is often achieved in a well controlled environment for a given scope, make sure that efficiency is what we really need and in what scope we need it. Efficiency in the short term can cost us resiliency in the longer term, for a larger scope. Which can prove to be more costly and thus result in more waste. So don't give in too quickly to the "That's not efficient" argument.

Given that the one constant thing in the field of Software Engineering is change, the efficiency argument holds real danger here. It is often better to prioritize for resiliency, to sacrifice short term local efficiencies for a more durable resilient solution in the long term. In effect, a lot of good software practices do exactly that. Making them look inefficient at first glance, but very valuable when taking into account the whole context. I'll get into more details on this in another post.

## Links

The blog posts on efficiency:
+ [The cost of efficiency](/27/03/2024/cost-of-efficiency/):
+ [The scope of efficiency](/27/03/2024/scope-of-efficiency/):
+ [Maximum Resource Utilization](/27/03/2024/maximizing-resource-efficiency/):

[^leafs]: _[Why plants are green](https://www.quantamagazine.org/why-are-plants-green-to-reduce-the-noise-in-photosynthesis-20200730)_
