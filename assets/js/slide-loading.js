'use strict';

$(window).on('load', function(){
  $('body').removeClass('is-slide');
});

$('a:not([href^="#"]):not([target])').on('click', function(e){
  e.preventDefault();
  url = $(this).attr('href');

  if (url !== '') {
    $('body').addClass('is-slide-in');

    setTimeout(function () {
      window.location = url;
    }, 700);
  }
  return false;
});