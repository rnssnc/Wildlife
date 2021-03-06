import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.sass';

import '../../components/header/header.js';
import '../../components/footer/footer.js';

import '../../components/card/card.js';

import '../../components/input/input.js';

require('slick-carousel');

$('.articles-slider__cards').slick({
  arrows: true,
  nextArrow: '.articles-slider__button-next',
  prevArrow: '.articles-slider__button-prev',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 781,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 521,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        dotsClass: 'dots',
      },
    },
  ],
});

/* mobile header */

let headerMobile = document.querySelector('.navigation');
let hamburger = document.querySelector('.hamburger');
console.log(hamburger);
hamburger.addEventListener('click', () => {
  console.log(hamburger);
  hamburger.classList.toggle('is-active');
  headerMobile.classList.toggle('navigation-main--active');
});
