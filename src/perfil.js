function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav-hamb").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.body.classList.toggle("fixed-menu");
  }

  function trocarNomeUsuario() {
 
    var novoNome = prompt('Digite o novo nome de usuário:');
    
    if (novoNome !== null && novoNome !== '') {
      var nomeUsuarioElemento = document.getElementById('username');
      nomeUsuarioElemento.textContent = novoNome;
    }
  }
  