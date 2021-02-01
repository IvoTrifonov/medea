if (location.pathname !== '/') {
  $('.header').css({
    'background-image': 'linear-gradient(to bottom, #e4ccff, #f5d5f8, #fee0f4, #ffedf5, #fffafb)',
    'padding-bottom': '0',
  })

  $('.header .company-phrase').css({
    'display': 'none'
  })

  $('.appointment-box>span:last-child').css({
    'display': 'none',
  })
}

$(".hamburger").on('click', function (e) {
  const mobileMenu = $('.mobile-menu');
  const isShown = mobileMenu.css('display') == 'none';

  isShown ? mobileMenu.show() : mobileMenu.hide();
  e.stopPropagation();
});

$(".hamburger").on('click', function (e) {
  e.stopPropagation();
});

$(document).on('click', function () {
  $(".mobile-menu").hide();
});