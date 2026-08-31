// =============================================================================
// Task 8: Countdown Timer & Notification App — Asynchronous Programming & Callback Functions
// Question:
// → Write a callback-based function checkTimeLeftCallback(seconds, callback) that simulates a delay
//   using setTimeout before calling back with the remaining time.
// → Call it and log the result inside the callback.
// =============================================================================

function checkTimeLeftCallback(seconds, callback) {
  console.log(`Checking time for ${seconds} seconds (simulating 1s asynchronous delay)...`);
  
  setTimeout(() => {
    if (typeof seconds !== 'number' || seconds < 0) {
      // Node.js error-first callback pattern: callback(err, result)
      callback(new Error("Invalid time: Seconds must be a non-negative number!"), null);
    } else {
      callback(null, `Remaining time is: ${seconds} seconds.`);
    }
  }, 1000);
}

// Invocation with success case
checkTimeLeftCallback(5, (err, result) => {
  if (err) {
    console.error("Callback Error:", err.message);
  } else {
    console.log("Callback Success:", result);
  }
});
