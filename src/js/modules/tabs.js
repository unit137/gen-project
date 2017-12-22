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
