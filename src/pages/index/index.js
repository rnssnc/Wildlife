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
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
  ],
});
