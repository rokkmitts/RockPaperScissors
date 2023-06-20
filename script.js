"use strict";

let player1Selection, cpuSelection;

let btn = document.getElementById("button");
let prompt;

const answerKey = ["rock", "paper", "scissors"];

// FX generates cpu answer
function cpuAnswerBOT(arr) {
  for (let i = 0, y = arr.length; i < y; i++) {
    cpuSelection = arr[parseInt(Math.random() * y)];
  }
  console.log(cpuSelection);
  return cpuSelection;
}

// FX process player1 typed choice
function player1AnswerTyped(arr) {
  player1Selection = document.getElementById("answer").value.toLowerCase();
  for (let i = 0, y = arr.length; i < y; i++) {
    if (player1Selection === arr[i]) {
      player1Selection == player1Selection;
    }
  }
  console.log(player1Selection);
  return player1Selection;
}

// FX to generate message
function messageBOT(cpu, p1) {
  if (cpu === p1) {
    document.getElementById(
      "prompt"
    ).innerHTML = `Tie; ${player1Selection} vs ${cpuSelection} `;
  } else if (cpu == "rock" && p1 == "paper") {
    document.getElementById("prompt").innerHTML = "paper beats rock";
    document.getElementById("p1-s").innerHTML++;
  } else if (cpu == "rock" && p1 == "scissors") {
    document.getElementById("prompt").innerHTML = "rock beats scissors";
    document.getElementById("cpu-s").innerHTML++;
  } else if (cpu == "paper" && p1 == "rock") {
    document.getElementById("prompt").innerHTML = "paper beats rock";
    document.getElementById("cpu-s").innerHTML++;
  } else if (cpu == "paper" && p1 == "scissors") {
    document.getElementById("prompt").innerHTML = "scissors beats paper";
    document.getElementById("p1-s").innerHTML++;
  } else if (cpu == "scissors" && p1 == "rock") {
    document.getElementById("prompt").innerHTML = "rock beats scissors";
    document.getElementById("p1-s").innerHTML++;
  } else if (cpu == "scissors" && p1 == "paper") {
    document.getElementById("prompt").innerHTML = "scissors beats paper";
    document.getElementById("cpu-s").innerHTML++;
  }
}

//FX stops game when player reaches 5 points
function gameCheck() {
  if (document.getElementById("cpu-s").innerHTML == 5) {
    document.getElementById("prompt").innerHTML = "cpu wins";
    document.getElementById("p1-s").innerHTML = Number(0);
    document.getElementById("cpu-s").innerHTML = Number(0);
  } else if (document.getElementById("p1-s").innerHTML == 5) {
    document.getElementById("prompt").innerHTML = "player1 wins";
    document.getElementById("p1-s").innerHTML = Number(0);
    document.getElementById("cpu-s").innerHTML = Number(0);
  }
}

// FX button click
btn.addEventListener("click", function () {
  cpuAnswerBOT(answerKey);
  player1AnswerTyped(answerKey);
  messageBOT(cpuSelection, player1Selection);
  gameCheck();
});
