const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (!mail || !password) {
        return alert('All input fields must be filled')
    }
        const formData = { mail, password };
        console.log(formData);
    
    // if (mail !== '' && password !== '') {
    //     const formData = { mail, password };
    //     console.log(formData);
    // }

    // if (mail === '' || password === '') {
    //     window.alert ('All input fields must be filled')
    // };
    event.currentTarget.reset();
}
