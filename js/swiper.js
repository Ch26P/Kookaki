
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 80,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

});
