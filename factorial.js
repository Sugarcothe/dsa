// In mathematics, the factorial of a non-negative integer is the product of all positive integers less than or equal to the number
// Example factorial of 4 is 4,3,2,1=24, and the factorial of 5 is 5,4,3,2,1=120

// PROBLEM
// Given an integer 'n', find the factorial of that integer

function factorial(n) {
    let result = 1
    for(let i = 2; i<=n; i++) {
        result = result * i;
    }
    return result
}

console.log(factorial(0))
console.log(factorial(1));
console.log(factorial(5));

// Big-O = O(n) linear time complexities