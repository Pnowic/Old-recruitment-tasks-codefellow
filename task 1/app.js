$(function() {

    $('.hamburger').click(function(){
        $('.hamburger-menu').slideToggle();
    });

    $(window).on('resize', function (){
        $('.hamburger-menu').slideUp();
    })

});