$('.down_btn').click(function(){
    $("html, body").animate({ scrollTop:  640}, 600);
    return false;
 });

$(window).scroll(function() {
if ($(this).scrollTop() > 100){  $('.links-wrapper,.links,.logo').addClass("sticky");  }
  else{   $('.links-wrapper,.links,.logo').removeClass("sticky");  }
});



    $(document).ready(function(){
         $('.menu').click(function() {
             $(this).toggleClass('open');
           $('.overlay-content').slideToggle(400);
    });
});


 $(document).ready(function(){
  $('.slide-class').slick({
    dots:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed:2000,
    speed:1500,
    responsive:true,
    loop:true,
    swipe:true,
    // cssEase: 'cubic-bezier(0.600, 0.280, 0.235, 0.045)',
     cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    adaptiveHeight: false
  });
});


$(document).ready(function(){
  $('.your-class').slick({
      dots:true,
      infinite: true,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay: true,
      autoplaySpeed:1500,
      speed:900,
      responsive:true,
      loop:true,
      swipe:true,
      adaptiveHeight: false
  });
});


  // Parallax Effect

if ($(window).width() > 650) {

      var parallax = document.querySelectorAll(".parallax"),

          speed =0.8;
      window.onscroll = function(){

    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,

          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;
    });
  };
}
