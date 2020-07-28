
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
$(window).on("load resize", function () {
  $(window).width() < 768
    ? $("#certificates__list:not(.slick-initialized)").slick({
        centerMode: !1,
        variableWidth: !0,
        dots: !0,
        infinite: !1,
        arrows: !1,
        speed: 100,
        slidesToShow: 3,
        rows: 2,
      })
    : $("#certificates__list.slick-initialized").slick("unslick");
});


// На проекте нет jQuery, но хочется $( document ).ready...
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// cache the element
var $navBar = $('.calc__price');

// find original navigation bar position
    var navPos = $navBar.offset().top;

    //высота фиксированного блока
    var navbar_height = $navBar.outerHeight();
    //запомним стандартный отступ
    var navbar_pb = parseInt($navBar.parent().css("padding-bottom"));

    $(window).scroll(function() {

        // get scroll position from top of the page
        var scrollPos = $(this).scrollTop();

        // check if scroll position is >= the nav position
        if (scrollPos >= navPos) {
            $navBar.parent().css('padding-bottom',navbar_height);
            $navBar.addClass('fixed');
        } else {
            $navBar.parent().css('padding-bottom', navbar_pb );
            $navBar.removeClass('fixed');
        }
    });

ready(function(){

  var links = document.querySelectorAll('[href^="#"][data-scroll-link]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      if(hash && hash !== '#') {
        e.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = getOffsetRect(document.querySelector(hash)).top - 70; // С поправкой в 10px
        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function(timeFraction) {
            return Math.pow(timeFraction, 4); // https://learn.javascript.ru/js-animation
          },
          draw: function(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0,scrollNow);
          }
        });
      }
    }, false);
  }

  function animate(_ref) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()
    var body = document.body
    var docElem = document.documentElement
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    var top  = box.top +  scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    return { top: Math.round(top), left: Math.round(left) }
  }

});