'use strict';

$(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top - 64
            }, 300);
        }
    });
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    scroll>30 ? $('.lp-header').addClass('shadow') :  $('.lp-header').removeClass('shadow');
});
})