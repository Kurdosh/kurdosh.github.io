$(document).ready(function () {
    $('.reviews__content').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow_next.png"></button>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});