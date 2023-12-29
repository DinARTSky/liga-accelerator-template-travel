
/* const initSwiperAdvantages = () => {
  const desktop = window.matchMedia('(min-width: 1440px)');
  const swiperAdvantages = new Swiper('.advantages__slider', {
    // Navigation arrows
    navigation: {
      nextEl: '.advantages__button--next',
      prevEl: '.advantages__button--prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
  });
  return swiperAdvantages();
};
/*
const initSwiperAdvantages = () => {
  const desktop = window.matchMedia('(min-width: 1440px)');
  const advantagesSlider = document.querySelector('[data-swiper="advantages__slider"]');
  const buttonNext = document.querySelector('[data-button="advantages-button-next"]');
  const buttonPrev = document.querySelector('[data-button="advantages-button-prev"]');

  // eslint-disable-next-line
  const mySwiper = new Swiper(advantagesSlider, {
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    initialSlide: 1,
    spaceBetween: 30,
  });

  if (!desktop.matches) {
    mySwiper.destroy();
  }
};

// сначала пишем необходимый брейкпоинт
let desktop = window.matchMedia('(min-width: 1440px)'); // сами подберите нужный брейкпоинт

if (desktop.matches) {
  const initSwiperAdvantages = new Swiper('.advantages__slider', {
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
  swiper.destroy(); // то уничтожаем его
};

export default initSwiper(); initSwiperTours(); initSwiperTrainers(); initSwiperReviews(); initSwiperAdvantages(); initSwiperGallery();
*/
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
