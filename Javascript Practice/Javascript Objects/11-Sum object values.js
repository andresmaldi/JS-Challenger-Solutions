// Sum object values
// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a) {
  return Object.values(a).reduce((a, b) => a + b, 0);
}
