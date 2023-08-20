const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const value = input.value;
  const length = input.getAttribute("data-length");

  if (value.length === +length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
