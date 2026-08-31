// =============================================================================
// Task 15: Countdown Timer & Notification App — Node Modules — Types, Core/Local Modules & Import-Export
// Question:
// → Move the countdown logic into a separate local module countdownModule.js, exporting the
//   relevant functions with module.exports.
// → Import it into countdown.js using require() and confirm the app still works.
// =============================================================================

// Importing local module exported via module.exports
const {
  countdownEmitter,
  getSecondsRemaining,
  checkTimeLeftCallback,
  checkTimeLeftPromise,
  runCountdownAsync,
  startCountdown
} = require('./countdownModule');

console.log("=== Task 15 Demonstration: Imported from countdownModule.js ===\n");

// Test imported functions
const target = new Date(Date.now() + 6000);
console.log("1. Testing getSecondsRemaining:", getSecondsRemaining(target), "seconds");

checkTimeLeftCallback(2, (err, res) => {
  console.log("2. Testing checkTimeLeftCallback:", res);
});

checkTimeLeftPromise(2).then((res) => {
  console.log("3. Testing checkTimeLeftPromise:", res);
});
