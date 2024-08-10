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

});