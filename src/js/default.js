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
                //todo check if smoothWheel initialized
                $(window).smoothWheel({remove: true});
            }
            $(this).toggleClass('header__menu-toggler_active');
            $('.js-menu').toggleClass('header__menu_visible');
        });
    };

    var initSmoothScrolling = function () {
        //todo make desktop only
        $(window).smoothWheel({
            friction: 0.9,
            stepAmt: 3,
            minMovement: 0.1
        });
    };

    // fixes nonsmooth scrolling in IEs for projects with parallax backgrounds based on fixed bg-block
    var fixScrollForIEAndEdge = function () {
        // replace for css.ua if used
        var detectIE = function () {
            var ua = window.navigator.userAgent;

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            return false;
            },
            version = detectIE();

        if (version >= 11) {
            $('body').on('mousewheel', function () {
                event.preventDefault();
                var wheelDelta = event.wheelDelta;
                var currentScrollPosition = window.pageYOffset;
                window.scrollTo(0, currentScrollPosition - wheelDelta);
            });
        }
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

    var initGAEvents = function () {
        $(document).on('click', '.js-ga-trigger', function () {
            var event = $(this).data('ga');
            ga('send', 'event', 'click', event);
        });
    };

}(jQuery));
