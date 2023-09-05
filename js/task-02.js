const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  let ing = document.createElement("li");
  ing.classList.add("item");
  ing.textContent = ingredient;
  list.append(ing);
});
console.log(list);
