---
layout: post
title: LevelUp Build Week 5 - User Testing
categories: [courses]
tags: [learning, levelup]
date: 2015-09-23 10:30:00 +1000
excerpt: We covered one type of user testing whose purpose is to get a sense of what users are feeling when they are using your application. XD's typically delegate user selection to a recruiter and give them a list of criteria each user must satisfy.
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
	<tr><td></td><th>BA's / Dev's</th><th>XD</th></tr>
	<tr><td>1830</td><td>Team work</td><td>User Testing</td></tr>
	<tr><td>1930</td><td colspan="2">Team Work</td></tr>
	<tr><td>2045</td><td colspan="2">RETROs (in teams)</td></tr>
	<tr><td>2100</td><td colspan="2">Close and clean</td></tr>
</table>

## User Testing

We covered one type of user testing whose purpose is to get a sense of what users are feeling when they are using your application. XD's typically delegate user selection to a recruiter and give them a list of criteria each user must satisfy.  If it's an smartphone app for school students, the XD might specify 'I want kids between 12-18 who own a smartphone'.  

The best way to gauge how well your users respond to your application is through user testing interviews. To get the most out of the user, there are a few things they should know before the interview begins.

1. We are testing the application and not the user. They should feel relaxed and not feel there is a right/wrong answer.  
2. Make sure the user thinks aloud. We can't read minds so the user's need to express what they are doing and more importantly, why they are doing it.  
3. Don't be worried about hurting our feelings. We do this to get honest feedback. More often than not, users will tell you something is easy to use out of politeness and not wanting to offend but when you analyse how they're using your system (mouse clicks, movements) you can tell they are lost.
4. The user can ask questions while using the app, but we might not answer right away.  This one's tricky because you don't want to give away too much information that you're telling the user how to use your app.  You want to see if they can figure it out for themselves. 
5. We are going to record this session but it is really only for internal use only.  Recording the user's actions allows us to pick up anything we missed the first time.  Some user testing apps like silverback let you record the user's face as a way to identify their enjoyment or frustration.

Lastly, it may be helpful to ask a few lead in questions to get the user talking and relaxed.  E.g. what do you do for a living? You might follow up with something to help you identify if they are a core demographic for your test.  If you are testing a mobile phone e-commerce site, you might ask them if they've purchased large electronics online before and if they say they only go to brick and mortar stores, then you know not to spend too much time.

With the prerequisites out of the way, you can get to the real meat of the testing - giving the user a scenario in which they are to act out.  This is like role playing and an example is:

You are a parent of a year 9 student who's been bullied at school and online through snapchat and instagram.  You have searched online to see if you can do anything about it.  You come across this site...

You would then show them the site and ask them what they would do if they wanted to find methods to stop their child from being bullied.  

We were given five minutes to draw paper and pen mockups for one of our project's features that we wanted to test. We then went around the room where one guy pretended to be the interviewer and the other guy, the user. The scenario I told Gary was that my app contained an emergency button to send a message to a contact and that his task was to update the contact's phone number.  Listening to Gary as he explained his thought process was invaluable as it revealed several flaws in my design.  

## Team Work

I conducted the same user testing interview with QA tester Cherry but this time, I used the marvelapp prototype I created from last week and I found that my design is difficult to use without explaining it. Rujia told me to redesign it and re-test with a member from another team. I updated the BAs about it and we moved the story back to analysis.  

Meanwhile, Andrew was ready to do a shoulder/desk check after implementing the screen for showing the closest 3 services available to Allen. We went through the acceptance criteria (AC) one by one and found that one was difficult to implement. If the GPS is not working, a hotline number should be displayed. Since we don't have a way to enable/disable the GPS, we decided to make the app alternate between GPS on and off states to simulate the AC.  

<table><tr><td><div style="text-align:center; width:100%"><iframe src="https://marvelapp.com/jccf87?emb=1" width="220" height="240" allowTransparency="true" frameborder="0"></iframe></div></td></tr>
<tr><td><b>Version 2. Settings navigation and button mapping mock up.</b></td></tr>
</table>
<br>
<table><tr><td><div style="text-align:center; width:100%"><iframe src="https://marvelapp.com/jj9dih?emb=1" width="275" height="467" allowTransparency="true" frameborder="0"></iframe></div></td></tr>
<tr><td><b>Version 3. Navigation + Look-and-Feel mock up.</b>  Input elements are black text on a white background with a black border.  When an input element has focus, a purple border appears inside it.  Since the background for all screens will be one of the colours of the home screen, the colour for the focus border needs to contrast well.  Currently, it doesn't stand out as I had planned so maybe the border needs to be bigger than 2 pixels or the entire background of the button needs to be purple. Purple was chosen using the <a href="https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=3&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.5795501484870387,1,0.41775500991845893,0.91,0.7343552852765709,0.19914806737559984,1,0.3662216792330757,0.237045481928164,0.7537783831549758,0.48888358875497384,0.91,0.47284548831936046,0.780088788916392,1&swatchOrder=0,1,2,3,4">Adobe Color wheel</a>.  On the Emergency Contact screen, the words "Emergency Contact" have a white outline to contrast with the background colour. The mobile phone icon lets the user know to enter a mobile number.</td></tr>
</table>

## RETROs

To improve:

* Not enough devs/staff. We had 3 devs, 2 BAs and 1 XD. Gabe said she'll play bad cop and make people more accountable if they can't make it. Make sure to push code before leaving so others can use it if you're away next week.
* Need to move faster. Devs need to read AC more closely.

WoooOOOOooo out