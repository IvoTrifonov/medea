$(document).on('ready', function () {
  $('#lightSlider').lightSlider({
    item: 2,
    speed: 800,
    auto: true,
    pauseOnHover: true,
    pause: 4000,
    loop: true,
    slideMargin: 10,
    responsive: [{
      breakpoint: 980,
      settings: {
        item: 1,
        slideMove: 1,
      }
    }]
  });
});

