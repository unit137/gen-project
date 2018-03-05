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
