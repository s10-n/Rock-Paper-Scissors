// Set the player and computer scores to 0
let playerScore = 0;
let computerScore = 0;

// Create the scoreboard as a DOM object
let scoreboard = document.querySelector(".scoreboard");

// Create a function that randomly returns "Rock", "Paper", or "Scissors"
// Function requires no output and will return a string
function getComputerChoice() {
    // Have an array containing Rock, paper, and scissors
    let moveList = ["Rock","Paper","Scissors"];
    // Select a random number between zero and three
    let moveNumber = Math.floor(Math.random() * moveList.length);
    // Return the list item with the index of the random number
    return moveList[moveNumber];
}

// Create a function that takes in two RPS moves
// If move 1 beats move 2, return true
// If move 2 beats move 1, return false
function checkIfPlayerWins(move1, move2){
    // If move 1 is Rock:
    // Scissors returns True, paper returns false
    if (move1 === "Rock") {
        if (move2 === "Scissors") {
            return true;
        }
        else if (move2 === "Paper") {
            return false;
        }
    }
    // If move 1 is Paper:
    // Rock returns True, scissors returns false
    if (move1 === "Paper") {
        if (move2 === "Rock") {
            return true;
        }
        else if (move2 === "Scissors") {
            return false;
        }
    }
    // If move 1 is Scissors:
    // Paper returns True, rock returns false
    if (move1 === "Scissors") {
        if (move2 === "Paper") {
            return true;
        }
        else if (move2 === "Rock") {
            return false;
        }
    }
}

// Create a function that cleans up player input
function cleanUpInput(playerSelection) {
    // Capitalize the first letter, then make the rest lowercase
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

// Function that updates the scoreboard with the current score
function updateScoreboard() {
    scoreboard.textContent = `Score: Human ${playerScore}, Computer ${computerScore}`;
};

// Function that checks if the game is over
// If either player has scored 5 points, change the message to reflect this and reset the scores.
function checkIfGameOver() {
    return (playerScore >=5 || computerScore >= 5);
}

// Create a function that plays a single round of Rock Paper Scissors
// function takes a player selection and computer selection
// If the move is invalid (not Rock, Paper, or Scissors):
    // function returns false
// Otherwise: 
    // Returns a string declaring the winner and winning move

function playRound(playerSelection, computerSelection) {

    // Check if the player wins or not
    // Return the results
    if (playerSelection === computerSelection) {
        return `${playerSelection} ties ${computerSelection}.`;
    }
    
    if (checkIfPlayerWins(playerSelection,computerSelection)) {
        playerScore++;
        updateScoreboard();     
        return `Nice move! ${playerSelection} beats ${computerSelection}.`
    }
    else {
        computerScore++;
        updateScoreboard();
        return `Dang it. ${computerSelection} beats ${playerSelection}.`
    }
}

let buttons = document.querySelectorAll(".move-button");
let message = document.querySelector(".message");

buttons.forEach((button) => {
    button.addEventListener('click', function (){
        message.textContent = playRound(this.textContent,getComputerChoice());
        if (playerScore >=5 ||
            computerScore >= 5) {
                message.textContent = playerScore > computerScore ? " Congratulations, you win! Press any button to play again." : " Sorry, you lose. Press any button to play again.";
                playerScore = 0; computerScore = 0;
            };
    })
});