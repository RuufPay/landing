(function($) {

    'use strict';

    var swiper = new Swiper('.swiper-container.features1', {
        slidesPerView: 1,
        spaceBetween: 30,
        width: 370,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: "#section-features1 .cmd-go-right",
            prevEl: "#section-features1 .cmd-go-left"
        },
    });

})(jQuery);