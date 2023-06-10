const login__button=document.querySelector('.login__button');
const passwordInput = document.getElementById("senha");
const passwordError = document.querySelector(".error-senha");
function validateFields() {
    
    try {
        toggleEmailErrors();
        login__button.addEventListener("click", () => window.location.href='../inicio.html');
        
    } catch (error) {
        console.log(error);
        
    }
    


}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
} 
const password= document.getElementById("email");
if (password){
    
    
}
else{
   

}

function toggleEmailErrors() {
    
    const email = document.getElementById("email").value;
    if (!email) {
        document.querySelector(".error-login").style.display = "block";
    } else {
        document.querySelector(".error-login").style.display = "none";
    }
    
    if (validateEmail(email)) {
        document.querySelector(".error-login").style.display = "none";
    } else {
        document.querySelector(".error-login").style.display = "block";
    }
}

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0) {
      passwordError.style.display = "none";
    } else {
      passwordError.style.display = "block";
    }
  });
  
function togglePasswordErrors() {
    const password= document.getElementById("password").value;
    if (!password) {
        document.querySelector(".error-senha").style.display = "block";
    } else {
        document.querySelector(".error-senha").style.display = "none";
    }

    if (validateEmail(password)) {
        document.querySelector(".error-senha").style.display = "none";
    } else {
        document.querySelector(".error-senha").style.display = "block";
    }
}

function handlePasswordValidation() {
    const password = passwordInput.value;
    const passwordError = document.querySelector(".error-senha");
  
    if (!password) {
      passwordError.style.display = "block";
      passwordError.textContent = "Senha inválida";
    } else {
      passwordError.style.display = "none";
    }
  }


function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}