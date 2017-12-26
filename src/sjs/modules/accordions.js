'use strict';

var accordions = (function($) {

    return {
        init: function () {
            $(document).on('click', '.js-accordion', function () {
                if ($(this).parent().hasClass('accordion_opened')) {
                    $(this).parent().find('.accordion__content').slideUp(200);
                } else {
                    $(this).parent().find('.accordion__content').slideDown(200);
                }
                $(this).parent().toggleClass('accordion_opened');
            });
        }
    }

})(jQuery);
