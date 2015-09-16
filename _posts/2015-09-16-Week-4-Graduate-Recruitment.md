---
layout: post
title: LevelUp Build Week 4 - Graduate recruitment
categories: [courses]
tags: [learning, levelup]
date: 2015-09-16 10:30:00 +1000
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
	<tr><th><b>Time</b></th><th><b>Activity</b></th></tr>
	<tr><td>1800</td><td>Arrival & Food</td></tr>
	<tr><td>1815</td><td>Team Standups (by colour)</td></tr>
	<tr><td>1830</td><td>TW Grad Recruitment</td></tr>
	<tr><td>1845</td><td>Team Work</td></tr>
	<tr><td>2045</td><td>RETROs (in teams)</td></tr>
	<tr><td>2100</td><td>Close and clean</td></tr>
</table>

## Team Standup
Monica lead the team meeting today. When a project is underway, it is best to start from the end of the story wall and work backwards because it lets the team see where the project is currently at and what needs to be accomplished. Andrew voiced concern over a story he was working on and Ray said he still can't push to the repo because of insufficient privileges. The devs huddled to discuss technical issues.

## Graduate recruitment 
Everyone gathered into the meeting room to learn about ThoughtWork's graduate program. ThoughtsWorks is a consulting software company that solves tough problems for other companies from a wide range of industries including retail, banking and education. You might have seen the tv ads for the Dominos pizza smartphone app that lets you watch in realtime the location of your pizza as it gets delivered. 

As a consulting company, they hire developers, BAs, XDs, QA testers but the work you do isn't limited to the scope of your title. In fact, a lot of the time you will be 'wearing different hats', as Adam pointed out, meaning you'll be working across many different areas, perhaps doing a little coding, testing and analysis. As a result, you need to have a flexible mindset and not be afraid to work with new technologies that you're unfamiliar with. This is a lot different than working in a tech company whose primary business is in making software applications. In these jobs, you're more likely to be coding primarily in one language like C/C++. 

The recruitment process lasts about 2 weeks and starts with a phone interview. The most important thing they stressed was passion/enthusiasm - how can you impress us?  If you pass the phone stage, you are given a short assignment to do on your own that takes about 3 days. If the recruiters like your work, they bring you in for a face to face interview where you will do pair programming with an employee and explain your assignment. Lastly, you will give a presentation about anything you are passionate about. It could be a hobby or a skill you've learnt. They want to get to know you better so they can judge whether you'll fit into the company culture. On one occasion, Adam was impressed by a girl who made a paper airplane that exploded glitter when it collided into things. One candidate held a meditation session with all the employees while another brought in his karate uniform and held an impromptu class. 

All ThoughtWorks graduates go to India for 5 weeks for further training at ThoughtWorks University. Here, you meet other graduates from around the world where you will be placed in multi-cultural teams working on projects that simulate a real work scenario. Developers learn new technology stacks, XDs are given a design task and BAs work on stories. It is similar to the LevelUp Build program. Upon completion, you are assigned to an experienced employee where you will be shadowing and working with them while learning the ropes, practicing and honing the new skills you've learnt. 

We were told to maximise our opportunity here, to get to learn more about the company through the coaches. The LevelUp Build program gets more popular with every session that's run so we're lucky to have great resources at our disposal not many others can get. Adam told us for every LevelUp Build attendee, they refuse 3 other applicants. When adding the LevelUp Build course to our CV, we were told not to put it under employment, which people have done in the past, but to put it under skills/education. 

The Q & A session afterwards revealed that ThoughtWorks values passion, personal projects and how well your personality fits into their company. Course marks aren't important. They told us they don't even look at them. Some current employees don't have a university degree. 

Finally, Thomas, the TW XD from last week, mentioned that the XDs will be given a user testing class next week and to come prepared with a project feature they want to test. 

## Team Work
One of the problems the devs found whilst coding last week was that we were missing a story for the home screen so Sean worked on it. 

Meanwhile, I showed Rujia, Monica and Ziba my prototype that showed the navigation mechanics of the settings screens. I told Rujia that I felt there was an inconsistent user experience between saving a setting and choosing a setting from the settings menu. On the settings menu, I should change it so you would press the center button instead of the right button to choose a setting. When you save a setting, you also use the center button so this makes it more consistent. If you're confused, check out the prototypes below to see what I mean. 

<table>
	<tr><th>Inconsistent design. Right button to select setting. Center button to save or go back to menu.</th><th>Consistent design. Center button to select setting. Center button to save or go back to menu. Added benefit: more room for text as the arrows are gone.</th></tr>
	<tr>
		<td align="center"><iframe src="https://marvelapp.com/67754h?emb=1" width="318" height="390" allowTransparency="true" frameborder="0"></iframe></td>
		<td align="center"><iframe src="https://marvelapp.com/7494ee?emb=1" width="318" height="390" allowTransparency="true" frameborder="0"></iframe></td>
	</tr>
</table>

She approved but when I fielded the idea to Sean, he said that he preferred the current prototype as the arrows are more user friendly. He mentioned he'd bring in his Garmin watch next week as it has a similar button configuration. Lastly, Rujia wanted the sponsor contact to be renamed to emergency contact.

After showing the prototype, Nhung suggested we write acceptance criteria for it. These aren't 100% right as I'm recalling them from memory:

* Given on settings menu, when Allen selects the emergency contact with the right button, then the emergency contact screen shows 0000000000 and the first digit is highlighted.
* Given on emergency screen, when Allen pushes the up/down buttons, then the digit increases/decreases
* Given on emergency screen, when Allen pushes the left/right buttons, then the previous/next digit is highlighted for changing
* Given on emergency screen, when the back button is highlighted and the center button pushed, then the settings menu is displayed and the emergency contact is not reflected or saved
* Given on emergency screen, when the save button is highlighted and the center button pushed, then the settings menu is displayed and the emergency contact is reflected and saved

The way the highlights moved as you pressed the left/right buttons were hard to put into words on the acceptance criteria so we ended up drawing it on a print out of the prototype.

One of the coaches (I forgot her name but she was really helpful) asked for my input on what message should be sent to the emergency contact. Sean, Ziba and Rujia had a couple ideas written on post-its like:

* "SOS, Allen"
* "Hi, I need help. Please call me on XXX. Allen"

In the end, we asked Jason to pretend to be the emergency contact and he liked "Hi, I need help. Please call me now. Allen". We discussed whether we needed to include the phone number as it wasn't certain if the smartwatch sent the message as an SMS or via the internet. But Jason argued that if he was a sponsor for somebody, he'd already have their phone number stored in his phone. Also, we currently don't have a story for inputting Allen's name.

Ray and Cherry finished working on the home screen and wanted my input on the background colours so I told them Rujia wanted distractions blue and emergency red and the rest were undecided. I told them the blue looked more green to me which in retrospect reminded me of a Steve Jobs anecdote[^1]. Unfortunately, Rujia had already left for the evening, so they sent a slack message to her for approval.

<div style="text-align:center; width:100%"><img src="http://i.imgur.com/Ugh6Baj.png"/></div>

Lastly, we showed the settings prototype to a dev coach to see whether it could be implemented. There was concern over whether we could fit all 10 digits on such a small screen so we might have to show only 5 digits at a time. 

## RETROs
Ray lead the meeting today and the action items were:

To Improve:

* Reprioritise features/cards/features
* Ask (Insist) for help
* Read acceptance criteria

Keep it up!:

* More shoulders check between devs/xd/ba

WooOOOOooo!!

## References:
[^1]: [quote 109](http://topfamousquotes.com/quotes-about-website/3/)