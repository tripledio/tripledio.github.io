---
-- layout: post
title: "The restaurant domain"
author: guido
header-img: "img/about-bg.jpg"
tags: java, software, DDD
excerpt: This is just an example of a draft post. This is the excerpt. Don't place layout or markup here> Don't make it too long.
---
# Modelling the restaurant

In this blogpost I will try to demonstrate the power and usefulness of Even Storming for modelling. I wil focus on the Event Storming building blocks and hope to demonstrate that how knowing them, their meaning and their inner relationship, can really help you tackling problems without the need to get lost early on into technical discussions. One does not need to be a software engineer to model things.

## Event Storming

I am a big fan of [Event Storming](https://www.eventstorming.com) because of its ability to create clarity where there is confusion. Something that it does really well, despite its chaotic. 'storming' nature. Telling a story on a timeline is really how people's brain work. Hence user stories and not "user click actions and resulting data flows". By using some simple, not to strict defined, building blocks, event storming allows us to model out complex systems rapidly. 


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

### Ou restaurant story

Alice and Bob want to celebrate their 10 year of marriage with nice dinner at the three star restaurant "Triple D". Bob makes a phone call to "Triple D" for a reservation within two weeks for two persons. The **receptionist** notes down the reservation. Three days before the date of the dinner, the **receptionist** of "Triple D" calls Alice to verify if their reservation is still on. Alice conforms that it is.

At the evening of their wedding anniversary, Alice and Bob arrive by taxi at "Triple D". They enter the restaurant and are immediately greeted by the **receptionist**. They give their names and the **receptionist** looks them up in her reservation book. She finds their entry and their appointed table. She then escorts them to their table and takes their jackets. Once they are seated a **waiter** slowly walks to their table to welcome them. The **waiter** presents them with the menu. 

Alice and Bob make their choice out fo several dishes. They both will go for matching wines since none of them needs to drive. The **waiter** sees that they have made their choice and comes over to take their order.

The waiter brings the aperitif.
The waiter brings some appetizers

Alic and Bob enjoy their dinner. The dishes come with an appropriate time between the dishes, leaving room for pleasant conversation, without needing to wait to long. The waiter makes sure that the correct wines are served and consistenly refilled while they are enjoying the matching dish. 

## Core concepts

Avoid being specific, not UML, discovery
 
+ Event : “something relevant that happens in our business, written on an orange sticky note with the verb at past tense. ” A verb in the past thense. Not specified what caused them, not gtting lost in implementation details. “Choosing Domain Events as a starting points help us to remove a blind spot”
                                                                                                                                                                                                                                  
+ Command : 
+ projection
+ Read model
+ Policy
+ System
+ External System



### Event flow

![Restaurant event overview](/img/posts/events-restaurant/restaurantEvents.png)


***
**References**

[^key]: _[DisplayValue](http://www.url.be)_
