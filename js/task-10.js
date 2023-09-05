function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const wrapper = document.querySelector("#boxes");
console.log(btnCreate, btnDestroy, input, wrapper);

createBoxes(amount){
  
}