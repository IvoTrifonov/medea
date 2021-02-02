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

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
} 

$('#browser').text(`font size -> ${$('html').css('font-size')}`)


webView.getSettings().setTextZoom(100);

var docEl = document.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
    var clientWidth = docEl.clientWidth || 375;
    clientWidth > 750 ? clientWidth = 750 : clientWidth = clientWidth;
    if (clientWidth){
        const fz = docEl.style.fontSize = 20 * (clientWidth / 375);
        docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        window.remscale = clientWidth / 375;
        var realfz = ~~(+window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px','')*10000)/10000
        if (fz !== realfz) {
            document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
        }
    }
};
if (document.addEventListener){
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
}


