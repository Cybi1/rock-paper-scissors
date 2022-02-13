const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const allShapes = ["rock","paper","scissors"];

function computerPlay() {   
    let randomValue = Math.floor(Math.random() * allShapes.length);
    return allShapes[randomValue];  
}

function humanPlay() {
    return prompt("Enter value:");  
}

function roundPlay(allShapes, humanVal) {
    if (allShapes == humanVal) {
        return("draw");
    } else if ((allShapes === rock && humanVal === paper)||
               (allShapes === paper && humanVal === scissors)||
               (allShapes === scissors && humanVal === rock)) {
        return("win");
    } else {
        return("lose"); 
    }
}
    
let result = roundPlay(allShapes(),humanVal());
console.log(result);

