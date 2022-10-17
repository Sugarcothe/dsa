// TIME COMPLEXITY = 0(1) constant

function summation(n) {
    return(n * (n + 1)) /2
}

// console.log(summation(2))

// TIME COMPLEXITY = 0(n^2) quadratic
function summation(n) {
    for (i = 1; i <= n; i++) {
      for (j = 1; j <= i; j++) {
        return n + 5;
      }
    }
}

console.log(summation(5))
