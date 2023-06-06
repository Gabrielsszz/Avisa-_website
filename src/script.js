const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');


const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

// Autenticação com email e senha
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Autenticação bem-sucedida, obtenha o objeto do usuário
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    // Tratamento de erros
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
