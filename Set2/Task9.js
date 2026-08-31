// =============================================================================
// Task 9: Countdown Timer & Notification App — Node Timers & Global Objects
// Question:
// → Use setInterval to print the remaining seconds every second, stopping it with clearInterval
//   exactly when the countdown reaches zero.
// → Use a separate setTimeout to trigger a "Time's up!" notification once the countdown ends.
// =============================================================================

function runCountdown(duration) {
  let timeLeft = duration;
  console.log(`Starting countdown from ${timeLeft} seconds:`);
  console.log(`Time left: ${timeLeft}s`);

  // Print remaining seconds every 1 second
  const intervalId = setInterval(() => {
    timeLeft--;
    console.log(`Time left: ${timeLeft}s`);

    // Stop interval exactly when countdown reaches zero
    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  // Separate setTimeout to trigger notification once countdown ends
  setTimeout(() => {
    console.log("Time's up!");
  }, (duration + 0.05) * 1000);
}

// Run a 3-second countdown
runCountdown(3);
