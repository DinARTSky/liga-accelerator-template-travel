// eslint-disable-next-line
const initSwiperHero = new Swiper('.hero__slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
  },
});

export {initSwiperHero};
