// Input filter list
// In this challenge, we create a dynamic input filter with JavaScript.
// Extend the code below to interact with the displayed HTML elements. Type a search term in the input field. The displayed items in the list should match your search term. The rest of the list elements should be hidden.

const input = document.getElementById("input");
input.addEventListener("input", () => {
  const list = document.getElementById("list");
  const listItem = Array.from(list.children);

  listItem.forEach((item) => {
    !item.innerHTML.includes(input.value)
      ? (item.style.display = "none")
      : (item.style.display = "");
  });
});
