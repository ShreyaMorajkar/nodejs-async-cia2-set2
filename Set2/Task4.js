// =============================================================================
// Task 4: Countdown Timer & Notification App — NodeJS REPL Introduction
// Question:
// → In the Node REPL, test a small snippet that calculates the seconds remaining between two Date objects.
// → Move the working snippet into countdown.js.
// =============================================================================

/*
REPL Demonstration Session:
$ node
> const target = new Date(Date.now() + 10000);
> const current = new Date();
> const diffSeconds = Math.round((target.getTime() - current.getTime()) / 1000);
> diffSeconds
10
*/

// Function calculating remaining seconds between two Date objects
function getSecondsRemaining(targetDate, fromDate = new Date()) {
  const diffMilliseconds = targetDate.getTime() - fromDate.getTime();
  const diffSeconds = Math.round(diffMilliseconds / 1000);
  return Math.max(0, diffSeconds);
}

// Example usage:
const target = new Date(Date.now() + 5000); // 5 seconds into the future
const now = new Date();

console.log("Current Time   :", now.toLocaleTimeString());
console.log("Target Time    :", target.toLocaleTimeString());
console.log("Remaining Time :", getSecondsRemaining(target, now), "seconds");
