---
layout: post
title: "About models..."
author: guido
header-img: "img/old_train_model.jpg"
---
# About models...

In IT the software industry we have several overused words. Words that are used so often, that without proper context, they can cause a lot of confusion. An obvious example of this is the term *service*. A valid term, more so when compared to the word *manager*, *controller* or *util* (Shivers). The word service has no meaning without the proper context. Is it an application service? domain service? micro service? Or a "I contain all the logic that really should be in my objects" service (a.k.a. anemic domain service). These are all different things. So the word service on its own is usually just noise.

In this post I would like to address another one of these overused words: **Models** Because the meaning of the word model is also very context dependent. Too often one is wrongly used and thus wrongly implemented. Which has real consequences. It is not just about the semantics.

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

Inside an application we typically will have different layers. There is a relation between the type of layer and the type of models. Lets take for example the very high level three tier architecture that every developer knows.


![Classic layers](/img/classic-layers.png)

 
  Layer|Responsibility|
  -----|--------------|
  UI Layer|  All visualization to the user|
  Business Layer|  All business logic|
  Data Layer|The persisted data |
  
 Depending on the architecture of an application, multiple models can live together in the same application. In a layered architecture a type of model is typically associated with a certain layer. Because they have the same responsibility and are tackling the same problem. A layer is nothing more then a separation of code where a certain sub problem is being solved. 

![Models in a layered architecture](/img/classic-models-layers.png)

These different types of models also relate to each other. A domain model can be used by different view models, a data model can be used by different domain models, a command model typically has different read models. Again it depends on which problem the model is trying to solve. Although we want to avoid that de models intermingle and depend directly with each other.  

( An application can exist out of multiple separate deployable parts but lets keep it simple for know and assume that one application equals one deployable.)  

# The anti-patterns 

*a.k.a. things i wish people would stop doing*

## a) Data model as domain model

This one is simple. People call it their domain model but what they really mean is their data model represented in code. Preferably with an ORM to perform the translation. **But a domain model is not a data model.** when people talk about their domain model, I have obtained the reflex of probing what kind of model they are actually talking about. *Because a data model does not become a domain model because we start calling it that.*

Models serve different purposes. When the data model is called domain model, then where did the domain model go? Is it even there? In practice I usually see it dissolving into an anemic MVC architecture.

## b) One model to rule them all

### The pattern

A practice that is often encountered *inside* an application is the use of a single model for *everything*. The data model is used for the domain model, for the api model... Regardless of the problem that needs to solved. One model for everything. 

Obviously this goes hand in hand with the previous anti-pattern. If we have just one model, it is usualy the data model. Because we all know the data(base) is king.

To me this anti-pattern is one of the main drivers behind failing, late, over-budget software projects. The larger the software project, the larger the impact. The amount of time and money i've seen wasted by this pattern is infuriating.

### When is a single model viable ?

For me the single model approach is only a viable approach in very rare cases. When the application is very, very small and lightweight. So small that everything can still fit in my head. When it has a complexity that is so low, a functionality so simple and straightforward that anyone can grasp it immediately. Which means that the application is so simple that it is very easy to change without running the risk of introducing any unwanted side effects.

If the application is a very simple crud application or just a simple data transformation, then different models have no use. There is just one problem that is being solved (transforming some data) or they are extremely simple (basic CRUD with very few logic).

As a rule of thumb: 

```markdown
 If you are wondering if you can get away with just one model, **you can't.**  
```
Because it should not be debatable that an extra model is not worth the effort.

> *In case of any doubt, there is no doubt* - Robert de Niro [^r] 



### Using multiple models

When the above conditions are *not* met, when there *are* clearly different responsibilities, different problems to be solved, different things to be modelled then I don't use the same model. Then I use a different model for each different layer.

By using different models inside an application I aim to 

+ decouple the different solution for the different problems
+ create a clear and simple solution for each problem
+ minimize the impact of potential problems

### The argument against multiple models

The main argument people give against using multiple models is that they need to provide mapping from one model to another. *Well boo F#&ng hoo.* 

Mapping in itself is a very simple straightforward process in which your IDE does most of the work for you. Granted it is a boring task. But that is because it is so simple. The cost in development time of doing some boring mapping pales in comparison with the time spent on looking for bugs, staring at an entangled big ball of mud where all the different responsibilities are intertwined.

Another argument against mapping i often hear is that mapping results in a lot more bugs because things get mapped wrong. ins't that why you have tests? And if it is just a wrong mapping it is very easy to find and fix. Because everything is kept simple.

When you have multiple modles with different responsibilities they very rarely map 1:1 on each other. If it is just copying state from structure A to an identical structure B, something is wrong.  

### Why are multiple models useful?

When I clean the dishwasher it is easier to just throw everything in the same closet and be done with it. But I know it pays of to put the cups *together* near the coffee machine, to put the boards *together* close to the table, put the casseroles *together* near the cooking furniture and place the cutlery *together* in the drawer.
 
 They all serve a different purpose. I group the dishes with a shared function *together* and place them where they logically belong and are the most convenient when I need to cook diner. And yes that means that I need to do a little bit of work each time I empty the dishwasher.
 
 When i'm writing software the same principle applies. I group together in a model what belongs together in order of the problem the model needs to solve. Separating the different models by their responsibilities. That way I am keeping things nice and tidy at the cost of some simple boring work. 
 
 However the time and quality *gained* by keeping things clean and separated is enormous. The investment of the simple boring work pays off dividends in stability, maintainability, speed of development (oh yes), extensibility. 
 
 While those who threw their dishes onto one big pile are still looking for their frying pan, i'm already serving my steak to my guests.
 
 Unfortunately only developers look into code. Because if our mothers would, i'm willing to bet most code bases would look a whole lot better.


## c) The M in MVC

### Model, View, Controller. But which model?

One of the most widely 'known' patterns MVC (model view controller) also contains my word of the day. Model. And here the meaning of the model in MVC isn't clear either. Which model do me mean? In fact the whole meaning of MVC is unfortunately not always clear.

> The widest quoted pattern in UI development is Model View Controller (MVC) - it's also one of the most misquoted. - *Martin fowler*  [^1]

If you google MVC you'll find a lot of explanations. ( Most of which i don't agree with. ) Going back to an appeal to authority does not always clarify things. 

> MVC splits *user interface* interaction into three distinct roles.
> 
> + the model is an object that *represents* some information about the domain. In its pure form the model is an object within a domain model
> + the view represents the display of the model. It is only about display information.
> + the controller takes user input, manipulates the domain model, updates the view
>
> MVC is about separating presentation from the domain model. - *Martin Fowler* [^2]

Martin clearly aims to separate the model from presentation logic. But according to his description, the model *is* the domain model.

One outspoken voice on where the MVC patterns belongs is Uncle Bob. Bringing the relation between models and layers into the mix he places the MVC pattern clearly in the UI layer. The model for him is just a bunch of data structures that the use case, or application services, from the application exposes.

> It is this layer (the UI), that will wholly contain the MVC architecture of a GUI. The Presenters, Views, and Controllers all belong in here. **The models are likely just data structures** that are passed from the controllers to the use cases, and then back from the use cases to the presenters and views. - *Robert C. Martin* [^3]

I included the above quotes to illustrate the ambiguity between models even in a pattern so well known as MVC. My question again is this: when we say model, what model are we talking about? What does the M in MVC stand for? Data model? View model? Domain model? And when people say domain model, do they *really* mean their domain model?  Or an anemic representation of one?
 
### The meaning of MVC 

The meaning of MVC has changed over the years in such that MVC moved from a micro to a macro pattern. [^4]  
 
Most software developers that I encounter or interview have a different view on what MVC is then the original one and the one Robert Martin professes. I think the most common view was caused for a great deal by the rise of a lot MVC frameworks. These frameworks where/are very useful to get a simple application up and running very fast. But they also helped in transforming the meaning of MVC by labelling frameworks MVC when they don't really match the original definition. 

So in my view the common changed meaning of MVC is a result of the combination of

+ the MVC frameworks 
+ the classical three tier architecture
+ the mistaken identity of the data model for domain model
+ the single model 'pattern' 
+ not differentiating between an application controller, Model View Controller, Page Controller

I think this combination gave rise to MVC as an architecture pattern. Which often goes hand in hand with the [anemic domain model](/25/08/2016/The-anemic-domain-model/) pattern [^5].

### The MVC "architecture" 

Earlier we talked about the classic three tier architecture. This architecture has the same goal as the MVC pattern, namely *separation of concerns*. Since both of them consist out of three elements, it is just a small step to think they are related. Which give rise to a much encountered view, what I call the MVC - architecture.

![Classic layers](/img/mvc-architecture.png)


 Layer|MVC |Component|Responsibility|
 -----|----|----------|--------------|
 UI Layer| V | The view| All visualization|
 Business Layer| C | The controller| All business logic|
 Data Layer| M | The model|The persisted data |
 
When MVC is seen as an implementation of the classic three tier architecture then the model represents the data, the controllers contain the business logic, and all view related responsibilities belong in the view. This then often gives rise to the *anemic domain model* [^5].

This is clearly **not** what any of the definitions of MVC refer to. The controllers are **not** where the business logic belongs.

>  An application controller is a very different beast then an MVC controller - Martin Fowler [^2] 

My theory is that we often end up with anemic domain models because in a 'MVC architecture' the model from MVC is equated with the data model, although its  called the domain model. When the business logic is placed outside of the model this often results in huge fat controllers, or a lot of *services*, that contain all the logic.
 
There are some who call that a service oriented architecture. *It is not.* But lets focus on the ambiguity of one overloaded term at a time. 
 
### The proper home of MVC

So now what? Is it possible to reconcile Martin Fowler and Uncle Bob statements to a consistent whole? What does the M in MVC stand for? And where does the mvc pattern belong? 

To answer this i go back to the original responsibility of MVC: A design pattern that splits the *user interface* interaction into three distinct roles. It is a pattern all about the user interface. So it belongs in the user interface layer. Yes, even the model. Except when i'm in the very rare case of having just a single model, like we discussed before, the model for the view layer will be different and independent from any UI implementation details. MVC for me is an implementation detail of the UI. 
 
![MVC is a pattern for the front end](/img/mvc-frontend.png)

Here the UI layer has changed into a front end infrastructure layer, Supporting more than just the ui. The UI is an adapter like the rest api is. They both use the application use cases api. They both are just clients. 

The usage of an use case api, or application services, hides the implementation detail of the use cases. The use cases could be implemented using a domain model. Or by a transaction script. For the users of the application this is hidden. At the same time the use case api has of course no dependency on the adapters. **The infrastructure details do not dictate the use cases!** Any UI, rest or other front end infrastructure concerns do not trickle through into the domain. For more detail on this see the hexagonal architecture.

When the UI can access the domain model and uses it directly for its model UI concerns will seep into the domain model. Even though the view lies elsewhere. The domain model needed to solve use cases is different then the model needed to provide the UI with appropriate data to build views for the user. **These are different concerns.**  

By decoupling the UI from the domain model, the MVC pattern can not access the domain model. Because for me the Model in MVC should **NOT** be the domain model. While the controllers will indirectly invoke the use cases api from the application, they shouldn't have a direct dependency on the domain model. They can and will have their own models to work with and will use the response data structures that the use cases provide them. So i share Uncle Bob [^3] view on this. It fits perfectly within the hexagonal architecture. It is just a clean separation of responsibilities. Which is exactly the same thing that MVC tries to achieve.

Avoid using the domain model for generating your views directly. While this is technically possible  (isn't everything?) it often leads to
+ UI concerns in the domain model
+ one model to rule them all
+ an anemic domain model 
+ an entangled, unstructured mess 

# Conclusion

+ Beware of the ambiguous meaning of model. Be clear on which model you are working on and what its responsibilities are.
+ A domain model is so much more then the data. It is about behaviour. Don't use a data model for domain model.
+ Do not try to solve all the different problems with just one model. Yes, i know it is a bit more work at first. So is doing the dishes.
+ The MVC patterns belongs in the front end infrastructure. It shouldn't depend on the domain model directly. It needs its own model created for the views that are necessary.

> Feedback appreciated

**Footnotes**

[^r]: _[Robert De Niro in Ronin](http://www.imdb.com/title/tt0122690/quotes/qt0248369)_
[^1]: _[GUI architectures by Martin Fowler](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController)_
[^2]: _[Model View Controller in "Patterns of enterprise application" by Martin Fowler](https://www.martinfowler.com/eaaCatalog/modelViewController.html)_
[^3]: _[The clean architecture by Robert C. Martin](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)_
[^4]: _[MVC delivery mechanism by Sandro Mancuso](https://codurance.com/2017/09/20/mvc-delievery-mechanism-dm/)_
[^5]: _[The anemic domain model by me](/25/08/2016/The-anemic-domain-model/)_

