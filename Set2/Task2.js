// =============================================================================
// Task 2: Countdown Timer & Notification App — Understanding How Node.js Works & Node.js Architecture
// Question:
// → Add a comment explaining how V8 and libuv let countdown.js keep accepting terminal input while a timer runs in the background.
// → Demonstrate this by starting a setTimeout and immediately printing another message before the timer fires.
// =============================================================================

/*
EXPLANATION OF V8 AND LIBUV ARCHITECTURE:
------------------------------------------
1. V8 Engine:
   - Google V8 is the JavaScript engine that parses, compiles, and executes JavaScript code.
   - It runs on a single execution thread with a single Call Stack and Memory Heap.

2. libuv Library:
   - libuv is an open-source C/C++ library designed for Node.js to provide asynchronous I/O support.
   - It implements the Event Loop, Thread Pool, and manages operating system-level asynchronous operations
     (such as timers, file system I/O, network sockets, and terminal/stdin I/O).

3. How non-blocking execution works in countdown.js:
   - When `setTimeout` is called, V8 hands the timer specification off to libuv.
   - libuv manages the timer in the background without holding up the JavaScript main thread.
   - V8 immediately continues executing subsequent synchronous lines of code (or listens for terminal input).
   - Once the timer expires in libuv, its callback is placed onto the Timer Callback Queue.
   - The Event Loop moves the callback to the Call Stack only when the stack is empty.
   - Hence, the application never freezes and can accept terminal inputs while timers tick in the background.
*/

console.log("[1] Starting background timer (1500ms)...");

// Asynchronous timer handled in the background by libuv
setTimeout(() => {
  console.log("[3] Background timer of 1500ms finished and callback executed via libuv!");
}, 1500);

// Immediate synchronous log demonstrating non-blocking execution
console.log("[2] This message prints IMMEDIATELY without waiting for the timer to complete!");
