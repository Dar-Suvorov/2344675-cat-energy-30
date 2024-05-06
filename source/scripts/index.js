// Меню навигации в шапке.
const navMenu = document.querySelector('.header-nav');
const navButton = document.querySelector('.header-nav__button-menu');
const main = document.querySelector('main');

navMenu.classList.remove('header-nav--no-js');
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

// Слайдер на странице Index.
const sliderToggle = document.querySelector('.slider__toggle');
const slider = document.querySelector('.slider');

if (slider) {
  let flag = false;
  sliderToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (flag) {
      slider.classList.toggle('slider--before');
      slider.classList.toggle('slider--after');
    } else {
      flag = true;
      slider.classList.add('slider--before');
    }
  });
}
