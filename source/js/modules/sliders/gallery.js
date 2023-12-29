const initSwiperGallery = new Swiper('.gallery__slider', {
  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  },
});

export {initSwiperGallery};
