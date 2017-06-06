'use strict';

(function($) {

    var windowWidth = $(window).width(),
        plural = function (words) {
            return function (num) {
                return words[1 === num % 10 && 11 !== num % 100 ? 0 : 2 <= num % 10 && 4 >= num % 10 && (10 > num % 100 || 20 <= num % 100) ? 1 : 2]
            }
        },
        textDays = plural(['день','дня','дней']), //use for output as textDays(parseInt(number, 10))
        getURLParameter = function (name) {
            var pageURL = decodeURIComponent(window.location.search.substring(1)),
                URLVariables = pageURL.split('&'),
                parameterName,
                i;

            for (i = 0; i < URLVariables.length; i++) {
                parameterName = URLVariables[i].split('=');

                if (parameterName[0] === name) {
                    return parameterName[1] === undefined ? true : parameterName[1];
                }
            }
        }; // use as paramname = getURLParameter('paramname');

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
            $(this).parent().toggleClass('input-text_filled', $(this).val() !== '');
        });
        $(document).on('change DOMAutoComplete keyup keydown', '.js-input', function(e) {
            $(this).parent().toggleClass('input-text_filled', $(this).val() !== '');
            e.stopPropagation();
        }).on('focus', '.js-input', function(e) {
            $(this).parent().addClass('input-text_focus');
            e.stopPropagation();
        }).on('blur', '.js-input', function(e) {
            $(this).parent().removeClass('input-text_focus');
            e.stopPropagation();
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
            $(this).toggleClass('header__menu-toggler_active');
            $('.js-menu').toggleClass('header__menu_visible');
        });
    };

    var initAnchors = function () {
        $(document).on('click', '.js-banner-anchor', function (e) {
            var anchor = $(this),
                target = $(anchor.data('target'));
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        });
    };

    //add class .js-eq-height to parent of elements
    var equalizeHeight = function () {
        var elems = $('.js-eq-height');
        elems.children().height('');
        if ($(window).width() > 767) {
            window.setTimeout(function () {
                elems.each(function () {
                    var highest = 0,
                        container = $(this);
                    container.children().each(function () {
                        if($(this).height() > highest) {
                            highest = $(this).height();
                        }
                    });
                    container.children().each(function () {
                        $(this).height(highest);
                    });
                });
            }, 500);
        }
    };

}(jQuery));
