---
layout: post
title: LevelUp Build Week 6 - Psychology behind Agile
categories: [courses]
tags: [learning, levelup]
date: 2015-09-30 13:30:00 +1000
excerpt: We were given a talk by TW consultant Fabio Pereira about the cognitive psychology behind Agile processes. A professor conducted an experiment by giving his students 3 essays to complete over the 12 week course.  
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
	<tr><td>1800</td><td colspan="2">Arrival & Food</td></tr>
	<tr><td>1815</td><td colspan="2">Team Standups (by colour)</td></tr>
	<tr><td>1830</td><td colspan="2">Psychology behind Agile</td></tr>
	<tr><td></td><th>Dev's</th><th>BA's / XD</th></tr>
	<tr><td>1845</td><td>Team work</td><td>Agile Psych Extended</td></tr>
	<tr><td>1900</td><td colspan="2">Team Work</td></tr>
	<tr><td>2045</td><td colspan="2">RETROs (in teams)</td></tr>
	<tr><td>2100</td><td colspan="2">Close and clean</td></tr>
</table>

## Team Standup
Ray offered to run the meeting again.  A few people were MIA so there were 4 devs (Gabe, Andrew, Albert, Ray) and myself as XD.  Andrew continued work on health services and needed to use the google API.  Adam said he might get him to work with a few members from Team Purple as they're also using it and ran into a few problems.  

## Psychology behind Agile
ThoughtWorks consultant, Fabio Pereira, talked about the cognitive psychology behind Agile processes. A professor conducted an experiment by giving his students 3 essays to complete over the 12 week course.  For the first group, each essay was due every 4 weeks. ie. the deadlines were distributed evenly throughout the course. For the second group, however, he told the students they could hand in their essays at any time before the course was over. Unsurprisingly, the students from the first group performed better than the second as it's human nature to procrastinate and leave things to the last minute. It's so common that it has a name - The Student Syndrome. This is why the Agile method of doing short iterations and regularly showcasing features to product owners prevailed over waterfall method where the product owner wouldn't see the final product until the end of the software development lifecycle. 

We were asked to answer this riddle as quickly as possible. A bat and ball cost $1.10. Given the bat costs $1 more than the ball, how much is the ball? Fabio explained that every time he's asked the question, the audience fails to get the right answer. Making elementary mistakes like these are the reason why red-green-refactor testing have become an industry standard practice.    

Take a look at the following:

<div style="text-align:center; width:100%"><iframe width="420" height="315" src="https://www.youtube.com/embed/vJG698U2Mvo" frameborder="0" allowfullscreen></iframe></div>

Inattentional blindness is when we miss something important because we weren't paying attention. Important emails go unnoticed because they were buried underneath boring messages. We were told about a team whose CI failed build tests had gone undetected for weeks simply because no one was actively monitoring it.  Missing vital information is what's known as refrigerators. How long has that mustard been in there? The antidote is called a radiator and works by drawing attention to itself. This could be a big screen tv with big red writing when the CI build fails and green when it succeeds.

The next experiment involved a person pretending to be passed out in a street in direct view of passers by and to observe how quickly people assisted when they were by themselves and when others were around. What they found was that the people who were by themselves called for help much quicker than those in a group. When people are in a group, they tend to think someone else has helped or will help. This diffusion of responsibility happens in any team and is why we have retros. Action items are assigned to specific members so that someone is held accountable and are followed up if they haven't been actioned. 

## Agile Psych extended

A pen costs $22 but after doing some research, you find another shop sells it for $15 but it takes 15 minutes longer to walk. Most people will generally make the extra effort to buy the cheaper pen. Now consider another scenario. A suit costs $455 at one store but the same suit costs $448 at another store 15 minutes further away. Most people would forgo the $7 saving and make the purchase at the first store. In both scenarios, you stand to gain the same amount so why is it that people behave irrationally? 

The answer is in the relative saving. Buying the cheaper pen yields a 31% saving whereas buying the cheaper suit yields a 2% saving. When people are given things to compare, decision making becomes a lot easier which is why when you ask a product owner to prioritise features, you don't ask them if they see feature X as a priority as they will say all features are high priority. Rather, you give them a choice like, do you prefer to have feature X over Y? Another solution is to give them five poker chips and they have to place them on the stories that are most important. You give them 5 more but this time, they're a different colour so these would represent the next priority.

## Team work
User tested last weeks design with Azi, the dev coach. She explained her entire thought process whilst interacting with the prototype even though I forgot to mention she had to talk aloud beforehand. She felt it cumbersome that there wasn't a quicker way to change the previous number than to cycle through all the digits and come back around but admitted that it was more a hardware limitation. Aside from that, she used the system with little to no effort without prior information. The menu item 'heaviness' was ambiguous and she suggested it be more intuitive like 'addiction level'. She also preferred if there were up/down arrows to tell her to scroll through the list. As the devs had already started working on it and we were low on time, we decided it wasn't worth updating. I updated the acceptance criteria for version 3 of the emergency contact list with Nhung and Cherry's help.   

Andrew asked me whether there were mockups for the health and support services menu. We didn't them as the original plan was to have a separate home screen button for each but one of them was later replaced with settings. Adam said the services stories did not link back to the home screen so the home screen was simply 4 buttons that did nothing. We were missing the acceptance criteria linking them to the next screens. He suggested that since development for the other services story hadn't begun, we didn't need to implement the menu. Instead, link it so that pressing the services button on the home screen goes directly to what Andrew is working on. Then, time permitting, if the 2nd services is finished, we can add the menu linking to both. It's better to have an app with features working than to have a menu that does nothing. 

After Nhung and Cherry helped me check the statuses on the story wall, I started work on the gender/my contact/age mock ups.

<div style="text-align:center; width:100%"><blockquote class="imgur-embed-pub" lang="en" data-id="a/h1FJ6"><a href="//imgur.com/a/h1FJ6">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>

If the user needs immediate help, they press the emergency button from the home screen which sends a message like 'Hi, I need help. Please call me now! Allen'. I designed a mockup to change the name so that it's similar to changing a phone number. 

<table><tr><td><div style="text-align:center; width:100%"><iframe src="https://marvelapp.com/c39hh9?emb=1" width="275" height="467" allowTransparency="true" frameborder="0"></iframe></div></td></tr>
<tr><td><b>Change name in settings</b> 10 character limit. Spaces are allowed and are the default character. Press up goes forward in the alphabet. Press down goes backward. Press center moves focus through the 10 character slots.</td></tr>
</table>

## RETROs
Albert ran the meeting and we learnt that after everyone had finished writing, that it's important to read out all items and clarify their meaning from whomever wrote them before votes are cast. 

Action items:

* Fluctuating team member attendance: We need to ask Rujia next week for the minimum list of features she wants so that we will have a minimum viable product to showcase next Sat. If we know what needs to be done, we can work more effectively and allocate appropriate work loads to the members who do show up. Adam said that in Build events in the past, there was only 1 person who completely dropped out and that this time, it was unusual that attendance was poor. 

## References

[Cognitive Psychology slide deck](https://drive.google.com/open?id=0B6JIIawp8JvsVU5zMVh6ZDdMSjQ)