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

$(".arrow-up").on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});



if (isFacebookOrInsta()) {
  let { width } = screen;
  // let pixels = width < 361 ? 13 : width < 480 ? 14 : width < 980 ? 15 : 16;
  let pixels = width < 980 ? 15 : 16;
  
  $('html').css({
    'font-size': `${pixels}px`
  })

  var fs = parseFloat($('html').css('font-size'));

  if (fs !== pixels) {
    const dif = fs / pixels;
    const result = pixels / dif;
    $('html').css('font-size', `${result}px`);
  }
}

$('#browser').text(`html => ${$('html').css('font-size')}, banner => ${$('.promotion-info').css('font-size')}, width: ${screen.width}px`);


function isFacebookOrInsta() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf('Instagram') > -1);
}