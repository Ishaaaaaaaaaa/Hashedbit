const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const messageEl = document.getElementById('message');

// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);

  // Check for valid input
  if (isNaN(guess)) {
    messageEl.textContent = "Please enter a valid number.";
    return;
  }

  const distance = Math.abs(guess - secretNumber);
  let message;

  if (guess === secretNumber) {
    message = "Congratulations! You guessed the number.";
  } else if (distance < 10) {
    message = "Hot! You're very close.";
  } else if (distance < 20) {
    message = "Warm! Getting closer.";
  } else if (distance < 50) {
    message = "Lukewarm. Keep guessing.";
  } else {
    message = "Cold. Try again.";
  }

  messageEl.textContent = message;
});
