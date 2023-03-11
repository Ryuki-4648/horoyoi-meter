'use strict';

// sp nav
$(function() {
    $('.toggle').click(function() {
    $(this).toggleClass("active");
        if($(this).hasClass('active')) {
            $('.nav-contents').addClass('active');
        } else {
            $('.nav-contents').removeClass('active');
        }
    });
});