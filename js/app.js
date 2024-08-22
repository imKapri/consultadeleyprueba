// MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU MOBILE MENU 

const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list2');
const block__menu = document.querySelector('.menu__block');
const links = document.querySelectorAll('.nav__link');


menu.addEventListener('click', function(){

    menuList.classList.toggle('nav__list--show');
    block__menu.classList.toggle('menu__block__on');

});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menuList.classList.remove('nav__list--show');
        block__menu.classList.remove('menu__block__on');


    })

});


// RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU RESIZE MOBILE TO DESKTOP UNLOCK MOBILE MENU 

// window.addEventListener('resize', function() {
//     var screenWidth = window.innerWidth;
//     var elemento = document.querySelector('.menu__block__on');

//     if (screenWidth > 1025) {
//       elemento.classList.remove('menu__block__on');
//     } else {
//       if (!elemento.classList.contains('menu__block__on')) {
//         elemento.classList.add('menu__block__on');
//       }
//     }
//   });

//   window.addEventListener('resize', function() {
//     var screenWidth = window.innerWidth;
//     var elemento = document.querySelector('.nav__list--show');

//     if (screenWidth > 1025) {
//       elemento.classList.remove('nav__list--show');
//     } else {
//       if (!elemento.classList.contains('nav__list--show')) {
//         elemento.classList.add('nav__list--show');
//       }
//     }
//   });

// PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA PRUEBA

// window.onscroll = function() {
//   var navbar = document.getElementById('nav');
//   var section1 = document.getElementById('nosotros');
//   var section2 = document.getElementById('proyectos');
//   var section3 = document.getElementById('servicios');

//   if (isInViewport(section1) || isInViewport(section2) || isInViewport(section3)) {
//       navbar.style.display = 'block';
//   } else {
//       navbar.style.display = 'none';
//   }
// };

// NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV


let lastScroll = 0;
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.classList.add('ocultar__arriba');
    } else {
        navbar.classList.remove('ocultar__arriba');
        navbar.classList.add('navbar__color');
    }
    
    lastScroll = currentScroll;
});

// NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV BAR SCROLL UP AND DOWN NAV

window.addEventListener("scroll", function(){
    var header = document.querySelector(".nav__bkg");
    header.classList.toggle("navbar__color", window.scrollY>70);
    // header.classList.toggle("navbar__color__arriba", window.scrollY<0);
});

// CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES CARROUSEL IMAGES


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
});