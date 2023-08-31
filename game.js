const choices = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a DRAW! You both played ${computerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    return `You LOSE! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You WIN! ${playerSelection} beats ${computerSelection}`;
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection;
    let failedAttempts = 0;

    while (true) {
      playerSelection = prompt("What's your move?");
      if (!playerSelection) {
        failedAttempts++;
        if (failedAttempts === 5) {
          console.log("Something went wrong!");
          return;
        }
        console.log("Please make a move.");
        continue;
      }
      playerSelection =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase();

      if (choices.includes(playerSelection)) {
        break;
      } else {
        console.log("That's not a valid move!");
      }
    }

    const computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if (result.includes("DRAW")) {
      playerScore += 0.5;
      computerScore += 0.5;
    } else if (result.includes("LOSE")) {
      computerScore++;
    } else {
      playerScore++;
    }

    console.log(result);
  }

  console.log(`FINAL SCORE:
  You:      ${playerScore}
  Computer: ${computerScore}
  `);
  if (playerScore === computerScore) {
    console.log("The game is DRAWN!");
  } else if (playerScore < computerScore) {
    console.log("You LOST the game!");
  } else {
    console.log("You WON the game!");
  }
}

game();
