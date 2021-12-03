const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const element = ingredients[i];

  const createElementRef = document.createElement('li');
    createElementRef.classList.add('ingredients_item');
    createElementRef.textContent = element;
    console.log(createElementRef);
    listElements.append(createElementRef);
}
