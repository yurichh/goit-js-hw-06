const categoryList = document.querySelector("#categories");
// console.log(categoryList);
const categories = categoryList.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItem = category.querySelectorAll("li");
  console.log("Category:", categoryTitle.textContent);
  console.log("Elements:", categoryItem.length);
});
