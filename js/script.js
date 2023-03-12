const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    return selectedOption
}

function playGame() {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)

    let playerOptions = document.getElementById("playerOptions");
    let playerChoice = playerOptions.value;
    console.log(playerChoice)

    if (computerChoice == playerChoice) {
        console.log(`${computerChoice} vs. ${playerChoice}: it's a tie!`)
    } else if ((computerChoice == "Rock" && playerChoice == "Scissors")
                || (computerChoice == "Scissors" && playerChoice == "Paper")
                || (computerChoice == "Paper" && playerChoice == "Rock")) {
        console.log("You lose!")
    } else {
        console.log("you win!")
    }
}