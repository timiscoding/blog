---
layout: post
title: LevelUp Build Week 1 - Story writing
categories: [courses]
tags: [learning, levelup]
date: 2015-08-26 21:30:00 +1000
---
<style>

table{
	margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    border:2px solid #000000;
}

th{
    background: #33824c;
    color: white;
}

th, td{
    border:2px solid #000000;
    padding: 10px;
}

td{
	color: black;
}

tr:nth-child(even){
	background: #afceb8;
}

tr:nth-child(odd){
	background: #daf0ed;
}

</style>
This weeks agenda:

<table>
	<tr><th><b>Time</b></th><th colspan="2"><b>Activity</b></th></tr>
	<tr><td>1800</td><td colspan="2">Arrival & Food</td></tr>
	<tr><td>1815</td><td colspan="2">Story writing (ALL students)</td></tr>
	<tr><td></td><th>Developers</th><th>BA & XD</th></tr>
	<tr><td rowspan="2">1845</td><td>Development setup</td><td>Adv. story writing</td></tr>
	<tr><td>TDD Session</td><td>Epic breakdown with PO's</td></tr>
	<tr><td>2045</td><td colspan="2">RETROs (in teams)</td></tr>
	<tr><td>2100</td><td colspan="2">Close and clean</td></tr>
</table>

After eating some asian food, we were given a short refresher presentation on story making, covering the story lifecycle with an emphasis on the backlog and analysis phase.  To understand the concepts clearly, we were given a scenario for which we would need to practice our newfound story writing skills.  

Every 2 years, the laptops given to ThoughtWork employees (henceforth ThoughtWorkers) are replaced with updated models.  The TechOps sell the older models to the highest bidding ThoughtWorkers.  The entire process is currently email based so it is not only slow and error prone but ThoughtWorkers uninterested in buying get notified.  TechOps want a web application similar to eBay that would allow ThoughtWorkers to buy and sell laptops to the highest bidder.  

We were asked to split into teams of 3 consisting of at least one dev and a business analyst (BA) or experience designer (XD) and given 5 x 3 inch cards, to write stories that would fulfil some of the TechOps requirements.  

A story is a description of a feature that takes on the form 

**As a** _role_<br>
**I want** _requirement_<br>
**So that** _reason/ROI_<br>

Eg. As a TechOps, I want to see a list of laptops with pictures next to them so that I can determine the condition for the laptop before making a bid.  

After 5 minutes, every team was encouraged to share their stories to the rest of the group and we discussed whether some were more suited to being an epic - a broader story encompassing more than 1 self contained feature - and the granularity of the story - should the story specify that a database is used?  

At 6:45, the XDs and BAs relocated and the story wall whiteboards were wheeled from the board room into the lobby near the lifts.  We were told to be as quiet as possible as people were still working in the office.  

Without a projector to see the slides, the coach taught us the basics on acceptance criteria and spiking.  We split into pairs and practiced writing acceptance criteria using our stories from the previous exercise.  Acceptance criteria are a set of requirements to complete a card that are often, but not always, of the form 

**Given** _pre-condition_<br>
**When** _trigger_<br>
**Then** _outcome_

Acceptance criteria can be categorised in three ways: the happy, alternative and sad path. The happy path specifies the traditional use case such as when a user logs into their bank account, a list of accounts appears.  An alternative path could be when the user logs in, no accounts are listed while a sad path is when the user logs in, an error message explains their account information couldn't be retrieved.  

The last activity for the night was _Epic breakdown with Product Owner_ and involved everyone going back to their respective teams to begin writing epics and acceptance criteria for their team project.  Joining us were the head coach, product owner Rujia and two floating coaches.  We found out Team Blue is now Team Ghost.  

An epic is a large story that can be split into smaller stories.  At project inception, we start with information about the requirements that the product owner wants and as conversations go in depth about a particular story, more details surface.  

For example, <b>As a Formula 1 game player, I want an options screen so that I can choose the driver I want to use.</b> Later on, another story emerges. <b>As a Formula 1 game player, I want an image area of a driver so that I can see the driver I want to use.</b> This means the original story would become: <b>As a Formula 1 game player, I want an options _menu_ so that I can choose the driver I want to use.</b>

Our team decided the epics would be similar to the main menu items that were identified during storyboarding at the kick off event: 

* <b>Emergency</b> - send a message to an emergency contact urgently
* <b>Services</b> - health, councilling hotline
* <b>Distractions</b> - pacman game, jokes
* <b>Settings</b> - update user info
* <b>Discreetness</b> - the watch does not reveal anything about alcohol addiction in it's default operating mode

Each epic was further broken down into smaller stories as expanded upon above.

The PO prioritised these stories:

* emergency contact
* telling a joke
* the watch face should not reveal alcohol addiction when the user is not interacting with it
* a list of meetings/clinics within 20 km driving distance

Once we had the acceptance criteria formulated, our first ever team project analysis was complete. 