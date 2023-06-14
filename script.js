"use strict";
//
// manipulate DOM score values //
// NOTE TO SELF: (querySelector only attaches to the first class or id that matches whats passed into it)
const playerscore = document.querySelector(".player-score");
const cpuscore = document.querySelector(".cpu-score");
//
// variables cpu and player1 answers
let cpuSelection, playerSelection;
//
// answers array (for the function; choice algorithm)
const answerChoices = ["rock", "paper", "scissors"];
//
//
/*
- assigns playerSelection value
- invoke this FX when UI buttons are clicked ()
-for loop does this -> embedded onlick="plyr(value)" within button tags
-learned about window.onclick (delays js for html loadup)
-learned that my 'btns' variable was an object/array (makes sense after thinking about it)
- in for loop;
-the 'btn' variable allows me to place events on them
// PROBLEM: 🔽
 on page loadup we get undefined AND playerSelection lags value changewhen buttons are clicked
*/
function plyrFX(value) {
  for (let i = answerChoices[0]; i < answerChoices.length; i++) {
    console.log(i);
    for (const btn of btns) {
      btn.addEventListener("click", function assigner() {
        btn.value;
        playerSelection = value;
      });
    }
  }

  console.log(playerSelection);
  return playerSelection;
}
// plyrFX();
//
//
// function to control game rounds
// on button click assign button parameter/'string' value to

// provoke assignment in function by; playerSelection = to function(value)
// ***NOTE: problems occured LEARNING POINT
// ------js loads before html so utilizing window.onload will allow the entire UI to load which ultimately allows js to find the html doc containing elements, id, etc. that we reference

//
//
// generates cpu and USER choice based off random number generator; MATHgen and button clicked//
// NOTE: parameter; 'value' is fulfilled in HTML doc with string per 'btn' tag
function choice() {
  // num gen are converted to string
  const MATHgen = 1 + parseInt(Math.random() * answerChoices.length);

  if (MATHgen == 1) {
    cpuSelection = answerChoices[0];
  } else if (MATHgen == 2) {
    cpuSelection = answerChoices[1];
  } else if (MATHgen == 3) {
    cpuSelection = answerChoices[2];
  }
  console.log(cpuSelection);
  // return cpuSelection;
}
