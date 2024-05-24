console.log('slider running...');

new Swiper('.gallery__slider', {
  loop: false,
  spaceBetween: 10,
  pagination: {
    el: '.gallery__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
