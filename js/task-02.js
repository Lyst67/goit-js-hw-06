const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingr = document.querySelector("#ingredients");

const ourIngredients = ingredients.map((ingredient) => {
  const elm = document.createElement("li");
  elm.textContent = ingredient;
  elm.classList.add("item");
  ingr.append(elm);
});
