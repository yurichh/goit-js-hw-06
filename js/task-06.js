const input = document.querySelector("#validation-input");
// console.log(input);
input.addEventListener("blur", validationSymbols);
function validationSymbols() {
  //   console.log(input.value.length == input.dataset.length);
  if (input.value.length == input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
