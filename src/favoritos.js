const product = [
  {
    id: 0,
    image: 'img/JBL_Quantum_400_Product Image_Hero 02.png',
    title: 'JBL Quantum 400',
    price: '329',
  },
  {
    id: 1,
    image: 'img/image.webp',
    title: 'Mouse Razer Balisk',
    price: '156',
  },
  {
    id: 2,
    image: 'img/image-removebg-preview.webp',
    title: 'Tenis Air Max Plus',
    price:'799',
  },
  {
    id: 3,
    image: 'img/pngimg.com - running_shoes_PNG5816 (1).png',
    title: 'Tenis Air Max Plus',
    price: '799',
  },
  {
    id: 4,
    image: 'img/notebook-alienware-m16-hd-perkey-intel-black-gallery-4.webp',
    title: 'Notebook Alienware M16',
    price: '15.000,00'
  },
];
const cards = document.querySelectorAll('.div-img')
for (let i = 0; i < cards.length; i++) {
  const deleteButton = cards[i].querySelector('.fa-solid')

  if (deleteButton) {
  console.log('existe deleteButton')
} else {
    console.log('não existe deleteButton')
}

  if (cards) {
  cards[i].addEventListener('click', function (event) {
    console.log('clicou no card')
  })
    deleteButton.addEventListener('click', function (event) {
    cards[i].style.display = 'none'
   console.log('clicou no deleteButton')
  })
    console.log('existem cards', cards.length)
} else {
    console.log('não existem cards')
}

}
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav-hamb").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.body.classList.toggle("fixed-menu");
}


  $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          }
      });
  });
