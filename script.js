document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;

  // Variable to store the user's guess
  let guess = 0;

  // Use a for loop to give the player 5 attempts
  let attempts = 0; // Track the number of attempts used
  for (let i = 1; i <= 5; i = i + 1) {
    // Ask the user for a guess
    let input = prompt('Guess a number between 1 and 10:');
    // Convert the input to a number
    guess = Number(input);
    // Increase the attempt count
    attempts = i;

    // Check if the guess is correct
    if (guess === secretNumber) {
      // Show success message on the page
      document.getElementById('message').textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      // Stop the loop if guessed correctly
      break;
    } else if (guess > secretNumber) {
      // Give a hint if the guess is too high
      alert('Too high! Try again.');
    } else if (guess < secretNumber) {
      // Give a hint if the guess is too low
      alert('Too low! Try again.');
    }
  }

  // If the player did not guess correctly in 5 attempts
  if (guess !== secretNumber) {
    document.getElementById('message').textContent = `❌ Game over! The number was ${secretNumber}.`;
  }
});