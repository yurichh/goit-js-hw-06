const value = document.querySelector("#value");
let counterValue = 0;
// console.log(counterValue);

const buttonDecrease = document.querySelector('[data-action="decrement"]');
const buttonIncrease = document.querySelector('[data-action="increment"]');
// console.log(buttonDecrease);
// console.log(buttonIncrease);

function deacrease() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function increase() {
  counterValue += 1;
  value.textContent = counterValue;
}

buttonDecrease.addEventListener("click", deacrease);
buttonIncrease.addEventListener("click", increase);
