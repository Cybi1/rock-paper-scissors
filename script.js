const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const ALL_SHAPES = [ROCK,PAPER,SCISSORS];

function computerPlay() {   
    const randomValue = Math.floor(Math.random() * ALL_SHAPES.length);
    return ALL_SHAPES[randomValue];  
}

function humanPlay() {
    let humanVal = prompt("Enter value:");
    return humanVal;  
}

function roundPlay(ALL_SHAPES,humanVal) {
    if (ALL_SHAPES == humanVal) {
        return("draw");
    } else if ((ALL_SHAPES === ROCK && humanVal === PAPER)||
               (ALL_SHAPES === PAPER && humanVal === SCISSORS)||
               (ALL_SHAPES === SCISSORS && humanVal === ROCK)) {
        return("win");
    } else {
        return("lose"); 
    }
}
    
let result = roundPlay(computerPlay(),humanPlay());
console.log(result);

