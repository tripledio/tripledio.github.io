---
layout: post
title: "Maximizing resource efficiency"
author: guido
tags: efficiency
description: To be efficient, resources should be in use 100%
excerpt: Tackling the prevalent idea that in order to be efficient, resources should be in use 100%
hideLogo: true
spotlight:
  imgDir: /img/posts/efficiency
  imgAlt: "Triple D : Design, Develop, Deploy"
logoAnimation: false
date: 2024-03-27 21:00:00
---

# Maximizing resource efficiency

*This post belongs to small series of posts on efficiency. The main post is [The cost of efficiency](/27/03/2024/cost-of-efficiency/).*

The most common scenario in which I hear the dreaded words *"That is not efficient!"* is when people are not "working" at 100% capacity.
Given the definition of efficiency: Doing things right without errors or unnecessary waste of resources, this is a very logical argument.
Since resources are scares and expensive, we want to use them as much as possible.
A machine on the factory floor that is not working is waste.
So this must mean that people not being occupied 100% of the time is also waste?
Conversations at the coffee machine, working with multiple people on the same problem... all a waste of time. [Start sarcasm]If only people were like machines, we could get really efficient. We call them resources for a reason, right? The more output they generate, the better.[End sarcasm]

(Un)fortunately, people are not resources.
But most people still consider it a worthwhile goal: to be busy, to aim for that max % of resource utilization. Working hard and earning your pay means being busy.

## Writing code as the measurement for productiveness

The drive for max resource utilization, for being efficient, is held by management as well as by software engineers themselves. This is understandable. We all want to be productive, to feel like we are adding value. Getting "in the zone" with our headsets on seems like the best way to achieve this. It helps that it is the most enjoyable as well. 

People who have no real experience with software development themselves often think that if Software Engineers aren't typing, they are not being productive. After all their job is to translate business requirements into code. So the engineer who writes the least code must be the [worst engineer](https://dannorth.net/the-worst-programmer/) [^worst]?

![code-monkey](/img/posts/efficiency/code-monkey.jpeg){:width="400px"}
*Software engineers are often seen as code monkeys*
{: .center-img-text }

The view that they must be writing code to be productive is even held by many Software Engineers.
After all, that is what they are paid to do right? Writing code.

> "If I'm not writing code, I'm not being productive" -- a software developer

The consequence of that mindset is that collaborative practices as Pair programming or Team (mob) programming are seen as a big waste of resources. We have two people working on the same thing and only one of them is typing? We have a whole team working on one thing, and only one person is typing?? What are al those developers wasting their time on that whiteboard? Shouldn't they be coding?

![code-monkey](/img/posts/efficiency/panic.jpg){:width="400px"}
*That's not efficient!*
{: .center-img-text }

This line of reasoning would make sense if what software engineers do is indeed simply translating business requirement into code. And if this is indeed your job, you should fear all the LLM AI that can generate code. But as any experienced software engineer knows, writing code is the easy part.

![code-monkey](/img/posts/efficiency/typing-not-the-bottleneck.jpeg){:width="400px"}
*Typing is not the bottleneck*
{: .center-img-text }

The aim for maximum resource utilization frequently hinders communication and collaboration.  Personally, I have found that it is really hard to let people go of their keyboard. to let them discuss the problem they are trying to solve, to actually do some design. The drive to be busy, making sure we're not idle leads us to generating output (code) over outcome (solving), to build the wrong thing fast, instead of solving the right problem.

> We prefer building the wrong thing fast, over solving the right thing well

## To busy for resiliency

If the goal is maximum resource utilization, we aim to be busy. We strive to be "productive", making sure that no one is idle. We want to spend the minimum of time possible on knowledge sharing, communication and redundancy since this doesn't deliver output in itself. We focus on producing concrete output, preferably with everyone having their own clear task where they can work on undisturbed.

This may be more efficient when everything is clear, well-thought-out and when nothing ever changes. I am, however, still waiting for that first software project where this is the case. In software development, change and variability are key. 

If everyone is busy and something unexpected happens, we have a problem. When a feature changes, an estimate was wrong; someone changed their minds; a colleague falls ill, ... There is no capacity available to cope with this because everyone is busy. Any well-thought-out execution plan goes down the drain, and the poor PM needs to frantically try to come up with a new credible plan and fix all those Gantt charts. 

![busy](/img/posts/efficiency/busy.jpeg){:width="400px"}
*Too busy to improve"*
{: .center-img-text }

Added on top of this, invisible in all those pretty graphs, is that there is most likely a knowledge problem. We cannot simply let Brent's task be done by Max. There are so many specialized tasks for which certain expertise is needed, no one can quickly step on. We can quickly get blocked by lack of knowledge and expertise. The bus factor tends to be low. 

This comes back to my earlier point that [The cost of efficiency is resilience](/27/03/2024/cost-of-efficiency/). Not being resilient can cost you a lot more than what was "saved" by being busy.  

## Aiming for a high WIP

The drive to make sure everyone is busy, combined with the fact that there is always more todo, is one of the causes for having a high Work In Progress (WIP). As discussed earlier in [The scope of efficiency](/27/03/2024/scope-of-efficiency/), we know from "LEAN" that a high WIP is a form of waste that leads to inefficiencies, queues, decreased productivity, and reduced resilience in a system or process. It may feel like we're doing great work because we are so busy. But instead of doing one thing great, we're doing five things bad.

> "Work In Progress is the graveyard where good intentions go to die, buried beneath the weight of unfinished tasks."

For this, there is no magical bullet. If you are taking on more than you can chew, there is no process that will fix this. It will just slow you down and reduce quality.

If we think back to our restaurant example, imagine that it can handle 50 customers at the same time. But if we let ourselves be overbooked and 100 customers show up at the restaurant, we will not even be able to provide the first 50 customers with decent value for their money. It would be an utter disaster. 

![restaurant](/img/posts/efficiency/restaurant.jpg){:width="400px"}
*Don't flood your "restaurant"*
{: .center-img-text }

**Important reminder**: 

When everything slows down because of a high WIP, please remember Brooks law. Even though it was stated in 1975, it is still true. And people still violate it all the time.

> “Adding manpower to a late software project makes it later”

When new members are added to a project, the existing team members must invest time in training and integrating the newcomers. New team members require time to familiarize themselves with the project, its codebase, and its processes. All things that take extra time but are often forgotten when Software development is regarded as mainly typing code.


## Conclusion

Given the nature of software engineering, the drive for maximum resource efficiency is especially harmful. People are not machines that produce code. Software development is about learning and solving problems. Something that is hard to do "efficiently". The same way it is hard to be creative efficiently. 

Once a problem is solved, writing the code is straightforward. Creativity and problem-solving cannot be measured by how busy we are. Often a walk in the park can be much more productive than staring at your screen for two more hours. Even if it doesn't seem like we are "busy".

## Links

The blog posts on efficiency:
+ [The cost of efficiency](/27/03/2024/cost-of-efficiency/)
+ [The scope of efficiency](/27/03/2024/scope-of-efficiency/)
+ [Maximum Resource Utilization](/27/03/2024/maximizing-resource-efficiency/)

[^worst]: _[Worst programmer](https://dannorth.net/the-worst-programmer/)_
[^lean]: _[Lean](https://www.lean.org/explore-lean/what-is-lean/)_