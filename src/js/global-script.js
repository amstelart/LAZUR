
$( document ).ready(function() {
  // code
    //animate header end
    var fixNav = 120;
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if ( scroll >= fixNav ) {
            $('.page-header').addClass('sticky');
        }
        else {
            $('.page-header').removeClass('sticky');
        }
    });
    //animate header end
  // end code
});

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('#m-carousel:not(.slick-initialized)').slick({
      centerMode: false,
      variableWidth: true,
      dots: true,
      infinite: false,
      arrows: false,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $("#m-carousel.slick-initialized").slick("unslick");
  }
});