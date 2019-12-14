$(document).on("click", "a", function () {

  // get the href attribute
  var newUrl = $(this).attr("href");

  // veryfy if the new url exists or is a hash
  if (!newUrl || newUrl[0] === "#") {
      // set that hash
      location.hash = newUrl;
      return;
  }

  // now, fadeout the html (whole page)
  $("html").fadeOut(function () {
      // when the animation is complete, set the new location
      location = newUrl;
  });

  // prevent the default browser behavior.
  return false;
});
$(document).ready(function(){

  //Page fade
  $('html').fadeIn(1000);

  // mobile menu

  var button = document.getElementById('hamburger-menu'),
      span = button.getElementsByTagName('span')[0];

  button.onclick =  function() {
    span.classList.toggle('hamburger-menu-button-close');
  };

  $('#hamburger-menu').on('click', toggleOnClass);

  function toggleOnClass(event) {
    var toggleElementId = '#' + $(this).data('toggle'),
    element = $(toggleElementId);

    element.toggleClass('on');

  }

  // close hamburger menu after click a

  $( '.nav-menu li a' ).on("click", function(){
    $('#hamburger-menu').click();
  });



  // Portfolio

  $(function(){
    $('#portfolio').mixitup({
      targetSelector: '.item',
      transitionSpeed: 450
    });
  });

  // Modals

  $(".serv").on("click", function() {
    var modal = $(this).data("modal");
    $(modal).fadeIn();
  });

  $(".modal").on("click", function(e) {
    var className = e.target.className;
    if(className === "modal" || className === "close"){
      $(this).closest(".modal").fadeOut();
    }
  });



  //slider

  $('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(2);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });
  //touch controls

  //hide left side other than index on scroll down

  
});