const input = document.querySelector("#font-size-control");
const text = document.querySelector("span#text");

text.style.fontSize = input.value + "px";

input.addEventListener("input", changeTextSize);
function changeTextSize() {
  text.style.fontSize = input.value + "px";
}
