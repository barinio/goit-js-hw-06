const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);
console.log("");

categoriesItems.forEach((li) => {
  console.log("Category: " + li.firstElementChild.textContent);
  console.log("Elements: " + li.lastElementChild.children.length);
  console.log("");
});
