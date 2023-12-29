let desktop = window.matchMedia('(min-width: 1440px)'); // сами подберите нужный брейкпоинт
let initSwiperAdvantages = null;

if (desktop.matches) {
  initSwiperAdvantages = new Swiper('.advantages__slider', {
    // Navigation arrows
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
} else {
// если слайдер не в брейкпоинте
  initSwiperAdvantages.destroy(true, true); // то уничтожаем его
}

export {initSwiperAdvantages};
