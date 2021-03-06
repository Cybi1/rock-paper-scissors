const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const ALL_SHAPES = [ROCK, PAPER, SCISSORS];

function computerPlay() {   
    const randomValue = Math.floor(Math.random() * ALL_SHAPES.length);
    return ALL_SHAPES[randomValue]; 
}

function humanPlay() {
    return prompt("Enter value:");
}

function roundPlay(computerValue, humanValue) {
  if (computerValue === humanValue) return("draw");
  if ((computerValue === ROCK && humanValue === PAPER) || 
      (computerValue === PAPER && humanValue === SCISSORS) || 
      (computerValue === SCISSORS && humanValue === ROCK)) {
    return("win");
  }

  return("lose");
} 

let result = roundPlay(computerPlay(), humanPlay());
console.log(result);
