// Sum up all array elements with values greater than
// Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum

function myFunction(arr, n) {
  return arr.reduce((pv, cv) => pv + (cv > n ? cv : 0), 0);
}
