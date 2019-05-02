---
layout: post
author: domenique
header-img: "img/about-bg.jpg"
title: "The dependency inversion principle"
excerpt: "how to Apply DIP correctly."

---

# Dependency inversion principle
In it’s essence, this pattern dictates the following:

>high level modules should not depend on low level details, instead, both should depend upon abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

## Depend upon abstractions
This principle states that the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.

For a statically typed language like java, depending upon abstractions means that import statements should only refer to interfaces or abstract classes. However, this should not be treated as a fixed rule, since that would be impossible. Not all classes we depend upon should be abstract interfaces. This only makes sense for classes which tend to change a lot. Think about the `String` class for example, or the `BigDecimal` class, it would not make a lot of sense to create an abstract interface for those since we can safely consider them to be stable classes. 

A `PersonRepository` will be subject to change a lot faster, and so we tend to create an abstraction for it. Creating an abstract interface for this class would guard us from any changes made to the concrete implementation of this class. Sadly, this is only part of the problem: What if the interface of this class needs to change? One way to mitigate that problem is to carefully think about the location of the interface. 

## Inversion of ownership
The dependency inversion principle is not just about dependencies, it also deals with ownership: Who owns the interface upon which the high level module depends? 

>The lower level module provides the implementation for interfaces that are declared within, and called by, the upper-level modules

This part of dependency inversion is often missed, however, this is the only way to insure that the higher level modules are unaffected by any changes to the lower level details or its transitive dependencies. 

## To discuss
* Spring IOC or Abstract Factories
* Inversion of ownership. (Where goes that interface?)
* 