// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(a) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;

  // alternative:  return a.reduce((x, y) => x + y, 0);
}
