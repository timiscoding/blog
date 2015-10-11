---
layout: post
title: LevelUp Build - Final Showcase!!
categories: [courses]
tags: [learning, levelup]
date: 2015-10-11 11:30:00 +1000
excerpt: The dry run was chaotic and dysfunctional at best, with the devs trying to sort out who would talk about what they learnt. 
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

The final agenda:

<table>
    <tr><td>1000-1300</td><td>Iteration #7 - Standup, code, retro</td></tr>
    <tr><td>1300-1330</td><td>Lunch</td></tr>
    <tr><td>1330-1600</td><td>Iteration #8</td></tr>
    <tr><td>1600</td><td>Guests (family & friends) arrive</td></tr>
    <tr><td>1615-1650</td><td>Showcase</td></tr>
</table>

## Iteration #7

Ray ran the meeting. All team members (5 devs, 3 BA's and XD) showed up except one who hadn't turned up since week 1. Ray said there might be a bug with the screen saver appearing every 5s regardless whether the user is interacting with it or not. Sean said he'd test it. Andrew worked on getting the 2nd meetings services screen. Albert was working on the jokes page. He wanted my opinion whether we needed a Jokes title on the screen but it wasn't needed because the user would have to choose the jokes menu item before seeing the joke. Later on, Gabe joined us and began working on the emergency contact screen. 

Rujia explained that in the product definition slide, we should address the customer needs and how our product meets them. The BAs and I worked on the presentation on my laptop, adding a collage of the value proposition canvas (customer needs), our list of product features and other mockups we drew during the early planning stages. We added more dot points to the what we learnt as a team and as XD. We decided to do the presentation using Ray's laptop as he had the fastest Mac.

Ray asked me if I had used the Telstra SMS API before and coincidentally, I had written a shell script using it a couple months ago. He wanted to know about registering for a key and I told him that Telstra needs to approve and grant access which can take a day or two but he could use my key. I tested that my key still works with Cherry and pasted it on slack chat. The iteration was almost over and they were getting a server error.

Gabe asked whether the input box and arrows from the emergency contact could be left out. They're a crucial element but given the difficulty in implementation, we decided it was okay to just show the number for now and do it later if we had more time.

By this time, the screensaver bug was fixed but Sean expressed concern that 5s was too short so we discussed it with Rujia and changed it to 20s which was long enough to talk about each screen and short enough that we wouldn't have to wait too long to demo the screen saver during the showcase. 

## Iteration #8

After lunch, Ray & Cherry got the SMS sending function working which was great news as a major part of the MVP was done. Unfortunately, Monica had to leave suddenly so after saying our goodbyes, we quickly resumed the standup to discuss time management. There was 2.5 hrs remaining so we'd give the devs 2 hours to finish coding and use the last half hour for the presentation. The devs still needed to add their dot points to what they learnt. 

Half an hour later, Rujia drops a bomb shell on us and tells us there's been a change of plan. Before the showcase, the coaches want all teams to get together for a retro about the whole course. This meant we only had 1 hour left instead of 2. There was a noticeable panic in everyone's voice but we all doubled down on our efforts. Sean, Ziba and I estimated the time talking about each slide would take and who would be talking. With 20 minutes left, Sean quickly added a few points for the devs as there was no time and we were to practice a dry run in 15. 

Amid the chaos, while Gabe worked on the emergency contact with the dev coach, another dev pair started working on it too. Sean later suggested that devs should pick up story cards they are working on, so that others won't accidentally duplicate the effort. 

The dry run was chaotic and dysfunctional at best, with the devs trying to sort out who would talk about what they learnt. Andrew admitted he couldn't think of anything to say about what he learnt, and for a while, Ray and Andrew were trying to decide who would speak but Andrew said he would do it. People were introducing the next speaker but I felt it was not only taking up precious time (the talk should only be 10 min) but was breaking continuity. There was a spelling error on the slide deck so with mere seconds left, we changed it and I re-uploaded the slide deck to slack. 

## All team retro

Adam ran the meeting and everyone gathered to discuss their thoughts on the event overall. The great thing about writing on post-its is that everyone has a voice in the meeting. Sometimes, it's hard for people to provide input when others monopolise the conversation or perhaps some don't feel comfortable sharing in an audience. 

Someone said that it would've been good if there was more earlier collaboration between devs and BAs as it was difficult writing stories without the technical advice. This was due in part to the devs learning the frameworks and tools while the BAs learnt story writing. Another point was that even though there were 3 teams, there wasn't much conversation happening across them. This was understandably hard to do given the short time and everyone madly working on their project, but it would've been good to have some cross team communication.

Adam told us that our practice of Agile skills needn't stop after the course is over. In previous sessions, he regaled us of a previous student who used the story wall for family time on weekends. Everyone would post what they wanted to do during the weekend, and they would prioritise activities they wanted to do. When their children would complain they didn't get to watch a movie, they would go back to the wall and find out the kid prioritised doing something else.

We were given stats about the devs test coverage and test pass percentages. Team Ghost did a almost passable job of approx. 78% and 60% respectively. 

Finally, there were thank you's to Adam, Nikki (for organising the kick ass food on a tight budget) and the rest of the coaches, POs for donating their free time to help the students out, and also to the students themselves, as without them, the course wouldn't be possible.

## Showcase

Team Purple were up first as someone had to leave early. They made an app for school girls living in a bad area and made a cool feature that integrated google maps so you could see the location of other girls nearby. 

Then it was our turn. Gabe introduced the problem statement and started off strong. I followed up with the product definition which I had written up on notes as I hadn't practiced enough to memorise. Ziba explained the elevator pitch, followed by Sean and I tag teaming what the BAs and XDs learnt. Andrew spoke admirably given he had zero time to prepare. But the star of the group would have to go to Ray who did an excellent job of not only going through the demo articulately, but with a lot of enthusiasm and humour thrown in. Overall, we had a wonderful showcase and even got to demo the emergency button which sent the SMS to Rujia who proudly read out the alert. 

Team Orange created an app for people living off the streets and built a messaging system to easily get informational content like weather as well as event notifications such as food shelters. 

## Final thoughts

I had followed the levelup facebook page after I had heard about them from the CS uni society. When registration for LevelUp Build popped up on my feed a couple months ago, I had mixed feelings of joining as on one hand, I wanted to learn Agile and participate in a project that simulated a real life working scenario, yet on the other hand, I wasn't confident in my abilities, that I'd be able to perform or keep up with the team. 

Looking back, I realise how those fears can hold me back from growing as an individual. Had I not participated, I wouldn't have met bright, positive and funny people, felt the immense satisfaction of achieving the goals the team set out from week 1, experienced the amazing synergy in a team, discovered I had something to contribute and learnt about opportunities that I hadn't known existed. It was from meeting Andrew and Reena in week 1 that I learnt about General Assembly and the course that I will begin in about a months time. I'm looking forward to it as it's really hands on, coding 9-5, creating my own project portfolio and being in a better position to attain my goal of becoming a web dev.

WooooOOOOooo

# Slide deck

[Team Ghost - Fridays app](https://drive.google.com/file/d/0B6JIIawp8JvsRHI1eVNQZ191TUk/view?usp=sharing)