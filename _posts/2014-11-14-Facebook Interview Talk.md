---
layout: post
title: Preparing for the interview - tips from Facebook
---

Earlier this year, I attended a talk at UNSW given by a recent graduate who now works at Facebook in the US.  He had some solid tips and advice to share and I found it to be a great insight into what I'd expect from the interviewing process from one of the most recognised brands in the industry.  

Interestingly, he remarked that there was a **vast difference in the coding interview performance between applicants from the _US and Australia_**.  Specifically, those from the states were markedly better while the Aussies were worse.  He attributed it to the fact that:

- in the states, colleges offer courses that teach students how to crack the coding interview. They drum into them all the common questions that get asked so when it comes time for the real thing, they can almost recite answers from memory rather than problem solve.  Most if not all Australian universities don't offer such courses.
- Aussies felt that it was kind of cheating to practice answering the same coding interview questions.  

## Interview process
The 3 main things the interview will focus on:

1. Data structures & algs
2. answer probs on whiteboard 
3. resume 
- communicate past experience
- GPA
- Projects
  * Personal impact - did it ship?
  * Languages - only put them in if comfortable talking about it in interview

## Ways to get interview
- get referral from someone in the company
- participate in hackathons and network with those in industry

## Phone interview
- 35 min coding - document screen sharing 
	
## Coding interview
- communicate in **plain english** about code.  
  Don't just stand there thinking to yourself quietly.  Interviewers are interested in **your thought process** on how you tackle the problem.
- think about **engineering trade-offs (speed vs time)**
- **don't feel bad if you can't finish questions or don't have immediate answer.**  It's all about the thought process.
- **the big companies no longer ask puzzles.**   
  It used to be that companies like Google would ask puzzles like 'how many windows are in NYC' as a way to assess your problem solving skills but they found that it had no correlation to the quality of candidates they hired so they've abandoned asking these types of questions now.
- **data structures / algorithms** is extremely important. 
- know your **common library functions** eg. strstr
- when preparing, **implement not memorise**
- know **computational complexity** (space and time tradeoffs)

## During interview
- ask lots of questions until you fully understand problem space and constraints
- draw pictures
- interviewers don't give hints so don't ask
- focus on getting a working solution first if you don't know the optimal solution, then work towards it

#### Example problems 
1. Given an array of size N in which every no. is between 1 and N, determine if there are any duplicates.  
   Things to think about:  
   - can array be empty?  
   - are numbers ints/floats...?
   - test cases
   - sol'n: add up all the ints
2. linked list questions are common so consider:
  * singly linked
  * full loops
  * modify nodes
3. My memory is foggy on the last problem since it was 6 months ago when I attended the talk but I think the problem is similar to [this one][1]
  - Given the method signature `int[][] spiral(int n);`
  - if n=4, create 4x4 array of no. spiralling to center
  - sol'n: notice pattern, four for loops each going in one direction for the outer loop, then recurse

## Personal projects
- they may ask about most recent, challenging, favourite project

[1]:http://www.codechef.com/problems/TIC05


