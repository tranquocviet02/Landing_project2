const swiper = new Swiper('.swiper', {
    autoplay: {
          delay: 3000
        },
        slidesPerView: 1,
        spaceBetween: 12,
        centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
