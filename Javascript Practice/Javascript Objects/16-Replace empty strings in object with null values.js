// Replace empty strings in object with null values
// Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with null values. Return the resulting object

function myFunction(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      !value.trim() ? null : value,
    ])
  );
}
