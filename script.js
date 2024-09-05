function getComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("Tie! Rock and Rock are equal!");
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock!");              
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors!");
                    humanScore += 1;
                    break;
            }
        break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock!");                 
                    humanScore += 1;
                    break;
                case "paper":
                    console.log("Tie! Paper and Paper are equal");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beat Paper!");
                    computerScore += 1;
                    break;
            }
        break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissors!");
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("You win! Scissors beat paper!");
                    humanScore += 1;
                    break;
                case "scissors":
                    console.log("Tie! Paper and Paper are equal");
                    break;
            }
            break;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerResult = getComputerChoice();
        let humanResult = getHumanChoice();
        playRound(humanResult, computerResult);
    }
    console.log(humanScore);
    console.log(computerScore);
}


playGame();
