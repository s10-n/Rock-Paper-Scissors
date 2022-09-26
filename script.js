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

// Create a function that plays a single round of Rock Paper Scissors
// function takes a player selection and computer selection
// If the move is invalid (not Rock, Paper, or Scissors):
    // function returns false
// Otherwise: 
    // Returns a string declaring the winner and winning move

function playRound(playerSelection, computerSelection) {
    // Clean up player input
    playerSelection = cleanUpInput(playerSelection);
    // Make sure that player has provided a valid input
    // If player entered anything other than Rock, Paper, or Scissors:
    if (playerSelection !== "Rock" &&
        playerSelection !== "Paper" &&
        playerSelection !== "Scissors") {
            // Return false
            return false;
    }
    // Otherwise:
    else {
        // Check if the player wins or not
        // Return the results
        if (checkIfPlayerWins(playerSelection,computerSelection)) {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        }
    }
}


// Create a game loop function
function game() {
    // Set the player scores to 0
    let playerScore = 0;
    let computerScore = 0;
    // Announce that the game has started
    console.log("Welcome to Rock Paper Scissors!");
    // Prompt the player for their move
    let playerChoice = prompt("What's your move?");
    // Generate the computer's choice
    let computerChoice = getComputerChoice();
    // Judge the the round

    // If the round is a tie
    if (playerChoice === computerChoice) { 
        // Announce the tie
        console.log(`${playerChoice} ties ${computerChoice}. Try again.`);
        // Add nothing to the scoreboard and repeat.
    }

    // If the round isn't a tie:
    else {
        // Determine the winner
        let playerWon = checkIfPlayerWins(playerChoice,computerChoice);
        // Assign the results of the round to a variable
        let roundResults = playRound(playerChoice,computerChoice);
        // roundResults will be false if the player input an invalid move,
        // and true otherwise.
        
        // If the round has results (wasn't invalid): 
        if (roundResults) {
            // Add the results of the round to the total score
            playerWon ? playerScore++ : computerScore++;
            // Announce the results of the round
            console.log(playRound(playerChoice,computerChoice));
            // Announce game score
            console.log(`The score so far: Human ${playerScore}, Computer ${computerScore}.`);
        }
        else {
            console.log(`"${playerChoice}" is not a valid move. Try "Rock", "Paper", or "Scissors".`);
        }
    }
    
    // Repeat for five rounds
    // After five rounds, announce the score and congratulate the winner
}
