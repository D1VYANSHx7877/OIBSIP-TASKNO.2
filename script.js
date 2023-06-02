// JavaScript code
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Change slide every 2 seconds

function nextSlide() {
  slides[currentSlide].classList.remove('active'); // Remove active class from current slide

  currentSlide = (currentSlide + 1) % slides.length; // Update current slide index

  slides[currentSlide].classList.add('active'); // Add active class to next slide
}

// Show the first slide initially
slides[currentSlide].classList.add('active');
