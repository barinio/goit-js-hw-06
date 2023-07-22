const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const makeList = (arr) => {
  return arr.map((caption) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = caption;
    return liEl;
  });
};
const list = makeList(ingredients);
ulEl.append(...list);
