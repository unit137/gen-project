'use strict';

var global = (function($) {

    return {
        windowWidth: $(window).width()
    }

}(jQuery));

'use strict';

var accordions = (function($) {

    return {
        init: function () {
            $(document).on('click', '.js-accordion-trigger', function () {
                var self = $(this),
                    container = self.parents('.js-accordion:first'),
                    content = container.find('.js-accordion-content:first');

                container.toggleClass('_active');
                content.slideToggle(container.data('duration') || 200);
            });
        }
    }

})(jQuery);

'use strict';

var anchors = (function($) {

    return {
        init: function () {
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
    }

})(jQuery);

'use strict';

var inputInteractedClasses = (function($) {

    return {
        init: function () {
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
    }

})(jQuery);

'use strict';

var popups = (function($) {

    return {
        init: function () {
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
    }

})(jQuery);

'use strict';

var tabs = (function($) {

    return {
        init: function () {
            $(document).on('change', '.js-radiotabs-control', function () {
                var self = $(this),
                    container = self.parents('.js-radiotabs'),
                    group = self.attr('name'),
                    content = container.find('[data-tabs="' + group + '"]'),
                    tabs = content.find('.js-radiotabs-item'),
                    tabToShow = self.val();

                tabs.removeClass('_active');
                tabs.eq(tabToShow).addClass('_active');
            });
        }
    }

})(jQuery);

'use strict';

(function($) {

	$(document).ready(function() {
        accordions.init();
        anchors.init();
        inputInteractedClasses.init();
        popups.init();
        tabs.init();
	});

    $(window).on('resize', $.debounce(100, function () {
        if ($(window).width() !== global.windowWidth) {
            global.windowWidth = $(window).width();

        }
    }));

	$(window).on('load', function () {

	});

}(jQuery));

//# sourceMappingURL=default.js.map
