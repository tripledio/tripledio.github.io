---
layout: post
title: "About models..."
author: guido
header-img: "img/old_train_model.jpg"
---
# About models...

In IT the software industry we have several overused words. Words that are used so often, that without proper context, they can cause a lot of confusion. An obvious example of this is the term *service*. A valid term, more so when compared to the word *manager*, *controller* or *util* (Shivers). The word service actually has meaning. But the context must provided. Is it an application service? domain service? micro service? Or a "I contain all the logic that really should be in my objects" service (a.k.a. anemic domain service). These are all different things.

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

All of these different models that perform a different function and have a different responsibility. It is the first word that matters and that defines the purpose of the model.  One of the root cause of model ambiguity is not asking the question: *"A model of what?"* Without knowing that we are comparing apples and oranges.

## Models and layers

Depending on the architecture of an application multiple of these models can live together in the same application. In a layered architecture a type of model is typically associated with a certain layer.

![Models in a layered architecture](/img/models-layers.png)

These different types of models also relate to each other. A domain model can have different view models, a data model can be used by different domain models, a command model typically has different read models. Again it depends on which problem the model is trying to solve.

# The problem(s)

Ok, that's all nothing new.  Where is the misuse? And what exactly is my problem with that misuse?

## a) Data model as domain model

This one is simple. People call it their domain model but what they really mean is their data model represented in code. Preferably with an ORM to perform the translation. **But a domain model is not a data model.** when people talk about their domain model, i have obtained teh reflex of probing what kind of model they are actually talking about. *Because a data model does not become a domain model because we start calling it that.*

Models serve different purposes. When the data model is called domain model, then where did the domain model go? To often into an anemic MVC architecture.

## b) One model to rule them all

### The pattern

A practice that is often encountered *inside* an application is the use of a single model for *everything*. The data model is used for the domain model, for the api model... Regardless of the problem that needs to solved. One model for everything.

To me this anti-pattern is one of the main drives behind failing, late over budget software projects.

### When is a single model viable ?

For me the single model approach is only a viable approach in very rare cases. When the application is very, very small and lightweight. So small that everything can still fit in my head. When it has a complexity that is so low, a functionality so simple and straightforward that anyone can grasp it immediately. Which means that the application is so simple that it is very easy to change without running the risk of introducing any unwanted side effects.

If the application is a very simple crud application or just a simple data transformation, then different models have no use. There is just one problem that is being solved (transforming some data) or they are extremely simple (basic CRUD with very few logic).

As a rule of thumb: 

> If you are wondering if you can get away with just one model, **you can't.**  

Because it should not be debatable that an extra model is not worth the effort. *In case of any doubt, there is no doubt* 


### Using multiple models

When the above conditions are *not* met, when there *are* clearly different responsibilities, different problems to be solved, different things to be modelled then i don't use the same model. Then i use a different model for each different layer.



By using different models inside an application i aim to 

+ decouple the different solution for the different problems
+ create a clear and simple solution for each problem
+ minimize the impact of potential problems

### The argument against multiple models

The main argument people give against using multiple models is that they need to provide mapping from one model to another. *Well boo F#&ng hoo.* 

Mapping in itself is a very simple straightforward process in which your IDE does most of the work for you. Granted it is a boring task. But that is because it is so simple. The cost in development time of doing some boring mapping pales in comparison with the time spent on looking for bugs, staring at an entangled big ball of mud where all the different responsibilities are intertwined.

### Why are multiple models useful?

When i clean the dishwasher it is easier to just throw everything in the same closet and be done with it. But i know it pays of to put the cups *together* near the coffee machine, to put the boards *together* close to the table, put the casseroles *together* near the cooking furniture and place the cutlery *together* in the drawer.
 
 They all serve a different purpose. I group the dishes with a shared function *together* and place them where they logically belong and are the most convenient when i need to cook diner. And yes that means that i need to do a little bit of work each time i empty the dishwasher.
 
 When i'm writing software the same principle applies. I group together in a model what belongs together in order of the problem the model needs to solve. Separating the different models by their responsibilities. That way i am keeping things nice and tidy at the cost of some simple boring work. 
 
 However the time and quality *gained* by keeping things clean and separated is enormous. The investment of the simple boring work pays off dividends in stability, maintainability, speed of development (oh yes), extensibility. 
 
 While those who threw their dishes onto one big pile are still looking for their frying pan, i'm already serving my steak to my guests.
 
 Unfortunately only developers look into code. Because if our mothers would, i'm willing to bet most code bases would look a whole lot better.


## c) The M in MVC

### Model, View, Controller. But which model?

One of the most widely 'known' patterns MVC (model view controller) also contains my word of the day. Model. And here the meaning of the model in MVC isn't clear either. Which model do me mean? In fact the whole meaning of MVC is unfortunately not always clear.

> "The widest quoted pattern in UI development is Model View Controller (MVC) - it's also one of the most misquoted." - *Martin fowler*  [^1]

For me a lot of the confusion lies in which model people put in their MVC. Data model? View model? Domain model? And when they say domain model, do they *really* mean their domain model? 

### The meaning of MVC 

The meaning of MVC has changed over the years in such that MVC moved from a micro to a macro pattern. [^2]

> //TODO reference to meaning according to UB
 
Most software developers that i encounter or interview have a different view on what MVC is then the one UB professes. I think the common view i encounter was caused for a great deal by the rise of a lot MVC frameworks. These frameworks where/are very useful to get a simple application up and running very fast. But they also helped in transforming  

In my view the common changed meaning of MVC is a result of the combination of

+ the MVC frameworks 
+ the classical three tier architecture
+ the mistaken identity of the data model for domain model
+ the single model 'pattern' 

I think this combination gave rise to MVC as an architecture pattern. Which often goes hand in hand with the [anemic domain model](/25/08/2016/The-anemic-domain-model/) pattern [^3].

### The MVC architecture 

Everyone developer knows the architecture with three classic layers: 
 
  Layer|Responsibility|
  -----|--------------|
  UI Layer|  All visualization to the user|
  Business Layer|  All business logic|
  Data Layer|The persisted data |
 
This architecture has the same goal as the MVC pattern. Namely *separation of concerns*. And since both of them consist out of three elements it is just a small step to think they are the same thing.
 
 Layer|MVC |Component|Responsibility|
 -----|----|----------|--------------|
 UI Layer| V | The view| All visualization|
 Business Layer| C | The controller| All business logic|
 Data Layer| M | The model|The persisted data |
 
When MVC is seen as an implementation of the classic three tier architecture then the model represents the data, the controllers contain the business logic, and all view related responsibilities belong in the view. This then often gives rise to the *anemic domain model* [^3].
  
My theory is that we often end up with anemic domain models because in a 'MVC architecture' the model from MVC is equated with the data model. Although its often called the domain model. With the business logic placed outside of the model this often results in huge fat controllers or in a lot of *services*. Containing all the logic. There are some who call that a service oriented architecture. But lets focus on the ambiguity of one overloaded term at a time.
 
### The proper home of MVC

For me, the M in MVC should **NOT** be the domain model.

> //TODO image placing MVC in frontend infrastructure layer. Controller invoking use cases (or application services) and working on data structures it retrieved. The Model**S** that MVC used is then a presentation model residing on the front end and completly decoupled from the domain model or the data model.

# Conclusion

> Feedback appreciated

**Footnotes**

[^1]: _[GUI architectures by Martin Fowler](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController)_

[^2]: _[MVC delivery mechanism by Sandro Mancuso](https://codurance.com/2017/09/20/mvc-delievery-mechanism-dm/)_

[^3]: _[The anemic domain model by me](/25/08/2016/The-anemic-domain-model/)_