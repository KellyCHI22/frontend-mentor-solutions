
const form = document.querySelector('.sign-up__form');
const inputs = document.querySelectorAll('.form__input');

clearInputs(inputs);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        let inputValue = input.firstElementChild;
        if (inputValue.getAttribute('id') === 'email') {
            validateEmail(inputValue, input);
        } else {
            validateLength(inputValue, input);
        }
    });
});

function clearInputs() {
    inputs.forEach(input => {
        let inputValue = input.firstElementChild;
        inputValue.value = '';
    });
}

function validateEmail(email, parent) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) {
        parent.classList.add('warning');
        email.style.color = 'var(--Red)';
    } else {
        parent.classList.remove('warning');
        email.style.color = 'var(--Dark-Blue)';
    }
}

function validateLength(string, parent) {
    if (!string.value.length > 0) {
        parent.classList.add('warning');
        string.style.color = 'var(--Red)';
    } else {
        parent.classList.remove('warning');
        string.style.color = 'var(--Dark-Blue)';
    }
}