function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav-hamb").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.body.classList.toggle("fixed-menu");
  }
  
  function pesquisar() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName('card');

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].getElementsByTagName('h1')[0];
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}