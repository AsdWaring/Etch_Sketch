# Etch_Sketch

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

Well don't use 1em for you grid-item and all will be good.

Thanks stack overflow.

---- I am currently working on how to effectivly have the griditem change color. I have the mouseover function mostly built but I must have a flaw.

August 11th! (It's morning and I got to go to work - and all I want to do is code instead!)

Notes from Javscript file:

figured out that the problem may be the creation of grid item
in the makeRows function. The error "listener event is not a function"
indicates that either the element that I am trying add the listener event
doesn't exist yet (the code for the listener event initiates before the
gridItems are created). If I create a function with an IF statement and
have the eventlistener only initiate IF the gridItems have populated it might
solve the problem.

----- Yeah so I'll be working on this when I'm back.
