---
layout: post
title: "The restaurant domain"
author: guido
header-img: "img/about-bg.jpg"
tags: java, software, DDD
excerpt: This is just an example of a draft post. This is the excerpt. Don't place layout or markup here> Don't make it too long.
---
# Modelling a restaurant domain

## Event Storming building blocks

I am a fan of Event Storming because of creating clairity where there was confusion, despite its chaotic nature. Telling a story on a timeline is really how people's brain work and how we can make sense of complex systems. The core building block of event storming are  domain events. 

Domain events have the advantage that they steer discussions away from technical issues, that they focus on what has happened, without spending to much detail on how it happened. When the discussions occur around domain events then database and UI discussion are pushed to the background. Which is a very good thing.

Next to domain events there are also other DDD building blocks that take the stage in Event Storming. These are commands, projections, read models,  policies, systems and external System. These relate to each other as explained in Alberto's Universal picture.

[Picture that explains everything]

In this blogpost I will try to demonstrate the power and usefulness of these building blocks. Of how knowing them, their meaning and relationship, can really help you tackling problems without the need to get lost early on into technical discussions. But instead focus on the business problem at hand. One does not need to be a software engineer to model things.
 

All these building blocks can be implemented technically, which means that we are also immediately modelling out our software solution. Even if we haven't referred to any technologies yet,  the modelled solution can map one on one with the implemented one. Which is exactly what we want. The domain that drives te design or our solution.     

## Our restaurant

To demonstrate the use of our DDD building blocks I will apply them to a restaurant, focusing on the business flow between the different actors in the restaurant: the customer, the waiter, the cook... Using the building blocks I will model out the working of a restaurant with the goal of demonstrating two things: the usefulness of the building blocks and their independence of technology.

### Event flow

Customer Entered

Customer Seated

Menu Presented

Customer order taken

Food order Placed

Food Ready

Food Served

Food Payed

### Complete flow

|Actor|Action| Event|
|-----|------|------|
| Customer| Enter restaurent| Customer Entered |
| Receptionist| Receive Customer | Customer Seated | 
| Waiter | Give Menu | Menu Presented |
| Waiter | Take Order | Customer order taken |
| Waiter | Pass order to kitchen | Food order Placed |
| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
|Waiter| Clean Dish| Dish removed from table| 
| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
| Waiter | Bring check| Check delivered |
| Customer| pay check| Food Payed|
| Customer| leave | Customer left |

After Food order placed

|Actor|Action| Event|
|-----|------|------|
|Somelier| Suggest wines | Wines ordered |

After Dish ready

|Actor|Action| Event|
|-----|------|------|
|Somelier| Present wine | Glass filled |
|Customer| Drink wine | Glass empty |
|Waiter| Refill glass | Glasses refilled|
|Customer| Drink wine | Glass empty |
|Waiter| Refill glass | Glasses refilled|


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
