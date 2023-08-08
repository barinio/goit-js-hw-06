const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onSpanChange);

function onSpanChange(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value;
  }
}
