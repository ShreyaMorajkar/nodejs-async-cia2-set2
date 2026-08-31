// =============================================================================
// Task 13: Countdown Timer & Notification App — Callback Examples & the Event Loop, Job Queue
// Question:
// → Write a snippet combining a setTimeout, a resolved Promise .then(), and a synchronous console.log,
//   predicting the output order in a comment first.
// → Run the snippet and confirm in a comment whether your predicted order was correct.
// =============================================================================

/*
PREDICTED OUTPUT ORDER:
-----------------------
1. "1. Synchronous log: Executing on Call Stack immediately"
2. "2. Microtask (Job Queue): Promise .then() callback executed"
3. "3. Macrotask (Callback/Timer Queue): setTimeout callback executed"

DETAILED REASONING / EXPLANATION:
1. Synchronous Execution: The main script runs first on the JavaScript Call Stack.
   `console.log("1. Synchronous...")` executes immediately.
2. Microtask Queue (Job Queue): When `Promise.resolve().then(...)` runs, its callback is placed
   into the Microtask Queue. Microtasks have higher priority than macrotasks and are drained
   immediately after the current call stack clears, before moving to the next event loop phase.
3. Macrotask Queue (Timer Queue): `setTimeout(..., 0)` registers a timer with libuv. Even with 0ms delay,
   its callback is queued in the Macrotask (Timer) Queue, which executes in a subsequent event loop tick.

CONFIRMATION:
Running this file confirms that the output order matches the prediction exactly:
Synchronous -> Microtask (Promise) -> Macrotask (setTimeout).
*/

console.log("1. Synchronous log: Executing on Call Stack immediately");

setTimeout(() => {
  console.log("3. Macrotask (Callback/Timer Queue): setTimeout callback executed");
}, 0);

Promise.resolve().then(() => {
  console.log("2. Microtask (Job Queue): Promise .then() callback executed");
});
