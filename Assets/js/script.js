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
  $('.slide-class').slick({
     arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:true,
    adaptiveHeight: false
  });
});


// Parallax Effect

(function(){

var parallax = document.querySelectorAll(".parallax"),
    speed =0.7;

window.onscroll = function(){
  [].slice.call(parallax).forEach(function(el,i){

    var windowYOffset = window.pageYOffset,
        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";

    el.style.backgroundPosition = elBackgrounPos;

  });
};

})();
