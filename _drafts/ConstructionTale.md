---
layout: post
title: "A construction tale"
author: guido
header-img: "img/posts/constructionTale/buildings.jpg"
tags: architecture, software
excerpt: A construction tale. A tale of two values of software. Functionality and Architecture. 
---
# Intro

In the software industry, the metaphor that is probably most used for explaining things is the construction of buildings. A lot of our terminology also relates to it. Building, architect, architecture, design, engineer. Unfortunately it is also all too often that the metaphor falls short and doesn't really address the problem sufficiently. But recently there was an story in the news concerning problems with some of the recent constructed buildings in Brussel, it stayed with me. It sounded very familiar. Because that real life story seemed to me to be an excellent example of one of the well known problems that plagues software development. So bare with me for yet another construction tale.

# A real life construction tale

## Throw away real estate

The article [^article] that stuck with me reported on the fact that buildings that were merely 20 years old needed to be demolished again. Apparently in Brussels there were plenty of throw-away buildings. A lot of then payed for by the government. 

For example the buildings around north station. These were put down for just one purpose: office space. According to the the article this was done in order to maximize profit. It fulfills it original purpose. But nothing more.

The needs of a city change overtime. Once they do and the buildings no longer fulfill their original purpose it is impossible to give them another purpose. Because they were not build with modification in mind. Their structure is so rigid that the only option left is to demolish them and build new buildings that can fulfill the new functionality. Which is a terrible waste of time, money and resources. The only ones that gain from this is are the construction firms that get to rebuild buildings on a frequent base.

A lot of architects and European civil servants realize that this needs to change. Together they want to aim for purpose-free buildings. Buildings that can serve different purposes. Buildings that can be modified and repurposed. 

The article remarks that it is the job of the architect to "build for eternity". To take into account that the original purpose can and will change. A good architecture makes it possible to easily perform modifications in the future. The components used in building could even possible be reused if they aren't glued (literally) together.

## The lesson 

What is the lessons that we can take away form that news story? Let's break it down.
 
The buildings that where constructed did what they were supposed to do. They were delivered as as requested. Functional they did what was requested. If the were delivered on time and within budget. Most project managers would consider this a success and a job well done. But although the functional requirement was fulfilled and the buildings were successfully delivered, something was left out of the equation... The investment made was not *durable*. 

There is a conflict between what is functional required on the short term and what is durable in the long term.
 
# Software Industry
 
By now it is probably obvious where I'm going with this. Because in the software industry we are constantly fighting the same fight. The paragraph from the article that describes the role of an architect could just as well apply to a software architect, whatever that may be ;). The conflict between the functional and the durable is also one that is very well known. 

## Behavior vs Structure

In [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1?ie=UTF8&qid=1522254141&sr=8-1&keywords=clean+architecture) [^CleanArch]
 chapter two, "A tale of two values", Uncle Bob discusses this exact conflict. 
 
 He states that every software system has two different values for the stakeholders:
 * behavior - a.k.a. functionality
 * structure - a.k.a. architecture
 
### Behavior

A software system should do what it is supposed to do. That is why software engineers are hired. Make something that can do X. That is the first value of the system, it's behavior. Unfortunately many developers think that this the entirety of their job.
 
### Structure

Software should be easy to change, it needs to be able to grow. That is why it's structure is of great value. When software is no longer 'soft', if its structure prevents it from change, then it is not durable. Even though it may have the correct behavior now. 

### Greater Value 

So which one has the greater value? It is typically argued that behavior comes first. It has to work above all else. Otherwise it is useless right? But if something is wel structured and easy to change, it is easy to modify it so that it does work. The reverse is not true. If you get something that is badly structured, and somehow managed to get it to work properly, it has a very low life expectancy since it is so hard to chance. 

> The longer you want your software to be useful, the greater the value of a proper structure is.

## The conflict in disguise

In our day to day software development life the conflict between the two software values often comes in disguise. Allow me to list some of the ones i hear the most.

## It works

The 'argument' that unfortunately too many developers give when they receive feedback or remarks on a delivered solution. 

> _"But it works!"_. 

Well i sure hope so. This is the minimum requirement. When something is _finished_ we expect it to work. 

But as Uncle Bob stated in his classic book [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) [^CleanCode]  : __"it is not enough for code to work"__.  

The functional value can be obtained. But that doesn't mean that the structural value has been obtained.

 
## It's agile

Under the argument that one should not overdesign and build too much up front, it is argued that one only builds the bare minimum. We're being agile. But that seems like a straw man argument to me.

No one said that you should over design, or do work not needed. But the whole idea of being agile is that we are still able to adapt in the future. Being agile means being able to adapt. Neglecting the structure of the software prevents this. Design software well means designing for future change. It does not mean design for every eventuality. 

> The software should be open for extension

If his is not the case, then we're not being very agile. In fact by accumulating technical debt, making each modification harder to do we're being rigid. 

So please don't use agile as an excuse for writing rigid software. Agile has enough troubles as it is.

# Conclusion

The struggle between the function and the structure is not limited to our industry. When somethings needs to change in the future then the structure needs to be able to support this. Since this is something that lies further in the future than the functional it is often neglected. 

> If we want to build something that lasts, we need to pay careful attention to the structure

Of course this will always be a struggle. The functional deadline from the project versus the long term survival of the product. But this is exactly our responsibility as professional software engineers. To make sure that next to the functional requirements, we also need to implement the often not outspoken quality attributes. Of which maintainability is probably the most important one. 

**References**

[^article]: [The article](http://www.standaard.be/cnt/dmf20170616_02928477)
[^CleanCode]: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
[^CleanArch]: [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1?ie=UTF8&qid=1522254141&sr=8-1&keywords=clean+architecture)



