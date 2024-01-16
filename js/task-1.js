const categories = document.querySelector("#categories");
const categoryCount = categories.querySelectorAll("li.item").length;

console.log(`Number of categories: ${categoryCount}`);

categories.querySelectorAll("li.item").forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
