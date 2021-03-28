$(document).ready(function () {

  var currentDir = $("a").css("direction");


  if($('.header-slider').length){
    $(".header-slider").slick({
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      rtl: currentDir == "rtl" ? true : false,
      dots: false,
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
      responsive: [
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".personal-img").length) {
    $(document).on("change", ".personal-img-file", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) {
        // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () {
          // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile
            .closest(".personal-img")
            .find(".per")
            .css("background-image", "url(" + this.result + ")");
          $(".personal-img-validation-delete").css("display", "block");
        };
      }
    });

    $(document).on("click", ".personal-img-validation-delete", function () {
      $(this).closest(".personal-img").find(".per").css("background-image", "url('./assets/images/avatar.png')");
      $(this).css("display", "none");
      $(this).closest(".personal-img").find('.personal-img-file').val('');
    });
  }

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
