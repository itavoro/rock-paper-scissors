const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('#result');

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

let computerScore = 0;
let humanScore = 0;

function playRock() {
    const computerChoice = getComputerChoice();
    switch (computerChoice) {
        case "rock":
            div.textContent = "Tie! Rock and Rock are equal!";
            break;
        case "paper":
            div.textContent = "You lose! Paper beats rock!"    ;      
            computerScore += 1;
            break;
        case "scissors":
            div.textContent = "You win! Scissors beat rock!";
            humanScore += 1;
            break;
    }
}


function playPaper() {
    const computerChoice = getComputerChoice();
    switch (computerChoice) {
        case "rock":
            div.textContent = "You win! Paper beats Rock!";
            humanScore += 1;
            break;
        case "paper":
            div.textContent = "Tie! Paper and Paper are equal";
            break;
        case "scissors":
            div.textContent = "You lose! Scissors beat Paper!";
            computerScore += 1;
            break;
    }
}


function playScissors() {
    const computerChoice = getComputerChoice();
    switch (computerChoice) {
        case "rock":
            div.textContent = "You lose! Rock beats scissors!";
            computerScore += 1;
            break;
        case "paper":
            div.textContent = "You win! Scissors beat paper!";
            humanScore += 1;
            break;
        case "scissors":
            div.textContent = "Tie! Paper and Paper are equal";
            break;
    }
}


rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);


/*function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerResult = getComputerChoice();
        let humanResult = getHumanChoice();
        playRound(humanResult, computerResult);
    }
    console.log(humanScore);
    console.log(computerScore);
}


playGame();*/



