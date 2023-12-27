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

const initSwiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

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
      spaceBetween: 120,
    },
  },
});

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

// сначала пишем необходимый брейкпоинт
/*let desktop = window.matchMedia('(min-width: 1440px)'); // сами подберите нужный брейкпоинт

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
}
*/

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

export default initSwiper(); initSwiperTours(); initSwiperTrainers(); initSwiperReviews(); initSwiperAdvantages(); initSwiperGallery();


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
