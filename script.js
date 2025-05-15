function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('player-choice').innerText = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
  
    const result = getWinner(playerChoice, computerChoice);
    document.getElementById('winner').innerText = `Result: ${result}`;
  }
  
  function getWinner(player, computer) {
    if (player === computer) return "It's a draw!";
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  