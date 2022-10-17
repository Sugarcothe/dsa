// In mathematics, fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones.

// PROBLEM
// Given a number 'n', find the first 'n' element in which each number is the sum

function fibonacci(n) {
    const fib = [0, 1]
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib
}

console.log(fibonacci(2)); 
console.log(fibonacci(3));
console.log(fibonacci(7));

// Big-O = O(n) linear time complexities