//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("navbar-shrink");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-shrink");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(document).ready(function(){
  //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
          e.preventDefault();
          $('body').toggleClass('nav-expanded');
          $('.bar-icon').hide(100); 
        });
  // close the side bar
 $('#nav-close').on('click',function(e){
          e.preventDefault();
          $('body').removeClass('nav-expanded');
          $('.bar-icon').show(400);
        });
  // Add smooth scrolling to all links in navbar + footer link
  $(".main-menu a, .navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){   
     // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }); 
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})