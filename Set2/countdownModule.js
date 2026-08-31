// =============================================================================
// Task 15: Countdown Timer & Notification App — Node Modules
// File: countdownModule.js
// Description: Local module exporting countdown helper functions and EventEmitter
// =============================================================================

const EventEmitter = require('events');

// Create EventEmitter instance for notifications (Task 14 & Task 15)
const countdownEmitter = new EventEmitter();

// Task 4: Function calculating remaining seconds between two Date objects
function getSecondsRemaining(targetDate, fromDate = new Date()) {
  return Math.max(0, Math.round((targetDate.getTime() - fromDate.getTime()) / 1000));
}

// Task 8: Callback-based time check function
function checkTimeLeftCallback(seconds, callback) {
  setTimeout(() => {
    if (seconds < 0) {
      callback(new Error("Countdown seconds cannot be negative!"), null);
    } else {
      callback(null, `[Callback] Time left: ${seconds} seconds.`);
    }
  }, 1000);
}

// Task 10: Promise-based time check function
function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds < 0) {
        reject(new Error("Invalid duration: Countdown seconds cannot be negative!"));
      } else {
        resolve(`[Promise] Time remaining: ${seconds} seconds.`);
      }
    }, 1000);
  });
}

// Task 11: Async/Await with try/catch
async function runCountdownAsync(seconds) {
  try {
    console.log(`[Async/Await] Checking time for ${seconds} seconds...`);
    const message = await checkTimeLeftPromise(seconds);
    console.log(`[Async/Await Success]: ${message}`);
    return message;
  } catch (error) {
    console.error(`[Async/Await Error caught in catch block]: ${error.message}`);
  }
}

// Task 9 & Task 14: Interval countdown with EventEmitter notification
function startCountdown(durationInSeconds) {
  let timeLeft = durationInSeconds;
  console.log(`\n--- Starting Countdown for ${timeLeft} seconds ---`);
  console.log(`Time left: ${timeLeft}s`);

  const intervalId = setInterval(() => {
    timeLeft--;
    console.log(`Time left: ${timeLeft}s`);

    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  // Task 9: Separate setTimeout to trigger "Time's up!" notification once countdown ends
  // Task 14: Emit 'timeUp' event to notify listeners
  setTimeout(() => {
    console.log("Time's up!");
    countdownEmitter.emit('timeUp');
  }, (durationInSeconds + 0.05) * 1000);
}

// Export functions and emitter using module.exports (Task 15)
module.exports = {
  countdownEmitter,
  getSecondsRemaining,
  checkTimeLeftCallback,
  checkTimeLeftPromise,
  runCountdownAsync,
  startCountdown
};
