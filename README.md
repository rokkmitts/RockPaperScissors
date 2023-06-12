# RockPaperScissors

<!--
The classical rock paper scissors game we've all played... But, with retro distopian vibes

<!-- DESIGN GOALS-->

Step 1:
Create a fundamental interface with a retro theme. Only develop functionality for the scores, message box and button

Step 2: (Plan Functionality)

- for DOM manipulation create variables for all HTML score elements
- NOTE: querySelector("") ONLY attaches to the FIRST id or class with a matching name

- <!-- FUNCTIONALITY GOALS -->

<!-- Create a function that handles user and cpu answer choice selections -->
<!-- #1) Must generate a random number which will be paired with a string value-->

- MATHgen (variable containing the algorithm that generates random num)
- condition those numbers to return a string value
- string values are contained in a globally set array which will be assigned to cpuAnswer
- use HTML onClick="" event on each button and within it set the same function. But, pass it a string arguement which equals its value. Within the frunction we can set that string input to the player/users answer variable
something like;
<!-- 
HTML:
<button onClick="answers("paper")">PAPER<button>

JS:
function answers(value) {
playerSelection = value;

GENnum = 1 + ParseInt(Math.Random() \* arr.length);
if(GENnum === 1)
make cpuSelection === arr[0]
....etc...etc
}

-->

<!-- #2)  Must play a single game round-->

- this function must iterate an entire game round AND repeat everytime specific events occur
- must compar player1 and cpu Selections
- must determine the winner based off string values
- must +1 point to the player that wins the match
- must calculate player1 highest score and ONLY reset on page reload
- must stop game and reset points when a players score reaches 5 points
