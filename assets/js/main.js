$(document).ready(function () {
  // Initialize Services Slider
  const serviceSwiper = new Swiper(".mySwiper-service-one", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });

  // Force autoplay to start
  serviceSwiper.autoplay.start();
  
  // Log initialization
  console.log('Service slider initialized with autoplay:', serviceSwiper.autoplay);
}); 