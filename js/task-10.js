function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBoxes = (amount) => {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  document.getElementById("boxes").appendChild(...boxes);
};
const destroyBoxes = () => {
  document.getElementById("boxes").innerHTML = "";
};
document.getElementById("controls").addEventListener("click", (event) => {
  const button = event.target;
  if (button.dataset.create) {
    createBoxes(
      parseInt(document.getElementById("controls").querySelector("input").value)
    );
  } else if (button.dataset.destroy) {
    destroyBoxes();
  }
});
