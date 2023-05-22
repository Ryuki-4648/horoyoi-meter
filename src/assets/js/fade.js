'use strict';

const animation = (className) => {
  $(className).each(function(){
    const target = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    
    if (scroll > target - windowHeight){
      $(this).css('opacity','1');
      $(this).css('transform','translateY(0)');
    }
  })
}
$(window).scroll(function (){
  animation('.up');
  animation('.down');
});




