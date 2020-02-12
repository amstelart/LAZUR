
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
