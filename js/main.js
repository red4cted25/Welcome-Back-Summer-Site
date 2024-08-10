$(document).ready(function(){
    $(window).on('scroll', function() {
        var header = $('header');
        if ($(window).scrollTop() > 150) {
            header.css('background-color', 'rgba(195, 92, 47, 0.8)');
        } else {
            header.css('background-color', 'transparent');
        }
    });

    // Animate the first palm tree (from the left)
    $('#palm1').css('opacity', '1').animate({left: '+=13vw'}, {duration: 3000, step: function(now, fx) {$(this).css('transform', 'rotate(' + (now * 0.15) + 'deg)');}});

    // Animate the second palm tree (from the right)
    $('#palm2').css('opacity', '1').animate({right: '+=13vw'}, {duration: 3000, step: function(now, fx) {$(this).css('transform', 'rotate(' + (-now * 0.15) + 'deg)');}});

    $('#gallery .column img').on('mouseenter', function() {
        var randomRotation = Math.floor(Math.random() * 21) - 10; // Random number between -15 and 15
        $(this).css('transform', 'scale(1.05) rotate(' + randomRotation + 'deg)');
    }).on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
    });
});

// Image Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("coolSlide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block"; 
}