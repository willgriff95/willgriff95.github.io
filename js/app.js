$(function(){
  AOS.init({
    duration: 1200
  });

  // array with texts to type in typewriter
  var dataText = [ 'A bit about me...', 'I\'m Looking for a Web Developer role', 'I have UX & UI Design experience', 'Anyway...', 'Check out my work below'];

  // type one text in the typwriter
  // keeps calling itself until the text is finished

  setTimeout(function(){
    function typeWriter (text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
        document.querySelector('.iAm').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      } /* text finished, call callback if there is a callback function */ else if (typeof fnCallback === 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 2000);
      }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] ==='undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // setTimeout(typeWriter, 20000);
    // start the text animation
    StartTextAnimation(0);
  }, 2000);

  var obj = document.createElement('audio');

  var $fruitFrenzy = $('.fruitFrenzyURLLink');
  $fruitFrenzy.click(function(){
    clickSound();
  });

  var clicked = false;
  var $menu = $('.burgerMenuButton');
  $menu.click(function(){
    if(clicked=== false){
      $('#mySidenav').css('width', '250px');
      $menu.toggleClass('clicked');
      $menu.css('color', 'white !important');
      $('#main').css('marginLeft','250px');
      return clicked = true;
    } else {
      $('#mySidenav').css('width', '0');
      $menu.toggleClass('clicked');
      $('#main').css('marginLeft','0');
      return clicked = false;
    }
  });


  function clickSound(){
    obj.src='./audio/pop.mp3';
    obj.volume=0.10;
    obj.autoPlay=false;
    obj.preLoad=true;
    obj.play();
  }


  // console.log(burgerMenuTriggerPressed);
  $('.carosel-control-right').click(function() {
    $(this).blur();
    $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
    // $(this).parent().find('.technologyName').first().insertAfter($(this).parent().find('.technologyName').last());
  });
  $('.carosel-control-rightGrey').click(function() {
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

});
