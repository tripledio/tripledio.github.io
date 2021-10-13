---
layout: post
title: "6 Tips for successful ensemble programming"
author: domenique
tags: mob programming, ensemble programming
excerpt: Ensemble (or mob) programming is a technique used by XP developers to improve a teams productivity and knowledge by working closely together. This post provides a few tips that we learned after doing ensemble programming for about 6 months.
hideLogo: true
spotlight:
  imgDir: /img/posts/ensemble-programming
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# 6 Tips for successful ensemble programming
6 months of ensemble programming... what an experience! There are a few things we found positive, a few things where frustrating, but nevertheless, here's a list of tips we wish we knew from the beginning.

### Make the handover a non-event
Switching roles happens a lot throughout the day, so it's important to make it go as smooth as possible. 

In the beginning we used a tool like [mobster], which forces you to stop and switch roles. This tool is very useful to remind you to switch roles, but we found it way to intrusive because every time the mobster screen pop's up it interrupts the current task. We realised that every time this happened we lost a few minutes switching roles, then lost a few minutes to pick up where we left, and more than often this interrupt resulted in switching to off-topic banter making us lose our train of thought completely.

At some point we started using [mob.sh] as a tool to smoothen the hand-overs, and it helped a lot. One command and the next driver can continue. This made the hand-over itself a lot faster, however, there was still an interrupt and the timer functionality for mob.sh is not that great but more on that later.

Finally, we settled on using mob.sh but agreeing on using a distributed timer and a fixed routine when it goes off:
* the driver does a "mob next"
* the navigator (who becomes the next driver) takes over the screen sharing
* the navigator does a "mob start"
* the next navigator restarts the timer.

All of this happens without saying anything about this routine. If a discussion is happening, the discussion continues during this routine, if the driver was typing, he finishes his line, and switches to a terminal to type "mob next" so that everyone can see this and do their part of the routine.

### Experiment with short cycle times
Focus is an important aspect of ensemble programming. Keeping a group of people focused on one thing is quite hard. especially for the people who are not driving or navigating. The urge to quickly do something else is quite high. This is especially true for remote sessions where everyone is behind his pc. The best way for us to avoid this, was to shorten the cycle time. Initially we started with sessions of 30 minutes. for a 4-person team this meant that you would be driving or navigating once every 2 hours. That also means that 1 hour out of 2 you had to fight to not get distracted too much. 

After a while we realised that by shortening the cycle times we increased our focus a lot. We managed to shorten the period to 10 minutes, and even tried 5. Ofcourse, this only works if your handovers are running smooth and without any interrupt, so make sure you fix that before tweaking your timer.

### Everyone uses his own setup
Ask any developer which IDE is the best, and you will get different answers. Same goes for keyboard shortcuts, operating systems, cli utilities etc. Stop debating about it just embrace it. Let every developer work on his own machine, using his own tools. 

Using git to do the code handover has the advantage that you can easily switch laptops too. Switching the screen sharing is a bit more cumbersome, at least when not working remote. If your workspace has monitors to which you can cast, that would make it a lot easier, if not, you will have to work with the cable. It's a small price you pay for having relaxed and smooth drivers.

### always respect the timer, no matter the state of the code
One of the hardest parts about ensemble programming is letting go of the keyboard. Somehow, you always have the urge to quickly finish that small little thing. The problem with this is that once the timer has passed, nothing stops you from staying on the keyboard for hours. You would think that someone from the team will step in and mention it, but in reality everyone is focused on the task and we all loose track of time. 

To avoid this, make sure that the timer goes of on all laptops, not just one and force the driver to stop immediately and start the handover proces. Again, make sure the hand-over runs smoothly without interrupts, otherwise this could get painful. 

### Less discussions -> show me the code!
When a design choice has to be made, and the team finds itself in disagreement, propose to work out multiple solutions so that they can be compared. It's always easier to reason about something which is right in front of you rather than something hypothetically. Most of the time, it will be pretty obvious wich solution works best.

The hard thing about doing this is to make sure you work out the proposals far enough so that you can form a conclusion. On some occasions it was hard when switching navigators during this process especially when the navigator turns out to be a proponent of the current solution. To avoid this, let the person who came up with the proposal drive the implementation, it will avoid a lot of miscommunication. 

### do retro's every day!
Maybe this one does not have that much to do with ensemble programming, but do retro's often, especially when starting out. This allows every team member to drive the process towards something they feel comfortable with. 

In the beginning we did short 15 min retrospectives at the end of the day. This allowed us to talk about some of the issues we where facing immediately and try experiments daily to optimise our way of working.