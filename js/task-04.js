const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");
let value = 0;

btnDecrement.addEventListener("click", () => {
  value -= 1;
  spanEl.textContent = value;
});
btnIncrement.addEventListener("click", () => {
  value += 1;
  spanEl.textContent = value;
});
