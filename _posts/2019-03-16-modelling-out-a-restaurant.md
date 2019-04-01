---
layout: post
title: "Modelling out a restaurant"
author: guido
header-img: "img/posts/events-restaurant/kenny-luo-640784-unsplash.jpg"
tags: java, software, DDD
excerpt: How to model out a restaurant with event storming components?
---
# Modelling out a restaurant

I am a big fan of [Event Storming](https://www.eventstorming.com)[^eventstorming] because of its ability to create clarity where before there is often a lot of confusion. Creatin clarity is something that the technique does really well, despite its chaotic 'storming' nature. Because telling a story, on a timeline, is really how people's brain work. Which is probably why we  have user *stories* and not "user *click actions and resulting data flows*". 

Most people that use event storming use it for gathering the "Big Picture". I see it used much less for modelling out solutions to concrete problems. That's why, in this blogpost, I will try to demonstrate the power and usefulness of Event Storming for modelling out solutions. By using some simple building blocks, event storming allows us to model out complex systems rapidly. Without the need for very strict standardization. No BPMN knowledge required.
 
By explaining the Event Storming component building blocks and illustrating their use, I hope to demonstrate that knowing them, their meaning and their inner relationship, can really help you tackling complex problems. Without the need to get lost early on into technical discussions. **One does not need to be a software engineer to model things.**
 
My ambition with this blog post is to demonstrate two things: 
+ the power of the Event Storming building blocks 
+ early, in depth technical discussions aren't needed 

## The problem case

As a problem case, I thought that it would be interesting to model out the workings of a restaurant. Because it is something we all can easily relate to. Also, it avoids technology! We can illustrate and reason about it without the need for any technology getting dragged into it. On more than one occasion I've seen technical details dragging a design discussion down into an endless technical debate where people are already fuzzing about the technical *details* before the process is properly understood, modelled out. So I intentionally try to avoid this here.   

### Welcome to our restaurant 

So let's start with a little background story that illustrates the problems we are trying to solve.

#### The wedding anniversary

Alice and Bob want to celebrate their 10 year of marriage with nice dinner at the three star restaurant "Triple D". Bob makes a phone call to "Triple D" for a reservation within two weeks for two persons. The **receptionist** notes down the reservation. Three days before the date of the dinner, the **receptionist** of "Triple D" calls Alice to verify if their reservation is still on. Alice conforms that it is.

At the evening of their wedding anniversary, Alice and Bob arrive by taxi at "Triple D". They enter the restaurant and are immediately greeted by the **receptionist**. They give their names and the **receptionist** looks them up in her reservation book. She finds their entry and their appointed table. She then escorts them to their table and takes their jackets. Once they are seated a **waiter** slowly walks to their table to welcome them. The **waiter** presents them with the menu. 

Alice and Bob start with ordering an aperitif immediately. The waiter leaves to get their drinks and to give them time to make their choice. Alice and Bob look at te menu and discuss what they will have.

The waiter brings the aperitif to their table and serves it to them. They still aren't ready to order so the waiter leaves again.

After a couple of minutes Alice and Bob have made their choice out of several dishes. They both will go for matching wines since none of them needs to drive. The **waiter** sees that they have made their choice and comes over to take their order. 

After a couple of minutes the waiter brings them some appetizers while they enjoy their aperitif and while they wait for the first dish to be served.

The rest of the evening continues smoothly. Alic and Bob enjoy their dinner. The dishes come with an appropriate time between the dishes, leaving room for pleasant conversation, without them needing to wait too long. The waiter makes sure that the correct wines are served and that their glasses consistently refilled while they are enjoying the matching dish.


#### The problem scope

With this little reference story as back ground, we are going to map out how a restaurant should operate in order to support the above scenario. There are many different actors in the restaurant. More than the ones Alice and Bob came in contact with. The inner workings of the kitchen, how the bill was composed, to name a few. We also need to remember that Alice and Bob where hopefully not the only customers inside the restaurants. So we need sa solution that scales, in which we can serve multiple customers, independent of each other. 


### The restaurant event flow

In the real world, to discover how the restaurants really works, we would hold a big picture event storming to with all the people working in the restaurant would be present. The Waiters, Cooks, Dishwashers, Receptionists,... This would show all the different flows that are happening, their timing, inner dependencies and potential bottlenecks. Providing everyone with a global overview that most likely no one really has. All of this simply by using *the power of business events!* 

For this blog post, big picture event storming is not the focus. But I would still like to use it to get a global understanding of our restaurant,we are conquering before we are dividing.  At the same time I like to demonstrate the power of *business events*. Because it is something that bears repeating. 

So below you will find my own simplistic event flow for a restaurant, based on my limited under standing and imagination. It is not complete or perfect, having intentionally over simplified many inner workings. But it tells a coherent story and we can already see different 'flows' appearing. 

**The reservation event flow**

Since Triple D is very famous (ahem...), people need to make reservations.

![Reservation events](/img/posts/events-restaurant/reservationEvents.png)

**Customer enters restaurant event flow**

From our restaurant perspective, the business starts once people enter our restaurant.

![Customer entry events](/img/posts/events-restaurant/customerEntryEvents.png)

**Dining Ordering event flow**

Once the waiters sees that a table is ready to order, they take their orders and passes them on to the kitchen. The kitchen prepares the different dishes and makes sure that they are sent out to the table together.

![Dining Order events](/img/posts/events-restaurant/diningOrderEvents.png)

**Courses served event flow**

The customers enjoy all their served dishes. Once a dish is done, the kitchen can serve/prepare the next ones. When they are done, a table requests the bill, pays and leaves the restaurant. After which the tables need to be cleaned for the next customers.  

![Courses served events](/img/posts/events-restaurant/coursesServedEvents.png)


## Event Storming modelling components

The core building block of event storming are of course the **domain** events. 

Domain events have the advantage that they steer discussions away from technical issues, that they focus on what has happened, without spending to much detail on how it happened. When the discussions occur around domain events then database and UI discussion are pushed to the background. Which is a very good thing. We don't want to let debates go depth first from the start because we could waste a lot of time on something that may later seem to be an unimportant detail. We want to conquer before we divide.

Apart from domain events there are also other DDD building blocks that can take the stage in an Event Storming session. All the building blocks used are: 

|Component|Description|Contains|
|----|----|---|
| users | Actual persons interacting with 'systems'|Free will|
| commands | An order that was given, things someone wants to happen. It doesn't do anything on its own.|Data| 
| events | A business event that has happened.|Data| 
| projections | A data transformation that builds a read model from events.|Data Transformation logic| 
| read models | Information that is presented to a user to make a decision|Data|
| policies | Global business rules. "When X happens then trigger Y" | Orchestration logic|
| systems | Something under our control that executes a command|Actionable logic|
| external System | Something not under our control that executes commands.|Actionable logic|
| UI | The typical portal from the real world to the software systems. The way by which the user can read read models and trigger commands in a software world. |Interface to data and actions|
 
All these components relate to each other as explained in Alberto's Universal picture.[^book]

![Picture that explains everything](/img/posts/events-restaurant/components-overview.png)

These building blocks **can** be implemented technically. This means that when we are modelling out a solution through Event Storming process flow, we are also immediately modelling out different potential software solution. Even if we haven't referred or included any technologies yet, the modelled solution can map one on one with the implemented one. Which is exactly what we want. The domain should drive the design of our solution, **not** the technologies. Or god forbid, the database...  In a future blog post we will talk about the relation between the modelling components and a hexagonal architecture. But for now, we will remain technology agnostic. 

## Modelling our restaurant processes

Armed with the knowledge of our building blocks, we will now model out the flow between the different actors in the restaurant. The customer, the waiter, the cook... I will give a verbose explanation with the first processes. BUt I hope that after a while the model speaks for itself.


The legend used in the following process illustrations matches:

![EventStormComponents](/img/posts/events-restaurant/eventStormComponents.png)

Since we will remain technology agnostic, there will be no UI. But the other components can be found in the real world. In our restaurant example they can be implemented as follows 

+ a read model will be data written down on paper
+ a projection will be the act of written summarized data down
+ the events will be things that happened in the real world
+ the commands are the initiation of an action 
+ policies are the rules that were agreed upon verbally up front 

With our building blocks at our disposal we can model out the flow of our restaurant.

### The processes 

In the big event flow there are many different processes at work. For clarity we'll distill them one by one, each time with less explanation. The process diagram should make it clear.

#### The reservation processes

Let's start with process that kicks off the customer experience, the reservation process. From the customer perspective this is very straightforward. They make a call to a restaurant, some external thing outside of their control, and they try to get a reservation for X persons on a given date Tx. The outcome of this is that the reservation was possible or not. This is the flow from the customers perspective. For the customers, the restaurant is an external system. The details of it do not concern them.

From the restaurants perspective however, these details concern us of course very much. The phone needs to be answered by the receptionist. A role taken by whomever is at the desk, full filling that role in the moment that the customer calls. The receptionist will see if there is a table available for X persons on date Tx and respond accordingly. If the reservation is made then the receptionist will add it the bookings overview for Tx. The bookings overview is a projection of all the bookings made for a given day. It gives a quick comprehensible overview.

Each day the receptionist need to confirm the reservations made for z days in the future. That is one of the **restaurants policies**. It is applied to make sure that they use the maximum of their restaurant capacity. Everyone who serves as the receptionist on a given day knows that this is one of their tasks. So the policy triggers them to confirm the reservations with the customers. When a reservation is cancelled they update the Bookings for that day. 

![Reservation flow](/img/posts/events-restaurant/processFlowReservation.png)

Each day, when the day begins, the receptionist need to assign the final tables to the customers. Since they aren't likely to change anymore this can now safely be done. This is again one of the restaurants policies: "When the day starts, then the receptionist must assign tables". The definitive assignments read model is updated. This will allow the receptionist to be able to quickly assign the customers to their assigned tables.

The receptionist policy thus contains the following rules:

+ When the date is [Tx - z] then receptionist must confirm the reservations for Tx.
+ When the date is [Tx] then receptionist must assign the definitive tables for to the booked customers for Tx.


![Receptionist Proces](/img/posts/events-restaurant/processFlowTableAssignment.png)

#### The dinner processes

There are of course more processes operational in the complete working of a restaurant. But let us jump right into the flows concerning the dinner. Because this is the core of our restaurant, where we make our money.

It starts of course with the customers entering our restaurant. They will be received by the receptionist who will look up their assigned tables and escorted them to their places.
 
![Receptionist Proces](/img/posts/events-restaurant/processFlowReceptionist.png)

One they are seated, the waiter that is assigned to their table is triggered to bring them their menus, let them order their drinks and dishes. The waiter places the table drink order at the bar and continuous serving other tables. When the drinks are ready the waiter is triggered 

![Waiter drinks Proces](/img/posts/events-restaurant/processFlowWaiterDrinks.png)

When the waiter serves the drinks, that is typically also the time that the dinner order is taken. The waiter will place the order for the table in the kitchen. From the waiters perspective, the kitchen is an external system. They place their order ins, and the dishes will be coming out in the correct order, grouped by table. But the kitchen of course also has a highly complex flow 

![Waiter food Proces](/img/posts/events-restaurant/processFlowWaiterFood.png)


## On Policies

Policies, and process managers as their implementations, are something that are often not modelled out explicitly. But notice how lightweight those policies are. The complexity on how to perform the complex actions, like cooking, resides in the systems. These actiond do not need to change when we modify the logic present int policies. This allows use to easily change the behavior of an entire system.

For instance, when we modify the policy rule from

*When the customer is done eating, then the customer must pay*

to 

*When the customer has ordered, then the customer must pay*

we radically have changed the way our restaurant functions. We went from a restaurant for dinning, where one pays at the end. To a fast dinning restaurant where you pay up front, allowing for faster change of customers.

## Conclusion

something clever

***
**References**

[^eventstorming]: _[Event Storming](https://www.eventstorming.com)_ 
[^book]: _[Introducing Event Storming](https://leanpub.com/introducing_eventstorming)_ 
