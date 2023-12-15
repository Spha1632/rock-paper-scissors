let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const RPS = ["rock", "paper", "scissors"];

    return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`;
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`;

    } else {
        computerScore++;
        return `You lose! You chose ${playerSelection} and Computer chose ${computerSelection}`;
        
    }
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const playerScoreResults = document.querySelector("#playerScore");
const computerScoreResults = document.querySelector("#computerScore");


rock.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    results.textContent = playRound("rock", computerSelection);
    updateScore();
    checkWinner();
});
paper.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    results.textContent = playRound("paper", computerSelection);
    updateScore();
    checkWinner();
});
scissors.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    results.textContent = playRound("scissors", computerSelection);
    updateScore();
    checkWinner();
});

function updateScore() {
    playerScoreResults.textContent = playerScore;
    computerScoreResults.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5) {
      results.textContent = "Congratulations! You won the game!";
      resetGame();
    } else if (computerScore === 5) {
      results.textContent = "Sorry! Computer won the game.";
      resetGame();
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

