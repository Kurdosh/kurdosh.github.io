$(document).ready(function () {
    $('.review__slider').slick({
        dots: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        dotsClass: "dots-style",
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },]
    });
    $('.burger').click(function () {
        $('.header__nav').toggleClass('header__nav_active');
        $('.burger').toggleClass('burger_active');
    });

    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        if ($(window).width() <= '768') {
            if (scrolled >= 1000) {
                $('.header__nav').addClass('header__nav_top');
            }
            if (scrolled <= 1000) {
                $('.header__nav').removeClass('header__nav_top');
            }
        }
    });
});
