/* 
Filename: ComplexCode.js
Description: This code demonstrates a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
Author: JavaScript Genius
Date: 2022-01-01
*/

function findPrimes(n) {
  // Create an array of booleans to represent whether numbers are prime or not
  const isPrime = new Array(n + 1).fill(true);

  // 0 and 1 are not prime
  isPrime[0] = isPrime[1] = false;

  // Iterate through numbers up to the square root of n
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // Mark all multiples of i as non-prime starting from i*i
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Collect the prime numbers
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Test the algorithm
const limit = 1000;
const primeNumbers = findPrimes(limit);

// Output the results
console.log(`Prime numbers up to ${limit}:`);
console.log(primeNumbers);

// Output some additional statistics
console.log(`Total prime numbers found: ${primeNumbers.length}`);
console.log(`Largest prime number found: ${primeNumbers[primeNumbers.length - 1]}`);
console.log(`Sum of all prime numbers found: ${primeNumbers.reduce((acc, curr) => acc + curr, 0)}`);