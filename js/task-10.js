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
  createBoxes(amount);
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let divBox = document.createElement("div");
    divBox.style.width = size + "px";
    divBox.style.height = size + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    ref.div.append(divBox);
    size += 10;
  }
}

ref.btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});
function destroyBoxes() {
  ref.div.innerHTML = "";
  size = 30;
}
