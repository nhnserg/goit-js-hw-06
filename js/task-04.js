const counterValue = 0;

const incrementButton = document.querySelector('#counter button[data-action="increment"]');
const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
const valueSpan = document.querySelector('#counter span');

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});