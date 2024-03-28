---
layout: post
title: "The scope of efficiency"
author: guido
tags: efficiency
description: The hidden cost of the neglecting the scope of efficiency in software development
excerpt: Efficiency does not occur in a vacuum. Make sure you are optimizing for the right scope.
hideLogo: true
spotlight:
  imgDir: /img/posts/efficiency
  imgAlt: "Triple D : Design, Develop, Deploy"
logoAnimation: false
---

# The scope off efficiency

*This post belongs to small series of posts on efficiency. The main post is [The cost of efficiency](/27/03/2024/cost-of-efficiency/).*

Whenever we are searching for more efficiency, we need to make sure that we know the scope for which we are optimizing. We need to take into account that efficiency occurs within a specific context for a given scope. Individual components, processes or "resources" may be efficient on their own, but if they do not work together well, there will be waste on the whole system. In other words, efficiency is not just about optimizing individual tasks or elements; it's about ensuring that **all** the parts of a system function harmoniously together.

> "Local optimization creates global suboptimization." - John Seddon

## Revisit our restaurant

As a simple example, let us revisit our [three-star restaurant “Triple D”](/09/04/2019/event-storming-a-restaurant/).

Our restaurants consist of several "departments" that contribute to the whole customer experience. The kitchen is responsible for preparing and cooking food where the bar is responsible for drinks and making exclusive cocktails. The waiters are responsible for taking the orders, serving food and drinks to the customers, and ensuring overall customer satisfaction. The restaurant management team oversees operations, including staffing and inventory management.

![restaurant](/img/posts/efficiency/restaurant-flow.jpg){:width="800px"}

Each department strives to be as efficient as possible. But they should be wary that their optimizations do not negatively impact the whole.

The kitchen staff could group the same dishes from different orders together and prepare them in batches. This would be more efficient. But this would also increase the wait time for the first orders of the batch.

The waiters could take all the orders, drinks, food and dessert at the same time. They could also group all the different table orders together. Aiming to minimize the amount of trips, they need to make to the bar and kitchen.

Management could try to reduce cost by limiting the cost of staff and waste of food. But this can easily result in not enough people in the departments during peak hours. Or not enough ingredients to fulfill the customer orders.

It's easy to come up with more examples where local efficiency optimization of one department can negatively impact the whole.

> "Optimizing a part of the system will not necessarily optimize the whole." - W. Edwards Deming

## System thinking

Luckily for us, there is quit a lot of study done on the efficiency within systems in relation to their individual components and their interactions with the larger system. The domain of *system thinking* focus on understanding complex systems as a whole, including how their various components interact and influence overall performance.  Systems thinking emphasizes the interconnectedness of components within a system and examines how changes to one part can affect the system as a whole.

Closely related to system thinking is *Lean*. Where system thinking provides the conceptual framework for understanding complex systems and their behavior, Lean offers a practical set of tools and methodologies for those principles.

Both Systems thinking and Lean aim to improve efficiency within organizations by identifying and removing waste. One of the main sources of waste in a complex system that they try to remove are *queues*. 

> "Any improvements made anywhere besides the bottleneck are an illusion." - Gene Kim

## Queueing theory 

If we don't take the scope of efficiency into account, we run the risk of optimizing individual components or processes without considering the impact on the whole system. This can inadvertently lead to the formation of queues and inefficiencies within the system. 

> "Queues are the silent killers of efficiency, draining resources and stifling progress."

In the example of our restaurant, there could be queues for each department:

+ If the kitchen or bar is not able to complete the orders fast enough, this will result in a queue of pending orders. Increasing the completion time of an order.
+ If the waiters are not able to deliver the prepared food and drinks fast enough, this will result in a queue of orders to be served. Increasing the completion time of an order but also the quality since the food can become cold, the orders can arrive out of order, all at the same time.

![queues](/img/posts/efficiency/queues.jpg){:width="800px"}

The study of queues [queueing theory]{https://less.works/less/principles/queueing_theory} can teach us a lot on how to reduce queues and obtain a good flow in the overall system. Queues come at great cost. The biggest danger for queues, especially in product development is that they are invisible. (Except perhaps in JIRA tickets.) 

The restaurant example can easily be transposed to software engineering and how teams work. Michel Grootjans has made a good [explanation](https://youtu.be/bhpQKA9XYcE) of queues and WIP o the impact of team flow.

> "The performance of a system is not the sum of the performances of its individual parts. But the product of their interactions." - Russell Ackoff

## Project Scope

In the previous post, I talked about losing resiliency when blindly striving for efficiency. A possible case where efficiency could be more important than resiliency is when the scope of the work is a project. I'm specifically thinking of the need to deliver a software project as an external party within the promised time and budget. When working in a project scope, the efficiency argument comes up all the time due to the pressure of the deadline and budget. The mindset tends to be that there is no need to be resilient or share knowledge in project mode. Commit to the deadline, deliver within the promised time and budget and onwards to the next project!

Perhaps this can work 
+ If the environment is well controlled
+ If the time span is short enough to hopefully avoid unexpected changes
+ If the requirements are small and limited enough so that the estimates are in the realm of reality

However, those are a lot of ifs. We haven't even taken into account what happens to the software once the project is done. Who will maintain it? What is the quality of the software delivered under pressure? The pressure of being efficient and doing everything within the fixed time and budget?

![deadline](/img/posts/efficiency/program-night.jpg){:width="800px"}

> "There is never enough time to do it right, but there is always enough time to do it over" -- Murphy's law

I would stick my neck out and say that delivering software in project scope postpones the cost of "being efficient" to later. Once the project is delivered, the software still needs to be maintained. The knowledge of the software will not easily be obtained by some written documentation, the design decisions that were taken to efficiently deliver the project will impact the cost of using, maintaining and extending the software. 

Personally, I'm very wary of software projects, like the software can be finished. I have spent too many years trying to fix "successful" software projects, years after the delivered deadline. When one looks beyond the scope of the projects, those successful projects were perhaps not so successful. More often than not, the cost of having delivered the software *"efficiently"* within the project scope at the cost of resiliency outweighed the gains made delivering the project on time and on budget.

> "Software is never finished, it's only abandoned"

## Conclusion

The main point I wish to make is that you should take the scope into account of what you are optimizing. If we made something more efficient, what is the impact on the larger system? The cost of local optimization can be larger than the gain. 

> "In the quest for productivity, queues are the dragons to be slayed, the obstacles to overcome."

![traffic](/img/posts/efficiency/trafic.jpg){:width="800px"}
Queues are bad
{: .center-img-text }






