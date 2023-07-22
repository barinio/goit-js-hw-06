const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((el) => {
  console.log("Category: " + el.querySelector("h2").textContent);
  console.log("Elements: " + el.querySelectorAll("li").length);
});
