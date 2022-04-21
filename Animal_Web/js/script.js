$(document).ready(function () {
  var mixer = mixitup(".work_card_container");
  mixer.filter('.north');
});

// var mixer = mixitup(work_card_container, {
//     selectors: {
//         target: '.work_card'
//     },
//     animation: {
//         duration: 300
//     }
// });

var swiper = new Swiper(".card_slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});