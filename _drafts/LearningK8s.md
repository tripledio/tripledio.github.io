---
layout: post
title: "Draft AWS - K8s"
author: guido
header-img: "img/about-bg.jpg"
tags: java, software
excerpt: Learning K8s.
---
# Learning K8s

Since i finally got around to looking seriously into Kubernetes I thought it might be interesting to take some notes on my learnings, thoughts when doing so. Even if only for helping me to focus.

Why Kubernetes? because it's the new shiny object of course ;-). No seriously, as a professional software engineer our job consists out of so much more then knowing how to write good maintanable code. The code in itself does not deliver any value to the customer. It is delivering value when it is up and running. So we want to make sure that we can keep our software up and running 24/7. 

That is why as a company you want your software to be able to run in a variable number of instances, the number depending on the ever changing requirements determined by usage. If everyone wants to buy you wnat to be able to handle the load. if no one is buying you do not want to waste resources on unused instances. It should be very easy to spun up a new instance of any application. (AWs lambda's and FAAs come into play here.) But regardless of the elasticity of our running software instances we still want all those different applications to be able to work together. Without really needing to know or care where the applications that they are depending on are running. Or how much instances that are running. It should also be possible to have multiple instances of multiple versions of any software running at the same time. Allowing for a graceful transition of our services in any direction we want to go.

So after have look at some video's, reads some blogs, played on [kata code](https://www.katacoda.com/courses/kubernetes)[^kataCoda] I decided for a systematic approach to make sure i got the basics right and could build up mu knowledge in a structured manner. So i bought the book [Kubernetes in action](https://www.manning.com/books/kubernetes-in-action) and flipped to chapter 1.

## My model

Reading through chapter 1 of the book [^kubeBool] I felt myself quickly establishing a mental model. A metaphor by which it all makes sense to me. Sorry that is just how my mind works :P 

Image you are a wealthy industrial. You own several factories that all produce different things. Some of those factories produce an end product for a customer. Some of these factories produce resources that are in turn used by other factories. As an entrepreneur you would of course like to be able to quickly match the markets demand. One doesn't want to be stuck producing video tapes when dvd's are all the rage. (I know, I'm old ;) ) 


That is why you want to be able to use all your factories to produce many different things. It would be nice if you could just send a new or updated production process to any factory and in a very short time that factory is able to follow that process and produce different things. If your factories would be able to do that it would also be easy, depending on the size and resources available to a specific factory, to let a factory produce several completely unrelated things. This will also avoid that the production of some good can get stuck when there is a problem at one of the factories.  When demands for a certain product plummets or sky rockets you want to be able to quickly. You want to be able o quickly move production to another factory.  

The factories would provide water, power and factory workers for many different production processes.

If tomorrow we release a new version of an application    

**Factory**

A building site where basic resources like electricity, water, petrol are available. Intentionally not equipped for any specific production process. We don't know what we will build here yet. And whatever we build here it could change very fast.

_Represents : Your typical virtual or not server where we can run processes_

**Production Process**

A production process that describes how to produce something. We want to be very innovative here. process can refer to other processes. There is a process for producing tyres, for producing engines for producing cars. We want to be able to send this production process to any random factory and have it prodcuing asap.

_Represents : The executable software that we want to be able to run anywhere in a variable amount of instances_ 



**References**

[^kubeBook]: [Kubernetes in action from Marko Luksa ISBN: 9781617293726](https://www.manning.com/books/kubernetes-in-action)
[^kataCoda]: [Kubernetes course](https://www.katacoda.com/courses/kubernetes)

