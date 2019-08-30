// $(document).bind('mousemove', function(e){
//   $('.circle').css({
//      left:  (e.pageX * 0.05) + 380,
//      top:   (e.pageY * 0.05) -450
//   });
// });

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
  $xp += (($mouseX - $xp)/12);
  $yp += (($mouseY - $yp)/12);

  // index-page circle
  $(".index-circle").css({
    left: -($xp * 0.075) + 400 + 'px',
    top: -($yp * 0.075) - 450 + 'px'
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
   $(".second-circle-about").css({
    left: -($xp * 0.02) + 'px',
    top: -($yp * 0.02) + 'px'
   });
   $(".main-name").css({
    right: ($xp * 0.005) + 320 + 'px',
    top: -($yp * 0.005) + 150 + 'px'
   });
   $(".portrait-frame").css({
    right: ($xp * 0.015) + 300 + 'px',
    top: -($yp * 0.015) + 185 + 'px'
   });

}, 30);