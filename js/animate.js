var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp = 0;
var $xm = 0, $ym = 0;

$(document).mousemove(function (e) {
  $mouseX = e.pageX;
  $mouseY = e.pageY;
});

// Pointer hover actions
$(document).ready(function () {
  $("body").on("mouseenter", ".view-work-container, .view-resume-container, .card-container, .icon, .main-logo, .nav-bar a", function () {
    $("#mouse-pointer").css({
      "background-color": "rgba(255, 152, 0, 0.25)",
      width: '60px',
      height: '60px',
      transform: 'translateX(-20px) translateY(-20px)'
    });
  });

  $("body").on("mouseleave", ".view-work-container, .view-resume-container, .card-container, .icon, .main-logo, .nav-bar a", function () {
    $("#mouse-pointer").css({
      "background-color": "rgba(255, 152, 0, 1)",
      width: '20px',
      height: '20px',
      transform: 'translateX(0px) translateY(0px)'
    });
  });
});

var $loop = setInterval(function () {
  // change 12 to alter damping higher is slower
  $xp += (($mouseX - $xp) / 12);
  $yp += (($mouseY - $yp) / 12);

  $xm += (($mouseX - $xm) / 4);
  $ym += (($mouseY - $ym) / 4);

  // index-page circle
  $(".index-circle").css({
    left: -($xp * 0.075) + 400 + 'px',
    top: -($yp * 0.075) - 450 + 'px'
  });
  $(".mouse-pointer").css({
    left: $xm - 10 + 'px',
    top: $ym - 10 + 'px'
  });

  // project-page circles
  $(".first-circle").css({
    left: -($xp * 0.075) + 50 + 'px',
    top: -($yp * 0.075) + 550 + 'px'
  });
  $(".sec-circle").css({
    left: -($xp * 0.075) + 800 + 'px',
    top: -($yp * 0.075) + 1200 + 'px'
  });
  $(".third-circle").css({
    left: -($xp * 0.075) + 300 + 'px',
    top: -($yp * 0.075) + 2400 + 'px'
  });

  // about-page elements
  $(".first-circle-about").css({
    left: -($xp * 0.075) + 180 + 'px',
    top: -($yp * 0.075) - 50 + 'px'
  });
  $(".main-name").css({
    right: ($xp * 0.01) + 320 + 'px',
    top: -($yp * 0.01) + 150 + 'px'
  });
  $(".portrait-frame").css({
    right: ($xp * 0.025) + 300 + 'px',
    top: -($yp * 0.025) + 185 + 'px'
  });

}, 30);