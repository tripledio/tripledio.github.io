---
layout: post
author: domenique
header-img: "img/about-bg.jpg"
title: "The dependency inversion principle"
excerpt: "how to Apply DIP correctly."

---

# Dependency inversion principle
In it’s essence, this pattern dictates the following:

>high level modules should not depend on low level modules, instead, both should depend upon abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

## Depend upon abstractions
This principle states that the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.

For a statically typed language like java, this means that import statements should only refer to interfaces or abstract classes. However, this should not be treated as a fixed rule, since that would be impossible. Not all classes we depend upon should be abstract interfaces. This only makes sense for classes which tend to change a lot. Think about the `String` class for example, or the `BigDecimal` class, it would not make a lot of sense to create an abstract interface for those since we can safely consider them to be stable classes. 

A `PersonRepository` will be subject to change a lot faster, and so we tend to create an abstraction for it. Creating an abstract interface for this class would guard us from any changes made to the concrete implementation of this class. Sadly, this is only part of the problem: What if the interface of this class needs to change? One way to mitigate that problem is to carefully think about the location of the interface.

<Domain service depends upon interface of Repository service>

## Inversion of ownership
The dependency inversion principle is not just about dependencies, it also deals with ownership: Who owns the interface upon which the high level module depends and why? To answer that question we need to think about the reasons for which the interface would have to change. Clearly the primary reason for a change in the interface would be because the domain layer needs it. 

This leads to the conclusion that the interface of the `PersonRepository` should be located in the domain layer, rather then the repository (or infrastructure) layer. In essence we’re changing the relationship from a Domain service ‘using’ a repository  to a domain service ‘requiring’ a repository which conforms to specific API. This subtle change allows us to think of the infrastructure layer as a plugin to our application. Which in turn allows us to create an alternate implementation for testing and to delay the implementation of those plugins to the latest sensible moment.

## Abstract factories 
Who instantiates an implementation if it’s located in an an other module? If we’re using spring, we could consider creating a singleton bean and expose it in the application context. This will allow us to inject the low level details into our high level policy using constructor injection. If we don’t have spring available, we revert back to the Abstract Factory pattern. This factory will be responsible for creating the right instance of the `PersonRepository` and return it so that the upper level modules can make use of it.