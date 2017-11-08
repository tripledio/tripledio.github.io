---
layout: post
title: "Model anti-patterns"
author: guido
header-img: "img/old_train_model.jpg"
---
# Model anti-patterns

In the software industry we have a couple of overused words. Words that are used so often, that without proper context, they can cause a lot of confusion. An obvious example of this is the term *service*. A valid term, more so when compared to the word *manager*, *controller* or *util* (shivers..). The word service has no meaning without the proper context. Is it an application service? domain service? micro service? Or a "I contain all the logic that really should be in my objects" service (a.k.a. anemic domain service). These are all different things. So the word service on its own is usually just noise.

In this post I would like to address another one of these overused words: **Models** Because the meaning of the word model is also very context dependent. Too often one is wrongly used and thus wrongly implemented. Which has real consequences. It is not just about the semantics.

## What's in a name?

Before we get to the meat, let's start by a definition

<pre><code>
 A model is a <b>representation</b> of something that was created to serve a certain <b>purpose</b>.
</code></pre>

For example:

+ **A relational database model** structures the data in such a way that we can access and query it and perform relational operations on it. The data was modelled in a certain way for a given purpose. 

+ **A maquette** is a representation of a real building that intends to give us an idea how the real one would actually look like. Its properties are that the width and height are in proportion so that humans can use it to reason about it, make comparisons. That is its function.

+ **A world map** is typical example of a model. The world can be modelled in a variety of different ways. Depending on what function needs to fulfilled.

From the above definition it also follows that 
+ for solving a *single* problem, there are many *different models possible*  
+ several *different models* can work *together*, each solving a different problem


## Classic types of software models

Some examples of models used in the software industry:

+ View Model
+ Data Model
+ Domain model
+ Command model
+ Read model

These are all different models performing a different function with a different responsibility. It is the first word that matters and that defines the purpose of the model.  I suspect that one of the root cause of model ambiguity is simply not asking ourselves the question: *"A model of what?"* If we can't answer that question we are comparing apples to oranges.

## Models and layers

Inside an application we'll typically have different layers. There is a relation between the type of layer and the type of model. Let's take for example the very high level three tier architecture that every developer knows.


![Classic layers](/img/classic-layers.png){:height="50%" width="50%":class="img-responsive"}

Depending on the architecture of an application, multiple models can live together **in the same application.** In a layered architecture a model is typically associated with a certain layer. Because they have the same responsibility and are tackling the same problem. A layer is nothing more than a separation of code where a certain sub problem is being solved. 

![Models in a layered architecture](/img/classic-models-layers.png){:height="100%" width="100%":class="img-responsive"}

These different types of models also relate to each other. A domain model can be used by different view models, a data model can be used by different domain models, a command model typically has different read models. It depends on which problem the model is trying to solve. Although we want to avoid that de models intermingle and depend directly with each other.  

( An application can exist out of multiple separate deployable parts but let's keep it simple for now and assume that one application equals one deployable.)  

# The anti-patterns 

*a.k.a. things I wish people would stop doing*

## a) Data model as domain model

This one is simple. People call it their domain model but what they really mean is their data model represented in code. Preferably with an ORM to perform the translation. **But a domain model is not a data model.** When people talk about their domain model, I have obtained the reflex of probing what kind of model they are actually talking about. *Because a data model does not become a domain model because we start calling it that.* How the persisted data is modelled should not dictate how the domain is modelled. It is perfectly possible to have multiple domain models build upon the same data model. By which in *no way i am advocating sharing databases between applications.*

Models serve different purposes. When the data model is called domain model, then where did the domain model go? Is it even there? If it is not then where did the business logic go? This often gives rise to another anti-pattern: the  [anemic domain model](/25/08/2016/The-anemic-domain-model/) pattern. [^anemic]

In practice I usually see the whole application dissolving into an **anemic MVC architecture** [^mvc] where the data model has become an anemic domain model, the business logic got spread out and duplicated all over the code base in all kinds of 'services'. When the data and the logic are decoupled, every 'service' has access to the unencapsulated data and can modify it. This makes it very easy to execute business logic in the wrong sequence or bypass certain logic completely. *Resulting in a very fragile, buggy application.*

Unfortunately the above is the state that i encounter most of the Object oriented codebases to be in. In all sorts of different companies. In fact this ant-pattern is so prevalent in our industry that the most of the developers i encounter have come to think of it as the normal. That it is the normal way that you do it. Because this is the only thing they've encountered in the real world... 

<pre><code>Most developers have never <i>seen</i> an <b>actual</b> domain model.</code></pre>

I fear that a lot of software engineers have never seen an actual domain model. Or experienced the benefits from it. Which makes this such a hard anti-pattern to fight. But lets hope that i'm wrong...

## b) One model to rule them all

### The pattern

A practice that is often encountered *inside* an application is the use of a single model for *everything*. The data model is used for the domain model, for the api model... Regardless of the problem that needs to solved. One model for everything. 

Obviously this goes hand in hand with the previous anti-pattern. If we have just one model, it is usually the data model. Because we all know the data(base) is king.

To me this anti-pattern is one of the main drivers behind failing, late, over-budget software projects. The larger the software project, the larger the impact. The amount of time and money I've seen wasted by this pattern is infuriating.

### When is a single model viable ?

For me the single model approach is only a viable approach in very, very rare cases. When the application is very, very small and lightweight. When it has a complexity that is so low, a functionality so simple and straightforward that anyone can grasp it immediately. An application so simple that it is very easy to change without running the risk of introducing any unwanted side effects.

If the application is a very simple crud application or just a simple data transformation, then you often hear the argument that different models have no use. If there is just one problem that is being solved (transforming some data) or the problems solved are extremely simple (basic CRUD with very few logic) this may be the case. However we all know that software is supposed to change and grow. Little by little the code base grows and its complexity increases. It's obvious that the architecture should change and evolve as well.  

But i've rarely have seen that happen. usually the reasoning goes as follows:

+ We are only just adding this one little extra feature/extension. 
+ It is not worthwhile to split the application up into different models, to bring some structure into the application just now. 
+ It is just a small change, a small story. 
+ We can't justify the extra work for this feature. 

Basically we are accumulating technical debt. A couple of iterations of the above reasoning and the technical debt has accumulated so much that no one wants to make the changes needed. No one wants to split up the model. Because we don't want to be the one who let's their ticket/feature go out of scope. Ignoring the fact that we are violating the boyscout rule, that it is our job and *professional responsibility* to make sure that the software can still accept new features in the future.

So when you are debating with yourself or with your team members whether introducing a separation of models is worth the effort, remember: 

> *In case of any doubt, there is no doubt* - Robert de Niro [^r] 

Bring in the structure early. It is the most important attribute of software, but never deemed urgent. If the structure/architecture comes last, it comes to late. So as a simple rule of thumb: 

<pre><code>
 If you are wondering if you can get away with just one model, <b>you can't</b>. 
</code></pre>


### Using multiple models

When the above conditions are *not* met, when there *are* clearly different responsibilities, different problems to be solved, different things to be modelled then I don't use the same model. Then I use a different model for each different layer.

By using different models inside an application I aim to 

+ decouple the different solution for the different problems
+ create a clear and simple solution for each problem
+ minimize the impact of potential problems

### The argument against multiple models

The main argument people give against using multiple models is that they need to provide mapping from one model to another. *Well boo F#&ng hoo.* 

Mapping in itself is a very simple straightforward process in which your IDE does most of the work for you. Granted it is a boring task. But that is because it is so simple. The cost in development time of doing some boring mapping pales in comparison with the time spent on looking for bugs, staring at an entangled big ball of mud where all the different responsibilities are intertwined.

> Do not be afraid to create your own mappers. ... The advantage of writing our own mappers is that we do not need to couple our APIs or databases to anything. Changes are localised and easy to change. On top of that, we can easily test-drive our mappers and move API tests to the unit level instead of doing it at Acceptance level. - Sandro Mancuso [^4]

Another argument against mapping I often hear is that mapping results in a lot more bugs because things get mapped wrong. isn't that why you have tests? And if it is just a wrong mapping it is very easy to find and fix. Because everything is kept simple.

When you have multiple models with different responsibilities they very rarely map 1:1 on each other. If it is just copying state from structure A to an identical structure B, something is wrong.  

### Why are multiple models useful?

When I empty the dishwasher it is easier to just throw everything in the same closet and be done with it. But I know it pays of to put the cups *together* near the coffee machine, to put the boards *together* close to the table, put the casseroles *together* near the cooking furniture and place the cutlery *together* in the drawer.
 
 They all serve a different purpose. I group the dishes with a shared function *together* and place them where they logically belong and are the most convenient when I need to cook diner. And yes that means that I need to do a little bit of work each time I empty the dishwasher.
 
 When I'm writing software the same principle applies. I group together in a model what belongs together in order of the problem the model needs to solve. Separating the different models by their responsibilities. That way I am keeping things nice and tidy at the cost of some simple boring work. 
 
 However the time and quality *gained* by keeping things clean and separated is enormous. The investment of the simple boring work pays off dividends in stability, maintainability, speed of development (oh yes), extensibility. 
 
 While those who threw their dishes onto one big pile are still looking for their frying pan, we are already having dinner.
 
 In the software industry we can get away with sloppiness that we wouldn't be able to get away with in real life. Because unfortunately only developers look into code. If our mothers or spouses could see what we are doing in there, I'm willing to bet most code bases would look a whole lot better.


# Conclusion

+ Beware of the ambiguous meaning of model. Be clear on which model you are working on and what its responsibilities are.
+ A domain model is so much more then the data. It is about behaviour. Don't use a data model for domain model.
+ Do not try to solve all the different problems with just one model. Yes, i know it is a bit more work at first. So is doing the dishes.

**Footnotes**

[^r]: _[Robert De Niro in Ronin](http://www.imdb.com/title/tt0122690/quotes/qt0248369)_
[^1]: _[GUI architectures by Martin Fowler](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController)_
[^2]: _[Model View Controller in "Patterns of enterprise application" by Martin Fowler](https://www.martinfowler.com/eaaCatalog/modelViewController.html)_
[^3]: _[The clean architecture by Robert C. Martin](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)_
[^4]: _[MVC delivery mechanism by Sandro Mancuso](https://codurance.com/2017/09/20/mvc-delievery-mechanism-dm/)_
[^anemic]: _[The anemic domain model by me](/25/08/2016/The-anemic-domain-model/)_
[^mvc]: _[The MVC architecture](TODO)_

