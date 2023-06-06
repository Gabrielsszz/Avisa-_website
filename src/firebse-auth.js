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
