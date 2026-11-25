let wins = 0;
let losses = 0;
let draws = 0;

let results = [];
let gameStarted = false;

function startGame() {

    let name = document.getElementById("playerName").value.trim();

    // Validate player name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("welcome").innerHTML = "Welcome, ";
    document.getElementById("welcome").append(name + "!");

    document.getElementById("startTime").innerHTML =
        "Game started on: " + Date();

    gameStarted = true;
}

// Generate a random computer choice
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let index = Math.floor(Math.random() * 3);

    return choices[index];
}

function playRound(playerChoice) {

    // Check whether the game has started
    if (gameStarted === false) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();
    let result;
    let color;

    // Determine the result
    if (playerChoice === computerChoice) {

        result = "Draw";
        color = "grey";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        color = "green";
        wins++;

    } else {

        result = "Lose";
        color = "red";
        losses++;
    }

    // Change player and computer images
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Display result and change its colour
    document.getElementById("result").innerHTML =
        result;

    document.getElementById("result").style.color =
        color;

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result in array
    results.push(result);

    // Add a new row to the history table
    document.getElementById("historyBody").innerHTML +=
        "<tr>" +
        "<td>" + results.length + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td style='color:" + color + "'>" + result + "</td>" +
        "</tr>";

    document.getElementById("summary").innerHTML = "";
}

function showSummary() {

    let totalWins = 0;
    let totalRounds = results.length;

    // Count wins using a for loop
    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }
    }

    // Calculate win percentage
    let percentage = 0;

    if (totalRounds > 0) {

        percentage = Math.round(
            (totalWins / totalRounds) * 100
        );
    }

    // Display summary
    document.getElementById("summary").innerHTML =
        "You played " + totalRounds +
        " rounds and won " + percentage + "%.";
}

function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;

    results = [];

    gameStarted = false;

    // Reset scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear history and messages
    document.getElementById("historyBody").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";

    // Reset player name
    document.getElementById("playerName").value = "";

    // Reset images
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";
}