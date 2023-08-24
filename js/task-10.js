function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = document.getElementById("boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    const size = 30 + i * 10;
    box.style.width = box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  const boxes = document.getElementById("boxes");

  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
