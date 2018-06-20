$(function(){
  AOS.init({
    duration: 1200,
  });
  var overlayNav = $('.cd-overlay-nav'),
    overlayContent = $('.cd-overlay-content'),
    navigation = $('.cd-primary-nav'),
    toggleNav = $('.burgerMenuTrigger');
  var obj = document.createElement('audio');

  var $fruitFrenzy = $('.fruitFrenzyURLLink');
  $fruitFrenzy.click(function(){
    clickSound();
  });

  function clickSound(){
    obj.src='./audio/pop.mp3';
    obj.volume=0.10;
    obj.autoPlay=false;
    obj.preLoad=true;
    obj.play();
  }

  // $('.main').onepage_scroll({
  //   sectionContainer: 'section',
  //   responsiveFallback: 600,
  //   loop: true
  // });

  function layerInit(){
    // var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
    overlayNav.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: '1000px',
      width: '500px',
      top: '-250px',
      // border-radius: '0',
      right: '-350px'
      // transform: scaleX(1) scaleY(1);
    }, 0);

    overlayContent.children('span').velocity({
      scaleX: 0,
      scaleY: 0,
      translateZ: 0
    }, 50).velocity({
      height: '1000px',
      width: '500px',
      // border-radius: '0',
      top: '-250px',
      right: '-350px'
      // transform: scaleX(1) scaleY(1);
    }, 0);
  }


  $('.to-the-top').click(function() {
    $(window).scrollTop(0);
  });
  // console.log(burgerMenuTriggerPressed);
  $('.carosel-control-right').click(function() {
    $(this).blur();
    $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
    // $(this).parent().find('.technologyName').first().insertAfter($(this).parent().find('.technologyName').last());
  });
  $('.carosel-control-left').click(function() {
    $(this).blur();
    $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
    // $(this).parent().find('.technologyName').last().insertBefore($(this).parent().find('.technologyName').first());
  });
  $('.menu').click(function(){
    $(this).toggleClass('transition close');
    // $('.down-bg').slideToggle();
  });
  const whoAmI = ['I\'m a web developer', 'I design & develop digital products.', 'I am UX enthusiast.', 'I design UI\'s for fun'];
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




});
