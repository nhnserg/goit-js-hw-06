const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomato',
  'Herbs',
  'Conditions',
];

const ul = document.getElementById('ingredients');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ul.appendChild(li);
}
