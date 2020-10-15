    jQuery(document).ready(function($) {
            $('.header-slider__list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            fade: true,
            touchMove: true,
            // prevArrow: $('.nav_icon_prev'),
            // nextArrow: $('.nav_icon_next'),
            swipe: true,
            autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true
        });
    });






