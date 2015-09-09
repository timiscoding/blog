---
layout: post
title: LevelUp Build Week 3 - Introduction to XD
categories: [courses]
tags: [learning, levelup]
date: 2015-09-09 15:30:00 +1000
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
	<tr><td>1815</td><td colspan="2">Team Standups (by colour)</td></tr>
	<tr><td>1830</td><td colspan="2">Introduction to XD</td></tr>
	<tr><td></td><th>BA's / Dev's</th><th>XD</th></tr>
	<tr><td>1845</td><td>Bringing everyone onto the same page</td><td>Prototyping and XD tools</td></tr>
	<tr><td>1900</td><td colspan="2">Team Work</td></tr>
	<tr><td>2045</td><td colspan="2">RETROs (in teams)</td></tr>
	<tr><td>2100</td><td colspan="2">Close and clean</td></tr>
</table>

## Team Standups
Today's standup was lead by Gabe who told us the devs learnt about Backbone, a javascript library based on the Model-View-Presenter pattern and designed for developing single page web applications.  Since project development hasn't started, we didn't have much to say except for what we did last week.

## Introduction to XD
We were given a short presentation by an experience design (XD) ThoughtWorker who spoke about the role he plays in a project.  Experience design is a multidisciplinary profession that includes product strategy, research, interaction design and visual (graphic) design.  People skilled in frontend developemnt or psychology can become experience designers.

The purpose of XD is to be the voice of the owner - what does the client want?  For example, when a customer visits a Woolworth's supermarket in Sydney, the eggs might be in isle 1.  When they go into a Woolworth's in Lane Cove, the customer should expect the eggs to be in a similar location.  Consistency in your product not only makes it user friendly, it ensures the user has a great experience so they know exactly where and how to find things without getting lost.  XD think about the different user types such as placement of stock on the top shelf shouldn't hinder a disabled customer from buying that product.

## Prototyping and XD tools
After the presentation, the three XDs from each team met with the ThoughtWorker XDs, Thomas and Emma.  To begin, we introduced ourselves and explain our backgrounds.  One guy was doing an information systems degree and the other girl, a masters in communications.  

We were given a crash course into prototyping using the mobile app by [Marvel][1], not to be confused with the comic book franchise.  We were given blank screen templates of the apple smartwatch on paper and our task was to draw the user interface elements for an alarm clock app.  The features had to include:

* Display the time 
* Ability to set the alarm
* Turn on / off alarm before the alarm goes off
 
We spent about 5 minutes on the task while Thomas played some groovy music on his phone.  The guys were really friendly and reassured us this exercise wasn't a test so we didn't feel any pressure.  When everyone was done, each of us explained how our user interface worked and how each screen related to the other.  Emma pointed out I had forgotten to include a way to link the screens together. Oops.  As the watch screen is small, I also need to limit the amount of elements so that the user isn't forever scrolling down the screen.  The numbers in the scroll wheel when adding an alarm should pop out more so as to distinguish them from the squares surrounding each digit.

Information systems guy explained his design which included a way to swipe left and right to different screens with tabbed icons at the top.  When Emma asked how the user turned the alarm on / off, he tried saying something but in the end, he admitted he forgot to include it.  They did a good job picking apart the flaws in our designs, Emma admitted she was playing the bad cop, and Thomas the good cop.  

### Make paper prototype interactive!
Drawing interfaces on paper lets us quickly come up with prototypes that can then be field tested.  The only thing missing is the interactive element and that's where the Marvel app comes to save the day.  Using the app, we took pictures of our design, one per screen.  The marvel app lets you add 'hotspots' - resizable invisible rectangles - to the picture that can simulate a button that can be tapped.  After you position and size the hotspot to your liking, you specify the screen after a user has tapped that hotspot.  You can also choose a transition effect like fade or swipe.  After we played around with it, we were given a list of alternative applications to use for prototyping, all are listed at the end of this article.   

<div style="text-align:center; width:100%"><iframe src="https://marvelapp.com/2g965h6?emb=1" width="275" height="467" allowTransparency="true" frameborder="0"></iframe></div>

## Team work
When I returned to my team, the devs were busy working on the emergency, home screen and joke tasks.  The BA's were working on the personalisation story **As Allen, I want to change my personalisation info (age, gender, my contact, sponsor contact, heaviness) so that I can update that info whenever I want**.  As we started storyboarding the screens for the settings menu, changing gender and age, Jason got us thinking about how the devs would react upon seeing this story.  It was simply too epic.  Jason reminded us that each story should be valuable (from the INVEST principle) and that we need to prioritise the most important setting as the devs might not have enough time.  So it was decided that we have a settings menu story like **As Allen, I want a scrollable settings screen so that I can select each and add info** as well as a story to add the sponsor contact so that the emergency button feature would work.  

Nhung advised that we had two approaches for the stories, one is to create a story for the scrollable settings menu and separate stories for changing each setting.  The problem with this is that the menu would need to be complete before each individual setting can be implemented.  The second approach is the individual setting is implemented with the menu containing only one item.  There would be no dependency on the menu screen needing to be finished first.  Ziba spoke to the dev Gabe who said the menu can be easily implemented and it was possible that one dev could work on 2-3 settings at a time.  

For the remainder of the evening, I worked on wireframing the settings screen.  **These designs show how it could work, not how it should work.** 

<div style="text-align:center; width:100%"><blockquote class="imgur-embed-pub" lang="en" data-id="a/pTXii"><a href="//imgur.com/a/pTXii">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

## Retro
We had a couple ideas thrown around for our app name including Snooze Booze, Drink free, Piss Off, Wagon and Fridays.  When we asked Rujia what she liked, she said she was happy for us to choose so we ended up choosing Fridays as one of the projects aims is for it to be discreet. 

As tradition dictates, we ended the meeting with a 'wooOOOooo!!' cheer which initially, made Thomas concerned about our team's sanity as he didn't know the context, that we were team Ghost.      

## Prototyping Tools
* [Balsamiq][2] - paid Win/Mac/Web app
* [Axure][3] - paid Win/Mac app
* [Invision][4] - free web app
* [PopApp][5] - free iphone/android app, similar to Marvel
* [Proto.io][6] - paid web app
* [Sketch 3][7] - paid Mac app
* [Adobe Illustrator][8] - paid Win/Mac app
* [Adobe Photoshop][9] - paid Win/Mac app
* [Marvel][1] - paid web app

[1]:https://marvelapp.com/
[2]:https://balsamiq.com/
[3]:http://www.axure.com/
[4]:http://www.invisionapp.com/
[5]:https://popapp.in/
[6]:https://proto.io/
[7]:http://bohemiancoding.com/sketch/
[8]:http://www.adobe.com/au/products/illustrator.html
[9]:http://www.adobe.com/au/products/photoshop.html
