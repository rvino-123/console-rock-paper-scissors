// Global Game Object
const game = {
    objectMappings : {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    },
    messages : {
        userChooses: "You Chose ",
        pcChooses: "PC Chose ",
        userWins: "You Won!",
        pcWins: "PC Won!",
        draw: "It's a draw!"
    },
    userScore : 0,
    pcScore : 0
}

// HTML Elements

// Buttons
var rockButton = document.getElementById('Rock');
var paperButton = document.getElementById('Paper');
var scissorButton = document.getElementById('Scissors');

// Spans
var userScoreSpan = document.getElementById('user-score-span');
var pcScoreSpan = document.getElementById('pc-score-span');

// Message Board
var messageList = document.querySelector('.message-list');

// Global game state
var gameRunning = true; 

// Main Function

function playGame(userInput) {
    // Get Input Variables
    var pcInput = game.objectMappings[getPcInput()];

    console.log(`PC Chooses ${userInput}`)
    console.log(`PC Chooses ${pcInput}`)
    // Decides the winner of the round. 
    var winner = playRound(userInput, pcInput);
    console.log(winner)

    // Update Score
    if (winner == 0) {
        game.pcScore += 1;
    } else if (winner == 1) {
        game.userScore += 1;
    } else {
        game.userScore += 1;
        game.pcScore += 1;
    }
    
    refreshScore();
    if (game.pcScore == 5) {
        alert("The winner is PC")
    } else if (game.userScore == 5) {
        alert("You Won!")
    }

}

function getPcInput() {
    return Math.floor(Math.random() * 3 +1)
}

function playRound(userInput, pcInput) {

    // Decide Winner
    if (pcInput == userInput) {
        return 2
    } else if ((pcInput == "Rock" & userInput == "Scissors") || (pcInput == "Paper" && userInput == "Rock") || (pcInput == "Scissors" && userInput == "Paper")) {
        return 0
    } else {
        return 1
    }
}

function refreshScore() {
    userScoreSpan.innerText = `${game.userScore}`
    pcScoreSpan.innerText = `${game.pcScore}`
}


// Event Listeners
rockButton.addEventListener("click", (e) => {
    playGame(e.target.id);
})

paperButton.addEventListener("click", (e) => {
    playGame(e.target.id);
})

scissorButton.addEventListener("click", (e) => {
    playGame(e.target.id);
})

