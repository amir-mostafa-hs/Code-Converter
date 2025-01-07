function factorial(n) {
  // If the number is negative
  if (n < 0) {
    return "Negative numbers don't have factorials";
  }
  // If the number is 0 or 1
  else if (n === 0 || n === 1) {
    return 1;
  }
  // For numbers greater than 1
  else {
    let fact = 1;
    // Calculate factorial using a loop
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}

// Test the program
const number = 5;
const result = factorial(number);
console.log(`factorial ${number} is equal to: ${result}`);
