

function getComputerChoice() {
    const RPS = ["rock", "paper", "scissors"];

    return RPS[Math.floor(Math.random() * 3)];
}

/* function getPlayerChoice() {
    return prompt("Enter rock, paper or scissors").toLowerCase();
} */

let playerScore = 0;
let ComputerScore = 0;

let message;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        //alert(`Tie! You chose ${playerSelection} and Computer chose ${computerSelection}`);
        return `Tie! You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        //alert(`You win! You chose ${playerSelection} and Computer chose ${computerSelection}`);
        playerScore++;
        `You win!  You chose ${playerSelection} and Computer chose ${computerSelection}`;
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        //alert(`You win! You chose ${playerSelection} and Computer chose ${computerSelection}`);
        playerScore++;
        return `You win!  You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        //alert(`You win! You chose ${playerSelection} and Computer chose ${computerSelection}`);
        playerScore++;
        return `You win!  You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else {
        //alert(`You lose! You chose ${playerSelection} and Computer chose ${computerSelection}`);
        ComputerScore++;
        return `You lose!  You chose ${playerSelection} and Computer chose ${computerSelection}`;
        
    }
}


    
//const playerSelection = getPlayerChoice();
let playerSelection;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results")
const score = document.querySelector("#score")



rock.addEventListener("click", function () {
    results.textContent = playRound("rock", computerSelection);
});
paper.addEventListener("click", function () {
    results.textContent = playRound("paper", computerSelection);
});
scissors.addEventListener("click", function () {
    results.textContent = playRound("scissors", computerSelection);
});

score.textContent = playerScore;