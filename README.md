# RockPaperScissors

<!-- Step 1: (UI) -->

Retro themed Rock Paper Scissors game

<!-- Step 2: (HOW IT WORKS) -->

_1_ on button click, a function must process random answer and assign it to; cpuSelection
_2_ simutaneously the text box value is check against answerKey array. Based off the value it is either saved or the user it told to enter a valid value
_3_ valid values are stored in playerSelection and another function compares it aginst cpuSelection
_4_ The outcome will favor the winner; +1 points and annoucing who won the round
_5_ when either player reaches 5 points the UI resets the window

<!-- THINGS LEARNED DURING THIS PROJECT -->

_1_ querySelector; links to the first class or id ONLY. multiple uses will be ignored after the first declaration
_2_ A better way to make a variable equate to a random element of an array using arithmatic:
_3_ Dont forget initial variable declarations without assigning them value

/\*
Regarding HTML:
The; onlick="" within html tags allows us to pass function calls directly with a specific arguement value.

Regarding JS: (different use cases)
innerHTML: allowed me to change the h1 text based on variable values
textContent:
Value: allowed me to target input textbox text and store it in a variable
window.onload:
\*/
