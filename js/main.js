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
$("#baby").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/portfolio/1.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/portfolio/12.jpg',
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

$("#babybump").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/babybump/1.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babybump/3.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babybump/4.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babybump/2.jpg',
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

$("#babyparents").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/babyparents/1.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babyparents/2.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babyparents/3.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/babyparents/4.jpg',
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

$("#couple").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/couple/2.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/couple/3.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/couple/5.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/couple/6.jpg',
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

$("#family").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/family/2.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/family/3.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/family/4.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/family/8.jpg',
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

$("#industrial").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/industrial/8.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/industrial/5.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/industrial/7.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/industrial/3.JPG',
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

$("#interior").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/interior/1.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/interior/10.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/interior/12.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/interior/18.JPG',
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

$("#masking").on('click', function() {
  $.fancybox.open([
    {
      src  : 'file:///E:/Folio/images/masking/2.JPG',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/masking/7.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/masking/10.jpg',
      opts : {
        caption : 'First caption',
      }
    },
    {
      src  : 'file:///E:/Folio/images/masking/11.JPG',
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
})
})
