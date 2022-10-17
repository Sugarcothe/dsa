// In math, an integer is a power of 2 if there exist an integer 'x' such that 'n' === 2x

// PROBLEM
// give a positive integer 'n', determine if the number is a power of 2 or not

function isPowerofTwo(n) {
    if(n < 1) {
        return false
    }
    while(n > 1) {
       if(n%2 != 0) {
        return false
       }
       n = n/2
    }
     
}
console.log(isPowerofTwo(1))
console.log(isPowerofTwo(1));
console.log(isPowerofTwo(1));