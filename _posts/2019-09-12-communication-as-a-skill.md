---
layout: post
title: "Communication is a Skill"
author: guido
tags: mob programming, communication
excerpt: Developing software, solving technical issues is hard. But so is communication efficiently and productively. Having productive discussions isn’t something that happens automatically. And they play a big role in the way how the software will be designed. Conway's law taught us the correlation between software design and people interaction. So we must recognize communication as a skill that we need to master. Turns out there are quite a few things to be learned from Mob Programming.
hideLogo: true
spotlight:
  imgDir: /img/posts/communication
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# Communication is a skill

Being able to have a productive discussion is an important skill to have. Of course we all try to reduce the boring bureaucratic meetings as much as possible. But we still need to sit together with our fellow team members and colleagues to discuss, refine and agree on how we will build and integrate our software.

As software engineers, we are constantly learning new technologies, new techniques. People their resumes are more often than not a list of hard technical skill that they have mastered. However, engineers rarely take the time to improve their communication skills. Conway's law taught us the correlation between software design and people interactions. So if we want to develop good software, the interactions of the people that are building it really does matter. A lot. How they communicate with each other is important. It is a skill just like any other. So how can we get better at it?

## Does this matter for a software engineer?

In and outside of meetings we are constantly in communication with each other. So you might think that you have mastered this from daily practice and don't need to spend any time on improving those skills. Communication and collaboration is something that we do every day, so we assume that we are good at it. But I fear that we overestimate our level at effective communication.

No doubt we all have been in some very unproductive discussions where conflicting interests and opinions collide, where a lot of time is wasted with little to show for, except some frustration and possible bad feelings towards each other. Meetings and discussions aren't productive or efficient by chance. There is a reason people often try to avoid them. 
  
Those inefficient discussions are something that I have started to pay a lot of attention to, in the last couple of years. And once you see the patterns, it is hard to unsee them. It becomes all the more apparent what a blocker they often are for the quality of our software, the speed with which we deliver it, how much time and money gets wasted and how much grievances these unproductive discussions lead to. 

So having productive discussions is important. Experience has shown me that it isn’t something that happens from itself. It is something one needs to work on and pay attention to.  You could, of course, spend your valuable time on something else than a blog post on communication. This certainly won't gain you the same bragging rights as having read the latest shiny object article. But I would argue it is a skill that will have more impact on your efficiency as a software engineer then that new fancy framework.


## Anti Patterns

Let me start by listing some - what I call - anti-patterns of having a productive discussion

+ **Interrupting each other**: Frustrating for the one who is interrupted and makes it hard to follow the conversation. often also a clear sign you weren't trying to understand.
+ **Raising our voice**: The best way of silencing the ‘opposition’. However, when no one no longer objects, that doesn’t mean you made your point. They just stopped caring.
+ **Getting sidetracked**: Jumping from one topic to another makes it hard to follow and nothing gets finished. 
+ **Going depth-first instead breath first** Discussing details in depth before the bigger global picture is clear
+ **Not listening** Talking next to each other and not really listening. Just waiting until someone else has stopped talking
+ **No visualization** People fearing the whiteboard.
+ **Limited engagement** Only a small percentage of the group is engaged: This is a great tell sign that de discussion has gone off the rails. If a large part of the group is no longer actively listening, this should be a sign that something is going wrong.
+ **Ego**: Of course. The always present elephant in the room. You are not your solution. Let it [go](/26/06/2018/LocalHero##ego).

I’m sure we all know and recognize those anti-patterns, hopefully realizing that they can be a problem. But knowing them does not mean that we aren’t doing them ourselves. Even if we recognize that we shouldn’t.

I think it is the first major important step to recognize the large cost of those anti-patterns. These anti-patterns impact the quality of the software that we create, the speed in which we create it and the quality of the human relations and interactions. Once we become mindful of this, we can start avoiding these anti-patterns. 

## Mob Programming

When I recently took Woody[^Woody] Zuill’s [mob programming](https://www.agilealliance.org/resources/experience-reports/mob-programming-agile2014/)[^mobbing] course, a lot of what he said resonated with me. Not just on how to do mob programming, but on the whole communication aspect. After all, if a team wants to be able to Mob program efficiently they must be also able to communicate productively. Woody taught us Mob programming through a series of exercises where we needed to interact **disciplined** and pay attention to how we communicate. I found this very revealing. 

![Mob 3](/img/posts/communication/mob-group.jpg "Mob programming workshop"){:width="500px"}


### What "Woody" said

**Learn to shut up**

By adding our solutions or suggestions non-stop to the discussion, we think we’re gaining speed, but actually, we’re slowing down. It is very hard to keep quiet when we “know better”. 

>>“Clarity comes when you pause. Count to 10.” - Woody  Zuill[^Woody]

**Keep it to yourselves**

Let people realize a possible error themselves. Refrain from prematurely adding noise. You may be right, they may be right. Let it play out.  It will often go faster, with less confusion and better understanding for everyone. We don’t need to have a consensus on every detail. Perhaps it is not even important in the big picture. So, keep it to yourself. This is hard by the way :-) 

>>“Often, we are just adding noise. Can we keep it to ourselves?” - Woody Zuill

**Learn to Listen**

Listening is not just waiting until it is our turn to speak. Are we really listening?

>>“A  good listener makes others better thinkers” - Woody Zuill

**Have a parking lot**

Do not continuously interrupt the flow with new ideas, concerns or tasks. Postpone the details, move them to the parking lot so we don’t get sidetracked. We want to keep our focus during a discussion. Discussing one issue at a time. It is also pointless to discuss a lot of could and maybe's.

>>“Talking does not expose reality. Doing does.” - Woody Zuill

**Respect each other**

How would you like to be treated? Treat others in a way you would like to be treated. Don’t let our enthusiasm for a solution make [Bullies](/17/07/2018/Bully/)* out of us. Check the ego. Make an environment where people dare to make suggestions, mistakes and say they do not know something.

>>“Treat each other with kindness, consideration, and respect” - Woody Zuill

### Train communication in Mob

Mob programming is not something that works everywhere. You need to get good at it. The team needs to get good at it. But even when you aren't doing it on a daily basis, there is a lot to be learned from a couple of sessions. Try it out at work, in a meetup, unconference, ... Pay attention to how hard it is to "Not add noise", "Shut up", "Really listen". It is a great technique to practice communication in itself.

![Mob 4](/img/posts/communication/mob-group-2.jpg "Mob programming workshop"){:width="500px"}

## Guidelines 

After the anti-patterns, I like to offer some guidelines that can help us in becoming better at good communication, at the risk of sounding fluffy duffy. But these things matter. Once you start paying attention to them you'll be amazed of their impact and how often that neglecting them is the root cause of problems.  

### The 'soft' ones
*a.k.a. The hard ones to master*


#### Kindness
Be gentle and polite. Show concern for others. Value their opinions.
#### Consideration
Be humble. Our own idea is just one idea. Really consider other ideas
#### Respect
+ We can respectfully disagree. 
+ Don’t attack other people’s self-esteem.
+ No bullying other people into silence 
    
I took the above straight from the Mob programming book. They are short and easy to remember. But very hard to master...     

> “When we learn how to treat each other well we create a path toward better solutions. So start ‘pretending’ that we are good people”  - Woody Zuill

### Actionable guidelines
*a.k.a. The other hard ones*

#### Don’t waste time on discussing and deciding conflicting ideas. 

The best way to resolve conflicting ideas is to **act** upon them. 
+ See what works by doing it. 
+ Model multiple solutions out. 
+ Discuss on concretes.

![Visualize at the whiteboard](/img/posts/communication/triple-d-mob-yves-2.jpg "Triple D on a learning day"){:width="500px"}

#### Visualize things. 

Make a drawing, use post-its. Make it clear what we are discussing and where we are in the discussion. 

Letting go of the keyboard, or being the first one in a meeting to step up is a big hurdle to take. People seem to think it is not worth the effort, or maybe fear the attention. But visualizing the topic we are discussing can greatly increase the efficiency of the discussion, speed up the process and making sure that everyone is talking about the same thing.

When we are discussing against a visualization 
+ it reduces the cognitive overload
+ It isn’t personal. We are discussing a representation, not each other. This makes it often less offensive to disagree.
+ it brings focus and clarity

![Visualize](/img/posts/communication/drawing-whiteboard.jpg "Don't fear the whiteboard"){:width="500px" }

## Conclusion

Solving technical issues is hard. But so is communication efficiently and productively. Do not neglect this skill. Just like with everything, it is something that we can get better at by paying attention to it. Good communication is important enough to do so...

![Mob 1](/img/posts/communication/triple-d-mob-1.jpg "Triple D on a learning day"){:width="500px" .img-table}
![Mob 2](/img/posts/communication/triple-d-mob-2.jpg "Triple D on a learning day"){:width="500px" .img-table}
![Mob 3](/img/posts/communication/triple-d-mob-sander.jpg "Triple D on a learning day"){:width="500px" .img-table}
![Mob 4](/img/posts/communication/triple-d-mob-yves.jpg "Triple D on a learning day"){:width="500px" .img-table}

<p style="text-align: center;  font-style: italic;">Triple D during a learning day. Practising communication skills as well as engineering skills</p>

***

**References**

[^mobbing]: _[mob programming](https://www.agilealliance.org/resources/experience-reports/mob-programming-agile2014/)_ 
[^Woody]: _[Woody Zuill](https://woodyzuill.com)_ 
