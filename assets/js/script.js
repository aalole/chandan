$(document).ready(function () {
  // carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 3000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // toggle
  $(".toggleBtn").click(function () {
    $(".nav-menu, .link").toggle(2000);
    $(".toggleBtn").toggleClass("change");
  });
});
