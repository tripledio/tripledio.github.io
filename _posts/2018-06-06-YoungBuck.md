---
layout: post
author: guido
title: "The Young Buck"
hideLogo: true
header-img: "img/posts/heroes/ww.jpg"
excerpt: A post about the Young buck hero pattern in software development. The young gunslinger, full of high ideals, working in the software industry.
---
# The Young Buck

*This post belongs to small series of posts. The main post is [Wild west heroes](/31/05/2018/Heroes/).* 

In this post I'll elaborate on what I identify as the Young Buck "hero" pattern. With the *Young Buck* I refer to the image of the young gunslingers just leaving home and stepping out into the big world. Usually they are full of high ideals and have a simplistic sense of justice. Unfortunately they get played for a fool most of the time and end up doing all the fighting and take all the risks while someone else reaps the benefit from their effort. The end result of their struggles might not be what they had hoped for. The townspeople might not be so pleased with the carnage lying in their wake. They often end up getting scorned and chased away by the very people they were fighting for. 

Mainly, the Young Bucks see themselves as a hero, or they aspire to be one. Their eagerness to make it in the wild west often makes them vulnerable to being used as canon fodder and doing someone else dirty work. A third party might misuse their sense of heroics for their own gain, exploiting that they don't know any better yet. 

### Young consultants

In the software world I have seen these 'Young Buck' hero typically in a consulting context. The young developers, with little to no experience, first job in a consultancy firm. They are the ones that are the easiest to convince that they need to put in time, work hard, stay late, work in the weekends, in order to make that big deadline. This often happens on some fixed-prize waterfall project that was bound to fail from the start.  ( Yes, people still do big waterfall projects. Remember Obama care? [^obama-cio] )

The developers that are doing this hard work, rushing from deadline to deadline, generally do this from a misplaced sense of pride. Perhaps even a sense of professionalism. **Look at us working hard, getting things done.** Our company and customer will be so proud... 

Now of course you don't have to be young to be a Young Buck. But it certainly helps ;)

### Pride

It is precisely that sense of taking pride in doing 'heroic' deeds that categorizes them as the Young Buck. Of course I've  seen many older consultants participate on yet another project with crazy arbitrary, deadlines. But usually they have long lost the pride aspect or any illusion that they are being professional. They are doing it because it pays the bills or advances their career with the boss. They do it consciously, knowing full well that what they are doing and where it leads to. 
    
The Young Buck hero was for me what Sandro Mancuso discussed in a very recognizable way in chapter 5 of his book [The Software Craftsman](https://www.amazon.com/Software-Craftsman-Professionalism-Pragmatism-Robert/dp/0134052501/) [^sandroBook]. Being a hero may make you feel good about yourself, give you the sense that you are saving the day, that you are one of the hard workers, one of the professionals...

### The software

Even if the deadline is met the customer is probably left with very poorly written software with a high maintenance cost. As I mentioned earlier,,, Obama care[^obama-cbs]. I could of course mention a lot of Belgian projects as well. The Young Bucks may feel like heroes while they are rushing for the deadline, doing quick fixes, patch job after path job in production but in the long run it is the software that suffers and the customer that will overpay for a low quality product. Because it is more important _how_ a job was done, than that the job was done. Because as we all know, software always changes, and is never 'done'. And that is a good thing. There should be life _possible_ for the software after a deadline.[^constructionTale] 

## Who benefits?

Often the only one who benefits form these heroics is the Young Bucks boss. The boss is the one that gets paid by the customer for the work and overtime. Of course often a bone will be thrown towards the ones doing the actual work. But it isn't the boss that is working in the weekends, pulling an all nighter, sacrificing their social lives.

Once sufficient deadlines have passed and the software goes into maintenance mode this is even more beneficial for the boss. The customer is still in need of software engineers to maintain and possibly extend the software. Which takes more time than it should due to the numerous shortcuts that where taken. The Young Bucks are left maintaining the software and hopefully cleaning up a bit of the large technical debt they created themselves.

There is a benefit to all of this for the Young Bucks. It is called **experience**. If they were paying attention they learn how *not* to run a software project. Why best practices of software design are considered best practices. It will allow them to learn and to avoid being exploited in the future.

For some Young Bucks it will even cause something far better, some of them, will try to raise up to the opportunity and gain a bigger voice in the project. If they are given the chance they might even be able to do some great things with their short experience.
But this is not something that will happen with every Young Buck, it requires the willpower to stand up to people around them, take more responsibility. But they will try to improve the situation they are in.

### Professionalism

To those Young Bucks out there, who are in their first rodeo, Let me make it clear that working hard no matter what does not make you a professional. Not even if you 'reach' the deadline by working 16 hours a day. 

> Heroics shouldn't come into play, heroes should not be necessary, the day should not _need_ saving. 

Don't kid yourself. Don't allow others to give you a sense of guilt because you aren't there working with them on that crazy deadline.  While it may be a heroic thing to do, it is also a stupid thing to do. As 'heroics' things often are. It would have been much better if the heroics were never necessary. That the job was just predictable steadiness, without any heroic battles... 
   
### The time for heroics
     
Of course sometimes things can still go wrong in production, an urgent intervention can be needed. But this should be an exceptional case. When it does happen, it should be dealt with swiftly. With a thorough post morten so we can learn how to avoid it in the future, making sure _this does not happen again_. Because we don't want to let the exceptional become the normal.

Deadlines are prevalent in our industry. But while a real deadline can exist (one of the business requirements, GDPR for example, not an arbitrary deadline a manager cooked up to impress someone) the scope should be changeable. If something can't be done, it can't be done. Sleep and time off is a required attribute for quality software. The time that a given deadline scared or impressed me is long gone. It should still be business as usual. If you can't make a deadline with proper, disciplined work, then you don't want to 'make it' with chaotic, sleep deprived work. 

As someone at the start of their career, finally playing with the big boys, working on real big and important projects, it may seem perfectly reasonable to work hard from deadline to deadline. No more time for academic discussions. The customer wants it now! This is the real world!

### Conclusion

For a **Young Buck** it may seem that working hard, making deadlines, saving the day is doing the right thing. But seen from a distance it is just another software mess under construction. Delivering low quality software and potentially causing a lot of damage to the firm. Luckily just like with young cowboys, if they survive the battles after a while they might become experienced gunslingers who won't fight a needless fight or get played for a fool. Others will be stuck in the same pattern for a long time.

**References**

[^sandroBook]: [The Software Craftsman](https://www.amazon.com/Software-Craftsman-Professionalism-Pragmatism-Robert/dp/0134052501/ref=sr_1_1?s=books&ie=UTF8&qid=1522832866&sr=1-1&keywords=sandro+mancuso)
[^obama-cio]: [Software problems Obamacare](https://www.cio.com/article/2380827/developer/developer-6-software-development-lessons-from-healthcare-gov-s-failed-launch.html)
[^obama-cbs]: [Obamacare poor design](https://www.cbsnews.com/news/experts-obamacare-website-stymied-by-its-poor-design/)
[^constructionTale]: [Construction tale](/15/04/2018/Construction-Tale/) 
