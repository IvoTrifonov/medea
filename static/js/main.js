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

let pixels = screen.width < 480 ? 14 : 16;

$('html').css({
  'font-size': `${pixels}px`
})

var fs = parseFloat($('html').css('font-size'));

if (fs !== pixels) {
  const dif = fs / pixels;
  const result = pixels / dif;
  $('html').css('font-size', `${result}px`);
}



$('#browser').text(`font size => ${$('html').css('font-size')}`);