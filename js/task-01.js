const listItems = document.body.firstElementChild.nextElementSibling.children;
console.log(`Number of categories: ${listItems.length}`);

const arr = Array.from(listItems);

arr.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
