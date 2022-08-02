$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__content").addClass("active");
  });

  $(".header__close").click(function (event) {
    $(".header__content").removeClass("active");
  });

  $(".main").click(function (event) {
    if (
      $(".header__content").hasClass("active") &&
      event.target != $(".header__content")[0] &&
      !$(".header__content").has(event.target).length
    ) {
      $(".header__content").removeClass("active");
    }
  });

  $(".reviews-slider").slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".top-slider").slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
