const initSwiperTours = new Swiper('.swiper-tours', {
  // Navigation arrows
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  // Количество слайдов для показа

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 1,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 1,
      loop: true,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },
});

export {initSwiperTours};
