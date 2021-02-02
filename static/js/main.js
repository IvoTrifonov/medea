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


//set font-size to 12px
$('html').css('font-size', "16px")

var fs = parseFloat($('html').css('font-size'));

if (fs > 16) 
{   
  const dif = fs / 16;
  $('html').css('font-size', `${16 / diff}px`);
}

$('#browser').text(`font size => ${$('html').css('font-size')}`)
