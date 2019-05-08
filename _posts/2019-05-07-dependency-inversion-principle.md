---
layout: post
author: domenique
header-img: "img/posts/dip/spotlight.jpg"
title: "The dependency inversion principle"
excerpt: "how to Apply DIP correctly."

---

# Dependency inversion principle
This pattern dictates the following:

* high level policy should not depend on low level details, instead, both should depend upon abstractions.
* Abstractions should not depend upon details. Details should depend upon abstractions.

Simply put, this principle advocates that important things should not depend on details. Which makes sense. It also explains that they should be loosely coupled using meaningful abstractions as the middleman. This principle is at the heart of a lot of software design patterns and even complete architectures. This article will try to connect those dots, and hopefully give you some more insight into this core principle. 

## Inverting dependencies
Applying the dependency inversion principle starts by **introducing an abstraction between the high level policy and the low level detail**. This abstraction allows the policy to be re-used and removes the direct dependency on the details. By introducing an abstraction, we allow the low level details, which are often far more volatile then the high level policy, to be interchangeable, without requiring changes to the high level policy. However, problems arise when the newly created abstraction itself needs to be changed, because this will trigger a change in the policy as well as the low level details. 

**update drawing!!**
![Introduce an abstraction](/img/posts/dip/introduceInterface.png){:width="900px"}

## Where to put the abstraction?
Who owns the abstraction upon which the high level policy depends and why? To answer that question we need to think about the reasons for which the abstraction would have to change. Clearly the primary reason for a change would be because the high level policy somehow needs it. This leads to the conclusion that **the abstraction should be located next to the policy, rather then the detail**. In essence we’re changing the relationship from a high level policy ‘using’ a low level detail to the high level policy ‘requiring’ a detail which provides a certain functionality. This subtle change allows us to think of details as plugins to our policies.

**update drawing!!**
![Move interface](/img/posts/dip/moveInterface.png){:width="800px"}

## The repository pattern
The Repository pattern adheres to the dependency inversion principle by stating that the abstraction should be free of technical details and act as if you're working with an in memory collection. The concrete implementation should be done in the infrastructure layer where a translation will be done to some sort of persistent store. 

This allows us to focus on the contract and the domain language in the abstraction without thinking about the technical details.

## Ports and adapters architecture.
When applying the dependency inversion principle on the architectural layers of your application, you're bound to end up at the **ports and adapters architecture**. This architecture has been around for a long time, but has become increasingly popular again due to the work of Uncle bob, who calls it **Clean Architecture**.

This architectural style focuses on making sure all dependencies point into the same direction: The domain layer. This is achieved by creating abstract interfaces for the low level details which sit at the boundary of your system. These interfaces are part of the domain layer.

## Improved testability by applying DIP
explain how it's easy to provide stubs for the abstract interface of the domain layer.

## Conclusion
The Dependency inversion principle helps to loosely couple your code by ensuring that the high level modules depend upon abstractions rather then concrete implementations of the low level modules. Placing those abstractions on the right side of the boundary makes sure we protect ourselves from changes to the low level modules. Hopefully this post explains the importance of this and helps you to write better code!
