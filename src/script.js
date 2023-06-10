// Seletor dos campos de email e senha
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const button = document.querySelector('.login__button');


// Funções handleFocus, handleFocusOut e handleChange (sem alterações)
const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
};

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
};

const handleChange = () => {
  const [email, username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
