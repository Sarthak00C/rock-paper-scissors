function getComputerChoice() {
  const random = Math.floor((Math.random() * 3));
  if (random === 0) return "rock";
  if (random === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  const input = window.prompt("Enter your Input: ");
  return input.toLowerCase();
}

function playRound(human, computer) {

  console.log(`You chose: ${human}`);
  console.log(`Computer chose: ${computer}`);

  if (human === computer) {
    console.log("It's a tie!");
    return "tie";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log("You win this round!");
    return "human";
  } else {
    console.log("Computer wins this round!");
    return "computer";
  } 
}

function PlayGame() {
  let humanScore = 0;
  let computerScore = 0;

  for(let  i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const human = getHumanChoice();
    const computer = getComputerChoice();
    const result = playRound(human, computer);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score → You: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("=== Final Result ===");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie!");
  }
}

PlayGame();

