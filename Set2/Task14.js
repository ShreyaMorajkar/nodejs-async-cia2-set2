// =============================================================================
// Task 14: Countdown Timer & Notification App — Recursive Functions, Event Loop Execution Flow & EventEmitter
// Question:
// → Create an EventEmitter named countdownEmitter that emits a 'timeUp' event when the countdown reaches zero.
// → Add a listener that logs "Notification: Time is up!" whenever 'timeUp' fires.
// =============================================================================

const EventEmitter = require('events');

// Instantiate EventEmitter
const countdownEmitter = new EventEmitter();

// Register listener for the 'timeUp' event
countdownEmitter.on('timeUp', () => {
  console.log("\n=========================================");
  console.log("Notification: Time is up!");
  console.log("=========================================");
});

// Countdown function that emits 'timeUp' event when reaching 0
function startCountdownWithEmitter(duration) {
  let timeLeft = duration;
  console.log(`Starting countdown for ${timeLeft} seconds...`);
  console.log(`Time left: ${timeLeft}s`);

  const timer = setInterval(() => {
    timeLeft--;
    console.log(`Time left: ${timeLeft}s`);

    if (timeLeft <= 0) {
      clearInterval(timer);
      // Emit the 'timeUp' event when countdown finishes
      countdownEmitter.emit('timeUp');
    }
  }, 1000);
}

// Run countdown for 3 seconds
startCountdownWithEmitter(3);
