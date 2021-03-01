const getRandomInt = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
};

const computerPlay = () => {
  const choice = getRandomInt(3);
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "scissors";
    default:
      return "paper";
  }
};

const playRound = (playerSelection, computerSelection) => {
  console.log("player: ", playerSelection);
  console.log("computer: ", computerSelection);
  if (playerSelection === computerSelection) {
    console.log("draw");
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins++;
    console.log("player wins");
  } else {
    computerWins++;
    console.log("computer wins");
  }
};

let playerWins = 0;
let computerWins = 0;

const game = () => {
  let turns = 0;
  while (turns < 5) {
    const playerSelection = window
      .prompt("paper, scissors or rock")
      .toLocaleLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    turns++;
  }
  console.log("Player Wins: ", playerWins);
  console.log("Computer Wins: ", computerWins);
};

game();
