$(document).ready(function () {

  if($('.header-slider').length){
    $(".header-slider").slick({
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
    });
  }

  if($('.new-ads-slider').length){
    $(".new-ads-slider").slick({
      dots: true,
      infinite: false,
      touchMove: true,
      swipe: true,
      swipeToSlide: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if($('.main-department-slider').length){
    $(".main-department-slider").slick({
      dots: true,
      infinite: false,
      speed: 200,
      touchMove: true,
      swipe: true,
      swipeToSlide: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      loop: false,
      arrows: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".department-slider").length) {
    $(".department-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      arrows: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".slider-top").length) {
    $(".slider-top").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      asNavFor: ".slider-bottom",
    });
    $(".slider-bottom").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-top",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
    });
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
