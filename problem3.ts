/** @format */

function primeNumber(number: number): boolean {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Test Cases

console.log(primeNumber(11)); // hasil true
console.log(primeNumber(13)); // hasil true
console.log(primeNumber(17)); // hasil true
console.log(primeNumber(20)); // hasil false
console.log(primeNumber(35)); // hasil false
