// In Mathematics, A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

// PROBLEM
// A given number is a natural number greater than 1 that is not a product of two smaller natural numbers
function Prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(Prime(1));
console.log(Prime(5));
console.log(Prime(4));

// But if we want to reduce the time complexity, we can use sqrt to reduce the time the code runs
function Prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(Prime(1));
console.log(Prime(5));
console.log(Prime(4));
