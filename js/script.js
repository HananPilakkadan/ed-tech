$(".responsive").slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$("#notification-icon").click(function () {
  $("#dashboard .notification").toggleClass("active");
});
// scroll-animations
AOS.init();

$("#dashboard .side-bar ul li").click(function () {
  $("#dashboard .side-bar ul li.active").removeClass("active");
  $(this).addClass("active");
});
