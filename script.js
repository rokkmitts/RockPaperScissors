"use strict";

// variables for game functionality
let player1Answer, cpuAnswer;
let aKey = ["rock", "paper", "scissors"];

// DOM  elements; prompt("#prompt"), player1Score("#player1Score") & cpuScore("#cpuScore")
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const prompt = document.querySelector("#prompt");

//DOM - button elements
const buttons = document.querySelectorAll(".Btn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#srsBtn");

//function to generate computers answer
function answerGenerator() {
  cpuAnswer = aKey[parseInt(Math.random() * 3)];
  return cpuAnswer;
}

//function gameRoundChecker/restarter
function roundBase() {
  let winner;

  cpuScore.textContent > playerScore.textContent
    ? (winner = "cpu")
    : (winner = "user");
  if (cpuScore.textContent == 5 || playerScore.textContent == 5) {
    prompt.textContent = `winner: ${winner} . . .game over!`;

    buttons.forEach(function (element) {
      element.disabled = true;
    });
    setTimeout(function () {
      window.location.reload(1);
    }, 5000);
  }
}

//function to compare answers
function proctor() {
  if (player1Answer === cpuAnswer) {
    prompt.textContent = "tie";
  } else if (player1Answer === aKey[0] && cpuAnswer === aKey[1]) {
    cpuScore.textContent++;
    prompt.textContent = ` ${cpuAnswer} beats ${player1Answer}`;
  } else if (player1Answer === aKey[0] && cpuAnswer === aKey[2]) {
    playerScore.textContent++;
    prompt.textContent = ` ${player1Answer} beats ${cpuAnswer}`;
  } else if (player1Answer === aKey[1] && cpuAnswer === aKey[0]) {
    playerScore.textContent++;
    prompt.textContent = ` ${player1Answer} beats ${cpuAnswer}`;
  } else if (player1Answer === aKey[1] && cpuAnswer === aKey[2]) {
    cpuScore.textContent++;
    prompt.textContent = ` ${cpuAnswer} beats ${player1Answer}`;
  } else if (player1Answer === aKey[2] && cpuAnswer === aKey[0]) {
    cpuScore.textContent++;
    prompt.textContent = ` ${cpuAnswer} beats ${player1Answer}`;
  } else if (player1Answer === aKey[2] && cpuAnswer === aKey[1]) {
    playerScore.textContent++;
    prompt.textContent = ` ${player1Answer} beats ${cpuAnswer}`;
  } else {
    return false;
  }
}
// total button functionality
buttons.forEach(function (element) {
  element.addEventListener("click", function () {
    player1Answer = element.innerText.toLowerCase();
    answerGenerator();
    proctor();
    roundBase();
  });
});
