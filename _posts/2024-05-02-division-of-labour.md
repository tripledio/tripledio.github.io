---
layout: post
title: "drafts efficiency"
author: guido
tags: efficiency
description: The hidden cost of the ghost efficiency in software development
excerpt: Efficiency is something people tend to strive for. But this goal often does more harm than good.
hideLogo: true
spotlight:
  imgDir: /img/posts/efficiency
  imgAlt: "Triple D : Design, Develop, Deploy"
logoAnimation: false
---

### Division of labor

By dividing labor, as a species, we are able to specialize. The time that one person could do everything by themselves is long gone. By dividing labor and specializing in certain tasks we were able to get very good at a specific task and drastically increase our production. For each job we now have experts who can focus on getting real efficient at that job. So the most efficient way to do a job is to let the experts handle it.

The concept of division of labor in the field Software engineering is a strange thing. On the one hand there is this drive for specialization (Backend devs, Frontend dev, DBA, QA, Infra, Analyst). On the other hand there is always some movement that aims to have more generalist engineers (Fullstack, Devops, X - PTests written by devs, Agile - Devs talking with Customers directly). The DevOps movement is a nice example of this. DevOps is a methodology with set of practices and tools that aims to integrate and automate the work of software development (Dev) and IT operations (Ops). But currently in the market, companies are now looking for "DevOps" roles. By which they mean: an IT specialist that specializes in Infrastructure. By specializing, dividing labor, we are separating the Ops and the Devs again. Just under a new name.

The division of labor is not something that is necessarily imposed on us by management. Like everyone else, Software Engineers want to be good at their job, they are looking for mastery of their field. This is of course easier to achieve if you specialize to a limited set skills. Most backend developers I know do not want to write code in the Frontend. And vice versa. If your proficient using framework X, it could become your default solution and you're could become hesitant to use framework Y or no framework at all. A developer in Java, Kotlin, C#, Scala, F#, PHP,... often doesn't want to start programming in another language ecosystem. Someone whose main interest is in databases, UX doesn't want to write backend code. It is out of their field of interest. And of course no self-respecting backend developer wants to develop a frontend.

This makes perfect sense. We want to do what we are best, most efficient at. Which often correlates with what we most enjoy. To each their job. 

[Division of labor]

### The pain of division of labor

A good software team should be cross-functional. Meaning they should have all the necessary skills inside the team so that they can work as an autonomous unit and do not require outside help. They should have as few outside dependencies as possible. Because as software engineers we know, dependencies come at a cost.

In software engineering we have all types of different roles

+ Frontend Developer
+ Backend Developer
+ UI/UX Designer
+ Quality Assurance (QA) Engineer
+ DevOps Engineer
+ System Administrator
+ Database Administrator (DBA)
+ Technical Writer
+ ....

Suppose that we have team who have minimum one member for each necessary roles. When the team takes up work, the most efficient thing would be to divide the work and assign to each task the expert with the required role and expertise. Since they are the most suited to perform a certain type of task. 

The problem with this efficient approach is that it is hard to lean new things. Each persons knowledge remains limited to their own role. This negatively impacts resiliency. Since no knowledge is shared, the same roles always perform the same task, so if a critical role is not present, the team is blocked. Making certain roles, persons  bottlenecks for the team. If they aren't present or simply don't have time, the work must remain wait until they have time. In other words, *queues* of work are created. Something that is especially dangerous in the field of software engineering because this is not easily visible. Except perhaps somewhere in Jira tickets.

In short, the efficiency of the whole team is negatively impacted by optimizing for individual tasks.

The approach also goes against real autonomous teams that can determine how they do their work. It demotes team members to code monkeys that have to perform certain tasks according to their predefined roles. 

Like in Craig Larman's analogy to a soccer team where each player has a specific role and expertise, in which they are most efficient, you also want them to be able to take up other roles when needed. We hope that the striker will stop the ball going in their own goal as well as the [goalkeeper should score]{https://www.youtube.com/watch?v=XeZ5zNv9_40&t=58s} if the opportunity presents itself.

## Conclusion

## Links
