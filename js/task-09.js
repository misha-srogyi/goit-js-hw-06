function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor() {
  refs.bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  refs.textColorName.textContent = `${getRandomHexColor()}`;
}

const refs = {
  changeColorButton: document.querySelector('.change-color'),
  textColorName: document.querySelector('.color'),
  bodyRef: document.querySelector('body'),
};

refs.changeColorButton.addEventListener('click', onChangeColor);



