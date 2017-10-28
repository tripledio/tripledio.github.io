---
layout: post
title: "About models..."
author: guido
header-img: "img/old_train_model.jpg"
---
# About models...

In IT the software industry we have several overused words. Words that are used so often, that without proper context, they can cause a lot of confusion. An obvious example of this is the term *service*. A valid term, more so when compared to the word *manager* or *util* (Shivers). The word service actually has meaning. But the context must provided. Is it an application service? domain service? micro service? Or a "I contain all the logic that really should be in my objects" service (a.k.a. anemic domain service). These are all different things.

In this post i would like to address another one of these overused words: **Models** Because the meaning of the word model is also very context dependent. Too often one is wrongly used and thus wrongly implemented. Which has real consequences. It is not just about the semantics.

## What's in a name?

A model is a representation of something that was created to serve a certain purpose. 

+ **A relational database model** structures the data in such a way that we can access and query it and perform relational operations on it. The data was modelled in a certain way for a given purpose. 

+ **A maquette** is a representation of a real building that intends to give us an idea how the real one would actually look like. Its properties are that the width and height are in proportion so that humans can use it to reason about it, make comparisons. That is it function.

+ **A world map** is typical example of a model. The world can be modelled in a variety of different ways. Depending on what function needs to fulfilled.

This may seem obvious but it is important to realize that we can have many different models for the same problem to solve. Just as we can have different models working together because there are different problems to solve.


## Classic types of model

Some examples of models used in the software industry:

+ View Model
+ Data Model
+ Domain model
+ Command model
+ Read model

All of these different models that perform a different function and have a different responsibility. It is the first word that matters and that defines the purpose of the model. 

Depending on the architecture of an application multiple of these models can live together in the same application. In a layered architecture a type of model is typically associated with a certain layer.

![Models in a layered architecture](/img/models-layers.png)

These different types of models also relate to each other. A domain model can have different view models, a data model can be used by different domain models, a command model typically has different read models. Again it depends on which problem the model is trying to solve.


## One model to rule them all
//here

A practice that often encountered *inside* an application is the use of a single model for everything. The data model is used for the domain model, for the api model. regardless of the problem that needs to solved. 

For me this is only a viable approach when the application is very, very small and lightweight. When everything can still fit in my head. When the complexity is so low, the functionality so simple and straightforward that anyone can grasp it immediately. Which means is so simple that it is very easy to change without the risk of introducing any unwanted side effects.

When the above conditions are not met, when there *are* clearly different responsibilities, different problems to be solved, different things to be modelled then i don't use the same model. Then i use a different model for each different layer.

By using different models inside an application i aim to 

+ decouple the different solution for the different problems
+ create a clear and simple solution for each problem
+ minimizing the impact of potential problems

The main argument from developers against using multiple models is that they need to provide mapping from one model to another. BooF##Hoo Mapping in itself is a very simple straightforward process in which your IDE does most of the work for you. Granted it is a boring task. But that is because it is so simple. The cost in development time of doing some boring mapping pales in comparison with the time spent on looking for bugs, staring at an entangled big ball of mud where all the different responsibilities are intertwined.

When i clean the dishwasher it is easier to just throw everything in the same closet and be done with it. But i know it pays of to put the cups together near the coffee machine, to put the boards together close to the table, put the casseroles near the cooking furniture and put the cutlery in the drawer. They all serve a different purpose. I place then where they logically belong and are the most convenient. And yes that means that i need to do a little bit of work to keep them in order.


## The M in MVC

Rant coming...



## The MVC architecture - the anemic domain model
 Logic in services (services again). The data in the 'domain model' which is nothing more then the data model that is mapped by the orm (th M from mapping one model into another)
 
 Three classic layers - UI, Logic, data => View, Controller, Model
