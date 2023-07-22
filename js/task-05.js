const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onSpanChange);

function onSpanChange(event) {
  span.textContent = event.currentTarget.value;
}
