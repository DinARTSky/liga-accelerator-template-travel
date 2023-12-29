const initSwiperTrainers = new Swiper('.training__trainers', {
  // Navigation arrows
  navigation: {
    nextEl: '.trainers__button--next',
    prevEl: '.trainers__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 3,
    },
    768: {
      loop: true,
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 1,
    },
  },
});

export {initSwiperTrainers};
