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

  // index circle
  $(".circle").css({
    left: -($xp * 0.1) + 400 + 'px',
    top: -($yp * 0.1) - 450 + 'px'
  });  

   // index circle
  $(".first-circle").css({
    left: -($xp * 0.1) + 50 + 'px',
    top: -($yp * 0.1) + 550 + 'px'
   });  

  // index circle
  $(".sec-circle").css({
    left: -($xp * 0.1) + 800 + 'px',
    top: -($yp * 0.1) + 1200 + 'px'
  });  

  // index circle
  $(".third-circle").css({
    left: -($xp * 0.1) + 300 + 'px',
    top: -($yp * 0.1) + 2400 + 'px'
  });  

}, 30);