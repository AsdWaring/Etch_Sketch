# Etch_Sketch

Overview!

Hello! Yes this isn't your typical readme, basically I've decided to use this as a forum to log my progress at addressing the problem.

I started on August 9th and finished August 14th. I learned an exceptional amount working on this.

As always, I could spend the time to make it look prettier. Which I think I will do in the future (functionality has always been a strong point, not so much asthetics, I had to google for a color scheme). I know one should always work on their weaknesses, but I think my plan with that is, to go through ALL my old projects once I'm done to make them prettier as it's own project.

I'm going to give it a couple days and re read my code to see if I can simply it. I really wanted to make the color change buttons into a single piece of code instead of breaking them up into individual addlistner clicks. In my mind it should be possible to combine them all.

August 9th
Okay I am struggling with understanding how to create a grid in CSS so I looked up some code for me to break apart so I can understand the concepts.

It's like learning how to create a button that initiates a function all over again.

I literally had to break the entire code down step by step so I understood how it worked together.

I am really enjoying this, don't let my comments towards a struggle imply that I don't see that struggle as an oppertunity for growth.

----AUGUST 9th! AGAIN!!!

Well - breaking it down I now understand what a CSS variable is, and how javascript can be used to changed the value of that variable.

Which is an essential peice of knowledge I was missing.

it goes like THIS!

SET CSS VARIABLE

:root {
--CSSVARIABLE: Value1;
}

Javascript

container.style.setPorperty("--CSSVARIABLE", NEWVALUE)

--CSSVARIABLE has now changed from Value1 to NEWVALUE.

August 10th!

Well don't use 1em for your grid-item and all will be good.

Thanks stack overflow.

---- I am currently working on how to effectivly have the griditem change color. I have the mouseover function mostly built but I must have a flaw.

August 11th! (It's morning and I got to go to work - and all I want to do is code instead!)

Notes from Javscript file:

figured out that the problem may be the creation of grid item
in the makeRows function. The error "listener event is not a function" indicates that either the element that I am trying add the listener event doesn't exist yet (the code for the listener event initiates before the gridItems are created). If I create a function with an IF statement and have the eventlistener only initiate IF the gridItems have populated it might solve the problem.

----- Yeah so I'll be working on this when I'm back.

----- okay so this evening I got no where

I have been tryting to solve the tracking and color change issue for an hour now and I think it might actually be that I need to create it as a loop to select all the elements for the addeventlistner. Which from what I have read cannot be assigned to multiple elements.

SO tomorrow is a new day. I will be happy when I have overcome this problem - it certainly does stretch the mind and make me do a lot of research on the subject.

I refuse to post on discord for the answer, but I will be browsing for similiar issues that other students have encountered.

Time to push to Git and take a brain break.

August 12th!

Oh joy and happineness and success! So I was wrong. Above about the loop - i did have to use a for each statement, because I was indicating multiple elements with my query selector. So I was on the right track what I did differently was use:

pixel.setAttribute("style", "background-color: white;")

instead of pixel.style.backgroundColor = white.

Thank you random discord Odin Student for posting your code. I was so close to the solution, I just had been googling changing the style rather than googling changing the attribute.

Sometimes its as easy as not understanding the language you should use to pose the question.

Looking at my previous notes I think I can use this logic to change the color variable for the pixels.

AUGUST 13th!

Okay. So creating the reset button and the Change Grid Size button was intuitive when I went to do it today.

I still need to add the ability to change the color of the mouseover. I'm thinking choosing three or four options for gird color to choose from (including black)

August 14th!

Put in the last buttons! And its done!
