---
layout: post
title: How to spot a good regex from a bad one
categories: [coding]
tags: [regex]
date: 2015-06-25 11:29:00 +1000
excerpt: In this article, some of the inner workings of the regex engine are uncovered.  Where does the engine start to look for the pattern? What steps does it take to process the string and how does it end up finding or not finding a match? The answers lead us to discover the hallmarks for good/bad patterns.   
---

Regular expressions (sometimes shortened to _regex_) are a useful string manipulation feature built into many scripting and programming languages that allow you to specify a pattern consisting of a sequence of characters and symbols to be searched in a larger string.

In [Regexes: the Bad, the Better and the Best][1], an example of a bad regular expression is used to explain the additional cyles required by the engine as it explores all possible paths in the string.  Unsurprisingly, patterns that unneccessarily specify the 0 or more quantifier * consume many cycles as they cause the engine to flip back and forth as it backtracks to find the largest string then moves forward to find the next part of the pattern.  

In stark contrast, a good regex consumes far less cycles to find a match.  Generally, matched patterns will be found somewhere during the middle of the search whilst non matches need to cover the entire search space.  It makes sense to therefore construct regexes that throw out nonmatches as quickly as possible.  

In general, the better patterns will be more specific.  Instead of using the dot which signifies any character except newline, specify a character class of what to match or what not to match.  Instead of using the greedy * quantifier which scans right to left, use it's non-greedy complement *? which scans left to right.

At the end of the article is a benchmark showdown between the bad, better and best regexes which incontrovertibly highlights the performance benefits.  The first test matched 1 million _non-matching lines_ against a pattern. A whopping time difference by a factor of 40 between the bad and best!  The second test matched 1 million _matching lines_ against a pattern yielding a time difference by a factor of 20.

[Read it here][1]

[1]:https://www.loggly.com/blog/regexes-the-bad-better-best/