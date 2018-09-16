---
---
// Scroll Top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});

window.onload = function () {
  var v = document.getElementById("landingVideo");
  v.playbackRate = {{site.video_playback_rate}}
};

var deer = "tor";
var rae = "term";
var fa = "moni";
var doe = "@";
var poo = "gmail.com";
var fullMusic = rae + fa + deer + doe + poo;
var gomomentum =  document.getElementById('goMomentum');
gomomentum.setAttribute('action', '//formspree.io/' + fullMusic);