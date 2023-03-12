// define possible options for computer choice and other variables
const options = ["Rock", "Paper", "Scissors"];
let wins = 0;
let losses = 0;
let ties = 0;

// get document sections
const computerChoiceMade = document.getElementById("computerChoice");
const playerChoiceMade = document.getElementById("playerChoice");
const singleGameResults = document.getElementById("singleGameResults");
const globalGameResults = document.getElementById("globalGameResults");

// get computer choice and return it
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    return selectedOption
}

// main function that starts and manages game logic, called when
// clicking on #playerButton
function playGame() {
    let computerChoice = getComputerChoice();
    computerChoiceMade.innerHTML = `Computer: ${computerChoice}`;

    let playerOptions = document.getElementById("playerOptions");
    let playerChoice = playerOptions.value;
    playerChoiceMade.innerHTML = `Player: ${playerChoice}`;

    if (computerChoice == playerChoice) {
        singleGameResults.innerHTML = "It's a tie!";
        ties++;
    } else if ((computerChoice == "Rock" && 
        playerChoice == "Scissors") ||
        (computerChoice == "Scissors" && 
        playerChoice == "Paper") ||
        (computerChoice == "Paper" && 
        playerChoice == "Rock")) {
            singleGameResults.innerHTML = "You lost!";
            losses++;
    } else {
        singleGameResults.innerHTML = "You won!";
        wins++;
    }
    
    globalGameResults.innerHTML = `Wins: ${wins} - Losses: ${losses} - Ties: ${ties}`;
}