const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const liArr = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.className = 'item';
  return liItem;
});
list.append(...liArr);
