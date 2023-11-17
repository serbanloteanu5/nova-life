/* complex_program.js */

// This complex program calculates the sum of all prime numbers below a given limit

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to calculate the sum of prime numbers below a given limit
function sumPrimesBelowLimit(limit) {
  let sum = 0;
  for (let num = 2; num < limit; num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

// Generating a random limit between 1000 and 5000
const limit = Math.floor(Math.random() * 4001) + 1000;

console.log(`Calculating the sum of prime numbers below ${limit}...`);

const startTime = new Date().getTime(); // Start time

const result = sumPrimesBelowLimit(limit); // Calculate sum of prime numbers

const endTime = new Date().getTime(); // End time

const executionTime = endTime - startTime;

console.log(`The sum of prime numbers below ${limit} is: ${result}`);
console.log(`Execution time: ${executionTime} ms`);