const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

let result = document.getElementById("result");
result.setAttribute("style", "white-space: pre;");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerScore += 0.5;
    computerScore += 0.5;
    result.textContent = `It's a DRAW! You both played ${computerSelection}.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    result.textContent = `You LOSE! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    result.textContent = `You WIN! ${playerSelection} beats ${computerSelection}`;
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function checkScores() {
  if (playerScore >= 5 || computerScore >= 5) {
    let score = `FINAL SCORE:\n\tYou:\t\t${playerScore}\n\tComputer:\t${computerScore}\n`;

    if (playerScore === computerScore) {
      result.textContent = score + "The game is DRAWN!";
    } else if (playerScore < computerScore) {
      result.textContent = score + "You LOST the game!";
    } else {
      result.textContent = score + "You WON the game!";
    }

    playerScore = computerScore = 0;
  }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  checkScores();
});
paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  checkScores();
});
scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
  checkScores();
});
