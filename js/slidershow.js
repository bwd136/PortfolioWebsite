$(document).ready(function(){
    $('.slideshow').slick({
        
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('.slideshow').slickLightbox({
        src: 'src',
        itemSelector: 'img',
        navigateByKeyboard: true,
        background: 'rgba(251,250,248)'
      });
      
     
  });
