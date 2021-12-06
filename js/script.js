$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
  $('.venobox').venobox(); 
$('.service-slider').slick({
  vertical:true,
  slidesToShow:3,
  centerMode:true,
  centerPadding:"0",
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-up prev"></i>',
  nextArrow:'<i class="fas fa-chevron-down next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'<i class="fas fa-chevron-left prev"></i></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i></i>',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        prevArrow:'<i class="fas fa-chevron-left prev"></i></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
  
});
$('.counter').counterUp();
$('.s-slider').slick({
  arrows:false,
  slidesToShow:5,
    centerMode:true,
  centerPadding:"0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})