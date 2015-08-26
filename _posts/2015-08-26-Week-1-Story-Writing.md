---
layout: post
title: LevelUp Build Week 1 - Story writing
categories: [courses]
tags: [learning]
date: 2015-08-26 21:30:00 +1000
---

As students began shuffling into the board room at 6pm, dinner was served and we had about half an hour to satisfy our bellies before class would start.  

After dinner, we were given a short refresher presentation on story making, covering the story lifecycle with an emphasis on the backlog and analysis phase.  To understand the concepts clearly, we were given a scenario for which we would need to practice our newfound story writing skills.  Every 2 years, the laptops given to ThoughtWork employees (henceforth ThoughtWorkers) are replaced with updated models.  The TechOps sell the older models to the highest bidding ThoughtWorkers.  Currently, the entire process is done via email which is not only slow and error prone but ThoughtWorkers who aren't even interested in buying a laptop are notified.  TechOps want a web application (similar to eBay) that would allow ThoughtWorkers to buy and sell laptops to the highest bidder.  We were asked to split into teams of 3 consisting of at least one dev and a business analyst (BA) or experience designer (XD) and given 5 x 3 inch cards, to write stories that would fulfil some of the TechOps requirements.  

A story is a description of a feature that takes on the form 

**As a** _role_<br>
**I want** _requirement_<br>
**So that** _reason/ROI_<br>

Eg. As a TechOps, I want to see a list of laptops with pictures next to them so that I can determine the condition for the laptop.  After 5 minutes, every team was encouraged to share their stories to the rest of the group and we discussed whether some were more suited to being an epic - a broader story encompassing more than 1 self contained feature - and the granularity of the story like should the story specify that a database is used?  

At this point, the activities for the remainder of the evening would be split into separate classes, 'Development Setup' for the developers and 'Advanced Story Writing' for the BAs and XDs.  The story wall whiteboards were wheeled out of the board room and into the lobby near the lifts.  We were told to be as quiet as possible while relocating as people were still working in the office.  Without the help of visual aids, the speaker had to make do with teaching us the basics on acceptance criteria and spiking.  With our stories from the previous exercise, we split into pairs and practiced writing acceptance criteria, a set of requirements to complete a card that often but not always take the form 

**Given** _pre-condition_<br>
**When** _trigger_<br>
**Then** _outcome_

The acceptance criteria can be categorised into one of three paths: the happy, alternate and sad path. The happy path specifies the traditional use case such as when a user logs into their bank account, a list of accounts appears.  An alternate path could be when the user logs in, no accounts are listed while a sad path could be when the user logs in, an error message explains their account information couldn't be retrieved.  

The last activity for the night was 'Epic breakdown with Product Owner (PO)' and involved everyone going back to their respective teams to begin writing epics and acceptance criteria for their team's designated project.  Joining us were the head coach, product owner Rujia and two floating coaches.  Turns out Team Blue is now known as Team Ghost.  

An epic is a large story that can be split into smaller stories.  At project inception, we start with information about the requirements that the product owner wants and as conversations go in depth about a particular story, more details begin to percolate.  An example might be: as a Formula 1 game player, I want an options screen so that I can choose the driver I want to use.  Later on, another story emerges: as a Formula 1 game player, I want an image area of a driver so I can see the driver I want to use.  This means the original story would have to become: as a Formula 1 game player, I want an options _menu_ so that I can choose the driver I want to use.  

Our team decided the epics would be similar to the main menu items that were identified during storyboarding at the kick off event: 

* Emergency - send a message to an emergency contact urgently
* Services - health, counciling hotline
* Distractions - pacman game, jokes
* Settings - update user info
* Discreetness - the watch does not reveal anything about alcohol addiction in it's default operating mode

Each epic was further broken down into smaller stories as expanded upon above.

The PO prioritised these stories:

* emergency contact
* telling a joke
* the watch face should not reveal alcohol addiction when the user is not interacting with it
* a list of AA meetings within 20 km driving distance

Once we had the acceptance criteria formulated, our first ever team project analysis was completed at 9pm.  And with that, we are now ready to liaise with the developers for them to begin work next week!  