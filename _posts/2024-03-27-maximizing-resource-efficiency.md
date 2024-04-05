---
layout: post
title: "Maximizing resource efficiency"
author: guido
tags: efficiency
description: To be efficient, resources should be in use 100%
excerpt: Tackling the prevalent idea that in order to be efficient, resources should be in use 100%. And the dangers of WIP.
hideLogo: true
spotlight:
  imgDir: /img/posts/efficiency
  imgAlt: "Triple D : Design, Develop, Deploy"
logoAnimation: false
date: 2024-03-27 21:00:00
---

# Maximizing resource efficiency

*This post belongs to a small series of posts on the dangers of blindly pursuing efficiency in software development. The main post is [The cost of efficiency](/27/03/2024/cost-of-efficiency/).This post discusses the downside of maximizing resource usage to be efficient.*

The most common scenario in which I hear the dreaded words *"That is not efficient!"* is when people are not "working" at 100% capacity.
Given the definition of efficiency: Doing things right without errors or unnecessary waste of resources, this is a very logical argument.
Since resources are scares and expensive, we want to use them as much as possible.
A machine on the factory floor that is not working is waste.
So this must mean that people not being occupied 100% of the time is also waste?
Conversations at the coffee machine, working with multiple people on the same problem... all a waste of time. \[Start sarcasm\]If only people were like machines, we could get really efficient. We call them resources for a reason, right? The more output they generate, the better.\[End sarcasm\]

(Un)fortunately, people are not resources. But most people still consider it a worthwhile goal: to be busy, to aim for that max % of resource utilization. Working hard and earning your pay means being busy. The drive for max resource utilization, for being efficient, is held by management as well as by software engineers themselves. We all want to be productive, to feel like we are adding value. Getting "in the zone" with our headsets on seems like the best way to achieve this. Crank out that code!

## Resource utilization in manufacturing

Regarding maximum resource utilization, a lot of research has been done by the manufacturing industry. The classic paper from Engineer Ford Harris in 1913 already explained the relation of maximum resource utilization and cost. People typically only see the cost of excess capacity, of unused resources as waste. The cost of delay, of queues, is frequently overlooked. Even in his paper in 1913 Harris Ford already mentioned this. So we should not have an overly simplistic look at cost. There are more factors in play than just the resource costs.

![cost-of-max-utilization](/img/posts/efficiency/cost-of-max-utilization.jpg){:width="800px"}
"There are not many men who understand the theory underlying the economic size of lots" -- Ford Harris 1913
{: .center-img-text }

In his 1961 paper John Kingman published his equation, also known as Kingmans Law, that established the relation between capacity utilization and wait time. Depending on the variance of the arrival frequency and process duration, there is always a point when approaching maximum capacity, where all the resources are working, that the queue size and thus the wait time increases exponentially. ( Variance: tasks varying in size and/or complexity; tasks varying at arriving times. )

![wait-time-capacity](/img/posts/efficiency/waittime-max-capacityutilization.jpg){:width="800px"}
"The Single Server Queue in Heavy Traffic" (1961)
{: .center-img-text }

The position of the line on the Kingmans Formula graph depends on the **variance**.  The line moves down, keeping its shape, when variation goes down. This means that the lower the variation, the greater the predictability, the higher capacity utilisation we can achieve for the same queue time.

![kingmans law](/img/posts/efficiency/kingmanslaw.jpg){:width="400px"}
"Variation is the enemy of efficiency, and max capacity usage is its ally."
{: .center-img-text }

A nice example on the impact of variance on queues can be seen in this [video](https://www.youtube.com/watch?v=7wm-pZp_mi0&t=1s) from an experiment at Japan’s Nagoya University on the nature of traffic jams. All cars driving at the same speed in a simple circle shouldn't be a problem. But the moment one car brakes you can see the queues forming. Notice how quickly they spread and how much longer it takes for them to dissolve.

This is also why we want to be careful not to get to hang-up on the manufacturing examples. Where in manufacturing it is often possible and desired to reduce the variability. In product development and especially Software development variance is typically high. It is extremely hard to have all tasks clear anf of a predictable size. In product development we often even don't want predictability. Because predictability hinders innovation. Where innovation requires the freedom to explore and experiment, limiting variance will stifle the creativity and innovation.[^flow]

The cost of queues is often not known or seen, even in manufacturing. On top of that, the fact that Software development is highly variable and requires innovation is unfortunately not a common view. It is seen by many as "just translating requirements into code".

## Writing code as the measurement for productiveness

People who have no real experience with software development themselves often think that if Software Engineers aren't typing, they are not being productive. After all their job is to translate business requirements into code. So the engineer who writes the least code must be the [worst engineer](https://dannorth.net/the-worst-programmer/) [^worst]?

![code-monkey](/img/posts/efficiency/code-monkey.jpeg){:width="400px"}
*Software engineers are often seen as code monkeys*
{: .center-img-text }

The view that they must be writing code to be productive is even held by many Software Engineers.
After all, that is what they are paid to do right? Writing code.

> "If I'm not writing code, I'm not being productive" -- a software developer

The consequence of that mindset is that collaborative practices as Pair programming or Team (mob) programming are seen as a big waste of resources. We have two people working on the same thing and only one of them is typing? We have a whole team working on one thing, and only one person is typing?? What are al those developers wasting their time on that whiteboard? Shouldn't they be coding?

![panic](/img/posts/efficiency/panic.jpg){:width="400px"}
*That's not efficient!*
{: .center-img-text }

This line of reasoning would make sense if what software engineers do is indeed simply translating business requirement into code. And if this is indeed your job, you should fear all the LLM AI that can generate code. But as any experienced software engineer knows, writing code is the easy part.

![code-monkey](/img/posts/efficiency/typing-not-the-bottleneck.jpeg){:width="400px"}
*Typing is not the bottleneck*
{: .center-img-text }

The aim for maximum resource utilization frequently hinders communication and collaboration.  Personally, I have found that it is really hard to let people go of their keyboard, to let them discuss the problem they are trying to solve, to actually *do some design*. The drive to be busy, making sure we're not idle leads us to generating output (code) over outcome (solving), to build the wrong thing fast, instead of solving the right problem.

> We prefer building the wrong thing fast, over solving the right thing well
 
## Too busy for resiliency

If the goal is maximum resource utilization, we aim to be busy. We strive to be "productive", making sure that no one is idle. We want to spend the minimum of time possible on knowledge sharing, communication and redundancy since this doesn't deliver output in itself. We focus on producing concrete output, preferably with everyone having their own clear task where they can work on undisturbed.

This may be more efficient when everything is clear, well-thought-out and when nothing ever changes. I am, however, still waiting for that first software project where this is the case. In software development, change and variability are key. 

If everyone is busy and something unexpected happens, we have a problem. When a feature changes, an estimate was wrong; someone changed their minds; a colleague falls ill, ... There is no capacity available to cope with this because everyone is busy. Any well-thought-out execution plan goes down the drain, and the poor PM needs to frantically try to come up with a new credible plan and fix all those Gantt charts. 

![busy](/img/posts/efficiency/busy.jpeg){:width="800px"}
*Too busy to improve"*
{: .center-img-text }

Added on top of this, invisible in all those pretty graphs, is that there is most likely a knowledge problem. We cannot simply let Brent's task be done by Max. There are so many specialized tasks for which certain expertise is needed, no one can quickly step on. We can quickly get blocked by lack of knowledge and expertise. The bus factor tends to be low. 

This comes back to my earlier point that [The cost of efficiency is resilience](/27/03/2024/cost-of-efficiency/). Not being resilient can cost you a lot more than what was "saved" by being busy.  

## The cost of high Work In Progress (WIP)

When companies complain about slow software development, of the low quality of the delivered software, of estimation that are exponentially off,... the underlying cause is all too often having a WIP that is way too high. The cause for a high WIP is straightforward. The drive to make sure everyone is fully utilized combined with the fact that there is always more to do in this world limited by the laws of physics. Customers who want new features, sales who can onboard a new customer if only we had this killer feature... Before we realized, we have taken on more the we can chew.

> "You can do anything, but not everything."

The reason I bring up WIP here is that I find that it is closely correlated with the drive for efficiency, for maximizing resource utilization. "If you have some free time in your agenda, you can squeeze in this extra task". It even feels like we're doing great work because we are so busy, so hardworking. But instead of doing one thing great, we're doing five things bad.

![eggs](/img/posts/efficiency/juggling-eggs.jpeg){:width="400px"}
*Focus on being productive instead of busy.*
{: .center-img-text }

As discussed earlier in [The scope of efficiency](/27/03/2024/scope-of-efficiency/), we know from "LEAN" that a high WIP is a form of waste that leads to inefficiencies, queues, decreased 
productivity, and reduced resilience in a system or process [^wip]. I feel like I'm in danger of undervaluing the importance of WIP by just mentioning it as part of my efficiency rant. But it is **very** important because high WIP has several negative consequences

![systemwip](/img/posts/efficiency/system-wip.jpg){:width="800px"}
*The consequences of WIP*
{: .center-img-text }

> "Work In Progress is the graveyard where good intentions go to die, buried beneath the weight of unfinished tasks."

The danger of WIP in software delivery is that it is often invisible, just like with queues. We experience the consequences but rarely is the WIP we're currently working on as a team or company properly visualized. When we need to come up with a solution for a single task, we run the risk of forgetting all the other work. The context switches, interrupts, defects are easily not taking into account when we come up with a "plan". 

This is where [Kanban](https://kanban.university/kanban-guide/) comes into play. Kanban is all about visualizing the flow and making WIP and queues visible. [^visualize]

> "The key is not to prioritize what's on your schedule, but to schedule your priorities."


If you are going slow, have to much going on, deliver with poor quality then I have bad news. There is no magical bullet. If you are taking on more than you can chew, there is no process that will fix this. Hearing the message: "reduce WIP" may sound like do "we should do less" while the building is on fire. But to be able to finish faster, we need to do less *at the same time*. The cost of juggling all those things simultaneously is where the waste lies that slows us down. Even tough it may look efficient from a distance. It neglects the unseen waste

> "The shortest way to do many things is to do only one thing at a time." 

If we think back to our restaurant example, imagine that it can handle 50 customers at the same time. But if we let ourselves be overbooked and 100 customers show up at the restaurant, we will not even be able to provide the first 50 customers with decent value for their money. It would be an utter disaster. 

![restaurant](/img/posts/efficiency/restaurant.jpg){:width="400px"}
*Don't flood your "restaurant"*
{: .center-img-text }

**Important reminder**: 

When everything slows down because of a high WIP, please remember **Brooks law**. Even though it was stated in 1975, it is still true. And people still violate it all the time.

> “Adding manpower to a late software project makes it later”

When new members are added to a project, the existing team members must invest time in training and integrating the newcomers. New team members require time to familiarize themselves with the project, its codebase, and its processes. All things that take extra time but are often forgotten when Software development is regarded as mainly "typing code".


## No room for unplanned work

In his post [Your calendar == your priorities](https://cutlefish.substack.com/p/tbm-4952-your-calendar-your-priorities?utm_source=profile&utm_medium=reader2) John Cutler illustrates that **valuable does not always mean efficient**. Chasing resource efficiency and micro-managing people comes at a cost. We need time for all the unplannable work, maintenance, experimenting... There is so much going on in a software product. So much to learn, maintain,... As stated earlier, predictability is not always a good thing in product development. There typically is high variance in product development and we also should leave room for that variance. This may be seem inefficient in the sort time, but very valuable in the long time.

![dothis-slack](/img/posts/efficiency/cutlefish-do-this.jpeg){:width="800px"}
*Sometimes the most valuable thing you could be doing is nothing. [^busy]*
{: .center-img-text }

## Conclusion

Given the nature of software engineering, the drive for maximum resource efficiency is especially harmful. People are not machines that produce code. Software development is about learning and solving problems. Something that is hard to do "efficiently". The same way it is hard to be creative efficiently. 

Once a problem is solved, writing the code is straightforward. Creativity and problem-solving cannot be measured by how busy we are. Often a walk in the park can be much more productive than staring at your screen for two more hours. Even if it doesn't seem like we are "busy".

The fact that the work required to create a software product is not directly visible in the real world, makes it easy to do oo much at the same time. Queues and WIP are waste. We shouldn't just focus on what we can see (people typing a lot) but try to visualize the entire flow of our system. So we are optimizing the flow of the system, not the workload of individuals.

## Links

The blog posts on efficiency:
+ [The cost of efficiency](/27/03/2024/cost-of-efficiency/)
+ [The scope of efficiency](/27/03/2024/scope-of-efficiency/)
+ [Maximum Resource Utilization](/27/03/2024/maximizing-resource-efficiency/)

[^worst]: _[Worst programmer](https://dannorth.net/the-worst-programmer/)_
[^lean]: _[Lean](https://www.lean.org/explore-lean/what-is-lean/)_
[^visualize]: _[visualize](https://cutlefish.substack.com/p/tbm-3452-12-traps-when-visualizing)_
[^wip]:_[WIP is bad](https://cutlefish.substack.com/p/wip-multi-tasking-context-switching)_
[^busy]: _[Your calendar == your priorities](https://cutlefish.substack.com/p/tbm-4952-your-calendar-your-priorities?utm_source=profile&utm_medium=reader2)_
[^flow]: _[The logic of flow](https://www.youtube.com/watch?v=rc1MqHsiiKo&t=1216s)_