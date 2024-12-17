const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // The error is not handled properly here
    console.error(err); // Logs the error, but doesn't send an error response to the client
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random failure
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});