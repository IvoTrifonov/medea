AOS.init({
  delay: 100,
  duration: 600,
  once: true
});

$(document).on('ready', function () {
  setTimeout(() => {
    $('body').css({ 'visibility': 'visible' });
  }, 100);
});

$(".arrow-up").on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});
