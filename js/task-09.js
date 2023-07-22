function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
span.textContent = "#ffffff";

btn.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor(event) {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
