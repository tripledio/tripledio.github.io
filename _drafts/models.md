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

A model is a structure with certain properties that is created to solve a specific problem. A model serves a purpose. A relational database model structures the data in such a way that we can access and query it and perform relational operations on it. A maquette is a representation of a real building that intends to give us an idea how the real one would actually look like. Its properties are that the size are in proportion so that it can perform its function.

//Here

## Classic types of model

Some examples of models used in the software industry:

+ View Model
+ Data Model
+ Domain model
+ Command model
+ Read model

These are all different models that perform a different function and have a different responsibility. It is the first word that matters and that defines the model. 

Multiple of these models can live together in the same application. Depending on the architecture of the application.

## One model

A practice that i often encounter is the use of a single model for everything. The data model is used for the domain model, for the api model. To me this only is a viable option is the application is very, very small and lightweight. And everything can still fit in my head. If there are clearly different responsibilities, different problems to be solved, different things to be modelled i don't use the same model. I don't eat my soup with a fork.

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
