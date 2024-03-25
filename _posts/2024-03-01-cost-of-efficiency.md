---
layout: post
title: "The cost of efficiency"
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

# The Cost of efficiency

In the business world, there's a well-known saying dubbed 'The Seven Most Expensive Words': 'We've always done it this way.' This phrase addresses a common argument against change, highlighting the costly consequences of resisting innovation. Similarly, in the realm of software engineering, we also have a saying, that is also quit expensive:

> The four most perilous words in software engineering: 'That is not efficient!'

This phrase is often echoed by both managers and software engineers alike. Managers may express this sentiment out of a desire to streamline processes and maximize productivity. Software engineers frequently use it as a reason why they dislike a solution or way of working. For software engineers, who continually strive to optimize their software, processes and algorithms, this argument carries significant weight in discussions. The argument often seems irrefutable, acting as a conversation-stopper, given the prevailing emphasis on efficiency in software engineering.

I'll admit, I'm very wary of the "efficiency" argument. Efficiency is often treated as the holy grail, when in reality, there's more to consider. So, in this blog post, I'll dive into this topic and explore why there are times when seemingly inefficient approaches make sense. This is especially relevant in software engineering, where adaptation and learning are crucial. We must be aware that efficiency comes with trade-offs and occurs in a context for a given scope.

## The drive for efficiency

Efficiency, simply put, means doing things right without errors or unnecessary waste of resources like materials, energy, time, or money. It's about performing tasks effectively and successfully. Who could argue against that?

Since the industrial age, the pursuit of efficiency has been relentless. This drive manifests itself in various objectives:

+ Maximum Resource Utilization: Ensuring all resources operate at maximum capacity.
+ Division of Labor: Assigning specialized resources with the highest output to specific tasks.
+ First-Time Right: Striving to get it right on the first attempt and avoid rework.

Challenging these goals often prompts the default response: 'That is not efficient!' It seems like a conclusive argument, but it really isn't. Let's delve into each goal to gain a deeper understanding of the underlying concerns. Because, of course, there is some truth to the argument.

### Maximum resource utilization

Since resources are scares and expensive we want to utilize them as much as possible. A machine on the factory floor that is not working is waste. So this must mean that people not being occupied 100% of the time is also waste. Conversations at the coffee machine, working with multiple people on the same problem... all necessary evil. If people were machines, we could get really efficient. Unfortunately they are not, but it is still seen as a goal to aim for, to be busy as much as possible. To aim for that max % of resource utilization.

The case for maximum resource utilization is often made when practices ar Pair programming or Team (mob) programming are discussed. If the idea lives that Software Engineers need to be typing in order to be productive, then those collaborative practices are logically seen as a waste of resources. Meetings are then seen as waste of time by default. (Although this is probably a worldwide phenomenon :-) ) and this could also extend to design sessions. 

In my experience this drive for max resource utilization is held by management as well as by software engineers themselves. Even the view that they must be writing code in order to be productive is held by many Software Engineers. After all that is what they are paid to do right? Writing code.

> If I'm not writing code, I'm not being productive
 
![monkey typing]

We all want to be productive, to feel like we are adding value. Getting "in the zone" with our headsets on seems like the best way to achieve this. And of course the most enjoyable as well.

### Division of labor

By dividing labor, as a species, we are able to specialize. The time that one person could do everything by themselves is long gone. By dividing labor and specializing in certain tasks we were able to get very good at a specific task and drastically increase our production. For each job we now have experts who can focus on getting real efficient at that job. So the most efficient way to do a job is to let the experts handle it.

The concept of division of labor in the field Software engineering is a strange thing. On the one hand there is this drive for specialization (Backend devs, Frontend dev, DBA, QA, Infra, Analyst). On the other hand there is always some movement that aims to have more generalist engineers (Fullstack, Devops, X - PTests written by devs, Agile - Devs talking with Customers directly). The DevOps movement is a nice example of this. DevOps is a methodology with set of practices and tools that aims to integrate and automate the work of software development (Dev) and IT operations (Ops). But currently in the market, companies are now looking for "DevOps" roles. By which they mean: an IT specialist that specializes in Infrastructure. By specializing, dividing labor, we are separating the Ops and the Devs again. Just under a new name.

The division of labor is not something that is necessarily imposed on us by management. Like everyone else, Software Engineers want to be good at their job, they are looking for mastery of their field. This is of course easier to achieve if you specialize to a limited set skills. Most backend developers I know do not want to write code in the Frontend. And vice versa. If your proficient using framework X, it could become your default solution and you're could become hesitant to use framework Y or no framework at all. A developer in Java, Kotlin, C#, Scala, F#, PHP,... often doesn't want to start programming in another language ecosystem. Someone whose main interest is in databases, UX doesn't want to write backend code. It is out of their field of interest. And of course no self-respecting backend developer wants to develop a frontend.

This makes perfect sense. We want to do what we are best, most efficient at. Which often correlates with what we most enjoy. To each their job. 

[Division of labor]

### First time right

The term "First time right" is best known in quality management. Because needing to do a job more than once is obviously waste, we need to strive for excellence in our initial efforts, not relying on changing, improving what we delivered afterward.

Given that working iteratively should be a well known practice in the software field, it amazes me how big the aversion of doing something more than once can be with software engineers. There is a strong desire to "get it right", making sure we got everything covered, trying to foresee all possible use-cases and possible changes in the future. Because we have to do it right.

The mindset of trying to do things just once also occurs with knowledge transfers. With onboarding new people on the project, explaining new features, the architecture etc... All too often the desire is there to do any the knowledge transfer just once, a resistance to explaining things multiple times.  

## The scope off efficiency

One also must take into account that efficiency occurs within a specific context or scope. Individual components, processes or "resources" may be efficient on their own, but if they do not work together well, there will be waste on the whole. In other words, efficiency is not just about optimizing individual tasks or elements; it's about ensuring that **all** parts of a system function harmoniously together.

Luckily for us there is quit a lot of study done on the efficiency within systems in relation to their individual components and their interactions with the larger system. The domain of systems thinking focus on understanding complex systems as a whole, including how their various components interact and influence overall performance.  Systems thinking emphasizes the interconnectedness of components within a system and examines how changes to one part can affect the system as a whole. 

Below a couple of quotes that are relevant for our discussion 

+ "Local optimization creates global suboptimization." - John Seddon
+ "Optimizing a part of the system will not necessarily optimize the whole." - W. Edwards Deming
+ "The performance of a system is not the sum of the performances of its parts taken separately, but the product of their interactions." - Russell Ackoff
+ "Any improvements made anywhere besides the bottleneck are an illusion." - Gene Kim

So when someone complains about an efficiency, make sure that they clarify the scope of the (in)efficiency. It is very easy to lose sight of the system as a whole. Something that is often at the root of those four costly words. We will come back to this when focussing on software engineering practices.


## Efficiency trade-offs 

While I think efficiency is definitely a good thing, it does have its trade-offs. Trade-offs we need to be aware of so that we don't just end a conversation because something makes the argument that something isn't efficient. Because there is more to life then achieving maximum efficiency. If fact, there probably wouldn't be any life is everything was efficient...

### Mother Nature

Let's leave the world of IT for a minute and take a look at mother nature. 

![celss]

In nature not everything is efficient. If we take a look at how cells evolve, in plants as well in animals, this happens in a non-deterministic way. It is not set from the beginning what a cell will become. Cells are capable to of evolving on a wide spectrum. Though it would be more efficient in the short term if each cell is ascribed a function from the start, in the long term this comes at a cost. It would hinder the organisms ability to **adapt** at to external changes. By being suboptimal, inefficient on the small scale (cells), nature has become resilient at the larger scale (organisms). 

An ant colony is also an example of this. There is build in redundancy by tasks and roles of course. But even we observe the route an individual ant takes, this isn't efficient. However, for the colony as a whole this gives resiliency by having multiple routes and options for food. 

So an important takeaway:

> "Inefficiency in the small yields resilience in the large."

![Leaf]

Another more visual example are plants. Green is the color that reigns over the plant kingdom. But why green, and not black? It is because plants photoelectric cells, those that regulate the energy flow during photosynthesis, absorb all the photons in the red and blue regions of the light spectrum. But they absorb only about 90% of the green photons. If they absorbed more, they would look black. So plants are green because they are not super efficient and still reflect a small amount of green light. So what is the trade-off?

Not capturing all the green light has a purpose. Since the external input of light constantly changes, this would also make the electrical energy input flow in the photoelectric cell constantly shift if the cells would absorb all light. But for the cells a stable energy flow is best, better than the most efficient energy absorption. Because not enough electrons can cause an energy failure, while too many electrons can cause overcharging effects. That is why the photoelectric cells regulate their light absorption and "spit out" green light. So evolution cares less about making being efficient than about being stable. 

> "To be resilient against external changes, prioritize stability and adaptability over efficiency"

### Computer science

There are also plenty of examples in Computer Science where efficiency was sacrificed in order to gain resiliency. 

For instance the simple protocol suite, TCP/IP, which regulates how packets travel through the network from one machine to another, is definitely not efficient. But it is resilient! It needs to be given that significant errors are possible: data can be corrupted, packets can be lost, the network is continuously changing with constant failures of nodes. It was designed this way, efficiency in the small was sacrificed for resiliency in the large. Stability and adaptability was prioritized over efficiency.

Even when designing algorithms, people sometimes choose suboptimal heuristic solutions over optimal exact algorithms. Because many real-world problems are so complex that pursuing the ideal, most efficient solution is too costly. Instead, people sacrifice efficiency by introducing randomness and settling for 'good enough' solutions. Sometimes the cost of optimal algorithms is too high computational and time wise. There can be a point where going for the most efficient solution has diminishing returns. 

### The choice

From the examples above we can make the following conclusions:

+ Optimizing for local efficiency can negatively impact resiliency on the larger scale.
+ Choosing the most efficient solution may not be worth the effort. Having a faster good enough solution may prove to be more valuable. 
+ Efficiency is often achieved in a well controlled environment. Depending on the type of environment, resiliency may be more important. If the environment (requirements) frequently changes, the effort done to be efficient can be waste in itself.





## The cost of efficiency in Software Engineering

As shown above being efficient is not always the most important thing. An over simplistic drive to "be efficient" without taking into account the scope, environment, cost of achieving efficiency can be more costly. 

Let's bring it back to the field of software engineering. Let us revisit the three classic efficiency goals stated earlier and discuss where they can have a negative impact.

### The pain of Maximum resource utilization

If the goal is maximum resource utilization, we aim to be always busy, always going forward, no one is idle. We don't spend time on knowledge sharing, redundancy since this doesn't deliver output in itself. We focus on producing concrete output, preferably with everyone having their own clear task where they can work on undisturbed.

While this may be more efficient when everything is clear, well-thought-out and when nothing ever changes, I am however still waiting for the first software project where this is the case. In software development, change is key. If everyone is busy, and something unexpected happens we have a problem. When a feature changes, an estimate was wrong, someone changed their minds, a colleague falls ill, ... There is no space available to cope with this, because everyone is busy. Our well taught out plan goes down the drain and the poor PM needs to frantically try to come up with a credible plan again and fix all those Gantt charts. Added on top of this, invisible in all those pretty graphs, is that there is most likely a knowledge problem. We can not simply let Brent's task be done by Max. There are so many specialized tasks, for which certain expertise is needed. As well as built up knowledge of the current system, business. The division of labor isn't always as clear as by role title. On paper, you could replace one python developer with 5 years experience by another python developer with 5 years experience. But in reality, you've lost a big part of knowledge which will take time to rebuild. Since knowledge wasn't shared on a continuous basis with others, we simply aren't resilient. And no, writing lots of confluence pages before you leave doesn't count. Confluence is where documentation information goes to die. 

The drive for max resource utilization, for being efficient, is held by management as well as by software engineers themselves. Management thinks that if Software Engineers aren't typing, they are not being productive. After all their job is to translate business requirements into code. So the engineer who writes the least code must be the [worst engineer](https://dannorth.net/the-worst-programmer/)?  

A corresponding view often held by Software Engineers themselves is

> If I'm not writing code, I'm not being productive

As a result practices as Pair programming or Team (mob) programming are often seen as a big waste of resources. We have two people working on the same thing and only one of them is typing? We have a whole team working on one thing and only one person is typing??

[Panick mode image]

This argument would make sense if what software engineers do is indeed simply translating business requirement into code. And if this is indeed your job, you should fear all the LLM AI that can generate code. But as any experienced software engineer knows, writing code is the easy part. 

> Typing is not the bottleneck

Correlated with the above, the aim for maximum resource utilization can also hinder to communication and collaboration. Meetings are seen as waste of time because we could be writing code instead of discussing things. Personally I have found that is really hard to let people let go of their keyboard and discuss the problem, to actually design. We seem to prefer to build the wrong thing fast, then making sure we're actually solving the right problem. Due to the drive to be busy people prefer generating output (code) over outcome (solving), 

> We prefer building the wrong thing fast, then the solving the right thing well

Given the nature of software engineering, the drive to produce, to be busy is especially harmful. Because it is not about producing code, but about solving problems. And it is hard to do this "efficient". Just like it is hard to be creative on command. 

> Software Engineering is a learning process, working code a side effect

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


### The pain of First time right

Variability in Product development is not a bad thing if it comes with a high enough economic pay-off. We should prefer "responding to change over following a plan" if this is more valuable. But this is a hard thing todo


Not doing it more than once
- Sunken cost
- not learning
- waterfall
- DRY
- I will say this only once
- 
  Given that working iteratively should be a well known practice in the software field, it amazes me how big the aversion of doing something more than once can be with software engineers. The desire to "get it right" can lead to big upfront design where one is hesitant to start tackling a problem until everything is clear. Or engineers wil over design a solution, trying to foresee all possible use-cases and possible changes in the future.

How many "prototypes" make it into production and are then adopted as the real version? Surely if it works, we aren't just going to throw it away to do it again? To be fair, this is a scenario that I mostly have seen imposed by management.

>It's only a prototype until it works
  
Striving for perfection, getting it right from the start, often holds us back from working iteratively. Even though we really need more of that adaptable, iterative mindset.

Variability in Product development is not a bad thing if it comes with a high enough economic pay-off. We should prefer "responding to change over following a plan" if this is more valuable. But this is a hard thing todo

## Delivering Projects

A possible case where efficiency is more important than resiliency could be when delivering a short term software project as an external party. Because there is no need to be resilient, share knowledge in short term project mode. Commit to the deadline, deliver within the promissed time and budget and onwards to the next project!

When the environment is well controlled, the time span short enough to hopefully avoid unexpected changes, the requirements small and limited enough so that the estimates are in the realm of reality then this can work. You can work efficiently, getting the most revenue from your consultant work by maximizing your consultant utilization, using the best expert for the job and doing it right immediately.

However, that are a lot of ifs. And then we haven't taken into account what happens to the software once the project is done. Who will maintain it? What is the quality of the software delivery under the pressure of being efficient and doing it withing the fixed time and budget?



## Conclusion

We've seen that Efficiency is often achieved in a well controlled environment, where the one constant thing in the field of Software Engineering is change. Therefore, it is often  better to prioritize for resiliency, to sacrifice short term local efficiency for a more durable resilient solution in the long term. In the software that is written as well in the way that the engineers write the software.

## Links

+ https://www.quantamagazine.org/why-are-plants-green-to-reduce-the-noise-in-photosynthesis-20200730
+ https://dannorth.net/the-worst-programmer/