---
-- layout: post
title: "The restaurant domain"
author: guido
header-img: "img/about-bg.jpg"
tags: java, software, DDD
excerpt: This is just an example of a draft post. This is the excerpt. Don't place layout or markup here> Don't make it too long.
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

The rest of the evening continues smoothly. Alic and Bob enjoy their dinner. The dishes come with an appropriate time between the dishes, leaving room for pleasant conversation, without them needing to wait too long. The waiter makes sure that the correct wines are served and that their glasses consistenly refilled while they are enjoying the matching dish.

## Modelling the restaurant

So now that we have our restaurant story as back ground, it would be interesting to map out how a restaurant should operate to support the above scenario. Because there are more actors in the restaurant than the ones Alice and Bob came in contact with. The inner workings of the kitchen, how the bill was composed, to name a few. On top of that, Alice and Bob where not the only customers. So we need scenario's that illustrate the fact that multiple customers can be served simultaneously, independent of each other. 


## Event flow

In the real world, to discover how the restaurants works in practice, we would hold a big picture event storming with all the people working in the restaurant present. This would show all the different flow that are happening, their timing and their inner dependencies.  

But for this blog post I'm afraid you will have to do with my simplistic event flow for a restaurant.

![Restaurant event overview](/img/posts/events-restaurant/restaurantEvents.png)

### Event Storming building blocks

The core building block of event storming are of course the domain events. 

Domain events have the advantage that they steer discussions away from technical issues, that they focus on what has happened, without spending to much detail on how it happened. When the discussions occur around domain events then database and UI discussion are pushed to the background. Which is a very good thing. We don't want to let debates go depth first from the start because we could waste a lot of time on something that may later seem to be an unimportant detail. We want to conquer before we divide.

Apart from domain events there are also other DDD building blocks that take the stage in Event Storming. All the building blocks used are: 
+ commands
+ events
+ projections
+ read models
+ policies
+ systems
+ external System
 
These components relate to each other as explained in Alberto's Universal picture.

![Picture that explains everything](/img/posts/events-restaurant/components-overview.png)


All these building blocks **can** be implemented technically, which means that we are also immediately modelling out a potential software solution. Even if we haven't referred to any technologies yet,  the modelled solution can map one on one with the implemented one. Which is exactly what we want. The domain should drive the design of our solution, **not** the technologies we  just happen to fancy at the moment. Or god forbid, the database...  

## Modelling out a restaurant

To demonstrate the use of our building blocks we will apply them to a restaurant by modelling out how a restaurant works. We will model out the flow between the different actors in the restaurant: the customer, the waiter, the cook... This with the goal of demonstrating two things: 
+ the usefulness of the Event Storming building blocks 
+ the lack of need for technical discussions 



## Core concepts

Avoid being specific, not UML, discovery
 
+ Event : “something relevant that happens in our business, written on an orange sticky note with the verb at past tense. ” A verb in the past thense. Not specified what caused them, not gtting lost in implementation details. “Choosing Domain Events as a starting points help us to remove a blind spot”
                                                                                                                                                                                                                                  
+ Command : 
+ projection
+ Read model
+ Policy
+ System
+ External System






***
**References**

[^key]: _[DisplayValue](http://www.url.be)_
