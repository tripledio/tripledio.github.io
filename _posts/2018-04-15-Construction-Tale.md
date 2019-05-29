---
layout: post
title: "A construction tale"
author: guido
hideLogo: false
header-img: "img/posts/constructionTale/buildings.jpg"
image: "img/logo-alt.png"
tags: architecture, software
excerpt: "In the software industry, the metaphor that is probably used the most for explaining things is the construction of buildings. A lot of our terminology relates to it. Building, architect, architecture, design, engineer. Unfortunately it is all too often that this metaphor falls short and doesn't really address the problem sufficiently."
---
# A construction tale

In the software industry, the metaphor that is probably used the most for explaining things is the construction of buildings. A lot of our terminology relates to it. Building, architect, architecture, design, engineer. Unfortunately it is all too often that this metaphor falls short and doesn't really address the problem sufficiently.

But recently there was a story in the news concerning problems with some of the newly constructed buildings in Brussels that caught my attention because it sounded very familiar. That story seemed like an excellent example of a conflict that is well known within software development. So please bare with me for yet another construction tale.

## From the news

### Throw away real estate

The article [^article] that stuck with me reported on the fact that buildings that were merely 20 years old needed to be demolished again. Apparently in Brussels there were plenty of throw-away buildings like this and a lot of them where paid by the government.

For example the buildings around the north station in Brussels. These were put down for just one purpose: office space. According to the the article this was done in order to maximise profit. They fulfilled their original purpose, but nothing more.

The needs of a city change over time and once they do, it is impossible to give them another purpose. Because they were not build with modification in mind. Their structure is so rigid that the only option left is to demolish them and build new buildings that can fulfil the new functionality. Which is a terrible waste of time, money and resources. The only ones that gain from this is are the construction firms that get to rebuild buildings on a frequent basis.

A lot of architects and European civil servants realise that this needs to change. Together they want to aim for purpose-free buildings. Buildings that can serve different purposes. Buildings that can be modified and repurposed.

The article states that it is the job of the architect to "build for eternity". To take into account that the original purpose can and will change. A good architecture makes it possible to easily perform modifications in the future. The components used in building could even be reused if they aren't glued (literally) together.

### The lesson

So what is the lessons that we can take away form this article?

The buildings that where constructed did what they were supposed to do. They were delivered as requested. Functionally they did what was requested. If they were delivered on time and within budget then most project managers would consider this a success. But although the functional requirement was fulfilled and the buildings were successfully delivered, something was left out of the equation... The investment made was not *durable*. The client, in this case the government, was satisfied initially. But felt cheated in the long run.

So it looks like there is conflict here. A conflict between what is functional required on the short term and what is durable in the long term.

## Software Industry

By now it is probably obvious where I'm going with this. Because in the software industry we are constantly fighting the same fight. The paragraph from the article that describes the role of an architect could just as well be applied to software architects, whatever those may be ;). The conflict between the functional and the durable is also one that is very well known.

### The conflict: Behaviour vs Structure

In [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1?ie=UTF8&qid=1522254141&sr=8-1&keywords=clean+architecture) [^CleanArch]
 chapter two, "A tale of two values", Uncle Bob discusses this exact conflict.

He states that every software system has two different values for the stakeholders:

   * _Behaviour_ - a.k.a. functionality

        A software system should do what it is supposed to do. That is why software engineers are hired. Make something that can do X. That is the first value of the system, it's behaviour. Unfortunately many developers think that this the entirety of their job.
   * _Structure_ - a.k.a. architecture

        Software should be easy to change, it needs to be able to grow. That is why it's structure is of great value. When software is no longer 'soft', when its structure prevents it from change, then it is not durable. Even though it may have the correct behaviour now it won't be able to adapt for the future.

These two different values often appear at odds with each other, in constant conflict. The behaviour value is more visible and as a result it gets greater priority. As was the case with the constructions in Brussels.  

### What has the greater value?

So which one has the greater value? It is typically argued that behaviour comes first. It has to work above all else. Otherwise it is useless right? But if something is well structured and easy to change, it is easily be made to work. The reverse is not true. If you get something which is badly structured, and somehow you manage to get it to work properly, it still has a very low life expectancy since it is so hard to change.

> The longer you want your software to be useful, the greater the value of a proper structure is.

So it depends on what you are building and with which goal. Also take in mind on which value people are evaluated. A project manager is typically evaluated on getting 'it' done within time and budget. Which is of course the functional requirement. The other requirements are often sacrificed because they are not visible and there is no reward for them.

### The conflict in disguise

This conflict may seem abstract but it is one that you'll encounter again and again every day in software development albeit in disguise. Allow me to list some of the arguments that I hear the most, which are basically the same conflict but rephrased.

* __a) The *'It works'* argument__

    The 'argument' that unfortunately too many developers give when they receive feedback or remarks on a delivered solution.

    > _"But it works!"_.

    Well I sure hope so. This is the minimum requirement. When something is _finished_ we expect it to work. But as Uncle Bob stated in his classic book [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) [^CleanCode]  : __"It is not enough for code to work"__.  The functional value can be obtained. But that doesn't mean that the structural value has been obtained.

* __b) The *'It's agile'* argument__

    Under the argument that one should not over-design and build too much up front, it is argued that one only builds the bare minimum. We're being agile. But that seems like a straw man argument to me. No one said that you should over design, or do work not needed. But the whole idea of being agile is that we are still able to adapt in the future. Being agile means being able to adapt. Neglecting the structure of the software prevents this. Designing software well means designing it for future change. It does not mean designing it for every eventuality.

    > The software should be open for extension

    If this is not the case, then we're not being very agile. In fact by accumulating technical debt, making each modification harder to do we're being rigid.

    So please don't use agile as an excuse for writing rigid software. Agile has enough troubles as it is.

* __c) The *'We'll fix it later'* argument__

    This one comes in many forms. Often under the pretence of temporary postponing correcting the structure the functionality gets priority. Of course we all know that later never comes. It can not be that by adding new functionality we have endangered future modifications. No one wants to cripple themselves.
    
    That is not to say that you can not consciously give one value higher priority over another. But it should be a very clear, well documented decision that the team is aware of. The structural defect should be clearly logged as technical debt and fixed a.s.a.p. _It should be the exception!_  
    
    Placing the technical debt as a separate story on the back log is not acceptable. Because it is not a story in itself. You may not separate the functional form the structural, a story is a whole. When the investors ordered the construction of the building, they expected it to last for a whole lot longer then 20 years. The initial functional value was delivered. But they got sc##d on the structural, long lasting value.
        

* __d) The *'Let's be pragmatic'* argument__

    Ach, the "P" argument... I have heard this one so many times that now whenever I hear the 'pragmatic' argument, I automatically translate it to: *"Let's just hack it together so we can make our deadline and go home."* Because so often that is exactly what was meant. It is used to imply that paying attention to the structural value is overdesign. That you don't need it yet. Under the disguise of being 'pragmatic', calm and reasonable it is implied that we shouldn't worry about it yet and focus on the functionality and deadline instead. Claiming that the functional has higher value then the structural.    
   
    
* __e) The *'Overdesign'* argument.__

    This argument comes in several forms. 
    
    * We aren't Google!
    * Too many modules.
    * Too many layers.
    * Too many classes.
    * Too complex!
    * ...
    
    
   Since there is of course something to say about overdesign, let's address it here. Obviously you should not overdesign. Of course not. You are overdesigning when you are using patterns for patterns sake, abstracting things that will never need to be abstracted in the future. So it is context dependent. Who knows what the future will bring? But the whole point of paying attention to the structure is that there *can* be a future. A future to which we can easily adapt. If we have made things overly complex, if we have overdesigned, then we have also endangered the structural value.
     
   But more classes, modules, layers does not automatically mean more complex. On the contrary, we introduce those boundaries (classes, modules, layers) to make things more simpler. By not throwing everything together in one big ball of mud we are making the software easier to change. It is not the number of classes, modules, layers,... that matters. It is their responsibilities.
     
  Often this argument is just a strawman attack. Most of the time it boils down down to the "too much work" argument.     
  

* __f) The *'Business wants it now!'* argument__

    Of course they do. We all would like to have what we want as fast as possible and as cheap as possible. But what is it that the customer want exactly? The functionality and the deadline being met. Sure. And how long to they want to use the delivered software? Is it ok if the usefulness of the delivered software comes to a grinding halt in the very near future? Making it very expensive to use and maintain? Look beyond the deadline. What are they willing to give up to make the deadline? And by 'they' I mean the paying customer who is paying for it and will be using it. Not some manager in between who will no longer be there and/or will not bare the consequences of what is delivered. Like I said before it is only natural that those managers are focused on the deadlines. That is what they are evaluated on. But it is your name in the code.
    
    Please also note that having proper structure is not that much additional work. It will even let you go faster. But it does require some thought of course.
   
* __g) The *'Too much work'* argument.__

    This argument is saddening but at least it is honest. When you drill down on the previous arguments you often end up here. Doing a proper job does require some work. Coming up with a good architecture, a good design does require some thought. Typing the code is never the bottleneck. You should be glad when you hear this 'argument'. Because it is a mindset that is finally made clear. At least then you know what is going on and how the software is being written. Other than looking at the code. 
    
    Fear the code where this mindset is present. If this sentiment rules the developers mind you will end up with software that is hard to maintain, difficult to adapt and that will need to be rewritten soon as a result of changing requirements.
       
    Unfortunately I am afraid that this mentality is all too common in the IT world. Since all too often it is only the developers that actually see the code where the actual truth lies about the structure of the code. 
    
    > That is why I fear that in most systems the design of a software system is primarily determined by the convenience of software engineers at development time. 
    
    No matter how much planning or design is done, in the end the truth lies in the code. If no attention is paid to the structure of the code *at development time* you'll end up with very expensive, unmaintainable software. No amount of documents, meetings or modelling sessions can prevent this. It is completely in the hands of the engineers that are actually writing the code.There the actual design is finally being constructed.
    
    Alas, being able to deliver value for the customers in the future has a much lower priority than moving a ticket to 'done' now. The functional value is what they are being paid for. The customer doesn't see or understand the lacking structure of the software.
    
    So in many cases it is the same story as with project managers. Software engineers are evaluated on getting the job done. Delivering functionality on time. The structure is invisible for non technical people. Nor do they care. Until the shit hits the fan. But then we can of course blame all our predecessors....
    
## Conclusion

The struggle between the function and the structure is not limited to our industry. When some things needs to change in the future then the structure needs to be able to support this. Since this is something that lies further in the future than the functionality,  it is often neglected.

> If we want to build something that lasts, we need to pay careful attention to the structure

Of course this will always be a struggle. The functional deadline from the project versus the long term survival of the product. But this is exactly our responsibility as professional software engineers. To make sure that next to the functional requirements, we also need to implement the often not outspoken quality attributes. Of which maintainability is probably the most important one.

Unfortunately I would dare to say that most people do not care about the structure of the code. The quality attributes are often subservient to some deadline someone cooked up. The problem is that software doesn't collapse immediately. It sometimes takes years before it explodes. But when it inevitably does...

**References**

[^article]: [The article on the buildings in Brussel](http://www.standaard.be/cnt/dmf20170616_02928477)
[^CleanCode]: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
[^CleanArch]: [Clean Architecture](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1?ie=UTF8&qid=1522254141&sr=8-1&keywords=clean+architecture)
