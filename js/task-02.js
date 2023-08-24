const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomato",
  "Herbs",
  "Conditions",
];

const ul = document.getElementById("ingredients");
const newaray = [];
for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  newaray.push(li);
}
ul.append(...newaray);
