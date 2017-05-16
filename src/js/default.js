'use strict';

(function($) {

    var windowWidth = $(window).width(),
        plural = function (words) {
            return function (num) {
                return words[1 === num % 10 && 11 !== num % 100 ? 0 : 2 <= num % 10 && 4 >= num % 10 && (10 > num % 100 || 20 <= num % 100) ? 1 : 2]
            }
        },
        textDays = plural(['день','дня','дней']); //use as textDays(parseInt(number, 10))

    $(document).ready(function() {

    });

    $(window).resize(function(){
        if ($(window).width() !== windowWidth) {
            windowWidth = $(window).width();

        }
    });

    $(window).load(function(){

    });

    var initInputInteractedClasses = function () {
        $('.js-input').each(function () {
            $(this).parent().toggleClass('text-input_filled', $(this).val() !== '');
        });
        $(document).on('change DOMAutoComplete keyup keydown', '.js-input', function(e) {
            $(this).parent().toggleClass('text-input_filled', $(this).val() !== '');
            e.stopPropagation();
        }).on('focus', '.js-input', function(e) {
            $(this).parent().addClass('text-input_focus');
            e.stopPropagation();
        }).on('blur', '.js-input', function(e) {
            $(this).parent().removeClass('text-input_focus');
            e.stopPropagation();
        });
    };

    var initPhoneMask = function () {
        $('.js-phone-mask').each(function () {
            $(this).mask('+7 (999) 999 99 99', {autoclear: false});
        });
    };

    var initAccordions = function () {
        $(document).on('click', '.js-accordion', function () {
            if ($(this).parent().hasClass('accordion_opened')) {
                $(this).parent().find('.accordion__content').slideUp(200);
            } else {
                $(this).parent().find('.accordion__content').slideDown(200);
            }
            $(this).parent().toggleClass('accordion_opened');
        });
    };

    var initMenuToggler = function() {
        $(document).on('click', '.js-menu-toggler', function (e) {
            e.preventDefault();
            if ($(this).hasClass('header__menu-toggler_active')) {
                $(window).disablescroll('undo');
                initSmoothScrolling();
            } else {
                $(window).disablescroll();
                $(window).smoothWheel({remove: true});
            }
            $(this).toggleClass('header__menu-toggler_active');
            $('.js-menu').toggleClass('header__menu_visible');
        });
    };

    var initSmoothScrolling = function () {
        $(window).smoothWheel({
            friction: 0.9,
            stepAmt: 3,
            minMovement: 0.1
        });
    };

}(jQuery));
