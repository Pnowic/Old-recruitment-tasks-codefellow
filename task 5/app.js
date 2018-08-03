$(function() {

    const square = $('.square'),
        icon = $('img'),
        text = $('span');

    square.on('mouseenter', function () {
        icon.stop(true,true).fadeOut();
        text.stop(true,true).delay(350).fadeIn()
    });

    square.on('mouseleave', function () {
       text.stop(true,true).fadeOut();
       icon.stop(true,true).delay(350).fadeIn()
    })

});