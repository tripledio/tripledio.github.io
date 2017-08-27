---
layout: post
author: kris
header-img: "img/architecture-bg.jpg"
disqus: true
---
# Application Architecture: let's sort things out

## Lego's
If you're reading this, and you're someone with a technical background chances are quite high you've build something using lego's during your lifetime. You might have just gotten new boxes. That's usually quite easy. You get the pieces in nice plastic bags and it comes with a manual. If you've ever gotten lego's from family members or friends that have already been played with, well, not so easy. You get big boxes of mixed together parts, nice creations destroyed to their back to their basics parts without any resemblance or clue what they ever were.

This is where you can let your imagination run wild and start building whatever you like, no manual, just scrounging through the parts and picking anything that suits you.

![Random built item](/img/lego-simple.jpg)

## Professional lego building
Now imagine if you got into this on a professional level. And you have these huge boxes of unsorted lego's. And they come to you with the question of building something quite large.

![Lego cathedral](/img/cathedral.jpg)

If you would need to start building a lego cathedral you'd probably want to spent a bit more time investing in structure. Structure in the way you work. Consistency in how you build certain parts. Making sure you don't loose time finding where pieces are. And making sure that when you need more help you can easily explain to people how they can help you and what they should do.

This is the moment where things should start to become professional, stepping it up a notch, rather than just going along and clicking some randomly selected blocks together.

![Sorted lego's](/img/sorted-lego.jpg)

## Clean architecture
The point of this article is not to explain what clean architecture is. Although currently it is definitly my preferred way of organizing my applications. There are already some great articles:

* Uncle Bob's https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html
* Lieven Doclo's https://insaneprogramming.be/article/2017/02/14/thoughts-on-clean-architecture/

Although Uncle Bob provides 2 drawings, his "circles in circles" is a bit confusing, so I tried combining his famous 2 images (cacircles & caparts) into a single overview.


![Clean architecture](/img/clean-architecture.png)

### A practical Java example

TODO java callstack, rest -> app-api -> app-impl(ResolveTask) -> repo(get) -> domain(task.resolve()) -> repo(save)

TODO color coded version with arrow to drawing

### Why?
##### Safety
You usually don't work alone on your cathedral, you have senior developers, you have junior developers. CA is about having some boxes where they can put their parts. Not going into the whole title's in IT discussions but more experienced developers might have more problems putting their bricks into boxes. They've been throwing them into one big box, or 3 big boxes stacked on top of each other their whole carreer. Why should they change? Well often it's unprofessional and they don't mind sitting in a mess because they are used to it. But then when the complaints start rolling in about the code they are often already working on something new.

Make it easy for everbody, also on yourself, even if you have plenty of experience. I just use one simple rule: "if can auto complete a class, you can use it." In order to ensure that, some structure will be necessary. I will not allow you to use jpa annotations on your rest controller. I will not allow you to call a repository from a controller. I will not allow you to call the postgres jdbc driver from the file upload servlet.

I would never be able to do that manually, thankfully there's usually a dependency management tool like maven, gradle, nuget etc around to enforce those rules. The only thing to be mindfull of is changes to the dependency management files.

##### Mapping
Something I hear all the time is: "We couldn't bear all that mapping". Mapping? What mapping? This argument usually comes from people that in their more traditional architecture just use their domain, ... everywhere. They use it to store data in the database, they use it in the services to store results after some mutations. Then they return it from their application services to the frontend where they will bind booleans to checkboxes and strings to textboxes. The entity is just used everywhere, or when someone on the team tried to explain them about the advantages of contracts for the outside world they went looking for a framework like dozer (something that is usually used to do a 1:1 mapping). That probably made the problem worse.

In clean architecture we don't map. We determine what a use case needs in their request in order to execute the use case.
In many cases this will be a lot shorter than sending a whole entity back and forth. For a create it should pretty much boil down to the same thing. It's the CRUD example. But unless you're a DBA there is a whole world out there that's not CRUD. In my example is `ResolveTask` just a crud operation that sets a different status? And is it exactly the same as `CancelTask` or `DeleteTask`? If it's a task system that tracks time the `ResolveTaskRequest` might have a timeSpent field. The `CancelTaskRequest` will have a field `reason` why you are cancelling the task. `DeleteTask` might have a four eye principle business rule behind it so that a supervisor will need to confirm it's actual deletion. 

CRUD people usually try their best to hide all those things behind all the state. And then writing a lot of code in their anemic services to deduce whatever situation we might be in. 

That leads to messes and ugly pieces of code, and in the end, even while trying to hide the mapping fact in their architecture, a lot more fields and a lot more internals will have gone back and forth. Exposing everything to the same impact from simple changes and ugly messes because ever piece of code will be modifying and changing as they like. Other symptoms of this are copying back data from the database to the entity before you save the updated version or `OpenSessionInViewFilters` because your entities made it to the frontend ... partially. If you do this, your lego's are a mess.