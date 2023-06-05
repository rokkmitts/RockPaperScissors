//function to generate random CPU choice

function getComputerChoice() {
  //generates a random number between 1 and 3
  const NUMBER_gen = 1 + parseInt(Math.random() * 3);
  console.log(NUMBER_gen);

  if (NUMBER_gen === 1) {
    console.log("Rock");
    return "Rock";
  } else if (NUMBER_gen === 2) {
    console.log("Paper");
    return "Paper";
  } else if (NUMBER_gen === 3) {
    console.log("Scissors");
    return "Scissors";
  }
}

getComputerChoice();
