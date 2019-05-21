---
layout: post
author: domenique
header-img: "img/posts/dip/spotlight.jpg"
title: "The importance of the dependency inversion principle"
excerpt: "The importance and proper useage of the dependency inversion principle."

---

# The importance of the dependency inversion principle

The dependency inversion principle (DIP) is a well known principle and one of the five [SOLID](https://en.wikipedia.org/wiki/SOLID) principles. It is at the heart of a lot of software design patterns, frameworks and architectures. This article will try to connect some dots and hopes to provide some additional insight into the application of this core principle. 

## The principle

The DIP principle states the following:

> **High level** policy should not depend on **low level** details, instead, both should depend upon abstractions. **Abstractions** should not depend upon **details**. **Details** should depend upon **abstractions**.

In essence the principle advocates two things. First it states that important things should not depend on details. Which hopefully makes a lot of sense. It also states that these concerns of different importance should be loosely coupled from each other. This should be done by using meaningful abstractions as the middleman. 

This may sound simple in theory but it is often difficult to distinguish the important things from the unimportant ones. Also it requires discipline and insight to separate the two properly. 

#### Inverting dependencies
Applying the dependency inversion principle starts by **introducing an abstraction between the high level policy and the low level detail**. This abstraction removes the direct dependency on the details, decoupling it and thus allows for easier re-use of the important functionality in the policy. By introducing an abstraction, we allow the low level details, which are typically far more volatile then the high level policy, to be interchangeable, without requiring changes to the high level policy. 

We call this *dependency inversion* because the high level policy no longer has a **use** relation on the low level policy but the low level policy now has an **implements** relation on the abstraction. 

![Introduce an abstraction](/img/posts/dip/introduceInterface.png){:width="600px"}

This implies that the high level policy and the abstraction reside on the same level. Which brings us to our next topic.

#### Where to put the abstraction?
Who owns the abstraction upon which the high level policy depends and why? Where does the abstraction belong? The answer is actually already given in the definition of DIP. When we are 'inverting' the dependency, we are in essence going from a high level policy that ‘uses’ a low level detail (the dependency) to a situation where the high level policy ‘uses’ an abstraction and the low level policy now has the inverted relation "implements" (the inverted dependency) towards the abstraction. Since our goal was for the high level policy to no longer depend on the low level, the abstraction belongs with the high level policy. 

There is also the cohesive aspect of "reason to change". Why would the abstraction need to change? Because the one that uses it, requires something different from it. It is the high level policy that has the **uses** relation to the abstraction. Therefore they belong together.

![Move interface](/img/posts/dip/moveInterface.png){:width="600px"}

The low level policies, the details, are just plugins to our important policies.

#### "Dependency inversion" is not "Dependency injection"

Many developers confuse the dependency inversion principle with [dependency injection (DI)](https://en.wikipedia.org/wiki/Dependency_injection). But these are two separate things. Dependency injection is a technique whereby one supplies the dependencies to an object. The intent behind dependency injection is to achieve separation of concerns between the construction and the use of objects. It states nothing on the relative importance between those objects or if an abstraction is used.

Dependency injection in itself is a form of the broader technique of inversion of control (IOC). IOC in itself *can* support DIP. But it is not because we use DI or IOC that we are necessarily applying DIP. No framework can help us determining what is high level and what is low level. Nor with defining the proper abstraction to separate the two.

## DIP at work 

### How to obtain instances of a low level module
Who instantiates an implementation if it’s located in an an other module? If we're using an IOC container, the IOC container could create the instance of the low level module and inject it where necessary. So **an IOC container makes it really easy to inject low level details into our high level modules**. But as we stated before, we still need to provide the proper abstractions ourselves.

However when we don't use an IOC container, we can use the **Abstract Factory pattern for injecting low level details into our high level modules**. When applied across layers, the abstract factory illustrates nicely how high level modules can obtain references to low level instances.

![Introduce a factory](/img/posts/dip/withFactory.png){:width="500px"}

### The repository pattern
Looking at the repository pattern, as originally coined by Eric Evans, we can clearly see that it's a fine example of the dependency inversion principle. The pattern states that an *abstraction* should be created which is free of technical details, and should preferably look a lot like a collection interface. The abstraction should be implemented in the infrastructure layer where all the technicalities of dealing with a persistent store should be hidden. From the domain perspective, we are talking with a collection like interface to store the aggregates.

![Move interface](/img/posts/dip/repoPattern.png){:width="500px"}

Placing this abstraction inside the domain layer, close to its consumers, ensures that the domain layer is guarded from any changes to the low level infrastructure code.

#### The repository is *not* a data acces object

As a side note, the idea of the repository pattern is to abstract away the persistency details. We obtain domain concepts from a repository. Not low level data where we still need to attach meaning to. If we obtain the aggregate from memory, a relational db, a document db or an eventsourced system, those are low level details.

### Ports and adapters architecture.
When applying the dependency inversion principle on the architectural layers of your application, you're bound to end up with a [hexagonal architecture](http://wiki.c2.com/?HexagonalArchitecture) also called [ports and adapters](https://herbertograca.com/2017/09/14/ports-adapters-architecture/ ) or as Uncle bob calls it: [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

This architectural style focuses on making sure all dependencies point into the same direction: The domain model, the core functionality of the application. This is achieved by creating abstract interfaces for the low level details which sit at the boundary of your system. And as we already know, these interfaces are part of the domain layer.

## Conclusion
The Dependency inversion principle helps to loosely couple your code by ensuring that the high level modules depend upon abstractions rather then concrete implementations of the low level modules. Placing those abstractions on the right side of the boundary makes sure we protect ourselves from changes to the low level modules. Applying this principle helps writing testable and maintainable code.