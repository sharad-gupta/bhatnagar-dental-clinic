$(document).ready(function() {

    var menu = $('.menu');
    var content = $('.content');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            menu.addClass('sticky');
            content.addClass('menu-padding');
        } else {
            menu.removeClass('sticky');
            content.removeClass('menu-padding');
        }
    }

    $(document).scroll();

});