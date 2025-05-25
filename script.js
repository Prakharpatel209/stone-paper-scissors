function play(userChoice) {
  const choices = ['rock', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = `You: ${userChoice}`;
  document.getElementById("computer-choice").innerText = `Computer: ${computerChoice}`;

  const result = getWinner(userChoice, computerChoice);
  document.getElementById("winner").innerText = `Result: ${result}`;
}

function getWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissor') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissor' && computer === 'paper')
  ) {
    return "You Win!";
  }
  return "Computer Wins!";
}
