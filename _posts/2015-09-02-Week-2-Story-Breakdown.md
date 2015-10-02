---
layout: post
title: LevelUp Build Week 2 - Story breakdown
categories: [courses]
tags: [learning, levelup]
date: 2015-09-02 12:30:00 +1000
excerpt: Afterwards, all the BAs and XDs met in the kitchen area to discuss one story with a ThoughtWorks BA.  Our team chose As Allen, I want to send a message to an emergency contact so that I can immediately get the help that I need to stop drinking.
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
	<tr><td rowspan="3">1815</td><td colspan="2">Team Standups (by colour)</td></tr>
	<tr><td colspan="2">BA/UX recap of the product to whole team</td></tr>
	<tr><td colspan="2">Understanding of different roles</td></tr>
	<tr><td></td><th>Developers</th><th>BA & XD</th></tr>
	<tr><td>1830</td><td>Continuous Integration session</td><td>Story breakdown</td></tr>
	<tr><td>2045</td><td colspan="2">RETROs (in teams)</td></tr>
	<tr><td>2100</td><td colspan="2">Close and clean</td></tr>
</table>

The team standup is a meeting, typically lasting 15 minutes, held at the start of the day where everyone gives a brief status update on what they did yesterday, what they're doing today and raise any issues that may impede completing their task.  Everyone stands to keep the meetings short.  This project transparency allows the team to anticipate any challenges that could arise further down the track and work together on solving difficulties.  

As tasks aren't ready to be assigned yet, we were given a short rundown on each of the roles instead.  The role of experience design (XD) can be broken down into several parts:

* visual/graphic design - the look-and-feel of the user interface consisting of colours, images, type, space and symbols whose purpose is to visually communicate a message.

* information architecture - structure and organisation of information.  Information denotes objects like people, documents, web sites, images or more broadly speaking, represents metadata.  Decomposing these down to their essence into simple labels and grouping them so that users can easily find the information they want and navigate through the system. 

* interactive design - intuitive consistent interface, adding features and information important for the user, ease of use

Afterwards, all the BAs and XDs met in the kitchen area to discuss one story with a ThoughtWorks BA.  Our team chose **As Allen, I want to send a message to an emergency contact so that I can immediately get the help that I need to stop drinking.**  The acceptance criteria was:

* When Allen chooses the emergency option, a message should be sent to his emergency contact.  
* When Allen chooses the emergency option, Allen should be able to cancel the message if he decides it is unnecessary to bother the contact
* If the network is down, an error message is shown as well as the emergency contact information

The BA felt the acceptance criteria reached beyond the scope of the story and suggested we split them up.  We decided to keep the original story but move the cancellation acceptance criteria into it's own story.

The next activity was wireframing and mapping out the user interface.  After brainstorming the emergency contact story, we came up with several ideas.  Once Allen presses the button, he sees a confirmation screen before sending the message.  Another idea was to instead have a timer count down and send the message once it reached zero.  This had the added benefit of being able to cancel the message but Rujia wanted the app to be simple, minimalistic, quick to use without extraneous steps.  In the end, the idea that prevailed was when Allen held the button down for X seconds, the message is sent. A screen tells Allen that the emergency person has been contacted and after 5s, goes back to the main menu.  

For the rest of the evening, we drew mock ups for the default, home, services and jokes screen. 

<div style="text-align:center; width:100%"><blockquote class="imgur-embed-pub" lang="en" data-id="a/62Zxz"><a href="//imgur.com/a/62Zxz">LevelUp Build Wk 2</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

To round out the end of the class, the developers joined us for a retrospective, writing on post-its what we did well, what needs improvement and any ideas/suggestions.  The group prioritised that our app needed a name and that there needs to be more free flow of ideas.  Gabe nominated that we all submit app name proposals on slack chat and Anna suggested we come up with a phrase/action to inspire better team cohesion.  Since we were team ghost, someone said we should all cheer 'wooooooh' so we gave it a shot but ended up sounding like an alarm running out of battery.  I guess we need more practice.

## Slide decks
* [Continuous Integration](https://drive.google.com/file/d/0B6JIIawp8JvsZnd1X3FsZm5pX3c/view?usp=sharing)
* [Creating a watch page](https://drive.google.com/file/d/0B6JIIawp8JvseUJGbkMtUXI0b1U/view?usp=sharing)
