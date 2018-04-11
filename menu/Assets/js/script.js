//sliding Menu content down

    $(document).ready(function(){
         $('.menu').click(function() {
             $(this).toggleClass('open');
           $('.overlay-content').slideToggle(400);
    });
});

/*
$('#menu').on('click', function(){
     event.stopPropagation();

    if($('#menu').hasClass('open')){
      $('#menu.open').removeClass('open');

    }else{

        $('#menu.open').addClass('open');
    }
}); */

 $(document).ready(function(){
  $('.B-A-N-N-E-R ').slick({
    dots:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
    responsive:true,
    loop:true,
    swipe:true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    adaptiveHeight: false
  });
});
var parallax = document.querySelectorAll(".parallax"),
    speed =0.7;

window.onscroll = function(){

  [].slice.call(parallax).forEach(function(el,i){

    var windowYOffset = window.pageYOffset,
        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

    el.style.backgroundPosition = elBackgrounPos;

  });
};

// if ($(window).width() > 650) {
//
//   // Parallax Effect
//   var parallax = document.querySelectorAll(".parallax"),
//       speed =0.7;
//
//   window.onscroll = function(){
//
//     [].slice.call(parallax).forEach(function(el,i){
//
//       var windowYOffset = window.pageYOffset,
//           elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
//
//       el.style.backgroundPosition = elBackgrounPos;
//
//     });
//   };
//
// }
// else {
//
// }



// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2
//
// (function($) {
//
//     jQuery.scrollSpeed = function(step, speed, easing) {
//
//         var $document = $(document),
//             $window = $(window),
//             $body = $('html, body'),
//             option = easing || 'default',
//             root = 0,
//             scroll = false,
//             scrollY,
//             scrollX,
//             view;
//
//         if (window.navigator.msPointerEnabled)
//
//             return false;
//
//         $window.on('mousewheel DOMMouseScroll', function(e) {
//
//             var deltaY = e.originalEvent.wheelDeltaY,
//                 detail = e.originalEvent.detail;
//                 scrollY = $document.height() > $window.height();
//                 scrollX = $document.width() > $window.width();
//                 scroll = true;
//
//             if (scrollY) {
//
//                 view = $window.height();
//
//                 if (deltaY < 0 || detail > 0)
//
//                     root = (root + view) >= $document.height() ? root : root += step;
//
//                 if (deltaY > 0 || detail < 0)
//
//                     root = root <= 0 ? 0 : root -= step;
//
//                 $body.stop().animate({
//
//                     scrollTop: root
//
//                 }, speed, option, function() {
//
//                     scroll = false;
//
//                 });
//             }
//
//             if (scrollX) {
//
//                 view = $window.width();
//
//                 if (deltaY < 0 || detail > 0)
//
//                     root = (root + view) >= $document.width() ? root : root += step;
//
//                 if (deltaY > 0 || detail < 0)
//
//                     root = root <= 0 ? 0 : root -= step;
//
//                 $body.stop().animate({
//
//                     scrollLeft: root
//
//                 }, speed, option, function() {
//
//                     scroll = false;
//
//                 });
//             }
//
//             return false;
//
//         }).on('scroll', function() {
//
//             if (scrollY && !scroll) root = $window.scrollTop();
//             if (scrollX && !scroll) root = $window.scrollLeft();
//
//         }).on('resize', function() {
//
//             if (scrollY && !scroll) view = $window.height();
//             if (scrollX && !scroll) view = $window.width();
//
//         });
//     };
//
//     jQuery.easing.default = function (x,t,b,c,d) {
//
//         return -c * ((t=t/d-1)*t*t*t - 1) + b;
//     };
//
// })(jQuery);
//
// //Smoooth Mouse scroll
// jQuery.scrollSpeed(100, 800);
