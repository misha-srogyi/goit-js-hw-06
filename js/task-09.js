function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorButton: document.querySelector('.change-color'),
  textColorName: document.querySelector('.color'),
  bodyRef: document.querySelector('body'),
};

function onChangeColor() {
  const colorHex = getRandomHexColor();
  
  refs.bodyRef.style.backgroundColor = colorHex;
  refs.textColorName.textContent = colorHex;
}

refs.changeColorButton.addEventListener('click', onChangeColor);



