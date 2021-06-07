  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    speed: 500,
    easing: 'easy',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
        }
      },
      {
        breakpoint: 830,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
        }
      },
      {
        breakpoint: 590,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: true
        }
      },
    ]
  });