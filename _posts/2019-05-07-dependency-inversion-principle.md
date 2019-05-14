---
layout: post
author: domenique
header-img: "img/posts/dip/spotlight.jpg"
title: "The dependency inversion principle"
excerpt: "How to Apply DIP correctly."

---

# Dependency inversion principle
This pattern dictates the following:

> High level policy should not depend on low level details, instead, both should depend upon abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

Simply put, this principle advocates that important things should not depend on details. Which makes sense. It also explains that they should be loosely coupled using meaningful abstractions as the middleman. This principle is at the heart of a lot of software design patterns and even complete architectures. This article will try to connect those dots, and hopefully give you some more insight into this core principle. 

## Inverting dependencies
Applying the dependency inversion principle starts by **introducing an abstraction between the high level policy and the low level detail**. This abstraction allows the policy to be re-used and removes the direct dependency on the details. By introducing an abstraction, we allow the low level details, which are often far more volatile then the high level policy, to be interchangeable, without requiring changes to the high level policy. 

**update drawing!!**
![Introduce an abstraction](/img/posts/dip/introduceInterface.png){:width="900px"}

## Where to put the abstraction?
Who owns the abstraction upon which the high level policy depends and why? To answer that question we need to think about the reasons for which the abstraction would have to change. Clearly the primary reason for a change would be because the high level policy somehow needs it. This leads to the conclusion that **the abstraction should be located next to the policy, rather then the detail**. In essence we’re changing the relationship from a high level policy ‘using’ a low level detail to the high level policy ‘requiring’ a detail which provides a certain functionality. This subtle change allows us to think of details as plugins to our policies.

**update drawing!!**
![Move interface](/img/posts/dip/moveInterface.png){:width="800px"}

## How to obtain instances of a low level module
Who instantiates an implementation if it’s located in an an other module? If we're using an IOC container, the IOC container could create the instance of the low level module and inject it where necessary. So an IOC container makes it real easy to inject low level details into our high level modules. With the low level details hidden by a proper abstraction of course. However if we don't use an IOC container we can use the Abstract Factory pattern for this. This pattern, when applied across layers illustrates nicely how high level modules can obtain references to low level instances.

![Introduce a factory](/img/posts/dip/withFactory.png){:width="500px"}

## The repository pattern
Looking at the repository pattern originally coined by Eric Evans, we can clearly see that it's a fine example of the dependency inversion principle. The pattern states that an abstraction should be created which is free of technical details, and should preferably look a lot like a collection interface. The abstraction should be implemented in the infrastructure layer where all the technicalities of dealing with a persistent store should be hidden. From the domain perspective, we are talking with a collection like interface to store the aggregates.

** update drawing, repo only.**
![Move interface](/img/posts/dip/moveInterface.png){:width="800px"}

Placing this abstraction inside the domain layer, close to its consumers, ensures that the domain layer is guarded from any changes to the low level infrastructure code.

## Ports and adapters architecture.
When applying the dependency inversion principle on the architectural layers of your application, you're bound to end up with a **ports and adapters architecture**. This architecture has been around for a long time, but has become increasingly popular again due to the work of Uncle bob, who calls it **Clean Architecture**.

This architectural style focuses on making sure all dependencies point into the same direction: The domain layer. This is achieved by creating abstract interfaces for the low level details which sit at the boundary of your system. These interfaces are part of the domain layer.

## Conclusion
The Dependency inversion principle helps to loosely couple your code by ensuring that the high level modules depend upon abstractions rather then concrete implementations of the low level modules. Placing those abstractions on the right side of the boundary makes sure we protect ourselves from changes to the low level modules. Applying this principle helps writing testable and maintainable code.