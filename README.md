# RockPaperScissors

<!-- Step 1: (UI) -->

make something retro --The classical rock paper scissors game we've all played... But, with retro distopian vibes

<!-- Step 2: (Plan FUNCTIONALITY) -->

The user must enter their selection; rock, paper scissors with keystrokes.
That value is then compared to a list of correct choices after being converted to lowercase. if it meets the demands it is storeed in playerSelection variable

- THEN....
  *1*if the value is NOT of one of the three choices. prompt the user 'incorrect entry in the message box and clear the answer textfield & reset button
  *2*if the answer is of one of the three choices run the CPU's answer functionand automatically save it to cpuSelection variable
  *2.1*THEN compare the players entry to the computers entry to then score accordingly

<!-- EXAMPLES OF WHAT I LEARNED -->

_\*_
HTML:
<button onClick="answers('paper')">PAPER<button>

_\*_
JS:
let cpuSelection;

//old function to process answers (was to bulky)
function answers(value) {
playerSelection = value;
GENnum = 1 + ParseInt(Math.Random() \* arr.length);
if(GENnum === 1)
cpuSelection === 'rock'
if(GENnum === 1) <!--ANOTHER WAY I ATTEMPTED IT -->
cpuSelection === arr[1]
....etc...etc
}...confusing as Fuh right?!?!?... learned a better way and explained in point 3 below! :D

/_FUNCION I began building before completing my idea _/
// //get value from textbox
// function checkText(arr) {
// playerTyped = document.getElementById("answer").value;

// for (let i = 0, length = arr.length; i < length; i++) {
// if (playerTyped == arr[i]) {
// playerSelection = playerTyped;
// console.log(`Typed value: ${playerSelection}; array value: ${arr[i]}`);
// break;
// }
// }
// }

<!-- Another function i built to help develop the entry check FX -->

// CONCEPTUAL DESIGN FOR BUTTON CLICK FUNCTION
const test = String(prompt("string here").toLowerCase());

function processText(arr, stringTest) {
for (let i = 0, length = arr.length; i < length; i++) {
if (stringTest == arr[i]) {
console.log(
`users value: ${stringTest}, array value: ${arr[i]} \nVALID ENTRY`
);
break;
{
}
}
}
}
processText(answerLIST, test);

THINGS I LEARNED DURING THIS PROJECT
(The learning moments dring this project)
_1_(querySelector; only links to the first class or id of what we pass into it. If there are multiple tags with the same id or class, they will be ignored)
_2_(oldschool: BUT, we can place onlick="" within html tags. within them we can specify functions as a means of invoking them. Furthermore, we can even place a specific ARUGEMENT in the function --NOT parameter-->that arguement will be used in execution)
_3_ A better way to make a variable equate to a random element of an array using arithmatic:
(1) create variable; x, without assignment
(2) create an array with all your 'rules' correct terms/values, etc.
(3) create a function getComputerSelection that takes a parameter (youll pass the array in later)
(4) within the function set variable x to the array. But, create a custom index specification that uses arithmatic to generate a random position
(5) voila you have now set the variable to the actual element
