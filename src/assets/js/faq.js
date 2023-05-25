$('dd').hide();
$('dt').on('click', function(){
  $(this).toggleClass('arrow');
  $(this).next('dd').slideToggle();
});
