$("#hamburger").on("click", function(){
    if($(this).is(":checked")){
      var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); 
      $('html').addClass('noscroll').css('top',-scrollTop);         
    }else{
      var scrollTop = parseInt($('html').css('top'));
$('html').removeClass('noscroll');
$('html,body').scrollTop(-scrollTop);
    }
  });

 