$(function(){
    $('.main-advantage-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 10,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },

  ]
});
// feadback slider
$('.slider-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover:false,
  autoplaySpeed: 2000,
  nextArrow: ".left-arrow",
  prevArrow: ".right-arrow",

  
});

})