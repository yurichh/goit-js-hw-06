const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");
input.addEventListener("input", changeName);
function changeName() {
  name.textContent = input.value;
  if (!input.value) {
    name.textContent = "Anonymous";
  }
}
