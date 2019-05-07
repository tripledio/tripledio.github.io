---
layout: post
author: domenique
header-img: "img/posts/dip/spotlight.jpg"
title: "The dependency inversion principle"
excerpt: "how to Apply DIP correctly."

---

# Dependency inversion principle
In it’s essence, this pattern dictates the following:

* high level modules should not depend on low level modules, instead, both should depend upon abstractions.
* Abstractions should not depend upon details. Details should depend upon abstractions.

## Depend upon abstractions
This principle states that the most flexible systems are those in which **source code dependencies refer only to abstractions, not to concretions**. For a statically typed language like java, this means that import statements should only refer to interfaces or abstract classes. **However, this should not be dogmatized**. Not all classes we depend upon should be abstract interfaces. This only makes sense for classes which tend to change a lot. Think about the `String` class for example, or the `BigDecimal` class, it would not make a lot of sense to create an abstract interface for those since we can safely consider them to be stable classes. The only place where it makes truly sense to treat this rule as a dogma, is when crossing architectural layers inside your application. 

The relationship between a low level `Repository` and a high level `DomainService` is a good example of this. We do not want the `DomainService` to depend directly on a concrete `Repository`, instead we want to create an abstract interface between the two layers. This abstract interface will protect the high level `DomainService` from any changes to the low level `Repository`. This makes sense: the concrete repository will change for different reasons then the `DomainService` will.

![Introduce an abstraction](/img/posts/dip/introduceInterface.png){:width="800px"}

Sadly, this is only part of the problem: What if the interface of this class needs to change? One way to mitigate that problem is to carefully think about the location of the interface.

## Inversion of ownership
The dependency inversion principle is not just about dependencies, it also deals with ownership: Who owns the interface upon which the high level module depends and why? To answer that question we need to think about the reasons for which the interface would have to change. Clearly the primary reason for a change in the interface would be because the domain layer needs it. This leads to the conclusion that the interface of the `Repository` should be located in the domain layer, rather then the repository (or infrastructure) layer. In essence we’re changing the relationship from a Domain service ‘using’ a repository  to a domain service ‘requiring’ a repository which conforms to specific API. This subtle change allows us to think of the infrastructure layer as a plugin to our application. Which in turn allows us to create an alternate implementation for testing and to delay the implementation of those plugins to the latest sensible moment.

![Move interface](/img/posts/dip/moveInterface.png){:width="800px"}

## How to obtain instances of a low level module
Who instantiates an implementation if it’s located in an an other module? If we're using an IOC container, the IOC container could create the instance of the low level module and inject it where necessary. So an IOC container makes it real easy to inject low level details into our high level modules. With the low level details hidden by a proper abstraction of course. However if we don't use an IOC container we can use the Abstract Factory pattern for this. This pattern, when applied across layers illustrates nicely how high level modules can obtain references to low level instances.

![Introduce a factory](/img/posts/dip/withFactory.png){:width="500px"}

## Relationship to ports and adapters architectural styles.

## Improved testability by applying DIP

## Conclusion
The Dependency inversion principle helps to loosely couple your code by ensuring that the high level modules depend upon abstractions rather then concrete implementations of the low level modules. Placing those abstractions on the right side of the boundary makes sure we protect ourselves from changes to the low level modules. Hopefully this post explains the importance of this and helps you to write better code!
