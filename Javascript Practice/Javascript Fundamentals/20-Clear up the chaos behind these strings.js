// Clear up the chaos behind these strings
// It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.

function myFunction(a, b) {
  const stringA = a.replace("%", "");
  const stringB = b.replace("%", "");
  return (
    stringA.charAt(0).toUpperCase() +
    stringA.slice(1) +
    stringB.split("").reverse().join("")
  );
}
