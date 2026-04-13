const categories = document.querySelectorAll("#categories .item");

// Toplam kategori sayısı
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
