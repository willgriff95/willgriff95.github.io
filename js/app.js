$(function(){
  $('.main').onepage_scroll({
    sectionContainer: 'section',
    responsiveFallback: 600,
    loop: true
  });

  var overlayNav = $('.cd-overlay-nav'),
    overlayContent = $('.cd-overlay-content'),
    navigation = $('.cd-primary-nav'),
    toggleNav = $('.burgerMenuTrigger');


  $('.to-the-top').click(function() {
    $(window).scrollTop(0);
  });
  // console.log(burgerMenuTriggerPressed);
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
    // $('.down-bg').slideToggle();
  });
  const whoAmI = ['I\'m obsessed by digital products', 'I\'m obsessed by all things digital.', 'I love UI design.'];
  let counter = 0;
  setInterval(function() {
    $('.iAm').html(whoAmI[counter]);
    if(counter >= whoAmI.length-1){
      return counter = 0;
    }
    return counter ++;
  }, 4000);



  //inizialize navigation and content layers
  layerInit();
  $(window).on('resize', function(){
    window.requestAnimationFrame(layerInit);
  });

  //open/close the menu and cover layers
  toggleNav.click(function(){
    if(!toggleNav.hasClass('close-nav')) {
      //it means navigation is not visible yet - open it and animate navigation layer
      toggleNav.addClass('close-nav');

      overlayNav.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', function(){
        navigation.addClass('fade-in');
      });
    } else {
      //navigation is open - close it and remove navigation layer
      toggleNav.removeClass('close-nav');

      overlayContent.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1
      }, 500, 'easeInCubic', function(){
        navigation.removeClass('fade-in');

        overlayNav.children('span').velocity({
          translateZ: 0,
          scaleX: 0,
          scaleY: 0
        }, 0);

        overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, function(){
            overlayContent.removeClass('is-hidden');
          });
        });
        if($('html').hasClass('no-csstransitions')) {
          overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0
          }, 0, function(){
            overlayContent.removeClass('is-hidden');
          });
        }
      });
    }
  });
  function layerInit(){
    var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
    overlayNav.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: diameterValue+'px',
      width: diameterValue+'px',
      top: -(diameterValue/2)+'px',
      left: -(diameterValue/2)+'px'
    }, 0);

    overlayContent.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: diameterValue+'px',
      width: diameterValue+'px',
      top: -(diameterValue/2)+'px',
      left: -(diameterValue/2)+'px'
    }, 0);
  }




});
