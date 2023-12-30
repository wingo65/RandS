$(document).ready(function(){
    $('.navbar-nav .nav-link').click(function(event) {
      // Check if the window width is less than or equal to 768px
      if ($(window).width() <= 768) {
        // Prevent the default action
        event.preventDefault();
        // Remove the active class from all links
        $('.navbar-nav .nav-link').removeClass('active');
      } else {
        // For larger screens, toggle the active class as usual
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

