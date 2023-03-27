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
const tableRow = document.querySelector("table");

// get computer choice and return it
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    return selectedOption
}

// for each button, add an event listener that runs the playgame
// function on click
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        playGame(button.dataset.value)
    });
});

// main function that starts and manages game logic, called when
// clicking on any player button
function playGame(buttonValue) {
    let computerChoice = getComputerChoice();
    computerChoiceMade.innerHTML = `Computer: ${computerChoice}`;

    let playerChoice = buttonValue;
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

    let newRow = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        let newTableData = document.createElement("td");
        if (i == 0) {
            newTableData.textContent = playerChoice;
        } else if (i == 1) {
            newTableData.textContent = computerChoice;
        } else {
            newTableData.textContent = singleGameResults.textContent;
        };
        newRow.append(newTableData);
        tableRow.append(newRow);
    }
}