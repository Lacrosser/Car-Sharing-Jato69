/* -------------------------------------------------------------------------- */
/*                                   SWIPER                                   */
/* -------------------------------------------------------------------------- */

var swiper = new Swiper(".heroSwipe", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });