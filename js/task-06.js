const getFocusInput = document.querySelector('#validation-input');

getFocusInput.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
    if (event.currentTarget.value.trim().length === Number(getFocusInput.dataset.length)) {
        getFocusInput.classList.add('valid');
        getFocusInput.classList.remove('invalid');
        console.log(
            getFocusInput.dataset.length
        );
    }
    else {
        getFocusInput.classList.add('invalid');
        getFocusInput.classList.remove('valid');
    }
};

