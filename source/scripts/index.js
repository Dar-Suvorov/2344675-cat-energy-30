// const sliderToggle = document.querySelector('.slider__toggle');
// const slider = document.querySelector('.slider');

// if (slider) {
//   let flag = false;
//   sliderToggle.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (flag) {
//       slider.classList.toggle('slider--after');
//       slider.classList.toggle('slider--before');
//     } else {
//       flag = true;
//       slider.classList.add('slider--after');
//     }
//   });
// }


const navMenu = document.querySelector('.header-nav');
const navButton = document.querySelector('.header-nav__button-menu');
const main = document.querySelector('main');

navMenu.classList.remove('header-nav--no-js');
// navMenu.classList.remove('header-nav--opened');
navMenu.classList.add('header-nav--closed');

navButton.addEventListener('click', () => {
  if (navMenu.classList.contains('header-nav--closed')) {
    navMenu.classList.remove('header-nav--closed');
    navMenu.classList.add('header-nav--opened');
  } else {
    navMenu.classList.add('header-nav--closed');
    navMenu.classList.remove('header-nav--opened');
  }
});

main.addEventListener('click', () => {
  if (navMenu.classList.contains('header-nav--opened')) {
    navMenu.classList.remove('header-nav--opened');
    navMenu.classList.add('header-nav--closed');
  }
});
