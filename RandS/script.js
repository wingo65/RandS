  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    });

    const target = document.querySelector('.container-fluid2');
    observer.observe(target);
});

window.addEventListener('scroll', function() {
  var images = document.querySelectorAll('.container-fluid3 img'); // Select all images
  var screenPosition = window.innerHeight / 1.3;

  images.forEach(function(image) {
    var imagePosition = image.getBoundingClientRect().top;
    
    if (imagePosition < screenPosition) {
      image.style.opacity = '1'; // Fade in the image
    }
  });
});