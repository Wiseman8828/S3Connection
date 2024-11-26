const workerpool  = require('workerpool')
const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const calculateFactorial = (n) => {
    if (n === 0) return 1;
    return n * calculateFactorial(n - 1);
};

workerpool.worker({
    calculateFibonacci,
    calculateFactorial
});