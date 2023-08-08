function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const ref = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  div: document.querySelector("#boxes"),
};
let size = 30;

ref.btnCreate.addEventListener("click", () => {
  let amount = parseInt(ref.input.value);
  const markup = createBoxes(amount);
  appendMarkup(markup);
});
function createBoxes(amount) {
  const arrDivs = [];
  for (let i = 0; i < amount; i++) {
    let divBox = document.createElement("div");
    divBox.style.width = size + "px";
    divBox.style.height = size + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    arrDivs.push(divBox);
    size += 10;
  }
  return arrDivs;
}
function appendMarkup(markup) {
  ref.div.append(...markup);
}
ref.btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  ref.div.innerHTML = "";
  size = 30;
}
