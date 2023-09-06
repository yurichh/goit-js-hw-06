function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector("#controls");
const boxesDiv = document.querySelector("#boxes");
const createButton = controlsDiv.querySelector("button[data-create]");
const destroyButton = controlsDiv.querySelector("button[data-destroy]");
const input = controlsDiv.querySelector('input[type="number"]');

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const initialSize = 30;
  const stepSize = 10;
  const boxes = [];

  for (let i = 0; i < input.value; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * stepSize;
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    console.dir(input);
  }

  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
