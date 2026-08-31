// =============================================================================
// Task 11: Countdown Timer & Notification App — Try/Catch Error Handling & Async-Await Concepts
// Question:
// → Write an async function runCountdownAsync(seconds) that awaits checkTimeLeftPromise(seconds)
//   inside a try/catch block.
// → Demonstrate the catch block firing by passing an invalid (negative) duration.
// =============================================================================

function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof seconds !== 'number' || seconds < 0) {
        reject(new Error("Invalid duration: Seconds cannot be negative!"));
      } else {
        resolve(`Time check verified: ${seconds}s remaining.`);
      }
    }, 1000);
  });
}

// Async function using try/catch
async function runCountdownAsync(seconds) {
  try {
    console.log(`[Invoking runCountdownAsync with seconds = ${seconds}]`);
    const result = await checkTimeLeftPromise(seconds);
    console.log(`[Try Block Succeeded]: ${result}\n`);
    return result;
  } catch (error) {
    console.error(`[Catch Block Caught Error]: ${error.message}\n`);
  }
}

// Driver execution:
async function main() {
  console.log("=== Demonstration 1: Valid Positive Duration ===");
  await runCountdownAsync(10);

  console.log("=== Demonstration 2: Invalid Negative Duration (triggers catch block) ===");
  await runCountdownAsync(-4);
}

main();
