// Wrap element in div
// The JavaScript code below installs en eventListener on a variable btn. A button element that is a descendent of another element with id wrapper was assigned to the variable btn. But, the existing button element has no parent node with id wrapper.
// Make the code work by creating a new element with id wrapper that wraps the existing button element. Verify your solution by clicking the button. It should change its text.
// Hint: you might have to use the following methods: querySelector, createElement, setAttribute, append.

const div = document.createElement("div");
div.setAttribute("id", "wrapper");

const target = document.getElementById("button");
target.after(div);
div.appendChild(target);

// expects button to be child of element with id 'wrapper'
const btn = document.querySelector("#wrapper button");

if (btn) {
  const handleClick = () => {
    btn.innerText = "Thank you! ❤️";
  };
  btn.addEventListener("click", handleClick);
}
