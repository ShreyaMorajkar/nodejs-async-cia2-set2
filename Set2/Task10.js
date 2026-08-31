// =============================================================================
// Task 10: Countdown Timer & Notification App — JavaScript Promises
// Question:
// → Rewrite checkTimeLeftCallback as a Promise-based function checkTimeLeftPromise(seconds).
// → Chain .then()/.catch() to log the result or any error.
// =============================================================================

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof seconds !== 'number' || seconds < 0) {
        reject(new Error("Invalid duration: Seconds must be a non-negative number!"));
      } else {
        resolve(`Promise resolved successfully! Remaining: ${seconds} seconds.`);
      }
    }, 1000);
  });
}

// 1. Successful Promise Resolution (.then)
console.log("--- Test Case 1: Valid Duration (5 seconds) ---");
checkTimeLeftPromise(5)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

// 2. Rejected Promise (.catch)
setTimeout(() => {
  console.log("\n--- Test Case 2: Invalid Duration (-3 seconds) ---");
  checkTimeLeftPromise(-3)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((err) => {
      console.error("Error caught in .catch():", err.message);
    });
}, 1200);
