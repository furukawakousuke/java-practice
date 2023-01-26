$(function(){
  $('.box').on('click',function(){
   $('.box').addClass('box-ext'); 
  });
    $('.box').mouseout(function(){
      $('.box').removeClass('box-ext');
  });
});