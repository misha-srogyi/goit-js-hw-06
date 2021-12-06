
const getFocusInput = document.querySelector('#validation-input');

getFocusInput.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
    if (event.currentTarget.value.length >= getFocusInput.dataset.length) {
        getFocusInput.classList.add('valid');
        getFocusInput.classList.remove('invalid');
    }
    else {
        getFocusInput.classList.add('invalid');
        getFocusInput.classList.remove('valid');
    }
};

