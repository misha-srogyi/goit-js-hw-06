const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    text: document.querySelector('#value'),
};

let counterValue = 0;
    
refs.decrement.addEventListener('click', onButtonDecrement);
refs.increment.addEventListener('click', onButtonIncrement);

function onButtonDecrement() {
    counterValue -= 1;
    refs.text.textContent = counterValue;
};

function onButtonIncrement() {
    counterValue += 1;
    refs.text.textContent = counterValue;
};
