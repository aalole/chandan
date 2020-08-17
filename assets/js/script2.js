// alert("hello good afternoon")
(function () {
  //   "use strict";
  var slides = document.querySelectorAll(".wk-bg"),
    button = document.getElementById("button"),
    arrows = document.querySelector(".article-icon"),
    carouselCount = 0,
    scrollInterval,
    interval = 5000;

  arrows.addEventListener("click", function (e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount -= 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  });
  arrows.addEventListener("click", sliderEvent);
  arrows.addEventListener("autoClick", sliderEvent);

  function sliderEvent(e) {
    e = e || window.event;
    e.preventDefault();
    carouselCount += 100;
    slider();
    if (e.type !== "autoClick") {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, interval);
    }
  }

  function slider() {
    switch (carouselCount) {
      case -100:
        carouselCount = 0;
        break;
      case 300:
        carouselCount = 0;
        break;
      default:
        break;
    }
    console.log(carouselCount);
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute(
        "style",
        "transform:translateX(-" + carouselCount + "%)"
      );
    }
  }

  // create new Event to dispatch click for auto scroll
  var autoClick = new Event("autoClick");
  function autoScroll() {
    arrows.dispatchEvent(autoClick);
  }

  // set timing of dispatch click events
  scrollInterval = setInterval(autoScroll, interval);
})();
