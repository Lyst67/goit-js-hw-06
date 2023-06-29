const categoriesList = document.querySelectorAll(".item");
const countOfCategories = categoriesList.length;
console.log(`Number of categories: ${countOfCategories}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
