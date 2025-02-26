
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 3) + 1;

// Get references to the input, button, and result elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');

// Add an event listener to the button to handle guesses
guessButton.addEventListener('click', function() {
    // Get the user's guess from the input
    const userGuess = Number(guessInput.value);

    // Check if the guess is correct, too high, or too low
    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number ${randomNumber}.`;
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again.';
    } else {
        result.textContent = 'Too low! Try again.';
    }
});
