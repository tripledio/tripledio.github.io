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

Let's start with the most important part, the `use case`. A formal declaration of a piece of functionality of your application. This declaration is an `api` that allows you to invert the dependency. How does it look?

<div style="background-color:rgba(250, 218, 187, 0.8); padding: 20px;" markdown="1">
#### Use Case Contract
```java
package io.tripled.architecture.usecases;

import io.tripled.architecture.core.TaskId;

public interface CancelTask {
	final class CancelTaskRequest {
		private final TaskId taskId;
		private final String reason;

		public CancelTaskRequest(TaskId taskId, String reason) {
			this.taskId = taskId;
			this.reason = reason;
		}

		public TaskId getTaskId() {
			return taskId;
		}

		public String getReason() {
			return reason;
		}
	}

	void cancelTask(CancelTaskRequest request);
}
```
</div>

The request to the `use case` inlined, since it's tightly coupled anyway. Potentially there is also a Response, or a Presenter interface.

An implementation might look like this:
<div style="background-color:rgba(241, 137, 157, 0.8); padding: 20px;" markdown="1">
#### Use Case Implementation
```java
package io.tripled.architecture.usecases;

import io.tripled.architecture.domain.Task;
import io.tripled.architecture.domain.TaskRepository;

public class CancelTaskUseCase implements CancelTask {

	private final TaskRepository taskRepository;

	public CancelTaskUseCase(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	@Override
	public void cancelTask(CancelTaskRequest request) {
		Task task = taskRepository.get(request.getTaskId());

		task.cancel(request.getReason());

		taskRepository.save(task);
	}
}
```
</div>

A common scenario in simple usecases is:
```pseudo
repository/factory
call the aggregate
persist using repository
```

It's responsabilities are to coordinate actions to domain and domain services.

Although nothing in clean architecture enforces `domain driven design` it's a good match. It would not change much from an architectural point of view, exception the code inside the domain would be more anemic.

<div style="background-color:rgba(254, 244, 137, 0.8); padding: 20px;" markdown="1">
#### Domain Aggregate
```java
package io.tripled.architecture.domain;

import static io.tripled.architecture.domain.Task.TaskStatus.*;
import static java.time.LocalDateTime.now;

import java.time.LocalDateTime;

public class Task {
	private TaskStatus status;
	private LocalDateTime creation;
	private String cancellationReason;

	public Task() {
		this.status = CREATED;
		creation = now();
	}

//   ... ommitted for brevity ...

	public void cancel(String reason) {
		assertCancellable();
		this.cancellationReason = reason;
		this.status = CANCELLED;
	}
	
//   ... ommitted for brevity ...

	private void assertCancellable() {
		if (status == COMPLETED){
			throw new DomainException("task.status.cancel.notforcompletedtask");
		}
	}

	enum TaskStatus {
		CREATED, ASSIGNED, IN_PROGRESS, ON_HOLD, CANCELLED, COMPLETED
	}
}
```
</div>

Your domain gets the chance to protect it's invariants. in this case that a completed task cannot be cancelled anymore.

If you stuck with me this far, we've covered **all the important bits**. It was all functional, it was what the user would expect from your application, and it had **zero** frameworks required to write this code. It would be a terrible smell if you need frameworks to solve your business problems inside the application or domain, it would be quite strange.

If we're talking types, we're talking vocabulary, like (joda)Money, they are used to help you express your domain (problems). They can be spoken throughout all the layers. That dependency only gets dependen *on* and does not depend on **anything else in your application**.

#### Details
##### The road
So the usecases need to get called. This is the road that needs to be travelled, this is we're we get to see frameworks. JMS, Soap, Rest, etc. Whatever protocol, framework, you use, it should ultimatly allow you to call a usecase.

 <div style="background-color:rgba(219, 253, 219, 0.8); padding: 20px;" markdown="1">
#### Rest Controller
```java
package io.tripled.architecture.infra.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.tripled.architecture.core.TaskId;
import io.tripled.architecture.usecases.CancelTask;

@RestController("task")
public class TaskController {

	private final CancelTask cancelTask;

	public TaskController(CancelTask cancelTask) {
		this.cancelTask = cancelTask;
	}

	@PostMapping("/{taskId}/cancellation")
	public ResponseEntity cancel(@PathVariable("taskId") TaskId taskId,
								 @RequestBody String reason){
		cancelTask.cancelTask(new CancelTask.CancelTaskRequest(taskId, reason));
		return ResponseEntity.accepted().build();
	}
}
```
</div>

##### The warehouse
Then another common component is the repository. This is where we can box up the state of the aggregate to keep it until it is needed again. This is also where we can use frameworks and infrastructure. JPA, MongoDB or an abstraction like spring data etc.

TODO add example with spring data.

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