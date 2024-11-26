const { parentPort } = require('worker_threads');


const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const calculateFactorial = (n) => {
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
};

// Listen for messages from the main thread
parentPort.on('message', (data) => {
  let result;

  // Determine which function to call based on the data.functionName
  switch (data.functionName) {
    case 'fibonacci':
      result = calculateFibonacci(data.number);
      break;
    case 'factorial':
      result = calculateFactorial(data.number);
      break;
    default:
      result = 'Unknown function';
  }

  parentPort.postMessage(result);
});
