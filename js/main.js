/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Navanit Patel.","Photographer.","Designer.","Artist."],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

// ========================================================================= //
//  fancybox
// ========================================================================= //

// BABY
$("#baby").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/baby/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/23.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/32.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/33.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/39.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/42.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/44.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/45.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/46.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/48.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/52.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/55.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/57.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/60.JPG',
      opts : {
        caption : '',
      }
    },
    
    {
      src  : 'images/baby/58.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/61.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/62.JPG',
      opts : {
        caption : '',
      }
    },
    
    {
      src  : 'images/baby/63.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/65.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/68.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/69.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/70.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/71.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/72.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/baby/40.jpg',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//BABY


//MATERNITY
$("#babybump").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/maternity/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/11.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/13.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/12.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src : 'images/maternity/17.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//MATERNITY

$("#babyparents").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/babyparents/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/11.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/12.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/13.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/16.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/24.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/25.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/26.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/27.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/28.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/29.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/30.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/31.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/32.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/33.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/34.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/36.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/37.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/40.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/41.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/42.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/43.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/44.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/45.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/47.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/48.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/51.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/54.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/babyparents/55.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});

//COUPLE
$("#couple").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/couple/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/16.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/17.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/22.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/23.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/24.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/25.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/26.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/27.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/28.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/30.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/31.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/32.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/33.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/34.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/35.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/36.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/37.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/38.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/39.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/40.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/41.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/42.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/43.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/couple/44.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'images/couple/45.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//COUPLE

//FAMILY
$("#family").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/family/13.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/12.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/16.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/17.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/22.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/23.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/24.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/family/24.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//FAMILY

//INDUSTRIAL
$("#industrial").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/industrial/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/industrial/1.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//INDUSTRIAL

//INTERIOR
$("#interior").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/interior/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/11.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/12.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/13.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/16.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/17.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/22.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/23.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/24.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/25.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/26.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/27.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/28.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/29.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/30.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/interior/31.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
});
//INTERIOR

//PRODUCT
$("#product").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/product/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/product/10.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
})
//PRODUCT

//FOOD
$("#food").on('click', function() {
  $.fancybox.open([
    {
      src  : 'images/food/22.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/1.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/2.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/3.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/4.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/5.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/6.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/7.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/8.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/9.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/10.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/11.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/12.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/13.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/14.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/15.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/16.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/17.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/18.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/19.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/20.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/21.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/23.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/24.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/25.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/26.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/27.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/28.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/29.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/30.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/31.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/32.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/33.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/34.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/35.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/36.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/37.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/38.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/39.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/40.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/41.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/42.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/43.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/44.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/45.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/46.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/47.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/48.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/49.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/50.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/51.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/52.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/53.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/54.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/55.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/56.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/57.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/58.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/59.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/60.JPG',
      opts : {
        caption : '',
      }
    },
    {
      src  : 'images/food/61.JPG',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
})
//FOOD

$("#masking").on('click', function() {
  $.fancybox.open([
    {
      src  : '',
      opts : {
        caption : '',
      }
    },
    {
      src  : '',
      opts : {
        caption : '',
      }
    },
    {
      src  : '',
      opts : {
        caption : '',
      }
    },
    {
      src  : '',
      opts : {
        caption : 'Second caption',
    }
  }
], {
  protect: true,
  animationEffect: "circular",
  transitionEffect: "circular",
  loop : false,
  arrows: false,
  buttons: [
    "share",
    "slideShow",
    "fullScreen",
    "close"
  ],
});
})