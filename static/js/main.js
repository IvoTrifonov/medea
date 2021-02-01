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

$('#browser').text($.browser.android)

if ($.browser.android) {
  $('html').css({
    'font-size': '50px'
  })
}

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
} 

if(isFacebookApp()){
  
  $('html').css({
    'font-size': '6px'
  })
  $('#browser').text(`on facebook, ${$('html').css('font-size')}`);
}
