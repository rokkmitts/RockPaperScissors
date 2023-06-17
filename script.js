"use strict";

// manipulate DOM score values //
let playerscore = 0,
  cpuscore = 0;
let scores = [playerscore, cpuscore];
let btn = document.getElementById("button");

// holds answer choices //
let cpuSelection = "",
  playerTyped = "",
  playerSelection = "",
  alertMSG = "";

// correct format of answers //
const answerLIST = ["rock", "paper", "scissors"];

// FX generates cpu answer
function cpuAns(arr) {
  cpuSelection = arr[parseInt(Math.random() * arr.length)];
  return cpuSelection;
}
cpuAns(answerLIST);

//  FX checks entry and appropriately assigns it to variables
btn.addEventListener("click", function () {
  playerTyped = document.getElementById("answer").value.toLowerCase();
  alertMSG = document.getElementById("prompt").value;
  //loop validates string typed and assigns it to playerSelection
  for (let i = 0, length = answerLIST.length; i < length; i++) {
    if (playerTyped == answerLIST[i]) {
      playerSelection = playerTyped;
      return playerSelection;
      break;
    }
  }
});

// FX changes prompt when invalid entry is typed
btn.addEventListener("click", function () {
  //if user did enter a valid string prompt comparison
  if (playerSelection) {
    document.getElementById(
      "prompt"
    ).innerHTML = `${playerSelection} vs ${cpuSelection}`;
    playerSelection = "";
    //if user enter invalid string prompt them
  } else if (!playerSelection) {
    document.getElementById(
      "prompt"
    ).innerHTML = `" ${playerTyped} " is Invalid`;
    playerSelection = "";
  }
  cpuAns(answerLIST);
});
