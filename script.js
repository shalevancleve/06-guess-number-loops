document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  
  // Initialize the number of attempts
  let guess = 0;
  let attempts = 0;

  // Loop to give the player 5 attempts
  for (attempts = 1; attempts <= 5; attempts++) {
    // Prompt the player to enter a guess
    guess = parseInt(prompt('Enter your guess (between 1 and 10):'), 10);

    // Check if the guess is correct
    if (guess === secretNumber) {
      document.getElementById('message').textContent = `🎉 Congratulations! You guessed it in ${attempts} attempt${attempts > 1 ? 's' : ''}.`;
      return;
    } else if (guess > secretNumber) {
      alert('Too high! Try again.');
    } else if (guess < secretNumber) {
      alert('Too low! Try again.');
    }
  }

  // If the player runs out of attempts
  document.getElementById('message').textContent = `❌ Game over! The number was ${secretNumber}.`;
});