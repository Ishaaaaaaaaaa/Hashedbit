let startTime;
let elapsedTime = 0;
let timerInterval;

// Function to update the stopwatch display
function updateDisplay() {
  const ms = elapsedTime % 1000;
  const s = Math.floor(elapsedTime / 1000) % 60;
  const m = Math.floor((elapsedTime / 1000) / 60);
  const formattedTime = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
  document.getElementById("display").textContent = formattedTime;
}

// Function to start the stopwatch
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateDisplay, 10); // Update display every 10 milliseconds
}

// Function to pause the stopwatch
function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
}

// Function to reset the stopwatch
function resetTimer() {
  clearInterval(timerInterval);
  startTime = undefined;
  elapsedTime = 0;
  updateDisplay();
}

// Add event listeners to buttons (assuming you have buttons with these IDs)
document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);
