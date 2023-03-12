const options = ["Rock", "Paper", "Scissors"];

const computerChoiceMade = document.getElementById("computerChoice");
const playerChoiceMade = document.getElementById("playerChoice");
const singleGameResults = document.getElementById("singleGameResults");
const globalGameResults = document.getElementById("globalGameResults");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    return selectedOption
}

let wins = 0;
let losses = 0;
let ties = 0;

function playGame() {
    let computerChoice = getComputerChoice();
    computerChoiceMade.innerHTML = `Computer: ${computerChoice}`;

    let playerOptions = document.getElementById("playerOptions");
    let playerChoice = playerOptions.value;
    playerChoiceMade.innerHTML = `Player: ${playerChoice}`;

    if (computerChoice == playerChoice) {
        singleGameResults.innerHTML = "It's a tie!";
        ties++;
    } else if ((computerChoice == "Rock" && playerChoice == "Scissors")
                || (computerChoice == "Scissors" && playerChoice == "Paper")
                || (computerChoice == "Paper" && playerChoice == "Rock")) {
        singleGameResults.innerHTML = "You lost!";
        losses++;
    } else {
        singleGameResults.innerHTML = "You won!";
        wins++;
    }
    globalGameResults.innerHTML = `Wins: ${wins} - Losses: ${losses} - Ties: ${ties}`;
}