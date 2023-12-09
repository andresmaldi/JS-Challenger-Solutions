// Get union of two sets
// Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Hint: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
  return new Set([...a, ...b]);
  // alternative:   const result = new Set(a);
  // b.forEach((el) => result.add(el));
  // return result;
}
