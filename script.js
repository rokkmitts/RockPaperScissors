"use strict";

let player1Score = 0;
let cpuScore = 0;

let player1Selection, cpuSelection;

let prompt;

const answerKey = ["rock", "paper", "scissors"];

// FX generates cpu answer
function answerBOT(arr) {
  for (let i = 0, y = arr.length; i < y; i++) {
    cpuSelection = arr[parseInt(Math.random() * y)];
  }
  console.log(cpuSelection); //
}

answerBOT(answerKey);
