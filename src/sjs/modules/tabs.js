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
