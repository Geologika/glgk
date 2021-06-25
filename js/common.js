jQuery(document).ready(function ($) {
    $("a[href*='#']").mPageScroll2id({
        'scrollSpeed': 700,
        'autoScrollSpeed': true,
        'scrollEasing': 'easeOutBack'
    });
    $('.sliderBlock .items').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });

    $('.sliderPluses .items').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.sliderPlusesControls .next').click(function () {
        $('.sliderPluses .items').slick('slickNext');
    });
    $('.sliderPlusesControls .prev').click(function () {
        $('.sliderPluses .items').slick('slickPrev');
    });
    $('.wpcf7-submit').click(function (event) {
        setTimeout(function () {
            $('.wpcf7-response-output').removeClass('wpcf7-validation-errors');
            $('.wpcf7-response-output').removeClass('wpcf7-mail-sent-ok');
            $('.wpcf7-response-output').removeClass('wpcf7-spam-blocked');
            $('.wpcf7-display-none').hide();
            $('.wpcf7-response-output').html('');
        }, 3000);
    });
    $(".mask-phone").mask("+7-999-999-9999");
    $(".phone-mask").mask("+7-999-999-9999");
    $('.wpcf7-checkbox label').append('<span class="checkmark"></span>');
    $('.wpcf7-checkbox input').prop('checked', true);
    $('.callme').click(function (event) {
        event.preventDefault();
        var popup = $(this).data('popup');
        var action = $(this).data('action');
        $('.popup-mask').addClass('active');
        $('.popup-' + popup).children('.bottomLine').css('height', ($('.popup-' + popup).height() - 40));
        if (action.length > 0) {
            $('.popup-' + popup + ' .popup-action').val(action);
        }
        $('.popup-' + popup).addClass('active');
        $("body").css("overflow", "hidden");
        return false;
    });
    $('.popup-form .close, .popup-mask').click(function (event) {
        event.preventDefault();
        $('.popup-mask').removeClass('active');
        $('.popup-form').removeClass('active');
        $('.popup-success').removeClass('active');
        $('.wpcf7-response-output').removeClass('wpcf7-validation-errors');
        $('.wpcf7-response-output').removeClass('wpcf7-mail-sent-ok');
        $('.wpcf7-response-output').html('');
        $("body").css("overflow", "auto");
        return false;
    });
    $('.burgerBtn').click(function (event) {
        $('.mobileMenu').addClass('active');
        $("body").css("overflow", "hidden");
    });
    $('.mobileMenu .close').click(function (event) {
        $('.mobileMenu').removeClass('active');
        $("body").css("overflow", "auto");
    });
    $('.faqBlock .q').click(function (event) {
        $(this).parent().toggleClass('active');
    });
    $('.productBlock .thumbnails .item').click(function (event) {
        $('.productBlock .thumbnails .item').removeClass('current');
        $(this).addClass('current');
        $('.productBlock .mainPhoto .item').removeClass('current');
        $('.productBlock .mainPhoto .item-' + $(this).data('n')).addClass('current');
    });
    $('.productBlock .thumbnails .item:first-child').click();
    if (jQuery(window).scrollTop() > 100) {
        jQuery('body').addClass('fixed_menu');
    } else {
        jQuery('body').removeClass('fixed_menu');
    }
});
jQuery(window).resize(function () {
    if (jQuery(window).width() > 767) {
    }
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
        jQuery('body').addClass('fixed_menu');
    } else {
        jQuery('body').removeClass('fixed_menu');
    }
});