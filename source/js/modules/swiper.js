const initSwiper = new Swiper('.hero__slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
  },
});

const initSwiperTours = new Swiper('.swiper-tours', {
  // Navigation arrows
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  // Количество слайдов для показа

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },
});

export default initSwiper(); initSwiperTours();


/* const initSwiper = new Swiper('.swiper', {
  // Optional parameters
  direction: '',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default initSwiper();
*/
