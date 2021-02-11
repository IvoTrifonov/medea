AOS.init({
  delay: 100,
  duration: 600,
  once: true
});

$(document).on('ready', function () {
  setTimeout(() => {
    $('body').css({
      'visibility': 'visible'
    });
  }, 100);
});

$(function () {
  $(document).on('scroll', function () {
    if ($(this).scrollTop() > 300) {

      $('.arrow-up').fadeIn();
      
    } else {
      $('.arrow-up').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('.arrow-up').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});

if (isFacebookOrInsta()) {
  let pixels = 16;

  $('html').css({
    'font-size': `${pixels}px`
  })

  var fs = parseFloat($('html').css('font-size'));

  if (fs !== pixels) {
    const dif = fs / pixels;
    const result = pixels / dif;
    $('html').css('font-size', `${result}px`);
  }

  $('style').append("@media (max-width: 980px) {html{ font-size:15px; }}");
}

function isFacebookOrInsta() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf('Instagram') > -1);
}