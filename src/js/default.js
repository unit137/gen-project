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
        }, // use as paramname = getURLParameter('paramname');
        RGBToHex = function(r,g,b){
            var bin = r << 16 | g << 8 | b;
            return (function(h){
                return new Array(7-h.length).join("0")+h
            })(bin.toString(16).toUpperCase())
        },
        isMobile = (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera),
        detectIE = function () {
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
        isIE = detectIE(),
        isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
        isOSX = navigator.platform.toUpperCase().indexOf('MAC')>=0,
        isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    $(document).ready(function() {

    });

    $(window).on('resize', function () {
        if ($(window).width() !== windowWidth) {
            windowWidth = $(window).width();

        }
    });

    $(window).on('load', function () {

    });

    var initInputInteractedClasses = function () {
        $('.js-input').each(function () {
            $(this).closest('.form__item').toggleClass('input-text_filled', $(this).val() !== '');
        });
        $(document).on('change DOMAutoComplete keyup keydown', '.js-input', function(e) {
            e.stopPropagation();
            $(this).closest('.form__item').toggleClass('input-text_filled', $(this).val() !== '');
        }).on('focus', '.js-input', function(e) {
            e.stopPropagation();
            $(this).closest('.form__item').addClass('input-text_focused');
        }).on('blur', '.js-input', function(e) {
            e.stopPropagation();
            $(this).closest('.form__item').removeClass('input-text_focused');
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
        $(document).on('click', '.js-anchor', function (e) {
            var target = $($(this).data('target'));
            e.preventDefault();
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }).on('click', '.js-anchor-link', function (e) {
            var target = $($(this).attr('href'));
            e.preventDefault();
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }).on('click', '.js-to-top', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    };

    //add class .js-eq-height to parent of elements
    var equalizeHeight = function () {
        var elems = $('.js-eq-height');
        elems.children().height('');
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
    };

    var initPopups = function () {
        var popup = $('.popup'),
            body = $('body'),
            showPopup = function (target) {
                popup.removeClass('popup_close-animation').addClass('popup_active');
                $('#' + target).addClass('popup__item_active');
                body.addClass('_popup-active');
            },
            hidePopup = function () {
                popup.addClass('popup_close-animation');
                window.setTimeout(function () {
                    $('.popup__item_active').removeClass('popup__item_active');
                    popup.removeClass('popup_active');
                }, 200);
                body.removeClass('_popup-active');
            };

        if (popup.length) {
            $(document).on('click', '.js-popup', function (e) {
                e.preventDefault();
                var targetPopup = $(this).data('popup');
                if ($('.popup__item_active').length) {
                    hidePopup();
                    window.setTimeout(function () {
                        showPopup(targetPopup);
                    }, 250)
                } else {
                    showPopup(targetPopup);
                }
            }).on('click', '.popup__overlay', function () {
                hidePopup();
            }).on('click', '.popup__item', function (e) {
                e.stopPropagation();
            }).on('click', '.popup__close', function (e) {
                e.preventDefault();
                hidePopup();
            });
        }
    };

    var initTabs = function () {
        $(document).on('change', '.js-radiotab-control', function () {
            var tabControl = $(this),
                tabsGroup = tabControl.attr('name'),
                tabsContainer = $('[data-tabs="' + tabsGroup + '"]'),
                tabToShow = tabControl.val();

            tabsContainer.find('.js-tab-item').each(function () {
                $(this).removeClass('_active')
            });
            tabsContainer.find('.js-tab-item[data-tab="' + tabToShow + '"]').addClass('_active');
        });
    };

}(jQuery));
