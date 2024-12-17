# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Unhandled rejections can lead to application instability and silent failures, making debugging significantly harder.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a corrected version that properly handles potential errors and sends appropriate responses to the client.

## Problem

The issue lies in the lack of proper error handling within the `.catch()` block of the promise.  While the error is logged to the console, no error response is sent back to the client, leading to a silent failure.

## Solution

The solution involves handling the rejected promise and sending an appropriate error response (e.g., a 500 Internal Server Error) to the client.  This provides better feedback to the user and aids in debugging.