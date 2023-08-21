var counterValue = 0;

document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue--;
    document.querySelector("#value").innerHTML = counterValue;
  });

document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue++;
    document.querySelector("#value").innerHTML = counterValue;
  });
