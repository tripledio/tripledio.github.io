---
layout: post
title: "The MVC-architecture"
author: guido
hideLogo: true
header-img: "img/mvc-books.png"
excerpt: A discussion about MVC, the model from MVC and the MVC - architecture.
---
# The MVC Architecture

## The M in MVC

In the [model-anti-patterns](/07/11/2017/model-anti-patterns/)  [^map] post I ranted a bit about the ambiguous use of the term model in the software industry. In this post i would like to  address another famous model, namely the model from MVC.

## Model, View, Controller... But which model?

Related to my previous post the meaning of the model in MVC isn't very clear either. Which model do we mean? In fact the whole meaning of MVC is, unfortunately, not always so clear.

> The widest quoted pattern in UI development is Model View Controller (MVC) - it's also one of the most misquoted. - *Martin fowler*  [^1]

If you google MVC you'll find a lot of different explanations. Going back to an appeal to authority does not always clarify things.

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

## The meaning of MVC

The meaning of MVC has changed over the years in such that MVC moved from a micro to a macro pattern. [^sandro]  

Most software developers that I encounter or interview have a different view on what MVC is then the original pattern, which is the view Robert Martin professes. The current most common view was probably caused for a great deal by the rise of a lot MVC frameworks. These frameworks were/are very useful to get a simple application up and running very fast. But they also helped in transforming the meaning of MVC by labelling frameworks MVC when they don't really match the original definition.

So in my view the common changed meaning of MVC is a result of the combination of

+ the MVC frameworks
+ the classical three tier architecture
+ the mistaken identity of the data model for domain model
+ the single model 'pattern'
+ not differentiating between an application controller, Model View Controller, Page Controller

I think this combination gave rise to MVC as an architecture pattern. Which often goes hand in hand with the [anemic domain model](/25/08/2016/The-anemic-domain-model/) pattern [^anemic].

## Layered MVC

In my earlier post [^map] I talked about the classic three tier architecture.

![Classic layers](/img/classic-layers.png)


  Layer|Responsibility|
  -----|--------------|
  UI Layer|  All visualization to the user|
  Business Layer|  All business logic|
  Data Layer|The persisted data |

This generic architecture has the same goal as the MVC pattern, namely *separation of concerns*. Since both of them consist out of three elements, it is just a small step to think that they are related. Which, in my eyes, gives rise to a much encountered view that I call the MVC - architecture.

![MVC-architecture](/img/mvc-architecture.png)


 Layer|MVC |Component|Responsibility|
 -----|----|----------|--------------|
 UI Layer| V | The view| All visualization|
 Business Layer| C | The controller| All business logic|
 Data Layer| M | The model|The persisted data |

When MVC is seen as an implementation of the classic three tier architecture then the model represents the data, the controllers contain the business logic, and all view related responsibilities belong in the view. This then often gives rise to the *anemic domain model* [^anemic].

This is clearly **not** what any of the definitions of MVC refer to. The controllers are **not** where the business logic belongs.

>  An application controller is a very different beast then an MVC controller - Martin Fowler [^2]

( So I could probably make a comparable argument for the controller as I'm making for the model. But let's stay focused.)

My theory is that we often end up with anemic domain models because in a 'MVC architecture' the model from MVC is equated with the data model, although it's called the domain model. When the business logic is placed outside of the model this often results in huge fat controllers, or a lot of *services*, that contain all the logic.


## Take MVC home

So now what? Is it possible to reconcile Martin Fowler and Uncle Bob statements to a consistent whole? What does the M in MVC stand for? And where does the MVC pattern belong?

To answer this I go back to the original responsibility of MVC:

<pre><code>MVC is a design pattern that splits the <i>user interface</i> interaction into three distinct roles.</code></pre>

It is a pattern that is all about the user interface. So it belongs in the user interface layer. Yes, even the model...

Take note I am disagreeing here with Sandro Mancuso [^sandro] as well. At least on the domain model part.

> When it comes to MVC frameworks, they should be restricted to the View and Controller layers, never the Model. - Sandro Mancuso [^sandro]

I do **not** use my domain model as the model for MVC. The model for the view layer will be different from my domain model. The domain model is completely independent from any UI implementation details. MVC for me is an implementation detail of the UI.

## Home sweet home

So what does this look like? Let's put some more detail in our simple three tier architecture, moving into a hexagonal architecture.

![MVC is a pattern for the front end](/img/mvc-frontend.png)

Here the UI layer has changed into a front end infrastructure layer, Supporting more than just the UI. The UI is an adapter like the rest api is. They both use the application use cases api. They both are just clients.

The usage of an use case api, or application services, hides the implementation detail of the use cases. The use cases could be implemented using a domain model. Or by a transaction script. For the users of the application this is hidden. At the same time the use case api has of course no dependency on the adapters. **The infrastructure details do not dictate the use cases!** Any UI, rest or other front end infrastructure concerns do not trickle through into the domain. For more detail on this see the hexagonal architecture.

Also if the controllers access the domain model directly, then where did the use cases go? Into the controllers?


When the UI can access the domain model and uses it directly for its model UI concerns will seep into the domain model. Because now the domain model serves multiple purposes.

The domain model we need to solve use cases is different then the view model we need to provide the UI with appropriate data to build views for the user. **These are different concerns.**  You can have an MVC without a domain model. Or domain model without a UI. Or a domain model with an UI that does not use MVC.

<pre><code>Different problems => Different solutions</code></pre>

By decoupling the UI from the domain model, the MVC pattern can not access the domain model. Because, for me, the Model in MVC should **NOT** be the domain model.

While the controllers will indirectly invoke the use cases api from the application, they shouldn't have a direct dependency on the domain model. They can and will have their own models to work with. They will use the response data structures that the use cases provide them. So I share Uncle Bob [^3] view on this. It fits perfectly within the hexagonal architecture. It is just a clean separation of responsibilities. Which is exactly the same thing that MVC tries to achieve.

Avoid using the domain model for generating your views directly. While this is of course technically possible it often leads to
+ UI concerns in the domain model
+ one model to rule them all
+ an anemic domain model
+ an entangled, unstructured mess

So my advice is to keep your domain model separated from any MVC patterns, or frameworks, you may have.

## Conclusion

In conclusion, for me:

+ The MVC patterns belong in the front end infrastructure
+ It should not depend on the domain model directly.
+ The model from MVC is its own model created for the specifc views.
+ Do not connect your presentation directly to the domain model. The domain model should not concern itself with presentation details.

And

### Don't use MVC as an excuse for an anemic domain model!

*(Please don't)*

---
_**References**_

[^1]: _[GUI architectures by Martin Fowler](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController)_
[^2]: _[Model View Controller in "Patterns of enterprise application" by Martin Fowler](https://www.martinfowler.com/eaaCatalog/modelViewController.html)_
[^3]: _[The clean architecture by Robert C. Martin](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)_
[^sandro]: _[MVC delivery mechanism by Sandro Mancuso](https://codurance.com/2017/09/20/mvc-delievery-mechanism-dm/)_
[^anemic]: _[The anemic domain model by me](/25/08/2016/The-anemic-domain-model/)_
[^map]: _[Model anti patterns](/07/11/2017/model-anti-patterns/)_
