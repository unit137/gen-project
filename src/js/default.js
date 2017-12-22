'use strict';

(function($) {

    $(document).ready(function() {
        initAccordions();
    });

    function initAccordions() {
        $(document).on('click', '.js-accordion', function () {
            if ($(this).parent().hasClass('accordion_opened')) {
                $(this).parent().find('.accordion__content').slideUp(200);
            } else {
                $(this).parent().find('.accordion__content').slideDown(200);
            }
            $(this).parent().toggleClass('accordion_opened');
        });
    }

}(jQuery));

'use strict';

(function($) {

    $(document).ready(function() {
        initAnchors();
    });

    function initAnchors() {
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
    }

}(jQuery));

'use strict';

(function($) {

    $(document).ready(function() {
        equalizeHeight();
    });

    //add class .js-eq-height to parent of elements
    function equalizeHeight() {
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
    }

}(jQuery));

'use strict';

(function($) {

    var windowWidth = $(window).width();

    $(document).ready(function() {

    });

    $(window).on('resize', function () {
        if ($(window).width() !== windowWidth) {
            windowWidth = $(window).width();

        }
    });

    $(window).on('load', function () {

    });

}(jQuery));

'use strict';

(function($) {

    $(document).ready(function() {
        initInputInteractedClasses();
    });

    function initInputInteractedClasses() {
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
    }

}(jQuery));

'use strict';

(function($) {

    $(document).ready(function() {
        initPopups();
    });

    function initPopups() {
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
    }

}(jQuery));

'use strict';

(function($) {

    $(document).ready(function() {
        initTabs();
    });

    function initTabs() {
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
    }

}(jQuery));

//# sourceMappingURL=default.js.map
