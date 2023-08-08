const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((li) => {
  const category = li.querySelector("h2");
  const elements = li.querySelectorAll("li");
  console.log("Category: " + category.textContent);
  console.log("Elements: " + elements.length);
});
