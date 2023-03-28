'use strict';


$(function(){
    function animation(){
        $('.up').each(function(){
            let target = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            
            if (scroll > target - windowHeight){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    }
    
    animation();
    $(window).scroll(function (){
        animation()
    });
});

$(function(){
    function animation(){
        $('.down').each(function(){
            let target = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            
            if (scroll > target - windowHeight){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        })
    }
    animation();
    $(window).scroll(function (){
        animation();
    });
});




