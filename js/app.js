$(function(){
  $('.carosel-control-right').click(function() {
    $(this).blur();
    $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
  });
  $('.carosel-control-left').click(function() {
    $(this).blur();
    $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
  });
  $('.menu').click(function(){
    $(this).toggleClass('transition close');
    $('.down-bg').slideToggle();
  });
  const whoAmI = ['I\'m a UX designer.', 'I\'m a UI designer.', 'I\'m obsessed by all things digital.', 'I have a design degree.'];
  let counter = 0;
  setInterval(function() {
    $('.iAm').html(whoAmI[counter]);
    console.log(counter);
    if(counter >= whoAmI.length-1){
      return counter = 0;
    }
    return counter ++;
  }, 4000);
  

});
