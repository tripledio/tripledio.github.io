---
layout: post
title: "8 Tips for successful ensemble programming"
author: domenique
tags: mob programming, ensemble programming
excerpt: Ensemble (or mob) programming is a technique used by XP developers to improve a teams productivity and knowledge by working closely together. This post provides a few tips that we learned after doing ensemble programming for about 6 months.
hideLogo: true
spotlight:
  imgDir: /img/posts/communication
  imgAlt: "Triple D : Design, Develop, Deploy"
  logoAnimation: false
---
# 8 Tips for successful ensemble programming
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### Everyone uses it's own setup
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### always respect the timer, no matter the state of the code
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### Don't change the solution when the navigator changes
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### Less discussions -> show me the code!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### do retro's every day!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### document guidelines and big design decisions
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.

### make things visual!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at hendrerit nunc. Etiam placerat venenatis viverra. Fusce cursus turpis at nisl tempus egestas. Morbi posuere semper egestas. In hac habitasse platea dictumst. Nulla at nisi tortor. Nunc molestie rutrum purus, at porttitor felis tristique vitae. Nullam condimentum dapibus tellus eu accumsan.

Ut accumsan mauris at elit pulvinar, in faucibus elit porta. Nunc ut enim enim. Integer porttitor a ante ut egestas. Nam consequat tellus sit amet feugiat sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas rutrum enim nec odio convallis fringilla. In sodales odio sit amet massa molestie lobortis. Morbi vulputate congue tellus, ac facilisis tellus iaculis non. Nullam vel ornare nulla.

Quisque et nunc ut sapien consectetur suscipit. Proin enim ex, viverra id ullamcorper nec, facilisis eget purus. Donec viverra elementum pretium. Vivamus vitae tempor erat. Sed sodales pretium dapibus. Donec in lacus.