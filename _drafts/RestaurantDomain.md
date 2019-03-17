---
layout: post
title: "Modelling a restaurant"
author: guido
header-img: "img/posts/events-restaurant/kenny-luo-640784-unsplash.jpg"
tags: java, software, DDD
excerpt: How to model out a restaurant with event storming components?
---
# Modelling the restaurant

In this blogpost I will try to demonstrate the power and usefulness of [Event Storming](https://www.eventstorming.com) for modelling. I am a big fan of [Event Storming](https://www.eventstorming.com) because of its ability to create clarity where there is confusion. Something that it does really well, despite its chaotic 'storming' nature. Telling a story on a timeline is really how people's brain work. Hence user stories and not "user click actions and resulting data flows". By using some simple, not to strict defined, building blocks, event storming allows us to model out complex systems rapidly. 
 
 That's why I wil focus on the Event Storming building blocks and hope to demonstrate that knowing them, their meaning and their inner relationship, can really help you tackling problems without the need to get lost early on into technical discussions. **One does not need to be a software engineer to model things.**

## Our restaurant story

Alice and Bob want to celebrate their 10 year of marriage with nice dinner at the three star restaurant "Triple D". Bob makes a phone call to "Triple D" for a reservation within two weeks for two persons. The **receptionist** notes down the reservation. Three days before the date of the dinner, the **receptionist** of "Triple D" calls Alice to verify if their reservation is still on. Alice conforms that it is.

At the evening of their wedding anniversary, Alice and Bob arrive by taxi at "Triple D". They enter the restaurant and are immediately greeted by the **receptionist**. They give their names and the **receptionist** looks them up in her reservation book. She finds their entry and their appointed table. She then escorts them to their table and takes their jackets. Once they are seated a **waiter** slowly walks to their table to welcome them. The **waiter** presents them with the menu. 

Alice and Bob start with ordering an aperitif immediately. The waiter leaves to get their drinks and to give them time to make their choice. Alice and Bob look at te menu and discuss what they will have.

The waiter brings the aperitif to their table and serves it to them. They still aren't ready to order so the waiter leaves again.

After a couple of minutes Alice and Bob have made their choice out of several dishes. They both will go for matching wines since none of them needs to drive. The **waiter** sees that they have made their choice and comes over to take their order. 

After a couple of minutes the waiter brings them some appetizers while they enjoy their aperitif and while they wait for the first dish to be served.

The rest of the evening continues smoothly. Alic and Bob enjoy their dinner. The dishes come with an appropriate time between the dishes, leaving room for pleasant conversation, without them needing to wait too long. The waiter makes sure that the correct wines are served and that their glasses consistently refilled while they are enjoying the matching dish.

## Modelling the restaurant

With this little reference story as back ground, it would be interesting to map out how a restaurant should operate to support the above scenario. Because there are more actors in the restaurant than the ones Alice and Bob came in contact with. The inner workings of the kitchen, how the bill was composed, to name a few. On top of that, Alice and Bob where not the only customers. So we need scenario's that illustrate the fact that multiple customers can be served simultaneously, independent of each other. 


## Event flow

In the real world, to discover how the restaurants works in practice, we would hold a big picture event storming with all the people working in the restaurant present. The Waiters, Cooks, Dishwashers, Receptionists,... anyone working in the restaurant. This would show all the different flow that are happening, their timing and their inner dependencies.  It would provide everyone with a global overview that no one probably has. And could identify potential bottlenecks, constraints in the flow.

But for this blog post I'm afraid you will have to do with my simplistic event flow for a restaurant, based on my limited understanding and imagination.

![Restaurant event overview](/img/posts/events-restaurant/restaurantEvents.png)

### Event Storming building blocks

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
 
All these components relate to each other as explained in Alberto's Universal picture.

![Picture that explains everything](/img/posts/events-restaurant/components-overview.png)

These building blocks **can** be implemented technically. This means that when we are modelling out a solution through Event Storming process flow, we are also immediately modelling out different potential software solution. Even if we haven't referred or included any technologies yet, the modelled solution can map one on one with the implemented one. Which is exactly what we want. The domain should drive the design of our solution, **not** the technologies. Or god forbid, the database...  In a future blog post we will talk about the relation between the modelling components and a hexagonal architecture. But for now, we will remain technology agnostic. 

## Modelling out a restaurant

To demonstrate the use of our building blocks we will apply them to a restaurant. We will model out the flow between the different actors in the restaurant: the customer, the waiter, the cook... with the goal of demonstrating two things: 
+ the usefulness of the Event Storming building blocks 
+ the lack of need for early in depth technical discussions 

### Our modelling components in the real world

The legend used in the following process illustrations matches .

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

Notice how lightweight policies are. The behavior of the entire systems can easily be changed by modifying the rules form it. The complexity on how to perform those actions resides in the systems.

+ When the date is [Tx - z] then receptionist must confirm the reservations for Tx.
+ When the date is [Tx] then receptionist must assign the definitive tables for to the booked customers for Tx.

***
**References**

[^key]: _[DisplayValue](http://www.url.be)_
