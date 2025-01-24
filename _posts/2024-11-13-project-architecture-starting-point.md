---
layout: post
title: "Project architecture starting point"
author: harm
tags: [design,architecture]
description: An overview of a sample architecture we propose as a starting point for domain-heavy projects
excerpt: Lorem ipsum enazo
hideLogo: true
logoAnimation: false
header-img: "img/posts/starting-at-triple-d/header.jpg"
image: "img/logo-alt.png"
---
In this blog post we'll give an overview of what we at Triple D consider a decent 'default' architecture for domain-heavy projects.  
For this we combine several best practices.  
It is in no way a one-size-fits-all solution, as that just does not exist.  
Vaugh Vernon puts it nicely in his book "Implementing Domain Driven Design":
> The real demands for specific software qualities should drive the use of architectural styles and patterns.  
> The ones chosen must be proven to meet or exceed required qualities.  
> We must be able to justify every architectural influence in use, or we eliminate it from our system.

The choices made here a driven by the following principles:
- We like to test
- We like fast feedback, from both tests and our users
- We like a clear domain
- We want to easily integrate our system with others# Overview

Aanpak: gaandeweg opbouwen

1. Hexagonal Architecture
2. DDD (+ vocabulary?)
3. Event-Driven
4. CQRS / BFF
5. Scenario Testing
6. Snapshots

Voor elk hoofdstuk:
* Uitleg concept
* Execution
* + en -
* What's missing = introductie naar een volgende sectie

# Hexagonal Architecture aka Ports and Adapters

Let's say we have a typical application with a REST api at the 'front' and a database at the 'back'.
A big risk when developing this application without using any underlying architecture (or even a 'classical' 3-layered architecture) is that application logic will mix with REST or database logic. This would then require testing to happen through the UI and/or require a running database, making the testing a slow and cumbersome process.

If however, we ensure that the application logic is in no way mixed with UI or REST logic, we can write much faster-running tests! We just need other ways to provide input to and capture output from the application.
This is where hexagonal architecture comes in to play. [Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/) explains it succinctly as follows:
> Allow an application to equally be driven by users, programs, automated test or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases.
https://herbertograca.com/wp-content/uploads/2018/11/080-explicit-architecture-svg.png

By defining 'ports' we can configure how we interact with the application. During regular operation, we configure it to use REST and database adapters so that users can interact with it. Batch scripts could use command-line based adapters. Automated tests can call the ports directly, ensuring the fastest possible run time.

## Execution

The architecture defines the major elements: the application, and the ports. The application itself consists of the API it provides, the usecases that implement that API, and the domain which is manipulated by the usecases.
The ports are split up into ingoing and outgoing ports.

It makes sense that we reflect this hierarchy in our project structure. An example directory structure looks like this:

![Folder structure](/img/posts/project-architecture/module-folder-structure.png){:margin=10px}

The folder structure is however only half the story. If we implement this folder structure using packages, it becomes very easy for code in one of the adapters to call code in the application, effectively leaking domain logic to the outside and denying any of the possible advantages this architecture provides.

Instead, we propose to use Gradle modules instead of packages, and set dependencies between them to capture the restrictions on what can be called from where.
The image below shows these dependencies: an arrow from one module to another means "i can call you".

![Module dependencies](/img/posts/project-architecture/module-dependencies.png){:margin=10px}

## Pros and cons

The advantage of encoding the architecture into Gradle modules is that there is no way a developer could write compileable code that creates dependencies which are not allowed by the dependency graph above.  
The IDE would not even autocomplete statements, so a developer is protected by the dependencies enforced by the build system.  
The architecture allows us to follow all our principles.

One downside of adding ports as a 'gate' between the application and the technologies interacting with it, is that mapping between types defined by the gate and types inside the application will be required. However, this code is easy to write and the advantages gained by it vastly outweigh the costs of not having the flexibility of chosing the adapters for your ports.

## What's missing

Hexagonal architecture shows us how to structure our code on a high level, putting the most important part, our application/business code at the very core. It does however not give any guidance on how to structure what's inside.  
There's usecase classes calling domain classes and that's about it.
In the next section we look at Domain Driven Design to guide us.

# Tactical Domain Driven Design


DDD encourages developers to focus on building a **shared understanding** of the **problem domain** with **domain experts**. It encompasses both strategic and tactical design. Strategic designs focuses on the relationships between different parts of the domain. We are currently focussing on the design of a single part of that domain, which is part of tactical design.

Tactical DDD brings concepts such as aggregates, entities, value objects,,... to the table, which will be the building blocks of our application.

## Execution
Through creative collaboration with the domain experts, we get a clear view of what problem he application will solve. We then implement our solution for that problem using the building blocks that strategical DDD provides us: entities, aggregates, domain services,...

Domain events are also an import part of DDD, and it is one we heavily rely on. These events enable communication and decoupling between different parts of the system.

## Pros and cons
The biggest advantage of using applying DDD, be it strategic or tactical, is that it helps in building a solution that directly represents the real-world domain. There is no translation required between what the domain experts and developers as they share a common vocabulary.  
Specific to tactical DDD are the following advantages:
- Business rules are encapsulated in entities, value objects and aggregates, so we reduce the risk of duplicating logic
- Aggregates provide a clear transactional boundary, reducing the risk of an inconstant state of the domain.
- By breaking up a long business flow into steps linked together by events, they become more straightforward to understand, and we can focus on one step at a time when testing, implementing, or even debugging.

DDD however is not an easy technique to grasp, and as the problem domain evolves, your initial design might not suffice anymore. Keeping the problem and solution domain in line with each other requires frequent evaluation of the design, and could require a thorough refactoring if they drift too far apart.

## What's missing
DDD describes the use of domain events as a way to decouple different parts of the system. There is however much more to it when we actually get to implementing them. We can do it in a very straightforward way, with a synchronous listener and an application services that manages which event leads to which action.
When we want to guarantees of an event being processed, or we want to process large amount of events, we'll need a more thorough approach. This is what Event Driven Architecture brings to the table.

# Event-Driven Architecture
Having an Event-Driven Architecture (EDA) means that a large part of the application is driven by the processing of events. This ties neatly in to the events prevalent in DDD. A policy matches events with commands that trigger use cases in the application.

Whilst event processing could be done simply be having domain events get published synchronously to a series of event listeners, you'd quickly run into issues when the number of events rises, or when handling an event fails.
Synchronous handling puts a hard limit on the rate at which your application can process events, so an asynchronous approach is quickly required.
When handling an event fails halfway, you need a mechanism to ensure that they can be retried. And when an event fails to get its processing acknowledged, you need a way to handle events being processed twice.

## Execution
We want scalable and reliable processing of our events.
Scalable implies asynchronous, which means that multiple business processes are handled at the same time, events might interweave, they might arrive out-of-order,... There is plenty that can go wrong.
Firstly, we need some guarantees on the delivery of the events. There are three options: at-most-once, at-least-once and exactly-once. The first isn't an option in an application context, and is more suited for things like real-time analytics.
Exactly-once is quite complex, and should only be used when it's a strict requirement.
At-least-once will cover most use-cases, especially when we built the event handling in such a way that processing events is an idempotent operation.

To ensure at-least-once delivery we recall that in DDD an aggregate defines a transactional boundary. If we include pushing new events into an outbox into that transaction than we can ensure that either an operation succeeds and an event is saved, or it fails and no event was saved. This is the basis for at-least-once.

Outbox messages are put on a queue and get picked up by the consuming side. An application policy decides which use cases have to be called and a new transaction starts.
In this part of the flow three things can go wrong: the publishing on the queue, the consuming of the event or the processing and acknowledging of the event. In the first case an event will only be taken out of the outbox when it was published successfully. In the latter cases the event will not get acknowledged and its processing will be retried, possibly resulting in it being processed multiple times.

If a message fails to be processed enough times, it gets sent to a dead-letter-queue (DLQ) where it can be inspected by the developers. If the failure to process was due to a bug, they can fix the bug and sent the message back to the original queue.

## Pros and cons

+ Scalable processing of events
+ Ensured delivery of events

There is some technological complexity in implementing an event-driven architecture, but once the 'plumbing' is done we can mostly ignore it and focus on solving application problems. This again shows the power of a ports and adapters architecture, where the messaging is a concern strictly outside of the application.

## What's missing

By having an optimized way of handling events, we can start listening to our own application events in order to build easy-to-query models. By separating command and query handling we can improve front-end complexity and scale back-end and front-end separatly. This is called CQRS.
## Pros and cons
Consideration: event module or just part of :application:domain?

+ application logic comprised of smaller, easier to grasp reactions to events. Makes it easier to know where change needs to happen
+ Scales nicely
+ Loose coupling
- harder to debug: long flows ( TODO naam opzoeken (saga?)) can be hard to follow.
- asynchronous processing can be hard to reason about

## What's missing

Not per se what is missing, but an opportunity: by having events we can build projections of our state in the most useful way for our FE queries.  
We decouple this projection from our regular flow -> CQRS.

# CQRS / BFF
Command Query Responsibility Segregation (CQRS in short) is a pattern that separates the handling of commands (which modify data) from queries (which read data).

## Execution
By listening to domain events that indicate an aggregate was created or updated, we can populate the system that will be serving the queries with data.

// toevoegen afbeelding met sequence diagram

## Pros and cons

The separation between command and query handling allows us to use different models for each, and even decouple them up to the infrastructure level.
The former allows the frontend to have its models match exactly with how it wants to display the information, reducing the need for mapping and/or combining data.
The latter allows the part of the application that serves queries to scale independently from the part that processes commands. When heavy load occurs on one side, the other is unaffected.
The technology used to serve the queries can also help the developers by providing built-in filtering, paging,...

The downsides are that there's more code required exactly because there's now a different code path for querying logic, and possibly for getting data to the query-serving system.
When using a separate system for serving queries, it will also require separate infrastructure which will also have to be maintained.