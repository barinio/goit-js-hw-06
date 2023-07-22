const input = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

input.addEventListener("input", onSpanChange);
function onSpanChange() {
  textSpan.style.fontSize = `${input.value}px`;
}
