'use strict';

var accordions = (function($) {

    return {
        init: function () {
            $(document).on('click', '.js-accordion', function () {
                $(this).parent().toggleClass('accordion_opened').find('.accordion__content').slideToggle(200);
            });
        }
    }

})(jQuery);
