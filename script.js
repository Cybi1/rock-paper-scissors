const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const compVal = ['rock','paper','scissors'];
let humanVal;

function computerPlay() {   
    let rand = Math.floor(Math.random()*compVal.length);
    return compVal[rand];  
}

function humanPlay() {
    return prompt("Enter value:");  
}

function roundPlay(compVal, humanVal) {
    if (compVal == humanVal) {
        return("draw");
    } else if ((compVal === rock && humanVal === paper)||
               (compVal === paper && humanVal === scissors)||
               (compVal === scissors && humanVal === rock)) {
        return("win");
    } else {
        return("lose"); 
    }
}
    
let result = roundPlay(compVal(),humanVal());
console.log(result);

