
const refs = {
    inputRange: document.querySelector('#font-size-control'),
    textSize: document.querySelector('#text'),
}

refs.inputRange.addEventListener('input', onRangeChange);

function onRangeChange(event) {
    const { value } = event.target;

    refs.textSize.style.fontSize = `${value}px`;
}
